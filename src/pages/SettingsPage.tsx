import { useState } from 'react';
import { useTheme, useFontSize, useReadingHistory } from '../hooks/usePreferences';
import { Sun, Moon, Type, History, Trash2, Check } from 'lucide-react';

const fontSizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'x-large', label: 'X-Large' },
];

export default function SettingsPage() {
    const { isDark, toggleTheme } = useTheme();
    const { fontSize, setFontSize } = useFontSize();
    const { history, clearHistory } = useReadingHistory();
    const [showClearedMessage, setShowClearedMessage] = useState(false);

    const handleClearHistory = () => {
        clearHistory();
        setShowClearedMessage(true);
        setTimeout(() => setShowClearedMessage(false), 3000);
    };

    return (
        <div className="min-h-screen py-24">
            <div className="container max-w-2xl">
                {/* Header */}
                <h1 className="text-4xl font-display font-bold tracking-tight mb-12">
                    Settings
                </h1>

                {/* Theme */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        {isDark ? <Moon size={20} /> : <Sun size={20} />}
                        Appearance
                    </h2>
                    <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl p-6 border border-[var(--color-zinc-700)]/50">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Dark Mode</h3>
                                <p className="text-sm text-[var(--color-zinc-500)]">
                                    Toggle between light and dark themes
                                </p>
                            </div>
                            <button
                                onClick={toggleTheme}
                                className={`relative w-14 h-8 rounded-full transition-colors ${isDark ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-zinc-600)]'
                                    }`}
                            >
                                <div
                                    className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${isDark ? 'left-7' : 'left-1'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Font Size */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Type size={20} />
                        Reading
                    </h2>
                    <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl p-6 border border-[var(--color-zinc-700)]/50">
                        <div>
                            <h3 className="font-medium mb-1">Font Size</h3>
                            <p className="text-sm text-[var(--color-zinc-500)] mb-4">
                                Adjust the text size for comfortable reading
                            </p>
                            <div className="flex gap-2">
                                {fontSizes.map(size => (
                                    <button
                                        key={size.value}
                                        onClick={() => setFontSize(size.value)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${fontSize === size.value
                                                ? 'bg-[var(--color-accent)] text-black'
                                                : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] hover:bg-[var(--color-zinc-700)]'
                                            }`}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reading History */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <History size={20} />
                        History
                    </h2>
                    <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl p-6 border border-[var(--color-zinc-700)]/50">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">Reading History</h3>
                                <p className="text-sm text-[var(--color-zinc-500)]">
                                    {history.length} items in your history
                                </p>
                            </div>
                            <button
                                onClick={handleClearHistory}
                                disabled={history.length === 0 || showClearedMessage}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${showClearedMessage
                                        ? 'bg-green-500/20 text-green-400'
                                        : history.length === 0
                                            ? 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-600)] cursor-not-allowed'
                                            : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                                    }`}
                            >
                                {showClearedMessage ? (
                                    <>
                                        <Check size={16} />
                                        Cleared
                                    </>
                                ) : (
                                    <>
                                        <Trash2 size={16} />
                                        Clear History
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section>
                    <h2 className="text-lg font-semibold mb-4">About</h2>
                    <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl p-6 border border-[var(--color-zinc-700)]/50 space-y-4">
                        <div className="flex justify-between">
                            <span className="text-[var(--color-zinc-400)]">Version</span>
                            <span>1.0.0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[var(--color-zinc-400)]">Build</span>
                            <span>{new Date().toISOString().split('T')[0]}</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
