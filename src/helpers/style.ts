import type { PluginAPI } from "tailwindcss/types/config";

export const propsWithMergedClasses = <
  T extends { class?: string | null | undefined },
>(
  props: T,
  ...classes: string[]
): T => ({
  ...props,
  class: undefined,
  "class:list": [...classes, props.class],
});

export const tailwindTransition = (
  theme: PluginAPI["theme"],
  props?: { property?: string; duration?: string; timing?: string },
) => ({
  "transition-property": theme(
    `transitionProperty.${props?.property ?? "DEFAULT"}`,
  ),
  "transition-duration": theme(
    `transitionDuration.${props?.duration ?? "DEFAULT"}`,
  ),
  "transition-timing-function": theme(
    `transitionTimingFunction.${props?.timing ?? "DEFAULT"}`,
  ),
});

// https://samhermes.com/posts/detect-when-image-has-loaded-javascript/
const fadeInImagesWithDoc = (doc: Document) => {
  const allImgs = doc.querySelectorAll<HTMLImageElement>(".img-fade-in");
  Array.from(allImgs ?? []).forEach((img) => {
    if (!img.complete) {
      img.addEventListener(
        "load",
        () => {
          img.classList.add("img-fade-in-loaded");
        },
        { once: true },
      );
    } else {
      img.classList.add("img-fade-in-loaded");
    }
  });
};

export const enableImgFadeIn = () => {
  fadeInImagesWithDoc(document);
  document.addEventListener("astro:before-swap", (ev) =>
    fadeInImagesWithDoc(ev.newDocument),
  );
};
