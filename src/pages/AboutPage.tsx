import { Link } from 'react-router-dom';
import { Target, Eye, Lightbulb, Award, Newspaper, Shield } from 'lucide-react';

const values = [
    {
        icon: Eye,
        title: 'Editorial Independence',
        description: 'Our content is created by independent journalists and guest contributors. We have no financial stake in the technologies we cover.',
    },
    {
        icon: Lightbulb,
        title: 'Practitioner Perspectives',
        description: 'We feature insights from CIOs and technology leaders who are in the trenches, not just analysts watching from the sidelines.',
    },
    {
        icon: Target,
        title: 'Actionable Insights',
        description: 'Every piece we publish aims to help you make better decisions for your organization.',
    },
    {
        icon: Shield,
        title: 'Journalistic Integrity',
        description: 'We fact-check rigorously, disclose conflicts of interest, and maintain the highest editorial standards.',
    },
];

const editorialTeam = [
    {
        name: 'Alexandra Chen',
        role: 'Editor-in-Chief',
        description: 'Former technology editor at Fortune. 15 years covering enterprise technology and digital transformation.',
    },
    {
        name: 'Marcus Thompson',
        role: 'Senior Technology Editor',
        description: 'Previously at TechCrunch and Wired. Specializes in AI infrastructure and developer tools.',
    },
    {
        name: 'Dr. Priya Mehta',
        role: 'Research Director',
        description: 'PhD in Information Systems from MIT. Leads our industry research and analysis.',
    },
    {
        name: 'David Park',
        role: 'Features Editor',
        description: 'Award-winning journalist. Focuses on CIO profiles and executive interviews.',
    },
];

const contributorNetwork = [
    {
        title: 'Guest Contributors',
        count: '50+',
        description: 'Active CIOs, CTOs, and technology executives sharing first-hand experiences',
    },
    {
        title: 'Industry Partners',
        count: '25+',
        description: 'Research firms and analyst organizations contributing data and insights',
    },
    {
        title: 'Advisory Board',
        count: '12',
        description: 'Senior technology executives guiding our editorial direction',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Hero */}
                <div className="max-w-4xl mb-24">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                        About VibeCIO
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        Independent Journalism for <span className="text-[var(--color-accent)]">Technology Leaders</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)] leading-relaxed mb-6">
                        VibeCIO is an independent digital publication dedicated to enterprise technology leadership. Founded by a team of veteran technology journalists, we deliver original reporting, in-depth analysis, and practitioner perspectives on AI transformation and digital strategy.
                    </p>
                    <p className="text-lg text-[var(--color-zinc-500)] leading-relaxed">
                        Our mission is simple: cut through the hype and help CIOs, CTOs, and CDOs make better decisions. We accept no sponsored content, maintain strict editorial independence, and feature only perspectives from leaders with real-world experience.
                    </p>
                </div>

                {/* Editorial Standards */}
                <section className="mb-24 bg-[var(--color-zinc-800)]/30 rounded-2xl p-8 md:p-12 border border-[var(--color-zinc-700)]/50">
                    <div className="flex items-center gap-3 mb-6">
                        <Newspaper className="text-[var(--color-accent)]" size={28} />
                        <h2 className="text-2xl font-display font-bold">Our Editorial Standards</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold mb-2">Independence</h3>
                            <p className="text-[var(--color-zinc-400)] text-sm mb-4">
                                VibeCIO operates independently of any technology vendor, consulting firm, or industry body. Our editorial decisions are made solely by our journalism team.
                            </p>
                            <h3 className="font-semibold mb-2">Contributor Disclosure</h3>
                            <p className="text-[var(--color-zinc-400)] text-sm">
                                All guest contributors are clearly identified with their current roles and affiliations. We encourage executives to share their experiences—successes and failures alike.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Fact-Checking</h3>
                            <p className="text-[var(--color-zinc-400)] text-sm mb-4">
                                Every article is reviewed by our research team before publication. We verify claims, check sources, and ensure accuracy in all technical details.
                            </p>
                            <h3 className="font-semibold mb-2">Corrections</h3>
                            <p className="text-[var(--color-zinc-400)] text-sm">
                                We promptly correct errors when they're identified. Our correction policy is transparent—we note what was corrected and when.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="mb-24">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Principles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                                        <Icon className="text-[var(--color-accent)]" size={24} />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                    <p className="text-sm text-[var(--color-zinc-400)]">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Editorial Team */}
                <section className="mb-24">
                    <h2 className="text-3xl font-display font-bold mb-4 text-center">Editorial Team</h2>
                    <p className="text-center text-[var(--color-zinc-400)] mb-12 max-w-2xl mx-auto">
                        Our editorial team brings decades of experience covering enterprise technology for leading publications.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {editorialTeam.map((member, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/50"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-orange-600 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <h3 className="font-semibold mb-1">{member.name}</h3>
                                <p className="text-[var(--color-accent)] text-sm mb-2">{member.role}</p>
                                <p className="text-xs text-[var(--color-zinc-500)]">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contributor Network */}
                <section className="mb-24">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Network</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {contributorNetwork.map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/50"
                            >
                                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">{item.count}</div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--color-zinc-400)]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Awards & Recognition */}
                <section className="mb-24">
                    <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 rounded-2xl p-8 border border-[var(--color-zinc-700)]/50">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-[var(--color-accent)]" size={24} />
                            <h2 className="text-2xl font-display font-bold">Recognition</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <p className="text-[var(--color-accent)] font-medium">Best New Tech Publication</p>
                                <p className="text-sm text-[var(--color-zinc-500)]">Digital Media Awards 2025</p>
                            </div>
                            <div>
                                <p className="text-[var(--color-accent)] font-medium">Excellence in AI Coverage</p>
                                <p className="text-sm text-[var(--color-zinc-500)]">Tech Journalism Society</p>
                            </div>
                            <div>
                                <p className="text-[var(--color-accent)] font-medium">Top CIO Resource</p>
                                <p className="text-sm text-[var(--color-zinc-500)]">Enterprise Tech Today</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-orange-600/10 rounded-3xl p-12 border border-[var(--color-accent)]/20">
                        <h2 className="text-3xl font-display font-bold mb-4">Write for VibeCIO</h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8 max-w-2xl mx-auto">
                            Are you a CIO, CTO, or technology leader with insights to share? We welcome guest contributions from experienced practitioners.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="px-6 py-3 rounded-xl bg-[var(--color-accent)] text-black font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                            >
                                Submit a Pitch
                            </Link>
                            <Link
                                to="/subscribe"
                                className="px-6 py-3 rounded-xl bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] font-medium transition-colors"
                            >
                                Subscribe to Newsletter
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
