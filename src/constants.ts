type Section =
  | "about-us"
  | "our-work"
  | "certifications"
  | "distributorships"
  | "contact-us";
type TabPrefix = "tab_";
export const TAB_PREFIX: TabPrefix = "tab_";
type SectionClass = "site_section";
export const SECTION_CLASS: SectionClass = "site_section";
interface SectionDef {
  label: string;
  href: `/#${Section}`;
  tabId: `${TabPrefix}${Section}`;
  sectionId: Section;
  sectionClass: SectionClass;
}
type SectionDefs = { [key in Section]: SectionDef };
export const SECTION_DEFS: SectionDefs = {
  "about-us": {
    label: "About Us",
    href: "/#about-us",
    tabId: `${TAB_PREFIX}about-us`,
    sectionId: `about-us`,
    sectionClass: SECTION_CLASS,
  },
  "our-work": {
    label: "Our Work",
    href: "/#our-work",
    tabId: `${TAB_PREFIX}our-work`,
    sectionId: `our-work`,
    sectionClass: SECTION_CLASS,
  },
  certifications: {
    label: "Certifications",
    href: "/#certifications",
    tabId: `${TAB_PREFIX}certifications`,
    sectionId: `certifications`,
    sectionClass: SECTION_CLASS,
  },
  distributorships: {
    label: "Distributorships",
    href: "/#distributorships",
    tabId: `${TAB_PREFIX}distributorships`,
    sectionId: `distributorships`,
    sectionClass: SECTION_CLASS,
  },
  "contact-us": {
    label: "Contact Us",
    href: "/#contact-us",
    tabId: `${TAB_PREFIX}contact-us`,
    sectionId: `contact-us`,
    sectionClass: SECTION_CLASS,
  },
};
