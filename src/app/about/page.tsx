import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  MapPin,
  HeartHandshake,
  Ticket,
  Headphones,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About MEegin Tours & Travels | Reliable Nepal Travel Partner",
  description:
    "Learn about MEegin Tours & Travels — a Nepal-based travel company based in Butwal, helping you explore Nepal's most beautiful destinations with reliable, affordable, and carefully planned tour packages.",
  keywords: [
    "MEegin Tours & Travels",
    "Nepal travel",
    "Butwal Nepal travel",
    "tour packages Nepal",
    "reliable travel service Nepal",
    "affordable travel Nepal",
    "Nepal destinations",
  ],
};

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "Clear communication and dependable travel assistance from the moment you start planning to the end of your journey.",
  },
  {
    icon: Ticket,
    title: "Secure Booking",
    description:
      "A straightforward booking experience designed with your security and peace of mind at every step.",
  },
  {
    icon: Headphones,
    title: "Personalized Assistance",
    description:
      "Helpful support when planning your trip — we listen to what you need and help you find the right experience.",
  },
  {
    icon: Globe2,
    title: "Local Nepal Knowledge",
    description:
      "Travel experiences focused on Nepal's destinations, culture, nature, and attractions with genuine local insight.",
  },
  {
    icon: HeartHandshake,
    title: "Affordable Options",
    description:
      "Travel packages designed to provide real value — comfortable experiences without unnecessary complexity.",
  },
  {
    icon: MapPin,
    title: "Customer-Focused",
    description:
      "We aim to make travel planning simple, comfortable, and stress-free for every traveler.",
  },
];

const offerings = [
  {
    label: "Destination Tours",
    description: "Curated tours across Nepal's most captivating destinations.",
    href: "/destinations",
  },
  {
    label: "Cultural Experiences",
    description:
      "Explore Nepal's heritage sites, ancient temples and living traditions.",
    href: "/destinations",
  },
  {
    label: "Nature & Adventure",
    description:
      "Trekking, wildlife safaris and mountain adventures across Nepal.",
    href: "/destinations",
  },
  {
    label: "Family Holidays",
    description:
      "Comfortable, well-planned travel experiences for families of all sizes.",
    href: "/tours",
  },
  {
    label: "Mountain & Trekking",
    description:
      "Experience the Himalayas — from Annapurna trails to Everest region vistas.",
    href: "/destinations/annapurna",
  },
  {
    label: "Custom Travel Planning",
    description:
      "Let us help build a Nepal itinerary that fits your time, budget and interests.",
    href: "/contact",
  },
];

const destinations = [
  {
    name: "Pokhara",
    slug: "pokhara",
    image: "/images/destinations/pokhara/pokhara_intro.jpg",
    tagline: "City of Lakes & Mountains",
  },
  {
    name: "Kathmandu",
    slug: "kathmandu",
    image: "/images/destinations/kathmandu/kathmandu.jpg",
    tagline: "Valley of Living Heritage",
  },
  {
    name: "Chitwan",
    slug: "chitwan",
    image: "/images/destinations/chitwan/bird-watching.jpg",
    tagline: "Wildlife & Jungle Safari",
  },
  {
    name: "Bandipur",
    slug: "bandipur",
    image: "/images/destinations/bandipur/bazaar-2.jpg",
    tagline: "Hilltop Cultural Village",
  },
  {
    name: "Annapurna",
    slug: "annapurna",
    image: "/images/destinations/annapurna/annapurna-viewpoints.jpg",
    tagline: "Himalayan Trekking Region",
  },
  {
    name: "Lumbini",
    slug: "lumbini",
    image: "/images/destinations/lumbini/lumbini.jpg",
    tagline: "Birthplace of the Buddha",
  },
];

