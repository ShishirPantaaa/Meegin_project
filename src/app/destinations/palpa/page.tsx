import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Landmark,
  MapPin,
  Mountain,
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
  title: "Palpa Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Palpa and historic Tansen with Meegin Tours & Travels. Discover traditional Newari architecture, Dhaka textiles, Ranighat Palace, hill landscapes and cultural experiences.",
  keywords: [
    "Palpa Nepal",
    "Palpa tours",
    "Tansen Nepal",
    "Tansen tours",
    "Palpa travel",
    "Palpa tour packages",
    "Ranighat Palace",
    "Srinagar Hill",
    "Tansen sightseeing",
    "Palpa cultural tour",
    "Palpa travel packages",
  ],
};

const palpaHeroImage = "/images/destinations/palpa/hero.jpg";
const palpaIntroImage = "/images/destinations/palpa/intro.jpg";
const palpaCtaImage = "/images/destinations/palpa/cta.jpg";

const popularAttractions: Place[] = [
  {
    id: "tansen-old-bazaar",
    slug: "tansen-old-bazaar",
    name: "Tansen Old Bazaar",
    shortDescription: "Historic streets, courtyards and hill-town character.",
    description:
      "Tansen Old Bazaar captures the spirit of Palpa through its winding streets, traditional shopfronts and long-standing neighborhood life. Walking here reveals layers of Newari-influenced architecture, carved wood details, old courtyards and local marketplaces where daily routines still shape the atmosphere. Visitors can enjoy the rhythm of a historic hill town while discovering tea shops, craft outlets and viewpoints hidden between lanes. The bazaar is ideal for cultural walking, street photography and relaxed exploration, especially for travelers who enjoy destinations where architecture, local trade and lived heritage meet in one compact and memorable setting.",
    image: "/images/destinations/palpa/tansen-old-bazaar.jpg",
    location: "Tansen",
    category: "Heritage",
    duration: "2–3 hours",
    bestTime: "September–November",
    featured: true,
    tourAvailable: true,
    tourSlug: "tansen-heritage-culture-tour",
  },
  {
    id: "srinagar-hill",
    slug: "srinagar-hill",
    name: "Srinagar Hill",
    shortDescription: "A classic hilltop viewpoint above Tansen.",
    description:
      "Srinagar Hill is one of Palpa's best-known scenic spots and a favorite place for quiet morning or late-afternoon visits. The area offers wide views of rolling hills and, when visibility is clear, distant Himalayan panoramas that make the journey especially rewarding for photographers and nature lovers. The hill's forested surroundings and cooler breeze contrast nicely with the busy bazaar below, creating a balanced day of culture and landscape in a single itinerary. Travelers often include Srinagar Hill for short walks, relaxed viewpoint stops and reflective breaks during a broader Palpa exploration.",
    image: "/images/destinations/palpa/srinagar-hill.jpg",
    location: "Near Tansen",
    category: "Viewpoint",
    duration: "1–2 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: true,
    tourSlug: "palpa-hills-ranighat-escape",
  },
  {
    id: "ranighat-palace",
    slug: "ranighat-palace",
    name: "Ranighat Palace",
    shortDescription: "A historic riverside palace in dramatic terrain.",
    description:
      "Ranighat Palace is one of Palpa's most iconic heritage landmarks, known for its striking riverside setting and unique architectural character. Reaching the site adds a sense of journey, as the surrounding landscape shifts from hill roads to quieter natural corridors near the Kali Gandaki basin. The palace attracts visitors interested in history, architecture and atmospheric locations that feel distinct from urban heritage centers. A visit here works best when paired with nearby viewpoints and local guidance, allowing travelers to appreciate both the built structure and the broader environment that gives Ranighat its memorable identity.",
    image: "/images/destinations/palpa/ranighat-palace.jpg",
    location: "Ranighat Area",
    category: "Architecture",
    duration: "2–3 hours",
    bestTime: "October–March",
    featured: true,
    tourAvailable: true,
    tourSlug: "palpa-hills-ranighat-escape",
  },
  {
    id: "ranighat-riverside-area",
    slug: "ranighat-riverside-area",
    name: "Rani Mahal Riverside Area",
    shortDescription: "Scenic river landscapes near the palace route.",
    description:
      "The riverside surroundings near Rani Mahal offer a different side of Palpa, where broad river views, green slopes and calmer travel rhythms create a rewarding nature-focused stop. This area complements heritage sightseeing by adding open landscapes and quiet photo opportunities, especially in favorable weather. Visitors often enjoy slow walks, short scenic pauses and a stronger sense of place as they observe how historic landmarks and natural terrain connect in western Nepal's hill geography. For travelers seeking both culture and scenery, the riverside zone is a valuable addition to any Palpa itinerary.",
    image: "/images/destinations/palpa/ranighat-river.jpg",
    location: "Kali Gandaki Corridor",
    category: "Nature",
    duration: "1–2 hours",
    bestTime: "October–April",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "bhairabsthan-temple",
    slug: "bhairabsthan-temple",
    name: "Bhairabsthan Temple",
    shortDescription: "An important spiritual stop in the Palpa region.",
    description:
      "Bhairabsthan Temple is widely visited by local devotees and travelers interested in Palpa's religious traditions. Beyond its spiritual importance, the temple area offers a strong cultural experience shaped by rituals, seasonal gatherings and community interaction. Visitors are encouraged to explore respectfully, observe local customs and allow time to understand the social role the temple holds for surrounding settlements. The site is often included in day routes from Tansen and pairs well with nearby heritage attractions for those seeking a deeper look at the cultural and devotional life of the district.",
    image: "/images/destinations/palpa/bhairabsthan-temple.jpg",
    location: "Palpa District",
    category: "Spiritual",
    duration: "1–2 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "amar-narayan-temple",
    slug: "amar-narayan-temple",
    name: "Amar Narayan Temple",
    shortDescription: "Traditional temple architecture in the old town fabric.",
    description:
      "Amar Narayan Temple is a notable cultural and religious landmark in Tansen, appreciated for its traditional craftsmanship and placement within the historic town environment. The temple visit can be combined with a wider heritage walk through nearby lanes, courtyards and neighborhood shrines, offering insight into how spiritual spaces are woven into daily life. Travelers interested in architecture and local history often find this stop especially rewarding because it blends visual detail with community context. Visiting respectfully and at a relaxed pace helps reveal the temple's role in Palpa's living cultural heritage.",
    image: "/images/destinations/palpa/amar-narayan-temple.jpg",
    location: "Tansen",
    category: "Heritage",
    duration: "45–60 minutes",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "tansen-durbar",
    slug: "tansen-durbar",
    name: "Tansen Durbar",
    shortDescription: "A civic landmark reflecting historic urban character.",
    description:
      "Tansen Durbar area reflects the civic and historical evolution of the town and serves as a useful anchor point for understanding Palpa's urban identity. The surrounding streets, historic buildings and public spaces create a compact heritage circuit that rewards slow exploration. Visitors can combine this stop with old-bazaar walks and nearby temples for a fuller sense of architecture, governance history and town culture. For photographers and history enthusiasts, the blend of facades, viewpoints and pedestrian life around the Durbar zone offers strong visual and narrative interest throughout the day.",
    image: "/images/destinations/palpa/tansen-durbar.jpg",
    location: "Tansen Core",
    category: "Architecture",
    duration: "1 hour",
    bestTime: "October–April",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "rishikesh-temple",
    slug: "rishikesh-temple",
    name: "Rishikesh Temple",
    shortDescription: "A peaceful religious site with local significance.",
    description:
      "Rishikesh Temple is an inviting stop for travelers who want to experience Palpa's quieter spiritual spaces. The temple's setting and atmosphere encourage a slower pace, making it suitable for reflective visits alongside broader cultural sightseeing. Guests can observe religious practices from a respectful distance and appreciate how temple life contributes to the rhythm of local communities. When combined with Tansen's heritage lanes and nearby viewpoints, Rishikesh Temple adds balance to an itinerary by connecting architecture, devotion and everyday hill-town culture in a gentle and meaningful way.",
    image: "/images/destinations/palpa/rishikesh-temple.jpg",
    location: "Palpa District",
    category: "Spiritual",
    duration: "45–60 minutes",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "palpa-dhaka-textile-area",
    slug: "palpa-dhaka-textile-area",
    name: "Palpa Dhaka Textile Area",
    shortDescription: "Traditional textile craftsmanship and local creativity.",
    description:
      "Palpa is widely associated with Dhaka textile traditions, and visiting local craft and textile areas offers a closer view of this regional identity. Travelers can learn about patterns, fabric work and the cultural significance of Dhaka in dress and local commerce while supporting artisans and small businesses. This experience adds a practical and human dimension to a Palpa journey, moving beyond monuments into living craftsmanship. It is particularly appealing for visitors interested in cultural industries, handmade products and meaningful souvenirs linked to local heritage.",
    image: "/images/destinations/palpa/palpa-dhaka.jpg",
    location: "Tansen Craft Area",
    category: "Culture",
    duration: "1–2 hours",
    bestTime: "Year-round",
    featured: true,
    tourAvailable: true,
    tourSlug: "tansen-heritage-culture-tour",
  },
];

