# Project showcase implementation plan

> Execute inline using superpowers:executing-plans; review with verification-before-completion.

**Goal:** Replace illustrations with the user's four screenshots and explain the problems each project addresses.

**Design / spec:** Keep charcoal + teal, original experience text, contacts and CV. Give Tindatala and Hatid wide featured cards, followed by Booking and Ecommerce screenshot cards. Native expandable Project details show Problem, Solution and Key features. Screenshot links open the original image at full size. Keep the other three projects as compact rows with the same details pattern. Add verified public repository links and a branded social image. No deployment, new dependencies or modifications to reference projects.

**Architecture:** Extend app/portfolio-data.ts with screenshots, featured flags, repository links and details. Reuse small server-rendered helpers in app/page.tsx and native details/summary. Use next/image with intrinsic dimensions and next/og for the share image.

**Tech stack:** Existing Next.js 16, React 19, TypeScript, Tailwind CSS 4.

## Tasks

- [x] Copy the four exact PNG attachments to public/projects; retain originals without cropping or retouching. Image five is layout reference only.
- [x] Add source-grounded problem/solution/features to all seven projects; mark Tindatala and Hatid featured. Add public GitHub links for Booking, Ecommerce and Hatid frontend. Preserve original experience and existing user edits.
- [x] Replace illustration rendering with screenshots and accessible full-image links. Reuse native disclosures for details; support keyboard access. Remove the unused illustration component/styles.
- [x] Add app/opengraph-image.tsx, Twitter metadata, optional SITE_URL metadataBase and README setup guidance.
- [x] Run lint, TypeScript and production build. Browser-check screenshots, disclosure keyboard behavior, outbound link attributes, metadata/image response, and layouts at 1440/768/390/320px. Compare experience data to the pre-edit baseline.
- [x] Perform final independent code review and resolve material findings.

## Review focus

- No screenshot distortion or horizontal overflow at 320px.
- Details usable by keyboard and without JavaScript.
- Private projects retain their private label; only verified public repositories are linked.
- Hatid copy does not claim that maps are configured or that GCash payments are automatically verified.
- Social image resolves correctly when SITE_URL is configured for deployment; no invented public portfolio URL.

## Execution notes

The user authorized implementation in this checkout. Keep their existing dev server and uncommitted changes. This is content/presentation work: browser validation and existing lint/build checks are appropriate; no new unit-test framework or implementation-mirroring tests. Source routes/manifests and supplied screenshots support the descriptions; no invented business metrics or client outcomes.


Verification: npm run lint, npx tsc --noEmit and npm run build passed. Browser checks passed at 1440, 768, 390 and 320px, including keyboard/no-JavaScript disclosures, four image links, original proportions, OG image and Twitter metadata. Screenshots match attachments byte for byte; experience, skills, profile and socials match the pre-edit data. Independent read-only review found no issues. SITE_URL remains deployment configuration because no public portfolio domain was supplied.
