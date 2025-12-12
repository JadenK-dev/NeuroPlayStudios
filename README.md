# NeuroPlay Studios — Website Template

This repository contains a production-ready static website template for NeuroPlay Studios.

What this includes
- index.html, about.html, games.html, team.html, contact.html, games/untitled.html
- css/styles.css, js/main.js
- manifest.json, robots.txt, sitemap.xml
- icons: (not included; instructions below to export PNGs from assets/logo.svg)
- LICENSE (MIT)

Required steps before preview
1. Put your exact logo (or the SVG I provided) at `assets/logo.svg` (or use the raster you uploaded).
2. Export PNG icons (recommended via Inkscape) into `assets/` with these filenames:
   - logo-512.png
   - logo-192.png
   - logo-180.png
   - logo-128.png
   - logo-64.png
   - logo-32.png
   - favicon.ico (optional)

   Example Inkscape commands:
   ```
   mkdir -p assets
   inkscape assets/logo.svg --export-filename=assets/logo-512.png -w 512
   inkscape assets/logo.svg --export-filename=assets/logo-192.png -w 192
   inkscape assets/logo.svg --export-filename=assets/logo-180.png -w 180
   inkscape assets/logo.svg --export-filename=assets/logo-128.png -w 128
   inkscape assets/logo.svg --export-filename=assets/logo-64.png -w 64
   inkscape assets/logo.svg --export-filename=assets/logo-32.png -w 32
   inkscape assets/logo.svg --export-filename=assets/logo-48.png -w 48
   convert assets/logo-32.png assets/logo-48.png assets/logo-16.png assets/favicon.ico
   ```

   If you prefer to use the raster you uploaded, resize that image with ImageMagick:
   ```
   convert -density 300 assets/logo-raster.png -resize 512x512 assets/logo-512.png
   ...
   ```

3. Serve locally and preview:
   ```
   python3 -m http.server 8000
   # open http://localhost:8000
   ```

4. Update contact form endpoint (Formspree or your backend) in contact.html and index.html.

Deployment
- Quick: Push this repository to GitHub and enable GitHub Pages from the gh-pages branch or use the GitHub Actions workflow (example .github/workflows/deploy.yml included below).
- Or deploy to Netlify/Vercel by connecting the repo.

Optional next steps I can do for you
- Export PNGs and package everything into a zip (I can generate commands or accept your SVG to export).
- Convert wordmark to outlines in the SVG so font-free exports match exactly.
- Add analytics, a newsletter backend, or server-side leaderboards for Untitled.

If you want me to export the PNGs for you, upload the final SVG (or the exact raster) and I’ll produce the PNGs and favicon files sized and optimized.