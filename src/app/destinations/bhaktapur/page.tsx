import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDestinationBySlug } from "@/data/destinations";
import { DestinationPage } from "@/components/sections/destination-page";

export const metadata: Metadata = {
  title: "Bhaktapur Tours & Travel Packages | MEegin Tours & Travels",
  description:
    "Discover Bhaktapur with MEegin Tours & Travels. Explore UNESCO heritage squares, the Nyatapola Temple, Golden Gate, traditional pottery and authentic Newari culture on a carefully designed Bhaktapur tour.",
};

export default function BhaktapurPage() {
  const destination = getDestinationBySlug("bhaktapur");

  if (!destination) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <DestinationPage destination={destination} />
    </main>
  );
}
