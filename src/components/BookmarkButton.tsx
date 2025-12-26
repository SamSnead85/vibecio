import { useBookmarks } from '../hooks/usePreferences';
import { Bookmark, BookmarkCheck } from 'lucide-react';

interface BookmarkButtonProps {
    id: string;
    type: 'article' | 'leader';
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
}

export default function BookmarkButton({ id, type, size = 'md', showLabel = false }: BookmarkButtonProps) {
    const { isBookmarked, toggleBookmark } = useBookmarks();
    const bookmarked = isBookmarked(id);

    const sizes = {
        sm: { button: 'w-8 h-8', icon: 14 },
        md: { button: 'w-10 h-10', icon: 18 },
        lg: { button: 'w-12 h-12', icon: 22 },
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(id, type);
    };

    if (showLabel) {
        return (
            <button
                onClick={handleClick}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${bookmarked
                        ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'
                        : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] hover:bg-[var(--color-zinc-700)]'
                    }`}
                aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
            >
                {bookmarked ? (
                    <>
                        <BookmarkCheck size={16} />
                        <span>Saved</span>
                    </>
                ) : (
                    <>
                        <Bookmark size={16} />
                        <span>Save</span>
                    </>
                )}
            </button>
        );
    }

    return (
        <button
            onClick={handleClick}
            className={`${sizes[size].button} rounded-lg flex items-center justify-center transition-all ${bookmarked
                    ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'
                    : 'bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] text-[var(--color-zinc-400)]'
                }`}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
            {bookmarked ? (
                <BookmarkCheck size={sizes[size].icon} />
            ) : (
                <Bookmark size={sizes[size].icon} />
            )}
        </button>
    );
}
