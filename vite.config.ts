import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Output directory for the build
    sourcemap: true, // Optional: generates a sourcemap for easier debugging
    minify: "esbuild", // Options: 'esbuild', 'terser', or false for no minification
  },
});
