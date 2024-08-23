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
