import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/usePreferences';
import { articles, leaders } from '../data/content';
import { Bookmark, Clock, ArrowRight, Trash2 } from 'lucide-react';

export default function BookmarksPage() {
    const { bookmarks, toggleBookmark, getBookmarkCount } = useBookmarks();

    const bookmarkedArticles = useMemo(() => {
        return bookmarks
            .filter(b => b.type === 'article')
            .map(b => articles.find(a => a.id === b.id))
            .filter(Boolean);
    }, [bookmarks]);

    const bookmarkedLeaders = useMemo(() => {
        return bookmarks
            .filter(b => b.type === 'leader')
            .map(b => leaders.find(l => l.id === b.id))
            .filter(Boolean);
    }, [bookmarks]);

    const avatarColors = [
        'from-blue-500 to-indigo-600',
        'from-emerald-500 to-teal-600',
        'from-violet-500 to-purple-600',
        'from-amber-500 to-orange-600',
    ];

    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                            <Bookmark className="text-[var(--color-accent)]" size={24} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-display font-bold tracking-tight">
                                Bookmarks
                            </h1>
                            <p className="text-[var(--color-zinc-400)]">
                                {getBookmarkCount()} saved items
                            </p>
                        </div>
                    </div>
                </div>

                {/* No Bookmarks */}
                {getBookmarkCount() === 0 && (
                    <div className="text-center py-16 bg-[var(--color-zinc-800)]/30 rounded-2xl border border-[var(--color-zinc-700)]/50">
                        <Bookmark size={48} className="mx-auto mb-4 text-[var(--color-zinc-600)]" />
                        <h2 className="text-xl font-semibold mb-2">No bookmarks yet</h2>
                        <p className="text-[var(--color-zinc-400)] mb-6">
                            Save articles and leaders to read later
                        </p>
                        <Link
                            to="/articles"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-black font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                        >
                            Browse Articles <ArrowRight size={18} />
                        </Link>
                    </div>
                )}

                {/* Bookmarked Articles */}
                {bookmarkedArticles.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-6">Saved Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bookmarkedArticles.map(article => article && (
                                <div
                                    key={article.id}
                                    className="group relative bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/50 transition-all"
                                >
                                    <Link to={`/article/${article.id}`}>
                                        {article.image && (
                                            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                                        )}
                                        <div className="p-5">
                                            <span className="inline-block px-2 py-1 rounded text-xs font-semibold uppercase bg-[var(--color-zinc-800)] text-[var(--color-accent)] mb-3">
                                                {article.category}
                                            </span>
                                            <h3 className="font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                                {article.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-[var(--color-zinc-500)]">
                                                <Clock size={14} />
                                                <span>{article.readTime} min</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => toggleBookmark(article.id, 'article')}
                                        className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition-colors"
                                        aria-label="Remove bookmark"
                                    >
                                        <Trash2 size={14} className="text-white" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Bookmarked Leaders */}
                {bookmarkedLeaders.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-semibold mb-6">Saved Leaders</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bookmarkedLeaders.map(leader => leader && (
                                <div
                                    key={leader.id}
                                    className="group relative bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-5 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/50 transition-all"
                                >
                                    <Link to={`/leader/${leader.id}`} className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${avatarColors[leader.name.charCodeAt(0) % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-lg font-bold text-white">
                                                {leader.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-semibold truncate group-hover:text-[var(--color-accent)] transition-colors">
                                                {leader.name}
                                            </h3>
                                            <p className="text-sm text-[var(--color-zinc-500)] truncate">
                                                {leader.title} at {leader.company}
                                            </p>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => toggleBookmark(leader.id, 'leader')}
                                        className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-red-500/80 hover:bg-red-500 flex items-center justify-center transition-colors"
                                        aria-label="Remove bookmark"
                                    >
                                        <Trash2 size={14} className="text-white" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
