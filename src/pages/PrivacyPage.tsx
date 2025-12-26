import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
    const lastUpdated = 'December 26, 2025';

    return (
        <div className="min-h-screen py-24">
            <div className="container max-w-3xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="text-[var(--color-accent)]" size={28} />
                        <span className="text-sm text-[var(--color-zinc-500)]">Last updated: {lastUpdated}</span>
                    </div>
                    <h1 className="text-4xl font-display font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-lg text-[var(--color-zinc-400)]">
                        Your privacy matters to us. This policy explains how VibeCIO collects, uses, and protects your information.
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none space-y-12">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <p className="text-[var(--color-zinc-300)]">
                            We collect information you provide directly, such as when you subscribe to our newsletter, create an account, or contact us. This may include:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-zinc-300)] space-y-2 mt-4">
                            <li>Email address (for newsletter subscriptions)</li>
                            <li>Name and contact information (for inquiries)</li>
                            <li>Reading preferences and bookmarks (stored locally)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p className="text-[var(--color-zinc-300)]">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-zinc-300)] space-y-2 mt-4">
                            <li>Send you our newsletter and updates</li>
                            <li>Respond to your inquiries and requests</li>
                            <li>Improve our content and user experience</li>
                            <li>Analyze site usage and trends</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
                        <p className="text-[var(--color-zinc-300)]">
                            Your reading history, bookmarks, and preferences are stored locally in your browser using localStorage. This data never leaves your device unless you explicitly share it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
                        <p className="text-[var(--color-zinc-300)]">
                            We use essential cookies to ensure the website functions properly. We do not use tracking cookies for advertising purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                        <p className="text-[var(--color-zinc-300)]">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-zinc-300)] space-y-2 mt-4">
                            <li>Unsubscribe from our newsletter at any time</li>
                            <li>Request deletion of your personal data</li>
                            <li>Clear your local reading history and bookmarks via Settings</li>
                            <li>Contact us with privacy-related questions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <p className="text-[var(--color-zinc-300)]">
                            For privacy-related inquiries, please contact us at{' '}
                            <a href="mailto:privacy@vibecio.com" className="text-[var(--color-accent)] hover:underline">
                                privacy@vibecio.com
                            </a>
                            {' '}or visit our{' '}
                            <Link to="/contact" className="text-[var(--color-accent)] hover:underline">
                                Contact page
                            </Link>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
