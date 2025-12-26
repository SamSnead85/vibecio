import { useEffect, useRef, useState } from 'react';
import { X, Clock, Share2, BookOpen, ChevronUp, Quote, Sparkles, TrendingUp } from 'lucide-react';
import type { Article } from '../types';

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


    if (!isOpen || !article) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-[var(--color-zinc-950)] animate-fade-in"
            onClick={handleBackdropClick}
        >
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-zinc-900)] z-[101]">
                <div
                    className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] transition-all duration-150"
                    style={{ width: `${readProgress}%` }}
                />
            </div>

            {/* Floating Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-[102] p-3 bg-[var(--color-zinc-900)]/90 backdrop-blur-sm text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] hover:bg-[var(--color-zinc-800)] transition-all rounded-full border border-[var(--color-zinc-800)]"
                aria-label="Close article"
            >
                <X size={20} />
            </button>

            <div
                ref={modalRef}
                className="relative w-full h-full overflow-hidden"
            >
                {/* Scrollable Content */}
                <div ref={contentRef} className="h-full overflow-y-auto">
                    {/* Hero Image Section */}
                    <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-zinc-950)]/40 to-transparent" />

                        {/* Hero Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                            <div className="max-w-4xl mx-auto">
                                {/* Category Badge */}
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] bg-[var(--color-accent)] text-[var(--color-zinc-950)] rounded-sm">
                                        {article.category}
                                    </span>
                                    {article.featured && (
                                        <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white rounded-sm">
                                            <Sparkles size={12} />
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 text-white drop-shadow-lg">
                                    {article.title}
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-display italic max-w-3xl">
                                    {article.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Article Meta Bar */}
                    <div className="sticky top-0 z-50 bg-[var(--color-zinc-950)]/95 backdrop-blur-md border-b border-[var(--color-zinc-800)]">
                        <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[var(--color-zinc-950)] font-bold text-sm">
                                        {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-[var(--color-zinc-200)]">{article.author}</div>
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

                            {/* Share Button */}
                            <button
                                onClick={() => navigator.share?.({ title: article.title, text: article.subtitle })}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] hover:bg-[var(--color-zinc-800)]/50 rounded-lg transition-all"
                            >
                                <Share2 size={16} />
                                <span className="hidden md:inline">Share</span>
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="max-w-6xl mx-auto px-8 py-12 md:py-16">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Main Article Content */}
                            <article className="lg:col-span-8">
                                {/* Lead Paragraph with Drop Cap */}
                                {article.content[0] && (
                                    <p className="article-lead text-xl md:text-2xl text-[var(--color-zinc-200)] leading-relaxed mb-10 font-display first-letter:text-7xl first-letter:font-bold first-letter:text-[var(--color-accent)] first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none first-letter:font-display">
                                        {article.content[0]}
                                    </p>
                                )}

                                {/* Decorative Divider */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)]/50 to-transparent" />
                                    <div className="w-2 h-2 rotate-45 bg-[var(--color-accent)]" />
                                    <div className="flex-1 h-px bg-gradient-to-l from-[var(--color-accent)]/50 to-transparent" />
                                </div>

                                {/* Content Paragraphs */}
                                <div className="article-content space-y-8">
                                    {article.content.slice(1).map((paragraph, index) => {
                                        // Add pull quote after 2nd paragraph
                                        if (index === 1 && article.content.length > 3) {
                                            return (
                                                <div key={index}>
                                                    <p className="text-lg text-[var(--color-zinc-300)] leading-[1.85]">
                                                        {paragraph}
                                                    </p>

                                                    {/* Pull Quote */}
                                                    <blockquote className="my-12 relative">
                                                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/20 rounded-full" />
                                                        <Quote className="absolute -left-2 -top-4 w-12 h-12 text-[var(--color-accent)]/20" />
                                                        <p className="pl-8 text-2xl md:text-3xl font-display italic text-[var(--color-zinc-200)] leading-relaxed">
                                                            {article.insights[0]}
                                                        </p>
                                                    </blockquote>
                                                </div>
                                            );
                                        }

                                        // Add stats callout box after 4th paragraph
                                        if (index === 3 && article.content.length > 5) {
                                            return (
                                                <div key={index}>
                                                    <p className="text-lg text-[var(--color-zinc-300)] leading-[1.85]">
                                                        {paragraph}
                                                    </p>

                                                    {/* Stats/Insight Box */}
                                                    <div className="my-12 p-8 bg-gradient-to-br from-[var(--color-zinc-900)] to-[var(--color-zinc-900)]/50 rounded-2xl border border-[var(--color-zinc-800)] relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
                                                        <div className="flex items-start gap-4 relative">
                                                            <div className="p-3 bg-[var(--color-accent)]/10 rounded-xl">
                                                                <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2">Key Insight</h4>
                                                                <p className="text-lg text-[var(--color-zinc-200)] font-medium leading-relaxed">
                                                                    {article.insights[1] || article.insights[0]}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        return (
                                            <p key={index} className="text-lg text-[var(--color-zinc-300)] leading-[1.85]">
                                                {paragraph}
                                            </p>
                                        );
                                    })}
                                </div>

                                {/* Article Footer */}
                                <div className="mt-16 pt-8 border-t border-[var(--color-zinc-800)]">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        {/* Tags */}
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm text-[var(--color-zinc-500)] mr-2">Topics:</span>
                                            <span className="px-3 py-1.5 text-sm bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg capitalize hover:bg-[var(--color-zinc-700)] transition-colors cursor-pointer">
                                                {article.category}
                                            </span>
                                            <span className="px-3 py-1.5 text-sm bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] transition-colors cursor-pointer">
                                                AI Strategy
                                            </span>
                                            <span className="px-3 py-1.5 text-sm bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] transition-colors cursor-pointer">
                                                Enterprise
                                            </span>
                                        </div>

                                        {/* Share */}
                                        <button
                                            onClick={() => navigator.share?.({ title: article.title, text: article.subtitle })}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
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
                                    <div className="bg-gradient-to-br from-[var(--color-zinc-900)] to-[var(--color-zinc-950)] rounded-2xl p-6 border border-[var(--color-zinc-800)] shadow-2xl">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg">
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
                                    <div className="bg-[var(--color-zinc-900)]/50 rounded-2xl p-6 border border-[var(--color-zinc-800)]">
                                        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-zinc-500)] mb-4">
                                            About the Author
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[var(--color-zinc-950)] font-bold text-lg">
                                                {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[var(--color-zinc-200)]">{article.author}</div>
                                                <div className="text-sm text-[var(--color-zinc-500)]">VibeCIO Editorial</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Newsletter CTA */}
                                    <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-2xl p-6 border border-[var(--color-accent)]/20">
                                        <h3 className="font-display text-xl font-semibold text-[var(--color-zinc-100)] mb-2">
                                            Stay Informed
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-400)] mb-4">
                                            Get exclusive insights on AI, enterprise tech, and leadership.
                                        </p>
                                        <button className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors">
                                            Subscribe to VibeCIO
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
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
