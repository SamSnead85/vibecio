import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/content';
import { Clock, ArrowRight, Search } from 'lucide-react';
import type { ArticleCategory } from '../types';

const categories: { value: ArticleCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Articles' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'technology', label: 'Technology' },
    { value: 'trends', label: 'Trends' },
    { value: 'insights', label: 'Insights' },
];

const categoryColors: Record<string, string> = {
    strategy: 'from-blue-500 to-indigo-600',
    technology: 'from-emerald-500 to-teal-600',
    trends: 'from-violet-500 to-purple-600',
    insights: 'from-amber-500 to-orange-600',
};

export default function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
            const matchesSearch = searchQuery === '' ||
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        Deep Dive <span className="text-[var(--color-accent)]">Articles</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)]">
                        Original thought leadership on AI transformation, enterprise strategy, and the future of technology leadership.
                    </p>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                        />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat.value
                                        ? 'bg-[var(--color-accent)] text-black'
                                        : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-700)]'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map(article => (
                        <Link
                            key={article.id}
                            to={`/article/${article.id}`}
                            className="group bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* Image */}
                            {article.image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            <div className="p-6">
                                {/* Category */}
                                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${categoryColors[article.category]} text-white mb-4`}>
                                    {article.category}
                                </span>

                                {/* Title */}
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2">
                                    {article.subtitle}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center justify-between text-sm text-[var(--color-zinc-500)]">
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} />
                                        <span>{article.readTime} min</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-[var(--color-accent)] group-hover:gap-2 transition-all">
                                        Read <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* No Results */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[var(--color-zinc-400)]">No articles found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
