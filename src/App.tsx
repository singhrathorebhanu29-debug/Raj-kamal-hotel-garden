import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { GardenEvents } from './components/GardenEvents';
import { Amenities } from './components/Amenities';
import { Dining } from './components/Dining';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Platforms } from './components/Platforms';
import { BookingSection, BookingType, BookingReceipt } from './components/BookingSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { OwnerDashboardModal, DashboardBookingItem } from './components/OwnerDashboardModal';

export default function App() {
  const [bookingTab, setBookingTab] = useState<BookingType>('room');
  const [bookingTrigger, setBookingTrigger] = useState<number>(0);
  const [bookingPrefill, setBookingPrefill] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    eventDate?: string;
    roomTitle?: string;
  }>({});
  const [isOwnerDashboardOpen, setIsOwnerDashboardOpen] = useState(false);
  const [newDashboardBookings, setNewDashboardBookings] = useState<DashboardBookingItem[]>([]);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookRoom = (params?: { checkIn?: string; checkOut?: string; guests?: number }) => {
    setBookingTab('room');
    if (params) {
      setBookingPrefill((prev) => ({
        ...prev,
        checkIn: params.checkIn,
        checkOut: params.checkOut,
        guests: params.guests,
      }));
    }
    setBookingTrigger((prev) => prev + 1);
    scrollToBooking();
  };

  const handleBookGarden = (params?: { eventDate?: string; guests?: number }) => {
    setBookingTab('garden');
    if (params) {
      setBookingPrefill((prev) => ({
        ...prev,
        eventDate: params.eventDate,
        guests: params.guests,
      }));
    }
    setBookingTrigger((prev) => prev + 1);
    scrollToBooking();
  };

  const handleSelectRoom = (roomTitle: string) => {
    setBookingTab('room');
    setBookingPrefill((prev) => ({
      ...prev,
      roomTitle,
    }));
    setBookingTrigger((prev) => prev + 1);
    scrollToBooking();
  };

  const handleBookingSubmitted = (receipt: BookingReceipt) => {
    const newBooking: DashboardBookingItem = {
      id: receipt.bookingRequestId,
      customerName: receipt.customerName,
      phone: receipt.phoneNumber,
      bookingType: receipt.type === 'room' ? 'Room Booking' : 'Garden / Event Booking',
      date: receipt.checkInDate === receipt.checkOutDate ? receipt.checkInDate : `${receipt.checkInDate} to ${receipt.checkOutDate}`,
      guests: String(receipt.numberOfGuests),
      status: 'Pending',
      details: receipt.bookingDetails,
      createdAt: 'Just now',
    };
    setNewDashboardBookings((prev) => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4efe8] flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Navigation Header */}
      <Navbar
        onBookRoom={handleBookRoom}
        onBookGarden={handleBookGarden}
        onOpenOwnerDashboard={() => setIsOwnerDashboardOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero
          onBookRoom={handleBookRoom}
          onBookGarden={handleBookGarden}
        />

        {/* About Section */}
        <About
          onBookRoom={handleBookRoom}
          onBookGarden={handleBookGarden}
        />

        {/* Accommodations / Rooms */}
        <Rooms onSelectRoom={handleSelectRoom} />

        {/* Garden & Events Section */}
        <GardenEvents onBookGarden={handleBookGarden} />

        {/* Amenities List */}
        <Amenities />

        {/* In-House Restaurant & Dining */}
        <Dining />

        {/* Google Ratings & Reviews */}
        <Reviews />

        {/* Property Gallery */}
        <Gallery />

        {/* Travel Portals / Platforms */}
        <Platforms />

        {/* Booking Reservation Section (Only Two Options: Book a Room & Book Garden / Event via WhatsApp) */}
        <BookingSection
          activeTab={bookingTab}
          onTabChange={setBookingTab}
          bookingTrigger={bookingTrigger}
          prefill={bookingPrefill}
          onBookingSubmitted={handleBookingSubmitted}
        />

        {/* Location & Contact Information */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerDashboard={() => setIsOwnerDashboardOpen(true)} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        onBookRoom={handleBookRoom}
        onBookGarden={handleBookGarden}
      />

      {/* Demo Owner Booking Dashboard Modal */}
      <OwnerDashboardModal
        isOpen={isOwnerDashboardOpen}
        onClose={() => setIsOwnerDashboardOpen(false)}
        recentBookings={newDashboardBookings}
      />
    </div>
  );
}
