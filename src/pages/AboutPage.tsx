import { Link } from 'react-router-dom';
import { Target, Users, Eye, Lightbulb, ArrowRight } from 'lucide-react';

const values = [
    {
        icon: Eye,
        title: 'Clarity Over Hype',
        description: 'We cut through the noise to deliver insights that matter. No buzzwords without substance.',
    },
    {
        icon: Lightbulb,
        title: 'Thought Leadership',
        description: 'Original perspectives on AI transformation from practitioners who\'ve been in the trenches.',
    },
    {
        icon: Target,
        title: 'Actionable Insights',
        description: 'Every piece we publish aims to help you make better decisions for your organization.',
    },
    {
        icon: Users,
        title: 'Community First',
        description: 'We\'re building a community of forward-thinking technology leaders shaping the future.',
    },
];

const team = [
    {
        name: 'Editorial Board',
        role: 'Content & Strategy',
        description: 'Curating the most impactful stories in enterprise technology.',
    },
    {
        name: 'Research Team',
        role: 'Analysis & Insights',
        description: 'Deep dives into emerging trends and technologies.',
    },
    {
        name: 'Community Leaders',
        role: 'CIO Network',
        description: 'Connecting technology executives across industries.',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Hero */}
                <div className="max-w-4xl mb-24">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                        About Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        Thought Leadership for the <span className="text-[var(--color-accent)]">Age of AI</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)] leading-relaxed">
                        VibeCIO is the premier digital magazine for enterprise technology leaders navigating the AI transformation. We deliver original insights, deep-dive analysis, and strategic perspectives that help CIOs, CTOs, and CDOs lead with confidence.
                    </p>
                </div>

                {/* Mission */}
                <section className="mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-[var(--color-zinc-400)] mb-6 leading-relaxed">
                                We believe technology leadership is entering its most transformative era. AI isn't just another technology—it's reshaping how organizations think, decide, and operate.
                            </p>
                            <p className="text-lg text-[var(--color-zinc-400)] mb-6 leading-relaxed">
                                Our mission is to be the trusted voice for leaders navigating this transformation. We provide the insights, frameworks, and community connections that help technology executives lead with vision and execute with confidence.
                            </p>
                            <Link
                                to="/articles"
                                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:gap-3 transition-all"
                            >
                                Explore Our Content <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-zinc-700)]/50">
                            <div className="text-5xl font-display font-bold text-[var(--color-accent)] mb-4">2025</div>
                            <p className="text-lg text-[var(--color-zinc-300)] mb-6">
                                The year AI moved from experiment to operating system. From pilot projects to production systems. From nice-to-have to must-have.
                            </p>
                            <div className="flex items-center gap-8">
                                <div>
                                    <div className="text-3xl font-bold">82%</div>
                                    <div className="text-sm text-[var(--color-zinc-500)]">Developer AI Adoption</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold">$24B</div>
                                    <div className="text-sm text-[var(--color-zinc-500)]">AI Tools Market by 2030</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="mb-24">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Values</h2>
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

                {/* Team */}
                <section className="mb-24">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Who We Are</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="text-center p-8 rounded-2xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/50"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-orange-600 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{member.name[0]}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-[var(--color-accent)] text-sm mb-3">{member.role}</p>
                                <p className="text-sm text-[var(--color-zinc-400)]">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-orange-600/10 rounded-3xl p-12 border border-[var(--color-accent)]/20">
                        <h2 className="text-3xl font-display font-bold mb-4">Join the Conversation</h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8 max-w-2xl mx-auto">
                            Connect with fellow technology leaders, access exclusive content, and stay ahead of the transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/leaders"
                                className="px-6 py-3 rounded-xl bg-[var(--color-accent)] text-black font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                            >
                                Meet Our Leaders
                            </Link>
                            <a
                                href="/#newsletter"
                                className="px-6 py-3 rounded-xl bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] font-medium transition-colors"
                            >
                                Subscribe to Newsletter
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
