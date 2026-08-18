import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, Globe, MapPin, Sparkles, Star, SunMedium, Waves } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PlaceCard } from "@/components/sections/place-card";
import { isValidImageSrc } from "@/lib/utils";
import type { Place } from "@/types";

export const metadata: Metadata = {
  title: "Mustang Tours & Travel Packages | Meegin Tours & Travels",
  description:
    "Explore Mustang with Meegin Tours & Travels. Discover remote mountain trekking, Tibetan culture, hidden valleys and carefully designed Mustang tour packages.",
};

const mustangHeroImage = "/images/destinations/mustang/mustang-hero.jpg";
const mustangIntroImage = "/images/destinations/mustang/mustang-intro.jpg";
const mustangCtaImage = "/images/destinations/mustang/mustang-cta.jpg";

const popularAttractions: Place[] = [
  {
    id: "lo-manthang",
    slug: "lo-manthang",
    name: "Lo Manthang",
    shortDescription: "The ancient Tibetan kingdom.",
    description:
      "Explore the walled city of Lo Manthang, home to the ancient Kingdom of Mustang with its sacred temples and traditional culture.",
    image: "/images/destinations/mustang/lo-manthang.jpg",
    location: "Upper Mustang",
    category: "Mountain Trekking",
    duration: "10–15 Days",
    bestTime: "March–May, September–October",
    featured: true,
    tourAvailable: true,
    tourSlug: "upper-mustang",
  },
  {
    id: "marpha",
    slug: "marpha",
    name: "Marpha",
    shortDescription: "An ancient Thani Mai cave and village.",
    description:
      "Visit the charming whitewashed village of Marpha with its ancient monasteries, traditional architecture and pristine mountain vistas overlooking the Kali Gandaki.",
    image: "/images/destinations/mustang/marpha.jpg",
    location: "Lower Mustang",
    category: "Cultural Heritage",
    duration: "4–5 Days",
    bestTime: "March–May, September–October",
    featured: true,
    tourAvailable: false,
  },
  {
    id: "kali-gandaki",
    slug: "kali-gandaki",
    name: "Kali Gandaki Gorge",
    shortDescription: "The world's deepest river gorge.",
    description:
      "Experience one of nature's most spectacular gorges with dramatic canyon walls, sacred temples and thrilling trekking paths along the ancient trade route.",
    image: "/images/destinations/mustang/kali-gandaki.jpg",
    location: "Mustang",
    category: "Nature & Adventure",
    duration: "5–7 Days",
    bestTime: "March–May, September–October",
    featured: true,
    tourAvailable: false,
  },
];

const featuredMustangTours = [
  {
    title: "Upper Mustang Trek",
    duration: "12 Days / 11 Nights",
    rating: 4.8,
    reviews: 156,
    price: 1799,
    description: "Trek through remote valleys and discover the mystical Kingdom of Mustang with ancient temples and Tibetan traditions.",
    image: "/images/destinations/mustang/mustang_tour_1.jpg",
    href: "/tours/upper-mustang",
  },
  {
    title: "Mustang Valley Adventure",
    duration: "8 Days / 7 Nights",
    rating: 4.7,
    reviews: 89,
    price: 1199,
    description:
      "Explore Lower Mustang's hidden villages, ancient monasteries and the dramatic Kali Gandaki Gorge with expert local guides.",
    image: "/images/destinations/mustang/mustang_tour_2.jpg",
    href: "/tours/mustang-valley",
  },
];

const experienceItems = [
  { icon: "🏔️", label: "Remote Trekking" },
  { icon: "🏯", label: "Ancient Temples" },
  { icon: "👥", label: "Tibetan Culture" },
  { icon: "🌄", label: "Hidden Valleys" },
];

const whyVisitItems = [
  { title: "Expert Trekking Guides", description: "Local guides with deep knowledge of Mustang's culture and terrain.", icon: Compass },
  { title: "Permit Assistance", description: "We handle all required permits for Upper Mustang access.", icon: Sparkles },
  { title: "Transparent Pricing", description: "Clear costs including all permits and accommodations.", icon: Globe },
  { title: "Remote Lodging", description: "Comfortable teahouses in remote mountain locations.", icon: Waves },
  { title: "Flexible Itineraries", description: "Customize your trek based on fitness level and interests.", icon: CheckCircle2 },
  { title: "24/7 Support", description: "Dedicated support throughout your remote trek.", icon: MapPin },
];

