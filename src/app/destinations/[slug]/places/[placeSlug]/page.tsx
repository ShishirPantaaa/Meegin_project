import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { destinations, getDestinationBySlug, getPlaceBySlug } from "@/data/destinations";
import { isValidImageSrc } from "@/lib/utils";
import Image from "next/image";

interface PlacePageProps {
  params: Promise<{ slug: string; placeSlug: string }>;
}

export function generateStaticParams() {
  return destinations.flatMap((destination) =>
    destination.places.map((place) => ({ slug: destination.slug, placeSlug: place.slug }))
  );
}

export async function generateMetadata({ params }: PlacePageProps): Promise<Metadata> {
  const { slug, placeSlug } = await params;
  const destination = getDestinationBySlug(slug);
  const place = getPlaceBySlug(slug, placeSlug);

  if (!destination || !place) {
    return {
      title: "Place Not Found | Meegin Tours & Travels",
      description: "This destination place could not be found.",
    };
  }

  const title = place.name.includes(destination.name) || place.name.includes("Lumbini")
    ? `${place.name} | Meegin Tours & Travels`
    : `${place.name} ${destination.name} | Meegin Tours & Travels`;

  return {
    title,
    description: place.shortDescription,
    keywords: [place.name, destination.name, "Nepal", "travel", "tourism"],
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug, placeSlug } = await params;
  const destination = getDestinationBySlug(slug);
  const place = getPlaceBySlug(slug, placeSlug);

  if (!destination || !place) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: destination.name, href: `/destinations/${destination.slug}` },
          { label: place.name },
        ]}
      />

      <section className="rounded-4xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="relative h-105 sm:h-130">
          {isValidImageSrc(place.image) ? (
            <Image
              src={place.image}
              alt={place.name}
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
        <div className="space-y-6 p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">{place.category}</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">{place.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{place.description}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-4xl bg-[#F7FAFC] p-6">
                <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Location: {place.location}</li>
                  <li>Category: {place.category}</li>
                  <li>Best time to visit: {place.bestTime}</li>
                  <li>Recommended duration: {place.duration}</li>
                </ul>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-slate-900">Travel information</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Use this page as a guide for planning your visit to {place.name}. Book a tour if one is available or explore nearby attractions in the same destination.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-4xl bg-[#F7FAFC] p-6 text-slate-600">
                <h3 className="text-lg font-semibold text-slate-900">Nearby attractions</h3>
                <p className="mt-4 text-sm leading-7">
                  Explore nearby places such as {destination.places.filter((item) => item.id !== place.id).slice(0, 3).map((item) => item.name).join(", ")}.
                </p>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-slate-900">Related tours</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {place.tourAvailable ? (
                    <>
                      A related tour is available for this place. Use the button below to visit the tour page.
                    </>
                  ) : (
                    "No direct tour is linked for this place yet. Explore the destination tours instead."
                  )}
                </p>
                {place.tourAvailable && place.tourSlug ? (
                  <Link
                    href={`/tours/${place.tourSlug}`}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0091DA] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#004AB8]"
                  >
                    View Tour
                  </Link>
                ) : (
                  <Link
                    href={`/destinations/${destination.slug}`}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0091DA] bg-white px-6 py-3 text-sm font-semibold text-[#004AB8] transition hover:bg-[#EAF7FD]"
                  >
                    Back to {destination.name} tours
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
