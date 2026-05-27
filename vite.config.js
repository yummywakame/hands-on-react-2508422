import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'docs'
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Suppress Sass @import deprecation warnings (course material uses legacy syntax)
        silenceDeprecations: ['import'],
        loadPaths: ['src']
      }
    }
  }
})
