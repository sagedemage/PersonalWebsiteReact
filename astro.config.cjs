import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import compress from "astro-compress";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress()],
  output: "server",
  adapter: netlify()
});