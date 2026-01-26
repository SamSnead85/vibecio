import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Crown, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Phase 1031-1040: Premium Content Hub
// Exclusive content section with magazine-style layout

interface MagazineIssue {
    id: string;
    title: string;
    coverImage: string;
    issueDate: string;
    highlights: string[];
    articleCount: number;
    exclusive: boolean;
}

interface FeaturedSeries {
    id: string;
    title: string;
    description: string;
    episodes: number;
    category: string;
    image: string;
    progress?: number;
}

const magazineIssues: MagazineIssue[] = [
    { id: 'jan-2026', title: 'The AI Orchestrator Era', coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800', issueDate: 'January 2026', highlights: ['AI-Native Teams', 'NVIDIA Groq Deal', 'Financial Services Inflection'], articleCount: 24, exclusive: true },
    { id: 'dec-2025', title: 'End of Year Review: AI Milestones', coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800', issueDate: 'December 2025', highlights: ['o3 Launch', 'Claude 4 Release', 'Enterprise AI Trends'], articleCount: 28, exclusive: true },
    { id: 'nov-2025', title: 'Healthcare AI Revolution', coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', issueDate: 'November 2025', highlights: ['HIPAA Compliance', 'Drug Discovery', 'Contact Centers'], articleCount: 22, exclusive: false }
];

const featuredSeries: FeaturedSeries[] = [
    { id: 'ai-foundations', title: 'AI Foundations Masterclass', description: 'A comprehensive guide to building enterprise AI capabilities', episodes: 12, category: 'Strategy', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', progress: 45 },
    { id: 'cio-interviews', title: 'CIO Spotlight Interviews', description: 'In-depth conversations with Fortune 500 technology leaders', episodes: 24, category: 'Leadership', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800', progress: 30 },
    { id: 'tech-deep-dives', title: 'Technology Deep Dives', description: 'Technical explorations of cutting-edge AI infrastructure', episodes: 18, category: 'Technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800' }
];

export default function PremiumContent() {
    const [activeIssue, setActiveIssue] = useState(0);

    const nextIssue = () => setActiveIssue((prev) => (prev + 1) % magazineIssues.length);
    const prevIssue = () => setActiveIssue((prev) => (prev - 1 + magazineIssues.length) % magazineIssues.length);

    return (
        <section className="section bg-zinc-950 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="container relative">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Crown className="w-5 h-5 text-accent" />
                            <span className="text-sm font-medium text-accent uppercase tracking-wider">Premium</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100">Exclusive Content</h2>
                        <p className="text-zinc-400 mt-2">Magazine issues, deep-dive series, and member-only insights</p>
                    </div>
                    <Link to="/subscribe" className="hidden md:flex btn-primary">Upgrade to Premium</Link>
                </div>

                {/* Magazine Carousel */}
                <div className="relative mb-16">
                    <div className="glass-card rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Cover Image */}
                            <div className="relative h-[400px] lg:h-[500px]">
                                <img src={magazineIssues[activeIssue].coverImage} alt={magazineIssues[activeIssue].title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-900 lg:block hidden" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent lg:hidden" />
                                {magazineIssues[activeIssue].exclusive && (
                                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-accent text-zinc-950 rounded-full text-xs font-bold">
                                        <Crown className="w-3 h-3" />Premium Exclusive
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-zinc-500 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>{magazineIssues[activeIssue].issueDate}</span>
                                    <span className="mx-2">•</span>
                                    <Newspaper className="w-4 h-4" />
                                    <span>{magazineIssues[activeIssue].articleCount} Articles</span>
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-display font-bold text-zinc-100 mb-4">
                                    {magazineIssues[activeIssue].title}
                                </h3>

                                <div className="mb-6">
                                    <p className="text-sm text-zinc-400 mb-3">In this issue:</p>
                                    <ul className="space-y-2">
                                        {magazineIssues[activeIssue].highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-center gap-2 text-zinc-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Link to={`/magazine/${magazineIssues[activeIssue].id}`} className="btn-primary">
                                        Read Issue <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link to="/magazine" className="btn-secondary">View Archive</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                        <button onClick={prevIssue} className="pointer-events-auto p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-accent hover:border-accent/50 transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={nextIssue} className="pointer-events-auto p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-accent hover:border-accent/50 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {magazineIssues.map((_, i) => (
                            <button key={i} onClick={() => setActiveIssue(i)} className={`w-2 h-2 rounded-full transition-all ${i === activeIssue ? 'bg-accent w-6' : 'bg-zinc-700 hover:bg-zinc-600'}`} />
                        ))}
                    </div>
                </div>

                {/* Featured Series */}
                <div>
                    <h3 className="text-2xl font-display font-bold text-zinc-100 mb-6">Featured Series</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featuredSeries.map((series) => (
                            <article key={series.id} className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-accent/30 transition-all">
                                <div className="relative h-48">
                                    <img src={series.image} alt={series.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="px-2 py-1 bg-zinc-800/80 text-xs text-zinc-300 rounded">{series.category}</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-accent transition-colors">{series.title}</h4>
                                    <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{series.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-zinc-500">{series.episodes} Episodes</span>
                                        {series.progress && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-accent rounded-full" style={{ width: `${series.progress}%` }} />
                                                </div>
                                                <span className="text-xs text-accent">{series.progress}%</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
