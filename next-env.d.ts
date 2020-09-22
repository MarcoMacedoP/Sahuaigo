/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface Hotel {
  id: string;
  stars: number;
  logo: string;
  name: string;
  images: string[];
  description: string;
}

declare interface EmailData {
  selectedHotelId: string;
  email: string;
  name: string;
  message: string;
  phone: string;
}