const featuredPalpaTours = [
  {
    title: "Tansen Heritage & Culture Tour",
    duration: "2 Days / 1 Night",
    rating: 4.8,
    reviewsLabel: "Configurable reviews",
    priceLabel: "Custom quote",
    description:
      "Explore Tansen Old Bazaar, traditional Newari architecture, Bhairabsthan Temple, Amar Narayan Temple, local Dhaka textile culture and scenic Srinagar Hill.",
    image: "/images/destinations/palpa/tansen-cultural-tour.jpg",
    href: "/tours/tansen-heritage-culture-tour",
  },
  {
    title: "Palpa Hills & Ranighat Escape",
    duration: "3 Days / 2 Nights",
    rating: 4.7,
    reviewsLabel: "Configurable reviews",
    priceLabel: "Custom quote",
    description:
      "Discover Tansen, Srinagar Hill, Ranighat Palace, Kali Gandaki landscapes, local cultural experiences and peaceful hill viewpoints.",
    image: "/images/destinations/palpa/palpa-tour.jpg",
    href: "/tours/palpa-hills-ranighat-escape",
  },
];

const experienceItems = [
  {
    icon: "🏘️",
    label: "Tansen Heritage Walk",
    description: "Stroll historic lanes and discover Palpa's timeless hill-town character.",
  },
  {
    icon: "🧵",
    label: "Dhaka Textile & Craft Experience",
    description: "Explore local craftsmanship and the living tradition of Palpa Dhaka.",
  },
  {
    icon: "🌄",
    label: "Himalayan Viewpoint Exploration",
    description: "Visit elevated viewpoints around Tansen for scenic horizon and hill views.",
  },
  {
    icon: "🏛️",
    label: "Ranighat Palace Journey",
    description: "Travel toward Ranighat and enjoy the blend of heritage and river landscape.",
  },
];

