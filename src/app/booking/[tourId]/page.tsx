import { notFound } from "next/navigation";
import { getTourBySlug, tours } from "@/data/tours";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";
import { BookingForm } from "@/components/sections/booking-form";

interface BookingPageProps {
  params: Promise<{ tourId: string }>;
}

export async function generateMetadata({ params }: BookingPageProps): Promise<Metadata> {
  const { tourId } = await params;
  const tour = getTourBySlug(tourId);

  if (!tour) {
    return {
      title: "Tour Not Found | MEegin Tours & Travels",
    };
  }

  return {
    title: `Book ${tour.title} | MEegin Tours & Travels`,
    description: `Complete your booking details for the ${tour.title} adventure in Nepal.`,
  };
}

export default async function BookingTourPage({ params }: BookingPageProps) {
  const { tourId } = await params;
  const tour = getTourBySlug(tourId);

  if (!tour) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: tour.title, href: `/tours/${tour.slug}` },
    { label: "Booking" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Book Your Nepal Adventure
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Complete your trip details and send your booking request. Our travel team will
          contact you to confirm availability and finalize your journey to{" "}
          <span className="font-semibold text-[#004AB8]">{tour.destination}</span>.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-emerald-700 lg:justify-start">
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            <span aria-hidden>🔒</span> Secure Booking Request
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            <span aria-hidden>✓</span> No hidden charges
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            <span aria-hidden>✓</span> Expert travel support
          </span>
        </div>
      </div>

      <BookingForm tour={tour} allTours={tours} />
    </main>
  );
}
