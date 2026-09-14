import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // relative asset paths — works whether deployed at domain root or a subfolder (InfinityFree drag & drop safe)
  plugins: [react()],
  build: {
    assetsDir: 'assets',
  },
})
