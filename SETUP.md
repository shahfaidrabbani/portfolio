# Portfolio Setup Guide

This guide will help you set up and customize your portfolio website.

## Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git**

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install all the required packages including:
- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui components
- Lucide React icons
- next-themes

### 2. Customize Your Information

Edit the `lib/data.ts` file to update your personal information:

#### Personal Info
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  description: "Your description...",
  links: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    leetcode: "https://leetcode.com/yourusername",
  }
};
```

#### Experience
Add or modify your work experience in the `experience` array.

#### Education
Update your educational background in the `education` array.

#### Skills
Modify the `skills` object to reflect your tech stack.

#### Projects
Add your projects in the `projects` array. Make sure to:
- Add project images to the `public/projects/` folder
- Update image paths in the data file

#### Achievements
Add your achievements in the `achievements` array.

### 3. Add Your Resume

Replace the placeholder file at `public/resume.pdf` with your actual resume PDF.

### 4. Add Project Images (Optional)

Create a `public/projects/` directory and add your project screenshots:

```bash
mkdir public/projects
```

Then add your images:
- `2048-game.png`
- `sorting-visualizer.png`
- etc.

### 5. Customize Theme Colors (Optional)

Edit `app/globals.css` to customize the color scheme. You can modify the CSS variables for both light and dark themes:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... other variables */
}

.dark {
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
  /* ... other variables */
}
```

### 6. Add Favicon

Replace the placeholder `app/favicon.ico` with your actual favicon. You can generate one at:
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

## Development

### Run the Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Start Production Server

```bash
npm start
```

This runs the production build locally.

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

Vercel will automatically detect Next.js and configure everything!

### Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your values in `.env.local`

3. Add the same variables in your Vercel project settings

## Customization Tips

### Adding New Sections

1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add it to the navigation in `components/Navbar.tsx`

### Changing Animations

All animations use Framer Motion. Modify the `initial`, `animate`, and `transition` props to customize animations.

### Responsive Design

The portfolio is fully responsive. Test on different screen sizes:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Theme Customization

The theme toggle uses `next-themes`. It supports:
- Light mode
- Dark mode
- System preference

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000 (Windows PowerShell)
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Check the terminal for specific errors. Common issues:
- TypeScript type errors
- Missing dependencies
- ESLint warnings

Fix them and try building again.

## Support

If you encounter any issues:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Review the [TailwindCSS Documentation](https://tailwindcss.com/docs)
3. Check [Framer Motion Documentation](https://www.framer.com/motion/)

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

Happy coding! 🚀

