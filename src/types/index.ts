// Types for Kerala Tours Travel Application

export interface Package {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  highlights: string[];
  category: 'domestic' | 'kerala' | 'outside-kerala';
  featured?: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'Non AC' | 'AC';
  category: '2x3' | 'MUV' | 'SUV' | 'Centica' | 'Sedan';
  seatingCapacity: number;
  pricePerKm: number;
  image: string;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'Local' | 'Intercity' | 'City Tour' | 'Site Seeing' | 'Airport' | 'Round Trip';
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  image?: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  helpful?: number;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  category: 'drive-option' | 'car-seating' | 'capacity' | 'rental-type' | 'destinations';
}

export interface BookingFormData {
  name: string;
  date: string;
  mobile: string;
  pickupLocation: string;
  dropLocation: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  locationDescription?: string;
  owner?: string;
  googleMapsUrl: string;
}
