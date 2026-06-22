# Contributing to Black Hole Simulation

We love your input! We want to make contributing to the Black Hole Simulation as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Local Development

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/chrismatgit/black-hole-simulation.git
   cd black-hole-simulation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Make your changes**

   - Follow the existing code style
   - Add TypeScript types for new code
   - Update documentation as needed

5. **Test your changes**
   ```bash
   npm run lint        # Check code quality
   npm run type-check  # Verify TypeScript
   npm run build       # Test production build
   npm run preview     # Preview production build
   ```

## Code Style

### TypeScript

- Use TypeScript for all new code
- Prefer interfaces over type aliases for object shapes
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### React

- Use functional components with hooks
- Follow React best practices
- Use proper prop types and default values
- Prefer composition over inheritance

### CSS

- Use CSS modules or styled-components
- Follow BEM naming convention for plain CSS
- Use CSS variables for theming
- Ensure responsive design

## Physics Implementation

When working on physics-related features:

- **Maintain Physical Accuracy**: Ensure mathematical correctness
- **Document Formulas**: Include references to physics literature
- **Test Edge Cases**: Verify behavior at extreme parameters
- **Performance**: Consider GPU/CPU performance implications

### WebGL Shaders

- Follow GLSL best practices
- Comment complex mathematical operations
- Optimize for mobile GPUs
- Test across different graphics cards

## Testing

### Manual Testing Checklist

- [ ] Desktop navigation works correctly
- [ ] Mobile interface is responsive
- [ ] Physics parameters adjust simulation in real-time
- [ ] Performance is acceptable on target devices
- [ ] No console errors or warnings
- [ ] Proper fallbacks for unsupported features

### Browser Compatibility

Test in these browsers:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest version)
- Edge (latest version)

## Bug Reports

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/chrismatgit/black-hole-simulation/issues).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Bug Report Template

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (please complete the following information):**

- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]
- Device [e.g. iPhone6]

**Additional context**
Add any other context about the problem here.
```

## Feature Requests

We use GitHub issues to track feature requests. Suggest new features by [opening a new issue](https://github.com/chrismatgit/black-hole-simulation/issues).

**Great Feature Requests** include:

- A clear description of the feature
- The problem it solves or value it adds
- Any implementation ideas you might have
- Examples of similar features in other projects

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments to new functions
- Update type definitions
- Include examples in documentation

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code changes that neither fix bugs nor add features
- `perf:` performance improvements
- `test:` adding tests
- `chore:` maintenance tasks

Examples:

```
feat: add gravitational redshift calculation
fix: correct mobile touch event handling
docs: update installation instructions
style: format code with prettier
refactor: extract shader utilities to separate file
perf: optimize ray tracing loop for mobile
```

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to contact the maintainers if you have any questions. You can reach out through:

- GitHub Issues
- GitHub Discussions
- Direct message to maintainers

Thank you for contributing to the Black Hole Simulation project! 🌌
