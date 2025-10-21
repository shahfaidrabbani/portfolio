# Quick Start Guide

Get your portfolio up and running in 5 minutes! ⚡

## 1. Install Dependencies (1 min)

```bash
npm install
```

## 2. Customize Your Info (2 min)

Edit `lib/data.ts` and update:

```typescript
export const personalInfo = {
  name: "YOUR NAME HERE",
  title: "YOUR TITLE HERE",
  email: "YOUR EMAIL",
  // ... rest of your info
};
```

## 3. Run Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 4. Deploy to Vercel (1 min)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

That's it! Your portfolio is live! 🚀

---

## Quick Customization Checklist

### Must Do
- [ ] Update `lib/data.ts` with your information
- [ ] Replace `public/resume.pdf` with your resume
- [ ] Test locally with `npm run dev`

### Should Do
- [ ] Add your project images to `public/projects/`
- [ ] Update project data in `lib/data.ts`
- [ ] Customize colors in `app/globals.css` (optional)
- [ ] Add your favicon to `app/favicon.ico`

### Nice to Have
- [ ] Set up custom domain on Vercel
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Create `.env.local` for environment variables
- [ ] Customize theme colors further

---

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start               # Run production build locally
npm run lint            # Check for linting errors

# Deployment
vercel                  # Deploy to Vercel
vercel --prod          # Deploy to production
```

---

## Key Files to Edit

| File | What to Edit |
|------|--------------|
| `lib/data.ts` | All your portfolio content |
| `app/globals.css` | Colors and theme |
| `public/resume.pdf` | Your resume |
| `public/projects/` | Project images |

---

## Need Help?

- 📖 Full Documentation: `README.md`
- 🛠️ Setup Guide: `SETUP.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 🏗️ Architecture: `PROJECT_STRUCTURE.md`

---

## Pro Tips

1. **Test locally first**: Always run `npm run dev` to preview changes
2. **Use TypeScript**: Your editor will help catch errors
3. **Check mobile**: Test responsive design on different screen sizes
4. **Keep it updated**: Regularly update your projects and experience
5. **Optimize images**: Compress images before adding to `public/`

---

## One-Liner Deployment

```bash
git add . && git commit -m "Update portfolio" && git push && vercel --prod
```

---

Happy coding! ✨

