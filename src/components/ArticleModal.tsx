import { useEffect, useRef, useState } from 'react';
import { X, Clock, Share2, BookOpen, ChevronUp, Quote, Sparkles, TrendingUp, ArrowLeft, Bookmark, Play, Volume2, Eye, Zap } from 'lucide-react';
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
    const [isLoaded, setIsLoaded] = useState(false);
    const [showHeroContent, setShowHeroContent] = useState(false);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
            // Trigger animations
            setTimeout(() => setIsLoaded(true), 100);
            setTimeout(() => setShowHeroContent(true), 400);
        } else {
            setIsLoaded(false);
            setShowHeroContent(false);
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
            className={`fixed inset-0 z-[100] transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleBackdropClick}
        >
            {/* Cinematic Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--color-zinc-900)]/50 z-[120] backdrop-blur-sm">
                <div
                    className="h-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-editorial-gold)] transition-all duration-200 shadow-[0_0_20px_rgba(201,165,92,0.5)]"
                    style={{ width: `${readProgress}%` }}
                />
                {/* Glowing dot at progress end */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_rgba(201,165,92,0.8)] transition-all duration-200"
                    style={{ left: `calc(${readProgress}% - 4px)` }}
                />
            </div>

            {/* Premium Floating Navigation */}
            <div className="fixed top-4 left-0 right-0 z-[115] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className={`flex items-center justify-between transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                        <button
                            onClick={onClose}
                            className="group flex items-center gap-3 px-5 py-3 bg-[var(--color-zinc-950)]/80 backdrop-blur-xl rounded-full border border-[var(--color-zinc-800)]/50 hover:border-[var(--color-accent)]/30 transition-all duration-300 hover:bg-[var(--color-zinc-900)]/90"
                        >
                            <ArrowLeft size={18} className="text-[var(--color-zinc-400)] group-hover:text-[var(--color-accent)] group-hover:-translate-x-1 transition-all" />
                            <span className="text-sm font-medium text-[var(--color-zinc-300)] group-hover:text-white transition-colors">Back</span>
                        </button>

                        <div className="flex items-center gap-3">
                            {/* Reading Stats */}
                            <div className="hidden md:flex items-center gap-4 px-5 py-2.5 bg-[var(--color-zinc-950)]/80 backdrop-blur-xl rounded-full border border-[var(--color-zinc-800)]/50">
                                <div className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)]">
                                    <Eye size={14} className="text-[var(--color-accent)]" />
                                    <span>{Math.round(readProgress)}%</span>
                                </div>
                                <div className="w-px h-4 bg-[var(--color-zinc-700)]" />
                                <div className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)]">
                                    <Clock size={14} className="text-[var(--color-accent)]" />
                                    <span>{article.readTime} min</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigator.share?.({ title: article.title, text: article.subtitle })}
                                className="p-3 bg-[var(--color-zinc-950)]/80 backdrop-blur-xl rounded-full border border-[var(--color-zinc-800)]/50 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all duration-300"
                            >
                                <Share2 size={18} />
                            </button>
                            <button
                                onClick={onClose}
                                className="p-3 bg-[var(--color-zinc-950)]/80 backdrop-blur-xl rounded-full border border-[var(--color-zinc-800)]/50 text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-800)] transition-all duration-300"
                                aria-label="Close article"
                            >
                                <X size={18} />
                            </button>
                        </div>
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
                        CINEMATIC HERO SECTION
                    ====================================== */}
                    <section className="relative h-[75vh] min-h-[550px] max-h-[800px] overflow-hidden">
                        {/* Full-Bleed Background Image with Ken Burns Effect */}
                        <div className={`absolute inset-0 transition-all duration-[2s] ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Cinematic Overlay System - Netflix Style */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/60 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-zinc-950)]/80 via-transparent to-[var(--color-zinc-950)]/30" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-zinc-950)]/80 via-transparent to-transparent opacity-90" />

                        {/* Animated Vignette */}
                        <div className="absolute inset-0 shadow-[inset_0_0_200px_60px_rgba(10,12,16,0.9)]" />

                        {/* Floating Particles Effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[100px] animate-pulse-slow" />
                            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[var(--color-accent)]/3 rounded-full blur-[80px] animate-pulse-slow delay-1000" />
                        </div>

                        {/* Hero Content - Positioned at Bottom */}
                        <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-20 transition-all duration-1000 delay-300 ${showHeroContent ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            <div className="max-w-4xl">
                                {/* Premium Badges Row */}
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="netflix-category-badge">
                                        <span className="relative z-10">{article.category}</span>
                                    </span>
                                    {article.featured && (
                                        <span className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 shadow-lg">
                                            <Sparkles size={12} className="text-[var(--color-accent)]" />
                                            Editor's Pick
                                        </span>
                                    )}
                                    <span className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[var(--color-zinc-900)]/60 backdrop-blur-md text-[var(--color-zinc-300)] rounded-lg border border-[var(--color-zinc-700)]/50">
                                        <Clock size={12} />
                                        {article.readTime} min read
                                    </span>
                                </div>

                                {/* Cinematic Title with Text Shadow */}
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                                    {article.title}
                                </h1>

                                {/* Subtitle with Elegant Styling */}
                                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-display italic max-w-3xl leading-relaxed drop-shadow-lg">
                                    {article.subtitle}
                                </p>

                                {/* Author Row */}
                                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                                    <div className="relative">
                                        {article.authorImage ? (
                                            <img
                                                src={article.authorImage}
                                                alt={article.author}
                                                className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-accent)]/50 shadow-lg shadow-black/50"
                                            />
                                        ) : (
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[var(--color-zinc-950)] font-bold text-lg shadow-lg shadow-[var(--color-accent)]/20 border-2 border-[var(--color-accent)]/30">
                                                {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                            </div>
                                        )}
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-lg">
                                            <Zap size={10} className="text-[var(--color-zinc-950)]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-base font-semibold text-white">{article.author}</div>
                                        <div className="text-sm text-white/60">
                                            {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions - Netflix Style */}
                                <div className="flex flex-wrap items-center gap-4 mt-8">
                                    <button className="group flex items-center gap-3 px-8 py-4 bg-white text-[var(--color-zinc-950)] font-bold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20">
                                        <Play size={20} className="fill-current" />
                                        Read Now
                                    </button>
                                    <button className="flex items-center gap-3 px-6 py-4 bg-[var(--color-zinc-800)]/80 backdrop-blur-md text-white font-semibold rounded-lg border border-[var(--color-zinc-600)]/50 hover:bg-[var(--color-zinc-700)] transition-all duration-300">
                                        <Bookmark size={18} />
                                        Save for Later
                                    </button>
                                    <button className="flex items-center justify-center w-14 h-14 bg-[var(--color-zinc-800)]/60 backdrop-blur-md rounded-full border border-[var(--color-zinc-600)]/50 hover:bg-[var(--color-zinc-700)] transition-all duration-300" title="Listen to Article">
                                        <Volume2 size={20} className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className={`absolute bottom-8 right-8 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${showHeroContent ? 'opacity-100' : 'opacity-0'}`}>
                            <span className="text-xs text-white/50 uppercase tracking-widest rotate-90 origin-center translate-x-8 mb-8">Scroll</span>
                            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse-slow" />
                        </div>
                    </section>

                    {/* ======================================
                        ARTICLE BODY - PREMIUM READING EXPERIENCE
                    ====================================== */}
                    <section className="relative bg-[var(--color-zinc-950)]">
                        {/* Premium Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[var(--color-accent)]/10" />
                        <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[var(--color-accent)]/10" />

                        {/* Main Content Grid */}
                        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-24">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                                {/* Main Article Content */}
                                <article className="lg:col-span-8">
                                    {/* Lead Paragraph - Drop Cap */}
                                    {article.content[0] && (
                                        <div className="relative mb-12">
                                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent)]/30 to-transparent rounded-full" />
                                            <p className="text-xl md:text-2xl text-[var(--color-zinc-200)] leading-[1.8] pl-8 first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-[var(--color-accent)] first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none first-letter:drop-shadow-[0_0_20px_rgba(201,165,92,0.3)]">
                                                {article.content[0]}
                                            </p>
                                        </div>
                                    )}

                                    {/* Elegant Divider */}
                                    <div className="flex items-center gap-6 my-12">
                                        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent" />
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(201,165,92,0.5)]" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/60" />
                                            <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]/30" />
                                        </div>
                                        <div className="flex-1 h-px bg-gradient-to-l from-[var(--color-accent)]/40 to-transparent" />
                                    </div>

                                    {/* Content Paragraphs with Premium Styling */}
                                    <div className="space-y-8">
                                        {article.content.slice(1).map((paragraph, index) => {
                                            // Add pull quote after 2nd paragraph
                                            if (index === 1 && article.content.length > 3) {
                                                return (
                                                    <div key={index}>
                                                        <p className="text-lg text-[var(--color-zinc-300)] leading-[1.9]">
                                                            {paragraph}
                                                        </p>

                                                        {/* Premium Pull Quote - Netflix Aesthetic */}
                                                        <blockquote className="my-16 relative">
                                                            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-[var(--color-accent)]/3 rounded-2xl" />
                                                            <div className="relative pl-8 border-l-4 border-[var(--color-accent)]">
                                                                <Quote className="absolute -left-6 -top-2 w-12 h-12 text-[var(--color-accent)]/20" />
                                                                <p className="text-2xl md:text-3xl font-display italic text-[var(--color-zinc-100)] leading-[1.5]">
                                                                    "{article.insights[0]}"
                                                                </p>
                                                            </div>
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

                                                        {/* Premium Insight Card - Technology Infused */}
                                                        <div className="my-16 relative group">
                                                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-accent)]/20 via-[var(--color-accent)]/10 to-[var(--color-accent)]/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                                            <div className="relative p-8 md:p-10 bg-gradient-to-br from-[var(--color-zinc-900)] via-[var(--color-zinc-900)]/95 to-[var(--color-zinc-950)] rounded-2xl border border-[var(--color-accent)]/20 overflow-hidden">
                                                                {/* Tech Pattern Background */}
                                                                <div className="absolute inset-0 opacity-5">
                                                                    <div className="absolute top-0 right-0 w-64 h-64 tech-pattern bg-repeat" />
                                                                </div>
                                                                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
                                                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-accent)]/3 rounded-full blur-2xl" />

                                                                <div className="flex items-start gap-5 relative">
                                                                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/20 shadow-lg shadow-[var(--color-accent)]/10">
                                                                        <TrendingUp className="w-7 h-7 text-[var(--color-accent)]" />
                                                                    </div>
                                                                    <div>
                                                                        <div className="flex items-center gap-2 mb-3">
                                                                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Key Insight</h4>
                                                                            <div className="w-8 h-px bg-[var(--color-accent)]/40" />
                                                                        </div>
                                                                        <p className="text-xl text-[var(--color-zinc-100)] font-medium leading-relaxed">
                                                                            {article.insights[1] || article.insights[0]}
                                                                        </p>
                                                                    </div>
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
                                    <div className="mt-20 pt-12 border-t border-[var(--color-zinc-800)]">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            {/* Tags */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-sm text-[var(--color-zinc-500)] mr-2">Topics:</span>
                                                <span className="px-4 py-2 text-sm bg-[var(--color-zinc-800)]/80 text-[var(--color-zinc-300)] rounded-lg capitalize hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors cursor-pointer border border-[var(--color-zinc-700)]/50">
                                                    {article.category}
                                                </span>
                                                <span className="px-4 py-2 text-sm bg-[var(--color-zinc-800)]/80 text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors cursor-pointer border border-[var(--color-zinc-700)]/50">
                                                    AI Strategy
                                                </span>
                                                <span className="px-4 py-2 text-sm bg-[var(--color-zinc-800)]/80 text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors cursor-pointer border border-[var(--color-zinc-700)]/50">
                                                    Enterprise
                                                </span>
                                            </div>

                                            {/* Share */}
                                            <button
                                                onClick={() => navigator.share?.({ title: article.title, text: article.subtitle })}
                                                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300"
                                            >
                                                <Share2 size={16} />
                                                Share Article
                                            </button>
                                        </div>
                                    </div>
                                </article>

                                {/* Sidebar */}
                                <aside className="lg:col-span-4">
                                    <div className="lg:sticky lg:top-28 space-y-6">
                                        {/* Key Takeaways Card - Premium */}
                                        <div className="netflix-sidebar-card">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-3 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/10">
                                                    <BookOpen size={20} className="text-[var(--color-accent)]" />
                                                </div>
                                                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                    Key Takeaways
                                                </h3>
                                            </div>
                                            <ul className="space-y-5">
                                                {article.insights.map((insight, index) => (
                                                    <li key={index} className="flex gap-4 group">
                                                        <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-zinc-950)] text-sm font-bold shadow-lg shadow-[var(--color-accent)]/20 group-hover:scale-110 transition-transform">
                                                            {index + 1}
                                                        </span>
                                                        <span className="text-sm text-[var(--color-zinc-300)] leading-relaxed pt-1.5">
                                                            {insight}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Author Card - Premium */}
                                        <div className="netflix-sidebar-card">
                                            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-zinc-500)] mb-5">
                                                About the Author
                                            </h3>
                                            <div className="flex items-center gap-4">
                                                {article.authorImage ? (
                                                    <img
                                                        src={article.authorImage}
                                                        alt={article.author}
                                                        className="w-16 h-16 rounded-xl object-cover border-2 border-[var(--color-accent)]/30 shadow-lg"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-[var(--color-zinc-950)] font-bold text-xl shadow-lg shadow-[var(--color-accent)]/20">
                                                        {article.author.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-semibold text-[var(--color-zinc-100)] text-lg">{article.author}</div>
                                                    <div className="text-sm text-[var(--color-zinc-500)]">VibeCIO Editorial</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Related Articles - Premium */}
                                        {relatedArticles.length > 0 && (
                                            <div className="netflix-sidebar-card">
                                                <div className="flex items-center gap-3 mb-5">
                                                    <div className="p-3 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/10">
                                                        <TrendingUp size={20} className="text-[var(--color-accent)]" />
                                                    </div>
                                                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                        Continue Reading
                                                    </h3>
                                                </div>
                                                <div className="space-y-4">
                                                    {relatedArticles.map((relatedArticle) => (
                                                        <div
                                                            key={relatedArticle.id}
                                                            className="group p-4 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/30 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-zinc-800)]/50 transition-all duration-300 cursor-pointer"
                                                        >
                                                            <div className="flex items-start gap-4">
                                                                {relatedArticle.image && (
                                                                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-[var(--color-zinc-700)]/50">
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
                                                                    <div className="flex items-center gap-2 mt-2 text-xs text-[var(--color-zinc-500)]">
                                                                        <Clock size={10} />
                                                                        <span>{relatedArticle.readTime} min</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Newsletter CTA - Premium */}
                                        <div className="relative rounded-2xl overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 via-[var(--color-accent)]/5 to-[var(--color-zinc-900)]" />
                                            <div className="absolute inset-0 border border-[var(--color-accent)]/20 rounded-2xl" />
                                            <div className="relative p-6">
                                                <h3 className="font-display text-xl font-semibold text-[var(--color-zinc-100)] mb-3">
                                                    Stay Ahead of the Curve
                                                </h3>
                                                <p className="text-sm text-[var(--color-zinc-400)] mb-6">
                                                    Get exclusive insights on AI, enterprise tech, and leadership delivered weekly.
                                                </p>
                                                <button className="w-full py-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-zinc-950)] font-bold rounded-xl hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300">
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

                {/* Scroll to Top - Premium */}
                {readProgress > 20 && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-zinc-950)] rounded-full shadow-2xl shadow-[var(--color-accent)]/40 hover:scale-110 transition-transform animate-fade-in z-[110]"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp size={24} />
                    </button>
                )}
            </div>
        </div>
    );
}
