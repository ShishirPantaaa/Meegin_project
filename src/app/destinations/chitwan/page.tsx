import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Bird,
  CheckCircle2,
  Compass,
  Globe,
  Leaf,
  MapPin,
  PawPrint,
  Sparkles,
  Star,
  SunMedium,
  Waves,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import type { Place } from "@/types";

export const metadata: Metadata = {
  title: "Chitwan Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Chitwan with Meegin Tours & Travels. Discover Chitwan National Park, jungle safaris, wildlife, canoeing, bird watching, Tharu culture and unforgettable nature experiences in Nepal.",
};

const chitwanHeroImage = "/images/destinations/chitwan/hero.jpeg";
const chitwanIntroImage = "/images/destinations/chitwan/intro.jpg";
const chitwanCtaImage = "/images/destinations/chitwan/cta.jpg";

const popularAttractions: Place[] = [
  {
    id: "chitwan-national-park",
    slug: "chitwan-national-park",
    name: "Chitwan National Park",
    shortDescription: "Nepal's famous wildlife sanctuary.",
    description:
      "Chitwan National Park is one of Nepal's most important natural treasures, inviting visitors into a rich tropical landscape shaped by rivers, grasslands and sal forests. The park's ecosystem supports a remarkable variety of wildlife and makes it one of the best places in Nepal for nature-focused travel. Safari experiences here offer the chance to explore a living landscape where elephant herds, birdlife and insect-rich habitats create a vibrant scene. Whether you travel by jeep, on foot or along the river, the park delivers a vivid sense of the wild that is both thrilling and deeply memorable.",
    image: "/images/destinations/chitwan/chitwan-national-park.jpg",
    location: "Southern Nepal",
    category: "Wildlife & Nature",
    duration: "1–2 days",
    bestTime: "September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "chitwan-jungle-safari",
  },
  {
    id: "jeep-safari",
    slug: "jeep-safari",
    name: "Jeep Safari",
    shortDescription: "Explore the jungle in motion.",
    description:
      "A jeep safari takes travelers into the heart of Chitwan's diverse landscape, providing a comfortable way to cover more ground while observing wildlife, birdlife and open grasslands. This is one of the best ways to experience the park's rhythms, especially at sunrise or late afternoon when animals are often more active. Along the route, guides help point out tracks, hidden habitats and emerging wildlife while explaining the park's ecology. For visitors who want an energetic yet accessible wildlife experience, a jeep safari offers a perfect blend of excitement and scenery.",
    image: "/images/destinations/chitwan/jeep-safari.jpg",
    location: "Chitwan National Park",
    category: "Adventure",
    duration: "2–4 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "rapti-river-canoeing",
    slug: "rapti-river-canoeing",
    name: "Rapti River Canoeing",
    shortDescription: "A peaceful river adventure.",
    description:
      "Glide along the Rapti River in a canoe and experience Chitwan from a completely different perspective. The riverbanks are vibrant with bird activity, crocodile sightings and a steady flow of life from the surrounding forest. Canoeing offers a calm, scenic journey where travelers can slow down and take in the natural beauty of the region without the rush of a safari drive. It is especially appealing for photographers and nature lovers who enjoy observing movement, light and the sounds of the jungle from the water.",
    image: "/images/destinations/chitwan/canoeing.jpg",
    location: "Rapti River",
    category: "Nature & Adventure",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "tharu-village",
    slug: "tharu-village",
    name: "Tharu Village",
    shortDescription: "A glimpse into local culture and community life.",
    description:
      "A visit to a Tharu village reveals one of the most engaging cultural sides of Chitwan. The Tharu community has a long and distinctive connection to the region's forests, agriculture and traditions, and village visits offer insight into local food, crafts, daily routines and heritage. Travelers often enjoy community interaction, cultural storytelling and the chance to see how life unfolds in a setting shaped by both nature and tradition. The experience adds a human, local dimension to a safari trip and helps visitors connect more deeply with the region beyond its wildlife.",
    image: "/images/destinations/chitwan/tharu-village.jpg",
    location: "Village Belt of Chitwan",
    category: "Culture",
    duration: "2–3 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "tharu-cultural-museum",
    slug: "tharu-cultural-museum",
    name: "Tharu Cultural Museum",
    shortDescription: "Learn about Tharu heritage and traditions.",
    description:
      "The Tharu Cultural Museum offers a thoughtful introduction to the communities and traditions of this region. Through exhibits, tools, household items and cultural displays, it helps visitors understand how Tharu life is shaped by the surrounding landscape, history and practical knowledge of the forest. It is an ideal place to enrich a safari itinerary with context about local identity and cultural heritage. For travelers interested in anthropology, village life and local traditions, this stop adds another meaningful layer to the Chitwan experience.",
    image: "/images/destinations/chitwan/tharu-cultural-museum.jpg",
    location: "Chitwan",
    category: "Culture",
    duration: "1–2 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "bishazari-lake",
    slug: "bishazari-lake",
    name: "Bishazari Lake",
    shortDescription: "A bird-rich wetland experience.",
    description:
      "Bishazari Lake is a tranquil wetland setting known for birdlife and a peaceful atmosphere that contrasts beautifully with the busier safari zones. It is ideal for calm observation, nature walks and photography, especially for travelers interested in water birds and wetland habitats. The surrounding landscape combines still water, lush greenery and open skies, creating a restful place to appreciate Chitwan’s ecological variety. For visitors seeking a quieter moment outdoors, this destination offers a gentle and rewarding experience.",
    image: "/images/destinations/chitwan/bishazari-lake.jpg",
    location: "Chitwan Lowlands",
    category: "Nature",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "devghat",
    slug: "devghat",
    name: "Devghat",
    shortDescription: "A spiritual stop in the jungle foothills.",
    description:
      "Devghat is a culturally significant place with spiritual importance and a peaceful atmosphere, set among the broader landscape of the southern plains. It offers a different side of Chitwan, where nature, faith and local heritage meet in a serene environment. Visitors often come here to observe the calmer rhythm of the region or to enjoy a reflective break between more active jungle activities. It enriches a Chitwan itinerary by adding a slower, more contemplative chapter to the journey.",
    image: "/images/destinations/chitwan/devghat.jpg",
    location: "Near Chitwan",
    category: "Spiritual & Culture",
    duration: "1–2 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "jungle-walk-bird-watching",
    slug: "jungle-walk-bird-watching",
    name: "Jungle Walk & Bird Watching",
    shortDescription: "Slow, attentive exploration of the wild.",
    description:
      "Jungle walks and bird watching bring travelers close to the details of Chitwan's rich natural world. This form of exploration invites attention to small movements, bird calls, forest textures and the subtle signals that reveal local wildlife activity. It is a perfect complement to safari drives, allowing travelers to slow down and notice the layered beauty of the ecosystem. For nature lovers, photographers and first-time visitors, these quiet activities can become the most memorable part of the journey.",
    image: "/images/destinations/chitwan/bird-watching.jpg",
    location: "Chitwan National Park",
    category: "Wildlife",
    duration: "2–3 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: false,
  },
];

