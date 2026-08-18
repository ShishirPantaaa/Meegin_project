import Link from "next/link";
import { DestinationCard } from "@/components/sections/destination-card";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Destinations</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">All Destinations</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              Discover Nepal’s most inspiring travel regions and mountain escapes.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#0091DA] bg-white px-5 py-3 text-sm font-semibold text-[#004AB8] transition hover:bg-[#EAF7FD]"
          >
            Back to home
          </Link>
        </div>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((destination: (typeof destinations)[number]) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </section>
    </main>
  );
}

