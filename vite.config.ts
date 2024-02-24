import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:17032', // The API is running locally via IIS on this port
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // The local API has a slightly different path
      }
    }
  }
})