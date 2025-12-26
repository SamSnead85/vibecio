interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    animate?: boolean;
}

export function Skeleton({
    className = '',
    width,
    height,
    rounded = 'md',
    animate = true,
}: SkeletonProps) {
    const roundedClasses = {
        none: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
    };

    return (
        <div
            className={`bg-[var(--color-zinc-800)] ${roundedClasses[rounded]} ${animate ? 'animate-shimmer' : ''} ${className}`}
            style={{ width, height }}
        />
    );
}

export function ArticleCardSkeleton() {
    return (
        <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl overflow-hidden border border-[var(--color-zinc-700)]/50">
            <Skeleton height={192} rounded="none" />
            <div className="p-6 space-y-4">
                <Skeleton width={80} height={24} rounded="full" />
                <Skeleton height={24} />
                <Skeleton width="70%" height={16} />
                <div className="flex items-center gap-2">
                    <Skeleton width={60} height={16} />
                    <Skeleton width={60} height={16} />
                </div>
            </div>
        </div>
    );
}

export function LeaderCardSkeleton() {
    return (
        <div className="bg-[var(--color-zinc-800)]/30 rounded-2xl p-6 border border-[var(--color-zinc-700)]/50">
            <div className="flex items-start gap-4 mb-4">
                <Skeleton width={64} height={64} rounded="xl" />
                <div className="flex-1 space-y-2">
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={16} width="40%" />
                </div>
            </div>
            <Skeleton height={48} className="mb-4" />
            <div className="flex gap-2">
                <Skeleton width={80} height={24} rounded="full" />
                <Skeleton width={80} height={24} rounded="full" />
            </div>
        </div>
    );
}

export function ArticlePageSkeleton() {
    return (
        <div className="min-h-screen py-24">
            <div className="container max-w-4xl">
                {/* Category */}
                <Skeleton width={100} height={28} rounded="full" className="mb-6" />

                {/* Title */}
                <Skeleton height={48} className="mb-4" />
                <Skeleton width="80%" height={48} className="mb-8" />

                {/* Meta */}
                <div className="flex items-center gap-6 mb-12">
                    <Skeleton width={120} height={20} />
                    <Skeleton width={100} height={20} />
                    <Skeleton width={80} height={20} />
                </div>

                {/* Image */}
                <Skeleton height={400} rounded="xl" className="mb-12" />

                {/* Content */}
                <div className="space-y-4">
                    <Skeleton height={20} />
                    <Skeleton height={20} />
                    <Skeleton width="90%" height={20} />
                    <Skeleton height={20} />
                    <Skeleton width="75%" height={20} />
                </div>
            </div>
        </div>
    );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: count }).map((_, i) => (
                <ArticleCardSkeleton key={i} />
            ))}
        </div>
    );
}
