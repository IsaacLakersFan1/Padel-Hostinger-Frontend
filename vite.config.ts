import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    host: true, // Binds to 0.0.0.0
    port: 4173, // Ensures the correct port
    allowedHosts: ["gkks0gc4c4g4gc4soo0osg08.193.46.198.43.sslip.io"], // Add the host dynamically assigned by Coolify
  },
});
