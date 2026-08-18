"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Search,
    Star,
    Clock,
    MapPin,
    SlidersHorizontal,
    X,
    ChevronDown,
    ArrowRight,
    CheckCircle2,
    Mountain,
    Landmark,
    Leaf,
    Sunset,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Tour } from "@/types";

// ─── Category Derivation ──────────────────────────────────────────────────────
const TREKKING_SLUGS = ["annapurna", "everest", "ghandruk", "mustang"];
const CULTURE_SLUGS = ["kathmandu", "lumbini", "bandipur", "palpa", "bhaktapur"];
const WILDLIFE_SLUGS = ["chitwan"];
const SCENIC_SLUGS = ["baglung", "pokhara", "ghandruk", "bandipur"];

function getCategory(tour: Tour): string {
    const d = tour.destinationSlug;
    if (TREKKING_SLUGS.includes(d) && (tour.title.toLowerCase().includes("trek") || tour.title.toLowerCase().includes("circuit") || tour.title.toLowerCase().includes("base camp") || tour.title.toLowerCase().includes("annapurna circuit") || tour.title.toLowerCase().includes("poon hill"))) return "Mountain & Trekking";
    if (WILDLIFE_SLUGS.includes(d)) return "Nature & Wildlife";
    if (CULTURE_SLUGS.includes(d) || tour.title.toLowerCase().includes("pilgrimage") || tour.title.toLowerCase().includes("heritage") || tour.title.toLowerCase().includes("cultural") || tour.title.toLowerCase().includes("spiritual")) return "Culture & Heritage";
    if (SCENIC_SLUGS.includes(d)) return "Scenic Escape";
    if (tour.title.toLowerCase().includes("adventure") || tour.title.toLowerCase().includes("paragliding")) return "Adventure";
    return "Scenic Escape";
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "Mountain & Trekking": Mountain,
    "Culture & Heritage": Landmark,
    "Nature & Wildlife": Leaf,
    "Scenic Escape": Sunset,
    "Adventure": Zap,
};

const ALL_CATEGORIES = ["Mountain & Trekking", "Culture & Heritage", "Nature & Wildlife", "Scenic Escape", "Adventure"];

