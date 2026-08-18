import { ShieldCheck, Globe2, HeartHandshake, Ticket, Headphones, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Globe2, title: "Local Nepal Knowledge", description: "We design itineraries with deep local insight and trusted partners across Nepal." },
  { icon: ShieldCheck, title: "Safe & Reliable Travel", description: "Every package is planned with comfort, safety and responsible tourism in mind." },
  { icon: Ticket, title: "Transparent Pricing", description: "Clear cost breakdowns with no hidden fees, from accommodation to transport." },
  { icon: HeartHandshake, title: "Experienced Travel Team", description: "Friendly guides and support staff help every step of your Nepal journey." },
  { icon: Headphones, title: "24/7 Customer Support", description: "Our Nepal support team is ready to assist you before, during and after your trip." },
  { icon: MapPin, title: "Customizable Packages", description: "Tailored experiences for families, adventure seekers and cultural travelers." },
];

export function WhyUs() {
  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Why choose Meegin</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Nepal travel expertise you can trust.</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          From Himalayan treks to wildlife safaris, our team creates balanced journeys with local care and premium support.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-4xl border border-slate-200 bg-[#F7FAFC] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-[#0091DA] shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </section>
  );
}

