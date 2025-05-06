export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: number;
  coverImage: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}