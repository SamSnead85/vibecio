import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Lock, Search, ChevronRight, FileBarChart } from 'lucide-react';

// Phase 1081-1090: Enterprise Content Types - Whitepapers & Reports Hub
// Premium downloadable content for enterprise readers

interface Whitepaper {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
    pages: number;
    downloads: number;
    premium: boolean;
    image: string;
    topics: string[];
}

const whitepapers: Whitepaper[] = [
    { id: 'ai-governance-2026', title: 'Enterprise AI Governance Framework 2026', description: 'A comprehensive guide to building AI governance structures that enable innovation while managing risk.', category: 'AI Governance', date: 'January 2026', pages: 48, downloads: 12500, premium: false, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', topics: ['Compliance', 'Risk Management', 'Best Practices'] },
    { id: 'cio-salary-survey', title: 'CIO Compensation Report 2026', description: 'Comprehensive analysis of CIO salaries, bonuses, and benefits across industries and geographies.', category: 'Executive Insights', date: 'January 2026', pages: 36, downloads: 8900, premium: true, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', topics: ['Compensation', 'Career', 'Industry Trends'] },
    { id: 'healthcare-ai-compliance', title: 'HIPAA-Compliant AI Implementation Guide', description: 'Step-by-step framework for deploying AI in healthcare while maintaining regulatory compliance.', category: 'Healthcare', date: 'December 2025', pages: 52, downloads: 6700, premium: true, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', topics: ['HIPAA', 'Healthcare AI', 'Compliance'] },
    { id: 'agentic-ai-playbook', title: 'The Agentic AI Playbook', description: 'Practical guidance for implementing autonomous AI agents in enterprise workflows.', category: 'Technology', date: 'December 2025', pages: 44, downloads: 9800, premium: false, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', topics: ['Agentic AI', 'Automation', 'Workflows'] },
    { id: 'digital-transformation-roi', title: 'Measuring Digital Transformation ROI', description: 'Frameworks and methodologies for quantifying the business value of digital initiatives.', category: 'Strategy', date: 'November 2025', pages: 40, downloads: 7200, premium: true, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', topics: ['ROI', 'Digital Transformation', 'Metrics'] },
    { id: 'cloud-cost-optimization', title: 'Enterprise Cloud Cost Optimization', description: 'Strategies for reducing cloud spend while maintaining performance and scalability.', category: 'Technology', date: 'November 2025', pages: 32, downloads: 5400, premium: false, image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800', topics: ['Cloud', 'Cost Optimization', 'FinOps'] }
];

const categories = ['All', 'AI Governance', 'Healthcare', 'Technology', 'Strategy', 'Executive Insights'];

export default function WhitepapersPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showPremiumOnly] = useState(false);

    const filteredPapers = whitepapers.filter(paper => {
        const matchesCategory = activeCategory === 'All' || paper.category === activeCategory;
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || paper.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesPremium = !showPremiumOnly || paper.premium;
        return matchesCategory && matchesSearch && matchesPremium;
    });

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <FileBarChart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-display font-bold text-zinc-100">Whitepapers & Reports</h1>
                            <p className="text-zinc-400">In-depth research and analysis for enterprise leaders</p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="glass-card rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-accent">48</div>
                            <div className="text-sm text-zinc-500">Publications</div>
                        </div>
                        <div className="glass-card rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-accent">125K+</div>
                            <div className="text-sm text-zinc-500">Downloads</div>
                        </div>
                        <div className="glass-card rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-accent">12</div>
                            <div className="text-sm text-zinc-500">Categories</div>
                        </div>
                        <div className="glass-card rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-accent">4.8★</div>
                            <div className="text-sm text-zinc-500">Avg. Rating</div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input type="text" placeholder="Search whitepapers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-accent" />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-accent text-zinc-950 font-medium' : 'bg-zinc-800 text-zinc-400 hover:text-zinc-100'}`}>{cat}</button>
                        ))}
                    </div>
                </div>

                {/* Papers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPapers.map((paper) => (
                        <article key={paper.id} className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 transition-all">
                            <div className="relative h-48">
                                <img src={paper.image} alt={paper.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                                {paper.premium && (
                                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-accent/90 text-zinc-950 rounded-full text-xs font-bold">
                                        <Lock className="w-3 h-3" />Premium
                                    </div>
                                )}
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-2 py-1 bg-zinc-800/90 text-zinc-300 text-xs rounded">{paper.category}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-accent transition-colors line-clamp-2">{paper.title}</h3>
                                <p className="text-sm text-zinc-400 mb-4 line-clamp-2">{paper.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {paper.topics.slice(0, 3).map((topic, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-zinc-800 text-zinc-500 text-xs rounded">{topic}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-4 text-zinc-500">
                                        <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" />{paper.pages} pages</span>
                                        <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" />{(paper.downloads / 1000).toFixed(1)}K</span>
                                    </div>
                                    <button className="flex items-center gap-1 text-accent hover:text-accent-light transition-colors">
                                        {paper.premium ? 'Unlock' : 'Download'}<ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-100 mb-4">Unlock All Premium Research</h2>
                    <p className="text-zinc-400 mb-6 max-w-xl mx-auto">Get unlimited access to all whitepapers, reports, and exclusive research with a VibeCIO Premium subscription.</p>
                    <Link to="/subscribe" className="btn-primary inline-flex">Start Free Trial</Link>
                </div>
            </div>
        </div>
    );
}
