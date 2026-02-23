import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 👇 BASE MUST BE HERE (top-level)
  base: "/personal-porfolio/",

  server: {
    host: true,
  },
});