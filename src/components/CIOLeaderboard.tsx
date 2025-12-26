import { Users, ArrowRight } from 'lucide-react';
import type { Leader } from '../types';

interface CIOLeaderboardProps {
    leaders: Leader[];
    onSelectLeader: (leader: Leader) => void;
}

export default function CIOLeaderboard({ leaders, onSelectLeader }: CIOLeaderboardProps) {
    return (
        <section id="leaders" className="section">
            <div className="container">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <Users className="text-[var(--color-accent)]" size={24} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold">
                            Featured Leaders
                        </h2>
                    </div>
                    <span className="hidden sm:block text-sm text-[var(--color-zinc-500)]">
                        Click to read full bio
                    </span>
                </div>

                {/* Leaders Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {leaders.map((leader, index) => (
                        <button
                            key={leader.id}
                            onClick={() => onSelectLeader(leader)}
                            className="text-left glass-card rounded-lg p-6 card-hover group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Avatar placeholder */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-zinc-700)] flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-[var(--color-accent)]">
                                    {leader.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>

                            {/* Name and title */}
                            <h3 className="font-semibold text-lg text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
                                {leader.name}
                            </h3>
                            <p className="text-sm text-[var(--color-zinc-500)] mb-4">
                                {leader.title} at {leader.company}
                            </p>

                            {/* Bio preview */}
                            <p className="text-sm text-[var(--color-zinc-400)] line-clamp-2 mb-4">
                                {leader.bio.substring(0, 100)}...
                            </p>

                            {/* Expertise tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {leader.expertise.slice(0, 2).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read more */}
                            <div className="flex items-center gap-1 text-sm text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                                Read Bio <ArrowRight size={14} />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
