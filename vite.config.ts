import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

declare module 'vite' {
  interface BuildOptions {
    base : string;
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/',
  }
})
