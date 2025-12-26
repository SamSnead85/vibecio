import { Calendar, ArrowRight, Clock, Layers } from 'lucide-react';
import { getTodaysFeaturedArticle } from '../data/content';
import type { Article } from '../types';

interface DailyFeatureProps {
    onReadArticle: (article: Article) => void;
}

export default function DailyFeature({ onReadArticle }: DailyFeatureProps) {
    const featuredArticle = getTodaysFeaturedArticle();
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <section className="section">
            <div className="container">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                            <Calendar className="text-[var(--color-accent)]" size={24} />
                        </div>
                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold">
                                Today's Feature
                            </h2>
                            <p className="text-sm text-[var(--color-zinc-500)]">{today}</p>
                        </div>
                    </div>
                </div>

                {/* Featured Article Card with Image */}
                <div
                    className="glass-card rounded-xl overflow-hidden cursor-pointer card-hover group animate-fade-in-up"
                    onClick={() => onReadArticle(featuredArticle)}
                >
                    <div className="grid lg:grid-cols-5 gap-0">
                        {/* Large Image Section */}
                        <div className="lg:col-span-3 relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
                            {featuredArticle.image ? (
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent flex items-center justify-center">
                                    <Layers className="text-[var(--color-zinc-600)]" size={80} />
                                </div>
                            )}
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--color-zinc-950)] opacity-100 hidden lg:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/60 to-transparent lg:hidden" />

                            {/* Mobile content overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-[var(--color-accent)] text-[var(--color-zinc-950)] rounded">
                                    {featuredArticle.category}
                                </span>
                                <h3 className="font-display text-2xl font-bold text-white mb-2">
                                    {featuredArticle.title}
                                </h3>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                            {/* Category Badge - Desktop */}
                            <span className="hidden lg:inline-block w-fit px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded">
                                {featuredArticle.category}
                            </span>

                            {/* Title - Desktop */}
                            <h3 className="hidden lg:block font-display text-3xl lg:text-4xl font-bold leading-tight mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                {featuredArticle.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-xl text-[var(--color-zinc-300)] font-display italic mb-6">
                                {featuredArticle.subtitle}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center gap-4 text-sm text-[var(--color-zinc-500)] mb-6">
                                <span>{featuredArticle.author}</span>
                                <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-600)]" />
                                <span className="flex items-center gap-1">
                                    <Clock size={14} />
                                    {featuredArticle.readTime} min read
                                </span>
                            </div>

                            {/* First paragraph preview */}
                            <p className="text-[var(--color-zinc-400)] leading-relaxed mb-6 line-clamp-3">
                                {featuredArticle.content[0]}
                            </p>

                            {/* Key Insights - Compact */}
                            <div className="hidden lg:block mb-6 p-4 rounded-lg bg-[var(--color-zinc-800)]/30 border-l-2 border-[var(--color-accent)]">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                                    Key Insight
                                </p>
                                <p className="text-sm text-[var(--color-zinc-300)] line-clamp-2">
                                    {featuredArticle.insights[0]}
                                </p>
                            </div>

                            {/* Read CTA */}
                            <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                                Read Full Analysis
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
