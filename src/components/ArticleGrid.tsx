import { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Layers, Play } from 'lucide-react';
import { getArticlesByCategory } from '../data/content';
import type { Article, ArticleCategory } from '../types';

interface ArticleGridProps {
    onReadArticle: (article: Article) => void;
}

const categories: { id: ArticleCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'technology', label: 'Technology' },
    { id: 'trends', label: 'Trends' },
    { id: 'insights', label: 'Insights' },
];

// Category accent colors for Netflix-style cards
const categoryAccents: Record<string, { gradient: string; glow: string }> = {
    strategy: { gradient: 'from-blue-500/30 via-blue-600/20 to-transparent', glow: 'rgba(59, 130, 246, 0.3)' },
    technology: { gradient: 'from-emerald-500/30 via-emerald-600/20 to-transparent', glow: 'rgba(16, 185, 129, 0.3)' },
    trends: { gradient: 'from-purple-500/30 via-purple-600/20 to-transparent', glow: 'rgba(139, 92, 246, 0.3)' },
    insights: { gradient: 'from-amber-500/30 via-amber-600/20 to-transparent', glow: 'rgba(245, 158, 11, 0.3)' },
};

export default function ArticleGrid({ onReadArticle }: ArticleGridProps) {
    const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>('all');
    const filteredArticles = getArticlesByCategory(activeCategory);

    return (
        <section id="articles" className="section bg-gradient-to-b from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)]/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header - Premium Styling */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20 shadow-lg shadow-[var(--color-accent)]/10">
                            <BookOpen className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                                Deep Dives
                            </h2>
                            <p className="text-base text-[var(--color-zinc-500)] max-w-md">
                                In-depth technical analysis and strategic insights for enterprise technology leaders
                            </p>
                        </div>
                    </div>

                    {/* Category Tabs - Premium Pills */}
                    <div className="flex items-center gap-2 p-1.5 bg-[var(--color-zinc-900)]/80 backdrop-blur-sm rounded-xl border border-[var(--color-zinc-800)]/50">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-[var(--color-accent)] text-[var(--color-zinc-950)] shadow-lg shadow-[var(--color-accent)]/30'
                                    : 'text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-800)]/50'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Article - Cinematic Hero Style */}
                {filteredArticles.length > 0 && filteredArticles[0].featured && (
                    <div
                        className="mb-12 netflix-card featured-cinematic rounded-2xl overflow-hidden cursor-pointer glow-accent group animate-fade-in-up"
                        onClick={() => onReadArticle(filteredArticles[0])}
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* Image - Cinematic Treatment */}
                            <div className="relative h-72 lg:h-[420px] netflix-image-container">
                                {filteredArticles[0].image ? (
                                    <img
                                        src={filteredArticles[0].image}
                                        alt={filteredArticles[0].title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${categoryAccents[filteredArticles[0].category]?.gradient || 'from-blue-500/30'} flex items-center justify-center`}>
                                        <Layers className="text-[var(--color-zinc-600)]" size={80} />
                                    </div>
                                )}
                                {/* Multi-layer gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-zinc-950)]/80 via-[var(--color-zinc-950)]/40 to-transparent lg:hidden" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-transparent to-transparent" />

                                {/* Featured Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="premium-badge flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-zinc-950)] animate-pulse-slow" />
                                        Featured
                                    </span>
                                </div>

                                {/* Play Overlay */}
                                <div className="netflix-play-overlay">
                                    <div className="netflix-play-button">
                                        <Play size={28} className="text-[var(--color-zinc-950)] ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center netflix-content bg-gradient-to-br from-transparent to-[var(--color-zinc-900)]/30">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)]/15 text-[var(--color-accent)] rounded-md border border-[var(--color-accent)]/20">
                                        {filteredArticles[0].category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-zinc-500)]">
                                        <Clock size={14} />
                                        {filteredArticles[0].readTime} min read
                                    </span>
                                </div>

                                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-[1.15]">
                                    {filteredArticles[0].title}
                                </h3>

                                <p className="text-lg md:text-xl text-[var(--color-zinc-300)] font-display italic mb-5 leading-relaxed">
                                    {filteredArticles[0].subtitle}
                                </p>

                                <p className="text-[var(--color-zinc-400)] mb-8 line-clamp-2 text-base leading-relaxed">
                                    {filteredArticles[0].content[0]}
                                </p>

                                {/* Key Insight Preview */}
                                <div className="mb-8 p-4 rounded-xl bg-[var(--color-zinc-800)]/30 border-l-3 border-[var(--color-accent)] backdrop-blur-sm">
                                    <p className="text-xs text-[var(--color-accent)] uppercase tracking-widest font-bold mb-2">Key Insight</p>
                                    <p className="text-sm text-[var(--color-zinc-300)] line-clamp-2">
                                        {filteredArticles[0].insights[0]}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--color-zinc-500)] font-medium">
                                        By {filteredArticles[0].author}
                                    </span>
                                    <div className="flex items-center gap-2.5 text-[var(--color-accent)] font-semibold group-hover:gap-4 transition-all duration-300">
                                        Read Full Analysis <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Articles Grid - Netflix Card Style */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article, index) => (
                        <article
                            key={article.id}
                            onClick={() => onReadArticle(article)}
                            className="netflix-card glow-accent rounded-2xl overflow-hidden cursor-pointer stagger-item bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            {/* Article Image */}
                            <div className="relative h-52 netflix-image-container">
                                {article.image ? (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${categoryAccents[article.category]?.gradient || 'from-blue-500/30'} flex items-center justify-center`}>
                                        <Layers className="text-[var(--color-zinc-600)]" size={56} />
                                    </div>
                                )}
                                {/* Dramatic gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/50 to-transparent" />

                                {/* Category + Time Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                                    <span className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest bg-[var(--color-zinc-950)]/90 backdrop-blur-md text-[var(--color-accent)] rounded-md border border-[var(--color-accent)]/20">
                                        {article.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-[var(--color-zinc-300)] bg-[var(--color-zinc-950)]/90 backdrop-blur-md px-2.5 py-1 rounded-md">
                                        <Clock size={12} className="text-[var(--color-accent)]" />
                                        {article.readTime}m
                                    </span>
                                </div>

                                {/* Play Overlay */}
                                <div className="netflix-play-overlay">
                                    <div className="netflix-play-button !w-14 !h-14">
                                        <Play size={22} className="text-[var(--color-zinc-950)] ml-0.5" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-6 netflix-content">
                                {/* Title */}
                                <h3 className="font-display text-xl font-bold mb-3 text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors leading-snug line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2 leading-relaxed">
                                    {article.subtitle}
                                </p>

                                {/* Key Insight Preview - More compact */}
                                <div className="mb-5 p-3 rounded-lg bg-[var(--color-zinc-800)]/40 border-l-2 border-[var(--color-accent)]/40">
                                    <p className="text-[0.65rem] text-[var(--color-accent)] uppercase tracking-wider font-bold mb-1">Key Insight</p>
                                    <p className="text-xs text-[var(--color-zinc-300)] line-clamp-2 leading-relaxed">
                                        {article.insights[0]}
                                    </p>
                                </div>

                                {/* Author & CTA */}
                                <div className="flex items-center justify-between pt-2 border-t border-[var(--color-zinc-800)]/50">
                                    <span className="text-xs text-[var(--color-zinc-500)] font-medium">
                                        {article.author}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-sm text-[var(--color-accent)] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        Read <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
