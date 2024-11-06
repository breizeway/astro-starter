type Section =
  | "about-us"
  | "our-work"
  | "certifications"
  | "distributorships"
  | "contact-us";

type TabPrefix = "tab_";
export const TAB_PREFIX: TabPrefix = "tab_";
type SectionClass = "site-section";
export const SECTION_CLASS: SectionClass = "site-section";
type TabClass = "site-tab";
export const TAB_CLASS: TabClass = "site-tab";

interface SectionDef {
  label: string;
  href: `/#${Section}`;
  sectionId: Section;
  sectionClass: SectionClass;
  tabClass: TabClass;
}
type SectionDefs = { [key in Section]: SectionDef };

export const SECTION_DEFS: SectionDefs = {
  "about-us": {
    label: "About Us",
    href: "/#about-us",
    sectionId: `about-us`,
    sectionClass: SECTION_CLASS,
    tabClass: TAB_CLASS,
  },
  "our-work": {
    label: "Our Work",
    href: "/#our-work",
    sectionId: `our-work`,
    sectionClass: SECTION_CLASS,
    tabClass: TAB_CLASS,
  },
  certifications: {
    label: "Certifications",
    href: "/#certifications",
    sectionId: `certifications`,
    sectionClass: SECTION_CLASS,
    tabClass: TAB_CLASS,
  },
  distributorships: {
    label: "Distributorships",
    href: "/#distributorships",
    sectionId: `distributorships`,
    sectionClass: SECTION_CLASS,
    tabClass: TAB_CLASS,
  },
  "contact-us": {
    label: "Contact Us",
    href: "/#contact-us",
    sectionId: `contact-us`,
    sectionClass: SECTION_CLASS,
    tabClass: TAB_CLASS,
  },
};
