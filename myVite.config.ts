/** @type {import('vite').UserConfig} */
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { join } from "path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  },
  mode: 'development'
})