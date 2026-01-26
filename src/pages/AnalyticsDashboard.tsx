import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    BarChart3,
    TrendingUp,
    Users,
    Eye,
    Clock,
    ArrowUpRight,
    ArrowDownRight,
    BookOpen,
    Zap,
    Globe,
    Activity,
    PieChart,
    Target,
    Award,
    Calendar,
    Filter,
    Download,
    RefreshCw
} from 'lucide-react';

// Phase 1001-1010: Advanced Analytics Dashboard
// Comprehensive analytics for content performance and user engagement

interface MetricCard {
    title: string;
    value: string;
    change: number;
    changeLabel: string;
    icon: React.ReactNode;
    color: string;
}

interface ChartData {
    labels: string[];
    values: number[];
}

interface TopContent {
    id: string;
    title: string;
    views: number;
    engagement: number;
    trend: 'up' | 'down' | 'stable';
}

const metricCards: MetricCard[] = [
    {
        title: 'Total Pageviews',
        value: '2.4M',
        change: 23.5,
        changeLabel: 'vs last month',
        icon: <Eye className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Unique Visitors',
        value: '847K',
        change: 18.2,
        changeLabel: 'vs last month',
        icon: <Users className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Avg. Read Time',
        value: '4m 32s',
        change: 12.8,
        changeLabel: 'engagement up',
        icon: <Clock className="w-6 h-6" />,
        color: 'from-amber-500 to-orange-500'
    },
    {
        title: 'Newsletter Subs',
        value: '156K',
        change: 31.4,
        changeLabel: 'new subscribers',
        icon: <BookOpen className="w-6 h-6" />,
        color: 'from-emerald-500 to-teal-500'
    }
];

const weeklyTraffic: ChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [45000, 52000, 48000, 61000, 55000, 38000, 42000]
};

const categoryDistribution = [
    { name: 'Strategy', percentage: 32, color: '#3b82f6' },
    { name: 'Technology', percentage: 28, color: '#10b981' },
    { name: 'Leadership', percentage: 18, color: '#8b5cf6' },
    { name: 'Healthcare', percentage: 12, color: '#f59e0b' },
    { name: 'Trends', percentage: 10, color: '#ec4899' }
];

const topContent: TopContent[] = [
    { id: 'fear-to-superpower', title: 'From Fear to Superpower: Building AI-Native Teams', views: 89420, engagement: 94, trend: 'up' },
    { id: 'whps-nvidia', title: 'Wipro Healthcare Solutions Transforms with NVIDIA AI', views: 76890, engagement: 91, trend: 'up' },
    { id: 'ai-native-enterprise', title: 'The Enterprise AI-Native Imperative', views: 65230, engagement: 88, trend: 'stable' },
    { id: '2026-inflection', title: '2026 Is the Inflection Point for Financial Services', views: 54780, engagement: 86, trend: 'up' },
    { id: 'inference-wars', title: 'The Inference Wars: Why NVIDIA Paid $20B', views: 48920, engagement: 82, trend: 'down' }
];

const realtimeData = [
    { metric: 'Active Users', value: '3,847', icon: <Activity className="w-4 h-4" /> },
    { metric: 'Articles Being Read', value: '1,293', icon: <BookOpen className="w-4 h-4" /> },
    { metric: 'Search Queries/min', value: '487', icon: <Zap className="w-4 h-4" /> },
    { metric: 'Countries Active', value: '89', icon: <Globe className="w-4 h-4" /> }
];

