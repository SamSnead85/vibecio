import { Mic, Play, Clock, Calendar, Headphones, ArrowRight, Users, TrendingUp, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';
import type { Podcast } from '../types';

// Podcast episodes data
const episodes: Podcast[] = [
    {
        id: 'ep-25',
        title: 'The Future of Agentic AI in Enterprise',
        guest: 'Dr. Fei-Fei Li',
        guestTitle: 'Co-Director, Stanford HAI',
        duration: 58,
        date: '2026-01-20',
        description: 'Dr. Li discusses the transition from generative to agentic AI and what it means for enterprise technology leaders preparing for autonomous systems.',
        image: 'https://images.unsplash.com/photo-1633477189729-9290b3261d0a?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-24',
        title: 'Building AI-Native Organizations',
        guest: 'Satya Nadella',
        guestTitle: 'CEO, Microsoft',
        duration: 52,
        date: '2026-01-13',
        description: 'An exclusive conversation about organizational transformation in the age of AI, the future of work, and Microsoft\'s enterprise AI strategy.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-23',
        title: 'Sovereign AI and National Strategy',
        guest: 'Jensen Huang',
        guestTitle: 'CEO, NVIDIA',
        duration: 64,
        date: '2026-01-06',
        description: 'Jensen Huang on NVIDIA\'s vision for sovereign AI infrastructure, the Groq licensing deal, and the future of AI compute.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-22',
        title: 'CIO Lessons from AI Implementation',
        guest: 'Elena Rodriguez',
        guestTitle: 'Global CIO, Nexus Dynamics',
        duration: 48,
        date: '2025-12-30',
        description: 'Practical insights from leading AI transformation at a Fortune 100 company, including common pitfalls and success patterns.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-21',
        title: 'Healthcare AI: Compliance and Innovation',
        guest: 'Dr. David Chen',
        guestTitle: 'CTO, Vertex Healthcare',
        duration: 55,
        date: '2025-12-23',
        description: 'How healthcare organizations are deploying AI while maintaining HIPAA compliance and patient trust.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-20',
        title: 'The 100x Orchestrator Mindset',
        guest: 'Marcus Williams',
        guestTitle: 'CIO, Global Logistics Corp',
        duration: 42,
        date: '2025-12-16',
        description: 'Exploring the shift from traditional development to AI orchestration and what it means for technology talent.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-19',
        title: 'AI Security: Offensive and Defensive Strategies',
        guest: 'Dr. Sarah Blackwell',
        guestTitle: 'CISO, Fortress Financial',
        duration: 51,
        date: '2025-12-09',
        description: 'A deep dive into AI-powered cyberattacks and how security teams are building defensive AI capabilities.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-18',
        title: 'Quantum Computing Meets Enterprise AI',
        guest: 'Dr. John Martinis',
        guestTitle: 'Former Head of Quantum AI, Google',
        duration: 62,
        date: '2025-12-02',
        description: 'Understanding the intersection of quantum computing and AI, and when enterprises should start preparing.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-17',
        title: 'Responsible AI Governance at Scale',
        guest: 'Dr. Timnit Gebru',
        guestTitle: 'Founder, DAIR Institute',
        duration: 57,
        date: '2025-11-25',
        description: 'Building AI governance frameworks that balance innovation with ethics and accountability.',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-16',
        title: 'Edge AI in Manufacturing',
        guest: 'Thomas Mueller',
        guestTitle: 'VP Technology, Continental Manufacturing',
        duration: 44,
        date: '2025-11-18',
        description: 'Real-world deployment of AI at the manufacturing edge, from predictive maintenance to quality control.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-15',
        title: 'LLMs in Production: Lessons Learned',
        guest: 'Dr. Amanda Richardson',
        guestTitle: 'VP of AI Engineering, Tech Giant',
        duration: 49,
        date: '2025-11-11',
        description: 'Technical deep dive into running large language models at enterprise scale, including cost optimization and reliability.',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop'
    },
    {
        id: 'ep-14',
        title: 'The Data Foundation for AI Success',
        guest: 'Jennifer Wu',
        guestTitle: 'CDO, Pacific Bank Holdings',
        duration: 46,
        date: '2025-11-04',
        description: 'Why data architecture is the critical foundation for AI success, and how to build it right.',
        image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop'
    }
];


export default function PodcastPage() {
    const [playingEpisode, setPlayingEpisode] = useState<string | null>(null);
    const latestEpisode = episodes[0];
    const olderEpisodes = episodes.slice(1);

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center border border-purple-500/20">
                                <Mic className="text-purple-400" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-purple-400">Podcast</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            The VibeCIO<br />Podcast
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-3xl mb-8">
                            Weekly conversations with the CIOs, CTOs, and technology visionaries
                            shaping the future of enterprise technology.
                        </p>

                        {/* Podcast Platforms */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-sm text-[var(--color-zinc-500)]">Listen on:</span>
                            {['Apple Podcasts', 'Spotify', 'YouTube', 'RSS'].map((platform) => (
                                <button
                                    key={platform}
                                    className="px-4 py-2 text-sm font-medium bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-lg hover:bg-[var(--color-zinc-700)] hover:text-[var(--color-accent)] transition-colors border border-[var(--color-zinc-700)]"
                                >
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Episode - Featured */}
            <section className="py-12">
                <div className="container">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                            New Episode
                        </div>
                        <span className="text-sm text-[var(--color-zinc-500)]">
                            Released {new Date(latestEpisode.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                        </span>
                    </div>

                    <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-purple-500/20">
                        <div className="grid lg:grid-cols-5 gap-8">
                            {/* Episode Image */}
                            <div className="lg:col-span-2 relative h-64 lg:h-auto">
                                <img
                                    src={latestEpisode.image}
                                    alt={latestEpisode.guest}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-zinc-950)]/50 lg:bg-gradient-to-t lg:from-transparent lg:to-transparent" />

                                {/* Play Button Overlay */}
                                <button
                                    onClick={() => setPlayingEpisode(playingEpisode === latestEpisode.id ? null : latestEpisode.id)}
                                    className="absolute inset-0 flex items-center justify-center group"
                                >
                                    <div className="w-20 h-20 rounded-full bg-purple-500/90 flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-transform">
                                        {playingEpisode === latestEpisode.id ? (
                                            <Pause size={32} className="text-white" fill="currentColor" />
                                        ) : (
                                            <Play size={32} className="text-white ml-1" fill="currentColor" />
                                        )}
                                    </div>
                                </button>
                            </div>

                            {/* Episode Details */}
                            <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-4 text-sm text-[var(--color-zinc-500)]">
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {latestEpisode.duration} min
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        Episode 25
                                    </span>
                                </div>

                                <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                    {latestEpisode.title}
                                </h2>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/20">
                                        {latestEpisode.guest.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[var(--color-zinc-100)]">{latestEpisode.guest}</div>
                                        <div className="text-sm text-[var(--color-zinc-500)]">{latestEpisode.guestTitle}</div>
                                    </div>
                                </div>

                                <p className="text-[var(--color-zinc-400)] mb-8">
                                    {latestEpisode.description}
                                </p>

                                {/* Audio Player Placeholder */}
                                {playingEpisode === latestEpisode.id && (
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-6">
                                        <Volume2 className="text-purple-400" size={20} />
                                        <div className="flex-1 h-2 bg-[var(--color-zinc-800)] rounded-full overflow-hidden">
                                            <div className="w-1/3 h-full bg-purple-500 rounded-full animate-pulse" />
                                        </div>
                                        <span className="text-sm text-[var(--color-zinc-500)]">12:34 / {latestEpisode.duration}:00</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20">
                                        <Headphones size={18} />
                                        Listen Now
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                        View Transcript
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Episodes */}
            <section className="py-16">
                <div className="container">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center border border-purple-500/20">
                            <Headphones className="text-purple-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                All Episodes
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">{episodes.length} episodes available</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {olderEpisodes.map((episode, index) => (
                            <div
                                key={episode.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Episode Thumbnail */}
                                    <div className="md:w-48 h-40 md:h-auto relative flex-shrink-0">
                                        <img
                                            src={episode.image}
                                            alt={episode.guest}
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            onClick={() => setPlayingEpisode(playingEpisode === episode.id ? null : episode.id)}
                                            className="absolute inset-0 flex items-center justify-center bg-[var(--color-zinc-950)]/50 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <div className="w-14 h-14 rounded-full bg-purple-500/90 flex items-center justify-center">
                                                {playingEpisode === episode.id ? (
                                                    <Pause size={24} className="text-white" fill="currentColor" />
                                                ) : (
                                                    <Play size={24} className="text-white ml-0.5" fill="currentColor" />
                                                )}
                                            </div>
                                        </button>
                                    </div>

                                    {/* Episode Info */}
                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-2 text-sm text-[var(--color-zinc-500)]">
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={12} />
                                                {episode.duration} min
                                            </span>
                                            <span>
                                                {new Date(episode.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-purple-400 transition-colors">
                                            {episode.title}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-sm font-medium text-purple-400">{episode.guest}</span>
                                            <span className="text-[var(--color-zinc-600)]">•</span>
                                            <span className="text-sm text-[var(--color-zinc-500)]">{episode.guestTitle}</span>
                                        </div>

                                        <p className="text-sm text-[var(--color-zinc-400)] line-clamp-2">
                                            {episode.description}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="p-6 flex items-center justify-end md:justify-center">
                                        <button className="flex items-center gap-2 text-sm text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-all group-hover:gap-3">
                                            Listen <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscribe CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto glass-premium rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                        <Users className="mx-auto text-purple-400 mb-6" size={48} />

                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Never Miss an Episode
                        </h2>

                        <p className="text-lg text-[var(--color-zinc-400)] mb-8 max-w-2xl mx-auto">
                            Subscribe to The VibeCIO Podcast and get new episodes delivered
                            every Monday morning.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/20">
                                <TrendingUp size={18} />
                                Subscribe via Email
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                Apple Podcasts
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                Spotify
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
