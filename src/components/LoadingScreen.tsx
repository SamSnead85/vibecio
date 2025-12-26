import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-zinc-950)] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="text-center">
                {/* Logo */}
                <div className="font-display text-4xl font-bold tracking-tight mb-8 animate-pulse-slow">
                    Vibe<span className="text-[var(--color-accent)]">CIO</span>
                </div>

                {/* Loading indicator */}
                <div className="flex items-center gap-2 text-[var(--color-zinc-500)]">
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-sm">Initializing Vibe Intelligence...</span>
                </div>
            </div>
        </div>
    );
}
