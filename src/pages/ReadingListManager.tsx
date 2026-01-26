import { useState } from 'react';
import { Bookmark, Clock, CheckCircle, Circle, Trash2, BookOpen, Plus } from 'lucide-react';

// Phase 1071-1080: Reading List Manager Component
// Organize and track reading progress with custom lists

interface ReadingItem {
    id: string;
    title: string;
    author: string;
    category: string;
    image: string;
    readTime: number;
    dateAdded: string;
    status: 'unread' | 'reading' | 'completed';
    progress?: number;
    list: string;
}

interface ReadingList {
    id: string;
    name: string;
    color: string;
    count: number;
}

const mockItems: ReadingItem[] = [
    { id: '1', title: 'From Fear to Superpower: Building AI-Native Teams', author: 'Deana Rhoades', category: 'Leadership', image: '/images/deana-rhoades.png', readTime: 12, dateAdded: '2026-01-22', status: 'reading', progress: 45, list: 'ai-transformation' },
    { id: '2', title: 'The Enterprise AI-Native Imperative', author: 'VibeCIO Analysis', category: 'Strategy', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400', readTime: 12, dateAdded: '2026-01-20', status: 'unread', list: 'ai-transformation' },
    { id: '3', title: 'HIPAA-Compliant AI Implementation', author: 'Healthcare Tech', category: 'Healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400', readTime: 8, dateAdded: '2026-01-18', status: 'completed', list: 'healthcare' },
    { id: '4', title: 'The Inference Wars', author: 'VibeCIO Analysis', category: 'Technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400', readTime: 8, dateAdded: '2026-01-15', status: 'unread', list: 'default' },
    { id: '5', title: 'AI Governance: Building Guardrails', author: 'Governance Team', category: 'Insights', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', readTime: 7, dateAdded: '2026-01-12', status: 'reading', progress: 78, list: 'default' }
];

const readingLists: ReadingList[] = [
    { id: 'default', name: 'Read Later', color: 'bg-zinc-500', count: 2 },
    { id: 'ai-transformation', name: 'AI Transformation', color: 'bg-purple-500', count: 2 },
    { id: 'healthcare', name: 'Healthcare AI', color: 'bg-emerald-500', count: 1 }
];

export default function ReadingListManager() {
    const [items, setItems] = useState<ReadingItem[]>(mockItems);
    const [activeList, setActiveList] = useState<string>('all');
    const [filter, setFilter] = useState<'all' | 'unread' | 'reading' | 'completed'>('all');
    const [sortBy, setSortBy] = useState<'date' | 'title' | 'readtime'>('date');

    const filteredItems = items.filter(item => {
        const matchesList = activeList === 'all' || item.list === activeList;
        const matchesFilter = filter === 'all' || item.status === filter;
        return matchesList && matchesFilter;
    }).sort((a, b) => {
        if (sortBy === 'date') return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return a.readTime - b.readTime;
    });

    const toggleStatus = (id: string) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const statusCycle: Record<string, 'unread' | 'reading' | 'completed'> = { unread: 'reading', reading: 'completed', completed: 'unread' };
                return { ...item, status: statusCycle[item.status], progress: statusCycle[item.status] === 'completed' ? 100 : item.progress };
            }
            return item;
        }));
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const getStatusIcon = (status: string) => {
        if (status === 'completed') return <CheckCircle className="w-5 h-5 text-emerald-400" />;
        if (status === 'reading') return <Clock className="w-5 h-5 text-amber-400" />;
        return <Circle className="w-5 h-5 text-zinc-500" />;
    };

    const stats = {
        total: items.length,
        unread: items.filter(i => i.status === 'unread').length,
        reading: items.filter(i => i.status === 'reading').length,
        completed: items.filter(i => i.status === 'completed').length,
        totalTime: items.filter(i => i.status !== 'completed').reduce((sum, i) => sum + i.readTime, 0)
    };

    return (
        <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="glass-card rounded-2xl p-6 sticky top-24">
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen className="w-6 h-6 text-accent" />
                                <h2 className="text-xl font-semibold text-zinc-100">Reading Lists</h2>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                                    <div className="text-2xl font-bold text-zinc-100">{stats.total}</div>
                                    <div className="text-xs text-zinc-500">Saved</div>
                                </div>
                                <div className="bg-zinc-800/50 rounded-lg p-3 text-center">
                                    <div className="text-2xl font-bold text-accent">{stats.totalTime}m</div>
                                    <div className="text-xs text-zinc-500">To Read</div>
                                </div>
                            </div>

                            {/* Lists */}
                            <div className="space-y-2">
                                <button onClick={() => setActiveList('all')} className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${activeList === 'all' ? 'bg-accent/20 text-accent' : 'hover:bg-zinc-800 text-zinc-300'}`}>
                                    <span>All Items</span>
                                    <span className="text-sm text-zinc-500">{items.length}</span>
                                </button>
                                {readingLists.map((list) => (
                                    <button key={list.id} onClick={() => setActiveList(list.id)} className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${activeList === list.id ? 'bg-accent/20 text-accent' : 'hover:bg-zinc-800 text-zinc-300'}`}>
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded-full ${list.color}`} />
                                            <span>{list.name}</span>
                                        </div>
                                        <span className="text-sm text-zinc-500">{list.count}</span>
                                    </button>
                                ))}
                            </div>

                            <button className="w-full mt-4 flex items-center justify-center gap-2 p-3 border border-dashed border-zinc-700 rounded-lg text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 transition-colors">
                                <Plus className="w-4 h-4" />
                                New List
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-2xl font-display font-bold text-zinc-100">
                                {activeList === 'all' ? 'All Saved Articles' : readingLists.find(l => l.id === activeList)?.name}
                            </h1>
                            <div className="flex items-center gap-2">
                                <select value={filter} onChange={(e) => setFilter(e.target.value as typeof filter)} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300">
                                    <option value="all">All Status</option>
                                    <option value="unread">Unread</option>
                                    <option value="reading">Reading</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300">
                                    <option value="date">Date Added</option>
                                    <option value="title">Title</option>
                                    <option value="readtime">Read Time</option>
                                </select>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="space-y-4">
                            {filteredItems.map((item) => (
                                <article key={item.id} className="glass-card rounded-xl p-4 group hover:border-accent/30 transition-all">
                                    <div className="flex gap-4">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="font-semibold text-zinc-100 group-hover:text-accent transition-colors line-clamp-1">{item.title}</h3>
                                                    <p className="text-sm text-zinc-500">{item.author} · {item.category}</p>
                                                </div>
                                                <button onClick={() => toggleStatus(item.id)} title="Toggle status">
                                                    {getStatusIcon(item.status)}
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-4 mt-3">
                                                <span className="text-xs text-zinc-500 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />{item.readTime} min
                                                </span>
                                                <span className="text-xs text-zinc-600">Added {item.dateAdded}</span>
                                                {item.status === 'reading' && item.progress && (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-20 h-1 bg-zinc-700 rounded-full overflow-hidden">
                                                            <div className="h-full bg-accent rounded-full" style={{ width: `${item.progress}%` }} />
                                                        </div>
                                                        <span className="text-xs text-accent">{item.progress}%</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <button onClick={() => removeItem(item.id)} className="p-2 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <div className="text-center py-16">
                                <Bookmark className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-zinc-400 mb-2">No items found</h3>
                                <p className="text-zinc-500">Start saving articles to build your reading list</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
