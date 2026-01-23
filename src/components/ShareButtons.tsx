import { useState, useEffect } from 'react';
import { Share2, Twitter, Linkedin, Link2, Mail, Check } from 'lucide-react';

interface ShareButtonsProps {
    url?: string;
    title: string;
    description?: string;
    variant?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
}

export default function ShareButtons({
    url,
    title,
    description = '',
    variant = 'horizontal',
    size = 'md'
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12'
    };

    const iconSizes = {
        sm: 14,
        md: 16,
        lg: 20
    };

    const shareLinks = [
        {
            name: 'Twitter',
            icon: Twitter,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:bg-sky-500/10 hover:text-sky-400'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:bg-blue-500/10 hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: Mail,
            url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${shareUrl}`)}`,
            color: 'hover:bg-purple-500/10 hover:text-purple-400'
        }
    ];

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url: shareUrl
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            setShowDropdown(!showDropdown);
        }
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = () => setShowDropdown(false);
        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [showDropdown]);

    if (variant === 'vertical') {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-zinc-500)] mb-1">
                    Share
                </span>
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${sizeClasses[size]} rounded-lg bg-[var(--color-zinc-800)]/50 flex items-center justify-center transition-all ${link.color} border border-[var(--color-zinc-700)]/50`}
                        aria-label={`Share on ${link.name}`}
                    >
                        <link.icon size={iconSizes[size]} />
                    </a>
                ))}
                <button
                    onClick={handleCopyLink}
                    className={`${sizeClasses[size]} rounded-lg bg-[var(--color-zinc-800)]/50 flex items-center justify-center transition-all hover:bg-emerald-500/10 hover:text-emerald-400 border border-[var(--color-zinc-700)]/50`}
                    aria-label="Copy link"
                >
                    {copied ? <Check size={iconSizes[size]} className="text-emerald-400" /> : <Link2 size={iconSizes[size]} />}
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="flex items-center gap-2">
                {/* Share Button */}
                <button
                    onClick={handleNativeShare}
                    className={`${sizeClasses[size]} rounded-lg bg-[var(--color-zinc-800)] flex items-center justify-center transition-all hover:bg-[var(--color-zinc-700)] border border-[var(--color-zinc-700)]`}
                    aria-label="Share"
                >
                    <Share2 size={iconSizes[size]} />
                </button>

                {/* Individual Share Buttons (visible on desktop) */}
                <div className="hidden md:flex items-center gap-2">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${sizeClasses[size]} rounded-lg bg-[var(--color-zinc-800)]/50 flex items-center justify-center transition-all ${link.color} border border-[var(--color-zinc-700)]/50`}
                            aria-label={`Share on ${link.name}`}
                        >
                            <link.icon size={iconSizes[size]} />
                        </a>
                    ))}
                    <button
                        onClick={handleCopyLink}
                        className={`${sizeClasses[size]} rounded-lg bg-[var(--color-zinc-800)]/50 flex items-center justify-center transition-all hover:bg-emerald-500/10 hover:text-emerald-400 border border-[var(--color-zinc-700)]/50`}
                        aria-label="Copy link"
                    >
                        {copied ? <Check size={iconSizes[size]} className="text-emerald-400" /> : <Link2 size={iconSizes[size]} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--color-zinc-900)] border border-[var(--color-zinc-800)] rounded-xl shadow-xl z-50 md:hidden animate-fade-in">
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 text-[var(--color-zinc-300)] hover:bg-[var(--color-zinc-800)] transition-colors first:rounded-t-xl"
                        >
                            <link.icon size={16} />
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[var(--color-zinc-300)] hover:bg-[var(--color-zinc-800)] transition-colors rounded-b-xl"
                    >
                        {copied ? <Check size={16} className="text-emerald-400" /> : <Link2 size={16} />}
                        {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                </div>
            )}
        </div>
    );
}
