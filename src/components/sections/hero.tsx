"use client";

import Image from "next/image";
import { Search, CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0c4e83] px-5 pb-10 pt-10 text-white shadow-2xl shadow-slate-900/10 sm:rounded-4xl sm:px-10 sm:pb-14 sm:pt-14 md:px-12 lg:px-16">
      <div className="absolute inset-0 hero-radial-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        {/* Text Content */}
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-100 sm:px-4 sm:py-2 sm:tracking-[0.28em]">
            Explore Nepal travel packages
          </span>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Discover Nepal. Experience More.
          </h1>
          <p className="max-w-xl text-sm leading-7 text-slate-100/95 sm:text-base sm:leading-8">
            Explore breathtaking destinations, unforgettable experiences and carefully designed journeys across Nepal.
          </p>
          {/* Search Form */}
          <div className="grid gap-3 sm:grid-cols-3">
            <Input placeholder="Destination" aria-label="Destination" />
            <Input type="date" aria-label="Travel Date" className="text-slate-900" />
            <Input type="number" min={1} defaultValue={2} aria-label="Travelers" className="text-slate-900" />
          </div>
          <div>
            <Button variant="secondary" size="lg">
              <span className="inline-flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Tours
              </span>
            </Button>
          </div>
        </div>

        {/* Image Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-slate-900/20 sm:p-4 sm:rounded-4xl lg:max-w-sm xl:max-w-xl">
          <div className="absolute inset-x-0 top-0 h-44 hero-image-top-glow" />
          <Image
            src="/images/destinations/annapurna/annapurna-viewpoints.jpg"
            alt="Nepal mountains and travel landscape"
            width={900}
            height={600}
            className="w-full rounded-2xl object-cover sm:rounded-3xl"
            priority
          />
          <div className="mt-4 rounded-2xl bg-white/95 p-4 shadow-lg shadow-slate-900/10 sm:rounded-3xl sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Featured trip</p>
                <p className="text-sm font-semibold text-[#172033] sm:text-base">Annapurna Panorama</p>
              </div>
              <div className="shrink-0 rounded-2xl bg-[#ECF8EF] px-2.5 py-1.5 text-xs font-semibold text-[#068835] sm:rounded-3xl sm:px-3 sm:py-2 sm:text-sm">
                Best seller
              </div>
            </div>
            <div className="mt-3 grid gap-2 rounded-2xl bg-slate-50 p-3 text-xs text-slate-600 shadow-sm sm:mt-4 sm:gap-3 sm:rounded-3xl sm:p-4 sm:text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5 text-[#0091DA] sm:h-4 sm:w-4" />
                <span>6 Days / 5 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-3.5 w-3.5 text-[#0091DA] sm:h-4 sm:w-4" />
                <span>Group size: up to 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
