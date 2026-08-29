import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Globe, MapPin, Sparkles, Star, SunMedium, Waves } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import type { Place } from "@/types";

export const metadata: Metadata = {
  title: "Everest Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Everest region with Meegin Tours & Travels. Discover Mount Everest trekking, Sherpa culture, high-altitude adventure and carefully designed Everest tour packages.",
};

const everestHeroImage = "/images/destinations/everest/everest-hero.jpg";
const everestIntroImage = "/images/destinations/everest/everest-intro.jpg";

const popularAttractions: Place[] = [
  {
    id: "mount-everest",
    slug: "mount-everest",
    name: "Mount Everest",
    shortDescription: "The world's highest mountain.",
    description:
      "Experience the majesty of Mount Everest through trekking routes that offer spectacular views and encounters with Sherpa communities.",
    image: "/images/destinations/everest/mount-everest.jpg",
    location: "Khumbu Region",
    category: "Mountain Trekking",
    duration: "10–14 Days",
    bestTime: "March–May, September–October",
    featured: true,
    tourAvailable: true,
    tourSlug: "everest-base-camp",
  },
];

const featuredEverestTours = [
  {
    title: "Everest Base Camp Trek",
    duration: "12 Days / 11 Nights",
    rating: 4.9,
    reviews: 267,
    price: 1899,
    description: "The classic trek to the base of Mount Everest with stunning Himalayan views and Sherpa hospitality.",
    image: "/images/destinations/everest/everest_tour_1.jpg",
    href: "/tours/everest-base-camp",
  },
];

const experienceItems = [
  { icon: "⛏️", label: "Base Camp Trekking" },
  { icon: "🏔️", label: "High Altitude Adventure" },
  { icon: "👥", label: "Sherpa Culture" },
  { icon: "🌅", label: "Mountain Views" },
];

const whyVisitItems = [
  { title: "Expert Guides", description: "Experienced Sherpa guides and acclimatization specialists.", icon: Compass },
  { title: "Proven Itineraries", description: "Well-tested trekking routes for safe, successful climbs.", icon: Sparkles },
  { title: "Transparent Pricing", description: "Clear costs including all logistics and permits.", icon: Globe },
  { title: "Quality Teahouses", description: "Comfortable lodging throughout the trek.", icon: Waves },
  { title: "Altitude Support", description: "Expert advice on acclimatization and altitude management.", icon: CheckCircle2 },
  { title: "24/7 Support", description: "Dedicated support team throughout your expedition.", icon: MapPin },
];

const faqItems = [
  {
    question: "What is the Everest Base Camp Trek?",
    answer:
      "A challenging trekking route to Mount Everest's base camp, offering spectacular mountain views and encounters with Sherpa culture.",
  },
  {
    question: "How many days does the trek take?",
    answer: "The standard trek takes 12–14 days including acclimatization days.",
  },
  {
    question: "What is the best time to trek?",
    answer: "March–May (spring) and September–October (autumn) offer the best weather and visibility.",
  },
  {
    question: "How fit do I need to be?",
    answer: "Good fitness level is recommended. Regular cardio training before the trek is essential.",
  },
  {
    question: "What about altitude sickness?",
    answer: "We include acclimatization days and are prepared with oxygen and evacuation plans if needed.",
  },
  {
    question: "Can Meegin arrange a customized Everest trek?",
    answer: "Absolutely. We can adjust pace, add extra acclimatization days or combine with other Himalayan treks.",
  },
];

export default function EverestPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Everest" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(everestHeroImage) ? (
          <Image
            src={everestHeroImage}
            alt="Mount Everest"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-slate-700" />
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">Everest Region, Nepal</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Everest</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Trek to the base of the world's highest mountain and experience one of Earth's greatest adventures.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/evrest#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Everest Treks
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Plan Your Trek
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">DISCOVER EVEREST</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
              The World's Ultimate Trekking Destination
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              The Everest region offers unparalleled high-altitude trekking, stunning Himalayan vistas and rich Sherpa culture. Whether you trek to base camp or explore the region, Everest provides an unforgettable adventure.
            </p>
            <Link
              href="/destinations/evrest#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Everest Treks <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(everestIntroImage) ? (
              <Image
                src={everestIntroImage}
                alt="Everest trekking scenery"
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Your Everest intro image goes here
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0091DA]/5 via-white to-[#004AB8]/5 p-8 sm:p-12 border border-blue-100/50 shadow-xl shadow-blue-900/5">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>

          <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {[
              { label: "Destination", value: "Everest", icon: MapPin, color: "text-blue-600", bg: "bg-blue-100/50" },
              { label: "Location", value: "Khumbu Region", icon: Compass, color: "text-indigo-600", bg: "bg-indigo-100/50" },
              { label: "Known For", value: "Mountain Trekking", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-100/50" },
              { label: "Ideal For", value: "Adventure & Trekking", icon: Star, color: "text-rose-600", bg: "bg-rose-100/50" },
              { label: "Recommended Stay", value: "10–14 Days", icon: SunMedium, color: "text-emerald-600", bg: "bg-emerald-100/50" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 leading-tight">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore Everest</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Highlights & Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularAttractions.map((place) => (
            <PlaceCard key={place.id} destinationSlug="evrest" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular Everest Treks</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Trek Packages</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredEverestTours.map((tour) => (
            <div key={tour.title} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                {isValidImageSrc(tour.image) ? (
                  <Image
                    src={tour.image}
                    alt={`${tour.title} tour image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-200 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Tour image placeholder
                  </div>
                )}
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7FD] px-3 py-2 text-[#004AB8]">
                    <Star className="h-4 w-4" /> {tour.rating}
                  </span>
                  <span>{tour.reviews} reviews</span>
                  <span className="rounded-full bg-[#F7FAFC] px-3 py-2 text-slate-600">{tour.duration}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{tour.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{tour.description}</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-[#172033]">Best and affordable price</p>
                  <Link
                    href={tour.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0091DA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004AB8]"
                  >
                    View Trek <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience at Everest</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Unique Experiences</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {experienceItems.map((item) => (
                <div key={item.label} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="mt-4 text-base font-semibold text-[#172033]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-[#E5F7FF] p-10 text-slate-700">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#004AB8] shadow-sm shadow-slate-300/50">
              <MapPin className="h-4 w-4" /> Best Time: Mar–May, Sep–Oct
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>Spring and autumn offer the best weather conditions for Everest trekking with clear skies and stable temperatures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Trek Everest With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Trek Everest With Meegin</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyVisitItems.map((item) => (
            <div key={item.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <item.icon className="h-8 w-8 text-[#0091DA]" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Questions?</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => (
            <details key={index} className="rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-slate-900">
                {item.question}
              </summary>
              <p className="border-t border-slate-200 px-6 py-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-[#004AB8] px-6 py-12 text-center text-white sm:px-8 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Trek Everest?</h2>
          <p className="mt-4 text-lg text-slate-200">Let's plan your Himalayan adventure.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#004AB8] transition hover:bg-slate-100"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
