import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import seo from './vite-plugin-seo';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seo()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
