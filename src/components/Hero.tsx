import { ArrowRight } from 'lucide-react';

interface HeroProps {
    onOpenCoverStory: () => void;
}

export default function Hero({ onOpenCoverStory }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-zinc-900)] via-[var(--color-zinc-950)] to-[var(--color-zinc-950)]" />

            {/* Accent glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)] opacity-[0.03] blur-[150px] rounded-full" />

            <div className="container relative z-10 text-center">
                {/* Issue tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full animate-fade-in">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse-slow" />
                    <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-zinc-400)]">
                        Issue 001 • December 2025
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-6 animate-fade-in-up">
                    <span className="text-gradient">The Age of</span>
                    <br />
                    <span className="text-gradient-accent italic">Vibe Coding</span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-zinc-400)] mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Where Enterprise IT Leaders decode the future of AI, Agentic Workflows,
                    and the new paradigm of software creation.
                </p>

                {/* CTA Button */}
                <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={onOpenCoverStory}
                        className="btn-primary text-lg"
                    >
                        Read The Cover Story
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <div className="w-6 h-10 border-2 border-[var(--color-zinc-700)] rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-[var(--color-zinc-500)] rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}
