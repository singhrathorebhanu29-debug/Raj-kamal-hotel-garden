export interface HotelInfo {
  name: string;
  tagline: string;
  starRating: number;
  phone: string;
  displayPhone: string;
  whatsAppNumber: string; // Hotel verified WhatsApp number (e.g. 919630356116)
  displayWhatsApp: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  mapsUrl: string;
  googleRating: {
    score: number;
    totalReviews: number;
    breakdown: {
      rooms: number;
      service: number;
      location: number;
    };
  };
}

export interface RoomFeature {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface AmenityItem {
  name: string;
  category: 'essentials' | 'services' | 'facilities' | 'family';
  icon: string;
  description?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'garden' | 'dining' | 'hotel';
  url: string;
  caption: string;
}

export interface RoomBookingEnquiry {
  guestName: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number | string;
  specialRequests: string;
}

export interface GardenBookingEnquiry {
  customerName: string;
  phone: string;
  eventDate: string;
  guests: number | string;
  eventType: string;
  eventDetails: string;
}
