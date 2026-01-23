import { Building2, Heart, Landmark, ShoppingCart, Factory, Truck, Plane, Zap, ArrowRight, BarChart3, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

// Industry verticals data
const industries = [
    {
        id: 'healthcare',
        name: 'Healthcare & Life Sciences',
        icon: Heart,
        color: 'rose',
        description: 'AI transformation in patient care, drug discovery, and healthcare administration.',
        stats: { articles: 34, leaders: 8, reports: 5 },
        topTopics: ['AI Diagnostics', 'HIPAA Compliance', 'Drug Discovery', 'Patient Experience'],
        aiAdoption: 67,
        growthRate: '+45%'
    },
    {
        id: 'financial-services',
        name: 'Financial Services',
        icon: Landmark,
        color: 'blue',
        description: 'AI in banking, insurance, wealth management, and regulatory compliance.',
        stats: { articles: 42, leaders: 12, reports: 7 },
        topTopics: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'RegTech'],
        aiAdoption: 78,
        growthRate: '+38%'
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: Factory,
        color: 'amber',
        description: 'Industry 4.0, predictive maintenance, quality control, and supply chain AI.',
        stats: { articles: 28, leaders: 6, reports: 4 },
        topTopics: ['Predictive Maintenance', 'Quality Control', 'Digital Twins', 'Robotics'],
        aiAdoption: 56,
        growthRate: '+52%'
    },
    {
        id: 'retail',
        name: 'Retail & E-Commerce',
        icon: ShoppingCart,
        color: 'purple',
        description: 'Customer experience AI, personalization at scale, and inventory optimization.',
        stats: { articles: 31, leaders: 7, reports: 4 },
        topTopics: ['Personalization', 'Demand Forecasting', 'Customer Service AI', 'Visual Search'],
        aiAdoption: 72,
        growthRate: '+41%'
    },
    {
        id: 'logistics',
        name: 'Logistics & Supply Chain',
        icon: Truck,
        color: 'emerald',
        description: 'Route optimization, autonomous logistics, and demand forecasting.',
        stats: { articles: 24, leaders: 5, reports: 3 },
        topTopics: ['Route Optimization', 'Demand Prediction', 'Warehouse AI', 'Last Mile'],
        aiAdoption: 61,
        growthRate: '+58%'
    },
    {
        id: 'energy',
        name: 'Energy & Utilities',
        icon: Zap,
        color: 'yellow',
        description: 'Grid optimization, renewable integration, and predictive maintenance.',
        stats: { articles: 19, leaders: 4, reports: 3 },
        topTopics: ['Grid Optimization', 'Renewable AI', 'Smart Metering', 'Carbon Tracking'],
        aiAdoption: 48,
        growthRate: '+63%'
    },
    {
        id: 'aerospace',
        name: 'Aerospace & Defense',
        icon: Plane,
        color: 'indigo',
        description: 'AI-assisted design, autonomous systems, and safety-critical applications.',
        stats: { articles: 15, leaders: 3, reports: 2 },
        topTopics: ['Generative Design', 'Autonomous Systems', 'Predictive Maintenance', 'Safety AI'],
        aiAdoption: 52,
        growthRate: '+35%'
    },
    {
        id: 'telecom',
        name: 'Telecommunications',
        icon: Building2,
        color: 'cyan',
        description: 'Network optimization, customer experience, and 5G/6G infrastructure.',
        stats: { articles: 21, leaders: 4, reports: 3 },
        topTopics: ['Network Optimization', '5G AI', 'Customer Churn', 'Self-Healing Networks'],
        aiAdoption: 69,
        growthRate: '+29%'
    }
];

const colorClasses: Record<string, { bg: string; border: string; text: string; bar: string }> = {
    rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', bar: 'bg-rose-500' },
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', bar: 'bg-blue-500' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', bar: 'bg-amber-500' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', bar: 'bg-purple-500' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', bar: 'bg-emerald-500' },
    yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', bar: 'bg-yellow-500' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', bar: 'bg-indigo-500' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', bar: 'bg-cyan-500' }
};

export default function IndustriesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            <Building2 size={16} className="text-emerald-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Industries</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Industry Intelligence
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Sector-specific insights, case studies, and best practices
                            for AI transformation across enterprise verticals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '8', label: 'Industries Covered' },
                            { value: '214+', label: 'Industry Articles' },
                            { value: '49', label: 'Industry Leaders' },
                            { value: '31', label: 'Sector Reports' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <BarChart3 className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Enterprise Verticals
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">AI adoption and growth by industry</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {industries.map((industry, index) => {
                            const Icon = industry.icon;
                            const colors = colorClasses[industry.color];
                            return (
                                <Link
                                    to={`/industries/${industry.id}`}
                                    key={industry.id}
                                    className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                                                <Icon className={colors.text} size={28} />
                                            </div>
                                            <span className={`px-2 py-1 text-xs font-bold ${colors.bg} ${colors.text} rounded`}>
                                                {industry.growthRate}
                                            </span>
                                        </div>

                                        <h3 className={`font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:${colors.text} transition-colors`}>
                                            {industry.name}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-400)] mb-4">
                                            {industry.description}
                                        </p>

                                        {/* AI Adoption Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-[var(--color-zinc-500)]">AI Adoption Rate</span>
                                                <span className="text-[var(--color-zinc-300)]">{industry.aiAdoption}%</span>
                                            </div>
                                            <div className="h-2 bg-[var(--color-zinc-800)] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
                                                    style={{ width: `${industry.aiAdoption}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Top Topics */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {industry.topTopics.map((topic, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-xs bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] rounded"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-zinc-800)]">
                                            <div className="flex items-center gap-4 text-xs text-[var(--color-zinc-500)]">
                                                <span className="flex items-center gap-1">
                                                    <FileText size={12} />
                                                    {industry.stats.articles} articles
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Users size={12} />
                                                    {industry.stats.leaders} leaders
                                                </span>
                                            </div>
                                            <ArrowRight size={16} className={`text-[var(--color-zinc-600)] group-hover:${colors.text} transition-colors`} />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Building2 className="mx-auto text-emerald-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Industry-Specific Insights
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Get tailored AI intelligence for your industry vertical.
                            Curated content, benchmarks, and peer connections.
                        </p>
                        <Link
                            to="/subscribe"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                        >
                            Customize Your Feed
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
