type Markdown = string;
type Image = string;

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
  description: string;
}

export interface About {
  title: string;
  description: string;
  location_card: AboutCard;
  business_card: AboutCard;
  service_card: AboutCard;
}
