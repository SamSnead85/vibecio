import { useState, useEffect } from 'react';
import { TrendingUp, ExternalLink } from 'lucide-react';
import { NewsItem } from '../types';
import { fetchNews } from '../services/newsService';

export default function NewsFeed() {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            setIsLoading(true);
            const items = await fetchNews();
            setNews(items);
            setIsLoading(false);
        };
        loadNews();
    }, []);

    return (
        <section id="news" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="text-[var(--color-accent)]" size={24} />
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Latest Intelligence
                    </h2>
                </div>

                {/* News Grid */}
                {isLoading ? (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="glass-card rounded-lg p-6 animate-pulse"
                            >
                                <div className="h-4 bg-[var(--color-zinc-800)] rounded w-3/4 mb-4" />
                                <div className="h-3 bg-[var(--color-zinc-800)] rounded w-1/2" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {news.map((item, index) => (
                            <article
                                key={item.id}
                                className="glass-card rounded-lg p-6 card-hover group cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        {item.source && (
                                            <p className="text-sm text-[var(--color-zinc-500)]">
                                                {item.source}
                                            </p>
                                        )}
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="text-[var(--color-zinc-600)] group-hover:text-[var(--color-accent)] transition-colors flex-shrink-0 mt-1"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
