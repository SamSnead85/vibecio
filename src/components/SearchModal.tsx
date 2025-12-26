import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, FileText, Users, Home, X } from 'lucide-react';
import { articles, leaders } from '../data/content';

interface SearchResult {
    type: 'article' | 'leader' | 'page';
    id: string;
    title: string;
    subtitle?: string;
    href: string;
}

const pages = [
    { id: 'home', title: 'Home', subtitle: 'Main page', href: '/', icon: Home },
    { id: 'articles', title: 'Articles', subtitle: 'Deep dive content', href: '/articles', icon: FileText },
    { id: 'leaders', title: 'Leaders', subtitle: 'CIO profiles', href: '/leaders', icon: Users },
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    // Search logic
    useEffect(() => {
        if (!query.trim()) {
            // Show default pages when no query
            setResults(pages.map(p => ({ type: 'page' as const, id: p.id, title: p.title, subtitle: p.subtitle, href: p.href })));
            return;
        }

        const q = query.toLowerCase();
        const articleResults: SearchResult[] = articles
            .filter(a =>
                a.title.toLowerCase().includes(q) ||
                a.subtitle.toLowerCase().includes(q) ||
                a.category.includes(q)
            )
            .slice(0, 5)
            .map(a => ({ type: 'article', id: a.id, title: a.title, subtitle: a.subtitle, href: `/article/${a.id}` }));

        const leaderResults: SearchResult[] = leaders
            .filter(l =>
                l.name.toLowerCase().includes(q) ||
                l.company.toLowerCase().includes(q) ||
                l.title.toLowerCase().includes(q)
            )
            .slice(0, 3)
            .map(l => ({ type: 'leader', id: l.id, title: l.name, subtitle: `${l.title} at ${l.company}`, href: `/leader/${l.id}` }));

        const pageResults: SearchResult[] = pages
            .filter(p => p.title.toLowerCase().includes(q))
            .map(p => ({ type: 'page', id: p.id, title: p.title, subtitle: p.subtitle, href: p.href }));

        setResults([...pageResults, ...articleResults, ...leaderResults]);
        setSelectedIndex(0);
    }, [query]);

    // Keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(i => Math.min(i + 1, results.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(i => Math.max(i - 1, 0));
                break;
            case 'Enter':
                e.preventDefault();
                if (results[selectedIndex]) {
                    navigate(results[selectedIndex].href);
                    onClose();
                }
                break;
            case 'Escape':
                onClose();
                break;
        }
    }, [isOpen, results, selectedIndex, navigate, onClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    // Reset on close
    useEffect(() => {
        if (!isOpen) {
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const getIcon = (type: string) => {
        switch (type) {
            case 'article': return FileText;
            case 'leader': return Users;
            default: return Home;
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="search-backdrop animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] animate-scale-in">
                <div className="mx-4 bg-[var(--color-zinc-900)] rounded-2xl border border-[var(--color-zinc-700)] shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="flex items-center gap-4 p-4 border-b border-[var(--color-zinc-800)]">
                        <Search size={20} className="text-[var(--color-zinc-500)] flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Search articles, leaders, pages..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 bg-transparent focus:outline-none text-lg"
                            autoFocus
                        />
                        <button
                            onClick={onClose}
                            className="p-1 rounded hover:bg-[var(--color-zinc-800)] transition-colors"
                        >
                            <X size={18} className="text-[var(--color-zinc-500)]" />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-96 overflow-y-auto">
                        {results.length > 0 ? (
                            <ul className="py-2">
                                {results.map((result, index) => {
                                    const Icon = getIcon(result.type);
                                    return (
                                        <li key={`${result.type}-${result.id}`}>
                                            <button
                                                onClick={() => {
                                                    navigate(result.href);
                                                    onClose();
                                                }}
                                                className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-colors ${index === selectedIndex
                                                    ? 'bg-[var(--color-accent)]/10 text-white'
                                                    : 'hover:bg-[var(--color-zinc-800)]'
                                                    }`}
                                            >
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${index === selectedIndex
                                                    ? 'bg-[var(--color-accent)]/20'
                                                    : 'bg-[var(--color-zinc-800)]'
                                                    }`}>
                                                    <Icon size={18} className={index === selectedIndex ? 'text-[var(--color-accent)]' : 'text-[var(--color-zinc-400)]'} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium truncate">{result.title}</div>
                                                    {result.subtitle && (
                                                        <div className="text-sm text-[var(--color-zinc-500)] truncate">{result.subtitle}</div>
                                                    )}
                                                </div>
                                                <ArrowRight size={16} className={`flex-shrink-0 ${index === selectedIndex ? 'text-[var(--color-accent)]' : 'text-[var(--color-zinc-600)]'}`} />
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <div className="py-8 text-center text-[var(--color-zinc-500)]">
                                No results found for "{query}"
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-6 px-4 py-3 border-t border-[var(--color-zinc-800)] text-xs text-[var(--color-zinc-500)]">
                        <div className="flex items-center gap-2">
                            <span className="kbd">↑↓</span>
                            <span>Navigate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="kbd">↵</span>
                            <span>Select</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="kbd">esc</span>
                            <span>Close</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Hook for keyboard shortcut to open search
export function useSearchShortcut(onOpen: () => void) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Cmd/Ctrl + K to open search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                onOpen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onOpen]);
}
