import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe,
  MapPin,
  Mountain,
  Sparkles,
  Star,
  SunMedium,
  Tent,
  Waves,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import type { Place } from "@/types";

export const metadata: Metadata = {
  title: "Mustang Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Mustang with Meegin Tours & Travels. Discover Lo Manthang, Muktinath, Kagbeni, Marpha, Jomsom, Himalayan landscapes, monasteries, trekking routes and unforgettable high-altitude experiences.",
};

const mustangHeroImage = "/images/destinations/mustang/mustang.jpg";
const mustangIntroImage = "/images/destinations/mustang/intro.jpg";
const mustangCtaImage = "/images/destinations/mustang/cta.webp";

const popularAttractions: Place[] = [
  {
    id: "lo-manthang",
    slug: "lo-manthang",
    name: "Lo Manthang",
    shortDescription: "The ancient walled kingdom.",
    description:
      "Step into the historic heart of Upper Mustang at Lo Manthang, the last surviving walled capital of the former kingdom. Surrounded by dramatic Himalayan terrain and centered on ancient monasteries, the town offers visitors a rare glimpse into a distinct Tibetan-influenced culture that has remained deeply rooted in tradition. Explore the narrow lanes, prayer flags, adobe architecture and sacred spaces while taking in panoramic views of the high desert landscape. The experience is unforgettable for travelers seeking heritage, spirituality and a true sense of remoteness.",
    image: "/images/destinations/mustang/lo-manthangg.jpg",
    location: "Upper Mustang",
    category: "Culture & Heritage",
    duration: "2–3 days",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "upper-mustang-adventure",
  },
  {
    id: "muktinath",
    slug: "muktinath",
    name: "Muktinath Temple",
    shortDescription: "A sacred pilgrimage site.",
    description:
      "Muktinath Temple is one of Nepal's most revered spiritual destinations, attracting both Hindu and Buddhist pilgrims. Set in a dramatic high-altitude valley, the site is known for its sacred atmosphere, natural springs and striking mountain scenery. Visitors often combine a spiritual visit with the surrounding trails and scenic viewpoints, making it a meaningful stop for both reflection and photography. The journey to Muktinath unfolds through the raw beauty of the Himalayas, with a sense of remoteness that heightens the experience of this profound place.",
    image: "/images/destinations/mustang/muktinath.jpg",
    location: "Lower Mustang",
    category: "Spirituality & Pilgrimage",
    duration: "1–2 days",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "muktinath-lower-mustang",
  },
  {
    id: "kagbeni",
    slug: "kagbeni",
    name: "Kagbeni",
    shortDescription: "Where culture meets high desert landscapes.",
    description:
      "Kagbeni is one of the most atmospheric villages in Mustang, known for its iconic old architecture, dramatic valley setting and close proximity to the sacred Muktinath region. The village reflects the rich Tibetan heritage of the area, with prayer flags, stone homes and a strong sense of continuity in daily life. Travelers can enjoy local hospitality, scenic walks and a deeper understanding of the region's cultural traditions while soaking in the stark beauty of the surrounding high-altitude terrain. It is a favorite stop for those looking to combine cultural experience with mountain scenery.",
    image: "/images/destinations/mustang/kagbeni.jpg",
    location: "Lower Mustang",
    category: "Village Culture",
    duration: "1–2 days",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "marpha",
    slug: "marpha",
    name: "Marpha",
    shortDescription: "A charming mountain village.",
    description:
      "Marpha is a picturesque village famed for its traditional stone houses, apple orchards and warm local hospitality. Located in a dramatic setting above the valley, the town offers sweeping views of the surrounding Himalayan ridges and a peaceful atmosphere that feels far removed from the modern world. It serves as a perfect pause for travelers moving through the region, where they can enjoy village walks, local food, and a slower pace amid some of the most striking mountain vistas in Nepal. The village's unique blend of culture, beauty and tranquility makes it especially memorable.",
    image: "/images/destinations/mustang/marpha.jpg",
    location: "Lower Mustang",
    category: "Village & Food",
    duration: "1–2 days",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "jomsom",
    slug: "jomsom",
    name: "Jomsom",
    shortDescription: "Gateway to Mustang's dramatic valleys.",
    description:
      "Jomsom is the gateway to much of Mustang's iconic trekking and mountain travel. Surrounded by rugged terrain, wide-open valleys and impressive Himalayan ridges, the town is a dynamic base for exploration across the region. It is also a key transition point for journeys into the high desert landscapes of Upper Mustang and lower valley routes. Travelers are drawn here by the raw scenery, the sense of adventure and the opportunity to connect with the rhythm of this remote Himalayan region. The area offers both practical access and striking visual drama.",
    image: "/images/destinations/mustang/jomsom.jpg",
    location: "Central Mustang",
    category: "Adventure & Travel Hub",
    duration: "1–2 days",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "dhakmar",
    slug: "dhakmar",
    name: "Dhakmar",
    shortDescription: "A remote village of mountain heritage.",
    description:
      "Dhakmar offers one of the most striking examples of remote village life in Mustang, surrounded by dramatic rock formations, arid slopes and open Himalayan views. The village is known for its distinct architecture, strong local traditions and cultural atmosphere that feel untouched by mass tourism. It is an excellent destination for travelers interested in discovering hidden communities, monastery traditions and the slower pace of life in remote parts of Nepal. The landscape around Dhakmar is dramatic and deeply scenic, making it a rewarding stop for photographers and explorers alike.",
    image: "/images/destinations/mustang/dhakmar.jpg",
    location: "Upper Mustang",
    category: "Culture & Remote Living",
    duration: "1–2 days",
    bestTime: "March–May, September–October",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "chhoser-cave",
    slug: "chhoser-cave",
    name: "Chhoser Cave",
    shortDescription: "A hidden natural and spiritual landmark.",
    description:
      "Chhoser Cave is one of the lesser-known gems of Mustang, combining geological intrigue with the cultural landscape of the region. Located in a rugged and remote environment, the cave offers travelers a chance to explore an unusual site shaped by natural forces over time. It is especially interesting for those seeking a deeper connection to the region’s natural history and hidden wonders beyond the major trekking routes. The experience adds a sense of discovery to a Mustang itinerary and complements the broader story of remote Himalayan exploration.",
    image: "/images/destinations/mustang/chhoser.jpg",
    location: "Upper Mustang",
    category: "Adventure & Discovery",
    duration: "1–2 hours",
    bestTime: "March–May, September–November",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "ghami-village",
    slug: "ghami-village",
    name: "Ghami Village",
    shortDescription: "A quiet village in the heart of Mustang.",
    description:
      "Ghami Village captures the essence of remote Himalayan life with its quiet lanes, traditional homes, prayer settings and broad mountain views. As you walk through the settlement, you get a sense of the region's resilience and cultural continuity shaped by harsh terrain and deep spiritual traditions. The village is a wonderful place to pause, interact with local communities and enjoy the stark beauty of the surrounding landscape. For travelers looking for a genuine Himalayan experience beyond caravan routes and busy tourist areas, Ghami offers that rare calm and authenticity.",
    image: "/images/destinations/mustang/ghami-village.jpg",
    location: "Upper Mustang",
    category: "Village Life",
    duration: "1 day",
    bestTime: "April–June, September–October",
    featured: true,
    tourAvailable: false,
  },
];

