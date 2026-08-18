import Image from "next/image";
import type { Destination } from "@/types";
import { isValidImageSrc } from "@/lib/utils";

interface DestinationHeroProps {
  destination: Destination;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden sm:rounded-4xl">
      <div className="relative h-56 sm:h-80 md:h-105 lg:h-120 xl:h-130">
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
      <div className="space-y-3 p-5 sm:space-y-4 sm:p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">{destination.name}</p>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl">Explore {destination.name}</h1>
        <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{destination.description}</p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className="rounded-full bg-[#EAF7FD] px-3 py-1.5 text-sm font-semibold text-[#004AB8] sm:px-4 sm:py-2">{destination.numberOfTours} tours</span>
          <span className="rounded-full bg-[#ECF8EF] px-3 py-1.5 text-sm font-semibold text-[#068835] sm:px-4 sm:py-2">Featured</span>
        </div>
      </div>
    </section>
  );
}
