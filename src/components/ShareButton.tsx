import { useState } from 'react';
import { Share2, Copy, Twitter, Linkedin, Check, X } from 'lucide-react';

interface ShareButtonProps {
    title: string;
    url?: string;
    className?: string;
}

export default function ShareButton({ title, url, className = '' }: ShareButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const shareUrl = url || window.location.href;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const shareOptions = [
        {
            name: 'Copy Link',
            icon: copied ? Check : Copy,
            onClick: handleCopy,
            color: copied ? 'text-green-400' : 'text-[var(--color-zinc-400)]',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`, '_blank'),
            color: 'text-[#1DA1F2]',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            onClick: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank'),
            color: 'text-[#0A66C2]',
        },
    ];

    // Use native share if available
    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, url: shareUrl });
            } catch (err) {
                // User cancelled or error
            }
        } else {
            setIsOpen(true);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={handleNativeShare}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] transition-colors"
            >
                <Share2 size={16} />
                <span>Share</span>
            </button>

            {/* Share Modal */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-48 bg-[var(--color-zinc-800)] rounded-xl border border-[var(--color-zinc-700)] shadow-xl z-50 overflow-hidden animate-scale-in">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-zinc-700)]">
                            <span className="text-sm font-medium">Share</span>
                            <button onClick={() => setIsOpen(false)} className="text-[var(--color-zinc-500)] hover:text-white">
                                <X size={14} />
                            </button>
                        </div>
                        <div className="py-2">
                            {shareOptions.map((option) => (
                                <button
                                    key={option.name}
                                    onClick={() => {
                                        option.onClick();
                                        if (option.name !== 'Copy Link') setIsOpen(false);
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[var(--color-zinc-700)] transition-colors"
                                >
                                    <option.icon size={16} className={option.color} />
                                    <span className="text-sm">{option.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
