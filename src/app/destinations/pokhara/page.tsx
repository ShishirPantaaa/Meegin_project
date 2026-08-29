import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Globe, MapPin, Sparkles, Star, SunMedium, Waves } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import type { Place } from "@/types";

export const metadata: Metadata = {
  title: "Pokhara Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Pokhara with Meegin Tours & Travels. Discover Phewa Lake, Sarangkot, World Peace Pagoda, Davis Falls, caves, museums, adventure experiences and carefully designed Pokhara tour packages.",
};

const pokharaHeroImage = "/images/destinations/pokhara/pokharaaa.jpg";
const pokharaIntroImage = "/images/destinations/pokhara/pokhara_intro.jpg";
const pokharaCtaImage = "/images/destinations/pokhara/pokhara-cta.jpg";

const popularAttractions: Place[] = [
  {
    id: "phewa-lake",
    slug: "phewa-lake",
    name: "Phewa Lake",
    shortDescription: "Where the Himalayas meet the lake.",
    description:
      "Discover the peaceful heart of Pokhara at Phewa Lake. Surrounded by lush hills and spectacular Himalayan scenery, the lake is perfect for boating, lakeside walks, photography and relaxing moments with nature.",
    image: "/images/destinations/pokhara/lakeside.jpg",
    location: "Pokhara",
    category: "Nature",
    duration: "2–3 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "pokhara-highlights",
  },
  {
    id: "sarangkot",
    slug: "sarangkot",
    name: "Sarangkot",
    shortDescription: "Chase the sunrise above Pokhara.",
    description:
      "Experience one of Nepal's most unforgettable mornings at Sarangkot. Enjoy spectacular Himalayan views, breathtaking sunrise moments and the excitement of paragliding above Pokhara Valley.",
    image: "/images/destinations/pokhara/sarangkot.jpg",
    location: "Sarangkot",
    category: "Viewpoint & Adventure",
    duration: "3–4 hours",
    bestTime: "September–December",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "world-peace-pagoda",
    slug: "world-peace-pagoda",
    name: "World Peace Pagoda",
    shortDescription: "A peaceful journey with a view to remember.",
    description:
      "Perched above Phewa Lake, the World Peace Pagoda offers a peaceful escape surrounded by nature and panoramic views of Pokhara Valley and the Himalayan range.",
    image: "/images/destinations/pokhara/world-peace-pagoda.jpg",
    location: "Phewa Lake",
    category: "Culture & Spirituality",
    duration: "2 hours",
    bestTime: "October–April",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "davis-falls",
    slug: "davis-falls",
    name: "Davis Falls",
    shortDescription: "A spectacular waterfall cascade.",
    description:
      "Experience the breathtaking power of Davis Falls (Devi's Falls), a dramatic waterfall where water plunges into a deep canyon. It's particularly impressive during the monsoon season and a must-see natural attraction near the city center.",
    image: "/images/destinations/pokhara/davis-falls.jpg",
    location: "Pokhara City Center",
    category: "Nature & Adventure",
    duration: "1–2 hours",
    bestTime: "June–September",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "pokhara-caves",
    slug: "pokhara-caves",
    name: "Pokhara Caves",
    shortDescription: "Ancient stalactite and stalagmite formations.",
    description:
      "Explore the mysterious Pokhara Caves with their stunning natural rock formations, underground chambers and the sacred Bat Cave. These caves offer a unique geological adventure and glimpse into local history.",
    image: "/images/destinations/pokhara/mahendra-cave.jpg",
    location: "Pokhara Valley",
    category: "Adventure & Culture",
    duration: "2–3 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "begnas-lake",
    slug: "begnas-lake",
    name: "Begnas Lake",
    shortDescription: "A serene alpine lake experience.",
    description:
      "Discover the tranquil beauty of Begnas Lake, a pristine alpine lake surrounded by verdant hills and peaceful villages. Perfect for boating, bird watching and experiencing authentic rural Pokhara life away from the city.",
    image: "/images/destinations/pokhara/begnas-lake.jpg",
    location: "East of Pokhara",
    category: "Nature",
    duration: "3–4 hours",
    bestTime: "October–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "gupteshwor-cave",
    slug: "gupteshwor-mahadev-cave",
    name: "Gupteshwor Cave",
    shortDescription: "A sacred cave with natural formations.",
    description:
      "Explore the mystical Gupteshwor Cave, an ancient sacred site with stunning stalactites, stalagmites and a natural waterfall inside. The cave holds deep spiritual significance and offers a unique underground adventure experience.",
    image: "/images/destinations/pokhara/gupteshwor-cave.jpg",
    location: "Pokhara Valley",
    category: "Adventure & Spirituality",
    duration: "1.5–2 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "international-mountain-museum",
    slug: "international-mountain-museum",
    name: "International Mountain Museum",
    shortDescription: "Explore mountain heritage and mountaineering history.",
    description:
      "Discover Nepal's mountain heritage at the International Mountain Museum, showcasing mountaineering expeditions, equipment, photographs and stories of legendary climbers. Learn about the culture and natural history of the Himalayas.",
    image: "/images/destinations/pokhara/international-mountain-museum.jpg",
    location: "Pokhara City Center",
    category: "Culture & Education",
    duration: "2–3 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "lakeside-pokhara",
    slug: "lakeside-pokhara",
    name: "Lakeside Pokhara",
    shortDescription: "Vibrant streets with shops, restaurants and culture.",
    description:
      "Experience the heart of Pokhara's tourism at Lakeside, a bustling area filled with traditional restaurants, cafes, shops and lodges. Enjoy stunning sunset views over Phewa Lake, local cuisine, live music and the vibrant energy of Nepal's adventure capital.",
    image: "/images/destinations/pokhara/lakesideview.jpg",
    location: "Phewa Lake Waterfront",
    category: "Culture & Dining",
    duration: "2–3 hours",
    bestTime: "September–December",
    featured: true,
    tourAvailable: false,
  },
];

