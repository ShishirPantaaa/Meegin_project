"use client";

import { ArrowRight } from "lucide-react";

export function MultiCitySegment() {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
      <p className="font-semibold text-slate-800">Multi-city enquiry</p>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2">Kathmandu</div>
        <ArrowRight className="h-4 w-4 text-slate-400" />
        <div className="flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2">Delhi</div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Add your additional city stops in the requirements section for a complete multi-city enquiry.
      </p>
    </div>
  );
}
