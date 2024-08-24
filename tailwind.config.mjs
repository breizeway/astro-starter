import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
    plugin(function ({ addBase, addUtilities, addComponents, theme }) {
      // console.log(`:::THEME::: `, theme("transitionProperty"));
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
        ".site-width-content": {
          width: `min(100%, ${theme("screens.xl")})`,
          "max-width": `min(100%, ${theme("screens.xl")})`,
          "margin-left": "auto",
          "margin-right": "auto",
        },
        ".img-fade-in": {
          opacity: theme("opacity.0"),
          filter: `blur(${theme("blur.lg")})`,
          // ...tailwindTransition(theme, { duration: "75" }),
        },
        ".img-fade-in-loaded": {
          opacity: theme("opacity.100"),
          filter: `blur(${theme("blur.0")})`,
        },
      });
      addComponents({
        ".site-px": {
          "transition-property": "padding",
          "transition-duration": theme("transitionDuration.DEFAULT"),
          "transition-timing-function": theme(
            "transitionTimingFunction.DEFAULT",
          ),
          "padding-left": theme("padding.4"),
          "padding-right": theme("padding.4"),
          "@screen sm": {
            "padding-left": theme("padding.6"),
            "padding-right": theme("padding.6"),
          },
        },
        ".site-py": {
          "padding-top": theme("padding.6"),
          "padding-bottom": theme("padding.6"),
        },
        ".glass-b": {
          background: "rgba(255, 255, 255, 0.5)",
          "box-shadow":
            "inset 1px 2px 2px rgba(255, 255, 255, 0.5), inset -1px -2px 2px rgba(0, 0, 0, 0.25), inset 32.8667px -32.8667px 32.8667px rgba(194, 194, 194, 0.1), inset -32.8667px 32.8667px 32.8667px rgba(255, 255, 255, 0.1)",
          /* Note: backdrop-filter has minimal browser support */
          "backdrop-filter": "blur(32.8667px)",
          "border-radius": "8px",
          // "border-radius": "20px",
        },
      });
    }),
    typography,
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],

          "base-100": "#eee",
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
