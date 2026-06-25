import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // relative asset paths so dist/index.html works from any path or file://
  build: {
    outDir: 'dist',
  },
})
