import { FileText, Download, Lock, ChevronRight, BarChart3, TrendingUp, Users, Shield, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Industry reports data
const featuredReports = [
    {
        id: 'state-of-enterprise-ai-2026',
        title: 'State of Enterprise AI 2026',
        description: 'Comprehensive analysis of AI adoption, investment patterns, and ROI across Fortune 1000 organizations.',
        pages: 156,
        date: 'January 2026',
        premium: false,
        category: 'Annual Report',
        downloads: 12450,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
        id: 'agentic-ai-enterprise-guide',
        title: 'Agentic AI Enterprise Implementation Guide',
        description: 'Step-by-step playbook for deploying autonomous AI agents across business-critical workflows.',
        pages: 89,
        date: 'January 2026',
        premium: true,
        category: 'Implementation Guide',
        downloads: 4230,
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop'
    },
    {
        id: 'ai-security-threat-landscape',
        title: 'AI Security Threat Landscape 2026',
        description: 'Analysis of AI-powered attack vectors and defensive strategies for enterprise security teams.',
        pages: 72,
        date: 'January 2026',
        premium: true,
        category: 'Security Report',
        downloads: 3890,
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop'
    }
];

const quarterlyReports = [
    {
        id: 'q4-2025-cio-survey',
        title: 'Q4 2025 CIO Technology Investment Survey',
        description: 'Investment priorities, budget allocation, and technology roadmaps from 500+ enterprise CIOs.',
        pages: 45,
        date: 'December 2025',
        premium: false,
        category: 'Survey Report',
        downloads: 8920
    },
    {
        id: 'ai-vendor-landscape',
        title: 'Enterprise AI Vendor Landscape Analysis',
        description: 'Comparative analysis of leading AI platform vendors, including capabilities, pricing, and enterprise fit.',
        pages: 112,
        date: 'November 2025',
        premium: true,
        category: 'Market Analysis',
        downloads: 5670
    },
    {
        id: 'healthcare-ai-adoption',
        title: 'Healthcare AI Adoption Report',
        description: 'Industry-specific analysis of AI use cases, regulatory considerations, and ROI in healthcare.',
        pages: 68,
        date: 'November 2025',
        premium: true,
        category: 'Industry Report',
        downloads: 3450
    },
    {
        id: 'financial-services-ai',
        title: 'Financial Services AI Benchmark Report',
        description: 'Benchmarking AI maturity across banking, insurance, and wealth management sectors.',
        pages: 94,
        date: 'October 2025',
        premium: true,
        category: 'Benchmark',
        downloads: 4120
    }
];

const industryBriefs = [
    { title: 'Manufacturing 4.0 AI Quick Start', pages: 24, premium: false },
    { title: 'Retail AI Personalization Playbook', pages: 32, premium: true },
    { title: 'Supply Chain AI Optimization Guide', pages: 28, premium: false },
    { title: 'AI Governance Framework Template', pages: 18, premium: false },
    { title: 'CIO AI Readiness Assessment', pages: 12, premium: false },
    { title: 'Enterprise LLM Selection Guide', pages: 36, premium: true }
];

export default function ReportsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                            <FileText size={16} className="text-indigo-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-indigo-400">Research</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Industry Reports
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Original research and analysis for enterprise technology leaders.
                            Data-driven insights to inform strategic decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: FileText, value: '45+', label: 'Research Reports' },
                            { icon: Download, value: '125K+', label: 'Downloads' },
                            { icon: Users, value: '500+', label: 'CIOs Surveyed' },
                            { icon: TrendingUp, value: '12', label: 'Industries Covered' }
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <Icon className="mx-auto text-indigo-400 mb-2" size={24} />
                                    <div className="font-display text-2xl md:text-3xl font-bold text-[var(--color-zinc-100)] mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Reports */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 flex items-center justify-center border border-indigo-500/20">
                            <BarChart3 className="text-indigo-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Featured Reports
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Our most comprehensive research</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {featuredReports.map((report, index) => (
                            <div
                                key={report.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="h-40 overflow-hidden relative">
                                    <img
                                        src={report.image}
                                        alt={report.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-zinc-900)] to-transparent" />
                                    {report.premium && (
                                        <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-amber-500/90 text-black text-xs font-bold rounded">
                                            <Lock size={12} />
                                            Premium
                                        </div>
                                    )}
                                    <span className="absolute bottom-4 left-4 px-2 py-1 bg-[var(--color-zinc-800)]/80 text-[var(--color-zinc-300)] text-xs rounded">
                                        {report.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-indigo-400 transition-colors">
                                        {report.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-zinc-400)] mb-4">
                                        {report.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-[var(--color-zinc-500)]">
                                        <div className="flex items-center gap-4">
                                            <span>{report.pages} pages</span>
                                            <span>{report.downloads.toLocaleString()} downloads</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 py-3 rounded-xl bg-indigo-500/10 text-indigo-400 font-semibold hover:bg-indigo-500/20 transition-colors flex items-center justify-center gap-2">
                                        <Download size={18} />
                                        {report.premium ? 'Get Report' : 'Download Free'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quarterly Reports */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <TrendingUp className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Quarterly Research
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Regular updates on industry trends</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {quarterlyReports.map((report, index) => (
                            <div
                                key={report.id}
                                className="glass-premium rounded-xl p-6 flex items-center justify-between gap-6 group cursor-pointer stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex items-center gap-6 flex-1">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-zinc-800)] flex items-center justify-center">
                                        <FileText className="text-[var(--color-zinc-400)]" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] group-hover:text-indigo-400 transition-colors">
                                                {report.title}
                                            </h3>
                                            {report.premium && (
                                                <Lock size={14} className="text-amber-400" />
                                            )}
                                        </div>
                                        <p className="text-sm text-[var(--color-zinc-400)]">
                                            {report.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-6 text-sm text-[var(--color-zinc-500)]">
                                    <span>{report.pages} pages</span>
                                    <span>{report.date}</span>
                                    <span>{report.downloads.toLocaleString()} downloads</span>
                                    <ChevronRight className="text-[var(--color-zinc-600)] group-hover:text-indigo-400 transition-colors" size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Reference Briefs */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center border border-amber-500/20">
                            <Cpu className="text-amber-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Quick Reference Briefs
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Concise guides for immediate implementation</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {industryBriefs.map((brief, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-xl p-4 flex items-center justify-between gap-4 group cursor-pointer stagger-item"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="flex items-center gap-4">
                                    <FileText className="text-[var(--color-zinc-500)]" size={20} />
                                    <div>
                                        <h3 className="font-medium text-[var(--color-zinc-100)] group-hover:text-amber-400 transition-colors">
                                            {brief.title}
                                        </h3>
                                        <p className="text-xs text-[var(--color-zinc-500)]">{brief.pages} pages</p>
                                    </div>
                                </div>
                                {brief.premium ? (
                                    <Lock size={16} className="text-amber-400" />
                                ) : (
                                    <Download size={16} className="text-emerald-400" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12 border border-amber-500/20">
                        <Shield className="mx-auto text-amber-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Premium Research Access
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Unlock our complete research library with a VibeCIO Pro subscription.
                            Unlimited downloads, early access, and exclusive briefings.
                        </p>
                        <Link
                            to="/subscribe"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-400 transition-colors"
                        >
                            Upgrade to Pro
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
