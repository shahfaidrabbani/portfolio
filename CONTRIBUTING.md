# Contributing to Portfolio

Thank you for your interest in contributing to this portfolio project! This document provides guidelines for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please create an issue with:
- Clear description of the enhancement
- Why it would be useful
- Possible implementation approach

### Pull Requests

1. **Fork the repository**

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run build
   npm run dev
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add new feature"
   ```

   Use conventional commits:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for formatting
   - `refactor:` for code refactoring
   - `test:` for tests
   - `chore:` for maintenance

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description
   - Link any related issues
   - Include screenshots if UI changes

## Code Style

### TypeScript
- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary

### React Components
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use meaningful component and prop names

### Styling
- Use TailwindCSS utilities
- Follow the existing design system
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes

### Naming Conventions
- **Components**: PascalCase (e.g., `Hero.tsx`, `ContactForm.tsx`)
- **Functions**: camelCase (e.g., `handleSubmit`, `fetchData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_WIDTH`, `API_URL`)
- **Files**: PascalCase for components, camelCase for utilities

## Project Structure

```
portfolio/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── ...          # Feature components
├── lib/             # Utility functions and data
├── public/          # Static assets
└── styles/          # Global styles (if any)
```

## Development Workflow

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Run production build**
   ```bash
   npm start
   ```

## Testing

Before submitting a PR:
- [ ] Test in development mode
- [ ] Test production build
- [ ] Check for console errors
- [ ] Test responsive design
- [ ] Test theme toggle (light/dark)
- [ ] Test all links and buttons
- [ ] Check accessibility (basic keyboard navigation)

## Accessibility

Please ensure:
- Proper semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Alt text for images

## Performance

Consider:
- Image optimization
- Code splitting
- Lazy loading where appropriate
- Minimize bundle size
- Avoid unnecessary re-renders

## Documentation

If you add new features:
- Update relevant documentation
- Add code comments for complex logic
- Update README if needed

## Questions?

Feel free to:
- Open an issue for questions
- Start a discussion
- Reach out to the maintainer

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Keep discussions professional

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉

