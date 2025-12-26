import { AlertCircle, ChevronRight } from 'lucide-react';
import { breakingNews } from '../data/content';

export default function BreakingNewsTicker() {
    const now = new Date();
    const lastUpdated = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <section className="py-4 border-y border-[var(--color-zinc-800)] bg-[var(--color-zinc-950)]/80">
            <div className="container">
                {/* Breaking News Banner */}
                <div className="flex items-center gap-4 overflow-hidden">
                    {/* Breaking Badge */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-[var(--color-accent)] text-[var(--color-zinc-950)] text-xs font-bold uppercase tracking-wider rounded animate-pulse-slow">
                            <AlertCircle size={14} />
                            Breaking
                        </span>
                    </div>

                    {/* Scrolling Headlines */}
                    <div className="flex-1 overflow-hidden">
                        <div className="flex items-center gap-8 animate-marquee">
                            {breakingNews.map((news) => (
                                <div key={news.id} className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-sm font-medium text-[var(--color-zinc-200)] hover:text-[var(--color-accent)] transition-colors cursor-pointer whitespace-nowrap">
                                        {news.headline}
                                    </span>
                                    <span className="text-xs text-[var(--color-zinc-500)]">
                                        {news.source}
                                    </span>
                                    <ChevronRight size={14} className="text-[var(--color-zinc-600)]" />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {breakingNews.map((news) => (
                                <div key={`${news.id}-dup`} className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-sm font-medium text-[var(--color-zinc-200)] hover:text-[var(--color-accent)] transition-colors cursor-pointer whitespace-nowrap">
                                        {news.headline}
                                    </span>
                                    <span className="text-xs text-[var(--color-zinc-500)]">
                                        {news.source}
                                    </span>
                                    <ChevronRight size={14} className="text-[var(--color-zinc-600)]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Last Updated */}
                    <div className="hidden md:flex items-center gap-2 flex-shrink-0 pl-4 border-l border-[var(--color-zinc-800)]">
                        <span className="text-xs text-[var(--color-zinc-500)]">Updated</span>
                        <span className="text-xs text-[var(--color-zinc-400)]">{lastUpdated}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