const featuredMustangTours = [
  {
    title: "Upper Mustang Adventure",
    duration: "10 Days / 9 Nights",
    rating: 4.8,
    reviews: 124,
    price: 1799,
    description:
      "Discover remote valleys, Lo Manthang, monasteries and the dramatic landscapes of Upper Mustang on an immersive Himalayan journey.",
    image: "/images/destinations/mustang/upper-mustang-tour.jpg",
    href: "/tours/upper-mustang-adventure",
  },
  {
    title: "Muktinath & Lower Mustang Journey",
    duration: "7 Days / 6 Nights",
    rating: 4.7,
    reviews: 86,
    price: 1199,
    description:
      "Travel through Jomsom, Marpha and the sacred Muktinath region for a balanced mix of spiritual heritage, village culture and mountain scenery.",
    image: "/images/destinations/mustang/muktinath-tour.png",
    href: "/tours/muktinath-lower-mustang",
  },
];

const experienceItems = [
  { icon: "🏔️", label: "Himalayan Mountain Views" },
  { icon: "🐎", label: "Mustang Village Adventure" },
  { icon: "🛕", label: "Ancient Monasteries" },
  { icon: "🥾", label: "Himalayan Trekking" },
];

const whyVisitItems = [
  { title: "Dramatic Himalayan Landscapes", description: "Experience dry valleys, high passes and striking ridgelines shaped by the mountains of Nepal.", icon: Mountain },
  { title: "Ancient Culture", description: "Walk through villages and heritage sites that preserve deep Tibetan-influenced traditions.", icon: Compass },
  { title: "Lo Manthang", description: "Discover the historic walled capital and its temples, culture and heritage atmosphere.", icon: Globe },
  { title: "Muktinath", description: "Visit a deeply sacred destination that holds spiritual importance for many travelers.", icon: Sparkles },
  { title: "Adventure", description: "Enjoy trekking, mountain views and the thrill of exploring one of Nepal's most remote regions.", icon: Tent },
  { title: "Photography", description: "Capture unforgettable vistas, monasteries, villages and the changing light of the high desert.", icon: MapPin },
];

const bestTimeCards = [
  {
    season: "Spring",
    period: "March–May",
    note: "Pleasant trekking conditions and improving mountain visibility create excellent seasonal travel windows.",
  },
  {
    season: "Autumn",
    period: "September–November",
    note: "A popular season for mountain journeys, with generally favorable weather and clear conditions for travel.",
  },
  {
    season: "Winter",
    period: "December–February",
    note: "Cold temperatures and challenging higher routes mean travelers should prepare carefully for winter conditions.",
  },
];

