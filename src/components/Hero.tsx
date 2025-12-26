import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { coverStory } from '../data/content';

interface HeroProps {
    onOpenCoverStory: () => void;
}

export default function Hero({ onOpenCoverStory }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-end pb-16 pt-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-950)] via-[var(--color-zinc-950)]/80 to-[var(--color-zinc-950)]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-zinc-950)]/90 via-transparent to-transparent" />
            </div>

            {/* Animated accent elements */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[var(--color-editorial-gold)]/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-end">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Publication Branding */}
                        <div className="flex items-center gap-4 animate-fade-in">
                            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
                                <Sparkles className="text-[var(--color-accent)]" size={14} />
                                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-zinc-400)]">
                                    Cover Story
                                </span>
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-accent)]/30 to-transparent" />
                            <span className="text-xs font-medium text-[var(--color-zinc-500)]">
                                Issue 001 • Dec 2025
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-in-up">
                            <span className="block text-[var(--color-zinc-100)]">{coverStory.headline.split(' ').slice(0, 2).join(' ')}</span>
                            <span className="block text-[var(--color-accent)] italic">{coverStory.headline.split(' ').slice(2).join(' ')}</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-[var(--color-zinc-300)] font-display italic max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            {coverStory.subheadline}
                        </p>

                        {/* Excerpt */}
                        <p className="text-[var(--color-zinc-400)] leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {coverStory.content.split('\n')[0].substring(0, 180)}...
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <button
                                onClick={onOpenCoverStory}
                                className="btn-primary text-base group"
                            >
                                Read The Cover Story
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                            <span className="text-sm text-[var(--color-zinc-500)]">
                                By {coverStory.author}
                            </span>
                        </div>
                    </div>

                    {/* Quick Stats - Right Side */}
                    <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="glass-card rounded-xl p-6 space-y-4">
                            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)] flex items-center gap-2">
                                <Zap size={14} />
                                This Issue
                            </h3>

                            <div className="grid gap-4">
                                {[
                                    { stat: '82%', label: 'Developer AI Tool Adoption', icon: TrendingUp },
                                    { stat: '$24B', label: 'Projected Market by 2030', icon: TrendingUp },
                                    { stat: '100x', label: 'The Rise of AI Orchestrators', icon: Sparkles },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-[var(--color-zinc-800)]/30 hover:bg-[var(--color-zinc-800)]/50 transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center">
                                            <item.icon className="text-[var(--color-accent)]" size={18} />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-[var(--color-zinc-100)]">{item.stat}</div>
                                            <div className="text-xs text-[var(--color-zinc-500)]">{item.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex flex-col items-center gap-2 text-[var(--color-zinc-600)]">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-gradient-to-b from-[var(--color-zinc-600)] to-transparent" />
                </div>
            </div>
        </section>
    );
}
