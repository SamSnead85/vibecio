import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Search, BookOpen, Users, Zap, Mail } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/', icon: Zap },
    { label: 'Articles', href: '/articles', icon: BookOpen },
    { label: 'Leaders', href: '/leaders', icon: Users },
    { label: 'Newsletter', href: '/#newsletter', icon: Mail },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Handle hash links (scroll to element)
    const handleNavClick = (href: string) => {
        if (href.startsWith('/#')) {
            const elementId = href.replace('/#', '');
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

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
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isHash = link.href.startsWith('/#');

                            if (isHash) {
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-zinc-400)] hover:text-white hover:bg-[var(--color-zinc-800)]/50 transition-all"
                                    >
                                        <Icon size={16} />
                                        {link.label}
                                    </a>
                                );
                            }

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
                            to="/#newsletter"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('/#newsletter');
                            }}
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
                className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--color-zinc-900)] border-l border-[var(--color-zinc-800)] z-50 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
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

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-4 overflow-y-auto">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isHash = link.href.startsWith('/#');

                            if (isHash) {
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.href);
                                        }}
                                        className="flex items-center gap-4 px-6 py-4 text-[var(--color-zinc-300)] hover:text-white hover:bg-[var(--color-zinc-800)]/50 transition-colors"
                                    >
                                        <Icon size={20} />
                                        <span className="font-medium">{link.label}</span>
                                    </a>
                                );
                            }

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
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="p-6 border-t border-[var(--color-zinc-800)] space-y-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="w-full flex items-center gap-4 px-4 py-3 rounded-lg bg-[var(--color-zinc-800)]/50 text-[var(--color-zinc-300)]"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>

                        {/* Subscribe CTA */}
                        <a
                            href="/#newsletter"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('/#newsletter');
                            }}
                            className="block w-full px-4 py-3 rounded-lg bg-[var(--color-accent)] text-black text-center font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                        >
                            Subscribe to Newsletter
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