export default function AnalyticsDashboard() {
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '12m'>('30d');
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [realtimePulse, setRealtimePulse] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setRealtimePulse(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleRefresh = () => {
        setIsRefreshing(true);
        setTimeout(() => setIsRefreshing(false), 1500);
    };

    const maxTrafficValue = Math.max(...weeklyTraffic.values);

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            {/* Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="container relative">
                {/* Header with Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-zinc-950" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold text-zinc-100">
                                    Analytics Dashboard
                                </h1>
                                <p className="text-zinc-400">Real-time insights and performance metrics</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Time Range Selector */}
                        <div className="flex items-center gap-1 p-1 bg-zinc-900/80 rounded-lg border border-zinc-800">
                            {(['7d', '30d', '90d', '12m'] as const).map((range) => (
                                <button
                                    key={range}
                                    onClick={() => setTimeRange(range)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${timeRange === range
                                            ? 'bg-accent text-zinc-950'
                                            : 'text-zinc-400 hover:text-zinc-100'
                                        }`}
                                >
                                    {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : '12 Months'}
                                </button>
                            ))}
                        </div>

                        <button
                            className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
                            title="Filter"
                        >
                            <Filter className="w-5 h-5" />
                        </button>

                        <button
                            onClick={handleRefresh}
                            className={`p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors ${isRefreshing ? 'animate-spin' : ''
                                }`}
                            title="Refresh"
                        >
                            <RefreshCw className="w-5 h-5" />
                        </button>

                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-zinc-950 font-medium hover:bg-accent-hover transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </div>

                {/* Realtime Stats Bar */}
                <div className="glass-card rounded-2xl p-4 mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-emerald-500 ${realtimePulse ? 'animate-pulse' : ''}`} />
                            <span className="text-sm font-medium text-zinc-300">Live Data</span>
                        </div>
                        <div className="flex items-center gap-8">
                            {realtimeData.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-zinc-500">{item.icon}</span>
                                    <span className="text-sm text-zinc-400">{item.metric}:</span>
                                    <span className="text-sm font-semibold text-zinc-100">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metricCards.map((card, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-6 group hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white`}>
                                    {card.icon}
                                </div>
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${card.change >= 0
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {card.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    {Math.abs(card.change)}%
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-100 mb-1">{card.value}</h3>
                            <p className="text-sm text-zinc-400">{card.title}</p>
                            <p className="text-xs text-zinc-500 mt-1">{card.changeLabel}</p>
                        </div>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Traffic Chart */}
                    <div className="lg:col-span-2 glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-100">Weekly Traffic</h3>
                                <p className="text-sm text-zinc-400">Pageviews over the past week</p>
                            </div>
                            <TrendingUp className="w-5 h-5 text-accent" />
                        </div>
                        <div className="h-64 flex items-end justify-between gap-4">
                            {weeklyTraffic.labels.map((label, index) => (
                                <div key={label} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full flex flex-col items-center">
                                        <span className="text-xs text-zinc-400 mb-2">
                                            {(weeklyTraffic.values[index] / 1000).toFixed(0)}K
                                        </span>
                                        <div
                                            className="w-full bg-gradient-to-t from-accent/80 to-accent rounded-t-lg transition-all duration-500 hover:from-accent hover:to-amber-400"
                                            style={{
                                                height: `${(weeklyTraffic.values[index] / maxTrafficValue) * 180}px`
                                            }}
                                        />
                                    </div>
                                    <span className="text-xs text-zinc-500">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Category Distribution */}
                    <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-100">Content Mix</h3>
                                <p className="text-sm text-zinc-400">By category</p>
                            </div>
                            <PieChart className="w-5 h-5 text-accent" />
                        </div>
                        <div className="space-y-4">
                            {categoryDistribution.map((cat, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm text-zinc-300">{cat.name}</span>
                                        <span className="text-sm font-medium text-zinc-100">{cat.percentage}%</span>
                                    </div>
                                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                                width: `${cat.percentage}%`,
                                                backgroundColor: cat.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Content */}
                    <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-100">Top Performing Content</h3>
                                <p className="text-sm text-zinc-400">Most viewed articles this period</p>
                            </div>
                            <Award className="w-5 h-5 text-accent" />
                        </div>
                        <div className="space-y-4">
                            {topContent.map((content, index) => (
                                <div
                                    key={content.id}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-medium text-zinc-100 truncate group-hover:text-accent transition-colors">
                                            {content.title}
                                        </h4>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-zinc-500">
                                                <Eye className="w-3 h-3 inline mr-1" />
                                                {(content.views / 1000).toFixed(1)}K views
                                            </span>
                                            <span className="text-xs text-zinc-500">
                                                <Target className="w-3 h-3 inline mr-1" />
                                                {content.engagement}% engagement
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${content.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' :
                                            content.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                                                'bg-zinc-700/50 text-zinc-400'
                                        }`}>
                                        {content.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> :
                                            content.trend === 'down' ? <ArrowDownRight className="w-3 h-3" /> :
                                                <span className="w-2 h-0.5 bg-zinc-400 rounded" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats & Goals */}
                    <div className="glass-card rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-100">Monthly Goals</h3>
                                <p className="text-sm text-zinc-400">Progress towards targets</p>
                            </div>
                            <Calendar className="w-5 h-5 text-accent" />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-zinc-300">Pageview Target</span>
                                    <span className="text-sm font-medium text-accent">2.4M / 3M</span>
                                </div>
                                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[80%] bg-gradient-to-r from-accent to-amber-500 rounded-full" />
                                </div>
                                <p className="text-xs text-zinc-500 mt-1">80% complete • 6 days remaining</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-zinc-300">New Subscribers</span>
                                    <span className="text-sm font-medium text-emerald-400">12.4K / 10K</span>
                                </div>
                                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                                </div>
                                <p className="text-xs text-emerald-400 mt-1">🎉 Goal exceeded by 24%!</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-zinc-300">Avg. Session Duration</span>
                                    <span className="text-sm font-medium text-purple-400">4m 32s / 5m</span>
                                </div>
                                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[90%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                </div>
                                <p className="text-xs text-zinc-500 mt-1">90% of target • +28s from last month</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-zinc-300">Article Publications</span>
                                    <span className="text-sm font-medium text-blue-400">18 / 25</span>
                                </div>
                                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[72%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                                </div>
                                <p className="text-xs text-zinc-500 mt-1">72% complete • 7 articles pending</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Link */}
                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="text-accent hover:text-accent-light transition-colors inline-flex items-center gap-2"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
