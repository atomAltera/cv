# CV Redesign — Design Document

Date: 2026-05-29
Owner: Konstantin Alikhanov

## Goal

Replace the outdated 2019 static `index.html` CV with a brand-new, modern but
ascetic personal CV page built on Astro. Typography-driven, minimal visual
noise, no borders/cards, light theme only.

## Decisions

- **Engine:** Astro v5, static output, **no client UI framework**, no Tailwind.
  Plain Astro components + plain CSS. Zero client JS shipped by default.
- **Aesthetic:** modern sans-serif (Inter, self-hosted via Fontsource),
  typographic hierarchy, off-white background, near-black text, one restrained
  accent for links/labels only. No boxes, no card borders, generous whitespace.
- **Theme:** light only.
- **Languages:** English + Russian, as **two static routes** (`/` = EN,
  `/ru/` = RU). Toggle is a plain `EN / RU` link in the header. Content for both
  languages lives in one data file. Proper `lang` + `hreflang` tags. No JS.
- **Photo:** none.
- **Extras:** print/PDF-friendly styles; SEO/OG meta tags. `site` is a
  placeholder until hosting is chosen.
- **Content source of truth:** `src/data/cv.ts`, structured `{ en, ru }` object.
- **Email/contact anti-spam:** obfuscate contacts (email, phone, telegram) so
  plaintext never appears in the static HTML. Pattern borrowed from
  `mafia/vanmo-landing`: at build time base64-encode each contact's display
  value and its href (`mailto:`/`tel:`/`https://t.me/`) into `data-v` / `data-h`
  attributes; a tiny client script `atob()`-decodes them into `textContent` /
  `href` on load. This is the **only** client JS on the page, scoped to the
  contact row. GitHub link is a normal public link (no obfuscation needed).

## Content (from current hh.ru resume, 2026-05)

- **Name:** Konstantin Alikhanov
- **Title:** Senior GoLang Developer
- **Location:** Tbilisi, Georgia
- **Total experience:** ~14 years

### Experience

1. **Pushwoosh** — Senior Go Developer · Jan 2023 – present
   - Development and support of the Customer-Journey platform.
   - Go, MongoDB, PostgreSQL, ClickHouse, Kafka
2. **Pulserio AG** — Senior Web Developer · Mar 2020 – Dec 2022
   - Built leadrebel.io B2B lead-generation platform from scratch to production.
   - Node.js, Go, JavaScript/TypeScript, React, MongoDB, Elasticsearch, NATS
3. **App3null GmbH** — Middle → Senior Web Developer · Oct 2016 – Feb 2020
   - Built web applications from scratch to production for clients and the firm.
   - Python (Django), Node.js, JavaScript/TypeScript, React, MongoDB, PostgreSQL
4. **Business Software Consulting (BSC)** — Intern → Middle .NET Developer ·
   Jan 2012 – Oct 2016
   - Windows desktop apps integrating the Exact ERP system into client infra;
     built a POS system from scratch to production.
   - .NET WinForms/WPF, Microsoft SQL Server

### Skills

Go, Python, JavaScript, TypeScript, Node.js, React, PostgreSQL, MongoDB,
Elasticsearch, Redis, SQLite, Docker, REST, HTML5, CSS

### Education

GTU (Georgian Technical University) — Programming, 2014

### Contact

- Email: atomaltera@gmail.com
- Phone: +995 593 52-73-10
- Telegram: @ak_altera
- GitHub: https://github.com/atomAltera

## Architecture

```
cv/
├── src/
│   ├── data/cv.ts            # structured { en, ru } content — single source of truth
│   ├── components/
│   │   ├── Section.astro     # uppercase label + content block
│   │   ├── Experience.astro  # one role entry
│   │   └── SkillList.astro   # inline text tags
│   ├── layouts/Base.astro    # <head>, SEO/OG, hreflang, font import, global css
│   ├── styles/global.css     # tokens, base styles, print styles
│   └── pages/
│       ├── index.astro       # EN page
│       └── ru/index.astro    # RU page
├── public/                   # favicon, og-image
├── astro.config.mjs          # site: placeholder
└── package.json
```

`index.astro` and `ru/index.astro` are thin: both import the same layout +
components and pass `cv.en` / `cv.ru` respectively. A shared `CV.astro` body
component renders the whole page given a localized content object, so the two
routes differ only by which data slice + lang they pass in.

## Visual spec

- Type: Inter; heavier weight for name/headings; tabular figures for dates.
- Layout: single column, ~640px measure, generous vertical rhythm.
- Section labels: small uppercase, letter-spaced, muted.
- Experience item: muted date range, bold role + company, one-line description,
  lightweight text-only tech tags.
- Color: bg `#fafafa`, text `#111`, meta `#666`, one accent for links/labels.
- Print: `@media print` → black on white, single page, toggle hidden.

## Out of scope (YAGNI)

- Dark mode, photo/avatar, salary, birth date, multi-page routing beyond EN/RU,
  analytics, deploy workflow (hosting undecided).

## Migration

Old `index.html` and `styles.css` removed; preserved in git history.
```

## Verification

- `npm run build` succeeds, emits `dist/index.html` and `dist/ru/index.html`.
- Both pages render all sections with correct localized content.
- `lang` attribute correct per page; `hreflang` alternates present.
- Print preview is clean single-page black-on-white.
- Contact values do NOT appear in plaintext in built HTML (only base64); they
  render correctly in the browser after the decode script runs.
- The only client JS is the contact decode script.
