# Konstantin Alikhanov — Senior Full-stack / Product Engineer

Go · Backend Architecture · End-to-End Delivery

Personal CV site. Live at **[cv.nuclight.org](https://cv.nuclight.org)** (English) and
**[cv.nuclight.org/ru](https://cv.nuclight.org/ru/)** (Russian).

Tbilisi, Georgia · Remote preferred · [Email](mailto:atomaltera@gmail.com) ·
[Telegram](https://t.me/ak_altera) ·
[GitHub](https://github.com/atomAltera) ·
[LinkedIn](https://www.linkedin.com/in/konstantin-alikhanov-22769a4b)

> Full-stack engineer with 14 years of experience, mostly in small teams where
> I owned the product end to end — from a retail POS system to a B2B SaaS that
> was later acquired. Main stack: Go, TypeScript, MongoDB. Comfortable with
> high-load backends, legacy code, and production debugging.

## Skills

**Stack**

- Go, TypeScript, JavaScript, Python
- React, Node.js, Django
- PostgreSQL, MongoDB, ClickHouse, Elasticsearch, Redis
- Kafka, NATS, Docker, Kubernetes, CI/CD

**Focus areas**

- High-load backends, event pipelines, production debugging
- AI tools in everyday engineering work

## Experience

### Banyan AI — Co-Founder & CTO · Jul 2025 – Apr 2026
- Built an AI automation product for small businesses: backend services,
  LLM-based workflows, integrations with business tools.
- Ran the technical side — architecture, infrastructure, deployment — and wrote
  most of the code.

### Pulserio AG · LeadRebel — Lead Software Engineer · May 2020 – Apr 2025
- Built LeadRebel, a B2B lead-generation SaaS, from scratch and ran it for five
  years as the only engineer in a two-person team; later acquired by Leadinfo.
- Covered the whole stack: tracking script, event pipeline, search, analytics,
  admin tools, integrations, deployment.
- The event pipeline handled up to 1M events/minute and ~100k tracked visitors
  a day.

### App3null GmbH — Web Developer · Oct 2016 – May 2020
- Developed the web part of an order-management platform for a Volkswagen
  contractor that grew into a multi-company SaaS.
- Owned the core business logic: order upload, dispatching, search, status
  tracking, contractor workflows.

### Business Software Consulting — .NET Developer · Dec 2011 – Sep 2016
- Built a POS system for retail and restaurants, from requirements to rollout
  and support.
- Worked on ERP and integration tools for clients including SOLO / Bank of
  Georgia and Tegeta Motors.

## Languages

- **Russian** — Native
- **Georgian** — Fluent
- **English** — C1

## Education

- **Georgian Technical University** — Programming · 2014

## Open to

Senior Full-stack / Backend / Product Engineer · Founding engineer ·
Remote · B2B or full-time

---

## About this site

Built with [Astro](https://astro.build) (static, no UI framework). Ascetic,
typography-driven design, light theme, print/PDF friendly (with a "Save as PDF"
button that calls `window.print()`). Bilingual EN/RU as two static routes (`/`
and `/ru/`) with proper `hreflang`/canonical tags and a generated sitemap.
Contact details are base64-obfuscated at build time and decoded client-side to
deter scrapers.

All CV content lives in a single source of truth: **`src/data/cv.ts`**
(`locales.en` / `locales.ru`). Edit text there — never in the components.

### Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the production build
```

### Deploy

Hosted on **Cloudflare Pages**, which auto-deploys from the `master` branch
(build command `npm run build`, output directory `dist`). Push to `master` to
ship.
