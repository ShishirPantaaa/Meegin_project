"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, MapPin, Map } from "lucide-react";
import type { GalleryImageItem } from "@/data/gallery";
import { galleryCategories } from "@/data/gallery";
import { Button } from "@/components/ui/button";

// ─── Individual Image Card ──────────────────────────────────────────────────

function GalleryCard({
    image,
    onClick,
}: {
    image: GalleryImageItem;
    onClick: () => void;
}) {
    const [hasError, setHasError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl bg-slate-100 shadow-sm transition-shadow hover:shadow-lg cursor-pointer"
            onClick={onClick}
        >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: image.id.length % 2 === 0 ? "4/3" : "3/4" }}>
                {!hasError ? (
                    <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={() => setHasError(true)}
                        unoptimized={process.env.NODE_ENV === "development"} // Helps with missing local files in dev
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-slate-200 text-slate-400 p-6 text-center">
                        <Eye className="h-8 w-8 mb-2 opacity-50" />
                        <span className="text-xs font-medium uppercase tracking-wider">{image.category} Image</span>
                        <span className="mt-1 text-[10px]">Placeholder (Missing file)</span>
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                        <span className="mb-2 inline-block rounded-full bg-[#0091DA] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                            {image.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-200">
                            <MapPin className="h-4 w-4" />
                            {image.location}
                        </p>
                    </div>

                    <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-transform duration-300 hover:scale-110">
                        <Eye className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main Gallery Component ──────────────────────────────────────────────────

interface GalleryClientProps {
    images: GalleryImageItem[];
}

export function GalleryClient({ images }: GalleryClientProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Filtered images
    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return images;
        return images.filter((img) => img.category === activeCategory);
    }, [images, activeCategory]);

    // Lightbox handlers
    const activeImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

    const handleCloseModal = useCallback(() => setSelectedIndex(null), []);

    const handleNext = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! + 1) % filteredImages.length);
    }, [selectedIndex, filteredImages.length]);

    const handlePrev = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }, [selectedIndex, filteredImages.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") handleCloseModal();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handleCloseModal, handleNext, handlePrev]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

    return (
        <>
            {/* ── Category Filter ─────────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
                <div className="flex flex-nowrap gap-3 overflow-x-auto pb-4 no-scrollbar sm:flex-wrap sm:pb-0">
                    {galleryCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setSelectedIndex(null); // Close modal if open on category change
                            }}
                            className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] ${activeCategory === cat
                                ? "bg-[#0091DA] text-white shadow-md shadow-[#0091DA]/20"
                                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── Masonry Gallery Grid ────────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                {filteredImages.length > 0 ? (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => (
                                <GalleryCard
                                    key={image.id}
                                    image={image}
                                    onClick={() => setSelectedIndex(index)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center rounded-4xl border border-slate-200 bg-white py-32 text-center"
                    >
                        <Map className="h-12 w-12 text-slate-300" />
                        <h3 className="mt-4 text-xl font-semibold text-slate-900">No images found</h3>
                        <p className="mt-2 text-sm text-slate-500">
                            We don&apos;t have any images for &quot;{activeCategory}&quot; yet.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-6"
                            onClick={() => setActiveCategory("All")}
                        >
                            View All Images
                        </Button>
                    </motion.div>
                )}
            </section>

            {/* ── Lightbox Modal ──────────────────────────────────────────────── */}
            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-6"
                        onClick={handleCloseModal}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
                            aria-label="Close gallery"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Previous Button */}
                        {filteredImages.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                        )}

                        {/* Next Button */}
                        {filteredImages.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        )}

                        {/* Main Content Area */}
                        <div
                            className="flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#111] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex h-[60vh] w-full items-center justify-center bg-black sm:h-[75vh]">
                                <Image
                                    src={activeImage.src}
                                    alt={activeImage.title}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    quality={90}
                                />
                            </div>

                            {/* Caption Area */}
                            <div className="bg-[#172033] p-6 text-left sm:p-8">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <span className="mb-2 inline-block rounded-full bg-[#0091DA]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#A7D4FF]">
                                            {activeImage.category}
                                        </span>
                                        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                                            {activeImage.title}
                                        </h2>
                                        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-300 sm:text-base">
                                            <MapPin className="h-4 w-4 text-[#0091DA]" />
                                            {activeImage.location}
                                        </p>
                                    </div>
                                    {activeImage.description && (
                                        <div className="max-w-md border-t border-slate-700 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                                            <p className="text-sm leading-relaxed text-slate-400">
                                                {activeImage.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
