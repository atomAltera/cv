# CLAUDE.md

Personal CV site for Konstantin Alikhanov. Astro (static, no UI framework),
bilingual EN/RU, deployed on Cloudflare Pages (auto-deploys from `master`).

## Content is data-driven

All CV content lives in **`src/data/cv.ts`** as a single typed object with
`locales.en` and `locales.ru`. Edit copy there — never hardcode text in
`.astro` components or pages. Both languages must stay in sync: when you change
one locale's facts (roles, dates, metrics, skills, contacts), change the other.

## Keep README.md in sync

`README.md` mirrors the **English** page content (summary, skills, experience,
languages, education, contact). Whenever CV facts change in `src/data/cv.ts`,
update `README.md` in the same commit so they never drift.

## Structure

- `src/data/cv.ts` — content source of truth
- `src/components/` — `CV.astro` (page body), `Section`, `Experience`, `Skills`,
  `Contact` (base64 contact obfuscation + client-side decode)
- `src/layouts/Base.astro` — `<head>`, SEO/OG, canonical, hreflang
- `src/pages/index.astro` (EN) and `src/pages/ru/index.astro` (RU)
- `src/styles/global.css` — design tokens, layout, print styles
- `astro.config.mjs` — `site` (cv.nuclight.org) drives canonical/hreflang/OG/sitemap

## Commands

```sh
npm run dev      # local dev
npm run build    # static build → dist/
npm run preview  # preview production build
```

## Conventions

- Design is ascetic / typography-driven, light theme only, minimal client JS
  (only the contact-decode script). Don't add frameworks or heavy tooling.
- Don't put real contact values in plaintext in markup — they're obfuscated in
  `Contact.astro`.

## Git workflow

- Never commit until the user explicitly asks. Make changes locally and let
  them review first.
- Don't push on every change. Batch work and push only when the user commands.