const featuredPokharaTours = [
  {
    title: "Pokhara Highlights",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 68,
    price: 429,
    description:
      "A perfect introduction to Pokhara with lakeside nights, Sarangkot sunrise and cultural highlights.",
    image: "/images/destinations/pokhara/pokhara_tour_1.jpg",
    href: "/tours/pokhara-highlights",
  },
  {
    title: "Pokhara Adventure Escape",
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    reviews: 54,
    price: 649,
    description:
      "A dynamic package for paragliding, hiking, caves and the best mountain viewpoints in Pokhara.",
    image: "/images/destinations/pokhara/pokhara_tour_2.jpg",
    href: "/tours/pokhara-adventure-escape",
  },
];

const experienceItems = [
  { icon: "🚣", label: "Boating on Phewa Lake" },
  { icon: "🌅", label: "Sunrise from Sarangkot" },
  { icon: "🪂", label: "Paragliding" },
  { icon: "🥾", label: "Scenic Hiking" },
];

const whyVisitItems = [
  { title: "Local Travel Knowledge", description: "Our team knows Pokhara’s best sights, routes and seasonal rhythms.", icon: Compass },
  { title: "Carefully Designed Packages", description: "Each itinerary balances adventure, comfort and authentic local experiences.", icon: Sparkles },
  { title: "Transparent Pricing", description: "Clear cost details with no hidden fees for a confident booking experience.", icon: Globe },
  { title: "Comfortable Transportation", description: "Private transfers and reliable logistics keep your journey smooth.", icon: Waves },
  { title: "Flexible Itineraries", description: "Customize your time with hotel, activity and pace options.", icon: CheckCircle2 },
  { title: "24/7 Support", description: "Dedicated support throughout your Pokhara experience.", icon: MapPin },
];

const bestTimeCards = [
  {
    season: "Autumn",
    period: "September–November",
    note: "Clear skies, perfect for sunrises and outdoor activities.",
  },
  {
    season: "Spring",
    period: "March–May",
    note: "Mild weather and blooming rhododendrons in surrounding hills.",
  },
  {
    season: "Winter",
    period: "December–February",
    note: "Crisp air and snow-capped peaks visible from lakeside viewpoints.",
  },
];

const faqItems = [
  {
    question: "What is Pokhara famous for?",
    answer:
      "Pokhara is famous for its serene lakes, Himalayan views, sunrise viewpoints, caves and adventure activities like paragliding and hiking.",
  },
  {
    question: "How many days should I spend in Pokhara?",
    answer:
      "A stay of 3–4 days gives you time for the main lakeside sights, a sunrise viewpoint and outdoor adventures.",
  },
  {
    question: "What is the best time to visit Pokhara?",
    answer:
      "October to April is the most recommended window for clear mountain views and pleasant conditions.",
  },
  {
    question: "Can I visit Pokhara with family?",
    answer:
      "Yes. Pokhara is family-friendly with calm lakeside activities, easy viewpoints, cultural sites and gentle nature experiences.",
  },
  {
    question: "What activities can I do in Pokhara?",
    answer:
      "You can enjoy boating, paragliding, hilltop sunrises, cave visits, museums, lakeside dining and scenic hiking.",
  },
  {
    question: "Can Meegin create a customized Pokhara tour?",
    answer:
      "Absolutely. Tell us your interests and travel style, and our team can design a custom Pokhara experience for you.",
  },
];

