export const scrollXIntoView = (ele?: Element | HTMLElement | null) => {
  if (!ele) return;
  const element = ele as HTMLElement;
  element.parentElement?.scrollTo({
    left:
      element?.offsetLeft -
      element.parentElement?.offsetWidth / 2 -
      element.offsetWidth / 2,
    behavior: "smooth",
  });
};
