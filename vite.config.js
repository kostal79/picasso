import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      '@app': path.resolve("src", "app"),
      '@pages': path.resolve("src", "pages"),
      '@entities': path.resolve("src", "entities"),
      '@shared': path.resolve("src", "shared"),
    }
  }
})