const SORT_OPTIONS = [
    { label: "Recommended", value: "recommended" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Duration: Short First", value: "duration-asc" },
    { label: "Duration: Long First", value: "duration-desc" },
    { label: "Highest Rated", value: "rating-desc" },
];

// Parse duration string e.g. "16 Days / 15 Nights" → 16
function parseDays(duration: string): number {
    const match = duration.match(/(\d+)\s*[Dd]ay/);
    return match ? parseInt(match[1], 10) : 0;
}

interface ToursClientProps {
    allTours: Tour[];
    featuredTours: Tour[];
}

export function ToursClient({ allTours, featuredTours }: ToursClientProps) {
    const [search, setSearch] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("recommended");
    const [showFilters, setShowFilters] = useState(false);

    // Unique destinations from data
    const destinations = useMemo(() => {
        const unique = Array.from(new Set(allTours.map((t) => t.destination)));
        return ["All", ...unique.sort()];
    }, [allTours]);

    // Filtered + sorted tours
    const filtered = useMemo(() => {
        let result = allTours.filter((tour) => {
            const q = search.toLowerCase();
            const matchesSearch =
                !q ||
                tour.title.toLowerCase().includes(q) ||
                tour.destination.toLowerCase().includes(q) ||
                tour.shortDescription.toLowerCase().includes(q) ||
                (tour.highlights ?? []).some((h) => h.toLowerCase().includes(q));

            const matchesDest =
                selectedDestination === "All" || tour.destination === selectedDestination;

            const matchesCat =
                selectedCategory === "All" || getCategory(tour) === selectedCategory;

            return matchesSearch && matchesDest && matchesCat;
        });

        switch (sortBy) {
            case "price-asc":
                result = [...result].sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                result = [...result].sort((a, b) => b.price - a.price);
                break;
            case "duration-asc":
                result = [...result].sort((a, b) => parseDays(a.duration) - parseDays(b.duration));
                break;
            case "duration-desc":
                result = [...result].sort((a, b) => parseDays(b.duration) - parseDays(a.duration));
                break;
            case "rating-desc":
                result = [...result].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
                break;
            default: // recommended — featured first, then by rating
                result = [...result].sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return (b.rating ?? 0) - (a.rating ?? 0);
                });
        }

        return result;
    }, [allTours, search, selectedDestination, selectedCategory, sortBy]);

    const hasFilters = search || selectedDestination !== "All" || selectedCategory !== "All";

    function clearFilters() {
        setSearch("");
        setSelectedDestination("All");
        setSelectedCategory("All");
        setSortBy("recommended");
    }

    return (
        <>
            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-4xl bg-[#0c4e83] px-6 pb-12 pt-12 text-white shadow-2xl shadow-slate-900/10 sm:px-12">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at top left, rgba(0,145,218,0.28), transparent 40%), radial-gradient(circle at bottom right, rgba(33,151,54,0.18), transparent 35%)",
                        }}
                    />
                    <div className="relative mx-auto max-w-3xl">
                        <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-100">
                            Discover Nepal
                        </span>
                        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                            Explore Nepal, Your Way
                        </h1>
                        <p className="mt-4 max-w-xl text-base leading-8 text-slate-100/90 sm:text-lg">
                            Discover thoughtfully planned journeys through Nepal&apos;s mountains, heritage, wildlife, culture and beautiful landscapes.
                        </p>
                    </div>

                    {/* Search bar inside hero */}
                    <div className="relative mx-auto mt-8 max-w-xl">
                        <label htmlFor="tour-search" className="sr-only">
                            Search tours
                        </label>
                        <div className="relative">
                            <Search
                                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                                aria-hidden="true"
                            />
                            <input
                                id="tour-search"
                                type="search"
                                placeholder="Search by destination, tour name…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full rounded-full border border-white/20 bg-white/95 py-4 pl-12 pr-5 text-sm text-slate-900 placeholder-slate-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0091DA]"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    aria-label="Clear search"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Category Filter Chips ─────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
                <div className="chips-scroll flex flex-nowrap gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] ${selectedCategory === "All"
                            ? "bg-[#0091DA] text-white shadow-md shadow-[#0091DA]/20"
                            : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                            }`}
                    >
                        All Tours
                    </button>
                    {ALL_CATEGORIES.map((cat) => {
                        const Icon = CATEGORY_ICONS[cat];
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat === selectedCategory ? "All" : cat)}
                                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] ${selectedCategory === cat
                                    ? "bg-[#0091DA] text-white shadow-md shadow-[#0091DA]/20"
                                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                                    }`}
                            >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                                {cat}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ── Featured Tours ────────────────────────────────────────────────── */}
            {!hasFilters && featuredTours.length > 0 && (
                <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="featured-heading">
                    <div className="mb-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">
                            Top Picks
                        </p>
                        <h2 id="featured-heading" className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                            Featured Nepal Tours
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {featuredTours.slice(0, 6).map((tour) => (
                            <TourCard key={tour.id} tour={tour} featured />
                        ))}
                    </div>
                </section>
            )}

            {/* ── All Tours with Filters ────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="all-tours-heading">
                {/* Toolbar */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 id="all-tours-heading" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                            {hasFilters ? "Filtered Results" : "All Tours"}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            {filtered.length === allTours.length
                                ? `${filtered.length} tours available`
                                : `Showing ${filtered.length} of ${allTours.length} tours`}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {/* Mobile filter toggle */}
                        <button
                            onClick={() => setShowFilters((v) => !v)}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] sm:hidden"
                        >
                            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                            Filter Tours
                            {hasFilters && (
                                <span className="h-2 w-2 rounded-full bg-[#0091DA]" />
                            )}
                        </button>

                        {/* Destination filter — visible sm+ */}
                        <div className="hidden items-center gap-2 sm:flex">
                            <label htmlFor="dest-filter" className="sr-only">Filter by destination</label>
                            <div className="relative">
                                <select
                                    id="dest-filter"
                                    value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}
                                    className="appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0091DA]"
                                >
                                    {destinations.map((d) => (
                                        <option key={d} value={d}>{d === "All" ? "All Destinations" : d}</option>
                                    ))}
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                            </div>
                        </div>

                        {/* Sort */}
                        <div className="relative">
                            <label htmlFor="sort-select" className="sr-only">Sort tours</label>
                            <select
                                id="sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none rounded-full border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0091DA]"
                            >
                                {SORT_OPTIONS.map((o) => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                        </div>

                        {hasFilters && (
                            <button
                                onClick={clearFilters}
                                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
                            >
                                <X className="h-3.5 w-3.5" aria-hidden="true" /> Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile filter panel */}
                {showFilters && (
                    <div className="mb-6 rounded-4xl border border-slate-200 bg-white p-5 shadow-sm sm:hidden">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="dest-filter-mobile" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Destination
                                </label>
                                <div className="relative">
                                    <select
                                        id="dest-filter-mobile"
                                        value={selectedDestination}
                                        onChange={(e) => setSelectedDestination(e.target.value)}
                                        className="w-full appearance-none rounded-full border border-slate-200 bg-[#F7FAFC] py-3 pl-4 pr-9 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0091DA]"
                                    >
                                        {destinations.map((d) => (
                                            <option key={d} value={d}>{d === "All" ? "All Destinations" : d}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tour grid */}
                {filtered.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {filtered.map((tour) => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                ) : (
                    /* Empty state */
                    <div className="flex flex-col items-center rounded-4xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F7FAFC] text-slate-400">
                            <Search className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-slate-900">No tours found</h3>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                            Try another destination, category, or search term to find the right Nepal journey for you.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0091DA] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
                        >
                            <X className="h-4 w-4" aria-hidden="true" />
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>

            {/* ── Trust Section ─────────────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            "Reliable travel planning",
                            "Secure booking experience",
                            "Affordable travel options",
                            "Nepal-focused experiences",
                            "Helpful customer support",
                        ].map((point) => (
                            <div key={point} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#068835]" aria-hidden="true" />
                                <span className="text-sm font-semibold leading-6 text-slate-700">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ───────────────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-[#004AB8] px-8 py-14 text-center text-white shadow-2xl shadow-slate-900/10 sm:px-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7D4FF]">
                        Need Help Choosing?
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                        Not Sure Which Tour Is Right for You?
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-100/90">
                        Tell us what kind of Nepal experience you&apos;re looking for and we&apos;ll help you find the right journey.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="secondary" size="lg">Contact Us</Button>
                        </Link>
                        <Link href="/destinations">
                            <Button
                                size="lg"
                                className="border border-white/25 bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white"
                            >
                                Explore Destinations
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

// ─── Tour Card Component ───────────────────────────────────────────────────────

interface TourCardProps {
    tour: Tour;
    featured?: boolean;
}

function TourCard({ tour, featured = false }: TourCardProps) {
    const category = getCategory(tour);
    const CategoryIcon = CATEGORY_ICONS[category] ?? Mountain;

    return (
        <article className="group flex flex-col overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            {/* Image */}
            <div className="relative h-56 overflow-hidden rounded-t-4xl bg-slate-100">
                <Image
                    src={tour.image}
                    alt={`${tour.title} — ${tour.destination}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {featured && (
                        <span className="rounded-full bg-[#068835] px-3 py-1 text-xs font-semibold text-white shadow">
                            Featured
                        </span>
                    )}
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
                        <CategoryIcon className="h-3.5 w-3.5 text-[#0091DA]" aria-hidden="true" />
                        {category}
                    </span>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col space-y-4 p-6">
                {/* Meta row */}
                <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1 rounded-full bg-[#EAF7FD] px-3 py-1.5 text-xs font-semibold text-[#004AB8]">
                        <Star className="h-3.5 w-3.5 fill-[#004AB8] text-[#004AB8]" aria-hidden="true" />
                        {tour.rating}
                        {tour.reviewCount > 0 && (
                            <span className="text-slate-400">({tour.reviewCount})</span>
                        )}
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {tour.duration}
                    </div>
                </div>

                {/* Title & Destination */}
                <div>
                    <h3 className="text-lg font-semibold leading-snug text-slate-900 group-hover:text-[#0091DA] transition-colors">
                        {tour.title}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {tour.destination}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-6 text-slate-600">{tour.shortDescription}</p>

                {/* Highlights */}
                {tour.highlights && tour.highlights.length > 0 && (
                    <ul className="flex flex-wrap gap-2" role="list">
                        {tour.highlights.slice(0, 3).map((h) => (
                            <li
                                key={h}
                                className="rounded-full border border-slate-100 bg-[#F7FAFC] px-3 py-1 text-xs font-medium text-slate-600"
                            >
                                {h}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Price + CTAs */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">From</span>
                        <p className="text-xl font-bold text-[#172033]">
                            {tour.currency} {tour.price.toLocaleString()}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            href={`/booking/${tour.slug}`}
                            className="rounded-full bg-[#0091DA] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] focus-visible:ring-offset-2"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

// ─── Destination Browse Strip ──────────────────────────────────────────────────

interface DestinationStripProps {
    destinations: Array<{
        name: string;
        slug: string;
        image: string | null;
        count: number;
    }>;
}

export function DestinationStrip({ destinations }: DestinationStripProps) {
    return (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="browse-dest-heading">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#004AB8]">Browse by Place</p>
                    <h2 id="browse-dest-heading" className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                        Find Tours by Destination
                    </h2>
                </div>
                <Link
                    href="/destinations"
                    className="inline-flex items-center gap-1 rounded-full border border-[#0091DA] bg-white px-5 py-3 text-sm font-semibold text-[#004AB8] transition hover:bg-[#EAF7FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
                >
                    All destinations <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {destinations.map((dest) => (
                    <Link
                        key={dest.slug}
                        href={`/destinations/${dest.slug}`}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
                        aria-label={`${dest.name} — ${dest.count} tours`}
                    >
                        <div className="relative h-28 overflow-hidden rounded-t-3xl bg-slate-100">
                            {dest.image ? (
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#EAF7FD] to-[#F7FAFC] text-[#0091DA]">
                                    <MapPin className="h-8 w-8 opacity-40" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        <div className="p-3">
                            <p className="text-sm font-semibold text-slate-900">{dest.name}</p>
                            <p className="mt-0.5 text-xs text-slate-400">{dest.count} tours</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
