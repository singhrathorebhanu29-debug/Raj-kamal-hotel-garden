import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { RoomBookingEnquiry, GardenBookingEnquiry } from '../types';
import {
  BedDouble,
  Trees,
  User,
  Phone,
  Calendar,
  Users,
  Clock,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Tag,
  AlertCircle,
} from 'lucide-react';

export type BookingType = 'room' | 'garden';

export interface BookingReceipt {
  type: BookingType;
  bookingRequestId: string;
  customerName: string;
  phoneNumber: string;
  bookingType: string;
  selectedRoomType?: string;
  selectedRoomNumber?: string;
  price?: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: string | number;
  bookingDetails: string;
  bookingStatus: string;
  whatsappUrl: string;
}

export interface DemoRoom {
  number: string;
  status: 'available' | 'occupied';
}

export interface DemoRoomCategory {
  id: string;
  name: string;
  price: string;
  totalRooms: number;
  availableRooms: number;
  occupiedRooms: number;
  rooms: DemoRoom[];
}

export const DEMO_ROOM_CATEGORIES: DemoRoomCategory[] = [
  {
    id: 'ac-room',
    name: 'AC Room',
    price: '₹1,599 / night',
    totalRooms: 8,
    availableRooms: 5,
    occupiedRooms: 3,
    rooms: [
      { number: '201', status: 'available' },
      { number: '202', status: 'occupied' },
      { number: '203', status: 'available' },
      { number: '204', status: 'available' },
      { number: '205', status: 'occupied' },
      { number: '206', status: 'available' },
      { number: '207', status: 'occupied' },
      { number: '208', status: 'available' },
    ],
  },
  {
    id: 'non-ac-room',
    name: 'Non-AC Room',
    price: '₹999 / night',
    totalRooms: 6,
    availableRooms: 4,
    occupiedRooms: 2,
    rooms: [
      { number: '101', status: 'available' },
      { number: '102', status: 'occupied' },
      { number: '103', status: 'available' },
      { number: '104', status: 'available' },
      { number: '105', status: 'occupied' },
      { number: '106', status: 'available' },
    ],
  },
  {
    id: 'ac-luxury-room',
    name: 'AC Luxury Room',
    price: '₹2,499 / night',
    totalRooms: 6,
    availableRooms: 3,
    occupiedRooms: 3,
    rooms: [
      { number: '101', status: 'available' },
      { number: '102', status: 'occupied' },
      { number: '103', status: 'available' },
      { number: '104', status: 'occupied' },
      { number: '105', status: 'available' },
      { number: '106', status: 'occupied' },
    ],
  },
  {
    id: 'luxury-room',
    name: 'Luxury Room',
    price: '₹2,199 / night',
    totalRooms: 5,
    availableRooms: 3,
    occupiedRooms: 2,
    rooms: [
      { number: '301', status: 'available' },
      { number: '302', status: 'occupied' },
      { number: '303', status: 'available' },
      { number: '304', status: 'occupied' },
      { number: '305', status: 'available' },
    ],
  },
  {
    id: 'couple-room',
    name: 'Couple Room',
    price: '₹1,799 / night',
    totalRooms: 6,
    availableRooms: 4,
    occupiedRooms: 2,
    rooms: [
      { number: '211', status: 'available' },
      { number: '212', status: 'occupied' },
      { number: '213', status: 'available' },
      { number: '214', status: 'available' },
      { number: '215', status: 'occupied' },
      { number: '216', status: 'available' },
    ],
  },
];

