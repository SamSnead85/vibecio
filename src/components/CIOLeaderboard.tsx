import { Users, ArrowRight, Award, Building2 } from 'lucide-react';
import type { Leader } from '../types';

interface CIOLeaderboardProps {
    leaders: Leader[];
    onSelectLeader: (leader: Leader) => void;
}

export default function CIOLeaderboard({ leaders, onSelectLeader }: CIOLeaderboardProps) {
    return (
        <section id="leaders" className="section bg-gradient-to-b from-[var(--color-zinc-950)] via-[var(--color-zinc-900)]/50 to-[var(--color-zinc-950)] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/[0.02] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/[0.015] rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header - Enhanced */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20 shadow-lg shadow-[var(--color-accent)]/10">
                            <Users className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                                Featured Leaders
                            </h2>
                            <p className="text-base text-[var(--color-zinc-500)] max-w-md">
                                Visionary CIOs and technology executives shaping the future of enterprise AI
                            </p>
                        </div>
                    </div>
                    <span className="hidden md:flex items-center gap-2 text-sm text-[var(--color-zinc-500)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse-slow" />
                        Click to explore profiles
                    </span>
                </div>

                {/* Leaders Grid - Netflix Style */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {leaders.map((leader, index) => (
                        <button
                            key={leader.id}
                            onClick={() => onSelectLeader(leader)}
                            className="text-left netflix-card glow-accent rounded-2xl overflow-hidden cursor-pointer stagger-item bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            {/* Card Header with Avatar */}
                            <div className="relative p-6 pb-4">
                                {/* Avatar with Status */}
                                <div className="relative mb-5">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent-hover)] to-[var(--color-accent)] flex items-center justify-center shadow-xl shadow-[var(--color-accent)]/20 group-hover:scale-105 transition-transform duration-500">
                                        <span className="text-3xl font-bold text-[var(--color-zinc-950)]">
                                            {leader.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    {/* Online Status Indicator */}
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-[var(--color-zinc-900)] flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    </div>
                                </div>

                                {/* Name and Role */}
                                <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors mb-2">
                                    {leader.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)] mb-4">
                                    <Building2 size={14} className="text-[var(--color-accent)]" />
                                    <span className="font-medium">{leader.title}</span>
                                    <span className="text-[var(--color-zinc-600)]">at</span>
                                    <span className="text-[var(--color-zinc-300)]">{leader.company}</span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[var(--color-zinc-700)] to-transparent" />

                            {/* Card Body */}
                            <div className="p-6 pt-4 netflix-content">
                                {/* Bio Preview */}
                                <p className="text-sm text-[var(--color-zinc-400)] line-clamp-2 mb-5 leading-relaxed">
                                    {leader.bio.substring(0, 120)}...
                                </p>

                                {/* Expertise Tags */}
                                <div className="mb-5">
                                    <div className="flex items-center gap-1.5 mb-2">
                                        <Award size={12} className="text-[var(--color-accent)]" />
                                        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-accent)]">Expertise</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {leader.expertise.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-xs bg-[var(--color-zinc-800)]/60 text-[var(--color-zinc-300)] rounded-lg border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3">
                                    View Full Profile <ArrowRight size={14} />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