const faqItems = [
  {
    question: "What is Mustang known for?",
    answer:
      "Mustang is known for its remote mountain trekking, ancient Tibetan kingdom (Lo Manthang), hidden caves, and unique cultural traditions.",
  },
  {
    question: "Do I need a permit for Mustang?",
    answer: "Yes, Upper Mustang requires a special permit. We assist with all permit arrangements.",
  },
  {
    question: "How many days should I spend in Mustang?",
    answer: "10–15 days is recommended to explore Upper Mustang and experience the Kingdom properly.",
  },
  {
    question: "What is the best time to trek?",
    answer: "March–May (spring) and September–October (autumn) offer stable weather for trekking.",
  },
  {
    question: "Is Mustang suitable for beginners?",
    answer: "Mustang is challenging; good fitness and altitude experience are recommended.",
  },
  {
    question: "Can Meegin arrange a customized Mustang trek?",
    answer: "Yes, we offer flexible itineraries tailored to your fitness level and interests.",
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
            alt="Mustang mountains"
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
              Trek through remote valleys and explore the mystical ancient Kingdom of Mustang.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/destinations/mustabg#tours"
                className="inline-flex items-center justify-center rounded-full bg-[#0091DA] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0091DA]/20 transition hover:bg-[#004AB8]"
              >
                Explore Mustang Treks
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Plan Your Trek
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
              The Mystical Kingdom of Remote Himalayas
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600">
              Mustang offers one of the most remote and untouched mountain experiences in Nepal. Trek through hidden valleys, visit ancient monasteries and experience authentic Tibetan culture in the Kingdom of Lo.
            </p>
            <Link
              href="/destinations/mustabg#tours"
              className="inline-flex items-center gap-2 rounded-full bg-[#219736] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#068835]"
            >
              Explore Our Mustang Treks <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-lg shadow-slate-900/5">
            {isValidImageSrc(mustangIntroImage) ? (
              <Image
                src={mustangIntroImage}
                alt="Mustang trekking scenery"
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
              { label: "Destination", value: "Mustang", icon: MapPin, color: "text-blue-600", bg: "bg-blue-100/50" },
              { label: "Location", value: "Gandaki Province", icon: Compass, color: "text-indigo-600", bg: "bg-indigo-100/50" },
              { label: "Known For", value: "Remote Trekking", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-100/50" },
              { label: "Ideal For", value: "Adventure & Culture", icon: Star, color: "text-rose-600", bg: "bg-rose-100/50" },
              { label: "Recommended Stay", value: "10–15 Days", icon: SunMedium, color: "text-emerald-600", bg: "bg-emerald-100/50" },
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
            <PlaceCard key={place.id} destinationSlug="mustabg" place={place} />
          ))}
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Popular Mustang Treks</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Featured Trek Packages</h2>
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
                    View Trek <ArrowRight className="h-4 w-4" />
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
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Unique Experiences</h2>
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
              <MapPin className="h-4 w-4" /> Best Time: Mar–May, Sep–Oct
            </div>
            <div className="mt-10 space-y-6 text-sm leading-7">
              <p>Spring and autumn provide the best trekking conditions with stable weather and clear mountain views.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Trek Mustang With Meegin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Why Trek Mustang With Meegin</h2>
          </div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Trek Essentials</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#172033] sm:text-4xl">Essential Mustang Trekking Tips</h2>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">1</span>Start early to maximize daylight and enjoy pristine trekking conditions.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">2</span>Bring layers for altitude changes—mornings are cold, afternoons warm.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">3</span>Acclimatize properly to handle high altitude safely and comfortably.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">4</span>Carry a quality camera and sturdy trekking boots for remote mountain paths.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">5</span>Stay hydrated and bring energy snacks for long trekking days.</li>
              <li className="flex gap-3"><span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-[#EAF7FD] text-[#004AB8]">6</span>Respect local culture and sacred monasteries—ask before photographing.</li>
            </ul>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4 text-[#004AB8]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#EAF7FD]">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em]">Trek Checklist</p>
                <p className="mt-2 text-lg font-semibold text-[#172033]">Prepare for an unforgettable Mustang trek</p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              Confirm your permits, pack essential gear, arrange your transport and acclimatize properly for the best Mustang trekking experience in this remote Himalayan kingdom.
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
        {isValidImageSrc(mustangCtaImage) ? (
          <Image src={mustangCtaImage} alt="Mustang trekking scenery" fill className="object-cover opacity-60" sizes="100vw" />
        ) : null}
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#A6D7FF]">Create Your Perfect Mustang Trek</p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Have something special in mind? Let us design your perfect Mustang adventure.</h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Have something special in mind? Tell us what you want to experience and our trekking team can help create a journey around your interests and fitness level.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#219736] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#219736]/30 transition hover:bg-[#068835]"
              >
                Plan My Trek
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
