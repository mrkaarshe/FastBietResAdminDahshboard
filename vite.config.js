import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    proxy: {
      "/api": {
        target: "https://fastbietres.onrender.com/",
        changeOrigin: true,
      },
    },
  },
})
