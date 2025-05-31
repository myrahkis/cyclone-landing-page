import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import dotenv from 'dotenv'

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.VITE_APP_MODE': JSON.stringify(process.env.VITE_APP_MODE || 'development'),
  },
  plugins: [vue(), ...(process.VITE_APP_MODE === 'development' ? [vueDevTools()] : [])],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // base: '/cyclone-landing-page/',
})
