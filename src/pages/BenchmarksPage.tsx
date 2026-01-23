import { BarChart3, TrendingUp, DollarSign, Users, Clock, Cpu, Shield, ArrowRight, Download, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

// Benchmark data types
interface Benchmark {
    id: string;
    title: string;
    category: string;
    metric: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    source: string;
    year: number;
}

// Sample benchmark data
const benchmarks: Benchmark[] = [
    { id: '1', title: 'Average IT Budget as % of Revenue', category: 'Budget', metric: 'IT Spend', value: '5.7%', change: '+0.4%', trend: 'up', source: 'VibeCIO Annual Survey 2026', year: 2026 },
    { id: '2', title: 'AI Investment Growth YoY', category: 'AI', metric: 'AI Spend', value: '42%', change: '+18%', trend: 'up', source: 'Enterprise AI Index', year: 2026 },
    { id: '3', title: 'Cloud Infrastructure Spend', category: 'Cloud', metric: 'Cloud Spend', value: '$62B', change: '+23%', trend: 'up', source: 'Cloud Tracker Q4 2025', year: 2026 },
    { id: '4', title: 'Cybersecurity Budget Share', category: 'Security', metric: 'Security %', value: '14.3%', change: '+2.1%', trend: 'up', source: 'CISO Benchmark Report', year: 2026 },
    { id: '5', title: 'IT Staff Cost per Employee', category: 'Operations', metric: 'IT Cost', value: '$8,420', change: '-3%', trend: 'down', source: 'IT Operations Benchmark', year: 2026 },
    { id: '6', title: 'Digital Transformation Success Rate', category: 'Transformation', metric: 'Success', value: '31%', change: '+7%', trend: 'up', source: 'Transformation Tracker', year: 2026 }
];

const keyStats = [
    { icon: DollarSign, label: 'Global IT Spend 2026', value: '$5.1T', color: 'emerald' },
    { icon: Cpu, label: 'GenAI Adoption Rate', value: '67%', color: 'purple' },
    { icon: Users, label: 'CIO Tenure Average', value: '4.2 yrs', color: 'blue' },
    { icon: Shield, label: 'Breach Cost Average', value: '$4.9M', color: 'red' }
];

export default function BenchmarksPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            <BarChart3 size={16} className="text-emerald-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Benchmarks</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Industry Benchmarks
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Data-driven insights to help you benchmark your IT organization
                            against industry standards and peers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Stats */}
            <section className="py-12 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {keyStats.map((stat, index) => {
                            const Icon = stat.icon;
                            const colorClass = stat.color === 'emerald' ? 'text-emerald-400' :
                                stat.color === 'purple' ? 'text-purple-400' :
                                    stat.color === 'blue' ? 'text-blue-400' : 'text-red-400';
                            return (
                                <div key={index} className="text-center p-6 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/30">
                                    <Icon className={`mx-auto mb-3 ${colorClass}`} size={28} />
                                    <div className="font-display text-3xl font-bold text-[var(--color-zinc-100)] mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benchmark Cards */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <TrendingUp className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Key Benchmarks
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Latest data from our research</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benchmarks.map((benchmark, index) => (
                            <div
                                key={benchmark.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] rounded-md">
                                            {benchmark.category}
                                        </span>
                                        <span className="text-xs text-[var(--color-zinc-500)]">{benchmark.year}</span>
                                    </div>

                                    <h3 className="font-display text-lg font-semibold text-[var(--color-zinc-100)] mb-4">
                                        {benchmark.title}
                                    </h3>

                                    <div className="flex items-end gap-3 mb-4">
                                        <div className="font-display text-4xl font-bold text-emerald-400">
                                            {benchmark.value}
                                        </div>
                                        <div className={`flex items-center gap-1 text-sm font-medium ${benchmark.trend === 'up' ? 'text-emerald-400' :
                                                benchmark.trend === 'down' ? 'text-red-400' : 'text-[var(--color-zinc-400)]'
                                            }`}>
                                            <TrendingUp size={14} className={benchmark.trend === 'down' ? 'rotate-180' : ''} />
                                            {benchmark.change}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-[var(--color-zinc-800)]">
                                        <span className="text-xs text-[var(--color-zinc-500)]">
                                            Source: {benchmark.source}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Research CTA */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500/5 via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-emerald-500/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <Lock className="text-emerald-400" size={20} />
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded-md">
                                        Premium Research
                                    </span>
                                </div>

                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                    2026 CIO Benchmark Report
                                </h2>

                                <p className="text-lg text-[var(--color-zinc-400)] mb-6">
                                    Our comprehensive annual report featuring 50+ benchmarks across
                                    budget, operations, transformation, and technology trends from
                                    500+ enterprise CIOs.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        'IT budget allocation by industry',
                                        'AI maturity assessment framework',
                                        'Cloud migration benchmarks',
                                        'Security investment trends'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-zinc-300)]">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        to="/research"
                                        className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                                    >
                                        <Download size={18} />
                                        Download Report
                                    </Link>
                                    <Link
                                        to="/subscribe"
                                        className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                                    >
                                        Subscribe for Updates
                                    </Link>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-emerald-500/10 to-[var(--color-zinc-900)] flex items-center justify-center">
                                <BarChart3 size={120} className="text-emerald-500/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Research CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Clock className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Need Custom Benchmarks?
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Get custom benchmarking data tailored to your industry, company size,
                            and specific metrics. Perfect for board presentations and strategic planning.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:research@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Request Custom Research
                                <ArrowRight size={18} />
                            </a>
                            <Link
                                to="/advertise"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Sponsorship Options
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
