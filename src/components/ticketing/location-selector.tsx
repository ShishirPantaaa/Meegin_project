"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { allLocationSuggestions, popularDestinations, type LocationSuggestion } from "@/data/countries";

type Props = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  suggestionsSource?: LocationSuggestion[];
};

const normalizeSearch = (value: string) => value.trim().toLowerCase();

const getSuggestions = (query: string, suggestionsSource: LocationSuggestion[]) => {
  const normalized = normalizeSearch(query);

  const source = normalized
    ? suggestionsSource
    : suggestionsSource.length
      ? suggestionsSource
      : popularDestinations;

  if (!normalized) {
    return source.slice(0, 8);
  }

  return source.filter((item) => {
    const haystack = [
      item.value,
      item.label,
      item.country,
      item.code,
      item.region,
      item.continent,
      item.kind,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  }).slice(0, 8);
};

export function LocationSelector({ label, id, value, onChange, placeholder, error, suggestionsSource = allLocationSuggestions }: Props) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const suggestions = useMemo(() => getSuggestions(value, suggestionsSource), [suggestionsSource, value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || !suggestions.length) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((current) => (current + 1) % suggestions.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((current) => (current - 1 + suggestions.length) % suggestions.length);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selected = suggestions[highlightedIndex];
      if (selected) {
        onChange(selected.label);
        setOpen(false);
      }
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  };

  const handleSelect = (option: LocationSuggestion) => {
    onChange(option.label);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative block text-sm font-medium text-slate-700">
      <label htmlFor={id}>{label}</label>
      <div className="relative mt-2">
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
          <MapPin className="h-4 w-4" />
        </div>
        <Input
          id={id}
          type="text"
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            setOpen(true);
            setHighlightedIndex(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-expanded={open}
          aria-controls={`${id}-suggestions`}
          aria-invalid={Boolean(error)}
          className={cn("pl-10", error ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "")}
        />

        {open && suggestions.length > 0 && (
          <ul id={`${id}-suggestions`} className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
            {!value.trim() && (
              <li className="mb-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Popular destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestionsSource.slice(0, 10).map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 transition hover:border-[#0091DA] hover:text-[#0091DA]"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => handleSelect(item)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </li>
            )}

            {suggestions.map((suggestion, index) => (
              <li key={`${suggestion.label}-${index}`}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
                    index === highlightedIndex ? "bg-[#EAF7FD] text-[#004AB8]" : "text-slate-700 hover:bg-slate-50"
                  )}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleSelect(suggestion)}
                >
                  <span className="font-medium">{suggestion.label}</span>
                  {suggestion.code && (
                    <span className="text-xs text-slate-500">{suggestion.code}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
