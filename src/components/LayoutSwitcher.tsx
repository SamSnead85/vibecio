import { useState } from 'react';

import { LayoutGrid, List, SlidersHorizontal, ChevronDown, Check, X, Columns, Rows } from 'lucide-react';

// Phase 1091-1100: Content Layout Switcher Component
// User-customizable content layout options

interface LayoutOption {
    id: 'grid' | 'list' | 'compact' | 'magazine';
    name: string;
    icon: React.ReactNode;
    description: string;
}

interface SortOption {
    id: string;
    name: string;
}

interface FilterOption {
    id: string;
    name: string;
    options: string[];
}

const layouts: LayoutOption[] = [
    { id: 'grid', name: 'Grid', icon: <LayoutGrid className="w-4 h-4" />, description: 'Card-based grid layout' },
    { id: 'list', name: 'List', icon: <List className="w-4 h-4" />, description: 'Vertical list with previews' },
    { id: 'compact', name: 'Compact', icon: <Rows className="w-4 h-4" />, description: 'Dense list, more items' },
    { id: 'magazine', name: 'Magazine', icon: <Columns className="w-4 h-4" />, description: 'Editorial style layout' }
];

const sortOptions: SortOption[] = [
    { id: 'latest', name: 'Latest First' },
    { id: 'oldest', name: 'Oldest First' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'trending', name: 'Trending Now' },
    { id: 'readtime', name: 'Read Time' }
];

const filterOptions: FilterOption[] = [
    { id: 'category', name: 'Category', options: ['All', 'Strategy', 'Technology', 'Leadership', 'Healthcare', 'Trends'] },
    { id: 'readtime', name: 'Read Time', options: ['Any', '< 5 min', '5-10 min', '10-20 min', '> 20 min'] },
    { id: 'date', name: 'Date', options: ['Any Time', 'Today', 'This Week', 'This Month', 'This Year'] }
];

interface LayoutSwitcherProps {
    onLayoutChange?: (layout: LayoutOption['id']) => void;
    onSortChange?: (sort: string) => void;
    onFilterChange?: (filters: Record<string, string>) => void;
    currentLayout?: LayoutOption['id'];
    showFilters?: boolean;
}

export default function LayoutSwitcher({ onLayoutChange, onSortChange, onFilterChange, currentLayout = 'grid', showFilters = true }: LayoutSwitcherProps) {
    const [activeLayout, setActiveLayout] = useState<LayoutOption['id']>(currentLayout);
    const [activeSort, setActiveSort] = useState('latest');
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [showFilterPanel, setShowFilterPanel] = useState(false);

    const handleLayoutChange = (layout: LayoutOption['id']) => {
        setActiveLayout(layout);
        onLayoutChange?.(layout);
    };

    const handleSortChange = (sort: string) => {
        setActiveSort(sort);
        onSortChange?.(sort);
        setShowSortDropdown(false);
    };

    const handleFilterChange = (filterId: string, value: string) => {
        const newFilters = { ...activeFilters, [filterId]: value };
        if (value === 'All' || value === 'Any' || value === 'Any Time') {
            delete newFilters[filterId];
        }
        setActiveFilters(newFilters);
        onFilterChange?.(newFilters);
    };

    const clearFilters = () => {
        setActiveFilters({});
        onFilterChange?.({});
    };

    const activeFilterCount = Object.keys(activeFilters).length;

    return (
        <div className="glass-card rounded-xl p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left: Layout Options */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-500 mr-2">View:</span>
                    <div className="flex gap-1 p-1 bg-zinc-800 rounded-lg">
                        {layouts.map((layout) => (
                            <button key={layout.id} onClick={() => handleLayoutChange(layout.id)} title={layout.description} className={`p-2 rounded-md transition-all ${activeLayout === layout.id ? 'bg-accent text-zinc-950' : 'text-zinc-400 hover:text-zinc-100'}`}>
                                {layout.icon}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Sort & Filter */}
                <div className="flex items-center gap-3">
                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button onClick={() => setShowSortDropdown(!showSortDropdown)} className="flex items-center gap-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 hover:border-zinc-600 transition-colors">
                            <span className="text-zinc-500">Sort:</span>
                            {sortOptions.find(s => s.id === activeSort)?.name}
                            <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showSortDropdown && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setShowSortDropdown(false)} />
                                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl z-20 overflow-hidden">
                                    {sortOptions.map((option) => (
                                        <button key={option.id} onClick={() => handleSortChange(option.id)} className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${activeSort === option.id ? 'bg-accent/20 text-accent' : 'text-zinc-300 hover:bg-zinc-800'}`}>
                                            {option.name}
                                            {activeSort === option.id && <Check className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Filter Button */}
                    {showFilters && (
                        <button onClick={() => setShowFilterPanel(!showFilterPanel)} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${showFilterPanel || activeFilterCount > 0 ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-zinc-800 border border-zinc-700 text-zinc-300 hover:border-zinc-600'}`}>
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                            {activeFilterCount > 0 && (
                                <span className="w-5 h-5 rounded-full bg-accent text-zinc-950 text-xs flex items-center justify-center font-bold">{activeFilterCount}</span>
                            )}
                        </button>
                    )}
                </div>
            </div>

            {/* Filter Panel */}
            {showFilterPanel && (
                <div className="mt-4 pt-4 border-t border-zinc-800">
                    <div className="flex flex-wrap gap-4">
                        {filterOptions.map((filter) => (
                            <div key={filter.id} className="flex-1 min-w-[150px]">
                                <label className="block text-xs text-zinc-500 mb-1.5">{filter.name}</label>
                                <select value={activeFilters[filter.id] || filter.options[0]} onChange={(e) => handleFilterChange(filter.id, e.target.value)} className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-300 focus:outline-none focus:border-accent">
                                    {filter.options.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                    {activeFilterCount > 0 && (
                        <button onClick={clearFilters} className="mt-3 text-xs text-zinc-500 hover:text-accent transition-colors">
                            <X className="w-3 h-3 inline mr-1" />Clear all filters
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
