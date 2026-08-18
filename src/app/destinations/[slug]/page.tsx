import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { DestinationPage } from "@/components/sections/destination-page";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found | MEegin Tours & Travels",
      description: "This destination could not be found.",
    };
  }

  return {
    title: `${destination.name} Tours & Travel Packages | MEegin Tours & Travels`,
    description: destination.shortDescription,
    keywords: [destination.name, "tours", "travel", "Nepal", destination.knownFor],
  };
}

export default async function DestinationPageRoute({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <DestinationPage destination={destination} />
    </main>
  );
}
