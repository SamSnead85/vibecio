import { Clock, Bookmark, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Article } from '../types';

interface ArticleCardProps {
    article: Article;
    variant?: 'default' | 'featured' | 'compact' | 'horizontal';
    onBookmark?: () => void;
    isBookmarked?: boolean;
    showImage?: boolean;
    index?: number;
}

export default function ArticleCard({
    article,
    variant = 'default',
    onBookmark,
    isBookmarked = false,
    showImage = true,
    index = 0
}: ArticleCardProps) {
    const categoryColors: Record<string, { bg: string; text: string }> = {
        strategy: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
        technology: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
        trends: { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
        insights: { bg: 'bg-amber-500/10', text: 'text-amber-400' },
        healthcare: { bg: 'bg-rose-500/10', text: 'text-rose-400' },
        leadership: { bg: 'bg-cyan-500/10', text: 'text-cyan-400' }
    };

    const colors = categoryColors[article.category] || categoryColors.strategy;

    if (variant === 'compact') {
        return (
            <Link
                to={`/article/${article.id}`}
                className="group flex items-start gap-4 p-4 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/30 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-zinc-800)]/50 transition-all"
            >
                {showImage && article.image && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                )}
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[var(--color-zinc-200)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 leading-snug mb-1">
                        {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-zinc-500)]">
                        <Clock size={10} />
                        <span>{article.readTime} min read</span>
                    </div>
                </div>
            </Link>
        );
    }

    if (variant === 'horizontal') {
        return (
            <Link
                to={`/article/${article.id}`}
                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                style={{ animationDelay: `${index * 0.08}s` }}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    {showImage && article.image && (
                        <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-zinc-900)]/50 md:bg-gradient-to-l" />
                        </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${colors.bg} ${colors.text} rounded-md`}>
                                {article.category}
                            </span>
                            <span className="text-xs text-[var(--color-zinc-500)]">
                                {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                        </div>

                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                            {article.title}
                        </h3>

                        <p className="text-sm text-[var(--color-zinc-400)] line-clamp-2 mb-4">
                            {article.subtitle}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-xs text-[var(--color-zinc-500)]">
                                <span className="flex items-center gap-1">
                                    <User size={12} />
                                    {article.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {article.readTime} min
                                </span>
                            </div>

                            {onBookmark && (
                                <button
                                    onClick={(e) => { e.preventDefault(); onBookmark(); }}
                                    className={`p-2 rounded-lg transition-all ${isBookmarked
                                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                                        : 'hover:bg-[var(--color-zinc-800)] text-[var(--color-zinc-500)]'
                                        }`}
                                >
                                    <Bookmark size={16} fill={isBookmarked ? 'currentColor' : 'none'} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    if (variant === 'featured') {
        return (
            <Link
                to={`/article/${article.id}`}
                className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-[var(--color-accent)]/20 group"
            >
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto">
                        {article.image && (
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-transparent to-transparent" />

                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)] text-[var(--color-zinc-950)] rounded-md">
                                Featured
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest ${colors.bg} ${colors.text} rounded-md`}>
                                {article.category}
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                            {article.title}
                        </h2>

                        <p className="text-lg text-[var(--color-zinc-400)] mb-6">
                            {article.subtitle}
                        </p>

                        <div className="flex items-center gap-6 text-sm text-[var(--color-zinc-500)]">
                            <span className="flex items-center gap-2">
                                <User size={14} />
                                {article.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} />
                                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} />
                                {article.readTime} min read
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    // Default card
    return (
        <Link
            to={`/article/${article.id}`}
            className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
            style={{ animationDelay: `${index * 0.08}s` }}
        >
            {/* Image */}
            {showImage && article.image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-900)] via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${colors.bg} ${colors.text} rounded-md backdrop-blur-sm`}>
                            {article.category}
                        </span>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-3 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                    {article.title}
                </h3>

                <p className="text-sm text-[var(--color-zinc-400)] line-clamp-2 mb-4">
                    {article.subtitle}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-zinc-800)]">
                    <div className="flex items-center gap-3 text-xs text-[var(--color-zinc-500)]">
                        <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {article.readTime} min
                        </span>
                        <span>{article.author}</span>
                    </div>

                    {onBookmark && (
                        <button
                            onClick={(e) => { e.preventDefault(); onBookmark(); }}
                            className={`p-2 rounded-lg transition-all ${isBookmarked
                                ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                                : 'hover:bg-[var(--color-zinc-800)] text-[var(--color-zinc-500)] opacity-0 group-hover:opacity-100'
                                }`}
                        >
                            <Bookmark size={14} fill={isBookmarked ? 'currentColor' : 'none'} />
                        </button>
                    )}
                </div>
            </div>
        </Link>
    );
}
