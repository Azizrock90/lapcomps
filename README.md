# Static Site Starter (GitHub + Netlify)

This is a minimal starter you can push to GitHub and deploy on Netlify.

## What's inside
- `public/index.html` – your homepage
- `public/styles.css` – basic styling
- `public/script.js` – a small JS file
- `netlify.toml` – tells Netlify to publish the `public` folder

## Quick start
1. Put your website files into the `public/` folder (keep `index.html` there).
2. Initialize a git repo and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On Netlify, choose **Add new site → Import from Git**, connect GitHub, select your repo.
4. In **Build settings**:
   - Build command: *(leave empty)*
   - Publish directory: `public`
5. Click **Deploy**. Your site will be live on a `*.netlify.app` URL.

## SPA routing (optional)
If you later convert this into a Single Page App (React/Vue), uncomment the `[[redirects]]` block in `netlify.toml` to ensure client-side routes work.
