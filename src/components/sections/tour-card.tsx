import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import type { Tour } from "@/types";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Image src={tour.image} alt={tour.title} width={600} height={420} className="h-72 w-full object-cover" />
        <button className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg shadow-slate-900/10 transition hover:bg-[#F7FAFC]">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF7FD] px-3 py-2 text-sm font-semibold text-[#004AB8]">
            <Star className="h-4 w-4" /> {tour.rating}
          </span>
          <span className="text-sm font-medium text-slate-500">{tour.duration}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{tour.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{tour.destination}</p>
        </div>
        <p className="text-sm leading-6 text-slate-600">{tour.description}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-lg font-semibold text-[#172033]">From NPR {tour.price.toLocaleString()}</span>
          <Link href={`/tours/${tour.slug}`} className="rounded-full bg-[#0091DA] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#004AB8]">
            View Package
          </Link>
        </div>
      </div>
    </div>
  );
}

