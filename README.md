# Sakthisree J — Portfolio

A clean Vite + React SPA, converted from TanStack Start for easy deployment anywhere.

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Settings will auto-detect:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy** ✅

## Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build settings auto-detected from `netlify.toml`
4. Click **Deploy site** ✅

## Deploy to GitHub Pages

1. Push to GitHub
2. Go to repo **Settings → Pages**
3. Set source to **GitHub Actions**
4. Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Local Development

```bash
npm install
npm run dev
```
