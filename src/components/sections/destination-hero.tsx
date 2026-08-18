import Image from "next/image";
import type { Destination } from "@/types";
import { isValidImageSrc } from "@/lib/utils";

interface DestinationHeroProps {
  destination: Destination;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="rounded-4xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="relative h-105 sm:h-120 lg:h-130">
        {isValidImageSrc(destination.heroImage) ? (
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
            Image coming soon
          </div>
        )}
      </div>
      <div className="space-y-4 p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">{destination.name}</p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Explore {destination.name}</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">{destination.description}</p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-[#EAF7FD] px-4 py-2 text-sm font-semibold text-[#004AB8]">{destination.numberOfTours} tours</span>
          <span className="rounded-full bg-[#ECF8EF] px-4 py-2 text-sm font-semibold text-[#068835]">Featured</span>
        </div>
      </div>
    </section>
  );
}
