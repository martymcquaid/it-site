import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/11686527-6fca-4a93-a66a-0be6900f229d/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5234,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5234,
    },
  },
})
