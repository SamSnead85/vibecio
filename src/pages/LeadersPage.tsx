import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { leaders } from '../data/content';
import { Building, ArrowRight, Search } from 'lucide-react';

export default function LeadersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [expertiseFilter, setExpertiseFilter] = useState<string>('all');

    // Get unique expertise areas
    const expertiseAreas = useMemo(() => {
        const areas = new Set<string>();
        leaders.forEach(leader => leader.expertise.forEach(e => areas.add(e)));
        return ['all', ...Array.from(areas).sort()];
    }, []);

    const filteredLeaders = useMemo(() => {
        return leaders.filter(leader => {
            const matchesSearch = searchQuery === '' ||
                leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                leader.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                leader.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesExpertise = expertiseFilter === 'all' ||
                leader.expertise.includes(expertiseFilter);
            return matchesSearch && matchesExpertise;
        });
    }, [searchQuery, expertiseFilter]);

    // Avatar color based on name
    const avatarColors = [
        'from-blue-500 to-indigo-600',
        'from-emerald-500 to-teal-600',
        'from-violet-500 to-purple-600',
        'from-amber-500 to-orange-600',
        'from-rose-500 to-pink-600',
        'from-cyan-500 to-blue-600',
    ];

    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        CIO <span className="text-[var(--color-accent)]">Leaders</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)]">
                        Meet the visionary technology executives shaping the future of enterprise AI.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]" size={20} />
                        <input
                            type="text"
                            placeholder="Search leaders..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                        />
                    </div>

                    {/* Expertise Filter */}
                    <select
                        value={expertiseFilter}
                        onChange={(e) => setExpertiseFilter(e.target.value)}
                        className="px-4 py-3 rounded-xl bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all text-white"
                    >
                        {expertiseAreas.map(area => (
                            <option key={area} value={area}>
                                {area === 'all' ? 'All Expertise' : area}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Leaders Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredLeaders.map((leader) => {
                        const initials = leader.name.split(' ').map(n => n[0]).join('');
                        const colorIndex = leader.name.charCodeAt(0) % avatarColors.length;

                        return (
                            <Link
                                key={leader.id}
                                to={`/leader/${leader.id}`}
                                className="group bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/50 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    {/* Avatar */}
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center flex-shrink-0`}>
                                        <span className="text-xl font-bold text-white">{initials}</span>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 min-w-0">
                                        <h2 className="text-xl font-semibold truncate group-hover:text-[var(--color-accent)] transition-colors">
                                            {leader.name}
                                        </h2>
                                        <p className="text-[var(--color-accent)] text-sm">{leader.title}</p>
                                        <div className="flex items-center gap-1 text-sm text-[var(--color-zinc-400)] mt-1">
                                            <Building size={14} />
                                            <span className="truncate">{leader.company}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Preview */}
                                <p className="text-sm text-[var(--color-zinc-400)] line-clamp-3 mb-4">
                                    {leader.bio}
                                </p>

                                {/* Expertise Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {leader.expertise.slice(0, 3).map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs rounded-full bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] text-[var(--color-zinc-400)]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-1 text-sm text-[var(--color-accent)] group-hover:gap-2 transition-all">
                                    View Profile <ArrowRight size={14} />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredLeaders.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[var(--color-zinc-400)]">No leaders found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
