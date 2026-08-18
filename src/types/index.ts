export interface NavLink {
  title: string;
  href: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
}

export interface TravelTip {
  id: string;
  title: string;
  description: string;
  category?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Place {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  location: string;
  category: string;
  duration: string;
  bestTime: string;
  featured: boolean;
  tourAvailable: boolean;
  tourSlug?: string;
  highlights?: string[];
  gallery?: GalleryImage[];
  travelTips?: TravelTip[];
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  introImage?: string;
  ctaImage?: string;
  location: string;
  region: string;
  knownFor: string;
  idealFor?: string[];
  recommendedDuration: string;
  bestTime: string;
  numberOfTours: number;
  featured: boolean;
  places: Place[];
  tours?: Tour[];
  highlights?: Highlight[];
  experiences?: Experience[];
  travelTips?: TravelTip[];
  faqs?: FaqItem[];
  gallery?: GalleryImage[];
  seo?: SeoMetadata;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  duration: string;
  shortDescription: string;
  description?: string;
  image: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  highlights: string[];
  featured: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  message: string;
  date: string;
}
