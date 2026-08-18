"use client";

import Image from "next/image";
import { Search, CalendarDays, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-[#0c4e83] px-6 pb-14 pt-14 text-white shadow-2xl shadow-slate-900/10 sm:px-10 md:px-12 lg:px-16">
      <div className="absolute inset-0 hero-radial-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-100">
            Explore Nepal travel packages
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Discover Nepal. Experience More.
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-100/95 sm:text-lg">
            Explore breathtaking destinations, unforgettable experiences and carefully designed journeys across Nepal.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Input placeholder="Destination" aria-label="Destination" />
            <Input type="date" aria-label="Travel Date" className="text-slate-900" />
            <Input type="number" min={1} defaultValue={2} aria-label="Travelers" className="text-slate-900" />
          </div>
          <div className="max-w-max">
            <Button variant="secondary" size="lg">
              <span className="inline-flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Tours
              </span>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-900/20 sm:p-6 lg:max-w-xl">
          <div className="absolute inset-x-0 top-0 h-44 hero-image-top-glow" />
          <Image
            src="/images/destinations/annapurna/annapurna-viewpoints.jpg"
            alt="Nepal mountains and travel landscape"
            width={900}
            height={600}
            className="w-full rounded-3xl object-cover"
            priority
          />
          <div className="mt-6 rounded-3xl bg-white/95 p-5 shadow-lg shadow-slate-900/10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Featured trip</p>
                <p className="text-base font-semibold text-[#172033]">Annapurna Panorama</p>
              </div>
              <div className="rounded-3xl bg-[#ECF8EF] px-3 py-2 text-sm font-semibold text-[#068835]">
                Best seller
              </div>
            </div>
            <div className="mt-4 grid gap-3 rounded-3xl bg-slate-50 p-4 text-sm text-slate-600 shadow-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#0091DA]" />
                <span>6 Days / 5 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-[#0091DA]" />
                <span>Group size: up to 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

