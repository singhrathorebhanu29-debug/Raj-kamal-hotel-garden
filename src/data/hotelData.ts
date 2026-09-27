import { HotelInfo, AmenityItem, GalleryImage } from '../types';

export const HOTEL_INFO: HotelInfo = {
  name: 'Raj Kamal Hotel & Garden',
  tagline: 'Comfortable Stay. Great Service. A Memorable Experience.',
  starRating: 3,
  phone: '+919630356116',
  displayPhone: '096303 56116',
  // Verified hotel WhatsApp number (without '+' or leading zero for wa.me link: 919630356116)
  // Easy to update if management specifies an alternate WhatsApp line
  whatsAppNumber: '919630356116',
  displayWhatsApp: '096303 56116',
  address: {
    line1: 'Chauraha, Near Noel Public School',
    line2: 'Chandra Nagar, Anand Nagar',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    pincode: '474012',
    full: 'Chauraha, Near Noel Public School, Chandra Nagar, Anand Nagar, Gwalior, Madhya Pradesh – 474012',
  },
  // Real Google Maps search query URL using exact property address
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Raj+Kamal+Hotel+%26+Garden,+Chauraha,+Near+Noel+Public+School,+Chandra+Nagar,+Anand+Nagar,+Gwalior,+Madhya+Pradesh+474012',
  googleRating: {
    score: 4.8,
    totalReviews: 80,
    breakdown: {
      rooms: 4.9,
      service: 4.9,
      location: 4.8,
    },
  },
};

export const ROOM_DETAILS = [
  {
    id: 'ac-luxury',
    title: 'AC Luxury Rooms',
    badge: 'Guest Favorite',
    tagline: 'Refined comfort with comprehensive room amenities',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    features: [
      { name: 'Air-conditioned rooms', desc: 'Climate-controlled cooling for year-round comfort' },
      { name: 'Private bathroom & shower', desc: 'Ensuite bath with hot and cold shower facilities' },
      { name: 'Kitchen facility in rooms', desc: 'In-room kitchen amenities for convenient food prep' },
      { name: '24-hour Room Service', desc: 'Fresh meals and refreshments delivered directly to your room' },
    ],
    pricingNote: 'Check latest room rates and availability.',
  },
  {
    id: 'ac-standard',
    title: 'Air-Conditioned Executive Rooms',
    badge: 'Comfort & Quiet',
    tagline: 'Peaceful stay designed for business and leisure travelers',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    features: [
      { name: 'Air-conditioned rooms', desc: 'Efficient individual temperature control' },
      { name: 'Private bathroom & shower', desc: 'Clean, modern private bathroom and fresh linens' },
      { name: 'Kitchen facility in rooms', desc: 'Practical kitchenette setup for extended or family stays' },
      { name: 'Free Wi-Fi & Work Desk', desc: 'High-speed internet access throughout the room' },
    ],
    pricingNote: 'Check latest room rates and availability.',
  },
];

export const AMENITIES_LIST: AmenityItem[] = [
  { name: 'Free Wi-Fi', category: 'essentials', icon: 'Wifi', description: 'High-speed wireless connectivity throughout hotel rooms and common areas' },
  { name: 'Free Breakfast', category: 'essentials', icon: 'Coffee', description: 'Fresh, complimentary morning breakfast to start your day comfortably' },
  { name: 'Free Gated Self Parking', category: 'facilities', icon: 'Car', description: 'Secure on-premise gated parking area with peace of mind' },
  { name: 'In-house Restaurant', category: 'facilities', icon: 'Utensils', description: 'Delicious dining on-site serving freshly prepared cuisine' },
  { name: '24-hour Room Service', category: 'services', icon: 'Clock', description: 'Attentive round-the-clock food and refreshment delivery to your door' },
  { name: '24-hour Front Desk', category: 'services', icon: 'ShieldCheck', description: 'Staff available day and night to assist with check-in and guest needs' },
  { name: 'Lift', category: 'facilities', icon: 'ArrowUpDown', description: 'Elevator access providing smooth mobility across hotel floors' },
  { name: 'Baggage Storage', category: 'services', icon: 'Luggage', description: 'Secure luggage holding before check-in or after check-out' },
  { name: 'Laundry Service', category: 'services', icon: 'Shirt', description: 'Professional in-house garment care and washing assistance' },
  { name: 'Business Centre', category: 'facilities', icon: 'Briefcase', description: 'Work-ready facilities suited for corporate and business guests' },
  { name: 'Wheelchair Accessible', category: 'facilities', icon: 'Accessibility', description: 'Thoughtfully designed barrier-free access for guests with mobility needs' },
  { name: 'Child Friendly', category: 'family', icon: 'Smile', description: 'Welcoming ambiance tailored for families traveling with children' },
  { name: 'Kids Activities', category: 'family', icon: 'Gamepad2', description: 'Engaging recreational spaces and garden activities for youngsters' },
  { name: 'Pet Friendly', category: 'family', icon: 'Dog', description: 'Pet-friendly accommodations welcoming your companion animals' },
  { name: 'Smoke-free Property', category: 'essentials', icon: 'Ban', description: 'Fresh, clean indoor atmosphere for healthy and relaxed living' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'hero-garden',
    title: 'Hotel Garden & Exterior',
    category: 'garden',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    caption: 'Lush greenery, peaceful garden grounds, and welcoming hotel facade in Gwalior',
  },
  {
    id: 'luxury-room',
    title: 'AC Luxury Room',
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    caption: 'Comfortable air-conditioned bedroom with premium bedding and warm wood tones',
  },
  {
    id: 'dining-hall',
    title: 'In-House Restaurant',
    category: 'dining',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious restaurant serving freshly prepared breakfast, lunch, and dinner',
  },
  {
    id: 'room-suite',
    title: 'Air-Conditioned Room & Living',
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Well-appointed room with private bathroom and kitchen facility',
  },
  {
    id: 'garden-lawn',
    title: 'Garden Lawn & Open Space',
    category: 'garden',
    url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Relaxing outdoor greenery ideal for evening strolls and family leisure',
  },
  {
    id: 'bathroom-clean',
    title: 'Private Bathroom & Shower',
    category: 'rooms',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Hygienic private ensuite bathroom with shower facilities and continuous water supply',
  },
  {
    id: 'front-desk',
    title: '24-Hour Front Desk & Lobby',
    category: 'hotel',
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Round-the-clock reception team ready to welcome and assist you',
  },
  {
    id: 'dining-food',
    title: 'Fresh Culinary Delights',
    category: 'dining',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    caption: 'Delicious food prepared by the in-house restaurant, highly appreciated by staying guests',
  },
];