interface BookingSectionProps {
  activeTab?: BookingType;
  onTabChange?: (tab: BookingType) => void;
  bookingTrigger?: number;
  prefill?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    eventDate?: string;
    roomTitle?: string;
  };
  onBookingSubmitted?: (receipt: BookingReceipt) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  activeTab = 'room',
  onTabChange,
  bookingTrigger = 0,
  prefill,
  onBookingSubmitted,
}) => {
  const [currentTab, setCurrentTab] = useState<BookingType>(activeTab);

  // Sync tab and reset receipt whenever activeTab or bookingTrigger changes
  useEffect(() => {
    if (activeTab) {
      setCurrentTab(activeTab);
    }
    // Clicking any booking button on the site opens the requested booking form directly
    setBookingReceipt(null);
  }, [activeTab, bookingTrigger]);

  const handleTabSwitch = (tab: BookingType) => {
    setCurrentTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
    setBookingReceipt(null);
  };

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  // 1. Room Booking State:
  // - Customer Name
  // - Phone Number
  // - Check-in Date
  // - Check-out Date
  // - Number of Guests
  // - Booking Details / Special Request
  const [roomData, setRoomData] = useState<RoomBookingEnquiry>({
    guestName: '',
    phone: '',
    checkIn: today,
    checkOut: tomorrow,
    guests: '2',
    specialRequests: '',
  });

  // Demo Room Category & Room Number selection state
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('ac-luxury-room');
  const [selectedRoomNumber, setSelectedRoomNumber] = useState<string>('101');

  const selectedCategory =
    DEMO_ROOM_CATEGORIES.find((c) => c.id === selectedCategoryId) || DEMO_ROOM_CATEGORIES[2];

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    const cat = DEMO_ROOM_CATEGORIES.find((c) => c.id === categoryId);
    if (cat) {
      const roomMatch = cat.rooms.find(
        (r) => r.number === selectedRoomNumber && r.status === 'available'
      );
      if (!roomMatch) {
        const firstAvail = cat.rooms.find((r) => r.status === 'available');
        setSelectedRoomNumber(firstAvail ? firstAvail.number : '');
      }
    }
  };

  // 2. Garden / Event Booking State:
  // - Customer Name
  // - Phone Number
  // - Event Date
  // - Number of Guests
  // - Event Type
  // - Event Details / Special Request
  const [gardenData, setGardenData] = useState<GardenBookingEnquiry>({
    customerName: '',
    phone: '',
    eventDate: tomorrow,
    guests: '50',
    eventType: 'Family Function',
    eventDetails: '',
  });

  // Apply prefill data when triggered
  useEffect(() => {
    if (prefill) {
      if (prefill.roomTitle) {
        const lower = prefill.roomTitle.toLowerCase();
        if (lower.includes('luxury')) {
          setSelectedCategoryId('ac-luxury-room');
        } else if (lower.includes('standard') || lower.includes('executive')) {
          setSelectedCategoryId('ac-room');
        }
      }
      if (prefill.checkIn || prefill.checkOut || prefill.guests || prefill.roomTitle) {
        setRoomData((prev) => ({
          ...prev,
          checkIn: prefill.checkIn || prev.checkIn,
          checkOut: prefill.checkOut || prev.checkOut,
          guests: prefill.guests ? String(prefill.guests) : prev.guests,
          specialRequests: prefill.roomTitle
            ? prev.specialRequests && !prev.specialRequests.includes(prefill.roomTitle)
              ? `Preferred Room: ${prefill.roomTitle}. ${prev.specialRequests}`
              : `Preferred Room: ${prefill.roomTitle}`
            : prev.specialRequests,
        }));
      }
      if (prefill.eventDate || prefill.guests) {
        setGardenData((prev) => ({
          ...prev,
          eventDate: prefill.eventDate || prev.eventDate,
          guests: prefill.guests ? String(prefill.guests) : prev.guests,
        }));
      }
    }
  }, [prefill, bookingTrigger]);

  // Confirmed receipt state shown after clicking "Confirm Booking"
  const [bookingReceipt, setBookingReceipt] = useState<BookingReceipt | null>(null);

  // Submit Room Booking Form:
  // Displays the receipt with "Booking Status: Pending" and pre-fills WhatsApp
  const handleRoomSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedRoomNumber) {
      return;
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const requestId = `RK-RM-${randomNum}`;
    const roomLabel = `Room Booking – ${selectedCategory.name} (Room ${selectedRoomNumber})`;

    const lines = [
      `New Booking Request – Raj Kamal Hotel & Garden`,
      ``,
      `Customer Name: ${roomData.guestName.trim()}`,
      `Booking Request ID: ${requestId}`,
      `Phone Number: ${roomData.phone.trim()}`,
      `Selected Room Type: ${selectedCategory.name}`,
      `Selected Room Number: Room ${selectedRoomNumber}`,
      `Price: ${selectedCategory.price}`,
      `Check-in Date: ${roomData.checkIn}`,
      `Check-out Date: ${roomData.checkOut}`,
      `Number of Guests: ${roomData.guests}`,
      `Booking Details: ${selectedCategory.name} (Room ${selectedRoomNumber}) with Private Bathroom & Kitchen Facility${
        roomData.specialRequests.trim() ? `. Special Requests: ${roomData.specialRequests.trim()}` : ''
      }`,
      `Booking Status: Pending`,
    ];

    const messageText = lines.join('\n');
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsAppNumber}?text=${encoded}`;

    const receipt: BookingReceipt = {
      type: 'room',
      bookingRequestId: requestId,
      customerName: roomData.guestName.trim(),
      phoneNumber: roomData.phone.trim(),
      bookingType: roomLabel,
      selectedRoomType: selectedCategory.name,
      selectedRoomNumber: selectedRoomNumber,
      price: selectedCategory.price,
      checkInDate: roomData.checkIn,
      checkOutDate: roomData.checkOut,
      numberOfGuests: `${roomData.guests} Guest(s)`,
      bookingDetails: `Room ${selectedRoomNumber} (${selectedCategory.name}) • ${selectedCategory.price}. AC Luxury Room with Private Bathroom & Kitchen Facility${
        roomData.specialRequests.trim() ? ` (Special Requests: ${roomData.specialRequests.trim()})` : ''
      }`,
      bookingStatus: 'Pending',
      whatsappUrl,
    };

    setBookingReceipt(receipt);
    onBookingSubmitted?.(receipt);
  };

  // Submit Garden / Event Booking Form:
  // Displays the receipt with "Booking Status: Pending" and pre-fills WhatsApp
  const handleGardenSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const requestId = `RK-EV-${randomNum}`;

    const lines = [
      `New Booking Request – Raj Kamal Hotel & Garden`,
      ``,
      `Customer Name: ${gardenData.customerName.trim()}`,
      `Booking Request ID: ${requestId}`,
      `Phone Number: ${gardenData.phone.trim()}`,
      `Booking Type: Garden / Event Booking`,
      `Check-in Date: ${gardenData.eventDate}`,
      `Check-out Date: ${gardenData.eventDate}`,
      `Number of Guests: ${gardenData.guests}`,
      `Booking Details: Event Type: ${gardenData.eventType.trim()}${
        gardenData.eventDetails.trim() ? `. Event Details / Special Request: ${gardenData.eventDetails.trim()}` : ''
      }`,
    ];

    const messageText = lines.join('\n');
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsAppNumber}?text=${encoded}`;

    const receipt: BookingReceipt = {
      type: 'garden',
      bookingRequestId: requestId,
      customerName: gardenData.customerName.trim(),
      phoneNumber: gardenData.phone.trim(),
      bookingType: `Garden / Event Booking (${gardenData.eventType.trim()})`,
      checkInDate: gardenData.eventDate,
      checkOutDate: gardenData.eventDate,
      numberOfGuests: `${gardenData.guests} Guest(s)`,
      bookingDetails: `Event Type: ${gardenData.eventType.trim()}${
        gardenData.eventDetails.trim() ? ` (Details: ${gardenData.eventDetails.trim()})` : ''
      }`,
      bookingStatus: 'Pending',
      whatsappUrl,
    };

    setBookingReceipt(receipt);
    onBookingSubmitted?.(receipt);
  };

  return (
    <section id="booking-section" className="py-20 sm:py-28 bg-[#0d0f11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a059] mb-3">
            <span>Direct Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight mb-4">
            Reserve Your Experience
          </h2>
          <p className="text-[#a0a5ad] text-base sm:text-lg font-light">
            Select your booking preference below. Fill in your details and confirm to generate your official booking request receipt.
          </p>
        </div>

        {/* The Two Separate Booking Options (Tabs) */}
        {!bookingReceipt && (
          <div className="max-w-xl mx-auto mb-10">
            <div className="grid grid-cols-2 p-1.5 rounded-lg bg-[#15181b] border border-white/10 shadow-lg gap-1">
              <button
                type="button"
                onClick={() => handleTabSwitch('room')}
                className={`flex items-center justify-center gap-1.5 sm:gap-2.5 py-3 sm:py-3.5 px-2 sm:px-4 rounded-md text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 min-w-0 ${
                  currentTab === 'room'
                    ? 'bg-[#c5a059] text-black shadow-md'
                    : 'text-[#a0a5ad] hover:text-white hover:bg-white/5'
                }`}
              >
                <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Book a Room</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabSwitch('garden')}
                className={`flex items-center justify-center gap-1.5 sm:gap-2.5 py-3 sm:py-3.5 px-2 sm:px-4 rounded-md text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 min-w-0 ${
                  currentTab === 'garden'
                    ? 'bg-[#c5a059] text-black shadow-md'
                    : 'text-[#a0a5ad] hover:text-white hover:bg-white/5'
                }`}
              >
                <Trees className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Book Garden / Event</span>
              </button>
            </div>
          </div>
        )}

        {/* Booking Form or Confirmation Card */}
        <div className="max-w-3xl mx-auto bg-[#141619] rounded-xl border border-white/10 p-4 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {bookingReceipt ? (
            /* Beautiful Booking Confirmation Card */
            <div className="py-4 sm:py-6 text-center space-y-7 animate-in fade-in zoom-in-95 duration-400">
              
              {/* Premium Namaste / Folded-Hands Avatar */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#2a2417] via-[#1d1912] to-[#12110e] border-2 border-[#c5a059] flex items-center justify-center shadow-xl shadow-[#c5a059]/15 relative">
                  <div className="absolute inset-0 rounded-full bg-[#c5a059]/10 animate-ping opacity-25" />
                  
                  {/* Stylized Indian Namaste / Folded Hands Icon */}
                  <svg
                    viewBox="0 0 48 48"
                    className="w-12 h-12 text-[#dfc287] drop-shadow-md"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 7C22.8 10.2 20.8 14.5 19.5 18.5L18 23.5C16.8 27.2 16.5 30.5 17.5 33.5L20 40C20.5 41.2 21.6 42 23 42C23.6 42 24 41.8 24 41.8C24 41.8 24.4 42 25 42C26.4 42 27.5 41.2 28 40L30.5 33.5C31.5 30.5 31.2 27.2 30 23.5L28.5 18.5C27.2 14.5 25.2 10.2 24 7Z"
                      fill="#c5a059"
                      fillOpacity="0.25"
                      stroke="#dfc287"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 8.5V40.5"
                      stroke="#dfc287"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 20C21.2 17.5 22.8 12.5 24 8.5C25.2 12.5 26.8 17.5 28 20"
                      stroke="#dfc287"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18.5 27.5C20.2 25 22.2 20.8 24 16.5C25.8 20.8 27.8 25 29.5 27.5"
                      stroke="#dfc287"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 34C20 31.5 22 27.5 24 23.5C26 27.5 28 31.5 30 34"
                      stroke="#dfc287"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Thank You & Receipt Header */}
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium tracking-tight">
                  Thank You, {bookingReceipt.customerName} 🙏
                </h3>
                <p className="text-sm sm:text-base text-[#dfc287] font-light mt-2">
                  Your booking request has been received.
                </p>
              </div>

              {/* Receipt Card Details Box */}
              <div className="bg-[#191c20] border border-[#c5a059]/30 rounded-lg p-5 sm:p-7 max-w-xl mx-auto text-left shadow-xl divide-y divide-white/10">
                
                {/* Header row: Property & Status */}
                <div className="pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block">
                      Raj Kamal Hotel & Garden
                    </span>
                    <span className="text-xs text-[#8e949e]">Gwalior, Madhya Pradesh</span>
                  </div>
                  {/* Prominent Booking Status: Pending */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-semibold w-fit">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>Booking Status: Pending</span>
                  </div>
                </div>

                {/* Specified Fields */}
                <div className="py-4 space-y-3 text-xs sm:text-sm">
                  {/* Status row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Booking Status
                    </span>
                    <span className="text-amber-400 font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Pending
                    </span>
                  </div>

                  {/* 1. Customer Name */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Customer Name
                    </span>
                    <span className="text-white font-semibold">
                      {bookingReceipt.customerName}
                    </span>
                  </div>

                  {/* 2. Selected Room Type (for Room Booking) */}
                  {bookingReceipt.selectedRoomType ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                        Selected Room Type
                      </span>
                      <span className="text-[#dfc287] font-semibold">
                        {bookingReceipt.selectedRoomType}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                        Booking Type
                      </span>
                      <span className="text-[#dfc287] font-semibold">
                        {bookingReceipt.bookingType}
                      </span>
                    </div>
                  )}

                  {/* 3. Selected Room Number (for Room Booking) */}
                  {bookingReceipt.selectedRoomNumber && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                        Selected Room Number
                      </span>
                      <span className="font-mono font-bold text-white bg-[#c5a059]/20 px-2.5 py-0.5 rounded border border-[#c5a059]/40 inline-block w-fit">
                        Room {bookingReceipt.selectedRoomNumber}
                      </span>
                    </div>
                  )}

                  {/* 4. Price (for Room Booking) */}
                  {bookingReceipt.price && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                        Price
                      </span>
                      <span className="text-[#c5a059] font-mono font-bold text-sm">
                        {bookingReceipt.price}
                      </span>
                    </div>
                  )}

                  {/* Phone Number */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Phone Number
                    </span>
                    <span className="text-white font-medium">
                      {bookingReceipt.phoneNumber}
                    </span>
                  </div>

                  {/* Booking Request ID */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Booking Request ID
                    </span>
                    <span className="font-mono font-bold text-[#dfc287] text-sm bg-black/40 px-2.5 py-0.5 rounded border border-white/5 inline-block w-fit">
                      {bookingReceipt.bookingRequestId}
                    </span>
                  </div>

                  {/* 5. Check-in Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Check-in Date
                    </span>
                    <span className="text-white font-medium">
                      {bookingReceipt.checkInDate}
                    </span>
                  </div>

                  {/* 6. Check-out Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Check-out Date
                    </span>
                    <span className="text-white font-medium">
                      {bookingReceipt.checkOutDate}
                    </span>
                  </div>

                  {/* 7. Number of Guests */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium">
                      Number of Guests
                    </span>
                    <span className="text-white font-medium">
                      {bookingReceipt.numberOfGuests}
                    </span>
                  </div>

                  {/* 8. Booking Details */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-1">
                    <span className="text-[#8e949e] uppercase tracking-wider text-[11px] font-medium shrink-0">
                      Booking Details
                    </span>
                    <span className="text-white/90 text-right sm:max-w-xs text-xs sm:text-sm">
                      {bookingReceipt.bookingDetails}
                    </span>
                  </div>
                </div>

                {/* Card footer verification */}
                <div className="pt-3 text-[11px] text-[#7a818c] flex items-center justify-between">
                  <span>Booking Status: Pending Hotel Confirmation</span>
                  <span>Destination: {HOTEL_INFO.displayWhatsApp}</span>
                </div>
              </div>

              {/* Note */}
              <div className="bg-[#1b1c1e] p-5 rounded-lg border border-[#c5a059]/40 max-w-xl mx-auto text-left shadow-md">
                <p className="text-xs sm:text-sm text-[#e2ded9] font-light leading-relaxed">
                  “Your booking is not confirmed yet. Please send this booking receipt to the hotel on WhatsApp. Your booking will be confirmed only after the hotel reviews your request and sends you a confirmation.”
                </p>
              </div>

              {/* Exact One Button: "Send Booking on WhatsApp" */}
              <div className="pt-2 flex flex-col items-center justify-center gap-3">
                <a
                  href={bookingReceipt.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all shadow-xl hover:shadow-[#25D366]/25 active:scale-95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Send Booking on WhatsApp</span>
                </a>

                {/* Back button to modify request */}
                <button
                  type="button"
                  onClick={() => setBookingReceipt(null)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#8e949e] hover:text-[#dfc287] transition-colors py-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Modify booking details</span>
                </button>
              </div>

            </div>
          ) : currentTab === 'room' ? (
            /* 1. SEPARATE "Book a Room" FORM */
            <form onSubmit={handleRoomSubmit} className="space-y-6">
              
              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    Book a Room
                  </h3>
                  <p className="text-xs text-[#a0a5ad] mt-0.5">
                    AC Luxury Rooms with private bathroom and kitchen facility in Gwalior.
                  </p>
                </div>
                <span className="text-[11px] text-[#c5a059] font-mono uppercase bg-[#c5a059]/10 px-2.5 py-1 rounded border border-[#c5a059]/30">
                  Room Selection
                </span>
              </div>

              {/* DEMO ROOM CATEGORIES */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Select Room Category</span>
                  </label>
                  <span className="text-[10px] text-[#8e949e]">Click a category to view rooms</span>
                </div>

                {/* 5 Categories: AC Room, Non-AC Room, AC Luxury Room, Luxury Room, Couple Room */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {DEMO_ROOM_CATEGORIES.map((category) => {
                    const isCategoryActive = category.id === selectedCategoryId;
                    return (
                      <button
                        type="button"
                        key={category.id}
                        onClick={() => handleSelectCategory(category.id)}
                        className={`p-3 rounded-lg border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                          isCategoryActive
                            ? 'bg-[#1b1e22] border-[#c5a059] ring-1 ring-[#c5a059] shadow-md'
                            : 'bg-[#15171a] border-white/10 hover:border-white/20 hover:bg-[#181b1e]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <span className={`text-xs sm:text-sm font-semibold ${isCategoryActive ? 'text-[#dfc287]' : 'text-white'}`}>
                            {category.name}
                          </span>
                          <span className="font-mono text-[11px] text-[#c5a059] font-semibold shrink-0">
                            {category.price}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-1 pt-2.5 mt-2 border-t border-white/5 text-[10px]">
                          <div>
                            <span className="text-[#8e949e] block">Total</span>
                            <span className="text-white font-medium">{category.totalRooms} rooms</span>
                          </div>
                          <div>
                            <span className="text-emerald-400 block font-medium">Available</span>
                            <span className="text-emerald-300 font-bold">{category.availableRooms}</span>
                          </div>
                          <div>
                            <span className="text-rose-400 block font-medium">Occupied</span>
                            <span className="text-rose-300 font-medium">{category.occupiedRooms}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ROOM NUMBERS DISPLAY FOR SELECTED CATEGORY */}
              <div className="bg-[#181b1f] border border-white/10 rounded-lg p-4 sm:p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                      {selectedCategory.name}
                    </h4>
                    <div className="flex items-center gap-3 text-xs mt-1">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Available: {selectedCategory.availableRooms}
                      </span>
                      <span className="text-[#8e949e]">
                        Occupied: {selectedCategory.occupiedRooms}
                      </span>
                      <span className="text-[#8e949e]">
                        Total: {selectedCategory.totalRooms} Rooms
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#c5a059] font-semibold bg-[#c5a059]/10 px-2.5 py-1 rounded border border-[#c5a059]/30 w-fit">
                    Demo Price: {selectedCategory.price}
                  </span>
                </div>

                {/* Room Numbers: Clickable Available vs Occupied */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#a0a5ad] font-semibold block mb-2.5">
                    Select a Room Number:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-2.5">
                    {selectedCategory.rooms.map((room) => {
                      const isOccupied = room.status === 'occupied';
                      const isSelected = selectedRoomNumber === room.number && !isOccupied;

                      if (isOccupied) {
                        return (
                          <div
                            key={room.number}
                            title={`Room ${room.number} is currently occupied (Demo)`}
                            className="py-2.5 px-2 rounded bg-white/5 border border-white/5 text-white/35 flex flex-col items-center justify-center cursor-not-allowed select-none text-center"
                          >
                            <span className="font-mono text-sm font-semibold">[{room.number}]</span>
                            <span className="text-[10px] text-rose-400/80 uppercase tracking-wide font-medium mt-0.5">
                              Occupied
                            </span>
                          </div>
                        );
                      }

                      return (
                        <button
                          type="button"
                          key={room.number}
                          onClick={() => setSelectedRoomNumber(room.number)}
                          className={`py-2.5 px-2 rounded flex flex-col items-center justify-center transition-all text-center cursor-pointer ${
                            isSelected
                              ? 'bg-[#c5a059] text-black font-bold ring-2 ring-[#c5a059] shadow-lg shadow-[#c5a059]/20'
                              : 'bg-[#1b1f24] hover:bg-[#252a31] text-white border border-white/15 hover:border-[#c5a059]/70'
                          }`}
                        >
                          <span className="font-mono text-sm font-bold">[{room.number}]</span>
                          <span
                            className={`text-[10px] uppercase tracking-wide mt-0.5 ${
                              isSelected ? 'text-black/80 font-bold' : 'text-emerald-400 font-medium'
                            }`}
                          >
                            Available
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* AFTER SELECTING A ROOM, CLEARLY SHOW: "Room 101 Selected" */}
                {selectedRoomNumber ? (
                  <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-white font-serif text-base sm:text-lg font-medium">
                        Room {selectedRoomNumber} Selected
                      </span>
                      <span className="text-xs text-emerald-300 font-medium hidden sm:inline">
                        • {selectedCategory.name}
                      </span>
                    </div>
                    <span className="text-xs text-[#dfc287] font-mono">
                      Demo Price: {selectedCategory.price}
                    </span>
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Please click an available room number above to select your room.</span>
                  </div>
                )}
              </div>

              {/* Guest Details Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                {/* 1. Customer Name */}
                <div>
                  <label htmlFor="room-customer-name" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Customer Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="room-customer-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={roomData.guestName}
                      onChange={(e) => setRoomData({ ...roomData, guestName: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label htmlFor="room-phone-number" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="room-phone-number"
                      type="tel"
                      required
                      placeholder="e.g. 096303 56116 or +91 98765 43210"
                      value={roomData.phone}
                      onChange={(e) => setRoomData({ ...roomData, phone: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Check-in Date */}
                <div>
                  <label htmlFor="room-checkin-date" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Check-in Date <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="room-checkin-date"
                      type="date"
                      required
                      value={roomData.checkIn}
                      onChange={(e) => setRoomData({ ...roomData, checkIn: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* 4. Check-out Date */}
                <div>
                  <label htmlFor="room-checkout-date" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Check-out Date <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="room-checkout-date"
                      type="date"
                      required
                      value={roomData.checkOut}
                      onChange={(e) => setRoomData({ ...roomData, checkOut: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* 5. Number of Guests */}
                <div className="sm:col-span-2">
                  <label htmlFor="room-number-of-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Number of Guests <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="room-number-of-guests"
                      value={roomData.guests}
                      onChange={(e) => setRoomData({ ...roomData, guests: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors cursor-pointer [color-scheme:dark]"
                    >
                      <option value="1">1 Guest (Single Occupancy)</option>
                      <option value="2">2 Guests (Couple / Pair)</option>
                      <option value="3">3 Guests (Triple Occupancy)</option>
                      <option value="4">4 Guests (Family Stay)</option>
                      <option value="5+">5+ Guests (Multiple Rooms)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 6. Booking Details / Special Request */}
              <div>
                <label htmlFor="room-booking-details" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                  Booking Details / Special Request (Optional)
                </label>
                <div className="relative">
                  <textarea
                    id="room-booking-details"
                    rows={3}
                    placeholder="e.g. Expected arrival time, parking preference, extra bedding, kitchen requirements, etc."
                    value={roomData.specialRequests}
                    onChange={(e) => setRoomData({ ...roomData, specialRequests: e.target.value })}
                    className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm p-3.5 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Rate Notice */}
              <div className="bg-[#181a1e] p-4 rounded-md border border-white/10 text-xs text-[#a0a5ad] space-y-1">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                  <span>Selected: {selectedCategory.name} (Room {selectedRoomNumber || 'Selected'}) • Demo Price: {selectedCategory.price}</span>
                </div>
                <p className="text-[11px] text-[#8e949e]">
                  Click <strong>Continue Booking</strong> below to preview your official booking receipt with room details before sending it to the hotel.
                </p>
              </div>

              {/* EXISTING "Continue Booking" BUTTON */}
              <div>
                <button
                  type="submit"
                  disabled={!selectedRoomNumber}
                  className={`w-full py-4 font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
                    selectedRoomNumber
                      ? 'bg-[#c5a059] hover:bg-[#b38e46] text-black cursor-pointer'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  <span>Continue Booking</span>
                </button>
              </div>

            </form>
          ) : (
            /* 2. SEPARATE "Book Garden / Event" FORM */
            <form onSubmit={handleGardenSubmit} className="space-y-6">
              
              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    Book Garden / Event
                  </h3>
                  <p className="text-xs text-[#a0a5ad] mt-0.5">
                    Outdoor garden setting for family functions, celebrations, and outdoor gatherings in Gwalior.
                  </p>
                </div>
                <span className="text-[11px] text-[#c5a059] font-mono uppercase bg-[#c5a059]/10 px-2.5 py-1 rounded border border-[#c5a059]/30">
                  Garden / Event Enquiry
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Customer Name */}
                <div>
                  <label htmlFor="garden-customer-name" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Customer Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="garden-customer-name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Singh"
                      value={gardenData.customerName}
                      onChange={(e) => setGardenData({ ...gardenData, customerName: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label htmlFor="garden-phone-number" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="garden-phone-number"
                      type="tel"
                      required
                      placeholder="e.g. 096303 56116 or +91 98765 43210"
                      value={gardenData.phone}
                      onChange={(e) => setGardenData({ ...gardenData, phone: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Event Date */}
                <div>
                  <label htmlFor="garden-event-date" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Event Date <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="garden-event-date"
                      type="date"
                      required
                      value={gardenData.eventDate}
                      onChange={(e) => setGardenData({ ...gardenData, eventDate: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* 4. Number of Guests */}
                <div>
                  <label htmlFor="garden-number-of-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Number of Guests <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="garden-number-of-guests"
                      type="text"
                      required
                      placeholder="e.g. 50, 100, 150, 200"
                      value={gardenData.guests}
                      onChange={(e) => setGardenData({ ...gardenData, guests: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 pl-10 pr-4 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 5. Event Type */}
                <div className="sm:col-span-2">
                  <label htmlFor="garden-event-type" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                    Event Type <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="garden-event-type"
                      value={gardenData.eventType}
                      onChange={(e) => setGardenData({ ...gardenData, eventType: e.target.value })}
                      className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm py-3 px-4 text-white text-sm focus:outline-none transition-colors cursor-pointer [color-scheme:dark]"
                    >
                      <option value="Family Function">Family Function / Get-together</option>
                      <option value="Outdoor Gathering">Outdoor Gathering</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary Party">Anniversary Party</option>
                      <option value="Engagement / Pre-wedding Celebration">Engagement / Celebration</option>
                      <option value="Social Event">Social Event</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 6. Event Details / Special Request */}
              <div>
                <label htmlFor="garden-event-details" className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-2">
                  Event Details / Special Request (Optional)
                </label>
                <div className="relative">
                  <textarea
                    id="garden-event-details"
                    rows={3}
                    placeholder="e.g. Morning / evening timing, catering preferences, seating setup, specific arrangements, etc."
                    value={gardenData.eventDetails}
                    onChange={(e) => setGardenData({ ...gardenData, eventDetails: e.target.value })}
                    className="w-full bg-[#1b1e22] border border-white/15 focus:border-[#c5a059] rounded-sm p-3.5 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Notice */}
              <div className="bg-[#181a1e] p-4 rounded-md border border-white/10 text-xs text-[#a0a5ad] space-y-1">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-[#c5a059]" />
                  <span>Garden & Event Request Notice</span>
                </div>
                <p className="text-[11px] text-[#8e949e]">
                  Click <strong>Confirm Booking</strong> below to preview your official booking receipt before sending it to the hotel.
                </p>
              </div>

              {/* Confirm Booking Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#c5a059] hover:bg-[#b38e46] text-black font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Confirm Booking</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
