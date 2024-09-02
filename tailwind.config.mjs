import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const COMMON_VARS = {
  // sizes
  "--icon-stroke-lg": "3px",

  // colors
  "--site-bg-color-1": "var(--fallback-p, oklch(var(--p)))",
  "--site-bg-color-2": "var(--fallback-n, oklch(var(--n)))",
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
        title: ["poppins", ...defaultTheme.fontFamily.sans],
        sans: ["nunito", ...defaultTheme.fontFamily.sans],
      },
    },
    transitionDuration: {
      ...defaultTheme.transitionDuration,
      load: "100ms",
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
      // console.log(`:::THEME::: `, theme("size"));
      addVariant("light", "@media (prefers-color-scheme: light)");
      addVariant("safari", "@supports (background: -webkit-named-image(i))");
      addBase({
        a: { textDecoration: "underline" },
      });
      addComponents({
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
      addUtilities({
        ".site-width-content": {
          width: `min(100%, ${theme("screens.xl")})`,
          maxWidth: `min(100%, ${theme("screens.xl")})`,
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".img-fade-in": {
          opacity: theme("opacity.0"),
        },
        ".img-fade-in-loaded": {
          opacity: theme("opacity.100"),
        },
        ".site-px": {
          transitionProperty: "padding",
          transitionDuration: theme("transitionDuration.DEFAULT"),
          transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
          "@screen sm": {
            paddingLeft: theme("padding.6"),
            paddingRight: theme("padding.6"),
          },
        },
        ".site-py": {
          paddingTop: theme("padding.6"),
          paddingBottom: theme("padding.6"),
        },
        ".text-title-1": {
          fontSize: theme("fontSize.5xl"),
          fontFamily: theme("fontFamily.title"),
        },
        ".text-title-2": {
          fontSize: "2.5rem",
          fontFamily: theme("fontFamily.title"),
          fontWeight: 700,
        },
        ".text-title-3": {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.title"),
          fontWeight: 700,
          textTransform: "uppercase",
        },
        ".text-empty": {
          "--tw-text-opacity": "1",
          color: "oklch(var(--color-empty)/var(--tw-text-opacity))",
        },
        ".text-full": {
          "--tw-text-opacity": "1",
          color: "oklch(var(--color-full)/var(--tw-text-opacity))",
        },
        ".bg-empty": {
          "--tw-bg-opacity": "1",
          backgroundColor: "oklch(var(--color-empty)/var(--tw-bg-opacity))",
        },
        ".bg-full": {
          "--tw-bg-opacity": "1",
          backgroundColor: "oklch(var(--color-full)/var(--tw-bg-opacity))",
        },
        ".glass-base": {
          "--tw-bg-opacity": "0.66",
          backgroundColor:
            "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))",
          backdropFilter: "blur(50px)",
        },
        ".glass-empty": {
          "--tw-bg-opacity": "0.33",
          backgroundColor: "oklch(var(--color-empty)/var(--tw-bg-opacity))",
          backdropFilter: "blur(50px)",
        },
        ".glass-full": {
          "--tw-bg-opacity": "0.33",
          backgroundColor: "oklch(var(--color-full)/var(--tw-bg-opacity))",
          backdropFilter: "blur(50px)",
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
          neutral: "#555",

          // "neutral-content": "#ffffff",
          "base-100": "#fafafa",
          // "base-content": "#758DAD",
          "base-content": "#253040",

          "--color-empty": "100% 0 0",
          "--color-full": "0% 0 0",
          "--site-logo-color-1": "#455270",
          "--site-logo-color-2": "#253040",
          "--site-logo-color-3": "#6E7B8C",
          ...COMMON_VARS,
        },
        dark: {
          primary: "#449FF4",
          secondary: "#455270",
          accent: "#D9AF72",
          neutral: "#aaa",
          "base-100": "#414141",
          // made up light blue
          // "base-content": "#E3E8EF",
          // "base-content": "#fff",
          "base-content": "#D9E4E9",

          "--color-empty": "0% 0 0",
          "--color-full": "100% 0 0",
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
