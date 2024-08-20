import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Spectral", ...defaultTheme.fontFamily.serif],
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, theme }) {
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
      addUtilities({
        ".width-content": {
          width: `min(100%, ${theme("screens.xl")})`,
          margin: "0 auto",
        },
      });
    }),
    daisyui,
  ],
};
