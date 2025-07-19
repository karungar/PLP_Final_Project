import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/socket.io': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true,
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 800,  // Increase warning threshold to 800kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Group core React dependencies
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom')) {
            return 'vendor_react';
          }
          
          // Group state management libraries
          if (id.includes('node_modules/zustand') || 
              id.includes('node_modules/redux')) {
            return 'vendor_state';
          }
          
          // Group utility libraries
          if (id.includes('node_modules/lodash') || 
              id.includes('node_modules/ramda') ||
              id.includes('node_modules/date-fns')) {
            return 'vendor_utils';
          }
          
          // Group socket and API clients
          if (id.includes('node_modules/socket.io-client') || 
              id.includes('node_modules/axios')) {
            return 'vendor_comms';
          }
          
          // Group UI libraries separately
          if (id.includes('node_modules/@headlessui') || 
              id.includes('node_modules/@heroicons')) {
            return 'vendor_ui';
          }
          
          // Vendor chunk for other dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})