import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Github, ArrowUp, Rss } from 'lucide-react';

const footerLinks = {
    content: [
        { label: 'Articles', href: '/articles' },
        { label: 'Leaders', href: '/leaders' },
        { label: 'Newsletter', href: '/#newsletter' },
    ],
    categories: [
        { label: 'Strategy', href: '/articles?category=strategy' },
        { label: 'Technology', href: '/articles?category=technology' },
        { label: 'Trends', href: '/articles?category=trends' },
        { label: 'Insights', href: '/articles?category=insights' },
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Advertise', href: '/advertise' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/vibecio', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/vibecio', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vibecio', label: 'GitHub' },
    { icon: Rss, href: '/rss', label: 'RSS Feed' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-[var(--color-zinc-800)]">
            {/* Main Footer */}
            <div className="container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <span className="font-display text-2xl font-bold tracking-tight">
                                Vibe<span className="text-[var(--color-accent)]">CIO</span>
                            </span>
                        </Link>
                        <p className="text-[var(--color-zinc-400)] mb-6 max-w-sm">
                            Thought leadership for the age of AI. Deep insights on enterprise transformation, vibe coding, and the future of technology leadership.
                        </p>

                        {/* Newsletter Signup */}
                        <div className="bg-[var(--color-zinc-800)]/30 rounded-xl p-4 border border-[var(--color-zinc-700)]/50">
                            <p className="text-sm font-medium mb-3">Stay ahead with our weekly digest</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none text-sm"
                                />
                                <button className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-black font-semibold text-sm hover:bg-[var(--color-accent-hover)] transition-colors flex items-center gap-2">
                                    <Mail size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-zinc-500)]">
                            Content
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.content.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-zinc-400)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-zinc-500)]">
                            Categories
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.categories.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-zinc-400)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-zinc-500)]">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-[var(--color-zinc-400)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[var(--color-zinc-800)]">
                <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <div className="flex items-center gap-4 text-sm text-[var(--color-zinc-500)]">
                        <span>© {new Date().getFullYear()} VibeCIO</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-700)]" />
                        <span>Updated Daily</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-700)]" />
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-lg bg-[var(--color-zinc-800)]/50 hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors"
                                    aria-label={social.label}
                                >
                                    <Icon size={16} className="text-[var(--color-zinc-400)]" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-30"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
}
