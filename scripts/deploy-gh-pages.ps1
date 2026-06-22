param(
  [string]$Remote = "origin",
  [string]$Branch = "gh-pages",
  [string]$DistDir = "dist",
  [string]$BasePath = "",
  [switch]$SkipBuild,
  [switch]$NoPush
)

$ErrorActionPreference = "Stop"

function Invoke-CommandChecked {
  param(
    [string]$FilePath,
    [string[]]$Arguments,
    [string]$WorkingDirectory = (Get-Location).Path
  )

  Write-Host "> $FilePath $($Arguments -join ' ')"
  Push-Location $WorkingDirectory
  try {
    & $FilePath @Arguments
    if ($LASTEXITCODE -ne 0) {
      throw "Command failed with exit code $LASTEXITCODE`: $FilePath $($Arguments -join ' ')"
    }
  } finally {
    Pop-Location
  }
}

function Get-CommandOutput {
  param(
    [string]$FilePath,
    [string[]]$Arguments,
    [string]$WorkingDirectory = (Get-Location).Path
  )

  Push-Location $WorkingDirectory
  try {
    $output = & $FilePath @Arguments
    if ($LASTEXITCODE -ne 0) {
      throw "Command failed with exit code $LASTEXITCODE`: $FilePath $($Arguments -join ' ')"
    }
    return ($output -join "`n").Trim()
  } finally {
    Pop-Location
  }
}

function Get-RepositoryNameFromRemote {
  param([string]$RemoteUrl)

  $normalized = $RemoteUrl.TrimEnd("/")
  if ($normalized.EndsWith(".git")) {
    $normalized = $normalized.Substring(0, $normalized.Length - 4)
  }

  $lastSlash = $normalized.LastIndexOf("/")
  $lastColon = $normalized.LastIndexOf(":")
  $separator = [Math]::Max($lastSlash, $lastColon)
  if ($separator -lt 0 -or $separator -ge $normalized.Length - 1) {
    throw "Could not infer repository name from remote URL: $RemoteUrl"
  }

  return $normalized.Substring($separator + 1)
}

function Normalize-BasePath {
  param([string]$Path)

  if ([string]::IsNullOrWhiteSpace($Path)) {
    return "/"
  }

  $normalized = $Path.Trim()
  if (-not $normalized.StartsWith("/")) {
    $normalized = "/$normalized"
  }
  if (-not $normalized.EndsWith("/")) {
    $normalized = "$normalized/"
  }

  return $normalized
}

function Invoke-ProjectBuild {
  param([string]$RepoRoot)

  $npm = Get-Command npm -ErrorAction SilentlyContinue
  if ($npm) {
    Invoke-CommandChecked -FilePath $npm.Source -Arguments @("run", "build") -WorkingDirectory $RepoRoot
    return
  }

  $tsc = Join-Path $RepoRoot "node_modules\.bin\tsc.cmd"
  $vite = Join-Path $RepoRoot "node_modules\.bin\vite.cmd"
  if ((Test-Path -LiteralPath $tsc) -and (Test-Path -LiteralPath $vite)) {
    Invoke-CommandChecked -FilePath $tsc -Arguments @("-b") -WorkingDirectory $RepoRoot
    Invoke-CommandChecked -FilePath $vite -Arguments @("build") -WorkingDirectory $RepoRoot
    return
  }

  throw "Could not find npm or local node_modules\.bin build tools. Install Node.js/npm and run npm install first."
}

function Copy-DistToWorktree {
  param(
    [string]$DistPath,
    [string]$WorktreePath
  )

  Get-ChildItem -LiteralPath $WorktreePath -Force |
    Where-Object { $_.Name -ne ".git" } |
    Remove-Item -Recurse -Force

  Get-ChildItem -LiteralPath $DistPath -Force |
    Copy-Item -Destination $WorktreePath -Recurse -Force
}

$gitCommand = Get-Command git -ErrorAction Stop
$git = $gitCommand.Source
$repoRoot = Get-CommandOutput -FilePath $git -Arguments @("rev-parse", "--show-toplevel")
$remoteUrl = Get-CommandOutput -FilePath $git -Arguments @("remote", "get-url", $Remote) -WorkingDirectory $repoRoot

