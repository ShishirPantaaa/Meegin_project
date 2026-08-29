import type { Metadata } from "next";
import { tours } from "@/data/tours";
import { ToursClient, DestinationStrip } from "./tours-client";

export const metadata: Metadata = {
  title: "Nepal Tour Packages | MEegin Tours & Travels",
  description:
    "Explore Nepal tour packages with MEegin Tours & Travels. Discover mountain adventures, cultural journeys, wildlife experiences and scenic escapes across Nepal.",
  keywords: [
    "Nepal tour packages",
    "MEegin Tours & Travels",
    "Nepal trekking",
    "Nepal wildlife safari",
    "cultural tours Nepal",
    "Pokhara tours",
    "Everest trek",
    "Annapurna circuit",
  ],
};

// ─── Destination strip data — derived from actual tour data ───────────────────
const DEST_IMAGES: Record<string, string | null> = {
  pokhara: "/images/destinations/pokhara/pokhara.jpg",
  mustang: "/images/destinations/mustang/mustang.jpg",
  chitwan: "/images/destinations/chitwan/chitwan.jpg",
  lumbini: "/images/destinations/lumbini/lumbini.jpg",
  palpa: "/images/destinations/palpa/palpa.png",
  baglung: "/images/destinations/baglung/Baglung.jpg",
  kathmandu: "/images/destinations/kathmandu/kathmandu.jpg",
  bandipur: "/images/destinations/bandipur/hero.jpg",
  ghandruk: "/images/destinations/ghandruk/ghandruk.jpg",
  annapurna: "/images/destinations/annapurna/annapurna-viewpoints.jpg",
  everest: "/images/destinations/everest/everest-base-camp.jpg",
  bhaktapur: "/images/destinations/bhaktapur/Bhaktapur.jpg",
};

export default function ToursPage() {
  // Build destination counts from tour data
  const destCounts: Record<string, number> = {};
  for (const tour of tours) {
    destCounts[tour.destinationSlug] = (destCounts[tour.destinationSlug] ?? 0) + 1;
  }

  // Build destination strip list (unique, sorted by tour count desc)
  const destinationStripData = Object.entries(destCounts)
    .map(([slug, count]) => {
      const sample = tours.find((t) => t.destinationSlug === slug);
      return {
        slug,
        name: sample?.destination ?? slug,
        image: DEST_IMAGES[slug] ?? null,
        count,
      };
    })
    .sort((a, b) => b.count - a.count);

  const featuredTours = tours.filter((t) => t.featured);

  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <ToursClient allTours={tours} featuredTours={featuredTours} />
      <DestinationStrip destinations={destinationStripData} />
    </main>
  );
}
