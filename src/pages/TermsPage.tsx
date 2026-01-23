import { Shield, FileText, Scale, AlertTriangle, Ban, Lock, RefreshCw, Mail } from 'lucide-react';

export default function TermsPage() {
    const lastUpdated = 'January 1, 2026';

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />

                <div className="container relative z-10 py-16">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                                <FileText className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Legal</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[var(--color-zinc-100)]">
                            Terms of Service
                        </h1>

                        <p className="text-lg text-[var(--color-zinc-400)]">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-invert prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="glass-premium rounded-2xl p-8 mb-8">
                                <div className="flex items-start gap-4">
                                    <Shield className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h2 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mt-0 mb-4">
                                            Agreement to Terms
                                        </h2>
                                        <p className="text-[var(--color-zinc-400)] m-0">
                                            By accessing or using VibeCIO ("the Service"), you agree to be bound by these Terms of Service.
                                            If you disagree with any part of the terms, you may not access the Service. VibeCIO is operated
                                            by VibeCIO Media, Inc. ("we," "us," or "our").
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Sections */}
                            <div className="space-y-12">
                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Scale className="text-[var(--color-accent)]" size={20} />
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] m-0">
                                            1. Intellectual Property Rights
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-zinc-400)]">
                                        The Service and its original content, features, and functionality are and will remain
                                        the exclusive property of VibeCIO Media, Inc. and its licensors. The Service is protected
                                        by copyright, trademark, and other laws of both the United States and foreign countries.
                                    </p>
                                    <ul className="text-[var(--color-zinc-400)] space-y-2 mt-4">
                                        <li>All articles, research, and editorial content are copyrighted</li>
                                        <li>The VibeCIO name and logo are registered trademarks</li>
                                        <li>Unauthorized reproduction is prohibited</li>
                                    </ul>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Lock className="text-[var(--color-accent)]" size={20} />
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] m-0">
                                            2. User Accounts
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-zinc-400)]">
                                        When you create an account with us, you must provide accurate, complete, and current
                                        information. Failure to do so constitutes a breach of the Terms.
                                    </p>
                                    <ul className="text-[var(--color-zinc-400)] space-y-2 mt-4">
                                        <li>You are responsible for safeguarding your password</li>
                                        <li>You agree not to share your account credentials</li>
                                        <li>You must notify us immediately of any breach of security</li>
                                    </ul>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Ban className="text-[var(--color-accent)]" size={20} />
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] m-0">
                                            3. Prohibited Uses
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-zinc-400)]">
                                        You may use the Service only for lawful purposes and in accordance with the Terms.
                                        You agree not to use the Service:
                                    </p>
                                    <ul className="text-[var(--color-zinc-400)] space-y-2 mt-4">
                                        <li>In any way that violates any applicable law or regulation</li>
                                        <li>To transmit any unsolicited advertising or promotional material</li>
                                        <li>To impersonate or attempt to impersonate VibeCIO or any employee</li>
                                        <li>To engage in any conduct that restricts others' use of the Service</li>
                                        <li>To attempt to gain unauthorized access to any portion of the Service</li>
                                    </ul>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <AlertTriangle className="text-[var(--color-accent)]" size={20} />
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] m-0">
                                            4. Disclaimer
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-zinc-400)]">
                                        The Service is provided on an "AS IS" and "AS AVAILABLE" basis. VibeCIO makes no
                                        warranties, expressed or implied, and hereby disclaims and negates all other warranties
                                        including, without limitation, implied warranties of merchantability, fitness for a
                                        particular purpose, or non-infringement.
                                    </p>
                                    <p className="text-[var(--color-zinc-400)] mt-4">
                                        The information presented is for general informational purposes and should not be
                                        construed as professional advice. Always consult with qualified professionals before
                                        making business decisions.
                                    </p>
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-4">
                                        <RefreshCw className="text-[var(--color-accent)]" size={20} />
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] m-0">
                                            5. Changes to Terms
                                        </h3>
                                    </div>
                                    <p className="text-[var(--color-zinc-400)]">
                                        We reserve the right to modify or replace these Terms at any time. If a revision is
                                        material, we will try to provide at least 30 days' notice prior to any new terms taking
                                        effect. What constitutes a material change will be determined at our sole discretion.
                                    </p>
                                </section>
                            </div>

                            {/* Contact */}
                            <div className="glass-premium rounded-2xl p-8 mt-12">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mt-0 mb-4">
                                            Questions About These Terms?
                                        </h3>
                                        <p className="text-[var(--color-zinc-400)] m-0">
                                            If you have any questions about these Terms, please contact us at{' '}
                                            <a href="mailto:legal@vibecio.com" className="text-[var(--color-accent)] hover:underline">
                                                legal@vibecio.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
