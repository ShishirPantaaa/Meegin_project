import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact MEegin Tours & Travels | Plan Your Nepal Journey",
  description:
    "Contact MEegin Tours & Travels for Nepal tour packages, custom trips, booking assistance, destination information, and reliable travel guidance.",
  keywords: [
    "Contact MEegin Tours",
    "Nepal travel agency contact",
    "Book Nepal tours",
    "custom Nepal trip",
    "Nepal tourism enquiries",
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">

      {/* ── Hero / Intro Section ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-[#004AB8] px-6 py-16 text-center text-white shadow-2xl shadow-slate-900/10 sm:px-12 sm:py-24">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(0,145,218,0.4), transparent 50%), radial-gradient(circle at bottom right, rgba(33,151,54,0.15), transparent 45%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl flex flex-col items-center">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm">
              Get in Touch
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Plan Your Nepal Journey
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/90 sm:text-lg">
              Have a question, need help choosing a destination, or ready to plan your next adventure? Our travel team is here to help you create a comfortable, memorable, and hassle-free journey through Nepal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-[#A7D4FF]">
              <span>Friendly guidance</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>Reliable service</span>
              <span className="hidden sm:inline">&bull;</span>
              <span>Personalized travel support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Information Cards ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 -mt-6 sm:-mt-12 relative z-10">
        <div className="grid gap-6 sm:grid-cols-3">

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
            className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#0091DA] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] transition-colors group-hover:bg-[#0091DA] group-hover:text-white">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">Call us</h3>
            <p className="mt-2 text-base font-medium text-slate-600 group-hover:text-[#0091DA]">
              {siteConfig.phone}
            </p>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#0091DA] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] transition-colors group-hover:bg-[#0091DA] group-hover:text-white">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">Email us</h3>
            <p className="mt-2 text-base font-medium text-slate-600 group-hover:text-[#0091DA]">
              {siteConfig.email}
            </p>
          </a>

          <a
            href="#office"
            className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#0091DA] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] transition-colors group-hover:bg-[#0091DA] group-hover:text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">Visit our office</h3>
            <div className="mt-2 text-base font-medium text-slate-600">
              <p>{siteConfig.name}</p>
              <p className="group-hover:text-[#0091DA]">Butwal, Nepal</p>
            </div>
          </a>

        </div>
      </section>

      {/* ── Main Contact Area ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col lg:flex-row">

          {/* Left Side: Information */}
          <div className="bg-[#172033] p-10 sm:p-16 lg:w-5/12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl text-white">
              How can we help?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-300">
              Whether you&apos;re planning your first trip to Nepal or returning for another adventure, our team can help you choose destinations, understand tour options, customize your itinerary, and make your booking process simple.
            </p>

            <div className="mt-10 mb-8 border-t border-slate-700 w-12" />

            <ul className="space-y-5">
              {[
                "Tour & package enquiries",
                "Custom itinerary planning",
                "Destination information",
                "Booking assistance",
                "Group and family travel"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0091DA]/20">
                    <ChevronRight className="h-4 w-4 text-[#0091DA]" />
                  </div>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 sm:p-16 lg:w-7/12 bg-white">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Send us an Enquiry</h3>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ── Why Contact MEegin ─────────────────────────────────────────────── */}
      <section className="bg-white border-t border-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Trust & Support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Why Travelers Choose MEegin
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Personalized Guidance</h3>
              <p className="text-sm leading-6 text-slate-600">
                Get travel suggestions based on your interests, time, and budget.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Reliable Support</h3>
              <p className="text-sm leading-6 text-slate-600">
                Our team is available to help before and during your journey.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Affordable Travel</h3>
              <p className="text-sm leading-6 text-slate-600">
                Comfortable and carefully planned travel experiences designed around your budget.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">Local Knowledge</h3>
              <p className="text-sm leading-6 text-slate-600">
                Discover Nepal with guidance that helps you experience more than the usual tourist route.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office / Location Section ──────────────────────────────────────── */}
      <section id="office" className="bg-[#F7FAFC] py-20" style={{ scrollMarginTop: "100px" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl border border-slate-200 bg-white p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#0091DA] shadow-sm mb-6">
                  <Building2 className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Visit Our Office
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 max-w-lg">
                  Prefer to talk in person? Visit our team and let us help you plan your Nepal adventure.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Location</p>
                      <p className="font-medium text-slate-900">{siteConfig.name}, Butwal, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Phone</p>
                      <p className="font-medium text-slate-900">{siteConfig.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">Email</p>
                      <p className="font-medium text-slate-900">{siteConfig.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-100 border border-slate-200 flex flex-col justify-center items-center text-slate-400">
                <MapPin className="h-12 w-12 mb-3 text-[#0091DA]" />
                <p className="font-semibold text-slate-600 text-lg">Butwal, Nepal</p>
                <p className="text-sm mt-1">Headquarters</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Quick CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F7FAFC] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl bg-[#0091DA] px-8 py-16 text-center text-white shadow-xl shadow-[#0091DA]/20 sm:px-12">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to Explore Nepal?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/90">
            Tell us where you want to go, and we&apos;ll help you plan the journey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/destinations">
              <Button variant="secondary" size="lg" className="text-[#004AB8]">
                Explore Destinations
              </Button>
            </Link>
            <Link href="/tours">
              <Button
                size="lg"
                className="border border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white"
              >
                View Tours
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
