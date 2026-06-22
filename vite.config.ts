import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const githubPagesBase = process.env.GITHUB_PAGES_BASE ?? '/black-hole/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configure base URL for different deployment platforms
  // GitHub Pages: Use repository name, overridden by deploy script when needed.
  // Vercel: Use root path (/)
  // Local development: Use root path (/)
  base: process.env.VERCEL
    ? '/'
    : process.env.NODE_ENV === 'production'
    ? githubPagesBase
    : '/',

  server: {
    host: true,
    port: 5173,
  },

  build: {
    outDir: 'dist',
    // Ensure assets are properly referenced
    assetsDir: 'assets',
  },

  assetsInclude: ['**/*.glsl'],

  // Ensure proper handling of public assets
  publicDir: 'public',
});
