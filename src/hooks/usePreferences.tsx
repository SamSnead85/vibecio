import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

// Types
interface Bookmark {
    id: string;
    type: 'article' | 'leader';
    timestamp: number;
}

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

interface BookmarkContextType {
    bookmarks: Bookmark[];
    isBookmarked: (id: string) => boolean;
    toggleBookmark: (id: string, type: 'article' | 'leader') => void;
    getBookmarkCount: () => number;
}

interface ReadingHistoryItem {
    id: string;
    type: 'article' | 'leader';
    timestamp: number;
}

interface ReadingHistoryContextType {
    history: ReadingHistoryItem[];
    addToHistory: (id: string, type: 'article' | 'leader') => void;
    clearHistory: () => void;
}

// Theme Context
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored ? stored === 'dark' : true;
    });

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('light-mode', !isDark);
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

// Bookmarks Context
const BookmarkContext = createContext<BookmarkContextType | null>(null);

export function BookmarkProvider({ children }: { children: ReactNode }) {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
        const stored = localStorage.getItem('bookmarks');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    const isBookmarked = (id: string) => bookmarks.some(b => b.id === id);

    const toggleBookmark = (id: string, type: 'article' | 'leader') => {
        if (isBookmarked(id)) {
            setBookmarks(bookmarks.filter(b => b.id !== id));
        } else {
            setBookmarks([...bookmarks, { id, type, timestamp: Date.now() }]);
        }
    };

    const getBookmarkCount = () => bookmarks.length;

    return (
        <BookmarkContext.Provider value={{ bookmarks, isBookmarked, toggleBookmark, getBookmarkCount }}>
            {children}
        </BookmarkContext.Provider>
    );
}

export function useBookmarks() {
    const context = useContext(BookmarkContext);
    if (!context) throw new Error('useBookmarks must be used within BookmarkProvider');
    return context;
}

// Reading History Context
const ReadingHistoryContext = createContext<ReadingHistoryContextType | null>(null);

export function ReadingHistoryProvider({ children }: { children: ReactNode }) {
    const [history, setHistory] = useState<ReadingHistoryItem[]>(() => {
        const stored = localStorage.getItem('reading-history');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('reading-history', JSON.stringify(history));
    }, [history]);

    const addToHistory = (id: string, type: 'article' | 'leader') => {
        // Remove if exists, then add to front (most recent)
        const filtered = history.filter(h => h.id !== id);
        setHistory([{ id, type, timestamp: Date.now() }, ...filtered].slice(0, 50)); // Keep last 50
    };

    const clearHistory = () => setHistory([]);

    return (
        <ReadingHistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
            {children}
        </ReadingHistoryContext.Provider>
    );
}

export function useReadingHistory() {
    const context = useContext(ReadingHistoryContext);
    if (!context) throw new Error('useReadingHistory must be used within ReadingHistoryProvider');
    return context;
}

// Keyboard Shortcuts Hook
export function useKeyboardShortcuts(shortcuts: Record<string, () => void>) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = `${e.metaKey || e.ctrlKey ? 'cmd+' : ''}${e.key.toLowerCase()}`;
            if (shortcuts[key]) {
                e.preventDefault();
                shortcuts[key]();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [shortcuts]);
}

// Local Storage Hook
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error saving to localStorage: ${error}`);
        }
    };

    return [storedValue, setValue];
}

// Font Size Hook
export function useFontSize() {
    const [fontSize, setFontSize] = useLocalStorage('font-size', 'medium');

    useEffect(() => {
        const sizes: Record<string, string> = {
            small: '14px',
            medium: '16px',
            large: '18px',
            'x-large': '20px',
        };
        document.documentElement.style.setProperty('--base-font-size', sizes[fontSize] || '16px');
    }, [fontSize]);

    return { fontSize, setFontSize };
}
