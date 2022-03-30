import path from 'node:path';

import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteWebfontDownload as webfontPlugin } from 'vite-plugin-webfont-dl';

// ? https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactPlugin(),
    webfontPlugin(['https://www.google.com/search?q=google%20fonts%20roboto']),
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
