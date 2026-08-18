import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ImageIcon, Compass, CloudSun, Backpack, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getFeaturedPost } from "@/data/blog";
import { destinations } from "@/data/destinations";
import { BlogClient } from "./blog-client";
import { isValidImageSrc } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nepal Travel Blog | Travel Guides & Tips | MEegin Tours & Travels",
  description:
    "Explore Nepal travel guides, destination inspiration, trekking tips, culture, food, wildlife and practical travel advice from MEegin Tours & Travels.",
};

const INSPIRATION_DESTINATION_SLUGS = [
  "pokhara",
  "mustang",
  "chitwan",
  "lumbini",
  "kathmandu",
  "bandipur",
];

export default function BlogPage() {
  const featuredPost = getFeaturedPost() || blogPosts[0];
  const regularPosts = blogPosts.filter((post) => post.id !== (featuredPost?.id));

  // Determine destinations to showcase
  const travelInspiration = INSPIRATION_DESTINATION_SLUGS.map(
    (slug) => destinations.find((d) => d.slug === slug)
  ).filter(Boolean) as typeof destinations;

  return (
    <main className="bg-[#F7FAFC] text-[#172033]">

      {/* ── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-900 pb-20 pt-32 text-center text-white sm:pb-32 sm:pt-40 lg:pb-40">
        {/* Background Image - with fallback styling if missing */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/pokhara/beautiful.jpg"
            alt="Beautiful Nepal Travel Scene"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
            unoptimized={process.env.NODE_ENV === "development"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <Compass className="h-4 w-4 text-[#0091DA]" /> Travel Journal
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Explore Nepal, <br className="hidden sm:block" /> One Story at a Time
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Discover inspiring places, local experiences, travel tips and practical guides to help you plan your perfect journey across Nepal.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#featured"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0091DA] px-8 text-sm font-semibold text-white transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Explore Travel Guides
            </a>
            <Link
              href="/destinations"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Article ────────────────────────────────────────────────── */}
      {featuredPost && (
        <section id="featured" className="mx-auto -mt-10 relative z-20 max-w-7xl px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: "120px" }}>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group flex flex-col overflow-hidden rounded-4xl bg-white shadow-xl ring-1 ring-slate-200 transition-shadow hover:shadow-2xl lg:flex-row focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
          >
            <div className="relative h-72 w-full shrink-0 overflow-hidden bg-slate-100 lg:h-auto lg:w-3/5">
              {isValidImageSrc(featuredPost.image) ? (
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-200">
                  <ImageIcon className="h-10 w-10 text-slate-400" />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col justify-center p-8 sm:p-12 lg:p-16">
              <span className="mb-4 inline-block self-start rounded-full bg-[#EAF7FD] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#004AB8]">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-semibold leading-tight text-slate-900 group-hover:text-[#0091DA] transition-colors sm:text-4xl">
                {featuredPost.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                  <span>{featuredPost.location || "Nepal"}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#0091DA]">
                  Read Guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── Client Blog Filter and Grid ─────────────────────────────────────── */}
      <div className="mt-10 sm:mt-12">
        <BlogClient posts={regularPosts} />
      </div>

      {/* ── Travel Inspiration from Nepal (Destinations) ────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mb-10 sm:flex sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Travel Inspiration from Nepal
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Planning your next adventure? Explore stories and guides from some of Nepal&apos;s most beautiful destinations.
            </p>
          </div>
          <div className="mt-6 sm:mt-0">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0091DA] hover:text-[#004AB8]"
            >
              View all places <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-2 lg:grid-cols-6 md:grid-cols-3">
          {travelInspiration.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group relative flex h-48 flex-col overflow-hidden rounded-3xl shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
              aria-label={`Explore ${dest.name}`}
            >
              <div className="absolute inset-0 bg-slate-100">
                {isValidImageSrc(dest.heroImage) ? (
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#EAF7FD] to-[#F7FAFC]">
                    <MapPin className="h-8 w-8 text-[#0091DA] opacity-30" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="relative mt-auto p-4">
                <h3 className="font-semibold text-white">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Travel Smarter in Nepal (Tips) ──────────────────────────────────── */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Travel Smarter in Nepal
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] mb-5">
                <CloudSun className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Best Time</h3>
              <p className="text-sm text-slate-600">
                Choose the season according to your destination and activities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] mb-5">
                <Backpack className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Pack Smart</h3>
              <p className="text-sm text-slate-600">
                Prepare comfortable clothing, walking shoes and destination-specific essentials.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] mb-5">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Respect Culture</h3>
              <p className="text-sm text-slate-600">
                Respect temples, traditions, local communities and cultural practices.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA] mb-5">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Travel Responsibly</h3>
              <p className="text-sm text-slate-600">
                Help protect Nepal&apos;s natural environment and respect local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ──────────────────────────────────────────────────── */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl bg-[#004AB8] px-8 py-16 text-center text-white shadow-2xl shadow-[#004AB8]/20 sm:px-12">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Your Nepal Adventure Starts Here
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-100/90">
            Found a destination that inspires you? Explore our destinations and discover tours designed to make your Nepal journey simple, comfortable and memorable.
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
