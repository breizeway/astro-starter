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

export interface About {
  title: string;
  description: string;
  location_card_title: string;
  location_card_description: string;
  business_card_title: string;
  business_card_description: string;
  service_card_title: string;
  service_card_description: string;
}
