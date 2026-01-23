import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Github, ArrowUp, Rss, Youtube, Mic } from 'lucide-react';

const footerLinks = {
    content: [
        { label: 'Articles', href: '/articles' },
        { label: 'Leaders', href: '/leaders' },
        { label: 'AI Trends', href: '/ai-trends' },
        { label: 'Research', href: '/research' },
        { label: 'Podcast', href: '/podcast' },
    ],
    categories: [
        { label: 'Industries', href: '/industries' },
        { label: 'Reports', href: '/reports' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Events', href: '/events' },
        { label: 'Awards', href: '/awards' },
        { label: 'Community', href: '/community' },
    ],
    company: [
        { label: 'About', href: '/about' },
        { label: 'Editorial Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Contact', href: '/contact' },
    ],
    resources: [
        { label: 'Resources', href: '/resources' },
        { label: 'Benchmarks', href: '/benchmarks' },
        { label: 'Topics', href: '/topics' },
        { label: 'Glossary', href: '/glossary' },
        { label: 'Contributors', href: '/contributors' },
        { label: 'Partners', href: '/partners' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/vibecio', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/vibecio', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@vibecio', label: 'YouTube' },
    { icon: Mic, href: '/podcast', label: 'Podcast' },
    { icon: Github, href: 'https://github.com/vibecio', label: 'GitHub' },
    { icon: Rss, href: '/rss', label: 'RSS Feed' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-[var(--color-zinc-800)] bg-gradient-to-b from-transparent to-[var(--color-zinc-950)]">
            {/* Premium CTA Banner */}
            <div className="container py-12">
                <div className="glass-premium rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-zinc-100)] mb-2">
                            Stay Ahead of the Curve
                        </h3>
                        <p className="text-[var(--color-zinc-400)] max-w-md">
                            Get weekly insights on AI, enterprise tech, and innovation delivered to 50,000+ technology leaders.
                        </p>
                    </div>
                    <Link
                        to="/subscribe"
                        className="flex-shrink-0 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                    >
                        Subscribe Free
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <span className="font-display text-2xl font-bold tracking-tight">
                                Vibe<span className="text-[var(--color-accent)]">CIO</span>
                            </span>
                        </Link>
                        <p className="text-[var(--color-zinc-400)] mb-6 max-w-sm">
                            Thought leadership for the age of AI. Deep insights on enterprise transformation, vibe coding, and the future of technology.
                        </p>

                        {/* Newsletter Signup */}
                        <div className="bg-[var(--color-zinc-800)]/30 rounded-xl p-4 border border-[var(--color-zinc-700)]/50">
                            <p className="text-sm font-medium mb-3">Weekly digest for tech leaders</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none text-sm"
                                />
                                <button className="px-4 py-2.5 rounded-lg bg-[var(--color-accent)] text-black font-semibold text-sm hover:bg-[var(--color-accent-hover)] transition-colors flex items-center gap-2">
                                    <Mail size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-accent)]">
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
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-accent)]">
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
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-accent)]">
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

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-accent)]">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
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
                    <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--color-zinc-500)]">
                        <span>© {new Date().getFullYear()} VibeCIO</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-700)]" />
                        <span>Updated Daily</span>
                        <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-700)]" />
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)]/50 hover:bg-[var(--color-accent)]/10 hover:border-[var(--color-accent)]/30 flex items-center justify-center transition-all border border-transparent"
                                    aria-label={social.label}
                                >
                                    <Icon size={18} className="text-[var(--color-zinc-400)] hover:text-[var(--color-accent)]" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--color-accent)] text-black flex items-center justify-center shadow-lg shadow-[var(--color-accent)]/30 hover:scale-110 transition-transform z-30"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
}
