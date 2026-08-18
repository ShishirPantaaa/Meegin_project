import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPin,
  Sparkles,
  Star,
  SunMedium,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import type { Place } from "@/types";

export const metadata: Metadata = {
  title: "Lumbini Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Lumbini, Nepal with Meegin Tours & Travels. Discover Maya Devi Temple, the Sacred Garden, Buddhist monasteries, historic sites and peaceful cultural experiences.",
};

const lumbiniHeroImage = "/images/destinations/lumbini/hero.jpg";
const lumbiniIntroImage = "/images/destinations/lumbini/intro.jpg";
const lumbiniCtaImage = "/images/destinations/lumbini/cta.jpg";

const popularAttractions: Place[] = [
  {
    id: "maya-devi-temple",
    slug: "maya-devi-temple",
    name: "Maya Devi Temple",
    shortDescription: "A sacred site central to Lumbini's heritage.",
    description:
      "Maya Devi Temple is one of Lumbini's most significant sacred landmarks and a central stop for visitors exploring the area's Buddhist heritage. The temple complex and archaeological remains provide a meaningful setting for reflection while offering insight into the region's long spiritual history. Travelers often begin their Lumbini journey here before moving through nearby monuments and monastery areas.",
    image: "/images/destinations/lumbini/maya-devi-temple.jpg",
    location: "Sacred Garden, Lumbini",
    category: "Buddhist Heritage",
    duration: "1–2 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "lumbini-spiritual-journey",
  },
  {
    id: "sacred-garden",
    slug: "sacred-garden",
    name: "Sacred Garden",
    shortDescription: "A peaceful pilgrimage landscape.",
    description:
      "The Sacred Garden is the spiritual heart of Lumbini, with pathways, monuments and quiet spaces that invite thoughtful exploration. It brings together history, symbolism and a calm atmosphere that many visitors value for meditation and slow walking. The setting supports both cultural sightseeing and personal reflection in one of Nepal's most meaningful heritage areas.",
    image: "/images/destinations/lumbini/sacred-garden.jpg",
    location: "Lumbini Development Zone",
    category: "Spiritual",
    duration: "2–3 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "ashoka-pillar",
    slug: "ashoka-pillar",
    name: "Ashoka Pillar",
    shortDescription: "A historic marker of Lumbini's global significance.",
    description:
      "Ashoka Pillar is one of Lumbini's most important historical references and is closely associated with the site's long-standing pilgrimage identity. The monument is valued for its heritage meaning and remains a key point of interest for visitors exploring the Sacred Garden area. It offers a direct connection to Lumbini's documented past and its role in Buddhist travel traditions.",
    image: "/images/destinations/lumbini/ashoka-pillar.jpg",
    location: "Near Maya Devi Temple",
    category: "History",
    duration: "30–60 minutes",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "pushkarini-pool",
    slug: "pushkarini-pool",
    name: "Pushkarini Pool",
    shortDescription: "A serene sacred pond near key heritage sites.",
    description:
      "Pushkarini Pool adds a calm and contemplative layer to the Lumbini experience. Located close to major monuments, it is often included in spiritual and cultural walks through the core heritage zone. The still water, open surroundings and nearby sacred landmarks make it a memorable stop for visitors interested in atmosphere as much as architecture.",
    image: "/images/destinations/lumbini/pushkarini-pool.jpg",
    location: "Sacred Garden, Lumbini",
    category: "Peace & Nature",
    duration: "30–45 minutes",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "lumbini-monastic-zone",
    slug: "lumbini-monastic-zone",
    name: "Lumbini Monastic Zone",
    shortDescription: "A global collection of Buddhist monastery architecture.",
    description:
      "The Monastic Zone showcases monasteries and spiritual centers built by Buddhist communities from different countries, each with distinct design traditions and cultural character. Walking through this area gives visitors a rare chance to experience varied architectural styles, prayer spaces and heritage expressions in one destination. It is one of Lumbini's most visually and culturally rewarding sections.",
    image: "/images/destinations/lumbini/lumbini-monastic-zone.jpg",
    location: "Lumbini Development Zone",
    category: "Architecture",
    duration: "2–4 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: true,
    tourSlug: "lumbini-heritage-peace-tour",
  },
  {
    id: "world-peace-pagoda",
    slug: "world-peace-pagoda",
    name: "World Peace Pagoda",
    shortDescription: "A landmark devoted to peace and harmony.",
    description:
      "The World Peace Pagoda in Lumbini is an important symbol of unity and peaceful coexistence. Its setting and design attract visitors seeking quiet moments as well as photographers interested in form and symmetry. The pagoda is commonly visited as part of heritage circuits that combine sacred landmarks, monastery visits and broader cultural exploration across Lumbini.",
    image: "/images/destinations/lumbini/world-peace-pagoda.jpg",
    location: "Lumbini Area",
    category: "Spiritual",
    duration: "1 hour",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "thai-monastery",
    slug: "thai-monastery",
    name: "Thai Monastery",
    shortDescription: "Elegant temple architecture with a peaceful setting.",
    description:
      "Thai Monastery is known for its refined design, clean lines and tranquil surroundings, making it a favorite for visitors interested in international Buddhist architecture. The site offers both visual beauty and a calm environment suited to mindful travel. It is often explored together with nearby monasteries to understand how different Buddhist communities represent their heritage in Lumbini.",
    image: "/images/destinations/lumbini/thai-monastery.jpg",
    location: "Monastic Zone, Lumbini",
    category: "Architecture",
    duration: "45–60 minutes",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "myanmar-golden-temple",
    slug: "myanmar-golden-temple",
    name: "Myanmar Golden Temple",
    shortDescription: "A striking monastery with distinctive style.",
    description:
      "Myanmar Golden Temple stands out for its unique visual style and spiritual atmosphere within the Monastic Zone. Visitors appreciate its architecture, cultural identity and the peaceful rhythm of temple life around it. Including this stop in a Lumbini itinerary helps travelers experience the international cultural presence that makes the destination so distinctive.",
    image: "/images/destinations/lumbini/myanmar-golden-temple.jpg",
    location: "Monastic Zone, Lumbini",
    category: "Culture",
    duration: "45–60 minutes",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
];

const featuredLumbiniTours = [
  {
    title: "Lumbini Spiritual Journey",
    duration: "2 Days / 1 Night",
    rating: 4.8,
    reviews: 74,
    price: 299,
    description:
      "Explore Maya Devi Temple, Sacred Garden, Ashoka Pillar, Monastic Zone and selected monasteries on a meaningful short spiritual journey.",
    image: "/images/destinations/lumbini/lumbini-spiritual-tour.jpg",
    href: "/tours/lumbini-spiritual-journey",
  },
  {
    title: "Lumbini Heritage & Peace Tour",
    duration: "3 Days / 2 Nights",
    rating: 4.7,
    reviews: 59,
    price: 429,
    description:
      "Discover the Sacred Garden, Buddhist monasteries, World Peace Pagoda and cultural landmarks with time for quiet reflection and peaceful walks.",
    image: "/images/destinations/lumbini/lumbini-tour.jpg",
    href: "/tours/lumbini-heritage-peace-tour",
  },
];

const experienceItems = [
  { icon: "🪷", label: "Sacred Site Exploration" },
  { icon: "🛕", label: "Buddhist Monastery Tour" },
  { icon: "🧘", label: "Peace & Meditation" },
  { icon: "🌿", label: "Garden & Cultural Walk" },
];

const bestTimeCards = [
  {
    season: "Autumn",
    period: "September–November",
    note: "Generally pleasant conditions for sightseeing and cultural exploration.",
  },
  {
    season: "Winter",
    period: "December–February",
    note: "Cooler temperatures can make outdoor sightseeing comfortable during the day.",
  },
  {
    season: "Spring",
    period: "March–May",
    note: "Warm conditions and opportunities to explore Lumbini's gardens and heritage sites.",
  },
];

const whyVisitItems = [
  {
    title: "Buddhist Heritage",
    description: "Explore one of the world's most important Buddhist pilgrimage destinations.",
    icon: Sparkles,
  },
  {
    title: "Spiritual Experience",
    description: "Experience a peaceful environment for reflection and cultural discovery.",
    icon: Compass,
  },
  {
    title: "UNESCO World Heritage",
    description:
      "Discover Lumbini's recognized significance as a UNESCO World Heritage Site and a major heritage destination in Nepal.",
    icon: Landmark,
  },
  {
    title: "Historic Architecture",
    description:
      "Discover temples, monasteries and architectural traditions from different Buddhist communities.",
    icon: Globe,
  },
  {
    title: "Peaceful Environment",
    description: "Enjoy gardens, pathways and quiet spaces around the sacred area.",
    icon: Leaf,
  },
  {
    title: "Cultural Discovery",
    description:
      "Experience Nepal's Buddhist heritage and the international cultural presence of Lumbini.",
    icon: HeartHandshake,
  },
];

const faqItems = [
  {
    question: "What is Lumbini famous for?",
    answer:
      "Lumbini is famous for its connection to the birthplace traditionally associated with Siddhartha Gautama, the Buddha, and for its role as one of the world's most important Buddhist pilgrimage destinations.",
  },
  {
    question: "How many days are needed for Lumbini?",
    answer:
      "For many travelers, 1–3 days is suitable depending on how deeply you want to explore monasteries, heritage landmarks and nearby cultural areas.",
  },
  {
    question: "What can I see in Lumbini?",
    answer:
      "Visitors can explore Maya Devi Temple, the Sacred Garden, Ashoka Pillar, Pushkarini Pool, the Monastic Zone, international monasteries and peace pagodas across the wider heritage area.",
  },
  {
    question: "Is Lumbini suitable for families?",
    answer:
      "Yes. Lumbini can be suitable for families interested in history, culture and peaceful sightseeing, especially when the itinerary includes comfortable walking breaks.",
  },
  {
    question: "When is the best time to visit Lumbini?",
    answer:
      "Seasonal conditions vary through the year, so the best time depends on your weather preferences and walking comfort; autumn, winter and spring are commonly considered comfortable for exploring outdoor heritage areas.",
  },
  {
    question: "What should I wear when visiting Lumbini?",
    answer:
      "Wear comfortable, respectful clothing suitable for visiting religious and cultural sites, along with shoes that support walking between monuments and monastery zones.",
  },
];

export default function LumbiniPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Lumbini" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(lumbiniHeroImage) ? (
          <Image
            src={lumbiniHeroImage}
            alt="Lumbini sacred garden"
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">Lumbini, Nepal</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Lumbini</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Journey to the birthplace of Lord Buddha and explore a sacred landscape of spirituality, history, monasteries and peace.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/lumbini#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Lumbini
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Plan My Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">WELCOME TO LUMBINI</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
              Welcome to Lumbini
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Lumbini is widely known as the birthplace traditionally associated with Siddhartha Gautama, the Buddha, and remains one of the most significant pilgrimage destinations for Buddhist heritage. The site combines spiritual importance with a calm, open landscape that supports both cultural travel and peaceful reflection.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              From the Sacred Garden and Maya Devi Temple to the Ashoka Pillar, Monastic Zone and international monasteries, Lumbini brings together history, architecture and living traditions in one accessible destination. It is ideal for spiritual travelers, history lovers and anyone seeking a thoughtful cultural journey.
            </p>
            <Link
              href="/destinations/lumbini#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Lumbini Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(lumbiniIntroImage) ? (
              <Image
                src={lumbiniIntroImage}
                alt="Lumbini heritage landscape with monasteries"
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Your Lumbini intro image goes here
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
                value: "Lumbini, Nepal",
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "Location",
                value: "Rupandehi District, Nepal",
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "Known For",
                value: "Birthplace of Siddhartha Gautama",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "Ideal For",
                value: "Spiritual travelers, history lovers",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "Recommended Stay",
                value: "1–3 Days",
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore Lumbini</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Highlights & Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularAttractions.map((place) => (
            <PlaceCard key={place.id} destinationSlug="lumbini" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular Lumbini Tours</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Tour Packages</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredLumbiniTours.map((tour) => (
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
                  <p className="text-lg font-semibold text-[#172033]">From ${tour.price}</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience in Lumbini</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Lumbini Experiences</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Lumbini offers a balanced journey of sacred landmarks, cultural spaces and calm gardens designed for thoughtful exploration.
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
              <MapPin className="h-4 w-4" /> Best Time: Sep–May
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>
                Lumbini is often most comfortable for extended walking and open-air exploration during autumn, winter and spring.
              </p>
              <p>
                Morning visits can feel especially pleasant in warmer periods, and a paced itinerary helps travelers enjoy sacred spaces more deeply.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel Lumbini With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Visit Lumbini With Meegin</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Lumbini combines deep heritage and calm surroundings, and the right plan helps you experience both with comfort and clarity.
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
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Essential Lumbini Travel Tips</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">1</span>Wear comfortable and respectful clothing when visiting religious and sacred places.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">2</span>Follow photography, footwear and visitor guidelines at religious sites.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">3</span>Morning visits can be more comfortable, especially during warmer months.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">4</span>Carry drinking water when exploring the larger site area.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">5</span>Expect walking between different monuments and monasteries, so choose comfortable shoes.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">6</span>Keep noise low and respect visitors who are there for prayer, meditation or pilgrimage.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#004AB8]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Travel Checklist</p>
                <p className="mt-2 text-lg font-semibold text-[#172033]">Pack for comfort and respect</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>✓ Comfortable walking shoes</li>
              <li>✓ Modest/respectful clothing</li>
              <li>✓ Sun hat</li>
              <li>✓ Sunglasses</li>
              <li>✓ Sunscreen</li>
              <li>✓ Reusable water bottle</li>
              <li>✓ Camera</li>
              <li>✓ Personal medicines</li>
              <li>✓ Light rain protection</li>
              <li>✓ Small day bag</li>
            </ul>
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
        {isValidImageSrc(lumbiniCtaImage) ? (
          <Image src={lumbiniCtaImage} alt="Lumbini monastery and peaceful surroundings" fill className="object-cover opacity-60" sizes="100vw" />
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A6D7FF]">Ready to Discover Lumbini?</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Ready to Discover Lumbini?</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Explore the sacred birthplace associated with the Buddha and experience Lumbini&apos;s remarkable heritage, monasteries and peaceful surroundings.
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
