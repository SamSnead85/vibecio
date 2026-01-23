import { Users, Briefcase, Award, Target, Globe, BookOpen, TrendingUp, Star, CheckCircle } from 'lucide-react';
import type { TeamMember } from '../types';

// Editorial Team Data
const editorialTeam: TeamMember[] = [
    {
        id: 'editor-chief',
        name: 'Alexandra Sterling',
        role: 'Editor-in-Chief',
        bio: 'Former technology editor at Forbes and The Wall Street Journal. 20+ years covering enterprise technology and digital transformation. Oversees all editorial content and strategic direction.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'managing-editor',
        name: 'Marcus Chen',
        role: 'Managing Editor',
        bio: 'Previously led technology coverage at Bloomberg and Wired. Specialist in AI, cloud computing, and enterprise software. Manages day-to-day editorial operations.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'senior-analyst',
        name: 'Dr. Sarah Okonkwo',
        role: 'Senior Technology Analyst',
        bio: 'PhD in Computer Science from MIT. Former research director at Gartner. Leads deep-dive technical analysis and industry research.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'enterprise-correspondent',
        name: 'James Morrison',
        role: 'Enterprise Correspondent',
        bio: 'Former CIO at a Fortune 500 retailer. Brings practitioner perspective to coverage of enterprise technology adoption.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'ai-editor',
        name: 'Dr. Priya Sharma',
        role: 'AI & Innovation Editor',
        bio: 'Former AI researcher at Google DeepMind. Covers generative AI, machine learning, and emerging technology trends.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'healthcare-tech',
        name: 'Michael Rodriguez',
        role: 'Healthcare Technology Editor',
        bio: 'Former healthcare CTO. Specialist in digital health, HIPAA compliance, and healthcare AI transformation.',
        linkedin: 'https://linkedin.com'
    }
];

// Advisory Board
const advisoryBoard: TeamMember[] = [
    {
        id: 'advisor-1',
        name: 'Elizabeth Warren',
        role: 'Advisory Board Chair',
        bio: 'Former Global CIO at Accenture. Board member at multiple Fortune 100 companies.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'advisor-2',
        name: 'Dr. Michael Chang',
        role: 'Academic Advisor',
        bio: 'Professor of Information Systems at Stanford Graduate School of Business.',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 'advisor-3',
        name: 'Rachel Thompson',
        role: 'Industry Advisor',
        bio: 'Venture Partner at Andreessen Horowitz, focusing on enterprise software investments.',
        linkedin: 'https://linkedin.com'
    }
];

export default function EditorialTeamPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                                <Users className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Our Team</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Editorial Excellence
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-3xl">
                            VibeCIO's editorial team combines decades of experience covering enterprise technology
                            with practitioner expertise from leading CIOs and technology executives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 border-y border-[var(--color-zinc-800)]/50">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-premium rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5">
                                <Target className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-3">Our Mission</h3>
                            <p className="text-[var(--color-zinc-400)]">
                                To deliver independent, practitioner-focused insights that help enterprise technology
                                leaders navigate digital transformation with confidence.
                            </p>
                        </div>

                        <div className="glass-premium rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5">
                                <BookOpen className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-3">Our Standards</h3>
                            <p className="text-[var(--color-zinc-400)]">
                                Rigorous fact-checking, vendor-neutral analysis, and a commitment to actionable
                                intelligence over hype define our editorial approach.
                            </p>
                        </div>

                        <div className="glass-premium rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5">
                                <Award className="text-[var(--color-accent)]" size={24} />
                            </div>
                            <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-3">Our Commitment</h3>
                            <p className="text-[var(--color-zinc-400)]">
                                We stand behind every piece of analysis. Our credibility is built on accuracy,
                                transparency, and a dedication to serving our readers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Team */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <Briefcase className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Editorial Leadership
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">The team behind VibeCIO's analysis</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {editorialTeam.map((member, index) => (
                            <div
                                key={member.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="p-6">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--color-accent)]/20">
                                        <span className="text-2xl font-bold text-[var(--color-zinc-950)]">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-semibold text-[var(--color-accent)] mb-4">
                                        {member.role}
                                    </p>

                                    {/* Bio */}
                                    <p className="text-sm text-[var(--color-zinc-400)] leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <Star className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Advisory Board
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Industry leaders guiding our direction</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {advisoryBoard.map((advisor, index) => (
                            <div
                                key={advisor.id}
                                className="glass-premium rounded-2xl p-6 stagger-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-zinc-700)] flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-bold text-[var(--color-accent)]">
                                            {advisor.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] mb-1">
                                            {advisor.name}
                                        </h3>
                                        <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">
                                            {advisor.role}
                                        </p>
                                        <p className="text-sm text-[var(--color-zinc-400)]">
                                            {advisor.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Editorial Standards */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                Our Editorial Standards
                            </h2>
                            <p className="text-lg text-[var(--color-zinc-400)]">
                                Every piece of content meets rigorous quality standards
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Vendor Neutrality', desc: 'We maintain strict independence from technology vendors and sponsors.' },
                                { title: 'Fact-Checked Analysis', desc: 'Every statistic and claim is verified through multiple sources.' },
                                { title: 'Practitioner Perspective', desc: 'Content is reviewed by active CIOs and technology executives.' },
                                { title: 'Actionable Insights', desc: 'We focus on practical guidance over theoretical frameworks.' },
                                { title: 'Transparent Methodology', desc: 'Our research methods are documented and repeatable.' },
                                { title: 'Regular Updates', desc: 'Content is reviewed quarterly for accuracy and relevance.' }
                            ].map((standard, index) => (
                                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-[var(--color-zinc-900)]/50 border border-[var(--color-zinc-800)]/50">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-zinc-100)] mb-1">{standard.title}</h4>
                                        <p className="text-sm text-[var(--color-zinc-400)]">{standard.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="py-16 border-t border-[var(--color-zinc-800)]/50">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '50+', label: 'Years Combined Experience' },
                            { value: '1M+', label: 'Monthly Readers' },
                            { value: '200+', label: 'Original Articles' },
                            { value: '15+', label: 'Industry Awards' }
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

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Globe className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Join Our Team
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            We're always looking for exceptional writers, analysts, and technologists
                            to join our editorial team.
                        </p>
                        <a
                            href="/careers"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                        >
                            <TrendingUp size={18} />
                            View Open Positions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
