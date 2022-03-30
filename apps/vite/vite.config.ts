import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// ? https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'classic' }),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
    ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  test: {
    coverage: {
      branches: 90,
      lines: 90,
      include: ['src/!(test)/**'],
    },
    environment: 'jsdom',
  },
});
