import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // Make sure uuid is not excluded
    include: ["uuid"],
  },
  plugins: [react()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
