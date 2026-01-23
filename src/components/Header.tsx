import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, BookOpen, Users, Zap, ChevronDown, Mic, Calendar, Briefcase, BarChart3, Award } from 'lucide-react';

// Main navigation links
const mainNavLinks = [
    { label: 'Home', href: '/', icon: Zap },
    { label: 'Articles', href: '/articles', icon: BookOpen },
    { label: 'Leaders', href: '/leaders', icon: Users },
];

// Dropdown menu items
const moreLinks = [
    { label: 'AI Trends', href: '/ai-trends', icon: BarChart3, desc: 'AI intelligence hub' },
    { label: 'Industries', href: '/industries', icon: Briefcase, desc: 'Sector insights' },
    { label: 'Reports', href: '/reports', icon: BookOpen, desc: 'Research library' },
    { label: 'Podcast', href: '/podcast', icon: Mic, desc: 'Weekly conversations with CIOs' },
    { label: 'Webinars', href: '/webinars', icon: Calendar, desc: 'Live expert sessions' },
    { label: 'Research', href: '/research', icon: BarChart3, desc: 'Reports & analysis' },
    { label: 'Benchmarks', href: '/benchmarks', icon: BarChart3, desc: 'Industry data & stats' },
    { label: 'Topics', href: '/topics', icon: BookOpen, desc: 'Explore by topic' },
    { label: 'Glossary', href: '/glossary', icon: BookOpen, desc: 'Tech terminology' },
    { label: 'Case Studies', href: '/case-studies', icon: Briefcase, desc: 'Success stories' },
    { label: 'Contributors', href: '/contributors', icon: Users, desc: 'Expert writers' },
    { label: 'Awards', href: '/awards', icon: Award, desc: 'CIO Excellence Awards' },
    { label: 'Community', href: '/community', icon: Users, desc: 'Join the network' },
];

// Mobile-only additional links
const mobileSecondaryLinks = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Advertise', href: '/advertise' },
    { label: 'Editorial Team', href: '/team' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation();
    const moreDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu and dropdown on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMoreOpen(false);
    }, [location.pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
                setIsMoreOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActiveLink = (href: string) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5 bg-transparent'
                    }`}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="font-display text-2xl font-bold tracking-tight">
                            Vibe<span className="text-[var(--color-accent)] group-hover:text-white transition-colors">CIO</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {mainNavLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActiveLink(link.href)
                                        ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                        : 'text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-800)]/50'
                                        }`}
                                >
                                    <Icon size={16} />
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* More Dropdown */}
                        <div className="relative" ref={moreDropdownRef}>
                            <button
                                onClick={() => setIsMoreOpen(!isMoreOpen)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isMoreOpen
                                    ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                    : 'text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-800)]/50'
                                    }`}
                            >
                                More
                                <ChevronDown size={14} className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isMoreOpen && (
                                <div className="absolute top-full right-0 mt-2 w-72 bg-[var(--color-zinc-900)] border border-[var(--color-zinc-800)] rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                                    <div className="py-2">
                                        {moreLinks.map((link) => {
                                            const Icon = link.icon;
                                            return (
                                                <Link
                                                    key={link.href}
                                                    to={link.href}
                                                    className="flex items-start gap-3 px-4 py-3 hover:bg-[var(--color-zinc-800)]/50 transition-colors group"
                                                >
                                                    <div className="w-9 h-9 rounded-lg bg-[var(--color-zinc-800)] group-hover:bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                                        <Icon size={16} className="text-[var(--color-zinc-400)] group-hover:text-[var(--color-accent)] transition-colors" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-[var(--color-zinc-200)] group-hover:text-white transition-colors">
                                                            {link.label}
                                                        </div>
                                                        <div className="text-xs text-[var(--color-zinc-500)]">
                                                            {link.desc}
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <div className="border-t border-[var(--color-zinc-800)] p-3">
                                        <Link
                                            to="/advertise"
                                            className="block text-center text-sm text-[var(--color-accent)] hover:underline"
                                        >
                                            Advertise with us →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Search Button */}
                        <button
                            className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)]/50 hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors"
                            aria-label="Search"
                        >
                            <Search size={18} className="text-[var(--color-zinc-400)]" />
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)]/50 hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun size={18} className="text-[var(--color-zinc-400)]" />
                            ) : (
                                <Moon size={18} className="text-[var(--color-zinc-400)]" />
                            )}
                        </button>

                        {/* Subscribe CTA */}
                        <Link
                            to="/subscribe"
                            className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-black font-semibold text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
                        >
                            Subscribe
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Slide-out Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--color-zinc-900)] border-l border-[var(--color-zinc-800)] z-50 md:hidden transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col min-h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-[var(--color-zinc-800)]">
                        <span className="font-display text-xl font-bold tracking-tight">
                            Vibe<span className="text-[var(--color-accent)]">CIO</span>
                        </span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-[var(--color-zinc-400)] hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Main Navigation */}
                    <nav className="py-4">
                        <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-zinc-600)]">
                            Main
                        </div>
                        {mainNavLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`flex items-center gap-4 px-6 py-4 transition-colors ${isActiveLink(link.href)
                                        ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                                        : 'text-[var(--color-zinc-300)] hover:text-white hover:bg-[var(--color-zinc-800)]/50'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{link.label}</span>
                                </Link>
                            );
                        })}

                        {/* More Links */}
                        <div className="px-4 py-2 mt-4 text-xs font-bold uppercase tracking-widest text-[var(--color-zinc-600)]">
                            More
                        </div>
                        {moreLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className="flex items-center gap-4 px-6 py-3 text-[var(--color-zinc-300)] hover:text-white hover:bg-[var(--color-zinc-800)]/50 transition-colors"
                                >
                                    <Icon size={18} />
                                    <span className="font-medium">{link.label}</span>
                                </Link>
                            );
                        })}

                        {/* Secondary Links */}
                        <div className="px-4 py-2 mt-4 text-xs font-bold uppercase tracking-widest text-[var(--color-zinc-600)]">
                            Company
                        </div>
                        {mobileSecondaryLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="flex items-center gap-4 px-6 py-3 text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-800)]/50 transition-colors"
                            >
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="mt-auto p-6 border-t border-[var(--color-zinc-800)] space-y-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-[var(--color-zinc-800)]/50 text-[var(--color-zinc-300)]"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>

                        {/* Subscribe CTA */}
                        <Link
                            to="/subscribe"
                            className="block w-full px-4 py-3 rounded-lg bg-[var(--color-accent)] text-black text-center font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                        >
                            Subscribe to Newsletter
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
