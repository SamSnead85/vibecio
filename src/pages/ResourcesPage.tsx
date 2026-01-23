import { Download, FileText, BookOpen, BarChart3, Video, Presentation, Filter, ArrowRight, Lock, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Resource types
interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'report' | 'whitepaper' | 'guide' | 'template' | 'webinar' | 'infographic';
    category: string;
    downloadCount: number;
    isPremium: boolean;
    date: string;
}

// Sample resources
const resources: Resource[] = [
    { id: '1', title: '2026 CIO Priority Survey Results', description: 'Comprehensive analysis of technology priorities from 500+ enterprise CIOs.', type: 'report', category: 'Strategy', downloadCount: 4521, isPremium: true, date: '2026-01-15' },
    { id: '2', title: 'AI Implementation Playbook', description: 'Step-by-step guide to deploying AI in enterprise environments.', type: 'guide', category: 'AI', downloadCount: 3847, isPremium: false, date: '2026-01-10' },
    { id: '3', title: 'Cloud Cost Optimization Checklist', description: 'Actionable checklist for reducing cloud spend without sacrificing performance.', type: 'template', category: 'Cloud', downloadCount: 2934, isPremium: false, date: '2025-12-20' },
    { id: '4', title: 'Zero Trust Architecture Blueprint', description: 'Reference architecture for implementing zero trust security.', type: 'whitepaper', category: 'Security', downloadCount: 2156, isPremium: true, date: '2025-12-15' },
    { id: '5', title: 'Data Mesh Implementation Guide', description: 'Best practices for transitioning to domain-owned data architecture.', type: 'guide', category: 'Data', downloadCount: 1873, isPremium: false, date: '2025-11-28' },
    { id: '6', title: 'Board Presentation Templates', description: 'Executive-ready slide templates for IT strategy presentations.', type: 'template', category: 'Leadership', downloadCount: 3421, isPremium: true, date: '2025-11-15' },
    { id: '7', title: 'GenAI ROI Calculator', description: 'Spreadsheet model for calculating AI investment returns.', type: 'template', category: 'AI', downloadCount: 2567, isPremium: false, date: '2025-10-30' },
    { id: '8', title: 'Digital Transformation Maturity Assessment', description: 'Self-assessment tool for evaluating digital maturity.', type: 'template', category: 'Strategy', downloadCount: 1945, isPremium: false, date: '2025-10-15' }
];

const resourceTypes = [
    { label: 'All', value: 'all' },
    { label: 'Reports', value: 'report', icon: BarChart3 },
    { label: 'Guides', value: 'guide', icon: BookOpen },
    { label: 'Templates', value: 'template', icon: FileText },
    { label: 'Whitepapers', value: 'whitepaper', icon: FileText },
    { label: 'Webinars', value: 'webinar', icon: Video }
];

const typeConfig: Record<string, { icon: React.ElementType; color: string }> = {
    report: { icon: BarChart3, color: 'emerald' },
    whitepaper: { icon: FileText, color: 'blue' },
    guide: { icon: BookOpen, color: 'purple' },
    template: { icon: Presentation, color: 'amber' },
    webinar: { icon: Video, color: 'red' },
    infographic: { icon: BarChart3, color: 'cyan' }
};

export default function ResourcesPage() {
    const [activeType, setActiveType] = useState('all');

    const filteredResources = activeType === 'all'
        ? resources
        : resources.filter(r => r.type === activeType);

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            <Download size={16} className="text-purple-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Resources</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Download Center
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Free reports, guides, templates, and tools to help you
                            lead technology transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Type Filters */}
            <section className="py-6 border-y border-[var(--color-zinc-800)]/50 sticky top-16 bg-[var(--color-zinc-950)]/90 backdrop-blur-lg z-40">
                <div className="container">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        <Filter size={16} className="text-[var(--color-zinc-500)] flex-shrink-0" />
                        {resourceTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => setActiveType(type.value)}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${activeType === type.value
                                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                                        : 'text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-800)]/50'
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {[
                            { value: `${resources.length}+`, label: 'Resources' },
                            { value: `${Math.round(resources.reduce((acc, r) => acc + r.downloadCount, 0) / 1000)}K+`, label: 'Downloads' },
                            { value: '6', label: 'Categories' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-purple-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((resource, index) => {
                            const config = typeConfig[resource.type];
                            const Icon = config.icon;

                            return (
                                <div
                                    key={resource.id}
                                    className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl bg-${config.color}-500/10 flex items-center justify-center border border-${config.color}-500/20`}>
                                                <Icon className={`text-${config.color}-400`} size={24} />
                                            </div>
                                            {resource.isPremium && (
                                                <span className="flex items-center gap-1 px-2 py-1 text-xs font-bold bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-md">
                                                    <Lock size={10} />
                                                    Premium
                                                </span>
                                            )}
                                        </div>

                                        <span className="text-xs font-medium text-[var(--color-zinc-500)] uppercase tracking-widest">
                                            {resource.type} • {resource.category}
                                        </span>

                                        <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] mt-2 mb-3 group-hover:text-purple-400 transition-colors">
                                            {resource.title}
                                        </h3>

                                        <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2">
                                            {resource.description}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-zinc-800)]">
                                            <span className="text-xs text-[var(--color-zinc-500)]">
                                                {resource.downloadCount.toLocaleString()} downloads
                                            </span>
                                            <button className="flex items-center gap-1 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                                                <Download size={14} />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/5 via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-purple-500/20">
                        <div className="p-8 lg:p-12 text-center max-w-3xl mx-auto">
                            <Lock className="mx-auto text-purple-400 mb-6" size={48} />

                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                Unlock Premium Resources
                            </h2>

                            <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                                Get unlimited access to all premium reports, exclusive templates,
                                and research data with a VibeCIO subscription.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {['Exclusive research reports', 'Executive templates', 'Benchmark data', 'Priority access'].map((item, i) => (
                                    <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-zinc-800)]/50 text-sm text-[var(--color-zinc-300)]">
                                        <Check size={14} className="text-purple-400" />
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to="/subscribe"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20"
                            >
                                Subscribe Now
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
