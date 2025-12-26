import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-lg px-6">
                {/* 404 Number */}
                <div className="relative mb-8">
                    <span className="text-[12rem] font-display font-bold text-[var(--color-zinc-800)] select-none leading-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-orange-600 flex items-center justify-center animate-pulse">
                            <span className="text-3xl">🔍</span>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-3xl font-display font-bold mb-4">
                    Page Not Found
                </h1>
                <p className="text-[var(--color-zinc-400)] mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back to the thought leadership.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-black font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
