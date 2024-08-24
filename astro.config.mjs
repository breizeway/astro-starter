import netlify from "@astrojs/netlify";
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), astroImageTools],
});
