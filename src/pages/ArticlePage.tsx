import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { articles } from '../data/content';
import { ArrowLeft, Clock, User, Calendar, Share2, ChevronRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import BookmarkButton from '../components/BookmarkButton';

export default function ArticlePage() {
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Reading progress indicator
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add structured data for article
    useEffect(() => {
        if (!article) return;

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "alternativeHeadline": article.subtitle,
            "description": article.subtitle,
            "author": {
                "@type": "Person",
                "name": article.author.split(',')[0].trim()
            },
            "publisher": {
                "@type": "Organization",
                "name": "VibeCIO",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://vibecio.com/og-image.png"
                }
            },
            "datePublished": article.date,
            "dateModified": article.date,
            "mainEntityOfPage": `https://vibecio.com/article/${article.id}`,
            "image": article.image,
            "articleSection": article.category,
            "keywords": article.insights.join(", ")
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'article-structured-data';
        script.text = JSON.stringify(structuredData);

        const existing = document.getElementById('article-structured-data');
        if (existing) existing.remove();

        document.head.appendChild(script);

        return () => {
            const el = document.getElementById('article-structured-data');
            if (el) el.remove();
        };
    }, [article]);

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

    const categoryColors: Record<string, { bg: string; text: string }> = {
        strategy: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
        technology: { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
        trends: { bg: 'bg-violet-500/20', text: 'text-violet-400' },
        insights: { bg: 'bg-amber-500/20', text: 'text-amber-400' },
        healthcare: { bg: 'bg-rose-500/20', text: 'text-rose-400' },
        leadership: { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
    };

    const catStyle = categoryColors[article.category] || categoryColors.strategy;

    return (
        <article className="min-h-screen bg-[var(--color-zinc-950)]">
            <SEO
                title={`${article.title} | VibeCIO`}
                description={article.subtitle}
                author={article.author}
                type="article"
                image={article.image}
                url={`https://vibecio.com/article/${article.id}`}
                publishedTime={article.date}
                articleSection={article.category}
                keywords={[article.author.split(',')[0].trim(), article.category, ...article.insights.slice(0, 3).map(i => i.split('—')[0].trim())]}
            />

            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] z-50 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Full-Bleed Hero Section */}
            <header className="relative min-h-[70vh] flex items-end overflow-hidden">
                {/* Hero Image */}
                {article.image && (
                    <div className="absolute inset-0">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center 20%' }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-zinc-950)]/50 to-transparent" />
                    </div>
                )}

                {/* Fallback gradient if no image */}
                {!article.image && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-900)] via-[var(--color-zinc-800)] to-[var(--color-zinc-950)]" />
                )}

                {/* Hero Content */}
                <div className="relative z-10 w-full pb-16 pt-32">
                    <div className="container max-w-5xl mx-auto px-6">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)] mb-8 animate-fade-in">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight size={14} />
                            <Link to="/articles" className="hover:text-white transition-colors">Articles</Link>
                            <ChevronRight size={14} />
                            <span className={`capitalize ${catStyle.text}`}>{article.category}</span>
                        </nav>

                        {/* Category Badge */}
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${catStyle.bg} ${catStyle.text} mb-6`}>
                            <Sparkles size={12} />
                            {article.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 max-w-4xl animate-fade-in-up text-white leading-tight">
                            {article.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-[var(--color-zinc-300)] max-w-3xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            {article.subtitle}
                        </p>

                        {/* Meta & Actions Row */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-zinc-400)]">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center">
                                        <User size={14} className="text-white" />
                                    </div>
                                    <span className="text-[var(--color-zinc-200)]">{article.author}</span>
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
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105 text-sm font-medium">
                                    <Share2 size={16} />
                                    <span>Share</span>
                                </button>
                                <BookmarkButton
                                    type="article"
                                    id={article.id}
                                    showLabel
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Key Insights - Full Width Banner */}
            <section className="bg-gradient-to-r from-[var(--color-zinc-900)] via-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)] border-y border-[var(--color-zinc-800)] py-12">
                <div className="container max-w-5xl mx-auto px-6">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-6 flex items-center gap-2">
                        <span className="w-8 h-px bg-[var(--color-accent)]" />
                        Key Insights
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {article.insights.map((insight, index) => (
                            <div
                                key={index}
                                className="relative pl-5 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[var(--color-accent)] before:to-transparent before:rounded-full"
                            >
                                <p className="text-[var(--color-zinc-300)] text-sm leading-relaxed">
                                    {insight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Body - Centered Readable Width */}
            <div className="container max-w-3xl mx-auto px-6 py-20">
                {/* Article Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                    {article.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`text-[var(--color-zinc-300)] leading-[1.9] mb-8 text-lg ${index === 0 ? 'first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[var(--color-accent)]' : ''
                                }`}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="bg-[var(--color-zinc-900)]/50 border-t border-[var(--color-zinc-800)]">
                    <div className="container max-w-5xl mx-auto px-6 py-20">
                        <h2 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
                            <span className="w-12 h-px bg-[var(--color-accent)]" />
                            Continue Reading
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedArticles.map(related => (
                                <Link
                                    key={related.id}
                                    to={`/article/${related.id}`}
                                    className="group block"
                                >
                                    <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-[var(--color-zinc-800)]">
                                        {related.image && (
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                    </div>
                                    <span className={`text-xs font-medium uppercase tracking-wider ${categoryColors[related.category]?.text || 'text-[var(--color-accent)]'}`}>
                                        {related.category}
                                    </span>
                                    <h3 className="font-semibold mt-2 text-[var(--color-zinc-200)] group-hover:text-white transition-colors line-clamp-2">
                                        {related.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-zinc-500)] mt-2">
                                        {related.readTime} min read
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Back Navigation */}
            <div className="container max-w-5xl mx-auto px-6 py-12 border-t border-[var(--color-zinc-800)]">
                <Link
                    to="/articles"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>
            </div>
        </article>
    );
}
