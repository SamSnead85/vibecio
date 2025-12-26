import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Latest News', href: '#news' },
    { label: 'Transformation', href: '#transformation' },
    { label: 'Featured Leaders', href: '#leaders' },
    { label: 'Newsletter', href: '#newsletter' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-5 bg-transparent'
                }`}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold tracking-tight">
                        Vibe<span className="text-[var(--color-accent)]">CIO</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-[var(--color-zinc-400)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden animate-fade-in">
                    <nav className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-3 text-sm font-medium text-[var(--color-zinc-300)] hover:text-[var(--color-accent)] hover:bg-[var(--color-zinc-800)]/50 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
