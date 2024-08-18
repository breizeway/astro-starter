import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Spectral", ...defaultTheme.fontFamily.serif],
        sans: ["Lato", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.5xl"),
          fontFamily: theme("fontFamily.serif"),
        },
        h2: {
          fontSize: theme("fontSize.4xl"),
          fontFamily: theme("fontFamily.serif"),
        },
        h3: {
          fontSize: theme("fontSize.3xl"),
          fontFamily: theme("fontFamily.serif"),
        },
        a: { textDecoration: "underline" },
      });
    }),
  ],
};
