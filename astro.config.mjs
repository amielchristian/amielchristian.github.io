// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://amielchristian.github.io',
  integrations: [svelte(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});