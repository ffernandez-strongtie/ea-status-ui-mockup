import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const pages = Object.fromEntries(
  readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"))
    .map((file) => [file.replace(".html", ""), resolve(__dirname, file)]),
);

export default defineConfig({
  base: process.env.VITE_BASE || "/ea-status-ui-mockup/",
  plugins: [react()],
  build: { rollupOptions: { input: pages } },
});
