import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
export default defineConfig({
   vite: {
    plugins: [],
  },
  compressHTML: true,
  integrations: [sitemap(), tailwind({
    applyBaseStyles: false,
  }), react()]
});