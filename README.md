# Kathy & Hemant — Wedding Website

A React + Vite site styled after the wedding reception invitation
(navy/gold type, indigo watercolor wash, gold frame).

## Structure

```
src/
  components/
    Background.jsx   watercolor wash + gold frame
    Hero.jsx          names, date, location
    Details.jsx       event info cards (date, location, attire, gifts — no registry)
    RSVP.jsx          RSVP form (front-end only, no backend wired up yet)
    Footer.jsx
    useReveal.js       scroll-reveal hook
  fonts/               self-hosted woff2 files (latin subset only)
  fonts.css            @font-face declarations
  styles.css           all page styling
  App.jsx
  main.jsx
```

Fonts used (matched to the original invitation):
- **Playfair Display** — the tall, high-contrast serif for "Kathy" / "Hemant" / headings
- **Pinyon Script** — the loose brush script for "and" between the names
- **EB Garamond** — body copy
- **Cormorant SC** — small-caps labels (eyebrows, field labels, buttons)

All fonts are self-hosted (no Google Fonts CDN at runtime) and subset to
Latin glyphs only to keep the build small. Licensed under the SIL Open
Font License — see `src/fonts/LICENSE.txt`.

## Commands

```bash
npm install     # install dependencies
npm run dev     # local dev server with hot reload
npm run build   # builds static site to dist/
npm run preview # preview the production build locally
```

`npm run build` outputs a fully self-contained static site to `dist/` —
just `index.html` plus an `assets/` folder. It uses relative paths, so
you can open `dist/index.html` directly or upload the `dist/` folder
to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## To customize

- **Real event details**: edit `src/components/Hero.jsx` and
  `src/components/Details.jsx` — currently using placeholders
  (Street, City, State / Venue Name).
- **RSVP backend**: `src/components/RSVP.jsx` has a `handleSubmit`
  function with a comment marking where to add a real `fetch()` call
  to your RSVP endpoint (e.g. a serverless function, Formspree, Google
  Sheets webhook, etc.). Right now it only shows a thank-you message
  locally.
