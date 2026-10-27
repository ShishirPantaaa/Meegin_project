import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Globe, MapPin, Sparkles, Star, SunMedium } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import { baglung } from "@/data/destinations/baglung/baglung";

export const metadata: Metadata = {
  title: baglung.seo?.title || "Baglung Tours & Travel Packages | Meegin Tours & Travels",
  description: baglung.seo?.description || baglung.shortDescription,
  keywords: baglung.seo?.keywords,
};

const baglungHeroImage = baglung.heroImage;
const baglungIntroImage = baglung.introImage;

export default function BaglungPage() {
  const featuredPlaces = baglung.places.slice(0, 8);

  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: baglung.name }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(baglungHeroImage) ? (
          <Image
            src={baglungHeroImage}
            alt={baglung.name}
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">{baglung.location}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{baglung.tagline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">{baglung.shortDescription}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#attractions"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Baglung
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">DISCOVER {baglung.name.toUpperCase()}</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">{baglung.description.split(".")[0]}</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">{baglung.description}</p>
            <Link
              href="#attractions"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Attractions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {baglungIntroImage && isValidImageSrc(baglungIntroImage) ? (
              <Image
                src={baglungIntroImage}
                alt={baglung.name}
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Image coming soon
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#0091DA]/5 via-white to-[#004AB8]/5 p-8 sm:p-12 border border-blue-100/50 shadow-xl shadow-blue-900/5">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>

          <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {[
              {
                label: "Destination",
                value: baglung.name,
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "Location",
                value: baglung.region,
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "Known For",
                value: baglung.knownFor.split(",")[0],
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "Ideal For",
                value: baglung.idealFor?.[0] || "Nature lovers",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "Recommended Stay",
                value: baglung.recommendedDuration,
                icon: SunMedium,
                color: "text-emerald-600",
                bg: "bg-emerald-100/50",
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 stroke-2" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 leading-tight">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="attractions" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore {baglung.name}</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {featuredPlaces.map((place) => (
            <PlaceCard key={place.id} destinationSlug={baglung.slug} place={place} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Unique {baglung.name} Experiences</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {baglung.experiences?.map((exp) => (
                <div key={exp.id} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-2xl">{exp.icon}</div>
                  <p className="mt-4 text-base font-semibold text-[#172033]">{exp.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-[#E5F7FF] p-10 text-slate-700">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#004AB8] shadow-sm shadow-slate-300/50">
              <MapPin className="h-4 w-4" /> Best Time: {baglung.bestTime}
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>{baglung.description.split(".")[0]}</p>
              <p className="text-xs text-slate-600">Recommended duration: {baglung.recommendedDuration}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel {baglung.name} With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Explore {baglung.name} With Meegin</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Compass className="h-8 w-8 text-[#0091DA]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Expert Local Knowledge</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Our guides intimately know {baglung.name}&apos;s best routes, hidden gems and local experiences.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Sparkles className="h-8 w-8 text-[#0091DA]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Thoughtfully Designed Experiences</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Each itinerary balances adventure, culture and comfort for unforgettable memories.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Globe className="h-8 w-8 text-[#0091DA]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Transparent & Honest Pricing</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Clear costs with no hidden fees. You know exactly what you&apos;re investing in.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <CheckCircle2 className="h-8 w-8 text-[#0091DA]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Flexible Custom Itineraries</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Tailor your adventure to your pace, interests and preferences.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <MapPin className="h-8 w-8 text-[#0091DA]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Quality Accommodations</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Comfortable, carefully selected lodging that respects local communities.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <Star className="h-8 w-8 text-[#0091DA]" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Professional Travel Support</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Expert assistance before, during and after your {baglung.name} journey.</p>
          </div>
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
          {baglung.faqs?.map((faq, index) => (
            <details key={index} className="rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-slate-900">{faq.question}</summary>
              <p className="border-t border-slate-200 px-6 py-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-[#004AB8] px-6 py-12 text-center text-white sm:px-8 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Explore {baglung.name}?</h2>
          <p className="mt-4 text-lg text-slate-200">Let&apos;s plan your unforgettable {baglung.name} adventure.</p>
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
