# Cloudflare deployment plan

**Goal:** Deploy the existing portfolio to the user's Cloudflare account and automatically deploy future pushes to `novel16/portfolio` on `main`.

**Design:** Follow the existing Hatid setup: keep the Next.js source/development workflow, use Cloudflare's supported vinext integration for Workers, and connect Cloudflare Workers Builds directly to GitHub. Use a new `portfolio` Worker; leave Hatid and Tindatala resources untouched. No database or application secrets are needed. Reuse the existing account's managed build credential, as Hatid already does; never place credentials in the repository.

## Tasks

- [x] Generate and inspect Cloudflare configuration and lock dependencies.
- [x] Set the actual production metadata origin. Add lint/typecheck/build validation commands and deployment instructions.
- [x] Verify local Next.js and Cloudflare builds, images, CV and social image.
- [x] Deploy the new Worker and verify its live URL.
- [x] Connect the portfolio GitHub repository and production `main` branch, with validation before deploy and previews disabled.
- [ ] Commit and push the reviewed deployment setup; observe the push-triggered build through successful deployment.
- [ ] Verify the live revision, links, screenshots and metadata; record final build identifiers.

## Constraints

Preserve all portfolio content and layout. Keep the user's dev server running. Use the logged-in Cloudflare CLI because plugin calls currently report unavailable. Retain TLS verification: Node requires NODE_USE_SYSTEM_CA=1 on this Windows machine. User explicitly authorized deployment and CI/CD, including the necessary main-branch push. Static export was considered; the existing, supported Hatid deployment path is used to preserve Next.js image and social-image behavior.

Deployment validation found that the starter's `cacheComponents: true` makes vinext require a persistent cache backend, even though this portfolio uses no `use cache`, revalidation or server data. Remove that unused flag and its dependent `partialPrefetching` option rather than provision an unnecessary KV resource. Rebuild both targets and repeat Worker verification.
