import { useEffect, useRef } from 'react';
import { X, Briefcase, Award } from 'lucide-react';
import type { Leader } from '../types';

interface LeaderModalProps {
    leader: Leader | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function LeaderModal({ leader, isOpen, onClose }: LeaderModalProps) {
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

    if (!isOpen || !leader) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[var(--color-zinc-950)]/95 backdrop-blur-lg animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-lg animate-fade-in-up"
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
                <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8">
                        {/* Avatar */}
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-zinc-700)] flex items-center justify-center flex-shrink-0">
                            <span className="text-3xl font-bold text-[var(--color-accent)]">
                                {leader.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>

                        <div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-zinc-100)] mb-1">
                                {leader.name}
                            </h2>
                            <div className="flex items-center gap-2 text-[var(--color-zinc-400)]">
                                <Briefcase size={16} />
                                <span>{leader.title} at {leader.company}</span>
                            </div>
                        </div>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Award size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-semibold text-[var(--color-zinc-300)] uppercase tracking-wider">
                                Areas of Expertise
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 text-sm bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-[var(--color-zinc-800)] my-6" />

                    {/* Bio */}
                    <div className="prose prose-lg prose-invert max-w-none">
                        <p className="text-[var(--color-zinc-300)] leading-relaxed">
                            {leader.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
