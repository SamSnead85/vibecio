import { Accessibility, Eye, Keyboard, MessageSquare, Volume2, Monitor, CheckCircle, Mail } from 'lucide-react';

export default function AccessibilityPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />

                <div className="container relative z-10 py-16">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/20">
                                <Accessibility className="text-blue-400" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">Accessibility</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[var(--color-zinc-100)]">
                            Accessibility Statement
                        </h1>

                        <p className="text-xl text-[var(--color-zinc-400)] max-w-3xl">
                            VibeCIO is committed to ensuring digital accessibility for people with disabilities.
                            We are continually improving the user experience for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-premium rounded-2xl p-8 mb-12">
                            <h2 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-4">
                                Our Commitment
                            </h2>
                            <p className="text-[var(--color-zinc-400)] mb-4">
                                VibeCIO strives to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level.
                                These guidelines explain how to make web content more accessible for people with disabilities,
                                and user-friendly for everyone.
                            </p>
                            <p className="text-[var(--color-zinc-400)]">
                                We believe the web should be accessible to all, and we are committed to providing a website
                                that is accessible to the widest possible audience, regardless of technology or ability.
                            </p>
                        </div>

                        {/* Accessibility Features */}
                        <h2 className="font-display text-3xl font-bold text-[var(--color-zinc-100)] mb-8">
                            Accessibility Features
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {[
                                {
                                    icon: Keyboard,
                                    title: 'Keyboard Navigation',
                                    description: 'All functionality is accessible via keyboard. Use Tab to navigate, Enter to select, and Escape to close modals.'
                                },
                                {
                                    icon: Eye,
                                    title: 'Visual Accessibility',
                                    description: 'High contrast text, clear typography, and adjustable font sizes for better readability.'
                                },
                                {
                                    icon: Monitor,
                                    title: 'Responsive Design',
                                    description: 'Content is accessible on all devices and screen sizes, with proper zoom support up to 200%.'
                                },
                                {
                                    icon: MessageSquare,
                                    title: 'Clear Language',
                                    description: 'We use clear, simple language and provide definitions for technical terms.'
                                },
                                {
                                    icon: Volume2,
                                    title: 'Screen Reader Support',
                                    description: 'All content is structured with proper headings and ARIA labels for screen reader compatibility.'
                                },
                                {
                                    icon: CheckCircle,
                                    title: 'Focus Indicators',
                                    description: 'Clear visual focus indicators help keyboard users track their location on the page.'
                                }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="glass-premium rounded-2xl p-6 stagger-item"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                                        <feature.icon className="text-blue-400" size={24} />
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-zinc-400)]">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Standards Section */}
                        <div className="mb-12">
                            <h2 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-6">
                                Standards We Follow
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Web Content Accessibility Guidelines (WCAG) 2.1 Level AA',
                                    'Section 508 of the Rehabilitation Act',
                                    'Americans with Disabilities Act (ADA)',
                                    'WAI-ARIA Authoring Practices'
                                ].map((standard, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="text-blue-400" size={14} />
                                        </div>
                                        <span className="text-[var(--color-zinc-300)]">{standard}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Keyboard Shortcuts */}
                        <div className="mb-12">
                            <h2 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-6">
                                Keyboard Shortcuts
                            </h2>
                            <div className="glass-premium rounded-2xl overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[var(--color-zinc-700)]">
                                            <th className="text-left p-4 text-sm font-semibold text-[var(--color-zinc-400)]">Shortcut</th>
                                            <th className="text-left p-4 text-sm font-semibold text-[var(--color-zinc-400)]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { shortcut: '⌘K / Ctrl+K', action: 'Open search' },
                                            { shortcut: 'Tab', action: 'Navigate to next element' },
                                            { shortcut: 'Shift + Tab', action: 'Navigate to previous element' },
                                            { shortcut: 'Enter / Space', action: 'Activate button or link' },
                                            { shortcut: 'Escape', action: 'Close modal or menu' },
                                            { shortcut: 'Arrow Keys', action: 'Navigate within menus' }
                                        ].map((item, index) => (
                                            <tr key={index} className="border-b border-[var(--color-zinc-800)] last:border-0">
                                                <td className="p-4">
                                                    <code className="px-2 py-1 text-sm bg-[var(--color-zinc-800)] text-[var(--color-accent)] rounded">
                                                        {item.shortcut}
                                                    </code>
                                                </td>
                                                <td className="p-4 text-[var(--color-zinc-300)]">{item.action}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Feedback Section */}
                        <div className="glass-premium rounded-2xl p-8">
                            <div className="flex items-start gap-4">
                                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-4">
                                        Feedback & Assistance
                                    </h3>
                                    <p className="text-[var(--color-zinc-400)] mb-4">
                                        We welcome your feedback on the accessibility of VibeCIO. If you encounter
                                        accessibility barriers or have suggestions for improvement, please let us know:
                                    </p>
                                    <ul className="space-y-2 text-[var(--color-zinc-400)]">
                                        <li>
                                            Email: <a href="mailto:accessibility@vibecio.com" className="text-blue-400 hover:underline">
                                                accessibility@vibecio.com
                                            </a>
                                        </li>
                                        <li>Phone: +1 (800) 555-0123</li>
                                    </ul>
                                    <p className="text-sm text-[var(--color-zinc-500)] mt-4">
                                        We try to respond to accessibility feedback within 2 business days.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