const featuredChitwanTours = [
  {
    title: "Chitwan Jungle Safari",
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviews: 142,
    price: 549,
    description:
      "Experience jeep safaris, canoeing, nature walks and bird watching with a memorable Chitwan wildlife itinerary.",
    image: "/images/destinations/chitwan/chitwan-tour.jpg",
    href: "/tours/chitwan-jungle-safari",
  },
  {
    title: "Chitwan Wildlife & Culture Experience",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviews: 98,
    price: 699,
    description:
      "Explore Chitwan National Park, discover village traditions and enjoy a balanced mix of jungle adventures and cultural immersion.",
    image: "/images/destinations/chitwan/jungle-safari-tour.jpg",
    href: "/tours/chitwan-wildlife-culture",
  },
];

const experienceItems = [
  { icon: "🦏", label: "Wildlife Safari" },
  { icon: "🛶", label: "River Canoeing" },
  { icon: "🐦", label: "Bird Watching" },
  { icon: "🌿", label: "Jungle Walk" },
];

const bestTimeCards = [
  {
    season: "Autumn",
    period: "September–November",
    note: "Generally favorable conditions for wildlife viewing and nature-focused travel in the park.",
  },
  {
    season: "Winter",
    period: "December–February",
    note: "Cooler conditions can make outdoor exploration comfortable, though mornings and evenings can feel brisk.",
  },
  {
    season: "Spring",
    period: "March–May",
    note: "Warmer weather and active landscapes make this a rewarding time for jungle and river experiences.",
  },
];

const whyVisitItems = [
  { title: "Wildlife Experiences", description: "Witness the richness of Nepal's natural ecosystems through guided safari experiences.", icon: PawPrint },
  { title: "Chitwan National Park", description: "Explore one of Nepal's most important protected areas and its diverse habitats.", icon: Leaf },
  { title: "Jungle Adventure", description: "Enjoy jeep safaris, nature walks and river journeys across varied landscapes.", icon: Compass },
  { title: "Bird Watching", description: "Follow the calls and colors of the park's remarkable birdlife in peaceful surroundings.", icon: Bird },
  { title: "Tharu Culture", description: "Learn about the traditions, heritage and community life of the region through village experiences.", icon: Globe },
  { title: "Family-Friendly Nature Travel", description: "Enjoy accessible nature experiences that can suit couples, families and first-time safari travelers.", icon: Sparkles },
];

