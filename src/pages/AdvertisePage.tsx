import { Building2, Users, DollarSign, BarChart3, Mail, ArrowRight, CheckCircle, Globe, TrendingUp, Eye, Target } from 'lucide-react';

// Advertising packages
const packages = [
    {
        name: 'Standard',
        price: 5000,
        period: 'month',
        features: [
            'Display ads on article pages',
            '100,000 impressions/month',
            'Basic analytics dashboard',
            'Email support'
        ]
    },
    {
        name: 'Premium',
        price: 15000,
        period: 'month',
        recommended: true,
        features: [
            'Homepage banner placement',
            '500,000 impressions/month',
            'Sponsored article opportunity',
            'Newsletter inclusion (1x/month)',
            'Advanced analytics & reporting',
            'Dedicated account manager'
        ]
    },
    {
        name: 'Enterprise',
        price: null,
        period: 'custom',
        features: [
            'Custom content partnership',
            'Exclusive category sponsorship',
            'Event sponsorship opportunities',
            'Podcast sponsorship',
            'Custom research reports',
            'Strategic advisory sessions'
        ]
    }
];

// Stats
const stats = [
    { value: '1.2M+', label: 'Monthly Readers' },
    { value: '500K+', label: 'Newsletter Subscribers' },
    { value: '85%', label: 'C-Suite Decision Makers' },
    { value: '72%', label: 'Purchase Influence' }
];

// Audience demographics
const demographics = [
    { icon: Building2, label: 'Fortune 1000', value: '45%' },
    { icon: Users, label: 'Enterprise IT', value: '68%' },
    { icon: DollarSign, label: '$100K+ Budget Authority', value: '73%' },
    { icon: Globe, label: 'Global Reach', value: '120+ Countries' }
];

export default function AdvertisePage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                                <TrendingUp className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Advertise</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Reach Enterprise<br />Decision Makers
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-3xl mb-10">
                            Connect with CIOs, CTOs, and technology leaders at the world's
                            largest enterprises through VibeCIO's premium advertising solutions.
                        </p>

                        <a
                            href="#packages"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                        >
                            View Packages
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="py-12 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience Demographics */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Our Audience
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] max-w-2xl mx-auto">
                            VibeCIO readers are enterprise technology leaders with significant
                            purchasing authority and strategic influence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {demographics.map((demo, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-2xl p-6 text-center stagger-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                                    <demo.icon className="text-[var(--color-accent)]" size={26} />
                                </div>
                                <div className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-1">
                                    {demo.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{demo.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advertising Solutions */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Advertising Solutions
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            Multiple touchpoints to engage your target audience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { icon: Eye, title: 'Display Advertising', desc: 'Premium placements across all pages with viewability guarantees.' },
                            { icon: Mail, title: 'Newsletter Sponsorship', desc: 'Exclusive sponsorship of our daily and weekly newsletters.' },
                            { icon: BarChart3, title: 'Sponsored Content', desc: 'Partner with our editorial team for thought leadership articles.' },
                            { icon: Users, title: 'Event Sponsorship', desc: 'Sponsor our conferences, webinars, and CIO roundtables.' },
                            { icon: Target, title: 'Lead Generation', desc: 'Capture high-intent leads through gated content programs.' },
                            { icon: Globe, title: 'Custom Programs', desc: 'Bespoke marketing partnerships tailored to your objectives.' }
                        ].map((solution, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-2xl p-6 hover:border-[var(--color-accent)]/30 transition-all stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                                    <solution.icon className="text-[var(--color-accent)]" size={24} />
                                </div>
                                <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2">
                                    {solution.title}
                                </h3>
                                <p className="text-sm text-[var(--color-zinc-400)]">
                                    {solution.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section id="packages" className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Advertising Packages
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            Choose the package that fits your marketing objectives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl overflow-hidden ${pkg.recommended
                                        ? 'border-2 border-[var(--color-accent)] bg-gradient-to-b from-[var(--color-accent)]/10 to-transparent'
                                        : 'glass-premium'
                                    }`}
                            >
                                {pkg.recommended && (
                                    <div className="absolute top-0 left-0 right-0 py-2 bg-[var(--color-accent)] text-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-zinc-950)]">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className={`p-8 ${pkg.recommended ? 'pt-14' : ''}`}>
                                    <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-2">
                                        {pkg.name}
                                    </h3>

                                    <div className="mb-6">
                                        {pkg.price ? (
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-display font-bold text-[var(--color-accent)]">
                                                    ${pkg.price.toLocaleString()}
                                                </span>
                                                <span className="text-[var(--color-zinc-500)]">/{pkg.period}</span>
                                            </div>
                                        ) : (
                                            <div className="text-2xl font-display font-bold text-[var(--color-accent)]">
                                                Custom Pricing
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={16} />
                                                <span className="text-sm text-[var(--color-zinc-300)]">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-3 rounded-xl font-semibold transition-colors ${pkg.recommended
                                                ? 'bg-[var(--color-accent)] text-[var(--color-zinc-950)] hover:bg-[var(--color-accent-hover)]'
                                                : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-700)] border border-[var(--color-zinc-700)]'
                                            }`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Mail className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Contact our advertising team to discuss how VibeCIO can help
                            you reach enterprise technology decision makers.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:advertise@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Contact Sales
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="/media-kit.pdf"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Download Media Kit
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
