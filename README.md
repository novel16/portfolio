# Novel Chavez · Portfolio

A single-page portfolio built with the Next.js App Router, TypeScript, and Tailwind CSS 4. Its content and portrait come from the supplied `welcome.blade.php` and `htdocs` assets.

## Run locally

```powershell
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update the content

- `app/portfolio-data.ts`: contact details, projects, roles, and skills.
- `app/page.tsx`: the page layout and introduction.
- `public/projects/`: the four supplied, unedited project screenshots. Project image dimensions, captions, problem/solution descriptions, features and public source links live in `app/portfolio-data.ts`. Set `featured: true` to give a screenshot project a wide featured card. Screenshot links open the original at full size; native project details work without JavaScript.
- `app/opengraph-image.tsx`: the charcoal and teal social sharing card, generated with Next.js.
- `public/frontend/assets/images/profile.jpg` and `public/frontend/assets/cv/novelchavez-cv.pdf`: portrait and public CV. Keep private reference details out of the public CV.

Use `npm run check` for lint and TypeScript checks. `npm run build` and `npm run start` remain available for a normal Next.js production build.

## Cloudflare deployment

- Production site: https://portfolio.meawkimeawchavez1996.workers.dev
- Worker: `portfolio`, configured in `cloudflare.config.ts`.
- Source: `novel16/portfolio`, production branch `main`, repository root `/`.
- Cloudflare Workers Builds installs from `package-lock.json`, runs `npm run check`, then `npm run deploy:cloudflare` to build with vinext and deploy the Worker.
- Builds use Node.js `24.22.1`; previews are disabled. Future pushes to `main` automatically trigger deployment. Check the Worker’s Builds history for progress and failures; a failed build leaves the previous deployment active.
- Authentication is managed by Cloudflare's GitHub integration and stored build credential, never by a token committed to this repository.

For a local Cloudflare build, run `npm run build:vinext`. To preview that build, run `npm run start:vinext`. To deploy manually after `cf auth login`, run `npm run check` followed by `npm run deploy:cloudflare`. Use Node.js 24.22.1 or later. On Windows machines using an installed corporate/local root certificate, set `NODE_USE_SYSTEM_CA=1` for the terminal instead of disabling TLS verification.

Next.js development remains `npm run dev`. The Cloudflare build uses `vite.config.ts` and PostCSS for Tailwind; the existing Next.js build uses its Turbopack CSS loader. Original screenshots are served by the Worker without a separate Cloudflare Images binding.

## Social sharing

The metadata origin defaults to the production `workers.dev` URL above. Set `SITE_URL` to override it when moving to a custom domain, and verify the generated canonical and social image URLs after deployment. Locally, it can be `http://localhost:3000` in `.env.local`.

The project descriptions are based on the supplied screenshots, local project source and original portfolio content. Hatid's screenshot shows the manual stop-selection view with maps not configured; it does not demonstrate live routing. The Hatid source link points to its frontend repository. Work experience retains the original supplied text.
