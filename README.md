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

Use `npm run lint` to check the source and `npm run build` to produce the production build. After building, `npm run start` serves the production site.

## Social sharing

Set `SITE_URL` to the portfolio's actual public origin (including `https://`) in the deployment build environment so social image URLs use the correct domain. Locally, it can be `http://localhost:3000` in `.env.local`. Next.js supplies its default metadata origin when this variable is omitted. The public portfolio domain has not been set in this checkout.

The project descriptions are based on the supplied screenshots, local project source and original portfolio content. Hatid's screenshot shows the manual stop-selection view with maps not configured; it does not demonstrate live routing. The Hatid source link points to its frontend repository. Work experience retains the original supplied text.
