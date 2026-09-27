import React, { useState } from 'react';
import {
  LayoutDashboard,
  X,
  BedDouble,
  Trees,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Calendar,
  Phone,
  User,
  Filter,
  Info,
  ChevronDown
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export type DashboardBookingStatus = 'Pending' | 'Confirmed' | 'Cancelled';
export type DashboardBookingType = 'Room Booking' | 'Garden / Event Booking';

export interface DashboardBookingItem {
  id: string;
  customerName: string;
  phone: string;
  bookingType: DashboardBookingType;
  date: string;
  guests: string;
  status: DashboardBookingStatus;
  details: string;
  createdAt: string;
}

interface OwnerDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  recentBookings?: DashboardBookingItem[];
}

// Initial realistic demo bookings for Raj Kamal Hotel & Garden
const INITIAL_DEMO_BOOKINGS: DashboardBookingItem[] = [
  {
    id: 'RK-RM-8419',
    customerName: 'Sunil Verma',
    phone: '098261 44521',
    bookingType: 'Room Booking',
    date: '2026-10-02 to 2026-10-04',
    guests: '2 Guests',
    status: 'Pending',
    details: 'AC Luxury Room with Private Bathroom & Kitchen Facility (Ground floor preferred)',
    createdAt: 'Today, 10:15 AM',
  },
  {
    id: 'RK-EV-9214',
    customerName: 'Pooja Rawat',
    phone: '094251 88390',
    bookingType: 'Garden / Event Booking',
    date: '2026-10-18',
    guests: '120 Guests',
    status: 'Confirmed',
    details: 'Event Type: Family Function / Ring Ceremony. Evening lawn gathering with catering setup.',
    createdAt: 'Yesterday, 04:30 PM',
  },
  {
    id: 'RK-RM-7932',
    customerName: 'Amit Saxena',
    phone: '097520 11984',
    bookingType: 'Room Booking',
    date: '2026-09-29 to 2026-10-01',
    guests: '3 Guests',
    status: 'Confirmed',
    details: 'Air-conditioned rooms with private bathroom and parking slot.',
    createdAt: 'Sep 25, 02:10 PM',
  },
  {
    id: 'RK-EV-6401',
    customerName: 'Dr. R. K. Mishra',
    phone: '098930 76543',
    bookingType: 'Garden / Event Booking',
    date: '2026-10-25',
    guests: '80 Guests',
    status: 'Pending',
    details: 'Event Type: Outdoor Gathering / Community Meet. Peaceful garden setting needed.',
    createdAt: 'Sep 24, 11:45 AM',
  },
  {
    id: 'RK-RM-5510',
    customerName: 'Deepak Tomar',
    phone: '096300 22198',
    bookingType: 'Room Booking',
    date: '2026-09-26 to 2026-09-27',
    guests: '1 Guest',
    status: 'Cancelled',
    details: 'Client travel schedule postponed. Cancelled upon phone request.',
    createdAt: 'Sep 22, 09:00 AM',
  },
];

