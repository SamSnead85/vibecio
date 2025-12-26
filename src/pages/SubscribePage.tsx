import { useState } from 'react';
import { Mail, Check, Sparkles, BookOpen, Users, Zap } from 'lucide-react';

export default function SubscribePage() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
    };

    const benefits = [
        {
            icon: BookOpen,
            title: 'Weekly Deep Dives',
            description: 'Curated analysis of AI trends and enterprise strategy',
        },
        {
            icon: Users,
            title: 'CIO Insights',
            description: 'Exclusive interviews with technology leaders',
        },
        {
            icon: Zap,
            title: 'Early Access',
            description: 'Be first to read our research and reports',
        },
        {
            icon: Sparkles,
            title: 'No Spam',
            description: 'Quality content, unsubscribe anytime',
        },
    ];

    return (
        <div className="min-h-screen py-24">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                        <Mail size={18} />
                        <span className="text-sm font-medium">Newsletter</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        Stay Ahead of the <span className="text-[var(--color-accent)]">Curve</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)] max-w-2xl mx-auto">
                        Join thousands of technology leaders who receive our weekly insights on AI transformation, vibe coding, and the future of enterprise technology.
                    </p>
                </div>

                {/* Subscribe Form */}
                <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[var(--color-zinc-700)]/50 mb-16">
                    {isSubscribed ? (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                <Check className="text-green-400" size={40} />
                            </div>
                            <h2 className="text-2xl font-semibold mb-2">You're In!</h2>
                            <p className="text-[var(--color-zinc-400)]">
                                Check your inbox to confirm your subscription.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-4 rounded-xl bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all text-lg"
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-4 rounded-xl bg-[var(--color-accent)] text-black font-semibold text-lg hover:bg-[var(--color-accent-hover)] transition-colors whitespace-nowrap"
                                >
                                    Subscribe Free
                                </button>
                            </div>
                            <p className="text-sm text-[var(--color-zinc-500)] text-center">
                                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                            </p>
                        </form>
                    )}
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/50"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                                    <Icon className="text-[var(--color-accent)]" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-[var(--color-zinc-400)]">{benefit.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Social Proof */}
                <div className="text-center mt-16">
                    <p className="text-sm text-[var(--color-zinc-500)] mb-4">Trusted by technology leaders at</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 text-[var(--color-zinc-600)]">
                        <span className="text-lg font-semibold">Google</span>
                        <span className="text-lg font-semibold">Microsoft</span>
                        <span className="text-lg font-semibold">Amazon</span>
                        <span className="text-lg font-semibold">Meta</span>
                        <span className="text-lg font-semibold">Netflix</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
