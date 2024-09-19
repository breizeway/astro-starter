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

interface AboutCard {
  title: string;
  description: Markdown;
}

export interface AboutUs {
  title: string;
  description: Markdown;
  image: Image;
  locationCard: AboutCard;
  businessCard: AboutCard;
  serviceCard: AboutCard;
}

interface WorkGallery {
  name: string;
  description?: Markdown;
  images: Image[];
}

export interface OurWork {
  title: string;
  galleries: WorkGallery[];
}
