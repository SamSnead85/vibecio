import { Users, Pen, BookOpen, Calendar, Mail, Twitter, Linkedin, ArrowRight, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Author/Contributor types
interface Contributor {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar?: string;
    expertise: string[];
    articlesCount: number;
    yearsContributing: number;
    featured?: boolean;
    social?: {
        twitter?: string;
        linkedin?: string;
        email?: string;
    };
}

// Mock contributor data
const contributors: Contributor[] = [
    {
        id: 'sarah-chen',
        name: 'Dr. Sarah Chen',
        role: 'Contributing Editor',
        bio: 'Former CIO at Fortune 500 technology company. Sarah brings 20+ years of enterprise technology leadership experience, specializing in AI adoption and digital transformation strategy.',
        expertise: ['AI Strategy', 'Digital Transformation', 'Enterprise Architecture'],
        articlesCount: 47,
        yearsContributing: 4,
        featured: true,
        social: {
            twitter: '@drsarahchen',
            linkedin: 'sarahchen',
            email: 'sarah@vibecio.com'
        }
    },
    {
        id: 'marcus-johnson',
        name: 'Marcus Johnson',
        role: 'Senior Contributor',
        bio: 'Cloud architect and author of "The Modern Data Stack." Marcus has helped dozens of enterprises modernize their infrastructure and optimize cloud spending.',
        expertise: ['Cloud Architecture', 'FinOps', 'DevOps'],
        articlesCount: 32,
        yearsContributing: 3,
        featured: true,
        social: {
            twitter: '@marcusjcloud',
            linkedin: 'marcusjohnson'
        }
    },
    {
        id: 'priya-sharma',
        name: 'Dr. Priya Sharma',
        role: 'Data & Analytics Editor',
        bio: 'Chief Data Scientist at a leading financial services firm. Priya covers data strategy, analytics platforms, and the practical application of machine learning in enterprise.',
        expertise: ['Data Science', 'Analytics', 'Machine Learning'],
        articlesCount: 28,
        yearsContributing: 2,
        featured: true
    },
    {
        id: 'james-morrison',
        name: 'James Morrison',
        role: 'Security Contributor',
        bio: 'Former CISO with experience at multiple Fortune 100 companies. James provides expert analysis on cybersecurity trends, zero trust architecture, and security leadership.',
        expertise: ['Cybersecurity', 'Risk Management', 'Compliance'],
        articlesCount: 21,
        yearsContributing: 2
    },
    {
        id: 'lisa-park',
        name: 'Lisa Park',
        role: 'Healthcare Tech Editor',
        bio: 'Healthcare IT executive with deep expertise in clinical informatics and healthcare interoperability. Lisa covers digital health transformation and health tech innovation.',
        expertise: ['Healthcare IT', 'FHIR', 'Digital Health'],
        articlesCount: 19,
        yearsContributing: 3
    },
    {
        id: 'david-thompson',
        name: 'David Thompson',
        role: 'Contributing Writer',
        bio: 'Technology journalist and analyst covering enterprise software, SaaS trends, and vendor landscapes. David brings a critical eye to product evaluations and market analysis.',
        expertise: ['SaaS', 'Enterprise Software', 'Market Analysis'],
        articlesCount: 15,
        yearsContributing: 1
    }
];

export default function ContributorsPage() {
    const featuredContributors = contributors.filter(c => c.featured);
    const regularContributors = contributors.filter(c => !c.featured);

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                            <Pen size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Our Writers</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Expert Contributors
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Our content is written by practitioners—CIOs, CTOs, and technology
                            leaders who've been in the trenches.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                        {[
                            { value: `${contributors.length}`, label: 'Expert Contributors' },
                            { value: `${contributors.reduce((acc, c) => acc + c.articlesCount, 0)}+`, label: 'Articles Published' },
                            { value: '50+', label: 'Years Combined Experience' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Contributors */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <Award className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Featured Contributors
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Our most prolific voices</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {featuredContributors.map((contributor, index) => (
                            <div
                                key={contributor.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-accent)]/10 stagger-item group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="p-8">
                                    {/* Avatar */}
                                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-3xl font-bold text-[var(--color-zinc-950)] mb-6">
                                        {contributor.name.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    <div className="text-center mb-6">
                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-1">
                                            {contributor.name}
                                        </h3>
                                        <span className="text-[var(--color-accent)]">{contributor.role}</span>
                                    </div>

                                    <p className="text-sm text-[var(--color-zinc-400)] text-center mb-6 line-clamp-3">
                                        {contributor.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {contributor.expertise.slice(0, 3).map((exp, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] rounded-full"
                                            >
                                                {exp}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[var(--color-zinc-800)]">
                                        <div className="text-center">
                                            <div className="font-display text-2xl font-bold text-[var(--color-zinc-100)]">
                                                {contributor.articlesCount}
                                            </div>
                                            <div className="text-xs text-[var(--color-zinc-500)]">Articles</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-display text-2xl font-bold text-[var(--color-zinc-100)]">
                                                {contributor.yearsContributing}
                                            </div>
                                            <div className="text-xs text-[var(--color-zinc-500)]">Years</div>
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    {contributor.social && (
                                        <div className="flex justify-center gap-3 mt-6">
                                            {contributor.social.twitter && (
                                                <a href={`https://twitter.com/${contributor.social.twitter}`} className="w-9 h-9 rounded-lg bg-[var(--color-zinc-800)] flex items-center justify-center hover:bg-[var(--color-accent)]/10 transition-colors">
                                                    <Twitter size={16} className="text-[var(--color-zinc-400)]" />
                                                </a>
                                            )}
                                            {contributor.social.linkedin && (
                                                <a href={`https://linkedin.com/in/${contributor.social.linkedin}`} className="w-9 h-9 rounded-lg bg-[var(--color-zinc-800)] flex items-center justify-center hover:bg-[var(--color-accent)]/10 transition-colors">
                                                    <Linkedin size={16} className="text-[var(--color-zinc-400)]" />
                                                </a>
                                            )}
                                            {contributor.social.email && (
                                                <a href={`mailto:${contributor.social.email}`} className="w-9 h-9 rounded-lg bg-[var(--color-zinc-800)] flex items-center justify-center hover:bg-[var(--color-accent)]/10 transition-colors">
                                                    <Mail size={16} className="text-[var(--color-zinc-400)]" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Contributors */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <Users className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                All Contributors
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">The voices behind VibeCIO</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularContributors.map((contributor, index) => (
                            <div
                                key={contributor.id}
                                className="glass-premium rounded-xl p-6 stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                                        {contributor.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-zinc-100)]">{contributor.name}</h3>
                                        <span className="text-sm text-emerald-400">{contributor.role}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2">
                                    {contributor.bio}
                                </p>

                                <div className="flex items-center justify-between text-xs text-[var(--color-zinc-500)]">
                                    <span className="flex items-center gap-1">
                                        <BookOpen size={12} />
                                        {contributor.articlesCount} articles
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {contributor.yearsContributing} yr{contributor.yearsContributing > 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Contributor CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <TrendingUp className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Share Your Expertise
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Are you a technology leader with insights to share? We're always looking
                            for experienced practitioners to contribute original perspectives.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:contributors@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Apply to Contribute
                                <ArrowRight size={18} />
                            </a>
                            <Link
                                to="/team"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Meet Our Editorial Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
