import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import compress from "astro-compress";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});