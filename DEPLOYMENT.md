# Deployment Guide

This guide covers multiple deployment options for your Next.js portfolio.

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Self-Hosting](#self-hosting)
- [Other Platforms](#other-platforms)

---

## Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: Using Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Done!** Your site will be live at `your-project.vercel.app`

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS settings as instructed
5. Vercel will handle SSL automatically

---

## Netlify

### Using Netlify Dashboard

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `.next` folder

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## GitHub Pages

GitHub Pages doesn't natively support Next.js server-side features, but you can deploy a static export.

### Configuration

1. **Update `next.config.js`**:
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/portfolio', // Replace with your repo name
     assetPrefix: '/portfolio/',
   }
   ```

2. **Add `.nojekyll` file to public**:
   ```bash
   touch public/.nojekyll
   ```

3. **Update `package.json`**:
   ```json
   {
     "scripts": {
       "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
     }
   }
   ```

4. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## Self-Hosting

### Using PM2 (Node.js Process Manager)

1. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Start with PM2**:
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

Build and run:

```bash
docker-compose up -d
```

### Using Nginx Reverse Proxy

1. **Build the project**:
   ```bash
   npm run build
   npm start
   ```

2. **Configure Nginx** (`/etc/nginx/sites-available/portfolio`):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable and restart Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## Other Platforms

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway init
railway up
```

### Render

1. Create a new "Web Service" on [render.com](https://render.com)
2. Connect your GitHub repository
3. Configure:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
4. Deploy

### AWS Amplify

1. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Connect your repository
3. Amplify will auto-detect Next.js
4. Deploy

### Google Cloud Run

```bash
# Build Docker image
docker build -t gcr.io/YOUR-PROJECT-ID/portfolio .

# Push to Google Container Registry
docker push gcr.io/YOUR-PROJECT-ID/portfolio

# Deploy to Cloud Run
gcloud run deploy portfolio \
  --image gcr.io/YOUR-PROJECT-ID/portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Environment Variables

For all deployment platforms, remember to set environment variables if needed:

```bash
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Setting Environment Variables:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Railway**: Project Settings → Variables
- **Render**: Environment → Environment Variables

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections are visible
- [ ] Links work (social media, projects)
- [ ] Contact form works (if using a service)
- [ ] Resume download works
- [ ] Theme toggle works
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics configured (optional)

---

## Monitoring & Analytics (Optional)

### Google Analytics

Add to `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics

# Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

// In the body
<Analytics />
```

---

## Troubleshooting

### Build Errors
- Check Node.js version (18.x or higher)
- Ensure all dependencies are installed
- Check for TypeScript errors

### Performance Issues
- Enable caching
- Optimize images
- Use CDN for static assets

### 404 Errors
- Check `next.config.js` settings
- Verify routing configuration
- Check build output

---

## Support

For deployment-specific issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

Happy deploying! 🚀

