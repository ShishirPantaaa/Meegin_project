"use client";

import { useState, useCallback, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    User,
    Mail,
    Calendar,
    Users,
    MapPin,
    ShieldCheck,
    CheckCircle2,
    AlertCircle,
    Loader2,
    Clock,
    Map,
    Globe2,
    MessageSquare,
    Check
} from "lucide-react";
import type { Tour } from "@/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function BookingForm({ tour, allTours }: { tour: Tour; allTours: Tour[] }) {
    const router = useRouter();

    /* Group tours for select dropdown */
    const toursByDestination = allTours.reduce((acc, currentTour) => {
        const dest = currentTour.destination;
        if (!acc[dest]) acc[dest] = [];
        acc[dest].push(currentTour);
        return acc;
    }, {} as Record<string, Tour[]>);
    /* form state */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");

    const [travelDate, setTravelDate] = useState("");
    const [travelers, setTravelers] = useState<number | "">(1);
    const [adults, setAdults] = useState<number | "">("");
    const [children, setChildren] = useState<number | "">("");

    const [message, setMessage] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    /* validation trackers */
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    /* helper functions */
    const getTravelersNum = () => (typeof travelers === "number" ? travelers : 0);

    const subtotal = tour.price && getTravelersNum() > 0 ? tour.price * getTravelersNum() : 0;
    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: tour.currency || "USD",
        maximumFractionDigits: 0,
    }).format(tour.price || 0);

    const formattedSubtotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: tour.currency || "USD",
        maximumFractionDigits: 0,
    }).format(subtotal);

    /* field validation logic */
    const errors = {
        name: touched.name && name.trim().length < 2 ? "Please enter your full name." : null,
        email:
            touched.email && !email.trim() ? "Please enter your email address." :
                touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email address." : null,
        travelDate: touched.travelDate && !travelDate ? "Please select your preferred travel date." : null,
        travelers: touched.travelers && getTravelersNum() < 1 ? "Please enter at least 1 traveler." : null,
    };

    const isFormValid =
        name.trim().length >= 2 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        travelDate !== "" &&
        getTravelersNum() >= 1;

    /* handlers */
    const handleBlur = useCallback(
        (field: string) => () =>
            setTouched((prev) => ({ ...prev, [field]: true })),
        []
    );

    const handleSubmit = useCallback(
        async (e: FormEvent) => {
            e.preventDefault();
            // Mark required fields as touched
            setTouched({
                name: true,
                email: true,
                travelDate: true,
                travelers: true,
            });
            setFormError(null);

            if (!isFormValid) return;

            setIsSubmitting(true);

            const whatsappMessage = [
                "Hello MEegin Tours & Travels,",
                "",
                "New Tour Booking Request",
                "",
                `Package / Destination: ${tour.title} - ${tour.destination}`,
                "",
                "Personal Information",
                `Full Name: ${name}`,
                `Email Address: ${email}`,
                `Country of Residence: ${country || "Not provided"}`,
                "",
                "Trip Information",
                `Preferred Travel Date: ${travelDate}`,
                `Number of Travelers: ${travelers}`,
                `Adults: ${adults || "Not provided"}`,
                `Children: ${children || "Not provided"}`,
                "",
                "Additional Information",
                `Hotel / Pickup Location: ${pickupLocation || "Not provided"}`,
                `Special Requests / Requirements: ${message || "Not provided"}`,
                "",
                "Please contact the customer to confirm availability and booking details.",
                "",
                "Thank you.",
            ].join("\n");

            window.open(
                `https://wa.me/9779748809397?text=${encodeURIComponent(whatsappMessage)}`,
                "_blank",
                "noopener,noreferrer"
            );
            setIsSubmitting(false);
        },
        [adults, children, country, email, isFormValid, message, name, pickupLocation, tour.destination, tour.title, travelDate, travelers]
    );

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
            >
                <div className="bg-emerald-600 px-8 py-12 text-center text-white">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                        <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Booking Request Received!</h2>
                    <p className="mt-4 text-emerald-100">Thank you for choosing MEegin Tours & Travels.</p>
                </div>

                <div className="p-8 sm:p-10">
                    <p className="text-slate-600 leading-relaxed text-center mb-8">
                        Your booking request has been securely transmitted. Our travel team will review your request and contact you within 24 hours with availability, final pricing, and next steps for confirmation.
                    </p>

                    <div className="mb-10 rounded-2xl bg-slate-50 p-6">
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Request Details</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b border-slate-200 pb-4">
                                <span className="text-slate-500">Tour</span>
                                <span className="font-semibold text-slate-900">{tour.title}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 pb-4">
                                <span className="text-slate-500">Travel Date</span>
                                <span className="font-semibold text-slate-900">{travelDate}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200 pb-4">
                                <span className="text-slate-500">Travelers</span>
                                <span className="font-semibold text-slate-900">{travelers} Person(s)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Primary Contact</span>
                                <span className="font-semibold text-slate-900 text-right">{name}<br /><span className="font-normal text-slate-500">{email}</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Link
                            href="/tours"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
                        >
                            Back to Tours
                        </Link>
                        <Link
                            href="/destinations"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0091DA] px-8 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/15 transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AB8]"
                        >
                            Explore Destinations
                        </Link>
                    </div>
                </div>
            </motion.div>
        );
    }

    const renderTripSummary = (className?: string) => (
        <div className={cn("rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm", className)}>
            <div className="relative h-48 w-full bg-slate-100">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="line-clamp-2 text-xl font-bold leading-tight text-white">{tour.title}</h3>
                </div>
            </div>

            <div className="p-6">
                <div className="mb-6 space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                        <Map className="mt-0.5 h-4 w-4 shrink-0 text-[#0091DA]" />
                        <span><strong className="font-medium text-slate-900">Destination:</strong> {tour.destination}</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#0091DA]" />
                        <span><strong className="font-medium text-slate-900">Duration:</strong> {tour.duration}</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#0091DA]" />
                        <span><strong className="font-medium text-slate-900">Date:</strong> {travelDate || "Not selected"}</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#0091DA]" />
                        <span>
                            <strong className="font-medium text-slate-900">Travelers:</strong>{" "}
                            {travelers || "Not selected"}
                        </span>
                    </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Price Estimate</h4>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-500">Price</span>
                            <span className="font-semibold text-[#0091DA]">Best and affordable price</span>
                        </div>
                    </div>
                    <p className="mt-3 text-[10px] uppercase text-slate-400 leading-tight">
                        *Final price will be confirmed by our travel team based on season and availability.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

            {/* Mobile Tour Summary */}
            {renderTripSummary("lg:hidden")}

            {/* ──────── LEFT: BOOKING FORM ──────── */}
            <div className="w-full lg:w-2/3">
                <form onSubmit={handleSubmit} noValidate className="space-y-8">

                    {/* Card 1: Package Selection (New) */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-6 text-xl font-bold text-slate-900">1. Select Package</h2>

                        <div>
                            <label htmlFor="tourSelection" className="mb-1.5 block text-sm font-medium text-slate-700">
                                Target Destination / Package
                            </label>
                            <div className="relative">
                                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><Map className="h-4 w-4" /></span>
                                <select
                                    id="tourSelection"
                                    value={tour.slug}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (val && val !== tour.slug) {
                                            if (val.startsWith("destination_")) {
                                                const destSlug = val.replace("destination_", "");
                                                router.push(`/destinations/${destSlug}`);
                                            } else {
                                                router.push(`/booking/${val}`);
                                            }
                                        }
                                    }}
                                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
                                >
                                    {Object.entries(toursByDestination).flatMap(([dest, destTours]) => [
                                        <option
                                            key={`dest-${dest}`}
                                            value={`destination_${destTours[0].destinationSlug}`}
                                            className="font-bold bg-slate-50 text-slate-900"
                                        >
                                            {dest} (Go to Destination Page)
                                        </option>,
                                        ...destTours.map((t) => (
                                            <option key={t.slug} value={t.slug}>
                                                {"\u00A0\u00A0\u00A0"}• {t.title}
                                            </option>
                                        ))
                                    ])}
                                </select>
                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                    <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                You can switch your destination or travel package anytime before submitting.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Personal Info */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-6 text-xl font-bold text-slate-900">2. Personal Information</h2>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Name */}
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><User className="h-4 w-4" /></span>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onBlur={handleBlur("name")}
                                        placeholder="Enter your full name"
                                        className={cn(
                                            "w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                                            errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                                        )}
                                    />
                                </div>
                                {errors.name && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><Mail className="h-4 w-4" /></span>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={handleBlur("email")}
                                        placeholder="you@example.com"
                                        className={cn(
                                            "w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                                            errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                                        )}
                                    />
                                </div>
                                {errors.email && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
                            </div>

                            {/* Country */}
                            <div className="sm:col-span-2">
                                <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Country of Residence
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><Globe2 className="h-4 w-4" /></span>
                                    <input
                                        id="country"
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        placeholder="e.g. United Kingdom"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Trip Info */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-6 text-xl font-bold text-slate-900">3. Trip Information</h2>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {/* Date */}
                            <div>
                                <label htmlFor="travelDate" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Preferred Travel Date <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><Calendar className="h-4 w-4" /></span>
                                    <input
                                        id="travelDate"
                                        type="date"
                                        required
                                        value={travelDate}
                                        onChange={(e) => setTravelDate(e.target.value)}
                                        onBlur={handleBlur("travelDate")}
                                        min={new Date().toISOString().split("T")[0]}
                                        className={cn(
                                            "w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                                            errors.travelDate ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                                        )}
                                    />
                                </div>
                                {errors.travelDate && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.travelDate}</p>}
                            </div>

                            {/* Total Travelers */}
                            <div>
                                <label htmlFor="travelers" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Number of Travelers <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><Users className="h-4 w-4" /></span>
                                    <input
                                        id="travelers"
                                        type="number"
                                        min="1"
                                        required
                                        value={travelers}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setTravelers(val === "" ? "" : parseInt(val, 10));
                                        }}
                                        onBlur={handleBlur("travelers")}
                                        placeholder="1"
                                        className={cn(
                                            "w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15",
                                            errors.travelers ? "border-red-300 focus:border-red-400 focus:ring-red-400/15" : "border-slate-200"
                                        )}
                                    />
                                </div>
                                {errors.travelers && <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500"><AlertCircle className="h-3 w-3" />{errors.travelers}</p>}
                            </div>

                            {/* Adults (Optional mapping based on total) */}
                            <div>
                                <label htmlFor="adults" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Adults
                                </label>
                                <input
                                    id="adults"
                                    type="number"
                                    min="1"
                                    value={adults}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setAdults(val === "" ? "" : parseInt(val, 10));
                                    }}
                                    placeholder="0"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
                                />
                            </div>

                            {/* Children */}
                            <div>
                                <label htmlFor="children" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Children (under 12)
                                </label>
                                <input
                                    id="children"
                                    type="number"
                                    min="0"
                                    value={children}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setChildren(val === "" ? "" : parseInt(val, 10));
                                    }}
                                    placeholder="0"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Additional Details */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <h2 className="mb-6 text-xl font-bold text-slate-900">4. Additional Information</h2>

                        <div className="space-y-6">
                            {/* Location */}
                            <div>
                                <label htmlFor="pickupLocation" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Hotel / Pickup Location
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-4 text-slate-400"><MapPin className="h-4 w-4" /></span>
                                    <input
                                        id="pickupLocation"
                                        type="text"
                                        value={pickupLocation}
                                        onChange={(e) => setPickupLocation(e.target.value)}
                                        placeholder="e.g. Kathmandu Marriott Hotel"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
                                    />
                                </div>
                            </div>


                            {/* Messages */}
                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                                    Special Requests / Requirements
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute left-3.5 top-4 text-slate-400"><MessageSquare className="h-4 w-4" /></span>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Dietary requirements, medical conditions, or any special celebrations..."
                                        className="w-full resize-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

            {/* ──────── RIGHT: SIDEBAR (Sticky) ──────── */}
            <div className="w-full lg:sticky lg:top-24 lg:w-1/3 flex flex-col gap-6">

                {/* Desktop Tour Summary */}
                {renderTripSummary("hidden lg:block")}

                {/* Form Error Alert */}
                <AnimatePresence>
                    {formError && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                                <p>{formError}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Submit */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <button
                        type="button" // Change if using standard form submit outside the form wrapper, but here we trigger manually or change to form submit if we wrapper the sidebar inside the <form>.
                        onClick={handleSubmit} // Using generic click handler because submit button is outside `<form>`
                        disabled={isSubmitting}
                        className={cn(
                            "inline-flex flex-col h-14 w-full items-center justify-center gap-1 rounded-2xl text-base font-semibold text-white transition-all duration-200",
                            "bg-[#0091DA] shadow-lg shadow-[#0091DA]/15 hover:bg-[#004AB8] active:scale-[0.98]",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004AB8] focus-visible:ring-offset-2",
                            "disabled:pointer-events-none disabled:opacity-60"
                        )}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="h-5 w-5 animate-spin" />
                                Processing request...
                            </span>
                        ) : (
                            "Request Booking"
                        )}
                    </button>
                    <p className="mt-4 text-center text-xs text-slate-500 leading-relaxed">
                        Your booking request will be securely reviewed by our travel team before final confirmation.
                    </p>
                </div>

                {/* Trust Section */}
                <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                        <ShieldCheck className="h-5 w-5 text-[#0091DA]" />
                        <h3>Why book with MEegin?</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            Trusted Nepal travel support
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            Clear booking information
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            Personalized trip assistance
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            Flexible travel planning
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            Local Nepal travel expertise
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