export default function PokharaPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Pokhara" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(pokharaHeroImage) ? (
          <Image
            src={pokharaHeroImage}
            alt="Pokhara landscape with lake and mountains"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-slate-700" />
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">Pokhara, Nepal</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Pokhara</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Experience the perfect blend of peaceful lakes, breathtaking mountain views, adventure, culture and unforgettable moments in one of Nepal&apos;s most beautiful destinations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/pokhara#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Pokhara Tours
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">DISCOVER POKHARA</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
              Experience the Beauty of Nepal&apos;s Adventure Capital
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Nestled beneath the magnificent Annapurna range, Pokhara brings together serene lakes, spectacular mountain scenery, vibrant culture and unforgettable adventures. From peaceful mornings beside Phewa Lake to thrilling experiences above the valley, Pokhara offers something for every kind of traveler.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Whether you&apos;re traveling with family, searching for adventure, planning a romantic escape or simply looking for a peaceful Himalayan getaway, Pokhara is a destination you&apos;ll remember long after your journey ends.
            </p>
            <Link
              href="/destinations/pokhara#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Pokhara Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(pokharaIntroImage) ? (
              <Image
                src={pokharaIntroImage}
                alt="Pokhara adventure scenery"
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Your Pokhara intro image goes here
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0091DA]/5 via-white to-[#004AB8]/5 p-8 sm:p-12 border border-blue-100/50 shadow-xl shadow-blue-900/5">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>

          <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {[
              {
                label: "Destination",
                value: "Pokhara",
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "Location",
                value: "Kaski, Gandaki Province",
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "Known For",
                value: "Lakes, Mountains & Adventure",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "Ideal For",
                value: "Adventure, Family, Nature",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "Recommended Stay",
                value: "2–5 Days",
                icon: SunMedium,
                color: "text-emerald-600",
                bg: "bg-emerald-100/50",
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 leading-tight">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore Pokhara</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Highlights & Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularAttractions.map((place) => (
            <PlaceCard key={place.id} destinationSlug="pokhara" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular Pokhara Tours</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Tour Packages</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredPokharaTours.map((tour) => (
            <div key={tour.title} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-72 overflow-hidden bg-slate-100">
                {isValidImageSrc(tour.image) ? (
                  <Image
                    src={tour.image}
                    alt={`${tour.title} tour image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-200 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Tour image placeholder
                  </div>
                )}
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7FD] px-3 py-2 text-[#004AB8]">
                    <Star className="h-4 w-4" /> {tour.rating}
                  </span>
                  <span>{tour.reviews} reviews</span>
                  <span className="rounded-full bg-[#F7FAFC] px-3 py-2 text-slate-600">{tour.duration}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{tour.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{tour.description}</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-[#172033]">Best and affordable price</p>
                  <Link
                    href={tour.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0091DA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004AB8]"
                  >
                    View Tour <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience in Pokhara</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Things to Experience in Pokhara</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Experience the best of Pokhara with nature, culture, adventure and calm moments designed for every travel style.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {experienceItems.map((item) => (
                <div key={item.label} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="mt-4 text-base font-semibold text-[#172033]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-[#E5F7FF] p-10 text-slate-700">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#004AB8] shadow-sm shadow-slate-300/50">
              <MapPin className="h-4 w-4" /> Best Time: October – April
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>
                Pokhara is best enjoyed when the skies are clear and the lakes are calm. Plan early for sunrise viewpoints and reserve adventure activities in advance.
              </p>
              <p>
                The city is ideal for travelers who want both restful lakeside days and active mountain experiences in one flexible itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {bestTimeCards.map((card) => (
            <div key={card.season} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 text-[#004AB8]">
                <SunMedium className="h-5 w-5" />
                <h3 className="text-xl font-semibold text-slate-900">{card.season}</h3>
              </div>
              <p className="mt-4 text-lg font-semibold text-[#172033]">{card.period}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel Pokhara With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Visit Pokhara With Meegin</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            A premium travel experience with local insight, thoughtfully designed routes and reliable support.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyVisitItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#172033]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel Tips</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Essential Pokhara Travel Tips</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">1</span>Start early for sunrise viewpoints and quieter lakeside mornings.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">2</span>Carry comfortable walking shoes for lakeside paths, temple steps and easy hikes.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">3</span>Keep a light jacket handy for mountain viewpoints and early mornings.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">4</span>Keep your camera ready for changing light, reflections and mountain vistas.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">5</span>Allow flexible time for scenic stops and unexpected local discoveries.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">6</span>Respect local culture and religious sites while visiting temples and pagodas.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#004AB8]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Travel Checklist</p>
                <p className="mt-2 text-lg font-semibold text-[#172033]">Prepare for a memorable Pokhara stay</p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              Confirm your transport, keep hydration handy and choose activities that match your energy level for the best Pokhara experience.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Frequently Asked Questions</h2>
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-4xl border border-slate-200 bg-[#F7FAFC] p-5 transition hover:border-[#0091DA]">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-[#172033]">
                    {item.question}
                    <ArrowRight className="h-4 w-4 transition duration-200 group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#004AB8] text-white">
        <div className="absolute inset-0 bg-slate-950/30" />
        {isValidImageSrc(pokharaCtaImage) ? (
          <Image src={pokharaCtaImage} alt="Pokhara evening scenery" fill className="object-cover opacity-60" sizes="100vw" />
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A6D7FF]">Create Your Perfect Pokhara Journey</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Have something special in mind? Let us design your perfect Pokhara itinerary.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Have something special in mind? Tell us what you want to experience and our travel team can help create a journey around your interests.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#219736] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#219736]/30 transition hover:bg-[#068835]"
              >
                Plan My Trip
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:border-white"
              >
                Contact Meegin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
