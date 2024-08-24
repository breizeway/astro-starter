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

// const getCompId = (componentDescriptor: string) =>
//   `${componentDescriptor}_${crypto.randomUUID()}`;
