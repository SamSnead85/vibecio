import { TrendingUp, Brain, Cpu, Shield, Zap, ArrowRight, BarChart3, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// AI Trend categories
const aiTrends = [
    {
        id: 'agentic-ai',
        title: 'Agentic AI',
        description: 'Autonomous AI agents executing complex workflows with minimal human oversight',
        adoption: 78,
        growth: '+340%',
        icon: Zap,
        color: 'blue',
        articles: 12
    },
    {
        id: 'reasoning-models',
        title: 'Reasoning Models',
        description: 'Chain-of-thought AI achieving human-level abstract problem solving',
        adoption: 34,
        growth: '+520%',
        icon: Brain,
        color: 'purple',
        articles: 8
    },
    {
        id: 'multimodal-ai',
        title: 'Multimodal AI',
        description: 'Vision, audio, and text understanding in unified models',
        adoption: 56,
        growth: '+280%',
        icon: Sparkles,
        color: 'emerald',
        articles: 15
    },
    {
        id: 'edge-ai',
        title: 'Edge AI',
        description: 'On-device and on-premises AI for latency-critical applications',
        adoption: 45,
        growth: '+190%',
        icon: Cpu,
        color: 'amber',
        articles: 9
    },
    {
        id: 'ai-security',
        title: 'AI Security',
        description: 'Defensive AI and protection against AI-powered threats',
        adoption: 67,
        growth: '+450%',
        icon: Shield,
        color: 'red',
        articles: 11
    },
    {
        id: 'ai-governance',
        title: 'AI Governance',
        description: 'Regulatory compliance and responsible AI frameworks',
        adoption: 89,
        growth: '+120%',
        icon: Globe,
        color: 'indigo',
        articles: 14
    }
];

// Key statistics
const keyStats = [
    { value: '$4.4T', label: 'Potential Annual AI Value', source: 'McKinsey 2026' },
    { value: '78%', label: 'Fortune 500 Using Agentic AI', source: 'CIO Quarterly' },
    { value: '88%', label: 'o3 ARC-AGI Benchmark Score', source: 'OpenAI Research' },
    { value: '340%', label: 'YoY Edge AI Growth', source: 'Industry Reports' }
];

// Latest predictions
const predictions = [
    {
        title: 'AGI Timeline Shifts Left',
        prediction: 'Leading AI labs now project significant AGI capabilities by 2028-2030, accelerated by reasoning model breakthroughs.',
        confidence: 'High',
        timeframe: '2028-2030'
    },
    {
        title: 'Enterprise AI Spending Doubles',
        prediction: 'Total enterprise AI investment projected to reach $180B annually by 2027, with agentic AI capturing 40%.',
        confidence: 'Very High',
        timeframe: '2027'
    },
    {
        title: 'AI Workforce Transformation',
        prediction: '60% of knowledge workers will use AI assistants daily by end of 2026, fundamentally changing productivity patterns.',
        confidence: 'High',
        timeframe: '2026'
    },
    {
        title: 'Regulatory Acceleration',
        prediction: 'G20 nations will have comprehensive AI legislation by 2027, with EU AI Act serving as template.',
        confidence: 'Medium-High',
        timeframe: '2027'
    }
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
    emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
    red: { bg: 'bg-red-500/10', border: 'border-red-500/20', text: 'text-red-400' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400' }
};

export default function AITrendsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            <TrendingUp size={16} className="text-purple-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-purple-400">AI Trends 2026</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            AI Intelligence Hub
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Track the technologies reshaping enterprise IT. Data-driven insights
                            on adoption, investment, and strategic implications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {keyStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-purple-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-300)] mb-1">{stat.label}</div>
                                <div className="text-xs text-[var(--color-zinc-600)]">{stat.source}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trend Categories */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center border border-purple-500/20">
                            <BarChart3 className="text-purple-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Technology Trends
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Enterprise adoption and growth metrics</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiTrends.map((trend, index) => {
                            const Icon = trend.icon;
                            const colors = colorClasses[trend.color];
                            return (
                                <div
                                    key={trend.id}
                                    className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item hover:border-purple-500/30 transition-all cursor-pointer group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                                                <Icon className={colors.text} size={24} />
                                            </div>
                                            <span className="px-2 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded">
                                                {trend.growth}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-purple-400 transition-colors">
                                            {trend.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-400)] mb-4">
                                            {trend.description}
                                        </p>

                                        {/* Adoption Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs mb-1">
                                                <span className="text-[var(--color-zinc-500)]">Enterprise Adoption</span>
                                                <span className="text-[var(--color-zinc-300)]">{trend.adoption}%</span>
                                            </div>
                                            <div className="h-2 bg-[var(--color-zinc-800)] rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${colors.bg.replace('/10', '')} rounded-full`}
                                                    style={{ width: `${trend.adoption}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-[var(--color-zinc-500)]">{trend.articles} articles</span>
                                            <ArrowRight size={16} className="text-[var(--color-zinc-600)] group-hover:text-purple-400 transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Predictions */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center border border-amber-500/20">
                            <Sparkles className="text-amber-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Industry Predictions
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Expert forecasts on AI trajectory</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {predictions.map((prediction, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-2xl p-6 stagger-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)]">
                                        {prediction.title}
                                    </h3>
                                    <span className="px-2 py-1 text-xs font-medium bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] rounded">
                                        {prediction.timeframe}
                                    </span>
                                </div>
                                <p className="text-[var(--color-zinc-400)] mb-4">
                                    {prediction.prediction}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-[var(--color-zinc-600)]">Confidence:</span>
                                    <span className={`text-xs font-medium ${prediction.confidence === 'Very High' ? 'text-emerald-400' :
                                            prediction.confidence === 'High' ? 'text-blue-400' :
                                                'text-amber-400'
                                        }`}>
                                        {prediction.confidence}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Brain className="mx-auto text-purple-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Get weekly AI intelligence briefings delivered to your inbox.
                            Data-driven insights for strategic decision-making.
                        </p>
                        <Link
                            to="/subscribe"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors"
                        >
                            Subscribe to VibeCIO
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
