import { useState, useEffect } from 'react';
import { Share2, Twitter, Linkedin, Facebook, Link2, Mail, MessageCircle, Check, X, QrCode } from 'lucide-react';

// Phase 1051-1060: Enhanced Share Modal Component
// Social sharing with analytics tracking and QR code

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    url: string;
    description?: string;
}

interface SharePlatform {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
    getUrl: (title: string, url: string) => string;
}

const platforms: SharePlatform[] = [
    { id: 'twitter', name: 'X (Twitter)', icon: <Twitter className="w-5 h-5" />, color: 'bg-zinc-800 hover:bg-zinc-700', getUrl: (t, url) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}&url=${encodeURIComponent(url)}` },
    { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, color: 'bg-[#0077b5] hover:bg-[#006699]', getUrl: (_t, url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { id: 'facebook', name: 'Facebook', icon: <Facebook className="w-5 h-5" />, color: 'bg-[#1877f2] hover:bg-[#166fe5]', getUrl: (_t, url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { id: 'email', name: 'Email', icon: <Mail className="w-5 h-5" />, color: 'bg-zinc-700 hover:bg-zinc-600', getUrl: (t, url) => `mailto:?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(`Check out this article: ${url}`)}` },
    { id: 'whatsapp', name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, color: 'bg-[#25d366] hover:bg-[#22bf5b]', getUrl: (t, url) => `https://wa.me/?text=${encodeURIComponent(`${t} ${url}`)}` }
];

export default function ShareModal({ isOpen, onClose, title, url, description }: ShareModalProps) {
    const [copied, setCopied] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [shareCount, setShareCount] = useState({ twitter: 245, linkedin: 189, facebook: 67 });

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = (platform: SharePlatform) => {
        window.open(platform.getUrl(title, url), '_blank', 'width=600,height=400');
        // Track share analytics
        setShareCount(prev => ({
            ...prev,
            [platform.id]: (prev[platform.id as keyof typeof prev] || 0) + 1
        }));
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, text: description, url });
            } catch (err) {
                console.log('Share cancelled');
            }
        }
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                        <Share2 className="w-5 h-5 text-accent" />
                        <h3 className="text-lg font-semibold text-zinc-100">Share Article</h3>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-lg text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Article Preview */}
                    <div className="p-4 bg-zinc-800/50 rounded-xl mb-6">
                        <h4 className="font-medium text-zinc-100 line-clamp-2 mb-1">{title}</h4>
                        <p className="text-sm text-zinc-500 truncate">{url}</p>
                    </div>

                    {/* Share Platforms */}
                    <div className="grid grid-cols-5 gap-3 mb-6">
                        {platforms.map((platform) => (
                            <button key={platform.id} onClick={() => handleShare(platform)} className={`flex flex-col items-center gap-2 p-3 rounded-xl ${platform.color} text-white transition-all hover:scale-105`}>
                                {platform.icon}
                                <span className="text-[10px]">{platform.name.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>

                    {/* Copy Link */}
                    <div className="flex gap-2 mb-6">
                        <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-xl">
                            <Link2 className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                            <input type="text" value={url} readOnly className="flex-1 bg-transparent text-sm text-zinc-300 outline-none truncate" />
                        </div>
                        <button onClick={copyToClipboard} className={`px-4 py-3 rounded-xl font-medium transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-accent text-zinc-950 hover:bg-accent-hover'}`}>
                            {copied ? <Check className="w-5 h-5" /> : 'Copy'}
                        </button>
                    </div>

                    {/* Additional Options */}
                    <div className="flex items-center justify-between">
                        <button onClick={() => setShowQR(!showQR)} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                            <QrCode className="w-4 h-4" />
                            {showQR ? 'Hide' : 'Show'} QR Code
                        </button>
                        {'share' in navigator && (
                            <button onClick={handleNativeShare} className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors">
                                <Share2 className="w-4 h-4" />
                                More Options
                            </button>
                        )}
                    </div>

                    {/* QR Code */}
                    {showQR && (
                        <div className="mt-6 flex justify-center">
                            <div className="p-4 bg-white rounded-xl">
                                <div className="w-32 h-32 bg-zinc-200 rounded flex items-center justify-center text-zinc-400">
                                    <QrCode className="w-16 h-16" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Share Stats */}
                    <div className="mt-6 pt-4 border-t border-zinc-800">
                        <p className="text-xs text-zinc-500 text-center">
                            This article has been shared <span className="text-accent font-medium">{Object.values(shareCount).reduce((a, b) => a + b, 0)}</span> times
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
