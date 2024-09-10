/**
 * inspired by https://github.com/heidkaemper/tailwindcss-intersect
 */
import plugin from "tailwindcss/plugin";

const intersectionPlugin = plugin(({ addVariant }) => {
  addVariant("intersect", "&:not([no-intersect])");
});

const IntersectionHandler = {
  start() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.observe());

      return;
    }

    this.observe();
  },

  observe() {
    const selectors = [
      '[class*=" intersect:"]',
      '[class*=":intersect:"]',
      '[class^="intersect:"]',
      '[class="intersect"]',
      '[class*=" intersect "]',
      '[class^="intersect "]',
      '[class$=" intersect"]',
    ];

    document.querySelectorAll(selectors.join(",")).forEach((element) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              element.setAttribute("no-intersect", "");

              return;
            }

            element.removeAttribute("no-intersect");

            element.classList.contains("intersect-once") &&
              observer.disconnect();
          });
        },
        {
          threshold: this.getThreshold(element),
          rootMargin: this.getRootMargin(element),
        },
      );

      observer.observe(element);
    });
  },

  getThreshold(element: Element) {
    const DEFAULT_TH = 0.2;
    const classes = element.classList.entries();
    let curr = classes.next();
    while (curr.value) {
      const [_, cls] = curr.value as [number, string];
      if (cls.includes("intersect-th-")) {
        try {
          const th = parseFloat(cls.replace("intersect-th-", ""));
          return th;
        } catch {
          return DEFAULT_TH;
        }
      }
      curr = classes.next();
    }
    return DEFAULT_TH;
  },

  getRootMargin(element: Element) {
    const DEFAULT_RM = "0px 0px 0px 0px";
    const classes = element.classList.entries();
    let curr = classes.next();
    while (curr.value) {
      const [_, cls] = curr.value as [number, string];
      if (cls.includes("intersect-rm-")) {
        const th = cls.replace("intersect-rm-", "");
        return th || DEFAULT_RM;
      }
      curr = classes.next();
    }
    return DEFAULT_RM;
  },
};

export { IntersectionHandler, intersectionPlugin };
