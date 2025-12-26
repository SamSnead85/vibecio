import { useState, useMemo } from 'react';
import { Search, Filter, Clock, ArrowRight, Bookmark, Share2 } from 'lucide-react';
import { breakingNews } from '../data/content';

const categoryFilters = ['all', 'breaking', 'ai', 'enterprise', 'market'];

export default function NewsArchive() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredNews = useMemo(() => {
        return breakingNews.filter(news => {
            const matchesSearch = searchQuery === '' ||
                news.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (news.summary && news.summary.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesFilter = activeFilter === 'all' ||
                (activeFilter === 'breaking' && news.isBreaking);
            return matchesSearch && matchesFilter;
        });
    }, [searchQuery, activeFilter]);

    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        News <span className="text-[var(--color-accent)]">Archive</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)]">
                        Stay up to date with the latest developments in AI, enterprise technology, and digital transformation.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]" size={20} />
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex items-center gap-2">
                        <Filter size={18} className="text-[var(--color-zinc-500)]" />
                        {categoryFilters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${activeFilter === filter
                                    ? 'bg-[var(--color-accent)] text-black'
                                    : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-700)]'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                <div className="space-y-6">
                    {filteredNews.map((news) => (
                        <article
                            key={news.id}
                            className="group bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/50 transition-all"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        {news.isBreaking && (
                                            <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-red-500/20 text-red-400 animate-pulse">
                                                Breaking
                                            </span>
                                        )}
                                        <span className="text-sm text-[var(--color-zinc-500)]">{news.source}</span>
                                        <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-600)]" />
                                        <span className="text-sm text-[var(--color-zinc-500)] flex items-center gap-1">
                                            <Clock size={12} />
                                            {new Date(news.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                        {news.headline}
                                    </h2>

                                    {news.summary && (
                                        <p className="text-[var(--color-zinc-400)]">{news.summary}</p>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3 md:flex-col">
                                    <button className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors">
                                        <Bookmark size={18} className="text-[var(--color-zinc-400)]" />
                                    </button>
                                    <button className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors">
                                        <Share2 size={18} className="text-[var(--color-zinc-400)]" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* No Results */}
                {filteredNews.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[var(--color-zinc-400)]">No news found matching your criteria.</p>
                    </div>
                )}

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="px-6 py-3 rounded-xl bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] font-medium transition-colors flex items-center gap-2 mx-auto">
                        Load More News <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
