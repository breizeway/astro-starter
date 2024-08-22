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
      screens: {
        touch: { raw: "(hover: none)" },
        "no-touch": { raw: "(hover: hover)" },
      },
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
          width: `min(100%, ${theme("screens.2xl")})`,
          margin: "0 auto",
        },
      });
    }),
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--site-logo-color-1": "#455270",
          "--site-logo-color-2": "#253040",
          "--site-logo-color-3": "#6E7B8C",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "--site-logo-color-1": "#6B7B8C",
          "--site-logo-color-2": "#D9E4E9",
          "--site-logo-color-3": "#AAB8C2",
        },
      },
    ],
  },
};
