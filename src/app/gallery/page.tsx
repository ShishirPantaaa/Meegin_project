import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { galleryImages } from "@/data/gallery";
import { GalleryClient } from "./gallery-client";
import { isValidImageSrc } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Travel Gallery | Explore Nepal | MEegin Tours & Travels",
  description:
    "Explore Nepal through the MEegin Tours & Travels gallery, featuring beautiful destinations, Himalayan landscapes, culture, wildlife, heritage sites and unforgettable travel experiences.",
  keywords: [
    "Nepal gallery",
    "Nepal travel photos",
    "Himalayan landscapes",
    "MEegin Tours & Travels",
    "Pokhara images",
    "Nepal wildlife",
    "Nepal heritage sites",
  ],
};

const FEATURED_DESTINATION_SLUGS = [
  "pokhara",
  "mustang",
  "chitwan",
  "lumbini",
  "kathmandu",
  "bandipur",
];

export default function GalleryPage() {
  // Find matching destination objects from the main data source
  const featuredDestinations = FEATURED_DESTINATION_SLUGS.map(
    (slug) => destinations.find((d) => d.slug === slug)
  ).filter(Boolean) as typeof destinations;

  return (
    <main className="bg-[#F7FAFC] text-[#172033]">

      {/* ── Hero Section ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-[#0c4e83] px-6 pb-16 pt-16 text-center text-white shadow-2xl shadow-slate-900/10 sm:px-12 md:px-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(0,145,218,0.3), transparent 50%), radial-gradient(circle at bottom right, rgba(33,151,54,0.2), transparent 45%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl flex flex-col items-center">
            <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-100 backdrop-blur-sm">
              Visual Journey
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Nepal Through Our Lens
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/90 sm:text-lg">
              Discover the beauty of Nepal through mountains, lakes, heritage sites, wildlife, culture and unforgettable journeys.
            </p>
          </div>
        </div>
      </section>

      {/* ── Client Gallery (Filter + Masonry + Lightbox) ───────────────────── */}
      <GalleryClient images={galleryImages} />

      {/* ── Featured Destinations ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="discover-heading">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            Discover Nepal
          </p>
          <h2 id="discover-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Where Will You Go Next?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From peaceful lakes and historic cities to Himalayan trails and wildlife adventures, Nepal offers a journey for every kind of traveler.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDestinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group flex flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
              aria-label={`Explore ${dest.name}`}
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                {isValidImageSrc(dest.heroImage) ? (
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#EAF7FD] to-[#F7FAFC] text-[#0091DA]">
                    <MapPin className="h-10 w-10 opacity-30" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-slate-900">{dest.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{dest.shortDescription}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#0091DA]">
                  Explore Destination
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Call to Action ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="rounded-4xl bg-[#004AB8] px-8 py-16 text-center text-white shadow-2xl shadow-slate-900/10 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7D4FF]">
            Plan Your Journey
          </p>
          <h2 id="cta-heading" className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to Explore Nepal?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-100/90">
            Turn these views into your own memories. Explore our destinations and find a journey designed for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/destinations">
              <Button variant="secondary" size="lg">
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
