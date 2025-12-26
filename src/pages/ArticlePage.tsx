import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/content';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ChevronRight } from 'lucide-react';

export default function ArticlePage() {
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/" className="text-[var(--color-accent)] hover:underline">
                        ← Return Home
                    </Link>
                </div>
            </div>
        );
    }

    const relatedArticles = articles
        .filter(a => a.category === article.category && a.id !== article.id)
        .slice(0, 3);

    const categoryColors: Record<string, string> = {
        strategy: 'from-blue-500 to-indigo-600',
        technology: 'from-emerald-500 to-teal-600',
        trends: 'from-violet-500 to-purple-600',
        insights: 'from-amber-500 to-orange-600',
    };

    return (
        <article className="min-h-screen">
            {/* Hero Section */}
            <header className="relative py-24 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[article.category]} opacity-10`} />
                <div className="container relative">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)] mb-8">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles" className="hover:text-white transition-colors">Articles</Link>
                        <ChevronRight size={14} />
                        <span className="capitalize">{article.category}</span>
                    </nav>

                    {/* Category Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${categoryColors[article.category]} text-white mb-6`}>
                        {article.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">
                        {article.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] max-w-3xl mb-8">
                        {article.subtitle}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-zinc-400)]">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{article.readTime} min read</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-8">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] transition-colors">
                            <Share2 size={16} />
                            <span>Share</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] transition-colors">
                            <Bookmark size={16} />
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container py-16">
                <div className="grid lg:grid-cols-[1fr_320px] gap-16">
                    {/* Main Content */}
                    <div className="prose prose-lg prose-invert max-w-none">
                        {/* Featured Image */}
                        {article.image && (
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-80 object-cover rounded-2xl mb-12"
                            />
                        )}

                        {/* Article Content */}
                        {article.content.map((paragraph, index) => (
                            <p key={index} className="text-[var(--color-zinc-300)] leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Key Insights */}
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-zinc-700)]/50">
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                                    Key Insights
                                </h3>
                                <ul className="space-y-4">
                                    {article.insights.map((insight, index) => (
                                        <li key={index} className="text-sm text-[var(--color-zinc-400)] pl-4 border-l-2 border-[var(--color-accent)]/30">
                                            {insight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Related Articles */}
                            {relatedArticles.length > 0 && (
                                <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl p-6 border border-[var(--color-zinc-700)]/50">
                                    <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                                    <ul className="space-y-4">
                                        {relatedArticles.map(related => (
                                            <li key={related.id}>
                                                <Link
                                                    to={`/article/${related.id}`}
                                                    className="block group"
                                                >
                                                    <span className="text-sm text-[var(--color-zinc-400)] group-hover:text-white transition-colors">
                                                        {related.title}
                                                    </span>
                                                    <span className="block text-xs text-[var(--color-zinc-500)] mt-1">
                                                        {related.readTime} min read
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>

            {/* Back to Articles */}
            <div className="container pb-16">
                <Link
                    to="/articles"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                >
                    <ArrowLeft size={16} />
                    Back to Articles
                </Link>
            </div>
        </article>
    );
}
