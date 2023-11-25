import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react({
      babel: {
        plugins: [
          'jotai/babel/plugin-react-refresh',
          'jotai/babel/plugin-debug-label',
        ],
      },
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/styles/index.scss';",
      },
    },
  },
  build: {
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
  },
  define: {
    // TODO: https://github.com/jotaijs/jotai-devtools/issues/82
    // temp patch for jotai-devtools@0.6.0
    'process.platform': null,
  },
});
