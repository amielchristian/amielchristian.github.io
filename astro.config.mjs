// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://amielchristian.github.io',
  integrations: [svelte(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});