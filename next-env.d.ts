/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface Hotel {
  id: number;
  stars: number;
  logo: string;
  name: string;
  images: string[];
  description: string;
}

declare interface EmailData {
  email: string;
  name: string;
  message: string;
  phone: string;
}
