"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { blogCategories } from "@/data/blog";
import { isValidImageSrc } from "@/lib/utils";

interface BlogClientProps {
    posts: BlogPost[];
}

export function BlogClient({ posts }: BlogClientProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") return posts;
        return posts.filter((post) => post.category === activeCategory);
    }, [activeCategory, posts]);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="articles-heading">
            <h2 id="articles-heading" className="sr-only">
                Blog Articles
            </h2>

            {/* ── Category Filter ── */}
            <div className="mb-10 flex flex-nowrap gap-3 overflow-x-auto pb-4 no-scrollbar sm:flex-wrap sm:pb-0">
                {blogCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA] ${activeCategory === cat
                                ? "bg-[#0091DA] text-white shadow-md shadow-[#0091DA]/20"
                                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* ── Blog Grid ── */}
            {filteredPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0091DA]"
                        >
                            <div className="relative h-56 overflow-hidden bg-slate-100">
                                {isValidImageSrc(post.image) ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        unoptimized={process.env.NODE_ENV === "development"}
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-400">
                                        <ImageIcon className="h-8 w-8 opacity-50" />
                                    </div>
                                )}
                                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0091DA] shadow-sm backdrop-blur-sm">
                                    {post.category}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-xl font-semibold leading-snug text-slate-900 group-hover:text-[#0091DA] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-6 flex items-center justify-between">
                                    <div className="flex gap-2 text-xs font-medium text-slate-500">
                                        {post.location && <span>{post.location} &bull;</span>}
                                        <span>{post.readTime}</span>
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0091DA]">
                                        Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white py-20 text-center">
                    <p className="text-lg font-semibold text-slate-900">No articles found.</p>
                    <p className="mt-2 text-sm text-slate-500">Check back later for more updates in this category.</p>
                    <button
                        onClick={() => setActiveCategory("All")}
                        className="mt-6 rounded-full bg-[#0091DA] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004AB8]"
                    >
                        View All Articles
                    </button>
                </div>
            )}
        </section>
    );
}
