import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{testimonial.name}</h3>
          <p className="text-sm text-slate-500">{testimonial.location}</p>
        </div>
        <div className="inline-flex items-center gap-1 rounded-3xl bg-[#EAF7FD] px-3 py-2 text-sm font-semibold text-[#004AB8]">
          <Star className="h-4 w-4" /> {testimonial.rating}
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">“{testimonial.message}”</p>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">{testimonial.date}</p>
    </div>
  );
}