export const OwnerDashboardModal: React.FC<OwnerDashboardModalProps> = ({
  isOpen,
  onClose,
  recentBookings = [],
}) => {
  const [bookings, setBookings] = useState<DashboardBookingItem[]>(() => [
    ...recentBookings,
    ...INITIAL_DEMO_BOOKINGS,
  ]);
  const [filterType, setFilterType] = useState<'All' | 'Room' | 'Garden'>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Confirmed' | 'Cancelled'>('All');

  // Sync new bookings submitted during the session
  React.useEffect(() => {
    if (recentBookings.length > 0) {
      setBookings((prev) => {
        const existingIds = new Set(prev.map((b) => b.id));
        const toAdd = recentBookings.filter((b) => !existingIds.has(b.id));
        if (toAdd.length > 0) {
          return [...toAdd, ...prev];
        }
        return prev;
      });
    }
  }, [recentBookings]);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Calculate Metrics strictly required:
  // - Total Booking Requests
  // - Room Requests
  // - Garden/Event Requests
  // - Pending
  // - Confirmed
  // - Cancelled
  const totalRequests = bookings.length;
  const roomRequests = bookings.filter((b) => b.bookingType === 'Room Booking').length;
  const gardenRequests = bookings.filter((b) => b.bookingType === 'Garden / Event Booking').length;
  const pendingRequests = bookings.filter((b) => b.status === 'Pending').length;
  const confirmedRequests = bookings.filter((b) => b.status === 'Confirmed').length;
  const cancelledRequests = bookings.filter((b) => b.status === 'Cancelled').length;

  // Filtered booking list
  const filteredBookings = bookings.filter((b) => {
    if (filterType === 'Room' && b.bookingType !== 'Room Booking') return false;
    if (filterType === 'Garden' && b.bookingType !== 'Garden / Event Booking') return false;
    if (filterStatus !== 'All' && b.status !== filterStatus) return false;
    return true;
  });

  // Demo status update action for the owner
  const handleUpdateStatus = (id: string, newStatus: DashboardBookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dashboard-title"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Modal Dialog Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl bg-[#111316] border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-[#16191d] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center shrink-0">
              <LayoutDashboard className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 id="dashboard-title" className="font-serif text-lg sm:text-xl text-white font-medium truncate">
                  Owner Booking Dashboard
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#c5a059]/20 text-[#dfc287] border border-[#c5a059]/40">
                  Demo UI
                </span>
              </div>
              <p className="text-xs text-[#8e949e] truncate mt-0.5">
                Raj Kamal Hotel & Garden • Gwalior Property Management Overview
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Dashboard"
            className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* Demo Notice Banner strictly adhering to prompt:
              "This is only a demo UI. Do not add a backend or database. Do not claim that bookings are automatically saved." */}
          <div className="p-3.5 sm:p-4 rounded-lg bg-[#181c21] border border-white/10 text-xs text-[#a0a5ad] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-white">Demo Dashboard View:</strong> Displays incoming customer inquiries and current booking requests for hotel management. In practice, all booking requests are sent to the hotel reception via WhatsApp and verified over phone (<span className="text-[#c5a059]">{HOTEL_INFO.displayPhone}</span>). No backend or database is attached.
            </div>
          </div>

          {/* 6 Summary Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            
            {/* 1. Total Booking Requests */}
            <div className="bg-[#171a1e] border border-white/10 rounded-lg p-3.5 flex flex-col justify-between">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#a0a5ad] block">
                Total Requests
              </span>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-serif text-2xl sm:text-3xl text-white font-bold">
                  {totalRequests}
                </span>
                <span className="text-xs text-[#c5a059]">100%</span>
              </div>
            </div>

            {/* 2. Room Requests */}
            <div className="bg-[#171a1e] border border-white/10 rounded-lg p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#dfc287]">
                <BedDouble className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="truncate">Room Requests</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-serif text-2xl sm:text-3xl text-white font-bold">
                  {roomRequests}
                </span>
                <span className="text-[11px] text-[#8e949e]">AC Rooms</span>
              </div>
            </div>

            {/* 3. Garden/Event Requests */}
            <div className="bg-[#171a1e] border border-white/10 rounded-lg p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#dfc287]">
                <Trees className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="truncate">Garden Requests</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-serif text-2xl sm:text-3xl text-white font-bold">
                  {gardenRequests}
                </span>
                <span className="text-[11px] text-[#8e949e]">Events</span>
              </div>
            </div>

            {/* 4. Pending */}
            <div className="bg-[#1b1914] border border-amber-500/30 rounded-lg p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Pending</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-serif text-2xl sm:text-3xl text-amber-400 font-bold">
                  {pendingRequests}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded font-medium">
                  Review
                </span>
              </div>
            </div>

            {/* 5. Confirmed */}
            <div className="bg-[#121c15] border border-emerald-500/30 rounded-lg p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Confirmed</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-serif text-2xl sm:text-3xl text-emerald-400 font-bold">
                  {confirmedRequests}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-medium">
                  Verified
                </span>
              </div>
            </div>

            {/* 6. Cancelled */}
            <div className="bg-[#1c1415] border border-rose-500/30 rounded-lg p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-rose-300">
                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>Cancelled</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="font-serif text-2xl sm:text-3xl text-rose-400 font-bold">
                  {cancelledRequests}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-rose-500/20 text-rose-300 rounded font-medium">
                  Closed
                </span>
              </div>
            </div>

          </div>

          {/* Filters & Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#8e949e] flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#c5a059]" />
                Filter:
              </span>
              
              {/* Type Filter */}
              <div className="inline-flex rounded-md bg-[#16181b] p-0.5 border border-white/10 text-xs">
                {(['All', 'Room', 'Garden'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setFilterType(t)}
                    className={`px-3 py-1 rounded text-xs transition-colors ${
                      filterType === t
                        ? 'bg-[#c5a059] text-black font-semibold'
                        : 'text-[#8e949e] hover:text-white'
                    }`}
                  >
                    {t === 'All' ? 'All Types' : t === 'Room' ? 'Rooms' : 'Garden / Events'}
                  </button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="inline-flex rounded-md bg-[#16181b] p-0.5 border border-white/10 text-xs">
                {(['All', 'Pending', 'Confirmed', 'Cancelled'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      filterStatus === s
                        ? 'bg-[#c5a059] text-black font-semibold'
                        : 'text-[#8e949e] hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-xs text-[#8e949e]">
              Showing <strong className="text-white">{filteredBookings.length}</strong> of {totalRequests} requests
            </span>
          </div>

          {/* Booking List with:
              - Customer Name
              - Booking Type
              - Date
              - Guests
              - Status */}

          {/* Desktop & Tablet Table View */}
          <div className="hidden md:block rounded-lg border border-white/10 bg-[#15171a] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#d4cfc7]">
                <thead className="bg-[#1b1e22] text-[#8e949e] uppercase tracking-wider text-[10px] font-semibold border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">Request ID</th>
                    <th className="py-3.5 px-4">Customer Name</th>
                    <th className="py-3.5 px-4">Booking Type</th>
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4">Guests</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-[#8e949e]">
                        No booking requests match the selected filters.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-mono text-[11px] text-[#c5a059] font-medium">
                          {b.id}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-white">{b.customerName}</div>
                          <div className="text-[11px] text-[#8e949e] flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3 text-[#c5a059]" />
                            <a href={`tel:${b.phone}`} className="hover:underline">{b.phone}</a>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center gap-1.5 font-medium ${
                            b.bookingType === 'Room Booking' ? 'text-amber-200' : 'text-emerald-200'
                          }`}>
                            {b.bookingType === 'Room Booking' ? (
                              <BedDouble className="w-3.5 h-3.5 text-[#c5a059]" />
                            ) : (
                              <Trees className="w-3.5 h-3.5 text-emerald-400" />
                            )}
                            {b.bookingType}
                          </span>
                          <div className="text-[11px] text-[#8e949e] line-clamp-1 max-w-xs mt-0.5 font-light">
                            {b.details}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 text-white">
                            <Calendar className="w-3.5 h-3.5 text-white/50" />
                            <span>{b.date}</span>
                          </div>
                          <div className="text-[10px] text-[#6e747e] mt-0.5">{b.createdAt}</div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 text-white">
                            <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                            {b.guests}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                              b.status === 'Pending'
                                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                                : b.status === 'Confirmed'
                                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                                : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                b.status === 'Pending'
                                  ? 'bg-amber-400 animate-pulse'
                                  : b.status === 'Confirmed'
                                  ? 'bg-emerald-400'
                                  : 'bg-rose-400'
                              }`}
                            />
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {/* Quick status toggler in demo mode */}
                          <div className="relative inline-block text-left">
                            <select
                              value={b.status}
                              onChange={(e) => handleUpdateStatus(b.id, e.target.value as DashboardBookingStatus)}
                              className="bg-[#111316] text-[#dfc287] border border-white/20 hover:border-[#c5a059] rounded px-2 py-1 text-xs focus:outline-none cursor-pointer"
                            >
                              <option value="Pending" className="bg-[#1a1d20] text-amber-300">Set Pending</option>
                              <option value="Confirmed" className="bg-[#1a1d20] text-emerald-300">Set Confirmed</option>
                              <option value="Cancelled" className="bg-[#1a1d20] text-rose-300">Set Cancelled</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card List View (strictly preventing table overflow on phones) */}
          <div className="md:hidden space-y-3">
            {filteredBookings.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#8e949e] bg-[#15171a] rounded-lg border border-white/10">
                No booking requests match the selected filters.
              </div>
            ) : (
              filteredBookings.map((b) => (
                <div
                  key={b.id}
                  className="bg-[#15171a] border border-white/10 rounded-lg p-4 space-y-3 shadow-md"
                >
                  {/* Top card bar: ID & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-[#c5a059] font-bold">
                      {b.id}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        b.status === 'Pending'
                          ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          : b.status === 'Confirmed'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          b.status === 'Pending'
                            ? 'bg-amber-400'
                            : b.status === 'Confirmed'
                            ? 'bg-emerald-400'
                            : 'bg-rose-400'
                        }`}
                      />
                      {b.status}
                    </span>
                  </div>

                  {/* Customer & Phone */}
                  <div className="border-y border-white/5 py-2.5 space-y-1">
                    <div className="font-medium text-white text-sm">
                      {b.customerName}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8e949e]">
                      <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                      <a href={`tel:${b.phone}`} className="text-[#dfc287] hover:underline">
                        {b.phone}
                      </a>
                    </div>
                  </div>

                  {/* Booking Type, Date & Guests */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-[#8e949e] block font-semibold">
                        Type
                      </span>
                      <span className="text-white font-medium flex items-center gap-1 mt-0.5">
                        {b.bookingType === 'Room Booking' ? (
                          <BedDouble className="w-3.5 h-3.5 text-[#c5a059]" />
                        ) : (
                          <Trees className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                        <span className="truncate">{b.bookingType}</span>
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase text-[#8e949e] block font-semibold">
                        Guests
                      </span>
                      <span className="text-white font-medium flex items-center gap-1 mt-0.5">
                        <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                        {b.guests}
                      </span>
                    </div>

                    <div className="col-span-2 pt-1">
                      <span className="text-[10px] uppercase text-[#8e949e] block font-semibold">
                        Date / Duration
                      </span>
                      <span className="text-white font-medium flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                        {b.date}
                      </span>
                    </div>
                  </div>

                  {/* Details Note */}
                  {b.details && (
                    <div className="text-[11px] text-[#a0a5ad] bg-black/40 p-2 rounded border border-white/5 font-light">
                      {b.details}
                    </div>
                  )}

                  {/* Status update selector on mobile */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="text-[10px] text-[#8e949e] uppercase">Change Status:</span>
                    <select
                      value={b.status}
                      onChange={(e) => handleUpdateStatus(b.id, e.target.value as DashboardBookingStatus)}
                      aria-label="Change Status"
                      className="bg-[#111316] text-[#dfc287] border border-white/20 rounded px-2 py-1 text-xs focus:outline-none"
                    >
                      <option value="Pending" className="bg-[#1a1d20] text-amber-300">Pending</option>
                      <option value="Confirmed" className="bg-[#1a1d20] text-emerald-300">Confirmed</option>
                      <option value="Cancelled" className="bg-[#1a1d20] text-rose-300">Cancelled</option>
                    </select>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-[#16191d] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8e949e]">
          <div>
            Hotel Direct Line:{' '}
            <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#c5a059] font-medium hover:underline">
              {HOTEL_INFO.displayPhone}
            </a>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-sm text-xs uppercase tracking-wider transition-colors"
          >
            Close Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
