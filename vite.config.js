import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    404: resolve(__dirname, "public/404.html"),
    alias: {
      '@': '/src',
    },
  },
})
