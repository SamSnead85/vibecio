import { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight, Clock, Filter, Sparkles, History, TrendingUp, Hash, Loader2 } from 'lucide-react';

// Phase 1041-1050: Advanced Search & Discovery
// Enhanced search with filters, trending topics, and smart suggestions

interface SearchResult {
    id: string;
    title: string;
    category: string;
    excerpt: string;
    date: string;
    readTime: number;
    type: 'article' | 'leader' | 'podcast' | 'event';
}

interface TrendingTopic {
    tag: string;
    count: number;
    trending: boolean;
}

const mockResults: SearchResult[] = [
    { id: 'fear-to-superpower', title: 'From Fear to Superpower: Building AI-Native Teams', category: 'Leadership', excerpt: 'How leaders can guide their organizations through AI transformation...', date: '2026-01-23', readTime: 12, type: 'article' },
    { id: 'ai-native-enterprise', title: 'The Enterprise AI-Native Imperative', category: 'Strategy', excerpt: '95% of AI pilots fail—not because of technology, but because of missing foundational capabilities...', date: '2025-12-29', readTime: 12, type: 'article' },
    { id: 'sam-sweilem', title: 'Sam Sweilem - CIO at HealthPlan Services', category: 'Leader', excerpt: 'Leading technology strategy and AI transformation initiatives...', date: '', readTime: 0, type: 'leader' },
    { id: 'ai-cio-podcast', title: 'AI Strategy for Modern CIOs', category: 'Podcast', excerpt: 'Episode 8: Navigating AI governance and compliance...', date: '2026-01-15', readTime: 45, type: 'podcast' }
];

const trendingTopics: TrendingTopic[] = [
    { tag: 'AI Orchestration', count: 2840, trending: true },
    { tag: 'Agentic Workflows', count: 2156, trending: true },
    { tag: 'Healthcare AI', count: 1892, trending: false },
    { tag: 'NVIDIA', count: 1654, trending: true },
    { tag: 'Enterprise AI', count: 1423, trending: false },
    { tag: 'AI Governance', count: 1287, trending: false }
];

const recentSearches = ['AI transformation', 'HIPAA compliance', 'CIO leadership', 'inference optimization'];

interface AdvancedSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdvancedSearch({ isOpen, onClose }: AdvancedSearchProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
    const [showFilters, setShowFilters] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const filters = ['Articles', 'Leaders', 'Podcasts', 'Events', 'Research'];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.length > 2) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setResults(mockResults.filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.category.toLowerCase().includes(query.toLowerCase())));
                setIsLoading(false);
            }, 300);
            return () => clearTimeout(timer);
        } else {
            setResults([]);
        }
    }, [query]);

    const toggleFilter = (filter: string) => {
        setActiveFilters(prev => {
            const next = new Set(prev);
            next.has(filter) ? next.delete(filter) : next.add(filter);
            return next;
        });
    };

    const handleSearch = (searchTerm: string) => {
        setQuery(searchTerm);
        inputRef.current?.focus();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative max-w-3xl mx-auto mt-20 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Header */}
                <div className="p-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                        <Search className="w-5 h-5 text-zinc-500" />
                        <input ref={inputRef} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles, leaders, podcasts..." className="flex-1 bg-transparent text-lg text-zinc-100 placeholder:text-zinc-500 focus:outline-none" />
                        {query && (
                            <button onClick={() => setQuery('')} className="p-1 rounded-full hover:bg-zinc-800 text-zinc-500">
                                <X className="w-4 h-4" />
                            </button>
                        )}
                        <button onClick={() => setShowFilters(!showFilters)} className={`p-2 rounded-lg border transition-colors ${showFilters ? 'bg-accent/20 border-accent text-accent' : 'border-zinc-700 text-zinc-400 hover:text-zinc-100'}`}>
                            <Filter className="w-4 h-4" />
                        </button>
                        <kbd className="hidden md:flex items-center px-2 py-1 text-xs text-zinc-500 bg-zinc-800 rounded border border-zinc-700">ESC</kbd>
                    </div>

                    {/* Filters */}
                    {showFilters && (
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-800">
                            {filters.map((filter) => (
                                <button key={filter} onClick={() => toggleFilter(filter)} className={`px-3 py-1.5 rounded-full text-sm transition-colors ${activeFilters.has(filter) ? 'bg-accent text-zinc-950 font-medium' : 'bg-zinc-800 text-zinc-400 hover:text-zinc-100'}`}>{filter}</button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {isLoading ? (
                        <div className="flex items-center justify-center py-12">
                            <Loader2 className="w-6 h-6 text-accent animate-spin" />
                        </div>
                    ) : query.length > 2 && results.length > 0 ? (
                        <div className="p-4 space-y-2">
                            <p className="text-xs text-zinc-500 mb-3">{results.length} results found</p>
                            {results.map((result) => (
                                <article key={result.id} className="p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 cursor-pointer group transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-2 py-0.5 bg-zinc-700 text-xs text-zinc-400 rounded">{result.type}</span>
                                                <span className="text-xs text-zinc-500">{result.category}</span>
                                            </div>
                                            <h4 className="font-semibold text-zinc-100 group-hover:text-accent transition-colors">{result.title}</h4>
                                            <p className="text-sm text-zinc-400 mt-1 line-clamp-1">{result.excerpt}</p>
                                            {result.readTime > 0 && (
                                                <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
                                                    <span>{result.date}</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{result.readTime} min</span>
                                                </div>
                                            )}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : query.length > 2 && results.length === 0 ? (
                        <div className="py-12 text-center">
                            <p className="text-zinc-400">No results found for "{query}"</p>
                            <p className="text-sm text-zinc-500 mt-1">Try different keywords or browse trending topics</p>
                        </div>
                    ) : (
                        <div className="p-4 space-y-6">
                            {/* AI Suggestions */}
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-sm text-zinc-400">
                                    <Sparkles className="w-4 h-4 text-purple-400" />
                                    <span>AI Suggestions</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['What\'s new in AI governance?', 'Healthcare AI case studies', 'CIO leadership strategies'].map((suggestion, i) => (
                                        <button key={i} onClick={() => handleSearch(suggestion)} className="px-3 py-1.5 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:border-purple-500/40 transition-colors">{suggestion}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Searches */}
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-sm text-zinc-400">
                                    <History className="w-4 h-4" />
                                    <span>Recent Searches</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {recentSearches.map((search, i) => (
                                        <button key={i} onClick={() => handleSearch(search)} className="px-3 py-1.5 rounded-full text-sm bg-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors">{search}</button>
                                    ))}
                                </div>
                            </div>

                            {/* Trending Topics */}
                            <div>
                                <div className="flex items-center gap-2 mb-3 text-sm text-zinc-400">
                                    <TrendingUp className="w-4 h-4 text-orange-400" />
                                    <span>Trending Topics</span>
                                </div>
                                <div className="space-y-2">
                                    {trendingTopics.map((topic, i) => (
                                        <button key={i} onClick={() => handleSearch(topic.tag)} className="w-full flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group">
                                            <div className="flex items-center gap-3">
                                                <Hash className="w-4 h-4 text-zinc-500" />
                                                <span className="text-zinc-200 group-hover:text-accent transition-colors">{topic.tag}</span>
                                                {topic.trending && <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 text-[10px] rounded">HOT</span>}
                                            </div>
                                            <span className="text-xs text-zinc-500">{topic.count.toLocaleString()} mentions</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
