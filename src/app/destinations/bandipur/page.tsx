import type { Metadata } from "next";
import { DestinationPage } from "@/components/sections/destination-page";
import { bandipur } from "@/data/destinations/bandipur/bandipur";

export const metadata: Metadata = {
  title: "Bandipur Tours & Travel Packages | MEegin Tours & Travels",
  description:
    "Discover Bandipur with MEegin Tours & Travels. Experience Newari heritage, traditional architecture, peaceful mountain views, historic town charm, and carefully designed tour packages.",
  keywords: [
    "Bandipur",
    "Nepal",
    "heritage",
    "Newari culture",
    "mountain views",
    "historic town",
    "tour packages",
  ],
};

export default function BandipurRoute() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <DestinationPage destination={bandipur} />
    </main>
  );
}
