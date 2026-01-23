import { Users, MessageCircle, Shield, Zap, ArrowRight, CheckCircle, Star, Lock, Crown, Globe } from 'lucide-react';

// Community features
const communityFeatures = [
    { icon: MessageCircle, title: 'Discussion Forums', description: 'Engage in peer-to-peer conversations on strategy, technology, and leadership challenges.' },
    { icon: Shield, title: 'Private Networking', description: 'Connect with verified CIOs and technology executives in a confidential environment.' },
    { icon: Zap, title: 'Expert AMAs', description: 'Exclusive Ask Me Anything sessions with industry leaders and analysts.' },
    { icon: Users, title: 'Peer Groups', description: 'Join industry and role-specific groups for targeted discussions and benchmarking.' }
];

// Membership tiers
const membershipTiers = [
    {
        name: 'Reader',
        price: 'Free',
        description: 'Access to basic community features',
        features: ['View public discussions', 'Read research summaries', 'Newsletter access', 'Event announcements'],
        cta: 'Join Free',
        highlighted: false
    },
    {
        name: 'Professional',
        price: '$29/mo',
        description: 'Full access for IT professionals',
        features: ['All Reader features', 'Participate in forums', 'Download resources', 'Networking directory', 'Monthly webinars'],
        cta: 'Start Free Trial',
        highlighted: true
    },
    {
        name: 'Executive',
        price: '$99/mo',
        description: 'Premium access for C-suite leaders',
        features: ['All Professional features', 'Private peer groups', 'Executive AMAs', 'Custom benchmarks', 'Priority support', '1:1 advisory calls'],
        cta: 'Contact Sales',
        highlighted: false
    }
];

// Sample discussion topics
const popularTopics = [
    { title: 'How are you approaching GenAI governance?', replies: 47, views: 892 },
    { title: 'Cloud cost optimization strategies that actually work', replies: 34, views: 654 },
    { title: 'Building a business case for platform engineering', replies: 28, views: 512 },
    { title: 'Zero trust implementation: lessons learned', replies: 23, views: 445 }
];

export default function CommunityPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <Users size={16} className="text-blue-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">Community</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Join the Network
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Connect with 10,000+ CIOs and technology leaders. Share insights,
                            solve challenges, and advance your career.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '10K+', label: 'Members' },
                            { value: '500+', label: 'Companies' },
                            { value: '50+', label: 'Peer Groups' },
                            { value: '95%', label: 'Renewal Rate' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/20">
                            <Globe className="text-blue-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Community Features
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Everything you need to connect and grow</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {communityFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="p-8 flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                                            <Icon className="text-blue-400" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[var(--color-zinc-400)]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Popular Discussions */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <MessageCircle className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Popular Discussions
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">See what the community is talking about</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {popularTopics.map((topic, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-xl p-6 flex items-center justify-between gap-4 cursor-pointer group stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex items-center gap-4">
                                    <Lock size={16} className="text-[var(--color-zinc-600)]" />
                                    <h3 className="font-medium text-[var(--color-zinc-100)] group-hover:text-blue-400 transition-colors">
                                        {topic.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-6 text-sm text-[var(--color-zinc-500)]">
                                    <span>{topic.replies} replies</span>
                                    <span>{topic.views} views</span>
                                    <ArrowRight size={16} className="text-[var(--color-zinc-600)] group-hover:text-blue-400 transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-[var(--color-zinc-500)] mt-6">
                        <Lock size={12} className="inline mr-2" />
                        Join the community to access full discussions
                    </p>
                </div>
            </section>

            {/* Membership Tiers */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Membership Options
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            Choose the plan that fits your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {membershipTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl overflow-hidden stagger-item ${tier.highlighted
                                    ? 'netflix-card glow-accent bg-gradient-to-br from-blue-500/10 via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border-2 border-blue-500/30 scale-105'
                                    : 'glass-premium'
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {tier.highlighted && (
                                    <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-2">
                                        {tier.name === 'Executive' && <Crown size={18} className="text-amber-400" />}
                                        <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)]">
                                            {tier.name}
                                        </h3>
                                    </div>
                                    <div className="font-display text-4xl font-bold text-blue-400 mb-2">
                                        {tier.price}
                                    </div>
                                    <p className="text-sm text-[var(--color-zinc-400)] mb-6">
                                        {tier.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-[var(--color-zinc-300)]">
                                                <CheckCircle size={16} className="text-blue-400 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${tier.highlighted
                                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                                        : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-700)] border border-[var(--color-zinc-700)]'
                                        }`}>
                                        {tier.cta}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Star className="mx-auto text-amber-400 mb-6" size={48} />
                        <blockquote className="font-display text-2xl text-[var(--color-zinc-100)] italic mb-6">
                            "The VibeCIO community has been invaluable for my career. The peer connections
                            and candid discussions have helped me navigate complex decisions."
                        </blockquote>
                        <div>
                            <div className="font-semibold text-[var(--color-zinc-100)]">Sarah Chen</div>
                            <div className="text-sm text-[var(--color-zinc-500)]">CIO, GlobalTech Industries</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
