# Project Structure

This document provides a detailed overview of the portfolio project structure.

## Directory Tree

```
portfolio/
├── app/                          # Next.js 14 App Directory
│   ├── layout.tsx               # Root layout with providers and metadata
│   ├── page.tsx                 # Home page (main entry point)
│   ├── globals.css              # Global styles and CSS variables
│   └── favicon.ico              # Site favicon
│
├── components/                   # React Components
│   ├── ui/                      # shadcn/ui Base Components
│   │   ├── button.tsx          # Button component with variants
│   │   ├── card.tsx            # Card components (Card, CardHeader, etc.)
│   │   ├── input.tsx           # Input component for forms
│   │   ├── textarea.tsx        # Textarea component for forms
│   │   └── badge.tsx           # Badge component for tags
│   │
│   ├── Hero.tsx                 # Hero section with animated background
│   ├── About.tsx                # About section with education & achievements
│   ├── Experience.tsx           # Experience timeline with work history
│   ├── Projects.tsx             # Projects showcase with cards
│   ├── Skills.tsx               # Skills section with tech stack
│   ├── Contact.tsx              # Contact form and information
│   ├── Navbar.tsx               # Navigation bar with smooth scroll
│   ├── Footer.tsx               # Footer with social links
│   └── ThemeToggle.tsx          # Dark/Light theme toggle button
│
├── lib/                         # Utilities and Data
│   ├── utils.ts                # Utility functions (cn helper)
│   └── data.ts                 # Portfolio content and resume data
│
├── public/                      # Static Assets
│   ├── resume.pdf              # Downloadable resume
│   └── projects/               # Project images (to be added)
│
├── Configuration Files
├── .gitignore                  # Git ignore rules
├── .eslintrc.json             # ESLint configuration
├── components.json            # shadcn/ui configuration
├── next.config.js             # Next.js configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── vercel.json                # Vercel deployment configuration
│
└── Documentation
    ├── README.md              # Main documentation
    ├── SETUP.md              # Setup and customization guide
    ├── DEPLOYMENT.md         # Deployment guide for various platforms
    ├── CONTRIBUTING.md       # Contribution guidelines
    ├── PROJECT_STRUCTURE.md  # This file
    └── LICENSE               # MIT License
```

## Key Directories

### `/app`
The Next.js 14 App Directory containing:
- **layout.tsx**: Root layout with theme provider, fonts, and metadata
- **page.tsx**: Main home page composing all sections
- **globals.css**: Global CSS with Tailwind directives and custom styles

### `/components`
All React components organized by function:

#### `/components/ui`
Reusable UI components from shadcn/ui:
- Form inputs (Input, Textarea)
- Layout components (Card, Button, Badge)
- Fully typed with TypeScript
- Styled with Tailwind variants

#### Section Components
Main page sections:
- **Hero**: Landing section with CTA buttons
- **About**: Education and achievements
- **Experience**: Work history timeline
- **Projects**: Portfolio showcase
- **Skills**: Technology stack
- **Contact**: Contact form and info

#### Layout Components
- **Navbar**: Fixed navigation with smooth scroll
- **Footer**: Social links and copyright
- **ThemeToggle**: Theme switcher

### `/lib`
Utility functions and data:
- **utils.ts**: Helper functions (className merger)
- **data.ts**: All portfolio content and resume data

### `/public`
Static assets served directly:
- Resume PDF
- Project images
- Any other static files

## Configuration Files

### Next.js Configuration
- **next.config.js**: Image domains, React strict mode
- **next-env.d.ts**: TypeScript declarations for Next.js

### TypeScript
- **tsconfig.json**: Compiler options, path aliases

### Tailwind CSS
- **tailwind.config.js**: Theme customization, colors, animations
- **postcss.config.js**: PostCSS plugins

### Linting & Formatting
- **.eslintrc.json**: ESLint rules

### Package Management
- **package.json**: Dependencies, scripts, metadata

### Deployment
- **vercel.json**: Vercel deployment configuration
- **.gitignore**: Files to exclude from Git

## Component Architecture

### Component Hierarchy

```
App (layout.tsx)
└── Page (page.tsx)
    ├── Navbar
    │   └── ThemeToggle
    ├── Hero
    ├── About
    ├── Experience
    ├── Projects
    ├── Skills
    ├── Contact
    └── Footer
```

### Component Patterns

1. **Server Components** (default)
   - Static content
   - Data fetching
   - SEO-optimized

2. **Client Components** (`"use client"`)
   - Interactive elements
   - Animations (Framer Motion)
   - Theme toggling
   - Form handling

## Data Flow

```
lib/data.ts
    ↓
Components (import data)
    ↓
Render UI
```

All content is centralized in `lib/data.ts` for easy maintenance.

## Styling Architecture

### Tailwind Utilities
- Primary styling method
- Utility-first approach
- Responsive modifiers

### CSS Variables
- Defined in `globals.css`
- Theme-aware colors
- Dark/light mode support

### Custom Animations
- Defined in `tailwind.config.js`
- Float animation
- Gradient animation
- Framer Motion for component animations

## Routing

Next.js 14 App Router (file-based):
- `/` → `app/page.tsx` (Home page)
- Single-page application
- Smooth scroll navigation between sections

## State Management

- **Theme**: next-themes (light/dark/system)
- **Form**: Local useState in Contact component
- **Navigation**: No global state needed (single page)

## Type Safety

- Full TypeScript coverage
- Typed components and props
- Type-safe data structures
- Strict TypeScript configuration

## Build Output

```
.next/
├── cache/              # Build cache
├── server/            # Server components
├── static/            # Static assets
└── ...
```

## Performance Optimizations

1. **Server-Side Rendering** (Next.js)
2. **Static Generation** where possible
3. **Image Optimization** (Next.js Image)
4. **Code Splitting** (automatic with Next.js)
5. **Tree Shaking** (removes unused code)
6. **CSS Purging** (Tailwind removes unused styles)

## Accessibility Features

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Skip links (can be added)
- Color contrast compliance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features
- CSS Grid and Flexbox
- CSS Variables

## Development Tools

- **TypeScript**: Type checking
- **ESLint**: Code linting
- **Prettier** (optional): Code formatting
- **Next.js Dev Server**: Hot reload

## Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Scripts

```json
{
  "dev": "next dev",           // Development server
  "build": "next build",       // Production build
  "start": "next start",       // Production server
  "lint": "next lint"          // Run ESLint
}
```

## Dependencies Overview

### Core
- **next**: React framework
- **react**: UI library
- **typescript**: Type safety

### Styling
- **tailwindcss**: Utility CSS
- **tailwindcss-animate**: Animation utilities
- **class-variance-authority**: Component variants
- **clsx**: Conditional classes
- **tailwind-merge**: Merge Tailwind classes

### UI & Animations
- **framer-motion**: Smooth animations
- **lucide-react**: Icon library
- **next-themes**: Theme management

### Development
- **@types/\***: TypeScript type definitions
- **eslint**: Code linting
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS processing

## File Naming Conventions

- **Components**: PascalCase (`Hero.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Config files**: kebab-case (`tailwind.config.js`)
- **Documentation**: UPPERCASE (`README.md`)

## Best Practices

1. Keep components small and focused
2. Extract reusable logic to utilities
3. Use TypeScript for type safety
4. Follow React best practices
5. Maintain consistent code style
6. Document complex logic
7. Test thoroughly before deploying

---

This structure provides a solid foundation for a modern, performant, and maintainable portfolio website.