const bestTimeCards = [
  {
    season: "Autumn",
    period: "September–November",
    note: "Generally favorable conditions for sightseeing, cultural exploration and hill views.",
  },
  {
    season: "Winter",
    period: "December–February",
    note: "Cooler temperatures and potentially clear mountain views make daytime exploration enjoyable.",
  },
  {
    season: "Spring",
    period: "March–May",
    note: "Pleasant conditions for walking, photography and exploring Palpa's historic neighborhoods and surrounding landscapes.",
  },
];

const whyVisitItems = [
  {
    title: "Historic Tansen",
    description: "Explore one of Nepal's distinctive historic hill towns and its traditional architecture.",
    icon: Landmark,
  },
  {
    title: "Newari Culture",
    description: "Experience traditional Newari streets, buildings, festivals, food and craftsmanship.",
    icon: Compass,
  },
  {
    title: "Himalayan Views",
    description: "Visit elevated viewpoints around Tansen for scenic mountain and hill landscapes when conditions are clear.",
    icon: Mountain,
  },
  {
    title: "Dhaka Tradition",
    description: "Discover Palpa's famous Dhaka textile tradition and local craftsmanship.",
    icon: Sparkles,
  },
  {
    title: "Ranighat Palace",
    description: "Visit the historic Ranighat Palace and enjoy the dramatic landscape surrounding the site.",
    icon: Waves,
  },
  {
    title: "Peaceful Hill Escape",
    description: "Enjoy a slower travel experience away from Nepal's busier tourist centers.",
    icon: HeartHandshake,
  },
];

const faqItems = [
  {
    question: "What is Palpa famous for?",
    answer:
      "Palpa is widely known for Tansen's historic character, traditional architecture, Newari cultural heritage, Dhaka textile traditions and scenic hill landscapes.",
  },
  {
    question: "What is the main town of Palpa?",
    answer:
      "Tansen is the principal town of Palpa and serves as a major cultural and historical center for exploring the district.",
  },
  {
    question: "What can I see in Palpa?",
    answer:
      "Key places include Tansen Old Bazaar, Srinagar Hill, Ranighat Palace, Bhairabsthan Temple, Amar Narayan Temple, Rishikesh Temple and local Dhaka textile culture.",
  },
  {
    question: "How many days are needed for Palpa?",
    answer:
      "A 2–3 day stay can provide a strong introduction to Tansen, nearby heritage landmarks and popular viewpoints.",
  },
  {
    question: "When is the best time to visit Palpa?",
    answer:
      "The best season depends on your preferences for weather and visibility. Autumn, winter and spring are commonly chosen for sightseeing, walking and hill views.",
  },
  {
    question: "Is Palpa suitable for families?",
    answer:
      "Palpa can be a good destination for families interested in culture, history and relaxed hill travel, though some attractions involve walking and occasional uneven terrain.",
  },
];

