import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Sparkles, TrendingUp, Clock, Users, Brain, Rocket, Shield, LineChart, Globe } from 'lucide-react';

// Phase 1081-1090: Enhanced CTA Banner Component
// Contextual call-to-action banners with animations

interface CTABannerProps {
    variant?: 'newsletter' | 'premium' | 'webinar' | 'report';
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
}

const bannerVariants = {
    newsletter: {
        icon: <Zap className="w-6 h-6" />,
        title: 'Stay Ahead of the Curve',
        description: 'Get exclusive AI insights and CIO perspectives delivered weekly.',
        ctaText: 'Subscribe Free',
        ctaLink: '/subscribe',
        gradient: 'from-blue-600 to-purple-600',
        accentColor: 'text-blue-400'
    },
    premium: {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Unlock Premium Content',
        description: 'Access exclusive whitepapers, webinars, and in-depth analysis.',
        ctaText: 'Start Free Trial',
        ctaLink: '/subscribe',
        gradient: 'from-amber-500 to-orange-600',
        accentColor: 'text-amber-400'
    },
    webinar: {
        icon: <Users className="w-6 h-6" />,
        title: 'Upcoming Live Webinar',
        description: 'Join 500+ CIOs for "AI Governance in 2026" - Jan 30th at 2PM ET',
        ctaText: 'Register Now',
        ctaLink: '/webinars',
        gradient: 'from-emerald-500 to-teal-600',
        accentColor: 'text-emerald-400'
    },
    report: {
        icon: <LineChart className="w-6 h-6" />,
        title: 'New Research Report',
        description: 'Download the 2026 Enterprise AI Governance Framework',
        ctaText: 'Get Report',
        ctaLink: '/whitepapers',
        gradient: 'from-purple-500 to-pink-600',
        accentColor: 'text-purple-400'
    }
};

export default function CTABanner({ variant = 'newsletter', title, description, ctaText, ctaLink }: CTABannerProps) {
    const config = bannerVariants[variant];
    const displayTitle = title || config.title;
    const displayDesc = description || config.description;
    const displayCta = ctaText || config.ctaText;
    const displayLink = ctaLink || config.ctaLink;

    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-10`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={`absolute w-1 h-1 rounded-full bg-white/20 animate-float`} style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%`, animationDelay: `${i * 0.5}s` }} />
                ))}
            </div>

            <div className="container relative py-12 md:py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Content */}
                    <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                            {config.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-100 mb-2">{displayTitle}</h3>
                            <p className="text-zinc-400 max-w-lg">{displayDesc}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link to={displayLink} className={`group flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${config.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-${variant === 'newsletter' ? 'blue' : variant === 'premium' ? 'amber' : variant === 'webinar' ? 'emerald' : 'purple'}-500/20 transition-all hover:scale-105`}>
                        {displayCta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Stats - Optional */}
                {variant === 'newsletter' && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: <Users className="w-4 h-4" />, value: '156K+', label: 'Subscribers' },
                                { icon: <TrendingUp className="w-4 h-4" />, value: '98%', label: 'Open Rate' },
                                { icon: <Globe className="w-4 h-4" />, value: '150+', label: 'Countries' },
                                { icon: <Clock className="w-4 h-4" />, value: 'Weekly', label: 'Delivery' }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-white/10 ${config.accentColor}`}>{stat.icon}</div>
                                    <div>
                                        <div className="text-lg font-bold text-zinc-100">{stat.value}</div>
                                        <div className="text-xs text-zinc-500">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

// Inline Banner variant for article pages
export function InlineCTABanner() {
    return (
        <div className="my-12 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-amber-600/5 border border-accent/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-lg font-semibold text-zinc-100 mb-1">Enjoying this article?</h4>
                    <p className="text-sm text-zinc-400">Subscribe to get more insights like this delivered to your inbox.</p>
                </div>
                <Link to="/subscribe" className="btn-primary whitespace-nowrap">
                    <Rocket className="w-4 h-4" />Subscribe Now
                </Link>
            </div>
        </div>
    );
}

// Floating Banner for exit intent
export function FloatingCTABanner({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
            <div className="glass-card rounded-2xl p-6 shadow-2xl border-accent/20 animate-slide-up">
                <button onClick={onClose} className="absolute top-3 right-3 p-1 text-zinc-500 hover:text-zinc-100">×</button>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-zinc-950" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold text-zinc-100">Don't miss out!</h4>
                        <p className="text-sm text-zinc-400">Join 156K+ tech leaders getting AI insights weekly.</p>
                    </div>
                    <Link to="/subscribe" className="btn-primary text-sm">Subscribe</Link>
                </div>
            </div>
        </div>
    );
}
