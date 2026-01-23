import { useEffect, useRef, useState } from 'react';
import { X, Clock, Share2, BookOpen, ChevronUp, Quote, Sparkles, TrendingUp, ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';
import type { Article } from '../types';
import { articles } from '../data/content';

interface ArticleModalProps {
    article: Article | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [readProgress, setReadProgress] = useState(0);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as HTMLDivElement;
            const scrollTop = target.scrollTop;
            const scrollHeight = target.scrollHeight - target.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setReadProgress(Math.min(100, Math.max(0, progress)));
        };

        const content = contentRef.current;
        if (content && isOpen) {
            content.addEventListener('scroll', handleScroll);
            return () => content.removeEventListener('scroll', handleScroll);
        }
    }, [isOpen]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const scrollToTop = () => {
        contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Get related articles based on category and keywords
    const getRelatedArticles = (): Article[] => {
        if (!article) return [];
        return articles
            .filter(a => a.id !== article.id) // Exclude current article
            .filter(a => a.category === article.category) // Same category
            .slice(0, 3); // Max 3 articles
    };

    if (!isOpen || !article) return null;

    const relatedArticles = getRelatedArticles();

    return (
        <div
            className="fixed inset-0 z-[100] animate-fade-in"
            onClick={handleBackdropClick}
        >
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-zinc-900)] z-[110]">
                <div
                    className="h-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent)] transition-all duration-150"
                    style={{ width: `${readProgress}%` }}
                />
            </div>

            {/* Navigation Header - Always visible */}
            <div className="fixed top-0 left-0 right-0 z-[105] bg-gradient-to-b from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/80 to-transparent pt-1">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Articles</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigator.share?.({ title: article.title, text: article.subtitle })}
                            className="p-2.5 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] hover:bg-[var(--color-zinc-800)]/50 rounded-full transition-all"
                        >
                            <Share2 size={18} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2.5 bg-[var(--color-zinc-800)]/60 backdrop-blur-sm text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-700)] transition-all rounded-full"
                            aria-label="Close article"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div
                ref={modalRef}
                className="relative w-full h-full overflow-hidden bg-[var(--color-zinc-950)]"
            >
                {/* Scrollable Content */}
                <div ref={contentRef} className="h-full overflow-y-auto">

                    {/* ======================================
                        HERO SECTION - Contained Image Area
                    ====================================== */}
                    <section className="relative h-[55vh] min-h-[400px] max-h-[600px] overflow-hidden">
                        {/* Background Image */}
                        <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px]"
                        />

                        {/* Multiple Gradient Overlays for smooth transition to content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/70 to-[var(--color-zinc-950)]/30" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-zinc-950)]/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--color-zinc-950)] to-transparent" />

                        {/* Hero Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                            <div className="max-w-4xl mx-auto">
                                {/* Category & Featured Badge */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="premium-badge">
                                        {article.category}
                                    </span>
                                    {article.featured && (
                                        <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-md border border-white/10">
                                            <Sparkles size={12} />
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white">
                                    {article.title}
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl md:text-2xl text-white/85 font-display italic max-w-3xl leading-relaxed">
                                    {article.subtitle}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ======================================
                        ARTICLE BODY - Solid Background Area
                    ====================================== */}
                    <section className="bg-[var(--color-zinc-950)] relative">
                        {/* Decorative accent line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

                        {/* Article Meta Bar - Now part of content flow */}
                        <div className="border-b border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                            <div className="max-w-4xl mx-auto px-8 py-5 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-6">
                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[var(--color-zinc-950)] font-bold text-sm shadow-lg shadow-[var(--color-accent)]/20">
                                            {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-[var(--color-zinc-100)]">{article.author}</div>
                                            <div className="text-xs text-[var(--color-zinc-500)]">
                                                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-8 w-px bg-[var(--color-zinc-800)]" />

                                    {/* Read Time */}
                                    <span className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)]">
                                        <Clock size={16} className="text-[var(--color-accent)]" />
                                        {article.readTime} min read
                                    </span>
                                </div>

                                {/* Progress indicator */}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-[var(--color-zinc-500)]">{Math.round(readProgress)}% read</span>
                                    <div className="w-20 h-1 bg-[var(--color-zinc-800)] rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[var(--color-accent)] transition-all duration-150"
                                            style={{ width: `${readProgress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="max-w-6xl mx-auto px-8 py-12 md:py-16">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Main Article Content */}
                                <article className="lg:col-span-8">
                                    {/* Lead Paragraph with Drop Cap */}
                                    {article.content[0] && (
                                        <p className="text-xl md:text-2xl text-[var(--color-zinc-200)] leading-[1.75] mb-10 font-display first-letter:text-7xl first-letter:font-bold first-letter:text-[var(--color-accent)] first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none">
                                            {article.content[0]}
                                        </p>
                                    )}

                                    {/* Decorative Divider */}
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent" />
                                        <div className="w-2 h-2 rotate-45 bg-[var(--color-accent)]" />
                                        <div className="flex-1 h-px bg-gradient-to-l from-[var(--color-accent)]/40 to-transparent" />
                                    </div>

                                    {/* Content Paragraphs */}
                                    <div className="space-y-8">
                                        {article.content.slice(1).map((paragraph, index) => {
                                            // Add pull quote after 2nd paragraph
                                            if (index === 1 && article.content.length > 3) {
                                                return (
                                                    <div key={index}>
                                                        <p className="text-lg text-[var(--color-zinc-300)] leading-[1.9]">
                                                            {paragraph}
                                                        </p>

                                                        {/* Pull Quote - Premium Styling */}
                                                        <blockquote className="my-14 relative pl-8">
                                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent rounded-full" />
                                                            <Quote className="absolute -left-2 -top-4 w-10 h-10 text-[var(--color-accent)]/15" />
                                                            <p className="text-2xl md:text-3xl font-display italic text-[var(--color-zinc-100)] leading-[1.5]">
                                                                "{article.insights[0]}"
                                                            </p>
                                                        </blockquote>
                                                    </div>
                                                );
                                            }

                                            // Add stats callout box after 4th paragraph
                                            if (index === 3 && article.content.length > 5) {
                                                return (
                                                    <div key={index}>
                                                        <p className="text-lg text-[var(--color-zinc-300)] leading-[1.9]">
                                                            {paragraph}
                                                        </p>

                                                        {/* Stats/Insight Box - Premium Styling */}
                                                        <div className="my-14 p-8 bg-gradient-to-br from-[var(--color-zinc-900)] via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] rounded-2xl border border-[var(--color-zinc-800)] relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
                                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent)]/3 rounded-full blur-2xl" />
                                                            <div className="flex items-start gap-5 relative">
                                                                <div className="p-4 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/10">
                                                                    <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-3">Key Insight</h4>
                                                                    <p className="text-lg text-[var(--color-zinc-100)] font-medium leading-relaxed">
                                                                        {article.insights[1] || article.insights[0]}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <p key={index} className="text-lg text-[var(--color-zinc-300)] leading-[1.9]">
                                                    {paragraph}
                                                </p>
                                            );
                                        })}
                                    </div>

                                    {/* Article Footer */}
                                    <div className="mt-16 pt-10 border-t border-[var(--color-zinc-800)]">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            {/* Tags */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-sm text-[var(--color-zinc-500)] mr-2">Topics:</span>
                                                <span className="px-3 py-1.5 text-sm bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg capitalize hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                                                    {article.category}
                                                </span>
                                                <span className="px-3 py-1.5 text-sm bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                                                    AI Strategy
                                                </span>
                                                <span className="px-3 py-1.5 text-sm bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors cursor-pointer">
                                                    Enterprise
                                                </span>
                                            </div>

                                            {/* Share */}
                                            <button
                                                onClick={() => navigator.share?.({ title: article.title, text: article.subtitle })}
                                                className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                                            >
                                                <Share2 size={16} />
                                                Share Article
                                            </button>
                                        </div>
                                    </div>
                                </article>

                                {/* Sidebar */}
                                <aside className="lg:col-span-4">
                                    <div className="lg:sticky lg:top-24 space-y-8">
                                        {/* Key Takeaways Card */}
                                        <div className="glass-premium rounded-2xl p-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2.5 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl">
                                                    <BookOpen size={18} className="text-[var(--color-accent)]" />
                                                </div>
                                                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                    Key Takeaways
                                                </h3>
                                            </div>
                                            <ul className="space-y-5">
                                                {article.insights.map((insight, index) => (
                                                    <li key={index} className="flex gap-4 group">
                                                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-zinc-950)] text-sm font-bold shadow-lg shadow-[var(--color-accent)]/20 group-hover:scale-110 transition-transform">
                                                            {index + 1}
                                                        </span>
                                                        <span className="text-sm text-[var(--color-zinc-300)] leading-relaxed pt-1">
                                                            {insight}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Author Card */}
                                        <div className="glass-premium rounded-2xl p-6">
                                            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-zinc-500)] mb-4">
                                                About the Author
                                            </h3>
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[var(--color-zinc-950)] font-bold text-lg shadow-lg shadow-[var(--color-accent)]/20">
                                                    {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-[var(--color-zinc-100)]">{article.author}</div>
                                                    <div className="text-sm text-[var(--color-zinc-500)]">VibeCIO Editorial</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Related Articles */}
                                        {relatedArticles.length > 0 && (
                                            <div className="glass-premium rounded-2xl p-6">
                                                <div className="flex items-center gap-3 mb-5">
                                                    <div className="p-2.5 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl">
                                                        <TrendingUp size={18} className="text-[var(--color-accent)]" />
                                                    </div>
                                                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                        Related Articles
                                                    </h3>
                                                </div>
                                                <div className="space-y-4">
                                                    {relatedArticles.map((relatedArticle) => (
                                                        <div
                                                            key={relatedArticle.id}
                                                            className="p-4 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/30 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-zinc-800)]/50 transition-all cursor-pointer group"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                {relatedArticle.image && (
                                                                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                                                        <img
                                                                            src={relatedArticle.image}
                                                                            alt={relatedArticle.title}
                                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                        />
                                                                    </div>
                                                                )}
                                                                <div className="flex-1 min-w-0">
                                                                    <h4 className="text-sm font-semibold text-[var(--color-zinc-200)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 leading-snug">
                                                                        {relatedArticle.title}
                                                                    </h4>
                                                                    <div className="flex items-center gap-2 mt-1.5 text-xs text-[var(--color-zinc-500)]">
                                                                        <Clock size={10} />
                                                                        <span>{relatedArticle.readTime} min</span>
                                                                    </div>
                                                                </div>
                                                                <ArrowRight size={14} className="flex-shrink-0 text-[var(--color-zinc-600)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all mt-1" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Bookmark Article CTA */}
                                        <div className="glass-premium rounded-2xl p-5">
                                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-200)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors border border-[var(--color-zinc-700)]">
                                                <Bookmark size={16} />
                                                Save to Reading List
                                            </button>
                                        </div>

                                        {/* Newsletter CTA */}
                                        <div className="relative rounded-2xl p-6 border border-[var(--color-accent)]/20 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent)]/5" />
                                            <div className="relative">
                                                <h3 className="font-display text-xl font-semibold text-[var(--color-zinc-100)] mb-2">
                                                    Stay Informed
                                                </h3>
                                                <p className="text-sm text-[var(--color-zinc-400)] mb-5">
                                                    Get exclusive insights on AI, enterprise tech, and leadership delivered weekly.
                                                </p>
                                                <button className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                                                    Subscribe to VibeCIO
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Scroll to Top */}
                {readProgress > 20 && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] rounded-full shadow-2xl shadow-[var(--color-accent)]/30 hover:scale-110 transition-transform animate-fade-in z-[102]"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={24} />
                    </button>
                )}
            </div>
        </div>
    );
}
