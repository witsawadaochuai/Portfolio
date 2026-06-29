# Witsawa Daochuai Portfolio

React + Vite + Tailwind portfolio website for Witsawa Daochuai.

The site was converted from a static resume page into a structured portfolio app. Portfolio content was consolidated from:

- `C:\Users\witsa\Desktop\Resume_CV\Result`
- `C:\Users\witsa\Desktop\Resume_CV\Job-Prep-2026`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- lucide-react
- GitHub Actions + GitHub Pages
- Netlify

## Structure

- `src/data/portfolio.ts` - portfolio content
- `src/components/` - page sections
- `src/styles.css` - Tailwind theme and shared component classes
- `public/assets/portfolio/` - portfolio visuals
- `public/assets/Resume-Witsawa-Daochuai.pdf` - resume PDF
- `.github/workflows/deploy.yml` - GitHub Pages deployment
- `netlify.toml` - Netlify build and SPA redirect config

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

The repo is configured for Netlify and GitHub Pages.

### Netlify

Netlify should use:

- Build command: `npm run build`
- Publish directory: `dist`

The `netlify.toml` file already contains these settings.

### GitHub Pages

In GitHub, set Pages source to **GitHub Actions**. After pushing to `main` or `master`, the workflow builds the Vite app and deploys `dist/`.
