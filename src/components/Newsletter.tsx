import { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <section id="newsletter" className="section border-t border-[var(--color-zinc-800)]">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                        <Mail className="text-[var(--color-accent)]" size={28} />
                    </div>

                    {/* Headline */}
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                        Stay Ahead of the <span className="text-gradient-accent">Vibe</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                        Weekly insights on AI transformation, agentic workflows, and the future of enterprise technology.
                        No spam. Unsubscribe anytime.
                    </p>

                    {/* Form */}
                    {isSubmitted ? (
                        <div className="flex items-center justify-center gap-3 p-4 glass-card rounded-lg text-[var(--color-accent)] animate-fade-in">
                            <Check size={20} />
                            <span className="font-medium">Welcome to the Vibe. Check your inbox.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-5 py-4 bg-[var(--color-zinc-900)] border border-[var(--color-zinc-800)] rounded-lg text-[var(--color-zinc-100)] placeholder:text-[var(--color-zinc-600)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="animate-pulse">Subscribing...</span>
                                ) : (
                                    <>
                                        Subscribe
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
