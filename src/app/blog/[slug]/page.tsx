import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Clock, ImageIcon, Share2, Compass } from "lucide-react";
import type { Metadata } from "next";

import { blogPosts, getPostBySlug } from "@/data/blog";
import { isValidImageSrc } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BlogArticleProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Article Not Found | MEegin Tours & Travels" };
    }

    return {
        title: `${post.title} | Nepal Travel Blog`,
        description: post.excerpt,
    };
}

export default async function BlogArticle({ params }: BlogArticleProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get related articles (same category, or just next available)
    const relatedPosts = blogPosts
        .filter((p) => p.id !== post.id && (p.category === post.category || p.location === post.location))
        .slice(0, 3);

    if (relatedPosts.length < 3) {
        const additional = blogPosts.filter((p) => p.id !== post.id && !relatedPosts.find(rp => rp.id === p.id)).slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...additional);
    }

    return (
        <main className="bg-white text-[#172033] pb-20 pt-24 sm:pt-32">

            {/* ── Breadcrumb & Meta ── */}
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#0091DA] mb-8 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-block rounded-full bg-[#EAF7FD] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0091DA]">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
                        <span className="hidden sm:inline h-1 w-1 rounded-full bg-slate-300" />
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
                    </div>
                </div>

                <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                    {post.title}
                </h1>
                {post.location && (
                    <p className="flex items-center gap-2 text-lg text-slate-600 mb-8">
                        <MapPin className="h-5 w-5 text-[#0091DA]" /> {post.location}
                    </p>
                )}
            </div>

            {/* ── Hero Image ── */}
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-16">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                    {isValidImageSrc(post.image) ? (
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                            priority
                            unoptimized={process.env.NODE_ENV === "development"}
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                            <ImageIcon className="h-16 w-16 opacity-30" />
                        </div>
                    )}
                </div>
            </div>

            {/* ── Article Content ── */}
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <article className="prose prose-slate prose-lg max-w-none text-slate-700">
                    <p className="lead text-xl text-slate-600 mb-8">{post.excerpt}</p>

                    {post.content.split('\n\n').map((paragraph, idx) => {
                        if (paragraph.startsWith('### ')) {
                            return <h3 key={idx} className="text-2xl font-semibold text-slate-900 mt-10 mb-4">{paragraph.substring(4)}</h3>;
                        } else if (paragraph.startsWith('- ')) {
                            const items = paragraph.split('\n');
                            return (
                                <ul key={idx} className="my-6 space-y-2 list-disc list-outside pl-5">
                                    {items.map((item, i) => {
                                        const match = item.match(/^- \*\*(.*?)\*\*(.*)/);
                                        if (match) {
                                            return <li key={i}><strong>{match[1]}</strong>{match[2]}</li>;
                                        }
                                        return <li key={i}>{item.substring(2)}</li>;
                                    })}
                                </ul>
                            );
                        } else if (paragraph.match(/^\d+\. \*\*/)) {
                            const items = paragraph.split('\n');
                            return (
                                <ol key={idx} className="my-6 space-y-2 list-decimal list-outside pl-5">
                                    {items.map((item, i) => {
                                        const match = item.match(/^\d+\. \*\*(.*?)\*\*(.*)/);
                                        if (match) {
                                            return <li key={i}><strong>{match[1]}</strong>{match[2]}</li>;
                                        }
                                        return <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                                    })}
                                </ol>
                            );
                        }
                        return <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>;
                    })}
                </article>

                <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-8">
                    <span className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Share:</span>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0091DA] hover:text-white transition-colors" aria-label="Share article">
                        <Share2 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* ── Related Articles ── */}
            <section className="mx-auto max-w-7xl px-4 mt-24 sm:px-6 lg:px-8 border-t border-slate-200 pt-16">
                <h2 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                    <Compass className="h-6 w-6 text-[#0091DA]" /> Continue Exploring
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {relatedPosts.map((rPost) => (
                        <Link
                            key={rPost.id}
                            href={`/blog/${rPost.slug}`}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                {isValidImageSrc(rPost.image) ? (
                                    <Image
                                        src={rPost.image}
                                        alt={rPost.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        unoptimized={process.env.NODE_ENV === "development"}
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-slate-300">
                                        <ImageIcon className="h-8 w-8 opacity-50" />
                                    </div>
                                )}
                                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0091DA]">
                                    {rPost.category}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="font-semibold leading-snug text-slate-900 line-clamp-2 group-hover:text-[#0091DA] transition-colors">{rPost.title}</h3>
                                <div className="mt-auto pt-4 flex items-center justify-between text-xs font-medium text-slate-500">
                                    <span>{rPost.date}</span>
                                    <span>{rPost.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="mx-auto max-w-3xl px-4 mt-20 sm:px-6 lg:px-8">
                <div className="rounded-4xl bg-[#0c4e83] px-8 py-12 text-center text-white shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
                    <h3 className="relative z-10 text-2xl font-semibold sm:text-3xl">Ready for the real thing?</h3>
                    <p className="relative z-10 mx-auto mt-4 max-w-lg text-slate-200">
                        Let us help you plan the perfect Nepal holiday based on your interests.
                    </p>
                    <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="/tours">
                            <Button size="lg" className="bg-white text-[#004AB8] hover:bg-slate-50">View Tours</Button>
                        </Link>
                        <Link href="/destinations">
                            <Button size="lg" className="border border-white/20 bg-transparent text-white hover:bg-white/10">Explore Places</Button>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