const trustPoints = [
  "Clear and honest travel information — no hidden surprises",
  "Straightforward, secure booking experience",
  "Affordable travel options for different budgets",
  "Helpful customer support throughout your journey",
  "Nepal-focused experiences led by local knowledge",
  "Transparent communication at every stage of planning",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl bg-[#0c4e83] px-6 pb-14 pt-14 text-white shadow-2xl shadow-slate-900/10 sm:px-12 md:px-16">
          {/* Radial overlays matching the existing hero style */}
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(0,145,218,0.25), transparent 40%), radial-gradient(circle at bottom right, rgba(33,151,54,0.18), transparent 35%)" }} />

          <div className="relative mx-auto max-w-4xl">
            <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">
              About MEegin Tours &amp; Travels
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Travel Nepal With Confidence
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100/90 sm:text-lg">
              MEegin Tours &amp; Travels is your travel partner for exploring Nepal — focused on reliable service, comfortable planning, and experiences that stay with you long after the journey ends.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/destinations">
                <Button variant="secondary" size="lg">
                  Explore Destinations
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="border border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="who-we-are-heading">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Our Story
            </p>
            <h2 id="who-we-are-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              MEegin Tours &amp; Travels is a travel company based in Butwal, Nepal — helping people discover the beauty, culture, and nature of Nepal through thoughtfully planned travel experiences.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We started with a simple idea: travel planning in Nepal should feel straightforward, trustworthy, and genuinely helpful. Whether you&apos;re exploring Pokhara&apos;s lakeside serenity, trekking the Annapurna region, or visiting Lumbini&apos;s sacred sites — we&apos;re here to help you do it comfortably and confidently.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our focus is on Nepal&apos;s destinations, local culture, natural landscapes, and the people who call this place home. We believe that the best travel experiences come from careful planning, honest communication, and a genuine care for the traveler.
            </p>
          </div>

          {/* Highlight chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Nepal Destinations", "Tour Planning", "Travel Assistance", "Affordable Options", "Reliable Service", "Comfortable Experiences"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-[#F7FAFC] px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Travel With Us ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="why-us-heading">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              What Makes Us Different
            </p>
            <h2 id="why-us-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Travel With Us?
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We focus on the things that matter most to travelers — reliability, clarity, value and genuine care.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-4xl border border-slate-200 bg-[#F7FAFC] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-[#0091DA] shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Promise ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="promise-heading">
        <div className="rounded-4xl bg-[#004AB8] p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7D4FF]">
              Our Commitment
            </p>
            <h2 id="promise-heading" className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Our Promise to You
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-100/90">
              We believe that travel should feel exciting — not stressful. Our promise is to be transparent, responsive and considerate of your needs every step of the way.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Transparency", desc: "We share clear information about your trip, costs and what to expect — no hidden surprises." },
              { title: "Reliability", desc: "We follow through on our commitments and keep you informed throughout your travel planning." },
              { title: "Helpful Communication", desc: "Our team responds to your queries promptly and helpfully — before, during and after your trip." },
              { title: "Comfortable Planning", desc: "We take care of the details so you can focus on looking forward to your Nepal experience." },
              { title: "Fair Value", desc: "Affordable options that make Nepal travel accessible without compromising on quality and care." },
              { title: "Customer Satisfaction", desc: "Your travel satisfaction is our measure of success. We're not done until you're happy with your trip." },
            ].map((promise) => (
              <div key={promise.title} className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white">{promise.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200/85">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Offer ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="offerings-heading">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            Travel Services
          </p>
          <h2 id="offerings-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From cultural tours to mountain adventures, our website helps you discover and plan a wide range of Nepal travel experiences.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col gap-3 rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0091DA]/30 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0091DA] transition-colors">
                {item.label}
              </h3>
              <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#0091DA]">
                Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Destinations Preview ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="destinations-heading">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Nepal Destinations
            </p>
            <h2 id="destinations-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Destinations We Help You Explore
            </h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-full border border-[#0091DA] bg-white px-5 py-3 text-sm font-semibold text-[#004AB8] transition hover:bg-[#EAF7FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
          >
            View all destinations
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
              aria-label={`Explore ${dest.name}`}
            >
              <div className="relative h-52 overflow-hidden rounded-t-4xl bg-slate-100">
                {dest.image ? (
                  <Image
                    src={dest.image}
                    alt={`${dest.name} — ${dest.tagline}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-semibold uppercase tracking-widest text-slate-400">
                    Image coming soon
                  </div>
                )}
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{dest.name}</h3>
                <p className="text-sm text-slate-500">{dest.tagline}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0091DA]">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Trust Section ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="trust-heading">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
                Travel With Confidence
              </p>
              <h2 id="trust-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Why Travelers Choose MEegin
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                When you plan a trip with us, you get clear, honest information and dedicated support — so you can focus on the adventure ahead.
              </p>
              <ul className="mt-8 space-y-4" role="list">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#068835]" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#F7FAFC] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
                Our Focus Areas
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Nepal Destinations", sub: "12+ destinations" },
                  { label: "Tour Packages", sub: "Variety of options" },
                  { label: "Travel Assistance", sub: "Available to help" },
                  { label: "Based in Nepal", sub: "Butwal, Nepal" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-base font-semibold text-slate-900">{item.label}</p>
                    <p className="mt-1 text-sm text-[#0091DA] font-semibold">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office / Location ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="office-heading">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#0091DA] shadow-sm">
              <Building2 className="h-8 w-8" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Find Us
            </p>
            <h2 id="office-heading" className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Visit Our Office
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ECF8EF] px-5 py-3 text-base font-semibold text-[#068835]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Butwal, Nepal
            </div>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Our team is based in Butwal, Nepal — ready to help you plan your next Nepal adventure. Reach out to us with any questions about destinations, tours, or travel planning.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/tours">
                <Button variant="outline" size="lg">
                  Plan Your Trip
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="relative overflow-hidden rounded-3xl bg-[#0c4e83] px-6 py-12 text-center text-white shadow-2xl shadow-slate-900/10 sm:rounded-4xl sm:px-12 sm:py-14">
          <div className="absolute inset-0 rounded-3xl sm:rounded-4xl" style={{ backgroundImage: "radial-gradient(circle at top right, rgba(0,145,218,0.3), transparent 40%)" }} />
          <p className="relative text-sm font-semibold uppercase tracking-[0.24em] text-[#A7D4FF]">
            Start Your Nepal Journey
          </p>
          <h2 id="cta-heading" className="relative mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            Ready to Explore Nepal?
          </h2>
          <p className="relative mt-5 mx-auto max-w-xl text-sm leading-7 text-slate-100/90 sm:mt-6 sm:text-base sm:leading-8">
            Let us help you plan a comfortable, reliable and memorable journey through Nepal. From cultural heritage to mountain landscapes — your adventure starts here.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
            <Link href="/destinations">
              <Button variant="secondary" size="lg">
                Explore Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="border border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
