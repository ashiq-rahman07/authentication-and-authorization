import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
    server: {
    host: true, // 👈 allows subdomain access
    port: 5173,
    // cors: {
    //   origin: true,
    //   credentials: true,
    // },
  },
  build: {
    outDir: 'dist' 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})