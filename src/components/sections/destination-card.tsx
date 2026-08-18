import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/types";
import { isValidImageSrc } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const tourCount = destination.numberOfTours ?? destination.tours ?? 0;

  return (
    <div className="group overflow-hidden rounded-3xl sm:rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/destinations/${destination.slug}`} className="block h-56 sm:h-64 overflow-hidden rounded-t-3xl sm:rounded-t-4xl">
        {isValidImageSrc(destination.heroImage) ? (
          <Image
            src={destination.heroImage}
            alt={destination.name}
            width={500}
            height={420}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
            Image coming soon
          </div>
        )}
      </Link>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">{destination.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{destination.shortDescription}</p>
          </div>
          <span className="rounded-3xl bg-[#ECF8EF] px-3 py-2 text-xs font-semibold text-[#068835]">
            {tourCount} tours
          </span>
        </div>
        <Link href={`/destinations/${destination.slug}`} className="flex items-center gap-2 text-sm font-semibold text-[#0091DA] transition hover:translate-x-1">
          View Tours <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
