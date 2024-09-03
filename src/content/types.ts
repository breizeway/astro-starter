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

export interface About {
  title: string;
  description: Markdown;
  image: Image;
  location_card: AboutCard;
  business_card: AboutCard;
  service_card: AboutCard;
}
