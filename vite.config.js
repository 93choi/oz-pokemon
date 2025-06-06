import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', 
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            const module = id.split('node_modules/')[1].split('/')[0]
            return `vendor-${module}`
          }
        }
      }
    }
  }
})
