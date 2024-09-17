import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import VueRouter from 'unplugin-vue-router/vite';
import Vue from '@vitejs/plugin-vue';
import SvgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: fileURLToPath(new URL('./src/types/typed-router.d.ts', import.meta.url)),
    }),
    Vue(),
    SvgLoader({
      defaultImport: 'component',
      svgoConfig: {},
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
