# 🚀 Shahfaid Rabbani - Premium Portfolio Website

A modern, premium personal portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Showcasing expertise as a Software Developer with Angular, TypeScript, and modern web technologies.

## ✨ Features

- 🎨 **Premium Design**: Modern, clean UI with glassmorphism effects and smooth animations
- 🌓 **Dark/Light Theme**: Elegant theme toggle with smooth transitions
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized**: Server-side rendering with Next.js for blazing-fast load times
- 🎭 **Smooth Animations**: Framer Motion for buttery-smooth scroll and hover animations
- 🔍 **SEO Optimized**: Meta tags, OpenGraph, and structured data for better discoverability
- 📊 **Interactive Sections**: 
  - Hero with animated background
  - About Me with story-driven content
  - Experience timeline with achievements
  - Projects showcase with live demos
  - Tech stack visualization
  - Contact form with social links
- 🚀 **Deploy Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React with SSR)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shahfaidrabbani/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site favicon
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About Me section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Tech stack section
│   ├── Contact.tsx         # Contact form
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   └── ThemeToggle.tsx     # Theme switcher
├── lib/
│   ├── utils.ts            # Utility functions
│   └── data.ts             # Resume data and content
├── public/
│   ├── resume.pdf          # Downloadable resume
│   └── projects/           # Project screenshots
├── styles/
│   └── animations.css      # Custom animations
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `lib/data.ts` to update your personal information:

```typescript
export const personalInfo = {
  name: "Shahfaid Rabbani",
  title: "Software Developer | Angular | TypeScript | NgRx",
  email: "shahfaidrabbani@gmail.com",
  phone: "+91 9756903692",
  location: "Noida, India",
  links: {
    linkedin: "https://in.linkedin.com/in/shahfaid-rabbani-94696b229",
    github: "https://github.com/shahfaidrabbani/",
    leetcode: "https://leetcode.com/rabbani__faid/",
  }
};
```

### Add Projects

Add your projects in `lib/data.ts`:

```typescript
export const projects = [
  {
    title: "2048 Game",
    description: "Single-player sliding block puzzle game",
    image: "/projects/2048-game.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://shahfaidrabbani.github.io/2048-game/",
    githubUrl: "https://github.com/shahfaidrabbani/2048-game",
  },
  // Add more projects...
];
```

### Modify Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      }
    }
  }
}
```

## 📝 Content Guidelines

### Resume Information

The portfolio is built based on this resume structure:

**Education**
- Netaji Subhas University of Technology (B.Tech IT, CGPA: 8.53)
- Jamia Senior Secondary School (84%)

**Experience**
- **Standard Chartered Research and Technology India Private Limited (SOLV)** - Software Developer (Aug 2024 – Present)
  - Led end-to-end frontend revamp of the intra-city seller portal using Angular, TypeScript, RxJS, Angular Material
  - Designed and maintained internal Angular component library integrated via AWS CodeArtifact
  - Implemented dynamic filtering and sorting system across 17+ order buckets (60% load reduction)
  - Developed Sales Officer dashboard with charting libraries for logistics analysis
  - Applied NgRx for global state management and RxJS observables for reactive UI updates
  - Achieved 90%+ unit test coverage using Jasmine and Karma

- **Standard Chartered Research and Technology India Private Limited (SOLV)** - Graduate Engineer Trainee (Feb 2024 – Aug 2024)
  - Revamped seller portal with Angular, TypeScript, and Angular Material
  - Optimized API calls using parallel fetching, caching, and lazy loading (50% faster render time)
  - Built dynamic, reusable catalog module with REST API integration

**Technical Skills**
- Languages: TypeScript, JavaScript, C++, SQL, HTML5, CSS3
- Frameworks: Angular, NgRx, RxJS, Angular Material, Bootstrap, Node.js
- Tools: Git, GitHub, Bitbucket, Jira, Confluence, Postman, Jasmine, Karma
- Concepts: RESTful APIs, Agile, State Management, DSA, OOP, DBMS

**Projects**
1. 2048 Game - HTML, CSS, JavaScript
2. Sorting Visualizer - HTML, CSS, JavaScript

**Achievements**
- Project Champion Award at Standard Chartered Research & Technology Pvt. Ltd India(SOLV)
- 400+ problems solved on LeetCode (Top 10%, Rating: 1747)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Add environment variables if needed

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- Railway
- Render
- AWS Amplify
- Google Cloud Run

## 🔧 Configuration Files

### next.config.js
```javascript
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'github.com'],
  },
}
```

### tailwind.config.js
```javascript
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Guidelines

- Use `framer-motion` for scroll animations
- Add `initial`, `whileInView`, and `viewport` props
- Keep animations subtle and professional
- Use `ease-in-out` for smooth transitions

## 📊 Performance Optimization

- Images optimized with Next.js Image component
- Lazy loading for sections below the fold
- Code splitting with Next.js dynamic imports
- Minified CSS and JavaScript in production
- Server-side rendering for faster initial load

## 🔍 SEO Configuration

Located in `app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Shahfaid Rabbani | Software Developer',
  description: 'Software Developer specializing in Angular, TypeScript, NgRx, and modern web technologies.',
  keywords: ['Software Developer', 'Frontend Developer', 'Angular', 'TypeScript', 'NgRx', 'Web Development'],
  openGraph: {
    title: 'Shahfaid Rabbani | Software Developer',
    description: 'Software Developer specializing in Angular, TypeScript, NgRx',
    url: 'https://shahfaidrabbani.com',
    type: 'website',
  },
}
```

## 🐛 Troubleshooting

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
npm run build
# Check the error logs and fix TypeScript/ESLint issues
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shahfaidrabbani/portfolio/issues).

## 📞 Contact

**Shahfaid Rabbani**
- Email: shahfaidrabbani@gmail.com
- LinkedIn: [linkedin.com/in/shahfaid-rabbani-94696b229](https://in.linkedin.com/in/shahfaid-rabbani-94696b229)
- GitHub: [github.com/shahfaidrabbani](https://github.com/shahfaidrabbani/)
- LeetCode: [leetcode.com/rabbani__faid](https://leetcode.com/rabbani__faid/)

## 🌟 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)

---

**⭐ If you like this portfolio template, please give it a star on GitHub!**

Built with ❤️ by Shahfaid Rabbani

