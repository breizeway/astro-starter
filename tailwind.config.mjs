import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const COMMON_VARS = {
  "--icon-stroke-lg": "3px",

  "--site-bg-color-1": "var(--fallback-p, oklch(var(--p)/1))",
  "--site-bg-color-2": "var(--fallback-n, oklch(var(--n)/1))",
};

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
    plugin(function ({
      addBase,
      addUtilities,
      addComponents,
      addVariant,
      theme,
    }) {
      // console.log(`:::THEME::: `, theme("transitionProperty"));
      addVariant("light", "@media (prefers-color-scheme: light)");
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
        ".bracket-card": {
          position: "relative",
          border: "var(--icon-stroke-lg) solid transparent",
          width: "fit-content",
          "min-width": "108px",

          "&::after": {
            content: "''",
            position: "absolute",
            top: "calc(var(--icon-stroke-lg)*-1)",
            bottom: "calc(var(--icon-stroke-lg)*-1)",
            left: "calc(var(--icon-stroke-lg)*-1)",
            width: "calc(var(--icon-stroke-lg)*16)",

            "background-color": "currentColor",
            "clip-path": `polygon(
              100% 0,
              var(--icon-stroke-lg) var(--icon-stroke-lg),
              var(--icon-stroke-lg) calc(100% - var(--icon-stroke-lg)),
              100% 100%,
              0 100%,
              0 0
            )`,
          },
          "&::before": {
            content: "''",
            position: "absolute",
            top: "calc(var(--icon-stroke-lg)*-1)",
            bottom: "calc(var(--icon-stroke-lg)*-1)",
            right: "calc(var(--icon-stroke-lg)*-1)",
            width: "calc(var(--icon-stroke-lg)*16)",

            "background-color": "currentColor",
            "clip-path": `polygon(
              0 0,
              100% 0,
              100% 100%,
              0 100%,
              calc(100% - var(--icon-stroke-lg)) calc(100% - var(--icon-stroke-lg)),
              calc(100% - var(--icon-stroke-lg)) var(--icon-stroke-lg)
            )`,
          },
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
          // ...require("daisyui/src/theming/themes")["light"],
          primary: "#449FF4",
          secondary: "#455270",
          accent: "#D9AF72",
          // basically a color that should be dark on both light and dark, probably slightly lighter than base-300 on dark
          neutral: "#666666",

          // "neutral-content": "#ffffff",
          "base-100": "#fafafa",
          // "base-content": "#758DAD",
          "base-content": "#253040",

          "--site-logo-color-1": "#455270",
          "--site-logo-color-2": "#253040",
          "--site-logo-color-3": "#6E7B8C",
          ...COMMON_VARS,
        },
        dark: {
          primary: "#449FF4",
          secondary: "#455270",
          accent: "#D9AF72",
          neutral: "#999999",
          "base-100": "#414141",
          // made up light blue
          // "base-content": "#E3E8EF",
          "base-content": "#D9E4E9",

          "--site-logo-color-1": "#6B7B8C",
          "--site-logo-color-2": "#D9E4E9",
          "--site-logo-color-3": "#AAB8C2",
          ...COMMON_VARS,
        },
      },
    ],
  },
  // darkMode: ["class", '[data-theme="dark"]'],
};
