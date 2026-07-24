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

Most of my work is in Go and TypeScript, with Python and JavaScript where they
fit. On the backend I lean on PostgreSQL, MongoDB, ClickHouse, Elasticsearch,
and Redis, wire services together with Kafka or NATS, and ship through Docker,
Kubernetes, and CI/CD. On the frontend it is mostly React and Node.js, with some
Django in the older projects.

I am most at home with high-load backends, event pipelines, and the kind of
debugging that only shows up under real production traffic. These days AI tools
have become a regular part of how I work day to day.

## Experience

### Banyan AI — Co-Founder & CTO · Jul 2025 – Apr 2026

Co-founded an AI automation product for small businesses and ran the entire
technical side — architecture, infrastructure, deployment — writing most of the
code myself. The product pulled together backend services, LLM-based workflows,
and integrations with the tools small businesses already use.

### Pulserio AG · LeadRebel — Lead Software Engineer · May 2020 – Apr 2025

Built LeadRebel, a B2B lead-generation SaaS, from scratch and led its
development for five years, until it was acquired by Leadinfo. I worked across
the whole stack — the tracking script, the event pipeline, search, analytics,
admin tools, integrations, and deployment — with the pipeline handling up to a
million events a minute and around 100,000 tracked visitors a day.

### App3null GmbH — Web Developer · Oct 2016 – May 2020

Developed the web side of an order-management platform for a Volkswagen
contractor that eventually grew into a multi-company SaaS. I owned the core
business logic — order upload, dispatching, search, status tracking, and the
contractor workflows around it.

### Business Software Consulting — .NET Developer · Dec 2011 – Sep 2016

Built a point-of-sale system for retail and restaurants end to end, from
gathering requirements through rollout and support, and worked on ERP and
integration tools for clients such as SOLO / Bank of Georgia and Tegeta Motors.

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
