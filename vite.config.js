import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'incondite-eschatological-lia.ngrok-free.dev'
    ],
    host: true
  }
})
