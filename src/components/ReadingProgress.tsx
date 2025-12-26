import { useState, useEffect } from 'react';

interface ReadingProgressProps {
    targetRef?: React.RefObject<HTMLElement>;
}

export default function ReadingProgress({ targetRef }: ReadingProgressProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            let scrollProgress: number;

            if (targetRef?.current) {
                const element = targetRef.current;
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementHeight = rect.height;
                const scrolled = window.scrollY - elementTop + window.innerHeight;
                scrollProgress = Math.min(Math.max(scrolled / elementHeight, 0), 1) * 100;
            } else {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                scrollProgress = (scrollTop / docHeight) * 100;
            }

            setProgress(scrollProgress);
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, [targetRef]);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[100]">
            <div
                className="h-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
