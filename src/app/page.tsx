import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { DestinationCard } from "@/components/sections/destination-card";
import { TourCard } from "@/components/sections/tour-card";
import { WhyUs } from "@/components/sections/why-us";
import { Gallery } from "@/components/sections/gallery";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { destinations } from "@/data/destinations";
import { tours, testimonials, galleryImages, faqs } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:pb-16 sm:pt-8 sm:px-6 lg:px-8">
        <Hero />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular destinations</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Top Nepal travel destinations</h2>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-full border border-[#0091DA] bg-white px-5 py-3 text-sm font-semibold text-[#004AB8] transition hover:bg-[#EAF7FD]"
          >
            View all destinations
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.slice(0, 6).map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Featured packages</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Popular Nepal tour packages</h2>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-full border border-[#0091DA] bg-white px-5 py-3 text-sm font-semibold text-[#004AB8] transition hover:bg-[#EAF7FD]"
          >
            Browse all tours
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <WhyUs />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular experiences</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">Discover authentic Nepal adventures</h2>
          </div>
          <Button variant="outline" size="sm">Explore experiences</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0091DA]">Adventure</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Trekking & mountain vistas</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Hike world-famous trails, explore alpine villages and experience Nepal’s dramatic peaks.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0091DA]">Culture</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Heritage & spiritual journeys</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Visit UNESCO sites, ancient temples and local communities for an authentic Nepal experience.</p>
          </div>
          <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0091DA]">Wildlife</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">Safari & nature reserves</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Explore Chitwan’s jungles, river wildlife and comfortable safari lodges.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel stories</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">What our travelers say</h2>
          </div>
          <Button variant="outline" size="sm">Read more reviews</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Gallery images={galleryImages} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:rounded-4xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">FAQ preview</p>
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {faqs.slice(0, 3).map((faq) => (
                <div key={faq.question}>
                  <p className="font-semibold text-slate-900">{faq.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:mt-3">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-[#004AB8] p-7 text-white shadow-2xl shadow-slate-900/10 sm:rounded-4xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7D4FF]">Custom trip planning</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">Can&apos;t find the perfect package?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-100/90 sm:text-base">
              Tell us what kind of Nepal experience you want and our travel team will help design your journey.
            </p>
            <Button variant="secondary" size="lg" className="mt-6 sm:mt-8">Plan My Trip</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

