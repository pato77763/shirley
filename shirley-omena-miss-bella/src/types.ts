export interface Service {
  id: string;
  title: string;
  category: 'cabelo' | 'tratamento' | 'mega' | 'outros';
  shortDescription: string;
  fullDescription: string;
  priceEstimate?: string;
  duration?: string;
  iconName: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
}
