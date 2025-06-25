import type {
  AboutUs,
  Banner,
  Certifications,
  ContactUs,
  ContentSection,
  Distributorships,
  OurWork,
} from "./types";

// Centralized fallback data to avoid duplication
export const FALLBACK_DATA = {
  banner: {
    id: "banner",
    collection: "home-page",
    data: {
      slogan: "",
      image: [],
    },
  } as ContentSection<Banner>,

  aboutUs: {
    id: "about-us",
    collection: "home-page",
    data: {
      description: "",
      image: [],
      locationCard: { title: "", description: "" },
      businessCard: { title: "", description: "" },
      serviceCard: { title: "", description: "" },
    },
  } as ContentSection<AboutUs>,

  ourWork: {
    id: "our-work",
    collection: "home-page",
    data: {
      title: "",
      galleries: [],
    },
  } as ContentSection<OurWork>,

  contactUs: {
    id: "contact-us",
    collection: "home-page",
    data: {
      title: "",
      emailCard: { title: "", description: "" },
      phoneCard: { title: "", description: "" },
      mailingCard: { title: "", description: "" },
      shippingCard: { title: "", description: "" },
    },
  } as ContentSection<ContactUs>,

  certifications: {
    id: "certifications",
    collection: "home-page",
    data: {
      description: "",
      certificates: [],
    },
  } as ContentSection<Certifications>,

  distributorships: {
    id: "distributorships",
    collection: "home-page",
    data: {
      description: "",
      distributors: [],
    },
  } as ContentSection<Distributorships>,
};