export default function PalpaPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: "Palpa" }]} />
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/35" />
        {isValidImageSrc(palpaHeroImage) ? (
          <Image
            src={palpaHeroImage}
            alt="Palpa mountains and heritage"
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
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#E2F0FF]">Palpa, Nepal</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Discover Palpa</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
              Explore the historic hill town of Tansen, timeless Newari architecture, spectacular Himalayan views and the cultural heritage of Palpa.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/palpa#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Palpa
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
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#004AB8]">WELCOME TO PALPA</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
              Welcome to Palpa
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Palpa is a historic hill destination centered around Tansen, where old streets, traditional homes and hilltop viewpoints create an atmosphere that feels both cultural and calm. The region is known for Newari-influenced heritage, local temples, vibrant community life and the enduring craft tradition of Palpa Dhaka textiles.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              From the panoramic surroundings of Srinagar Hill to the architectural character of Ranighat Palace and temple circuits in and around Tansen, Palpa offers a balanced journey for culture lovers, photographers and travelers seeking peaceful hill-town exploration with depth and authenticity.
            </p>
            <Link
              href="/destinations/palpa#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Palpa Tours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(palpaIntroImage) ? (
              <Image
                src={palpaIntroImage}
                alt="Historic Tansen streets and Palpa hill scenery"
                width={860}
                height={640}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-105 items-center justify-center bg-slate-200 p-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Your Palpa intro image goes here
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
                value: "Palpa, Nepal",
                icon: MapPin,
                color: "text-blue-600",
                bg: "bg-blue-100/50",
              },
              {
                label: "Main Town",
                value: "Tansen",
                icon: Compass,
                color: "text-indigo-600",
                bg: "bg-indigo-100/50",
              },
              {
                label: "Known For",
                value: "Historic heritage, Dhaka textiles",
                icon: Sparkles,
                color: "text-amber-600",
                bg: "bg-amber-100/50",
              },
              {
                label: "Ideal For",
                value: "Culture lovers, history enthusiasts",
                icon: Star,
                color: "text-rose-600",
                bg: "bg-rose-100/50",
              },
              {
                label: "Recommended Stay",
                value: "2–3 Days",
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Explore Palpa</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Highlights & Attractions</h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularAttractions.map((place) => (
            <PlaceCard key={place.id} destinationSlug="palpa" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular Palpa Tours</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Tour Packages</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredPalpaTours.map((tour) => (
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
                  <span>{tour.reviewsLabel}</span>
                  <span className="rounded-full bg-[#F7FAFC] px-3 py-2 text-slate-600">{tour.duration}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{tour.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{tour.description}</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-[#172033]">{tour.priceLabel}</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Things to Experience in Palpa</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Palpa Experiences</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {experienceItems.map((item) => (
                <div key={item.label} className="rounded-4xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="mt-4 text-base font-semibold text-[#172033]">{item.label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
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
                Palpa is enjoyable for cultural walks and hill sightseeing during autumn, winter and spring, with each season offering different visibility and comfort levels.
              </p>
              <p>
                Early starts are often helpful for viewpoint visits and old-town exploration, especially during warmer periods.
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Travel Palpa With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Visit Palpa With Meegin</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Palpa rewards travelers who want culture, architecture and scenic hill-town calm in one thoughtful itinerary.
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
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Essential Palpa Travel Tips</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">1</span>Wear comfortable shoes, as Tansen&apos;s historic streets and nearby viewpoints are best explored on foot.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">2</span>Carry light layers because hill weather can shift between morning, afternoon and evening.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">3</span>Start early for comfortable walking conditions and potentially better visibility.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">4</span>Dress respectfully and follow local customs when visiting temples and cultural sites.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">5</span>Carry drinking water during longer walks and hillside excursions.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">6</span>Allow extra travel time, as road journeys in hill regions can be slower than expected.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#004AB8]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Travel Checklist</p>
                <p className="mt-2 text-lg font-semibold text-[#172033]">Pack for hill-town comfort</p>
              </div>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-7 text-slate-600">
              <li>✓ Comfortable walking shoes</li>
              <li>✓ Light jacket or layers</li>
              <li>✓ Sun hat</li>
              <li>✓ Sunglasses</li>
              <li>✓ Sunscreen</li>
              <li>✓ Reusable water bottle</li>
              <li>✓ Camera</li>
              <li>✓ Personal medicines</li>
              <li>✓ Small day bag</li>
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
        {isValidImageSrc(palpaCtaImage) ? (
          <Image src={palpaCtaImage} alt="Palpa hill landscape and traditional architecture" fill className="object-cover opacity-60" sizes="100vw" />
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A6D7FF]">Ready to Discover Palpa?</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Ready to Discover Palpa?</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Walk through historic Tansen, discover Palpa&apos;s cultural heritage and enjoy peaceful hill landscapes on a memorable journey through western Nepal.
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
