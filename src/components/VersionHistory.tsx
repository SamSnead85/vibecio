import { useState } from 'react';
import { GitBranch, Clock, Code, CheckCircle, XCircle, Circle } from 'lucide-react';

// Phase 1091-1100: Article Versioning & History
// Track article revisions and enable version comparison

interface ArticleVersion {
    id: string;
    version: string;
    date: string;
    author: string;
    authorAvatar: string;
    changes: string;
    status: 'published' | 'draft' | 'archived';
    wordCount: number;
    diff?: { added: number; removed: number };
}

const mockVersions: ArticleVersion[] = [
    { id: 'v5', version: '5.0', date: '2026-01-23', author: 'Editorial Team', authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', changes: 'Added new section on AI governance framework', status: 'published', wordCount: 2840, diff: { added: 342, removed: 12 } },
    { id: 'v4', version: '4.1', date: '2026-01-20', author: 'Deana Rhoades', authorAvatar: '/images/deana-rhoades.png', changes: 'Updated statistics and added case study', status: 'archived', wordCount: 2510, diff: { added: 156, removed: 45 } },
    { id: 'v3', version: '4.0', date: '2026-01-18', author: 'Editorial Team', authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', changes: 'Major revision with new interview quotes', status: 'archived', wordCount: 2399, diff: { added: 520, removed: 180 } },
    { id: 'v2', version: '3.0', date: '2026-01-15', author: 'Editorial Team', authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', changes: 'Added executive summary and key takeaways', status: 'archived', wordCount: 2059, diff: { added: 280, removed: 22 } },
    { id: 'v1', version: '1.0', date: '2026-01-10', author: 'Deana Rhoades', authorAvatar: '/images/deana-rhoades.png', changes: 'Initial publication', status: 'archived', wordCount: 1801 }
];

interface VersionHistoryProps {
    articleId: string;
    onVersionSelect?: (version: ArticleVersion) => void;
}

export default function VersionHistory({ onVersionSelect }: VersionHistoryProps) {
    const [versions] = useState<ArticleVersion[]>(mockVersions);
    const [selectedVersions, setSelectedVersions] = useState<string[]>([]);
    const [showCompare, setShowCompare] = useState(false);

    const toggleVersionSelect = (id: string) => {
        setSelectedVersions(prev => {
            if (prev.includes(id)) {
                return prev.filter(v => v !== id);
            }
            if (prev.length < 2) {
                return [...prev, id];
            }
            return [prev[1], id];
        });
    };

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            published: 'text-emerald-400 bg-emerald-400/20',
            draft: 'text-amber-400 bg-amber-400/20',
            archived: 'text-zinc-500 bg-zinc-500/20'
        };
        return colors[status] || 'text-zinc-400 bg-zinc-400/20';
    };

    const getStatusIcon = (status: string) => {
        if (status === 'published') return <CheckCircle className="w-4 h-4" />;
        if (status === 'draft') return <Circle className="w-4 h-4" />;
        return <XCircle className="w-4 h-4" />;
    };

    return (
        <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-zinc-100">Version History</h3>
                    <span className="text-sm text-zinc-500">{versions.length} revisions</span>
                </div>
                {selectedVersions.length === 2 && (
                    <button onClick={() => setShowCompare(true)} className="flex items-center gap-2 px-3 py-1.5 bg-accent text-zinc-950 text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors">
                        <Code className="w-4 h-4" />Compare Selected
                    </button>
                )}
            </div>

            {/* Timeline */}
            <div className="p-4">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-800" />

                    {/* Versions */}
                    <div className="space-y-4">
                        {versions.map((version) => (
                            <div key={version.id} className={`relative pl-10 ${selectedVersions.includes(version.id) ? 'bg-accent/5 -mx-4 px-4 py-2 rounded-lg border border-accent/20' : ''}`}>
                                {/* Timeline Dot */}
                                <button onClick={() => toggleVersionSelect(version.id)} className={`absolute left-2 w-5 h-5 rounded-full border-2 transition-all ${version.status === 'published' ? 'bg-accent border-accent' : selectedVersions.includes(version.id) ? 'bg-accent/50 border-accent' : 'bg-zinc-900 border-zinc-700 hover:border-accent'}`}>
                                    {selectedVersions.includes(version.id) && <CheckCircle className="w-3 h-3 text-zinc-950 absolute top-0.5 left-0.5" />}
                                </button>

                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-mono text-sm font-bold text-zinc-100">v{version.version}</span>
                                            <span className={`px-2 py-0.5 rounded text-xs flex items-center gap-1 ${getStatusColor(version.status)}`}>
                                                {getStatusIcon(version.status)}
                                                {version.status}
                                            </span>
                                            {version.diff && (
                                                <span className="text-xs">
                                                    <span className="text-emerald-400">+{version.diff.added}</span>
                                                    {' / '}
                                                    <span className="text-red-400">-{version.diff.removed}</span>
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-zinc-300 mb-2">{version.changes}</p>
                                        <div className="flex items-center gap-4 text-xs text-zinc-500">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />{version.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <img src={version.authorAvatar} alt={version.author} className="w-4 h-4 rounded-full" />
                                                {version.author}
                                            </span>
                                            <span>{version.wordCount.toLocaleString()} words</span>
                                        </div>
                                    </div>

                                    {version.status !== 'published' && (
                                        <button onClick={() => onVersionSelect?.(version)} className="text-xs text-accent hover:text-accent-light transition-colors">
                                            View
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Compare Modal */}
            {showCompare && selectedVersions.length === 2 && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-zinc-950/90" onClick={() => setShowCompare(false)} />
                    <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-zinc-100 mb-4">
                            Comparing v{versions.find(v => v.id === selectedVersions[0])?.version} → v{versions.find(v => v.id === selectedVersions[1])?.version}
                        </h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {selectedVersions.map((id) => {
                                const v = versions.find(ver => ver.id === id);
                                return v && (
                                    <div key={id} className="p-4 bg-zinc-800/50 rounded-xl">
                                        <h4 className="font-mono text-accent mb-2">v{v.version}</h4>
                                        <p className="text-sm text-zinc-400">{v.changes}</p>
                                        <p className="text-xs text-zinc-500 mt-2">{v.date} by {v.author}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="p-4 bg-zinc-800/30 rounded-xl font-mono text-sm">
                            <p className="text-zinc-500 mb-2">// Diff preview</p>
                            <p className="text-emerald-400">+ New content added in section 3</p>
                            <p className="text-emerald-400">+ AI governance framework expanded</p>
                            <p className="text-red-400">- Removed outdated statistics</p>
                            <p className="text-zinc-400">  Unchanged introduction paragraph</p>
                        </div>
                        <div className="flex justify-end gap-3 mt-6">
                            <button onClick={() => setShowCompare(false)} className="px-4 py-2 text-zinc-400 hover:text-zinc-100">Close</button>
                            <button className="px-4 py-2 bg-accent text-zinc-950 rounded-lg font-medium">Restore v{versions.find(v => v.id === selectedVersions[0])?.version}</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Help Text */}
            <div className="px-4 pb-4">
                <p className="text-xs text-zinc-600 text-center">Click version dots to select and compare revisions</p>
            </div>
        </div>
    );
}
