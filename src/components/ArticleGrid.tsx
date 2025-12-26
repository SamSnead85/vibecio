import { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Layers } from 'lucide-react';
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

// Category colors for visual distinction
const categoryColors: Record<string, string> = {
    strategy: 'from-blue-500/20 to-transparent',
    technology: 'from-emerald-500/20 to-transparent',
    trends: 'from-purple-500/20 to-transparent',
    insights: 'from-amber-500/20 to-transparent',
};

export default function ArticleGrid({ onReadArticle }: ArticleGridProps) {
    const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>('all');
    const filteredArticles = getArticlesByCategory(activeCategory);

    return (
        <section id="articles" className="section bg-gradient-to-b from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]">
            <div className="container">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                            <BookOpen className="text-[var(--color-accent)]" size={24} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                Deep Dives
                            </h2>
                            <p className="text-sm text-[var(--color-zinc-500)]">
                                In-depth analysis for technology leaders
                            </p>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${activeCategory === category.id
                                    ? 'bg-[var(--color-accent)] text-[var(--color-zinc-950)]'
                                    : 'bg-[var(--color-zinc-800)]/50 text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-200)] hover:bg-[var(--color-zinc-800)]'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Article - First One Large */}
                {filteredArticles.length > 0 && filteredArticles[0].featured && (
                    <div
                        className="mb-8 glass-card rounded-xl overflow-hidden cursor-pointer card-hover group animate-fade-in-up"
                        onClick={() => onReadArticle(filteredArticles[0])}
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* Image */}
                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                {filteredArticles[0].image ? (
                                    <img
                                        src={filteredArticles[0].image}
                                        alt={filteredArticles[0].title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${categoryColors[filteredArticles[0].category] || categoryColors.strategy} flex items-center justify-center`}>
                                        <Layers className="text-[var(--color-zinc-600)]" size={64} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-transparent to-transparent opacity-60" />
                                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-zinc-950)] rounded">
                                    Featured
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded">
                                        {filteredArticles[0].category}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-[var(--color-zinc-500)]">
                                        <Clock size={12} />
                                        {filteredArticles[0].readTime} min
                                    </span>
                                </div>

                                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                                    {filteredArticles[0].title}
                                </h3>

                                <p className="text-lg text-[var(--color-zinc-300)] font-display italic mb-4">
                                    {filteredArticles[0].subtitle}
                                </p>

                                <p className="text-[var(--color-zinc-400)] mb-6 line-clamp-2">
                                    {filteredArticles[0].content[0]}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[var(--color-zinc-500)]">
                                        {filteredArticles[0].author}
                                    </span>
                                    <div className="flex items-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                                        Read Analysis <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Articles Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article, index) => (
                        <article
                            key={article.id}
                            onClick={() => onReadArticle(article)}
                            className="glass-card rounded-xl overflow-hidden cursor-pointer card-hover group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {/* Article Image */}
                            <div className="relative h-48 overflow-hidden">
                                {article.image ? (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full bg-gradient-to-br ${categoryColors[article.category] || categoryColors.strategy} flex items-center justify-center`}>
                                        <Layers className="text-[var(--color-zinc-600)]" size={48} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/40 to-transparent" />

                                {/* Category tag overlay */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--color-zinc-950)]/80 backdrop-blur-sm text-[var(--color-accent)] rounded">
                                        {article.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-xs text-[var(--color-zinc-300)] bg-[var(--color-zinc-950)]/80 backdrop-blur-sm px-2 py-1 rounded">
                                        <Clock size={12} />
                                        {article.readTime} min
                                    </span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                                    {article.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2">
                                    {article.subtitle}
                                </p>

                                {/* Key Insight Preview */}
                                <div className="mb-4 p-3 rounded-lg bg-[var(--color-zinc-800)]/30 border-l-2 border-[var(--color-accent)]/30">
                                    <p className="text-xs text-[var(--color-zinc-500)] uppercase tracking-wider mb-1">Key Insight</p>
                                    <p className="text-sm text-[var(--color-zinc-300)] line-clamp-2">
                                        {article.insights[0]}
                                    </p>
                                </div>

                                {/* Author & CTA */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-[var(--color-zinc-500)]">
                                        {article.author}
                                    </span>
                                    <div className="flex items-center gap-1 text-sm text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
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
