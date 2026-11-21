import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://flogfactory.github.io',
  base: '/factory-sandbox',
  vite: {
    plugins: [tailwindcss()],
  },
});
