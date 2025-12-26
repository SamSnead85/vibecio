import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { CoverStory } from '../types';

interface CoverStoryModalProps {
    story: CoverStory;
    isOpen: boolean;
    onClose: () => void;
}

export default function CoverStoryModal({ story, isOpen, onClose }: CoverStoryModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[var(--color-zinc-950)]/95 backdrop-blur-lg animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-lg animate-fade-in-up"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] transition-colors z-10"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16">
                    {/* Issue tag */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-[var(--color-accent)] text-[var(--color-zinc-950)] text-xs font-bold uppercase tracking-wider rounded">
                            Cover Story
                        </span>
                        <span className="text-sm text-[var(--color-zinc-500)]">
                            by {story.author || 'Editorial Board'}
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        <span className="text-gradient-accent">{story.headline}</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-[var(--color-zinc-300)] font-display italic mb-8">
                        {story.subheadline}
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-[var(--color-accent)] mb-8" />

                    {/* Body content */}
                    <div className="prose prose-lg prose-invert max-w-none">
                        {story.content.split('\n\n').map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-[var(--color-zinc-300)] leading-relaxed mb-6 text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
