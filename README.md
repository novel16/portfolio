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
- `public/frontend/assets/images/profile.jpg` and `public/frontend/assets/cv/novelchavez-cv.pdf`: portrait and public CV. Keep private reference details out of the public CV.

Use `npm run lint` to check the source and `npm run build` to produce the production build. After building, `npm run start` serves the production site.
