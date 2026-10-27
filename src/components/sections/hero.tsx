"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CalendarDays, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FeaturedSlide = {
  name: string;
  route: string;
  image: string;
  badge: string;
  duration: string;
  groupSize: string;
};

const FEATURED_SLIDES: FeaturedSlide[] = [
  {
    name: "Annapurna Base Camp",
    route: "/destinations/annapurna",
    image: "/images/destinations/annapurna/annapurna-viewpoints.jpg",
    badge: "Best Seller",
    duration: "6 Days / 5 Nights",
    groupSize: "Group size: up to 12",
  },
  {
    name: "Pokhara",
    route: "/destinations/pokhara",
    image: "/images/destinations/pokhara/pokhara.jpg",
    badge: "Popular",
    duration: "4 Days / 3 Nights",
    groupSize: "Group size: up to 10",
  },
  {
    name: "Mustang",
    route: "/destinations/mustang",
    image: "/images/destinations/mustang/mustang.jpg",
    badge: "Best Seller",
    duration: "5 Days / 4 Nights",
    groupSize: "Group size: up to 8",
  },
  {
    name: "Dhorpatan",
    route: "/destinations/baglung",
    image: "/images/destinations/baglung/dhorpatan.jpg",
    badge: "Popular",
    duration: "3 Days / 2 Nights",
    groupSize: "Group size: up to 6",
  },
];

const DESTINATION_OPTIONS = [
  { label: "Annapurna", slug: "annapurna" },
  { label: "Pokhara", slug: "pokhara" },
  { label: "Mustang", slug: "mustang" },
  { label: "Dhorpatan", slug: "dhorpatan" },
  { label: "Kathmandu", slug: "kathmandu" },
  { label: "Chitwan", slug: "chitwan" },
  { label: "Lumbini", slug: "lumbini" },
  { label: "Palpa", slug: "palpa" },
  { label: "Baglung", slug: "baglung" },
  { label: "Bandipur", slug: "bandipur" },
  { label: "Bhaktapur", slug: "bhaktapur" },
  { label: "Ghandruk", slug: "ghandruk" },
  { label: "Everest", slug: "everest" },
];

export function Hero() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [validationMessage, setValidationMessage] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const activeSlide = FEATURED_SLIDES[activeIndex];

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % FEATURED_SLIDES.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPreviousSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length);
  };

  const showNextSlide = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % FEATURED_SLIDES.length);
  };

  const handleSearch = () => {
    const selectedDestination = DESTINATION_OPTIONS.find((option) => option.label === destination);

    if (!selectedDestination) {
      setValidationMessage("Please select a destination before searching.");
      return;
    }

    if (!travelDate) {
      setValidationMessage("Please choose a travel date.");
      return;
    }

    const selectedDay = new Date(`${travelDate}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDay < today) {
      setValidationMessage("Travel date cannot be in the past.");
      return;
    }

    if (travelers < 1 || travelers > 12) {
      setValidationMessage("Travelers must be between 1 and 12.");
      return;
    }

    const searchParams = new URLSearchParams({
      destination: selectedDestination.slug,
      date: travelDate,
      travelers: String(travelers),
    });

    setValidationMessage("");
    router.push(`/tours?${searchParams.toString()}`);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0c4e83] px-5 pb-10 pt-10 text-white shadow-2xl shadow-slate-900/10 sm:rounded-4xl sm:px-10 sm:pb-14 sm:pt-14 md:px-12 lg:px-16">
      <div className="absolute inset-0 hero-radial-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-slate-100 sm:px-4 sm:py-2 sm:tracking-[0.28em]">
            Explore Nepal travel packages
          </span>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Discover Nepal. Experience More.
          </h1>
          <p className="max-w-xl text-sm leading-7 text-slate-100/95 sm:text-base sm:leading-8">
            Explore breathtaking destinations, unforgettable experiences and carefully designed journeys across Nepal.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="relative">
              <select
                aria-label="Destination"
                value={destination}
                onChange={(event) => {
                  setDestination(event.target.value);
                  setValidationMessage("");
                }}
                className="w-full appearance-none rounded-[1.6rem] border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#0091DA] focus:ring-2 focus:ring-[#0091DA]/15"
              >
                <option value="">Destination</option>
                {DESTINATION_OPTIONS.map((option) => (
                  <option key={option.slug} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <Input
              type="date"
              aria-label="Travel Date"
              min={minDate}
              value={travelDate}
              onChange={(event) => {
                setTravelDate(event.target.value);
                setValidationMessage("");
              }}
              className="text-slate-900"
            />

            <Input
              type="number"
              min={1}
              max={12}
              value={travelers}
              onChange={(event) => {
                const nextValue = Number(event.target.value);
                setTravelers(Number.isFinite(nextValue) ? Math.min(12, Math.max(1, nextValue)) : 1);
                setValidationMessage("");
              }}
              aria-label="Travelers"
              className="text-slate-900"
            />
          </div>

          {validationMessage ? (
            <p role="alert" className="text-sm font-medium text-[#FDE68A]">
              {validationMessage}
            </p>
          ) : null}

          <div>
            <Button type="button" variant="secondary" size="lg" onClick={handleSearch}>
              <span className="inline-flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Tours
              </span>
            </Button>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-slate-900/20 sm:p-4 sm:rounded-4xl lg:max-w-sm xl:max-w-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              showPreviousSlide();
            }
            if (event.key === "ArrowRight") {
              showNextSlide();
            }
          }}
          tabIndex={0}
        >
          <div className="absolute inset-x-0 top-0 h-44 hero-image-top-glow" />
          <div className="absolute right-5 top-5 z-20 flex gap-2">
            <button
              type="button"
              aria-label="Previous featured trip"
              onClick={showPreviousSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-slate-900/30 text-white shadow-sm backdrop-blur-sm transition hover:bg-slate-900/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next featured trip"
              onClick={showNextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-slate-900/30 text-white shadow-sm backdrop-blur-sm transition hover:bg-slate-900/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            aria-label={`View ${activeSlide.name} destination details`}
            onClick={() => router.push(activeSlide.route)}
            className="block w-full text-left"
          >
            <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[300px] sm:rounded-3xl">
              <Image
                src={activeSlide.image}
                alt={activeSlide.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 30vw"
              />
            </div>

            <div className="mt-4 rounded-2xl bg-white/95 p-4 shadow-lg shadow-slate-900/10 sm:rounded-3xl sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                    Featured trip
                  </p>
                  <p className="text-sm font-semibold text-[#172033] sm:text-base">{activeSlide.name}</p>
                </div>
                <div className="shrink-0 rounded-2xl bg-[#ECF8EF] px-2.5 py-1.5 text-[10px] font-semibold text-[#068835] sm:rounded-3xl sm:px-3 sm:py-2 sm:text-xs">
                  {activeSlide.badge}
                </div>
              </div>

              <div className="mt-3 grid gap-2 rounded-2xl bg-slate-50 p-3 text-xs text-slate-600 shadow-sm sm:mt-4 sm:gap-3 sm:rounded-3xl sm:p-4 sm:text-sm">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5 text-[#0091DA] sm:h-4 sm:w-4" />
                  <span>{activeSlide.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-[#0091DA] sm:h-4 sm:w-4" />
                  <span>{activeSlide.groupSize}</span>
                </div>
              </div>
            </div>
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {FEATURED_SLIDES.map((slide, index) => (
              <button
                key={slide.name}
                type="button"
                aria-label={`Show ${slide.name}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-white" : "bg-white/45"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
