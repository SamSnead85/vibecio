import { Handshake, Building2, Award, TrendingUp, ArrowRight, Quote, CheckCircle, Globe, Users } from 'lucide-react';
import type { Sponsor } from '../types';

// Featured partners/sponsors
const partners: Sponsor[] = [
    {
        id: 'microsoft',
        name: 'Microsoft',
        tier: 'platinum',
        logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=100&fit=crop',
        website: 'https://microsoft.com',
        description: 'Strategic partner powering enterprise AI and cloud transformation.'
    },
    {
        id: 'aws',
        name: 'Amazon Web Services',
        tier: 'platinum',
        logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop',
        website: 'https://aws.amazon.com',
        description: 'Cloud infrastructure partner enabling scalable enterprise solutions.'
    },
    {
        id: 'google-cloud',
        name: 'Google Cloud',
        tier: 'gold',
        logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop',
        website: 'https://cloud.google.com',
        description: 'AI and data analytics partner for enterprise intelligence.'
    },
    {
        id: 'salesforce',
        name: 'Salesforce',
        tier: 'gold',
        logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop',
        website: 'https://salesforce.com',
        description: 'CRM and customer experience transformation partner.'
    },
    {
        id: 'snowflake',
        name: 'Snowflake',
        tier: 'silver',
        logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop',
        website: 'https://snowflake.com',
        description: 'Data cloud and analytics platform partner.'
    },
    {
        id: 'databricks',
        name: 'Databricks',
        tier: 'silver',
        logo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&h=100&fit=crop',
        website: 'https://databricks.com',
        description: 'Data and AI platform for enterprise lakehouse architecture.'
    }
];

// Testimonials from partners
const testimonials = [
    {
        quote: "VibeCIO has become essential reading for our enterprise customers. Their insights on AI adoption have directly influenced how we position our solutions.",
        author: "Sarah Chen",
        title: "VP of Enterprise Marketing",
        company: "Leading Cloud Provider"
    },
    {
        quote: "The quality of engagement we get from VibeCIO's audience is unmatched. These are true decision-makers with real budget authority.",
        author: "Michael Torres",
        title: "Director of Strategic Partnerships",
        company: "Enterprise Software Company"
    }
];

export default function PartnersPage() {
    const platinumPartners = partners.filter(p => p.tier === 'platinum');
    const goldPartners = partners.filter(p => p.tier === 'gold');
    const silverPartners = partners.filter(p => p.tier === 'silver');

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                            <Handshake size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Partners</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Strategic Partners
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            VibeCIO partners with leading technology companies to bring
                            actionable insights to enterprise technology leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partner Stats */}
            <section className="py-12 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '25+', label: 'Strategic Partners' },
                            { value: '5', label: 'Years of Partnership' },
                            { value: '100+', label: 'Co-Created Content' },
                            { value: '50K+', label: 'Leads Generated' }
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

            {/* Platinum Partners */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center border border-purple-500/20">
                            <Award className="text-purple-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Platinum Partners
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Our premier strategic partnerships</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {platinumPartners.map((partner, index) => (
                            <a
                                key={partner.id}
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-purple-500/20 stagger-item group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="p-8 flex flex-col md:flex-row items-center gap-6">
                                    <div className="w-32 h-32 rounded-2xl bg-[var(--color-zinc-800)] flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <Building2 size={48} className="text-purple-400" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-purple-500/10 text-purple-400 rounded-md mb-3">
                                            Platinum
                                        </span>
                                        <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-purple-400 transition-colors">
                                            {partner.name}
                                        </h3>
                                        <p className="text-[var(--color-zinc-400)]">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gold & Silver Partners */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    {/* Gold Partners */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center border border-amber-500/20">
                                <TrendingUp className="text-amber-400" size={22} />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)]">
                                Gold Partners
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {goldPartners.map((partner, index) => (
                                <a
                                    key={partner.id}
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-premium rounded-xl p-6 group hover:border-amber-500/30 transition-all stagger-item"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-[var(--color-zinc-800)] flex items-center justify-center">
                                            <Building2 size={28} className="text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[var(--color-zinc-100)] group-hover:text-amber-400 transition-colors">
                                                {partner.name}
                                            </h4>
                                            <span className="text-xs text-amber-400">Gold Partner</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[var(--color-zinc-400)]">
                                        {partner.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Silver Partners */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-400/20 to-zinc-400/5 flex items-center justify-center border border-zinc-500/20">
                                <Globe className="text-zinc-400" size={22} />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)]">
                                Silver Partners
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {silverPartners.map((partner, index) => (
                                <a
                                    key={partner.id}
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl bg-[var(--color-zinc-900)]/50 border border-[var(--color-zinc-800)] hover:border-zinc-500/30 transition-all group"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)] flex items-center justify-center">
                                            <Building2 size={20} className="text-zinc-400" />
                                        </div>
                                        <span className="font-medium text-[var(--color-zinc-300)] group-hover:text-zinc-200 transition-colors">
                                            {partner.name}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Testimonials */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            What Our Partners Say
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            Trusted by leading enterprise technology companies
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-2xl p-8 relative"
                            >
                                <Quote className="absolute top-6 right-6 text-[var(--color-accent)]/20" size={48} />
                                <p className="text-lg text-[var(--color-zinc-300)] italic mb-6 relative z-10">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-semibold text-[var(--color-zinc-100)]">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-[var(--color-zinc-500)]">
                                        {testimonial.title}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Partnership Benefits
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            What you get when you partner with VibeCIO
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: 'Thought Leadership', desc: 'Co-created content and sponsored articles reaching decision-makers' },
                            { title: 'Event Access', desc: 'Speaking opportunities at VibeCIO conferences and roundtables' },
                            { title: 'Lead Generation', desc: 'High-quality leads from gated content and webinars' },
                            { title: 'Brand Visibility', desc: 'Logo placement on homepage and premium ad positions' },
                            { title: 'Research Collaboration', desc: 'Joint research reports and benchmark studies' },
                            { title: 'Community Access', desc: 'Direct engagement with our CIO network' }
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 rounded-xl bg-[var(--color-zinc-900)]/50 border border-[var(--color-zinc-800)]/50"
                            >
                                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-zinc-100)] mb-1">{benefit.title}</h4>
                                    <p className="text-sm text-[var(--color-zinc-400)]">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Users className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Become a Partner
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Join our partner ecosystem and connect with enterprise technology
                            decision-makers who are actively evaluating solutions like yours.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:partners@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Contact Partnership Team
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="/advertise"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                View Advertising Options
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
