import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Headphones, X, Minimize2 } from 'lucide-react';

// Phase 1031-1040: Audio Player Component
// Text-to-speech and podcast playback for articles

interface AudioPlayerProps {
    title: string;
    author: string;
    duration?: number;
    audioUrl?: string;
    coverImage?: string;
    onClose?: () => void;
}

export default function AudioPlayer({ title, author, duration = 720, coverImage, onClose }: AudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentTime((prev) => {
                    if (prev >= duration) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000 / playbackRate);
        }
        return () => clearInterval(interval);
    }, [isPlaying, duration, playbackRate]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = (currentTime / duration) * 100;

    const handleProgressClick = (e: React.MouseEvent) => {
        if (!progressRef.current) return;
        const rect = progressRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = x / rect.width;
        setCurrentTime(Math.floor(percent * duration));
    };

    const skip = (seconds: number) => {
        setCurrentTime((prev) => Math.max(0, Math.min(duration, prev + seconds)));
    };

    const cyclePlaybackRate = () => {
        const rates = [0.75, 1, 1.25, 1.5, 2];
        const currentIndex = rates.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % rates.length;
        setPlaybackRate(rates[nextIndex]);
    };

    if (isMinimized) {
        return (
            <div className="fixed bottom-6 left-6 z-50">
                <div className="glass-card rounded-2xl p-3 flex items-center gap-3 shadow-2xl">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        {coverImage ? (
                            <img src={coverImage} alt={title} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center">
                                <Headphones className="w-6 h-6 text-zinc-950" />
                            </div>
                        )}
                    </div>
                    <div className="min-w-0">
                        <h4 className="text-sm font-medium text-zinc-100 truncate max-w-[150px]">{title}</h4>
                        <p className="text-xs text-zinc-500">{formatTime(currentTime)} / {formatTime(duration)}</p>
                    </div>
                    <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 rounded-full bg-accent text-zinc-950">
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                    <button onClick={() => setIsMinimized(false)} className="p-1.5 text-zinc-500 hover:text-zinc-100">
                        <Minimize2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800 shadow-2xl">
            <div className="container py-4">
                <div className="flex items-center gap-6">
                    {/* Cover & Info */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg overflow-hidden">
                            {coverImage ? (
                                <img src={coverImage} alt={title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center">
                                    <Headphones className="w-7 h-7 text-zinc-950" />
                                </div>
                            )}
                        </div>
                        <div className="hidden md:block">
                            <h4 className="font-medium text-zinc-100 max-w-[200px] truncate">{title}</h4>
                            <p className="text-sm text-zinc-500">{author}</p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex-1 flex flex-col items-center gap-2">
                        <div className="flex items-center gap-4">
                            <button onClick={() => skip(-15)} className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors" title="Rewind 15s">
                                <SkipBack className="w-5 h-5" />
                            </button>
                            <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 rounded-full bg-accent text-zinc-950 flex items-center justify-center hover:bg-accent-hover transition-colors">
                                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                            </button>
                            <button onClick={() => skip(15)} className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors" title="Forward 15s">
                                <SkipForward className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full max-w-xl flex items-center gap-3">
                            <span className="text-xs text-zinc-500 w-12 text-right">{formatTime(currentTime)}</span>
                            <div ref={progressRef} onClick={handleProgressClick} className="flex-1 h-1.5 bg-zinc-700 rounded-full cursor-pointer group">
                                <div className="h-full bg-accent rounded-full relative transition-all" style={{ width: `${progress}%` }}>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                            <span className="text-xs text-zinc-500 w-12">{formatTime(duration)}</span>
                        </div>
                    </div>

                    {/* Additional Controls */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={cyclePlaybackRate} className="px-2 py-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 bg-zinc-800 rounded-md">
                            {playbackRate}x
                        </button>
                        <button onClick={() => setIsMuted(!isMuted)} className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                        <button onClick={() => setIsMinimized(true)} className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors md:block hidden">
                            <Minimize2 className="w-5 h-5" />
                        </button>
                        {onClose && (
                            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
