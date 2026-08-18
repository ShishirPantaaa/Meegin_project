import type { Metadata } from "next";
import { DestinationPage } from "@/components/sections/destination-page";
import { annapurna } from "@/data/destinations/annapurna/annapurna";

export const metadata: Metadata = {
  title: "Annapurna Tours & Trekking Packages | MEegin Tours & Travels",
  description:
    "Trek the legendary Annapurna region in Nepal. Discover Annapurna Base Camp, the Annapurna Circuit, breathtaking mountain villages, and thrilling Himalayan scenery with MEegin.",
  keywords: [
    "Annapurna",
    "Nepal",
    "trekking",
    "Annapurna Base Camp",
    "Annapurna Circuit",
    "Himalayan scenery",
    "mountain villages",
    "trekking experiences",
  ],
};

export default function AnnapurnaRoute() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <DestinationPage destination={annapurna} />
    </main>
  );
}
