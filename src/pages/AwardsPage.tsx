import { Trophy, Star, Award, Users, Building2, ArrowRight, Calendar, Sparkles, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Award types
interface AwardRecipient {
    id: string;
    name: string;
    title: string;
    company: string;
    category: string;
    year: number;
    achievement: string;
}

// Award nominees
const awardWinners: AwardRecipient[] = [
    { id: '1', name: 'Dr. Sarah Chen', title: 'Chief Information Officer', company: 'GlobalTech Industries', category: 'CIO of the Year', year: 2025, achievement: 'Led enterprise-wide AI transformation resulting in $200M efficiency gains' },
    { id: '2', name: 'Marcus Johnson', title: 'Chief Technology Officer', company: 'HealthFirst Systems', category: 'Innovation Leader', year: 2025, achievement: 'Pioneered real-time clinical AI implementation across 50 hospitals' },
    { id: '3', name: 'Priya Sharma', title: 'Chief Data Officer', company: 'FinanceCore Bank', category: 'Data Excellence', year: 2025, achievement: 'Built industry-leading data mesh architecture serving 10M customers' },
    { id: '4', name: 'James Morrison', title: 'CISO', company: 'SecureNet Corp', category: 'Security Champion', year: 2025, achievement: 'Zero breaches for 5 consecutive years with innovative zero-trust implementation' },
    { id: '5', name: 'Lisa Park', title: 'VP of Digital', company: 'RetailMax', category: 'Digital Transformation', year: 2025, achievement: 'Unified omnichannel platform driving 40% revenue growth' },
    { id: '6', name: 'David Thompson', title: 'CIO', company: 'LogiTrans Global', category: 'Emerging Leader', year: 2025, achievement: 'Youngest Fortune 500 CIO to achieve full cloud transformation' }
];

const awardCategories = [
    { name: 'CIO of the Year', icon: Crown, description: 'Recognizing exceptional overall IT leadership', color: 'amber' },
    { name: 'Innovation Leader', icon: Sparkles, description: 'Pioneering new technologies and approaches', color: 'purple' },
    { name: 'Digital Transformation', icon: Trophy, description: 'Leading successful digital initiatives', color: 'blue' },
    { name: 'Security Champion', icon: Award, description: 'Excellence in cybersecurity leadership', color: 'red' },
    { name: 'Data Excellence', icon: Star, description: 'Outstanding data strategy and execution', color: 'emerald' },
    { name: 'Emerging Leader', icon: Users, description: 'Rising stars in technology leadership', color: 'cyan' }
];

export default function AwardsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-amber-500/10 border border-amber-500/20 rounded-full">
                            <Trophy size={16} className="text-amber-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-amber-400">Awards</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                            CIO Excellence Awards
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Celebrating the technology leaders who are shaping the future
                            of enterprise innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '6', label: 'Award Categories' },
                            { value: '50+', label: 'Nominees Annually' },
                            { value: '5', label: 'Years Running' },
                            { value: '200+', label: 'Past Honorees' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-amber-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Award Categories */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center border border-amber-500/20">
                            <Star className="text-amber-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Award Categories
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Recognizing excellence across IT leadership</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awardCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={index}
                                    className="glass-premium rounded-2xl p-6 stagger-item group"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-${category.color}-500/10 flex items-center justify-center border border-${category.color}-500/20 mb-4`}>
                                        <Icon className={`text-${category.color}-400`} size={28} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-[var(--color-zinc-400)]">
                                        {category.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 2025 Winners */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <Crown className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                2025 Award Winners
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">This year's distinguished honorees</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {awardWinners.map((winner, index) => (
                            <div
                                key={winner.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-amber-500/10 stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="p-6">
                                    {/* Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-amber-500/20 text-amber-400 rounded-md">
                                            {winner.category}
                                        </span>
                                        <Trophy size={18} className="text-amber-400" />
                                    </div>

                                    {/* Avatar */}
                                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-bold text-[var(--color-zinc-950)] mb-4">
                                        {winner.name.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    <div className="text-center mb-4">
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)]">
                                            {winner.name}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-400)]">{winner.title}</p>
                                        <p className="text-sm text-amber-400">{winner.company}</p>
                                    </div>

                                    <p className="text-sm text-[var(--color-zinc-400)] text-center line-clamp-2">
                                        {winner.achievement}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nominate CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/5 via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-amber-500/20">
                        <div className="p-8 lg:p-12 text-center max-w-3xl mx-auto">
                            <Calendar className="mx-auto text-amber-400 mb-6" size={48} />

                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                2026 Nominations Now Open
                            </h2>

                            <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                                Know an exceptional technology leader? Nominate them for the
                                2026 CIO Excellence Awards. Deadline: March 31, 2026.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:awards@vibecio.com"
                                    className="flex items-center gap-2 px-8 py-4 bg-amber-500 text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                                >
                                    Nominate a Leader
                                    <ArrowRight size={18} />
                                </a>
                                <Link
                                    to="/leaders"
                                    className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                                >
                                    View Past Winners
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsor CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Building2 className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Sponsor the Awards
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Align your brand with excellence in IT leadership.
                            Limited sponsorship opportunities available for 2026.
                        </p>
                        <Link
                            to="/advertise"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                        >
                            Learn About Sponsorship
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