if ([string]::IsNullOrWhiteSpace($BasePath)) {
  $repoName = Get-RepositoryNameFromRemote -RemoteUrl $remoteUrl
  $BasePath = "/$repoName/"
}
$BasePath = Normalize-BasePath -Path $BasePath

Write-Host "Remote: $Remote ($remoteUrl)"
Write-Host "Deploy branch: $Branch"
Write-Host "GitHub Pages base path: $BasePath"

$previousBasePath = $env:GITHUB_PAGES_BASE
$worktreePath = Join-Path ([System.IO.Path]::GetTempPath()) ("black-hole-gh-pages-" + [Guid]::NewGuid().ToString("N"))

try {
  $env:GITHUB_PAGES_BASE = $BasePath

  if ($SkipBuild) {
    Write-Host "Skipping build because -SkipBuild was provided."
  } else {
    Invoke-ProjectBuild -RepoRoot $repoRoot
  }

  $distPath = Join-Path $repoRoot $DistDir
  if (-not (Test-Path -LiteralPath $distPath -PathType Container)) {
    throw "Build output directory was not found: $distPath"
  }

  New-Item -ItemType File -Path (Join-Path $distPath ".nojekyll") -Force | Out-Null

  & $git ls-remote --exit-code --heads $Remote $Branch *> $null
  if ($LASTEXITCODE -eq 0) {
    $remoteBranchExists = $true
  } elseif ($LASTEXITCODE -eq 2) {
    $remoteBranchExists = $false
  } else {
    throw "Could not query $Remote/$Branch. Check your network connection and GitHub authentication."
  }

  if ($remoteBranchExists) {
    Invoke-CommandChecked -FilePath $git -Arguments @("fetch", $Remote, $Branch) -WorkingDirectory $repoRoot
    Invoke-CommandChecked -FilePath $git -Arguments @("worktree", "add", "--force", "-B", $Branch, $worktreePath, "$Remote/$Branch") -WorkingDirectory $repoRoot
  } else {
    Invoke-CommandChecked -FilePath $git -Arguments @("worktree", "add", "--force", "--detach", $worktreePath, "HEAD") -WorkingDirectory $repoRoot
    Invoke-CommandChecked -FilePath $git -Arguments @("-C", $worktreePath, "checkout", "--orphan", $Branch) -WorkingDirectory $repoRoot
  }

  Copy-DistToWorktree -DistPath $distPath -WorktreePath $worktreePath

  Invoke-CommandChecked -FilePath $git -Arguments @("-C", $worktreePath, "add", "-A") -WorkingDirectory $repoRoot
  $status = Get-CommandOutput -FilePath $git -Arguments @("-C", $worktreePath, "status", "--porcelain") -WorkingDirectory $repoRoot

  if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "No gh-pages changes to publish."
  } else {
    $sourceCommit = Get-CommandOutput -FilePath $git -Arguments @("rev-parse", "--short", "HEAD") -WorkingDirectory $repoRoot
    Invoke-CommandChecked -FilePath $git -Arguments @("-C", $worktreePath, "commit", "-m", "Deploy GitHub Pages from $sourceCommit") -WorkingDirectory $repoRoot

    if ($NoPush) {
      Write-Host "Created deployment commit locally. Skipping push because -NoPush was provided."
    } else {
      Invoke-CommandChecked -FilePath $git -Arguments @("-C", $worktreePath, "push", $Remote, "HEAD:$Branch") -WorkingDirectory $repoRoot
      Write-Host "Published $DistDir to $Remote/$Branch."
    }
  }
} finally {
  if ($null -eq $previousBasePath) {
    Remove-Item Env:\GITHUB_PAGES_BASE -ErrorAction SilentlyContinue
  } else {
    $env:GITHUB_PAGES_BASE = $previousBasePath
  }

  if (Test-Path -LiteralPath $worktreePath) {
    & $git -C $repoRoot worktree remove --force $worktreePath *> $null
    if (Test-Path -LiteralPath $worktreePath) {
      Remove-Item -LiteralPath $worktreePath -Recurse -Force
    }
  }
}
