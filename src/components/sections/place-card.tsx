import Image from "next/image";
import Link from "next/link";
import type { Place } from "@/types";
import { isValidImageSrc } from "@/lib/utils";

interface PlaceCardProps {
  destinationSlug: string;
  place: Place;
}

export function PlaceCard({ destinationSlug, place }: PlaceCardProps) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/destinations/${destinationSlug}/places/${place.slug}`} className="block h-56 overflow-hidden rounded-t-4xl">
        {isValidImageSrc(place.image) ? (
          <Image
            src={place.image}
            alt={place.name}
            width={500}
            height={360}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
            Image coming soon
          </div>
        )}
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{place.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{place.shortDescription}</p>
          </div>
          <span className="rounded-3xl bg-[#EAF7FD] px-3 py-2 text-xs font-semibold text-[#004AB8]">{place.category}</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-3xl bg-[#F7FAFC] px-4 py-3 text-sm text-slate-600">Location: {place.location}</div>
          <div className="rounded-3xl bg-[#F7FAFC] px-4 py-3 text-sm text-slate-600">Best time: {place.bestTime}</div>
        </div>
        <Link
          href={`/destinations/${destinationSlug}/places/${place.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0091DA] transition hover:translate-x-1"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