const faqItems = [
  {
    question: "What is Mustang famous for?",
    answer:
      "Mustang is famous for its dramatic Himalayan landscapes, ancient walled settlements, monasteries, Tibetan-influenced culture and unforgettable trekking experiences.",
  },
  {
    question: "When is the best time to visit Mustang?",
    answer:
      "Spring and autumn are often the most comfortable windows for travel, though the best time depends on the exact route, weather and trekking goals.",
  },
  {
    question: "How many days are needed for a Mustang trip?",
    answer:
      "Trip duration varies depending on whether you are exploring Lower Mustang, Muktinath or Upper Mustang, but a longer stay is ideal for the full experience.",
  },
  {
    question: "Is Mustang suitable for trekking?",
    answer:
      "Yes, Mustang offers trekking and hiking options ranging from scenic day walks to demanding high-altitude routes that require good preparation.",
  },
  {
    question: "What should I pack for Mustang?",
    answer:
      "Pack layered clothing, warm jackets, sturdy trekking footwear, sun protection, personal medication, a water bottle, a power bank and travel essentials suited to mountain conditions.",
  },
  {
    question: "Do I need permits to visit Mustang?",
    answer:
      "Permit requirements depend on the specific Mustang area and route, so it is important to confirm current conditions before travel and plan accordingly.",
  },
];

export default function MustangPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Mustang" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(mustangHeroImage) ? (
          <Image
            src={mustangHeroImage}
            alt="Mustang landscape with mountains and valleys"
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">Mustang, Nepal</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Mustang</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Journey through hidden valleys, ancient villages and breathtaking Himalayan landscapes in one of Nepal&apos;s most captivating regions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/mustang#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Mustang
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">DISCOVER MUSTANG</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
              A Remote Himalayan Kingdom of Culture, Faith and Adventure
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Mustang sits in the high Himalayan region of Nepal, where dry valleys, sandstone cliffs and dramatic mountain ranges shape a landscape unlike anywhere else in the country. From the ancient cultural heart of Lo Manthang to the sacred destination of Muktinath and the winding village routes in between, Mustang combines spiritual heritage with unforgettable trekking experiences.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Whether you are exploring Tibetan-influenced villages, hiking through remote trails or simply soaking in the calm of this high desert region, Mustang offers a journey that feels both culturally rich and deeply adventurous.
            </p>
            <Link
              href="/destinations/mustang#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Mustang Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(mustangIntroImage) ? (
              <Image
                src={mustangIntroImage}
                alt="Mustang valley and mountain scenery"
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Your Mustang intro image goes here
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
                value: "Mustang",
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "Location",
                value: "North-central Nepal",
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "Known For",
                value: "Lo Manthang, Muktinath & Himalayan landscapes",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "Ideal For",
                value: "Adventure seekers, trekkers & culture lovers",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "Recommended Stay",
                value: "5–12+ Days",
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore Mustang</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Highlights & Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularAttractions.map((place) => (
            <PlaceCard key={place.id} destinationSlug="mustang" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Featured Mustang Tours</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Popular Tour Packages</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredMustangTours.map((tour) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience in Mustang</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Mustang Experiences</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Mustang rewards curious travelers with a mix of mountain adventure, cultural discovery and unforgettable scenery across remote valleys and sacred sites.
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
              <MapPin className="h-4 w-4" /> Best Time: Spring & Autumn
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>
                In Mustang, the best conditions for travel and trekking usually come in spring and autumn when the weather is more stable and mountain visibility is often better.
              </p>
              <p>
                High-altitude conditions can shift quickly, so it is best to travel with flexible plans and local knowledge for the safest and most comfortable route.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel Mustang With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Visit Mustang With Meegin</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Thoughtful planning for a remote Himalayan journey that balances cultural depth, comfort and unforgettable scenery.
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
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Essential Mustang Travel Tips</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">1</span>Prepare for altitude and allow your body time to adjust when exploring high-elevation areas.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">2</span>Check current weather and route conditions before setting out, as mountain conditions can change quickly.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">3</span>Carry warm layers for cold mornings, evenings and higher-altitude sections of your trip.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">4</span>Keep cash with you, as remote areas may have limited ATM or card access.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">5</span>Respect local customs and dress modestly when visiting monasteries, temples and village communities.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">6</span>Confirm current permit requirements and route access before departure for a smooth and compliant journey.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#004AB8]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Travel Checklist</p>
                <p className="mt-2 text-lg font-semibold text-[#172033]">Prepare for a rugged Himalayan journey</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>✓ Valid identification and required permits</li>
              <li>✓ Warm clothing and layered outfits</li>
              <li>✓ Comfortable trekking shoes</li>
              <li>✓ Sunglasses and sunscreen</li>
              <li>✓ Personal medicines</li>
              <li>✓ Reusable water bottle</li>
              <li>✓ Power bank</li>
              <li>✓ Basic first-aid supplies</li>
              <li>✓ Cash</li>
              <li>✓ Travel insurance</li>
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
        {isValidImageSrc(mustangCtaImage) ? (
          <Image src={mustangCtaImage} alt="Mustang mountain scenery" fill className="object-cover opacity-60" sizes="100vw" />
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A6D7FF]">Ready to Explore Mustang?</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Plan an unforgettable journey through Mustang&apos;s valleys, villages and heritage.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Let us help you build a custom Mustang journey around your interests, pace and travel style.
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
