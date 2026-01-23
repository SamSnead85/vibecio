import { TrendingUp, Download, FileText, BarChart3, PieChart, Target, ArrowRight, Lock, Calendar, BookOpen } from 'lucide-react';
import type { Report } from '../types';

// Research reports data
const reports: Report[] = [
    {
        id: 'ai-adoption-2026',
        title: 'Enterprise AI Adoption Report 2026',
        subtitle: 'How CIOs are moving from pilots to production',
        category: 'research',
        date: '2026-01-15',
        pages: 48,
        preview: 'Comprehensive analysis of AI adoption patterns across Fortune 500 companies. Includes benchmarks, success factors, and implementation roadmaps.',
        featured: true
    },
    {
        id: 'cio-priorities',
        title: 'CIO Technology Priorities Survey',
        subtitle: 'What\'s top of mind for technology leaders in 2026',
        category: 'survey',
        date: '2026-01-10',
        pages: 32,
        preview: 'Survey of 500+ CIOs reveals shifting priorities around AI, cybersecurity, and digital transformation.'
    },
    {
        id: 'agentic-ai-benchmark',
        title: 'Agentic AI Readiness Benchmark',
        subtitle: 'Assessing organizational readiness for autonomous AI',
        category: 'benchmark',
        date: '2025-12-20',
        pages: 28,
        preview: 'Framework for evaluating your organization\'s readiness to deploy agentic AI systems at scale.'
    },
    {
        id: 'cloud-cost-optimization',
        title: 'Cloud Cost Optimization Playbook',
        subtitle: 'Strategies for controlling cloud spend without sacrificing innovation',
        category: 'whitepaper',
        date: '2025-12-15',
        pages: 24,
        preview: 'Practical guide to reducing cloud costs by 30-50% while maintaining performance and reliability.'
    },
    {
        id: 'legacy-modernization',
        title: 'Legacy Modernization Decision Framework',
        subtitle: 'When to migrate, refactor, or replace legacy systems',
        category: 'whitepaper',
        date: '2025-12-01',
        pages: 36,
        preview: 'Decision framework for CIOs facing legacy system modernization challenges.'
    },
    {
        id: 'ai-governance',
        title: 'AI Governance Best Practices',
        subtitle: 'Building guardrails that enable innovation',
        category: 'research',
        date: '2025-11-15',
        pages: 42,
        preview: 'Comprehensive guide to AI governance including policy templates, risk frameworks, and compliance checklists.'
    }
];

const categoryColors: Record<string, { bg: string; text: string }> = {
    research: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
    survey: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
    benchmark: { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
    whitepaper: { bg: 'bg-amber-500/10', text: 'text-amber-400' }
};

export default function ResearchPage() {
    const featuredReport = reports.find(r => r.featured);
    const otherReports = reports.filter(r => !r.featured);

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
                                <BarChart3 className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Research & Reports</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Data-Driven Insights
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-3xl">
                            Original research, benchmarks, and strategic frameworks from VibeCIO's
                            analyst team. Informed by data. Built for decision-makers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Report */}
            {featuredReport && (
                <section className="py-12">
                    <div className="container">
                        <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-[var(--color-accent)]/20">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Report Preview */}
                                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-zinc-900)] to-transparent flex items-center justify-center">
                                    <div className="w-40 h-52 bg-[var(--color-zinc-800)] rounded-lg shadow-2xl transform rotate-3 flex flex-col items-center justify-center border border-[var(--color-zinc-700)]">
                                        <FileText className="text-[var(--color-accent)] mb-3" size={40} />
                                        <div className="text-xs text-[var(--color-zinc-500)] font-medium">PDF Report</div>
                                        <div className="text-lg font-bold text-[var(--color-zinc-300)]">{featuredReport.pages} pages</div>
                                    </div>
                                </div>

                                {/* Report Details */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest ${categoryColors[featuredReport.category].bg} ${categoryColors[featuredReport.category].text} rounded-md`}>
                                            {featuredReport.category}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-md">
                                            Featured
                                        </span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-3">
                                        {featuredReport.title}
                                    </h2>

                                    <p className="text-xl text-[var(--color-zinc-400)] font-display italic mb-4">
                                        {featuredReport.subtitle}
                                    </p>

                                    <p className="text-[var(--color-zinc-400)] mb-6">
                                        {featuredReport.preview}
                                    </p>

                                    <div className="flex items-center gap-6 mb-8 text-sm text-[var(--color-zinc-500)]">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {new Date(featuredReport.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <BookOpen size={14} />
                                            {featuredReport.pages} pages
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                                            <Download size={18} />
                                            Download Free
                                        </button>
                                        <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                            Preview Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filters */}
            <section className="py-8 border-y border-[var(--color-zinc-800)]/50 sticky top-16 bg-[var(--color-zinc-950)]/90 backdrop-blur-lg z-40">
                <div className="container">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        <button className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-[var(--color-zinc-950)] shadow-lg shadow-[var(--color-accent)]/30 whitespace-nowrap">
                            All Reports
                        </button>
                        {['Research', 'Surveys', 'Benchmarks', 'Whitepapers'].map((cat) => (
                            <button
                                key={cat}
                                className="px-5 py-2.5 text-sm font-semibold rounded-lg text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-800)]/50 transition-all whitespace-nowrap"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reports Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherReports.map((report, index) => (
                            <div
                                key={report.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                {/* Report Cover */}
                                <div className="relative h-48 bg-gradient-to-br from-[var(--color-zinc-800)] to-[var(--color-zinc-900)] flex items-center justify-center">
                                    <div className="w-24 h-32 bg-[var(--color-zinc-700)] rounded-md shadow-xl flex flex-col items-center justify-center border border-[var(--color-zinc-600)] group-hover:scale-105 transition-transform">
                                        <FileText className="text-[var(--color-accent)] mb-2" size={28} />
                                        <div className="text-[10px] text-[var(--color-zinc-400)]">{report.pages} pg</div>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${categoryColors[report.category].bg} ${categoryColors[report.category].text} rounded-md`}>
                                            {report.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Report Details */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                                        {report.title}
                                    </h3>

                                    <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2">
                                        {report.preview}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-[var(--color-zinc-500)]">
                                            {new Date(report.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                        </span>
                                        <button className="flex items-center gap-1.5 text-sm text-[var(--color-accent)] font-semibold opacity-0 group-hover:opacity-100 transition-all">
                                            Download <Download size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Research CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto glass-premium rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Lock className="text-[var(--color-accent)]" size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">VibeCIO Premium</span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Unlock Exclusive Research
                        </h2>

                        <p className="text-lg text-[var(--color-zinc-400)] mb-8 max-w-2xl mx-auto">
                            Premium subscribers get early access to all research, detailed data sets,
                            analyst briefings, and custom research requests.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                { icon: TrendingUp, label: 'Early Access', desc: '2-week preview' },
                                { icon: PieChart, label: 'Raw Data', desc: 'Detailed datasets' },
                                { icon: Target, label: 'Custom Research', desc: 'On request' }
                            ].map((feature, index) => (
                                <div key={index} className="p-4 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/50">
                                    <feature.icon className="mx-auto text-[var(--color-accent)] mb-3" size={28} />
                                    <div className="font-semibold text-[var(--color-zinc-100)]">{feature.label}</div>
                                    <div className="text-xs text-[var(--color-zinc-500)]">{feature.desc}</div>
                                </div>
                            ))}
                        </div>

                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                            Upgrade to Premium
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
