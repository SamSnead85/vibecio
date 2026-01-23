import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TableOfContentsProps {
    content: string[];
}

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeHeading, setActiveHeading] = useState<string>('');

    // Parse headings from content (simulated - in real app would parse HTML headings)
    const headings: Heading[] = content
        .filter(p => p.startsWith('**') || p.startsWith('##'))
        .map((p, i) => ({
            id: `heading-${i}`,
            text: p.replace(/\*\*|##/g, '').trim().substring(0, 50),
            level: p.startsWith('##') ? 2 : 3
        }))
        .slice(0, 8);

    // Track active heading based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (let i = headings.length - 1; i >= 0; i--) {
                const element = document.getElementById(headings[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveHeading(headings[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (headings.length === 0) return null;

    return (
        <div className="glass-premium rounded-2xl p-6">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between mb-4"
            >
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    Table of Contents
                </h3>
                {isExpanded ? (
                    <ChevronUp size={16} className="text-[var(--color-zinc-500)]" />
                ) : (
                    <ChevronDown size={16} className="text-[var(--color-zinc-500)]" />
                )}
            </button>

            {isExpanded && (
                <nav className="space-y-1">
                    {headings.map((heading) => (
                        <button
                            key={heading.id}
                            onClick={() => scrollToHeading(heading.id)}
                            className={`w-full text-left py-2 px-3 rounded-lg text-sm transition-all ${heading.level === 3 ? 'pl-6' : ''
                                } ${activeHeading === heading.id
                                    ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-l-2 border-[var(--color-accent)]'
                                    : 'text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-200)] hover:bg-[var(--color-zinc-800)]/50'
                                }`}
                        >
                            {heading.text}
                        </button>
                    ))}
                </nav>
            )}
        </div>
    );
}
