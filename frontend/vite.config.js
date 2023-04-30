import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  manifest: true,
  rollupOptions: {
    input: 'src/main.jsx',
  },
  server: {
    // port: 5000,
    proxy: {
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },

})
