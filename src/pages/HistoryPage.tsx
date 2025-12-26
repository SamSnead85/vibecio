import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useReadingHistory } from '../hooks/usePreferences';
import { articles, leaders } from '../data/content';
import { History, Clock, ArrowRight, Trash2 } from 'lucide-react';

export default function HistoryPage() {
    const { history, clearHistory } = useReadingHistory();

    const historyItems = useMemo(() => {
        return history.map(item => {
            if (item.type === 'article') {
                const article = articles.find(a => a.id === item.id);
                return article ? { ...item, data: article } : null;
            } else {
                const leader = leaders.find(l => l.id === item.id);
                return leader ? { ...item, data: leader } : null;
            }
        }).filter(Boolean);
    }, [history]);

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days === 0) return 'Today';
        if (days === 1) return 'Yesterday';
        if (days < 7) return `${days} days ago`;
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    return (
        <div className="min-h-screen py-24">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                            <History className="text-[var(--color-accent)]" size={28} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-bold tracking-tight">Reading History</h1>
                            <p className="text-[var(--color-zinc-400)]">{history.length} items</p>
                        </div>
                    </div>

                    {history.length > 0 && (
                        <button
                            onClick={clearHistory}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        >
                            <Trash2 size={16} />
                            Clear All
                        </button>
                    )}
                </div>

                {/* Empty State */}
                {history.length === 0 && (
                    <div className="text-center py-16 bg-[var(--color-zinc-800)]/30 rounded-2xl border border-[var(--color-zinc-700)]/50">
                        <History size={48} className="mx-auto mb-4 text-[var(--color-zinc-600)]" />
                        <h2 className="text-xl font-semibold mb-2">No reading history yet</h2>
                        <p className="text-[var(--color-zinc-400)] mb-6">
                            Articles and leaders you view will appear here
                        </p>
                        <Link
                            to="/articles"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-black font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                        >
                            Browse Articles <ArrowRight size={18} />
                        </Link>
                    </div>
                )}

                {/* History List */}
                {historyItems.length > 0 && (
                    <div className="space-y-4">
                        {historyItems.map((item) => {
                            if (!item) return null;
                            const data = item.data as any;

                            return (
                                <Link
                                    key={`${item.type}-${item.id}-${item.timestamp}`}
                                    to={item.type === 'article' ? `/article/${item.id}` : `/leader/${item.id}`}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-zinc-800)]/30 hover:bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)]/50 transition-colors group"
                                >
                                    {/* Indicator */}
                                    <div className={`w-1 h-12 rounded-full ${item.type === 'article' ? 'bg-blue-500' : 'bg-purple-500'}`} />

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-xs font-medium uppercase ${item.type === 'article' ? 'text-blue-400' : 'text-purple-400'}`}>
                                                {item.type}
                                            </span>
                                            <span className="text-xs text-[var(--color-zinc-500)]">•</span>
                                            <span className="text-xs text-[var(--color-zinc-500)]">{formatDate(item.timestamp)}</span>
                                        </div>
                                        <h3 className="font-medium truncate group-hover:text-[var(--color-accent)] transition-colors">
                                            {item.type === 'article' ? data.title : data.name}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-500)] truncate">
                                            {item.type === 'article' ? data.subtitle : `${data.title} at ${data.company}`}
                                        </p>
                                    </div>

                                    {/* Read time for articles */}
                                    {item.type === 'article' && (
                                        <div className="flex items-center gap-1 text-sm text-[var(--color-zinc-500)]">
                                            <Clock size={14} />
                                            <span>{data.readTime}m</span>
                                        </div>
                                    )}

                                    <ArrowRight size={18} className="text-[var(--color-zinc-600)] group-hover:text-[var(--color-accent)] transition-colors" />
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
