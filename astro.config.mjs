import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed on Cloudflare Pages. `site` feeds canonical + hreflang +
// Open Graph URLs and the generated sitemap.
export default defineConfig({
  site: 'https://cv.nuclight.org',
  integrations: [sitemap()],
});
