# CLAUDE.md

Personal CV site for Konstantin Alikhanov. Astro (static, no UI framework),
trilingual EN/RU/KA (English, Russian, Georgian), deployed on Cloudflare Pages
(auto-deploys from `master`).

## Content is data-driven

All CV content lives in **`src/data/cv.ts`** as a single typed object with
`locales.en`, `locales.ru`, `locales.ka` (and matching `meta.en/ru/ka`). Edit
copy there — never hardcode text in `.astro` components or pages. All three
languages must stay in sync: when you change one locale's facts (roles, dates,
metrics, skills, contacts), change the others. In RU/KA keep technology names,
company names, and English role titles as-is; translate only the prose.

Adding a language means: a `meta.<code>` + `locales.<code>` entry, a
`src/pages/<code>/index.astro` page (passing `lang="<code>"` to `<CV>`), a new
item in the `languages` list in `CV.astro` (drives the switcher), and an
`hreflang` entry in `Base.astro`.

## Keep README.md in sync

`README.md` mirrors the **English** page content (summary, skills, experience,
languages, education, contact). Whenever CV facts change in `src/data/cv.ts`,
update `README.md` in the same commit so they never drift.

## Structure

- `src/data/cv.ts` — content source of truth
- `src/components/` — `CV.astro` (page body), `Section`, `Experience`, `Skills`,
  `Contact` (base64 contact obfuscation + client-side decode)
- `src/layouts/Base.astro` — `<head>`, SEO/OG, canonical, hreflang
- `src/pages/index.astro` (EN), `src/pages/ru/index.astro` (RU),
  `src/pages/ka/index.astro` (KA)
- `src/styles/global.css` — design tokens, layout, print styles. Experience and
  Skills read as prose, not bullet lists: each role is a heading →
  company/dates → a `<p>` describing the work in full sentences; Skills is one
  or two prose paragraphs. Dates are wrapped in `<time datetime>`. Keep the copy
  as sentences — no `•` bullet lists.
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
