type Markdown = string;
interface Image {
  src: string;
  alt: string;
}

export interface ContentSection<T extends object> {
  id: string;
  collection: string;
  data: T;
}

export interface Banner {
  slogan: Markdown;
  image?: Image;
}

interface InfoCard {
  title: string;
  description: Markdown;
}

export interface AboutUs {
  title: string;
  description: Markdown;
  image?: Image;
  locationCard: InfoCard;
  businessCard: InfoCard;
  serviceCard: InfoCard;
}

interface WorkGallery {
  name: string;
  description?: Markdown;
  subDescriptions: string[];
  images: Image[];
}

export interface OurWork {
  title: string;
  galleries: WorkGallery[];
}

interface Certificate {
  name: string;
  image: Image;
}

export interface Certifications {
  title: string;
  description?: string;
  certificates: Certificate[];
}

interface Distributor {
  name?: string;
  href: string;
  image: Image;
}

export interface Distributorships {
  title: string;
  description?: string;
  distributors: Distributor[];
}

export interface ContactUs {
  title: string;
  emailCard: InfoCard;
  phoneCard: InfoCard;
  mailingCard: InfoCard;
  shippingCard: InfoCard;
}
