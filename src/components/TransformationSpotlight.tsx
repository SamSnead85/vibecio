import { ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import type { TransformationSpotlight as TransformationType } from '../types';

interface TransformationSpotlightProps {
    spotlight: TransformationType;
}

export default function TransformationSpotlight({ spotlight }: TransformationSpotlightProps) {
    return (
        <section id="transformation" className="section bg-gradient-to-b from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]">
            <div className="container">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-12">
                    <ShieldCheck className="text-[var(--color-accent)]" size={24} />
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Transformation Spotlight
                    </h2>
                </div>

                {/* Split Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="animate-fade-in-up">
                        {/* Company tag */}
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded">
                            {spotlight.company}
                        </span>

                        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            {spotlight.title}
                        </h3>

                        <p className="text-lg text-[var(--color-zinc-400)] leading-relaxed mb-8">
                            {spotlight.summary}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {spotlight.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg"
                                >
                                    <TrendingUp size={16} className="text-[var(--color-accent)]" />
                                    <span className="text-sm font-medium text-[var(--color-zinc-200)]">
                                        {stat}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button className="btn-secondary">
                            Read Full Case Study
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Image Placeholder with visual */}
                    <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden glass-card">
                            {/* Abstract visual representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 via-[var(--color-zinc-800)] to-[var(--color-zinc-900)]" />

                            {/* Grid pattern */}
                            <div className="absolute inset-0 opacity-30" style={{
                                backgroundImage: `
                  linear-gradient(to right, var(--color-zinc-700) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--color-zinc-700) 1px, transparent 1px)
                `,
                                backgroundSize: '40px 40px'
                            }} />

                            {/* Central icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/30">
                                    <ShieldCheck size={48} className="text-[var(--color-accent)]" />
                                </div>
                            </div>

                            {/* Corner elements */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[var(--color-accent)]/50" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--color-accent)]/50" />
                        </div>

                        {/* Floating stats card */}
                        <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                            <div className="text-2xl font-bold text-[var(--color-accent)]">Record ROI</div>
                            <div className="text-sm text-[var(--color-zinc-400)]">during Open Enrollment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
