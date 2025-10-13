export interface Promotion {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
}

export interface SiteSettings {
  companyName: string;
  slogan: string;
  heroBackground: string;
  aboutText: string;
  quote: string;
  leaderPhoto: string;
  brands: string[];
  contacts: {
    email: string;
    phone: string;
    address: string;
    requisites: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}