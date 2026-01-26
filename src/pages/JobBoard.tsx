import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Building, ChevronRight, Search, Star, Zap, TrendingUp } from 'lucide-react';

// Phase 1091-1100: CIO Job Board Page
// Executive-level tech job listings and career resources

interface JobListing {
    id: string;
    title: string;
    company: string;
    companyLogo: string;
    location: string;
    type: 'full-time' | 'contract' | 'interim';
    level: 'C-Suite' | 'VP' | 'Director';
    salary: { min: number; max: number };
    posted: string;
    featured: boolean;
    remote: boolean;
    skills: string[];
    description: string;
}

const jobListings: JobListing[] = [
    { id: '1', title: 'Chief Information Officer', company: 'TechForward Capital', companyLogo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=100', location: 'San Francisco, CA', type: 'full-time', level: 'C-Suite', salary: { min: 450, max: 600 }, posted: '2 days ago', featured: true, remote: true, skills: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation'], description: 'Lead technology strategy for a $2B investment firm...' },
    { id: '2', title: 'Chief Technology Officer', company: 'HealthFirst Systems', companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100', location: 'Boston, MA', type: 'full-time', level: 'C-Suite', salary: { min: 400, max: 550 }, posted: '3 days ago', featured: true, remote: false, skills: ['Healthcare IT', 'HIPAA Compliance', 'Cloud Infrastructure'], description: 'Transform healthcare delivery through technology innovation...' },
    { id: '3', title: 'VP of Engineering', company: 'Nexus Dynamics', companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100', location: 'New York, NY', type: 'full-time', level: 'VP', salary: { min: 350, max: 450 }, posted: '1 week ago', featured: false, remote: true, skills: ['AI/ML', 'Team Leadership', 'Agile'], description: 'Lead a 200+ engineering team building AI products...' },
    { id: '4', title: 'Interim CIO', company: 'RetailMax', companyLogo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100', location: 'Chicago, IL', type: 'interim', level: 'C-Suite', salary: { min: 500, max: 700 }, posted: '5 days ago', featured: false, remote: false, skills: ['Retail Tech', 'M&A Integration', 'Crisis Management'], description: 'Guide technology transition during acquisition...' },
    { id: '5', title: 'Chief Digital Officer', company: 'Pacific Bank', companyLogo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100', location: 'Seattle, WA', type: 'full-time', level: 'C-Suite', salary: { min: 420, max: 580 }, posted: '4 days ago', featured: true, remote: true, skills: ['FinTech', 'Digital Banking', 'Customer Experience'], description: 'Drive digital transformation for a regional bank...' },
    { id: '6', title: 'Director of AI Strategy', company: 'AutoDrive', companyLogo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100', location: 'Austin, TX', type: 'full-time', level: 'Director', salary: { min: 280, max: 350 }, posted: '1 week ago', featured: false, remote: true, skills: ['Autonomous Systems', 'AI Governance', 'Product Strategy'], description: 'Shape AI strategy for autonomous vehicle technology...' }
];

const filters = {
    levels: ['All Levels', 'C-Suite', 'VP', 'Director'],
    types: ['All Types', 'Full-time', 'Contract', 'Interim'],
    locations: ['All Locations', 'Remote', 'San Francisco', 'New York', 'Boston']
};

export default function JobBoard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [levelFilter, setLevelFilter] = useState('All Levels');
    const [typeFilter, setTypeFilter] = useState('All Types');
    const [showRemoteOnly, setShowRemoteOnly] = useState(false);

    const filteredJobs = jobListings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.company.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = levelFilter === 'All Levels' || job.level === levelFilter;
        const matchesType = typeFilter === 'All Types' || job.type === typeFilter.toLowerCase();
        const matchesRemote = !showRemoteOnly || job.remote;
        return matchesSearch && matchesLevel && matchesType && matchesRemote;
    });

    const featuredJobs = filteredJobs.filter(j => j.featured);
    const regularJobs = filteredJobs.filter(j => !j.featured);

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                        <Briefcase className="w-4 h-4" />
                        Executive Opportunities
                    </div>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-zinc-100 mb-2">CIO Job Board</h1>
                    <p className="text-zinc-400 max-w-xl mx-auto">Exclusive executive technology positions from leading organizations</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { icon: <Briefcase className="w-5 h-5" />, value: '248', label: 'Open Positions' },
                        { icon: <Building className="w-5 h-5" />, value: '156', label: 'Companies Hiring' },
                        { icon: <TrendingUp className="w-5 h-5" />, value: '$485K', label: 'Avg. Salary' },
                        { icon: <Zap className="w-5 h-5" />, value: '67%', label: 'Remote Available' }
                    ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-xl p-4 text-center">
                            <div className="text-accent mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
                            <div className="text-xs text-zinc-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Search & Filters */}
                <div className="glass-card rounded-2xl p-4 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input type="text" placeholder="Search by title, company, or skills..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-accent" />
                        </div>
                        <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)} className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300">
                            {filters.levels.map(l => <option key={l}>{l}</option>)}
                        </select>
                        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300">
                            {filters.types.map(t => <option key={t}>{t}</option>)}
                        </select>
                        <label className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl cursor-pointer">
                            <input type="checkbox" checked={showRemoteOnly} onChange={(e) => setShowRemoteOnly(e.target.checked)} className="accent-accent" />
                            <span className="text-zinc-300 text-sm">Remote Only</span>
                        </label>
                    </div>
                </div>

                {/* Featured Jobs */}
                {featuredJobs.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-amber-400" />Featured Positions
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {featuredJobs.map((job) => (
                                <article key={job.id} className="glass-card rounded-2xl p-6 border-amber-500/20 hover:border-accent/30 transition-all cursor-pointer group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-800 flex-shrink-0">
                                            <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded-full">Featured</span>
                                                {job.remote && <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Remote</span>}
                                            </div>
                                            <h3 className="font-semibold text-lg text-zinc-100 group-hover:text-accent transition-colors">{job.title}</h3>
                                            <p className="text-zinc-400">{job.company}</p>
                                            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-zinc-500">
                                                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                                                <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />${job.salary.min}K - ${job.salary.max}K</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.posted}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {job.skills.slice(0, 3).map((skill, i) => (
                                                    <span key={i} className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded">{skill}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-accent transition-colors" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}

                {/* All Jobs */}
                <div>
                    <h2 className="text-lg font-semibold text-zinc-100 mb-4">All Positions ({regularJobs.length})</h2>
                    <div className="space-y-4">
                        {regularJobs.map((job) => (
                            <article key={job.id} className="glass-card rounded-xl p-5 hover:border-accent/30 transition-all cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                                        <img src={job.companyLogo} alt={job.company} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-zinc-100 group-hover:text-accent transition-colors">{job.title}</h3>
                                        <p className="text-sm text-zinc-400">{job.company} · {job.location}</p>
                                    </div>
                                    <div className="hidden md:block text-right">
                                        <div className="text-zinc-100 font-medium">${job.salary.min}K - ${job.salary.max}K</div>
                                        <div className="text-xs text-zinc-500">{job.posted}</div>
                                    </div>
                                    {job.remote && <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">Remote</span>}
                                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-accent transition-colors" />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 glass-card rounded-3xl p-8 text-center bg-gradient-to-br from-accent/5 to-transparent">
                    <h2 className="text-2xl font-display font-bold text-zinc-100 mb-3">Looking for Top Tech Talent?</h2>
                    <p className="text-zinc-400 mb-6 max-w-xl mx-auto">Post your executive technology positions to reach 150K+ qualified CIOs and tech leaders.</p>
                    <button className="btn-primary">Post a Job - $499</button>
                </div>
            </div>
        </div>
    );
}
