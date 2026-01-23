import { useEffect, useRef, useState } from 'react';
import { X, Briefcase, Award, ArrowLeft, Share2, ExternalLink, Linkedin, TrendingUp, Users, Building2 } from 'lucide-react';
import type { Leader } from '../types';
import { articles } from '../data/content';

interface LeaderModalProps {
    leader: Leader | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function LeaderModal({ leader, isOpen, onClose }: LeaderModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

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
            setScrollProgress(Math.min(100, Math.max(0, progress)));
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

    // Filter articles that might be related to this leader
    const getRelatedArticles = () => {
        if (!leader) return [];
        const leaderExpertise = leader.expertise.map(e => e.toLowerCase());
        return articles
            .filter(article => {
                const articleText = `${article.title} ${article.subtitle} ${article.category}`.toLowerCase();
                return leaderExpertise.some(exp =>
                    articleText.includes(exp.split(' ')[0]) ||
                    exp.includes(article.category)
                );
            })
            .slice(0, 3);
    };

    if (!isOpen || !leader) return null;

    const relatedArticles = getRelatedArticles();

    return (
        <div
            className="fixed inset-0 z-[100] animate-fade-in"
            onClick={handleBackdropClick}
        >
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-zinc-900)] z-[110]">
                <div
                    className="h-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent)] transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Navigation Header */}
            <div className="fixed top-0 left-0 right-0 z-[105] bg-gradient-to-b from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/80 to-transparent pt-1">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Leaders</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigator.share?.({ title: leader.name, text: `${leader.title} at ${leader.company}` })}
                            className="p-2.5 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] hover:bg-[var(--color-zinc-800)]/50 rounded-full transition-all"
                        >
                            <Share2 size={18} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2.5 bg-[var(--color-zinc-800)]/60 backdrop-blur-sm text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-700)] transition-all rounded-full"
                            aria-label="Close modal"
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
                        HERO SECTION - Leader Profile Header
                    ====================================== */}
                    <section className="relative min-h-[45vh] overflow-hidden">
                        {/* Abstract Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-900)] via-[var(--color-zinc-950)] to-[var(--color-zinc-900)]" />

                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/[0.02] rounded-full blur-3xl" />

                        {/* Grid Pattern Overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.02]"
                            style={{
                                backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
                                backgroundSize: '50px 50px'
                            }}
                        />

                        {/* Hero Content */}
                        <div className="relative pt-28 pb-16 px-8 md:px-12 lg:px-16">
                            <div className="max-w-4xl mx-auto">
                                {/* Leader Avatar & Info */}
                                <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
                                    {/* Large Avatar with Premium Styling */}
                                    <div className="relative group">
                                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent-hover)] to-[var(--color-accent)] flex items-center justify-center shadow-2xl shadow-[var(--color-accent)]/20 transform group-hover:scale-105 transition-transform duration-500">
                                            <span className="text-5xl md:text-6xl font-bold text-[var(--color-zinc-950)]">
                                                {leader.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        {/* Status Indicator */}
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-[var(--color-zinc-950)] flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Leader Details */}
                                    <div className="flex-1">
                                        {/* Title Badge */}
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                                            <Briefcase size={14} className="text-[var(--color-accent)]" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
                                                Featured Leader
                                            </span>
                                        </div>

                                        {/* Name */}
                                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white">
                                            {leader.name}
                                        </h1>

                                        {/* Role & Company */}
                                        <div className="flex flex-wrap items-center gap-4 text-lg md:text-xl text-[var(--color-zinc-300)]">
                                            <span className="font-semibold">{leader.title}</span>
                                            <span className="text-[var(--color-zinc-600)]">at</span>
                                            <span className="flex items-center gap-2 text-[var(--color-accent)]">
                                                <Building2 size={18} />
                                                {leader.company}
                                            </span>
                                        </div>

                                        {/* Quick Actions */}
                                        <div className="flex items-center gap-3 mt-6">
                                            <button className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                                                <Linkedin size={16} />
                                                Connect
                                            </button>
                                            <button className="flex items-center gap-2 px-5 py-2.5 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                                <ExternalLink size={16} />
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ======================================
                        LEADER BODY - Content Sections
                    ====================================== */}
                    <section className="bg-[var(--color-zinc-950)] relative">
                        {/* Decorative accent line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

                        <div className="max-w-6xl mx-auto px-8 py-12 md:py-16">
                            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Main Content */}
                                <article className="lg:col-span-8">
                                    {/* Biography Section */}
                                    <div className="mb-12">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl">
                                                <Users size={18} className="text-[var(--color-accent)]" />
                                            </div>
                                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                About
                                            </h3>
                                        </div>

                                        {/* Bio with Drop Cap */}
                                        <p className="text-xl md:text-2xl text-[var(--color-zinc-200)] leading-[1.75] font-display first-letter:text-7xl first-letter:font-bold first-letter:text-[var(--color-accent)] first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none">
                                            {leader.bio}
                                        </p>
                                    </div>

                                    {/* Decorative Divider */}
                                    <div className="flex items-center gap-4 mb-12">
                                        <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-accent)]/40 to-transparent" />
                                        <div className="w-2 h-2 rotate-45 bg-[var(--color-accent)]" />
                                        <div className="flex-1 h-px bg-gradient-to-l from-[var(--color-accent)]/40 to-transparent" />
                                    </div>

                                    {/* Related Articles Section */}
                                    {relatedArticles.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2.5 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl">
                                                    <TrendingUp size={18} className="text-[var(--color-accent)]" />
                                                </div>
                                                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                    Related Insights
                                                </h3>
                                            </div>

                                            <div className="space-y-4">
                                                {relatedArticles.map((article) => (
                                                    <div
                                                        key={article.id}
                                                        className="p-5 rounded-xl bg-[var(--color-zinc-900)]/50 border border-[var(--color-zinc-800)]/50 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-zinc-800)]/30 transition-all cursor-pointer group"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                                {article.image ? (
                                                                    <img
                                                                        src={article.image}
                                                                        alt={article.title}
                                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent flex items-center justify-center">
                                                                        <TrendingUp className="text-[var(--color-accent)]" size={20} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-1 block">
                                                                    {article.category}
                                                                </span>
                                                                <h4 className="font-display text-lg font-semibold text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                                                                    {article.title}
                                                                </h4>
                                                                <p className="text-sm text-[var(--color-zinc-500)] mt-1">
                                                                    {article.readTime} min read
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </article>

                                {/* Sidebar */}
                                <aside className="lg:col-span-4">
                                    <div className="lg:sticky lg:top-24 space-y-8">
                                        {/* Expertise Card */}
                                        <div className="glass-premium rounded-2xl p-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="p-2.5 bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 rounded-xl">
                                                    <Award size={18} className="text-[var(--color-accent)]" />
                                                </div>
                                                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                                                    Areas of Expertise
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {leader.expertise.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="group flex items-center gap-2 px-4 py-2.5 text-sm bg-[var(--color-zinc-800)]/50 text-[var(--color-zinc-200)] rounded-xl border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] transition-all cursor-pointer"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] group-hover:scale-150 transition-transform" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quick Stats */}
                                        <div className="glass-premium rounded-2xl p-6">
                                            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-zinc-500)] mb-5">
                                                Profile Stats
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-[var(--color-zinc-400)]">Articles Featured</span>
                                                    <span className="text-lg font-bold text-[var(--color-zinc-100)]">{relatedArticles.length}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-[var(--color-zinc-400)]">Expertise Areas</span>
                                                    <span className="text-lg font-bold text-[var(--color-zinc-100)]">{leader.expertise.length}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-[var(--color-zinc-400)]">Industry Impact</span>
                                                    <span className="text-sm font-semibold text-emerald-400">High</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Card */}
                                        <div className="relative rounded-2xl p-6 border border-[var(--color-accent)]/20 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 via-transparent to-[var(--color-accent)]/5" />
                                            <div className="relative">
                                                <h3 className="font-display text-xl font-semibold text-[var(--color-zinc-100)] mb-2">
                                                    Connect With Leaders
                                                </h3>
                                                <p className="text-sm text-[var(--color-zinc-400)] mb-5">
                                                    Subscribe to VibeCIO for exclusive insights from enterprise technology leaders.
                                                </p>
                                                <button className="w-full py-3.5 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                                                    Subscribe Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