const faqItems = [
  {
    question: "What is Chitwan famous for?",
    answer:
      "Chitwan is famous for Chitwan National Park, wildlife safaris, bird watching, river activities and the rich cultural heritage of the Tharu communities.",
  },
  {
    question: "How many days are needed for a Chitwan trip?",
    answer:
      "A practical trip length is usually 2–4 days, depending on how many safari, nature and cultural activities you want to include.",
  },
  {
    question: "What can I do in Chitwan?",
    answer:
      "Visitors can enjoy jeep safaris, canoeing, jungle walks, bird watching, village experiences and cultural activities throughout the region.",
  },
  {
    question: "Is Chitwan suitable for families?",
    answer:
      "Yes, Chitwan can be a suitable family destination when activities are selected carefully according to age, interest and safety needs.",
  },
  {
    question: "When is the best time to visit Chitwan?",
    answer:
      "The best period often depends on weather, wildlife activity and planned activities, but autumn and winter are commonly popular for outdoor nature travel.",
  },
  {
    question: "What should I pack for Chitwan?",
    answer:
      "Comfortable walking shoes, lightweight clothing, sun protection, insect repellent, a reusable water bottle, a camera or binoculars and personal medication are all useful items.",
  },
];

export default function ChitwanPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Chitwan" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(chitwanHeroImage) ? (
          <Image
            src={chitwanHeroImage}
            alt="Chitwan landscape with jungle and river"
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">Chitwan, Nepal</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Chitwan</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Explore Nepal&apos;s wild side through jungle safaris, wildlife encounters, peaceful rivers and vibrant Tharu culture.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/chitwan#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Chitwan
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">WELCOME TO CHITWAN</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">A Wildlife Experience Unlike Any Other</h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Chitwan in southern Nepal offers a completely different travel experience from the high Himalayan regions. Here, tropical forests, grassy plains, river systems and ancient village traditions create a rich landscape for wildlife, adventure and culture.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              At the heart of the region is Chitwan National Park, where travelers can enjoy jungle safaris, river canoeing, bird watching and cultural encounters with the Tharu community. It is a destination for nature lovers, families and photographers who want a vivid and immersive journey through Nepal&apos;s lowland wilderness.
            </p>
            <Link
              href="/destinations/chitwan#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Chitwan Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(chitwanIntroImage) ? (
              <Image
                src={chitwanIntroImage}
                alt="Chitwan jungle and wildlife experience"
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Your Chitwan intro image goes here
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
                value: "Chitwan, Nepal",
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "Location",
                value: "Southern-central Nepal",
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "Known For",
                value: "Wildlife and Tharu culture",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "Ideal For",
                value: "Wildlife lovers, families",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "Recommended Stay",
                value: "2–4 Days",
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore Chitwan</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Highlights & Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularAttractions.map((place) => (
            <PlaceCard key={place.id} destinationSlug="chitwan" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular Chitwan Tours</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Safari Packages</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredChitwanTours.map((tour) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience in Chitwan</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Chitwan Experiences</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Chitwan rewards travelers with a mix of jungle adventure, birdlife, cultural discovery and peaceful river experiences across a remarkable natural landscape.
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
              <MapPin className="h-4 w-4" /> Best Time: Sep–Mar
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>
                Chitwan is best enjoyed when weather and wildlife activity are favorable, with autumn and winter often delivering the clearest opportunities for safari experiences and nature observation.
              </p>
              <p>
                Outdoor activities are typically most rewarding during the cooler parts of the day, so early starts and flexible plans work especially well in this region.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel Chitwan With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Visit Chitwan With Meegin</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            A well-planned Chitwan journey gives you the best mix of wildlife, culture and comfort in one memorable itinerary.
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
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Essential Chitwan Travel Tips</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">1</span>Always follow park rules and the guidance of your safari leader for a safe and respectful experience.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">2</span>Keep a safe distance from wildlife and never approach, feed or touch wild animals.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">3</span>Wear lightweight, comfortable clothing suitable for hot, humid and active outdoor conditions.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">4</span>Carry sunscreen, sunglasses and a hat to stay comfortable under the sun.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">5</span>Insect protection is useful during jungle walks and outdoor activities, especially when the weather is warm.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">6</span>Book safaris and river activities with reputable, experienced operators for a smoother and safer trip.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#004AB8]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Travel Checklist</p>
                <p className="mt-2 text-lg font-semibold text-[#172033]">Prepare for the jungle</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>✓ Comfortable walking shoes</li>
              <li>✓ Lightweight clothing</li>
              <li>✓ Sun hat</li>
              <li>✓ Sunglasses</li>
              <li>✓ Sunscreen</li>
              <li>✓ Insect repellent</li>
              <li>✓ Reusable water bottle</li>
              <li>✓ Camera/binoculars</li>
              <li>✓ Personal medicines</li>
              <li>✓ Light rain protection</li>
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
        {isValidImageSrc(chitwanCtaImage) ? (
          <Image src={chitwanCtaImage} alt="Chitwan jungle scenery" fill className="object-cover opacity-60" sizes="100vw" />
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A6D7FF]">Ready to Experience Chitwan?</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Discover Nepal&apos;s wildlife, peaceful rivers, jungle landscapes and rich local culture.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Discover Nepal&apos;s wildlife, peaceful rivers, jungle landscapes and rich local culture on an unforgettable Chitwan journey.
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
