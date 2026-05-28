import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://icedcoffeedrinker.github.io',
  base: '/FairMed-International-Website',
});
