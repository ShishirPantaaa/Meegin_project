import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Plane,
  ShieldCheck,
  Ticket,
  MessageSquareText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TicketingForm } from "./ticketing-form";

export const metadata: Metadata = {
  title: "National & International Ticketing | MEegin Tours & Travels",
  description:
    "Enquire about domestic and international flight ticketing with MEegin Tours & Travels. Explore ticketing options for Nepal and destinations around the world.",
  keywords: [
    "National ticketing Nepal",
    "International flights",
    "ticketing service Nepal",
    "domestic flights Nepal",
    "flight enquiries",
    "MEegin ticketing",
  ],
};

const domesticDestinations = [
  "Kathmandu",
  "Pokhara",
  "Bharatpur",
  "Nepalgunj",
  "Bhairahawa",
  "Biratnagar",
  "Bhadrapur",
  "Dhangadhi",
  "Other available domestic destinations",
];

const internationalRegions = [
  {
    title: "South Asia",
    countries: ["India", "Bangladesh", "Sri Lanka"],
  },
  {
    title: "Southeast Asia",
    countries: ["Thailand", "Malaysia", "Singapore"],
  },
  {
    title: "Middle East",
    countries: ["UAE", "Qatar", "Saudi Arabia"],
  },
  {
    title: "East Asia",
    countries: ["Japan", "South Korea", "China"],
  },
  {
    title: "Europe",
    countries: ["United Kingdom", "France", "Germany", "Italy"],
  },
  {
    title: "North America",
    countries: ["United States", "Canada"],
  },
  {
    title: "Oceania",
    countries: ["Australia", "New Zealand"],
  },
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "Easy Enquiry",
    description:
      "Simple way to request domestic and international ticket information.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Assistance",
    description:
      "Get assistance with selecting suitable travel options for your plans.",
  },
  {
    icon: MessageSquareText,
    title: "Convenient Communication",
    description:
      "Send your enquiry directly through WhatsApp and receive prompt support.",
  },
  {
    icon: Ticket,
    title: "Personalized Support",
    description:
      "Discuss your travel requirements with our team and plan with confidence.",
  },
  {
    icon: Globe2,
    title: "Clear Information",
    description:
      "Receive helpful information based on your requested journey and preferences.",
  },
];

const faqs = [
  {
    question: "Can I enquire about domestic flights within Nepal?",
    answer:
      "Yes. You can request information for major domestic air routes and available travel options.",
  },
  {
    question: "Can I request international flight information?",
    answer:
      "Yes. Our team can help you enquire about available international flight options and routes.",
  },
  {
    question: "Can I request a one-way ticket?",
    answer:
      "Yes. You can specify your travel type and journey details in the enquiry form.",
  },
  {
    question: "Can I request a round-trip ticket?",
    answer:
      "Yes. You can share your return travel date and preferences in the form for assistance.",
  },
  {
    question: "Can I request a specific travel date?",
    answer:
      "Yes. Please enter your preferred travel date in the enquiry form so our team can assist you.",
  },
  {
    question: "How will I receive assistance after submitting my enquiry?",
    answer:
      "Your enquiry is sent through WhatsApp, where our team can review the details and guide you further.",
  },
];

export default function TicketingPage() {
  return (
    <main className="bg-[#F7FAFC] text-[#172033]">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#004AB8] px-6 py-10 shadow-2xl shadow-slate-900/10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at top left, rgba(0,145,218,0.35), transparent 38%), radial-gradient(circle at bottom right, rgba(33,151,54,0.2), transparent 42%)",
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-100 backdrop-blur-sm">
                Flight ticketing
              </span>
              <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                National &amp; International Ticketing
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100/90 sm:text-lg">
                Book your journey with ease through MEegin Tours &amp; Travels. Enquire about domestic and international flight tickets for destinations around the world.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#ticket-enquiry">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Ticket
                  </Button>
                </a>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0091DA]/20 text-[#A7D4FF]">
                  <Plane className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    Ticket assistance
                  </p>
                  <p className="mt-1 text-lg font-semibold">Domestic &amp; International</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-100/90">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A7D4FF]" />
                  <span>Domestic travel within Nepal</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A7D4FF]" />
                  <span>International travel support</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                  <CheckCircle2 className="h-4 w-4 text-[#A7D4FF]" />
                  <span>Flexible enquiry via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            Booking support
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Your Journey Starts With the Right Ticket
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            From domestic flights across Nepal to international journeys around the world, MEegin Tours &amp; Travels helps travelers find suitable flight options and receive booking assistance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            Domestic ticketing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Domestic Ticketing — Nepal
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {domesticDestinations.map((destination) => (
            <div
              key={destination}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0091DA] hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-slate-900">{destination}</p>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF7FD] text-[#0091DA]">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enquire about available flights connecting major destinations in Nepal.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            International ticketing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            International Ticketing
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            Enquire about international flight options for journeys beyond Nepal. Our team can help you explore available routes and destinations that match your travel plans.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {internationalRegions.map((region) => (
            <div
              key={region.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{region.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {region.countries.map((country) => (
                  <span
                    key={country}
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ticket-enquiry" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
                Ticket enquiry
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Plan Your Journey
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Tell us where you are traveling from, where you want to go, and your preferred travel details. We will help you with the next steps.
              </p>
            </div>

            <TicketingForm />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
                International ticket enquiry
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                International Travel Request
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Share your departure city, destination, and travel preferences for international flight options.
              </p>
            </div>

            <TicketingForm variant="international" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
              Why choose MEegin
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Choose MEegin For Ticketing
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-[#F8FBFF] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#0091DA] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF7FD] text-[#0091DA]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Ticketing FAQs
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-base font-semibold text-slate-900">{question}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#172033] px-6 py-10 text-center text-white shadow-2xl shadow-slate-900/10 sm:px-10 lg:px-14 lg:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7D4FF]">
            Planning your next journey?
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Planning Your Next Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200">
            Send us your travel details and our team can assist you with your ticketing enquiry.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#ticket-enquiry">
              <Button
                size="lg"
                className="border border-white/20 bg-white text-[#004AB8] hover:bg-slate-100"
              >
                Request a Ticket
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
