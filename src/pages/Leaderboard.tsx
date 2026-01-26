import { useState } from 'react';
import { Trophy, Medal, Crown, ArrowUp, ArrowDown, Minus } from 'lucide-react';

// Phase 1061-1070: Leaderboard & Rankings Component
// Gamified engagement with top contributors and readers

interface LeaderboardEntry {
    rank: number;
    previousRank: number;
    name: string;
    avatar: string;
    title: string;
    company: string;
    score: number;
    articles?: number;
    comments?: number;
    shares?: number;
    badge?: 'gold' | 'silver' | 'bronze';
}

const topContributors: LeaderboardEntry[] = [
    { rank: 1, previousRank: 1, name: 'Elena Rodriguez', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', title: 'Global CIO', company: 'Nexus Dynamics', score: 12450, articles: 24, comments: 156, shares: 89, badge: 'gold' },
    { rank: 2, previousRank: 3, name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', title: 'CTO', company: 'Vertex Healthcare', score: 10890, articles: 18, comments: 203, shares: 67, badge: 'silver' },
    { rank: 3, previousRank: 2, name: 'Dr. Aisha Patel', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', title: 'CISO', company: 'Fortress Financial', score: 9780, articles: 15, comments: 178, shares: 54, badge: 'bronze' },
    { rank: 4, previousRank: 5, name: 'Marcus Williams', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', title: 'CIO', company: 'Global Logistics', score: 8920, articles: 12, comments: 145, shares: 48 },
    { rank: 5, previousRank: 4, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100', title: 'CDO', company: 'EcoGrid Energy', score: 8450, articles: 14, comments: 132, shares: 41 },
    { rank: 6, previousRank: 8, name: 'James Morrison', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100', title: 'CTO', company: 'MediaFlow', score: 7890, articles: 10, comments: 167, shares: 38 },
    { rank: 7, previousRank: 6, name: 'Lisa Chang', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', title: 'CIO', company: 'BioGenetics', score: 7650, articles: 11, comments: 124, shares: 35 },
    { rank: 8, previousRank: 7, name: 'Robert Nakamura', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', title: 'CDO', company: 'AutoDrive', score: 7320, articles: 9, comments: 156, shares: 32 }
];

type TimeRange = 'week' | 'month' | 'year' | 'all';

export default function Leaderboard() {
    const [timeRange, setTimeRange] = useState<TimeRange>('month');
    const [category, setCategory] = useState<'contributors' | 'readers' | 'commenters'>('contributors');

    const getRankChange = (current: number, previous: number) => {
        if (current < previous) return { icon: <ArrowUp className="w-3 h-3" />, color: 'text-emerald-400', change: previous - current };
        if (current > previous) return { icon: <ArrowDown className="w-3 h-3" />, color: 'text-red-400', change: current - previous };
        return { icon: <Minus className="w-3 h-3" />, color: 'text-zinc-500', change: 0 };
    };

    const getBadgeIcon = (badge?: 'gold' | 'silver' | 'bronze') => {
        if (badge === 'gold') return <Crown className="w-5 h-5 text-amber-400" />;
        if (badge === 'silver') return <Medal className="w-5 h-5 text-zinc-300" />;
        if (badge === 'bronze') return <Medal className="w-5 h-5 text-amber-700" />;
        return null;
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 text-sm font-medium mb-4">
                        <Trophy className="w-4 h-4" />
                        Community Leaders
                    </div>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mb-2">Leaderboard</h1>
                    <p className="text-zinc-400">Recognizing our most engaged community members</p>
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <div className="flex gap-1 p-1 bg-zinc-900 rounded-lg">
                        {(['contributors', 'readers', 'commenters'] as const).map((cat) => (
                            <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-md text-sm capitalize transition-colors ${category === cat ? 'bg-accent text-zinc-950 font-medium' : 'text-zinc-400 hover:text-zinc-100'}`}>{cat}</button>
                        ))}
                    </div>
                    <div className="flex gap-1 p-1 bg-zinc-900 rounded-lg ml-auto">
                        {(['week', 'month', 'year', 'all'] as const).map((range) => (
                            <button key={range} onClick={() => setTimeRange(range)} className={`px-3 py-2 rounded-md text-sm capitalize transition-colors ${timeRange === range ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}>{range === 'all' ? 'All Time' : range}</button>
                        ))}
                    </div>
                </div>

                {/* Top 3 Podium */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {/* 2nd Place */}
                    <div className="glass-card rounded-2xl p-6 text-center mt-8">
                        <div className="relative w-16 h-16 mx-auto mb-3">
                            <img src={topContributors[1].avatar} alt={topContributors[1].name} className="w-full h-full rounded-full object-cover border-2 border-zinc-300" />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-zinc-300 text-zinc-900 flex items-center justify-center text-xs font-bold">2</div>
                        </div>
                        <h3 className="font-semibold text-zinc-100 text-sm">{topContributors[1].name}</h3>
                        <p className="text-xs text-zinc-500">{topContributors[1].company}</p>
                        <p className="text-lg font-bold text-zinc-300 mt-2">{topContributors[1].score.toLocaleString()}</p>
                    </div>

                    {/* 1st Place */}
                    <div className="glass-card rounded-2xl p-6 text-center border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent">
                        <Crown className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                        <div className="relative w-20 h-20 mx-auto mb-3">
                            <img src={topContributors[0].avatar} alt={topContributors[0].name} className="w-full h-full rounded-full object-cover border-3 border-amber-400" />
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-amber-400 text-zinc-900 flex items-center justify-center text-sm font-bold">1</div>
                        </div>
                        <h3 className="font-semibold text-zinc-100">{topContributors[0].name}</h3>
                        <p className="text-sm text-zinc-500">{topContributors[0].company}</p>
                        <p className="text-2xl font-bold text-amber-400 mt-2">{topContributors[0].score.toLocaleString()}</p>
                    </div>

                    {/* 3rd Place */}
                    <div className="glass-card rounded-2xl p-6 text-center mt-8">
                        <div className="relative w-16 h-16 mx-auto mb-3">
                            <img src={topContributors[2].avatar} alt={topContributors[2].name} className="w-full h-full rounded-full object-cover border-2 border-amber-700" />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">3</div>
                        </div>
                        <h3 className="font-semibold text-zinc-100 text-sm">{topContributors[2].name}</h3>
                        <p className="text-xs text-zinc-500">{topContributors[2].company}</p>
                        <p className="text-lg font-bold text-amber-700 mt-2">{topContributors[2].score.toLocaleString()}</p>
                    </div>
                </div>

                {/* Full Leaderboard */}
                <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-zinc-800">
                        <h3 className="font-semibold text-zinc-100">Full Rankings</h3>
                    </div>
                    <div className="divide-y divide-zinc-800/50">
                        {topContributors.map((entry) => {
                            const rankChange = getRankChange(entry.rank, entry.previousRank);
                            return (
                                <div key={entry.rank} className="flex items-center gap-4 p-4 hover:bg-zinc-800/30 transition-colors">
                                    <div className="w-8 text-center font-bold text-zinc-400">{entry.rank}</div>
                                    <div className={`w-6 flex items-center justify-center ${rankChange.color}`}>
                                        {rankChange.icon}
                                    </div>
                                    <img src={entry.avatar} alt={entry.name} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-zinc-100">{entry.name}</span>
                                            {getBadgeIcon(entry.badge)}
                                        </div>
                                        <p className="text-sm text-zinc-500">{entry.title} at {entry.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-zinc-100">{entry.score.toLocaleString()}</div>
                                        <div className="text-xs text-zinc-500">points</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* How to Earn Points */}
                <div className="mt-8 glass-card rounded-2xl p-6">
                    <h3 className="font-semibold text-zinc-100 mb-4">How to Earn Points</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { action: 'Publish Article', points: '+500' },
                            { action: 'Comment', points: '+10' },
                            { action: 'Share Article', points: '+25' },
                            { action: 'Get Featured', points: '+1000' }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-4 bg-zinc-800/50 rounded-xl">
                                <div className="text-lg font-bold text-accent">{item.points}</div>
                                <div className="text-sm text-zinc-400">{item.action}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
