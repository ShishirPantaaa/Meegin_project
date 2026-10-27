"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  error?: string;
};

export function PassengerSelector({ label, value, min, max, onChange, error }: Props) {
  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="block text-sm font-medium text-slate-700">
      <span>{label}</span>
      <div className="mt-2 flex items-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={decrement}
          className="flex h-12 w-12 items-center justify-center text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={value <= min}
          aria-label={`Decrease ${label.toLowerCase()}`}
        >
          <Minus className="h-4 w-4" />
        </button>

        <div className="flex-1 border-x border-slate-200 bg-white px-3 py-3 text-center text-base font-semibold text-slate-900">
          {value}
        </div>

        <button
          type="button"
          onClick={increment}
          className="flex h-12 w-12 items-center justify-center text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={value >= max}
          aria-label={`Increase ${label.toLowerCase()}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
