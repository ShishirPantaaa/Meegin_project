"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, MapPin, Sparkles, Star, SunMedium } from "lucide-react";
import type { Destination } from "@/types";
import { isValidImageSrc } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "./place-card";
import { TourCard } from "./tour-card";
import { Gallery } from "./gallery";
import { WhyUs } from "./why-us";

interface DestinationPageProps {
  destination: Destination;
}

// ============================================================================
// DESTINATION PAGE - Comprehensive 15-Section Template
// ============================================================================

export function DestinationPage({ destination }: DestinationPageProps) {
  // Generate destination-specific headings
  const introHeading = getIntroHeading(destination.name);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: destination.name },
  ];

  // Get filtered tours for this destination
  const destinationTours = destination.tours?.filter((tour) => tour.destinationSlug === destination.slug) || [];

  // Get featured places
  const featuredPlaces = destination.places?.filter((place) => place.featured) || [];

  // Get gallery images
  const galleryImages = destination.gallery || [];

  // Get FAQs
  const faqs = destination.faqs || [];

  // Get travel tips
  const travelTips = destination.travelTips || [];

  // Get experiences
  const experiences = destination.experiences || [];

  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-16">
      {/* ====================================================================== */}
      {/* 1. BREADCRUMB */}
      {/* ====================================================================== */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ====================================================================== */}
      {/* 2. HERO SECTION - Using custom hero for destination pages */}
      {/* ====================================================================== */}
      <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl">
        <div className="relative h-72 sm:h-96 sm:h-120 lg:h-140">
          {isValidImageSrc(destination.heroImage) ? (
            <Image
              src={destination.heroImage}
              alt={`${destination.name} - ${destination.tagline}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
              <span className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Image coming soon
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 space-y-4 px-5 pb-8 pt-16 text-white sm:space-y-6 sm:px-10 sm:pb-12 sm:pt-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D4E8FF] sm:text-sm">Explore Nepal</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl sm:mt-4 lg:text-5xl xl:text-6xl">{destination.name}</h1>
            <p className="mt-2 max-w-2xl text-sm font-semibold text-slate-100 sm:mt-3 sm:text-base lg:text-lg">{destination.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/tours?destination=${destination.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0091DA] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004AB8] sm:px-6 sm:py-3"
            >
              Explore Tours
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:px-6 sm:py-3"
            >
              Plan Your Trip
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 3. INTRODUCTION - Two-column with Image + Description */}
      {/* ====================================================================== */}
      <section className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Discover {destination.name}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{introHeading}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{destination.description}</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#EAF7FD] p-6">
              <p className="text-sm font-semibold text-slate-600">Location</p>
              <p className="mt-2 text-lg font-bold text-[#004AB8]">{destination.location}</p>
            </div>
            <div className="rounded-3xl bg-[#ECF8EF] p-6">
              <p className="text-sm font-semibold text-slate-600">Region</p>
              <p className="mt-2 text-lg font-bold text-[#068835]">{destination.region}</p>
            </div>
            <div className="rounded-3xl bg-[#FFF4E5] p-6 sm:col-span-2">
              <p className="text-sm font-semibold text-slate-600">Known For</p>
              <p className="mt-2 text-lg font-bold text-slate-900">{destination.knownFor}</p>
            </div>
          </div>
        </div>
        <div className="order-1 overflow-hidden rounded-4xl lg:order-2">
          {isValidImageSrc(destination.introImage || destination.heroImage) ? (
            <Image
              src={destination.introImage || destination.heroImage}
              alt={`${destination.name} introduction`}
              width={600}
              height={500}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-96 w-full items-center justify-center bg-slate-100 text-sm font-semibold text-slate-500">
              Image coming soon
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0091DA]/5 via-white to-[#004AB8]/5 p-6 sm:rounded-[2.5rem] sm:p-8 sm:p-12 border border-blue-100/50 shadow-xl shadow-blue-900/5">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>
          <div className="relative z-10 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "Location", value: destination.location, icon: MapPin, color: "text-blue-600", bg: "bg-blue-100/50" },
              { label: "Known For", value: destination.knownFor, icon: Sparkles, color: "text-amber-600", bg: "bg-amber-100/50" },
              { label: "Recommended Stay", value: destination.recommendedDuration, icon: Clock, color: "text-emerald-600", bg: "bg-emerald-100/50" },
              { label: "Best Time", value: destination.bestTime, icon: SunMedium, color: "text-rose-600", bg: "bg-rose-100/50" },
              { label: "Tours Available", value: `${destination.numberOfTours} tours`, icon: Star, color: "text-indigo-600", bg: "bg-indigo-100/50" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5 stroke-[2] sm:h-6 sm:w-6" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 leading-tight sm:mt-2 sm:text-base sm:text-lg">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 5. EXPLORE DESTINATION - Call to Action */}
      {/* ====================================================================== */}
      <section className="rounded-4xl border border-slate-200 bg-gradient-to-r from-[#0091DA] to-[#004AB8] p-8 text-white shadow-sm sm:p-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to explore {destination.name}?</h2>
          <p className="mt-4 text-lg text-slate-100">
            Browse our carefully curated tour packages and discover the perfect adventure for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/tours?destination=${destination.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#004AB8] transition hover:bg-slate-50"
            >
              See All Tours
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 6. POPULAR PLACES */}
      {/* ====================================================================== */}
      {featuredPlaces.length > 0 && (
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Top Attractions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Popular places in {destination.name}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} destinationSlug={destination.slug} place={place} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/destinations/${destination.slug}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#0091DA] transition hover:translate-x-1"
            >
              View All Places
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      )}

      {/* ====================================================================== */}
      {/* 7. POPULAR TOURS */}
      {/* ====================================================================== */}
      {destinationTours.length > 0 && (
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Tour Packages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Explore {destination.name} with us
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinationTours.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          {destinationTours.length > 3 && (
            <div className="mt-8 text-center">
              <Link
                href={`/tours?destination=${destination.slug}`}
                className="inline-flex items-center gap-2 text-lg font-semibold text-[#0091DA] transition hover:translate-x-1"
              >
                View All {destination.numberOfTours} Tours
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          )}
        </section>
      )}

      {/* ====================================================================== */}
      {/* 8. THINGS TO EXPERIENCE */}
      {/* ====================================================================== */}
      {experiences.length > 0 && (
        <section>
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Experiences
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Things to experience in {destination.name}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>
      )}

      {/* ====================================================================== */}
      {/* 9. BEST TIME TO VISIT */}
      {/* ====================================================================== */}
      <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            Seasonal Guide
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Best time to visit {destination.name}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SeasonCard
            season="Spring"
            months="March - May"
            description="Pleasant weather, clear skies, ideal for hiking and photography."
            color="bg-[#E8F5E9]"
            textColor="text-[#068835]"
          />
          <SeasonCard
            season="Summer"
            months="June - August"
            description="Monsoon season, lush landscapes, fewer tourists, lower prices."
            color="bg-[#E0F7FA]"
            textColor="text-[#00796B]"
          />
          <SeasonCard
            season="Autumn"
            months="September - November"
            description="Clear visibility, comfortable temperatures, best trekking season."
            color="bg-[#FFF3E0]"
            textColor="text-[#F57C00]"
          />
          <SeasonCard
            season="Winter"
            months="December - February"
            description="Cold at high altitudes, clear views, quiet season."
            color="bg-[#F3E5F5]"
            textColor="text-[#6A1B9A]"
          />
        </div>
        <p className="mt-8 text-base leading-8 text-slate-600">
          <span className="font-semibold text-slate-900">Recommended season:</span> {destination.bestTime}
        </p>
      </section>

      {/* ====================================================================== */}
      {/* 10. WHY TRAVEL WITH MEEGIN */}
      {/* ====================================================================== */}
      <WhyUs />

      {/* ====================================================================== */}
      {/* 11. TRAVEL TIPS */}
      {/* ====================================================================== */}
      {travelTips.length > 0 && (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Traveler Tips
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Insider tips for {destination.name}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {travelTips.map((tip) => (
              <TravelTipCard key={tip.id} tip={tip} />
            ))}
          </div>
        </section>
      )}

      {/* ====================================================================== */}
      {/* 12. GALLERY */}
      {/* ====================================================================== */}
      {galleryImages.length > 0 && <Gallery images={galleryImages} />}

      {/* ====================================================================== */}
      {/* 13. FAQ / ACCORDION */}
      {/* ====================================================================== */}
      {faqs.length > 0 && (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqAccordion key={faq.id} faq={faq} />
            ))}
          </div>
        </section>
      )}

      {/* ====================================================================== */}
      {/* 14. CUSTOM TRIP CTA */}
      {/* ====================================================================== */}
      <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl">
        <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
          <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[420px]">
            {isValidImageSrc(destination.ctaImage || destination.heroImage) ? (
              <Image
                src={destination.ctaImage || destination.heroImage}
                alt="Create your perfect journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0091DA] to-[#004AB8]">
                <span className="text-center text-white">Image coming soon</span>
              </div>
            )}
          </div>
          <div className="space-y-5 bg-white p-6 sm:p-10 sm:space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
                Custom Experiences
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl lg:text-4xl">
                Create Your Perfect Nepal Journey
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                Have something special in mind? Tell us what you want to experience and our travel team can help
                create a journey around your interests.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#0091DA] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004AB8] sm:px-6 sm:py-3"
              >
                Plan My Trip
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0091DA] px-5 py-2.5 text-sm font-semibold text-[#0091DA] transition hover:bg-[#EAF7FD] sm:px-6 sm:py-3"
              >
                Contact Meegin
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

interface QuickFactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  isLong?: boolean;
}

function QuickFactCard({ icon: Icon, label, value, isLong }: QuickFactCardProps) {
  return (
    <div className={`rounded-3xl bg-[#F7FAFC] p-6 ${isLong ? "sm:col-span-2 lg:col-span-1" : ""}`}>
      <Icon className="h-6 w-6 text-[#0091DA]" />
      <p className="mt-3 text-sm font-semibold text-slate-600">{label}</p>
      <p className="mt-2 line-clamp-2 text-base font-bold text-slate-900">{value}</p>
    </div>
  );
}

interface SeasonCardProps {
  season: string;
  months: string;
  description: string;
  color: string;
  textColor: string;
}

function SeasonCard({ season, months, description, color, textColor }: SeasonCardProps) {
  return (
    <div className={`rounded-3xl ${color} p-6`}>
      <p className={`text-sm font-bold uppercase tracking-[0.12em] ${textColor}`}>{season}</p>
      <p className="mt-2 text-sm font-semibold text-slate-700">{months}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

interface ExperienceCardProps {
  experience: {
    id: string;
    title: string;
    description: string;
    icon: string;
  };
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{experience.icon}</div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{experience.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{experience.description}</p>
    </div>
  );
}

interface TravelTipCardProps {
  tip: {
    id: string;
    title: string;
    description: string;
    category?: string;
  };
}

function TravelTipCard({ tip }: TravelTipCardProps) {
  return (
    <div className="rounded-4xl border border-slate-200 bg-[#F7FAFC] p-6">
      {tip.category && (
        <span className="inline-block rounded-full bg-[#EAF7FD] px-3 py-1 text-xs font-semibold text-[#004AB8]">
          {tip.category}
        </span>
      )}
      <h3 className="mt-4 text-lg font-bold text-slate-900">{tip.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tip.description}</p>
    </div>
  );
}

interface FaqAccordionProps {
  faq: {
    id: string;
    question: string;
    answer: string;
  };
}

function FaqAccordion({ faq }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-[#0091DA]"
      >
        <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
        <div
          className={`flex-shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronRight className="h-5 w-5" />
        </div>
      </button>
      {isOpen && (
        <div className="pb-5 text-sm leading-7 text-slate-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getIntroHeading(destinationName: string): string {
  const headings: Record<string, string> = {
    Pokhara: "Experience the Beauty of Nepal's Adventure Capital",
    Mustang: "Discover the Ancient Himalayan Kingdom of Mustang",
    Chitwan: "Explore Nepal's Premier Wildlife and Jungle Destination",
    Lumbini: "Walk in the Footsteps of Buddha at Lumbini",
    Palpa: "Uncover the Historic Charm of Palpa's Hill Country",
    Baglung: "Escape to the Mountains of Rural Nepal",
    Kathmandu: "Immerse Yourself in Nepal's Cultural Heart",
    "Everest Region": "Stand in the Shadow of the World's Highest Peak",
    "Annapurna Region": "Trek Through Some of the World's Most Stunning Mountains",
    Bandipur: "Step Back in Time in Nepal's Preserved Hill Town",
    Ghandruk: "Experience Authentic Sherpa Culture and Mountain Hospitality",
    Bhaktapur: "Immerse Yourself in Nepal's Most Preserved Medieval City",
  };

  return headings[destinationName] || `Discover the Wonders of ${destinationName}`;
}
