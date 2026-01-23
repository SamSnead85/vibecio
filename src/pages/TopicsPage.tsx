import { TrendingUp, Zap, Brain, Cloud, Shield, Database, LineChart, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Topic/Trend types
interface Topic {
    id: string;
    name: string;
    slug: string;
    icon: React.ElementType;
    description: string;
    articleCount: number;
    trending?: boolean;
    color: string;
}

// Topic data
const topics: Topic[] = [
    {
        id: 'ai-ml',
        name: 'AI & Machine Learning',
        slug: 'ai',
        icon: Brain,
        description: 'Enterprise AI adoption, GenAI strategy, ML operations, and responsible AI governance.',
        articleCount: 47,
        trending: true,
        color: 'purple'
    },
    {
        id: 'cloud',
        name: 'Cloud & Infrastructure',
        slug: 'cloud',
        icon: Cloud,
        description: 'Multi-cloud strategy, cloud-native development, FinOps, and infrastructure modernization.',
        articleCount: 38,
        trending: true,
        color: 'blue'
    },
    {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        slug: 'security',
        icon: Shield,
        description: 'Zero trust architecture, threat intelligence, security operations, and risk management.',
        articleCount: 32,
        trending: true,
        color: 'red'
    },
    {
        id: 'data-analytics',
        name: 'Data & Analytics',
        slug: 'data',
        icon: Database,
        description: 'Data strategy, analytics platforms, data mesh, and business intelligence.',
        articleCount: 29,
        color: 'emerald'
    },
    {
        id: 'digital-transformation',
        name: 'Digital Transformation',
        slug: 'transformation',
        icon: Zap,
        description: 'Enterprise modernization, legacy system migration, and change management.',
        articleCount: 35,
        color: 'amber'
    },
    {
        id: 'leadership',
        name: 'IT Leadership',
        slug: 'leadership',
        icon: LineChart,
        description: 'CIO strategy, board communication, talent management, and organizational design.',
        articleCount: 24,
        color: 'cyan'
    }
];

// Trending topics with momentum
const trendingTopics = [
    { name: 'Agentic AI', momentum: '+234%', articles: 12 },
    { name: 'AI Governance', momentum: '+178%', articles: 8 },
    { name: 'Platform Engineering', momentum: '+145%', articles: 6 },
    { name: 'FinOps 2.0', momentum: '+98%', articles: 5 },
    { name: 'Zero Trust', momentum: '+67%', articles: 9 }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    purple: { bg: 'from-purple-500/20 to-purple-500/5', text: 'text-purple-400', border: 'border-purple-500/20', glow: 'shadow-purple-500/10' },
    blue: { bg: 'from-blue-500/20 to-blue-500/5', text: 'text-blue-400', border: 'border-blue-500/20', glow: 'shadow-blue-500/10' },
    red: { bg: 'from-red-500/20 to-red-500/5', text: 'text-red-400', border: 'border-red-500/20', glow: 'shadow-red-500/10' },
    emerald: { bg: 'from-emerald-500/20 to-emerald-500/5', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'shadow-emerald-500/10' },
    amber: { bg: 'from-amber-500/20 to-amber-500/5', text: 'text-amber-400', border: 'border-amber-500/20', glow: 'shadow-amber-500/10' },
    cyan: { bg: 'from-cyan-500/20 to-cyan-500/5', text: 'text-cyan-400', border: 'border-cyan-500/20', glow: 'shadow-cyan-500/10' }
};

export default function TopicsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                            <TrendingUp size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Topics</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Explore Topics
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Deep dive into the topics that matter most to enterprise
                            technology leaders in 2026 and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trending Now */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="flex items-center gap-4 mb-6">
                        <Sparkles className="text-[var(--color-accent)]" size={20} />
                        <h2 className="text-lg font-bold text-[var(--color-zinc-100)]">Trending This Week</h2>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {trendingTopics.map((topic, index) => (
                            <Link
                                key={index}
                                to={`/articles?q=${encodeURIComponent(topic.name)}`}
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 transition-all group"
                            >
                                <span className="font-semibold text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors">
                                    {topic.name}
                                </span>
                                <span className="text-xs font-bold text-emerald-400">
                                    {topic.momentum}
                                </span>
                                <span className="text-xs text-[var(--color-zinc-500)]">
                                    {topic.articles} articles
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Topics Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic, index) => {
                            const Icon = topic.icon;
                            const colors = colorClasses[topic.color];

                            return (
                                <Link
                                    key={topic.id}
                                    to={`/articles?category=${topic.slug}`}
                                    className={`netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border ${colors.border} shadow-xl ${colors.glow} stagger-item group relative`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Trending Badge */}
                                    {topic.trending && (
                                        <div className="absolute top-4 right-4">
                                            <span className="flex items-center gap-1 px-2 py-1 text-xs font-bold bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-md">
                                                <TrendingUp size={10} />
                                                Trending
                                            </span>
                                        </div>
                                    )}

                                    <div className="p-8">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center border ${colors.border} mb-6`}>
                                            <Icon className={colors.text} size={32} />
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                                            {topic.name}
                                        </h3>

                                        <p className="text-[var(--color-zinc-400)] mb-6 line-clamp-2">
                                            {topic.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-zinc-800)]">
                                            <span className="text-sm text-[var(--color-zinc-500)]">
                                                {topic.articleCount} articles
                                            </span>
                                            <span className={`flex items-center gap-1 text-sm font-medium ${colors.text} group-hover:gap-2 transition-all`}>
                                                Explore
                                                <ChevronRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Topic Deep Dive */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/5 via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-purple-500/20">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-purple-500/20 text-purple-400 rounded-md">
                                        Featured Topic
                                    </span>
                                </div>

                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                    Agentic AI: The Next Enterprise Frontier
                                </h2>

                                <p className="text-lg text-[var(--color-zinc-400)] mb-6">
                                    Move beyond chatbots to autonomous AI agents that can reason, plan,
                                    and execute complex business processes. Our coverage tracks the
                                    evolution from assistants to agents.
                                </p>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <div className="text-center p-4 rounded-xl bg-[var(--color-zinc-800)]/30">
                                        <div className="font-display text-2xl font-bold text-purple-400">12</div>
                                        <div className="text-xs text-[var(--color-zinc-500)]">Deep Dives</div>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-[var(--color-zinc-800)]/30">
                                        <div className="font-display text-2xl font-bold text-purple-400">5</div>
                                        <div className="text-xs text-[var(--color-zinc-500)]">Case Studies</div>
                                    </div>
                                    <div className="text-center p-4 rounded-xl bg-[var(--color-zinc-800)]/30">
                                        <div className="font-display text-2xl font-bold text-purple-400">3</div>
                                        <div className="text-xs text-[var(--color-zinc-500)]">Webinars</div>
                                    </div>
                                </div>

                                <Link
                                    to="/articles?q=agentic+ai"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors"
                                >
                                    Explore Agentic AI
                                    <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* Visual */}
                            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-purple-500/10 to-[var(--color-zinc-900)] flex items-center justify-center">
                                <Brain size={120} className="text-purple-500/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-purple-500/10 animate-pulse-slow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <TrendingUp className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Stay Ahead of the Trends
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Get our weekly trend report delivered to your inbox. Join 50,000+
                            technology leaders who rely on VibeCIO for strategic insights.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/subscribe"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Subscribe Now
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/articles"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Browse All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
