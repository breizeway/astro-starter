import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
// import tailwindCssAnimated from "tailwindcss-animated";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import { SITE_TAB_WIDTH } from "./src/constants";
import { intersectionPlugin } from "./src/library/intersection-handler";

const customColor = (colorVar, { opacityVariable, opacityValue }) => {
  if (opacityValue !== undefined) {
    return `oklch(var(${colorVar}) / ${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `oklch(var(${colorVar}) / var(${opacityVariable}, 1))`;
  }

  return `oklch(var(${colorVar}))`;
};

const COMMON_VARS = {
  // sizes
  "--site-space-x-lg": "2rem",
  "--site-space-x-sm": "1rem",
  "--site-space-y-lg": "12rem",
  "--site-space-y-sm": "6rem",

  "--icon-stroke": "3px",
  "--nav-height": "5rem",
  "--page-section-py": "var(--site-space-y)",
  "--banner-section-pb": "12rem",
  "--about-section-pb": "var(--carousel-img-height)",

  "--carousel-img-height": "30rem",
  "--carousel-px": "var(--site-space-x)",
  "--carousel-gap": "var(--site-space-x)",

  // colors
  "--site-bg-color-1": "var(--fallback-p, oklch(var(--p)))",
  "--site-bg-color-2": "var(--fallback-a, oklch(var(--a)))",

  // animations
  "--tw-animate-duration": "500ms",
  "--tw-animate-easing": "ease",
  "--tw-animate-delay": "0ms",
  "--tw-animate-iteration": "1",
  "--tw-animate-fill": "both",

  "--fade-start-opacity": "0",
  "--fade-end-opacity": "1",

  "--fade-up-start-translate": "4rem",
  "--fade-up-end-translate": "0%",
  "--fade-right-start-translate": "-2rem",
  "--fade-right-end-translate": "0%",
  "--fade-left-start-translate": "2rem",
  "--fade-left-end-translate": "0%",
  "--fade-down-start-translate": "-4rem",
  "--fade-down-end-translate": "0%",
};

// /** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        empty: (params) => {
          return customColor("--color-empty", params);
        },
        full: (params) => {
          return customColor("--color-full", params);
        },
      },
      screens: {
        "nav-lrg": `${SITE_TAB_WIDTH}px`,
      },
      fontFamily: {
        title: ["poppins", ...defaultTheme.fontFamily.sans],
        sans: ["nunito", ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        ...defaultTheme.transitionDuration,
        DEFAULT: "500ms",
        load: "100ms",
      },
      // animations inspired by https://github.com/new-data-services/tailwindcss-animated
      animationDelay: {
        none: "0ms",
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      animationDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      animationTimingFunction: {
        DEFAULT: "ease",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animationIteration: {
        infinite: "infinite",
        once: "1",
        twice: "2",
        thrice: "3",
        1: "1",
        2: "2",
        3: "3",
      },
      animation: {
        ...defaultTheme.animation,
        fade: "fade var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "fade-down":
          "fade-down var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "fade-up":
          "fade-up var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "fade-left":
          "fade-left var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "fade-right":
          "fade-right var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
      },
      keyframes: {
        fade: {
          from: {
            opacity: "var(--fade-start-opacity)",
          },
          to: {
            opacity: "var(--fade-end-opacity)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "var(--fade-start-opacity)",
            transform: "scale(0.94) translateY(var(--fade-up-start-translate))",
          },
          "100%": {
            opacity: "var(--fade-end-opacity)",
            transform: "scale(1) translateY(var(--fade-up-end-translate))",
          },
        },
        "fade-right": {
          from: {
            opacity: "var(--fade-start-opacity)",
            transform:
              "scale(0.94) translateX(var(--fade-right-start-translate))",
          },
          to: {
            opacity: "var(--fade-end-opacity)",
            transform: "scale(1) translateX(var(--fade-right-end-translate))",
          },
        },
        "fade-down": {
          from: {
            opacity: "var(--fade-start-opacity)",
            transform:
              "scale(0.94) translateY(var(--fade-down-start-translate))",
          },
          to: {
            opacity: "var(--fade-end-opacity)",
            transform: "scale(1) translateY(var(--fade-down-end-translate))",
          },
        },
        "fade-left": {
          from: {
            opacity: "var(--fade-start-opacity)",
            transform:
              "scale(0.94) translateX(var(--fade-left-start-translate))",
          },
          to: {
            opacity: "var(--fade-end-opacity)",
            transform: "scale(1) translate(var(--fade-left-end-translate))",
          },
        },
      },
    },
  },
  plugins: [
    // tailwindCssAnimated,
    plugin(function ({ addUtilities, addComponents, addVariant, theme }) {
      addVariant("safari", "@supports (background: -webkit-named-image(i))");
      addVariant("light", "@media (prefers-color-scheme: light)");
      addVariant("no-touch", "@media (hover: hover)");
      addVariant("touch", "@media (hover: none)");
      addComponents({
        ".bracket-card": {
          position: "relative",
          border: "var(--icon-stroke) solid transparent",
          width: "fit-content",
          "min-width": "108px",

          "&::before": {
            content: "''",
            position: "absolute",
            top: "calc(var(--icon-stroke)*-1)",
            bottom: "calc(var(--icon-stroke)*-1)",
            left: "calc(var(--icon-stroke)*-1)",
            width: "3rem",

            "background-color": "currentColor",
            "clip-path": `polygon(
              100% 0,
              var(--icon-stroke) var(--icon-stroke),
              var(--icon-stroke) calc(100% - var(--icon-stroke)),
              100% 100%,
              0 100%,
              0 0
            )`,
          },
          "&::after": {
            content: "''",
            position: "absolute",
            top: "calc(var(--icon-stroke)*-1)",
            bottom: "calc(var(--icon-stroke)*-1)",
            right: "calc(var(--icon-stroke)*-1)",
            width: "3rem",

            "background-color": "currentColor",
            "clip-path": `polygon(
              0 0,
              100% 0,
              100% 100%,
              0 100%,
              calc(100% - var(--icon-stroke)) calc(100% - var(--icon-stroke)),
              calc(100% - var(--icon-stroke)) var(--icon-stroke)
            )`,
          },
        },
        ".tl-tab": {
          // defined in root-layout @layer components
        },
        ".tl-tab-x": {
          // defined in root-layout @layer components
        },
        ".tl-tab-y": {
          // defined in root-layout @layer components
        },
        ".tl-tab--selected": {
          // defined in root-layout @layer components
        },
        ".blurb": {
          // defined in root-layout @layer components
        },
      });
      addUtilities({
        ".init-dynamic-site-vars": {
          "--site-space-x": "var(--site-space-x-sm)",
          "--site-space-y": "var(--site-space-y-sm)",
          "--site-py": "1.25rem",
          "@screen sm": {
            "--site-space-x": "var(--site-space-x-lg)",
            "--site-space-y": "var(--site-space-y-lg)",
          },
        },
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
          paddingLeft: "var(--site-space-x)",
          paddingRight: "var(--site-space-x)",
        },
        ".site-py": {
          paddingTop: "var(--site-py)",
          paddingBottom: "var(--site-py)",
        },
        ".text-title-1": {
          fontSize: theme("fontSize.5xl"),
          fontFamily: theme("fontFamily.title"),
        },
        ".text-title-2": {
          fontSize: "2.5rem",
          fontFamily: theme("fontFamily.title"),
          fontWeight: 600,
        },
        ".text-title-3": {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.title"),
          fontWeight: 600,
          textTransform: "uppercase",
        },
        ".text-title-4": {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.title"),
          fontWeight: 600,
        },
        ".no-scrollbar": {
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scroll-snap-x": {
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          "& > *": {
            scrollSnapAlign: "center",
          },
        },
        ".intersect-once": {},
        ".glassy": {
          // defined in root-layout @layer utilities
        },
        ".glass-card": {
          // defined in root-layout @layer utilities
        },
        ".glass-wide": {
          // defined in root-layout @layer utilities
        },
        ".glass-narrow": {
          // defined in root-layout @layer utilities
        },
        ".glass-responsive": {
          // defined in root-layout @layer utilities
        },
        ".glass-bubble": {
          // defined in root-layout @layer utilities
        },
        ".glass-empty-header": {
          // defined in root-layout @layer utilities
        },
        ".glass-base": {
          // defined in root-layout @layer utilities
        },
        ".glass-empty": {
          // defined in root-layout @layer utilities
        },
        ".glass-full": {
          // defined in root-layout @layer utilities
        },
        ".glass-full-header": {
          // defined in root-layout @layer utilities
        },
        ".no-animation-delay": {
          // defined in root-layout @layer utilities
        },
        ".site-section": {
          // defined in root-layout @layer utilities
        },
      });
    }),
    typography,
    daisyui,
    intersectionPlugin,
  ],
  daisyui: {
    themes: [
      {
        light: {
          // ...require("daisyui/src/theming/themes")["light"],
          primary: "#449FF4",
          secondary: "#455270",
          accent: "#888",
          // basically a color that should be dark on both light and dark, probably slightly lighter than base-300 on dark
          neutral: "#6E7B8C",

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
          accent: "#888",
          neutral: "#6B7B8C",
          "base-100": "#414141",
          // made up light blue
          // "base-content": "#E3E8EF",
          // "base-content": "#fff",
          "base-content": "#AAB8C2",

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

export default config;
