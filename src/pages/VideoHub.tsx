import { useState } from 'react';

import { Video, Play, Clock, Calendar, Users, Search } from 'lucide-react';

// Phase 1041-1050: Video Content Hub Page
// Video interviews, tutorials, and conference recordings

interface VideoContent {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    date: string;
    views: number;
    category: 'interview' | 'tutorial' | 'conference' | 'webinar';
    speaker?: string;
    premium: boolean;
}

const videos: VideoContent[] = [
    { id: 'v1', title: 'AI Transformation: A CIO Roundtable', description: 'Top CIOs discuss enterprise AI adoption strategies and challenges.', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800', duration: '45:32', date: '2026-01-20', views: 12400, category: 'interview', speaker: 'Panel Discussion', premium: false },
    { id: 'v2', title: 'Building Agentic AI Workflows', description: 'Step-by-step guide to implementing autonomous AI agents.', thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', duration: '28:15', date: '2026-01-18', views: 8900, category: 'tutorial', premium: true },
    { id: 'v3', title: 'Enterprise AI Summit 2026 Keynote', description: 'Opening keynote from the annual Enterprise AI Summit.', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', duration: '1:12:45', date: '2026-01-15', views: 24500, category: 'conference', premium: false },
    { id: 'v4', title: 'HIPAA Compliance for AI Systems', description: 'Healthcare AI compliance workshop recording.', thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', duration: '52:18', date: '2026-01-12', views: 6700, category: 'webinar', premium: true },
    { id: 'v5', title: 'Interview: Elena Rodriguez, Nexus Dynamics', description: 'In-depth conversation on leading AI transformation at scale.', thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', duration: '38:22', date: '2026-01-10', views: 15200, category: 'interview', speaker: 'Elena Rodriguez', premium: false },
    { id: 'v6', title: 'RAG Architecture Deep Dive', description: 'Technical tutorial on Retrieval-Augmented Generation patterns.', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', duration: '42:10', date: '2026-01-08', views: 9100, category: 'tutorial', premium: true }
];

const categories = ['All', 'Interviews', 'Tutorials', 'Conferences', 'Webinars'];

export default function VideoHub() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredVideos = videos.filter(video => {
        const matchesCategory = activeCategory === 'All' || video.category === activeCategory.toLowerCase().slice(0, -1);
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            interview: 'bg-blue-500/20 text-blue-400',
            tutorial: 'bg-emerald-500/20 text-emerald-400',
            conference: 'bg-purple-500/20 text-purple-400',
            webinar: 'bg-amber-500/20 text-amber-400'
        };
        return colors[category] || 'bg-zinc-500/20 text-zinc-400';
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="flex items-start gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                        <Video className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-zinc-100">Video Library</h1>
                        <p className="text-zinc-400 mt-1">Interviews, tutorials, and conference recordings</p>
                    </div>
                </div>

                {/* Featured Video */}
                <div className="mb-12">
                    <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                        <div className="aspect-video">
                            <img src={videos[0].thumbnail} alt={videos[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-10 h-10 text-zinc-950 ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(videos[0].category)}`}>
                                {videos[0].category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-100 mb-2">{videos[0].title}</h2>
                            <p className="text-zinc-400 mb-4 max-w-2xl">{videos[0].description}</p>
                            <div className="flex items-center gap-4 text-sm text-zinc-500">
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{videos[0].duration}</span>
                                <span className="flex items-center gap-1"><Users className="w-4 h-4" />{(videos[0].views / 1000).toFixed(1)}K views</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{videos[0].date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input type="text" placeholder="Search videos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-accent" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-accent text-zinc-950 font-medium' : 'bg-zinc-800 text-zinc-400 hover:text-zinc-100'}`}>{cat}</button>
                        ))}
                    </div>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.slice(1).map((video) => (
                        <article key={video.id} className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-accent/30 transition-all">
                            <div className="relative">
                                <div className="aspect-video overflow-hidden">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/50">
                                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                                        <Play className="w-7 h-7 text-zinc-950 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 px-2 py-1 bg-zinc-950/80 rounded text-xs text-zinc-300">
                                    {video.duration}
                                </div>
                                {video.premium && (
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-accent text-zinc-950 rounded text-xs font-bold">
                                        Premium
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${getCategoryColor(video.category)}`}>
                                    {video.category}
                                </span>
                                <h3 className="font-semibold text-zinc-100 mb-2 group-hover:text-accent transition-colors line-clamp-2">{video.title}</h3>
                                <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{video.description}</p>
                                <div className="flex items-center justify-between text-xs text-zinc-500">
                                    <span>{video.date}</span>
                                    <span>{(video.views / 1000).toFixed(1)}K views</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                    <button className="btn-secondary">Load More Videos</button>
                </div>
            </div>
        </div>
    );
}
