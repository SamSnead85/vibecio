import { Quote, Building2, TrendingUp, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Case study/testimonial data
interface CaseStudy {
    id: string;
    company: string;
    industry: string;
    logo?: string;
    quote: string;
    author: {
        name: string;
        title: string;
    };
    metrics: {
        label: string;
        value: string;
    }[];
    challenge: string;
    solution: string;
    featured?: boolean;
}

const caseStudies: CaseStudy[] = [
    {
        id: 'fortune-500-retailer',
        company: 'Fortune 500 Retailer',
        industry: 'Retail & E-commerce',
        quote: "VibeCIO's research on AI-powered inventory management directly influenced our technology roadmap. The ROI insights helped us secure board approval for a $50M transformation initiative.",
        author: {
            name: 'Michael Chen',
            title: 'Chief Information Officer'
        },
        metrics: [
            { label: 'Cost Reduction', value: '40%' },
            { label: 'Time to Value', value: '6 mo' },
            { label: 'Process Automation', value: '75%' }
        ],
        challenge: 'Legacy systems preventing real-time inventory visibility across 2,500 stores',
        solution: 'Cloud-native platform with AI demand forecasting',
        featured: true
    },
    {
        id: 'global-financial-services',
        company: 'Global Financial Services Firm',
        industry: 'Financial Services',
        quote: "The deep dives on regulatory technology helped us stay ahead of compliance requirements while modernizing our core banking platform.",
        author: {
            name: 'Sarah Williams',
            title: 'CTO, Digital Banking'
        },
        metrics: [
            { label: 'Compliance Score', value: '99.8%' },
            { label: 'Deployment Speed', value: '3x' },
            { label: 'Cost Savings', value: '$12M' }
        ],
        challenge: 'Balancing innovation speed with stringent regulatory requirements',
        solution: 'DevSecOps pipeline with automated compliance checks',
        featured: true
    },
    {
        id: 'healthcare-system',
        company: 'Regional Healthcare System',
        industry: 'Healthcare',
        quote: "VibeCIO's coverage of healthcare AI helped us build the business case for clinical decision support systems that are now improving patient outcomes.",
        author: {
            name: 'Dr. James Morrison',
            title: 'Chief Medical Information Officer'
        },
        metrics: [
            { label: 'Diagnostic Accuracy', value: '+15%' },
            { label: 'Wait Time', value: '-30%' },
            { label: 'Staff Satisfaction', value: '92%' }
        ],
        challenge: 'Physician burnout and information overload in clinical settings',
        solution: 'AI-assisted clinical documentation and decision support',
        featured: false
    },
    {
        id: 'manufacturing-leader',
        company: 'Industrial Manufacturing Leader',
        industry: 'Manufacturing',
        quote: "The practical guidance on Industrial IoT implementation saved us from costly mistakes and accelerated our smart factory initiative.",
        author: {
            name: 'Robert Johnson',
            title: 'VP of Digital Operations'
        },
        metrics: [
            { label: 'OEE Improvement', value: '+22%' },
            { label: 'Downtime Reduction', value: '65%' },
            { label: 'Energy Savings', value: '18%' }
        ],
        challenge: 'Aging equipment and lack of real-time production visibility',
        solution: 'IoT sensor network with predictive maintenance AI',
        featured: false
    }
];

export default function CaseStudiesPage() {
    const featuredStudies = caseStudies.filter(s => s.featured);
    const otherStudies = caseStudies.filter(s => !s.featured);

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                            <Star size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Success Stories</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Real Results from <br />Real Leaders
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            See how enterprise technology leaders are using VibeCIO insights
                            to drive transformation and deliver measurable business outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="py-12 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '500+', label: 'Enterprise Readers' },
                            { value: '$2B+', label: 'Decisions Influenced' },
                            { value: '94%', label: 'Would Recommend' },
                            { value: '15+', label: 'Industries Served' }
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

            {/* Featured Case Studies */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <TrendingUp className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Featured Case Studies
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">In-depth transformation stories</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {featuredStudies.map((study, index) => (
                            <div
                                key={study.id}
                                className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-[var(--color-accent)]/10 stagger-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {/* Main Content */}
                                    <div className="lg:col-span-2 p-8 lg:p-12">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-14 h-14 rounded-xl bg-[var(--color-zinc-800)] flex items-center justify-center">
                                                <Building2 size={28} className="text-[var(--color-accent)]" />
                                            </div>
                                            <div>
                                                <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)]">
                                                    {study.company}
                                                </h3>
                                                <span className="text-sm text-[var(--color-accent)]">{study.industry}</span>
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="relative mb-8">
                                            <Quote className="absolute -top-2 -left-2 text-[var(--color-accent)]/10" size={48} />
                                            <p className="text-xl text-[var(--color-zinc-300)] italic leading-relaxed pl-8">
                                                "{study.quote}"
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center text-black font-bold">
                                                {study.author.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[var(--color-zinc-100)]">{study.author.name}</div>
                                                <div className="text-sm text-[var(--color-zinc-500)]">{study.author.title}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Metrics Sidebar */}
                                    <div className="bg-[var(--color-zinc-800)]/30 p-8 lg:p-10 border-l border-[var(--color-zinc-800)]">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)] mb-6">
                                            Key Results
                                        </h4>
                                        <div className="space-y-6">
                                            {study.metrics.map((metric, i) => (
                                                <div key={i}>
                                                    <div className="font-display text-3xl font-bold text-[var(--color-zinc-100)]">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-sm text-[var(--color-zinc-500)]">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-[var(--color-zinc-700)]">
                                            <button className="text-sm font-semibold text-[var(--color-accent)] hover:underline">
                                                Read Full Case Study →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Success Stories */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <Users className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                More Success Stories
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Transformation across industries</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {otherStudies.map((study, index) => (
                            <div
                                key={study.id}
                                className="glass-premium rounded-2xl p-8 stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-zinc-800)] flex items-center justify-center">
                                        <Building2 size={24} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[var(--color-zinc-100)]">{study.company}</h3>
                                        <span className="text-sm text-emerald-400">{study.industry}</span>
                                    </div>
                                </div>

                                <p className="text-[var(--color-zinc-400)] italic mb-6">
                                    "{study.quote}"
                                </p>

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
                                        {study.author.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[var(--color-zinc-200)]">{study.author.name}</div>
                                        <div className="text-xs text-[var(--color-zinc-500)]">{study.author.title}</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-zinc-800)]">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="font-display text-xl font-bold text-emerald-400">{metric.value}</div>
                                            <div className="text-xs text-[var(--color-zinc-500)]">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Readers Trust Us */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Why Technology Leaders Trust VibeCIO
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            The principles that guide our content
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: 'Vendor-Neutral Analysis', desc: 'Independent insights without hidden agendas or pay-to-play coverage' },
                            { title: 'Practitioner Perspective', desc: 'Content reviewed by active CIOs with real-world experience' },
                            { title: 'Actionable Guidance', desc: 'Practical recommendations you can apply immediately' },
                            { title: 'Rigorous Research', desc: 'Every claim backed by data and verified sources' },
                            { title: 'Executive Focus', desc: 'Strategic insights tailored for C-suite decision makers' },
                            { title: 'Continuous Updates', desc: 'Content refreshed regularly to stay current' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 rounded-xl bg-[var(--color-zinc-900)]/50 border border-[var(--color-zinc-800)]/50"
                            >
                                <CheckCircle className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" size={20} />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-zinc-100)] mb-1">{item.title}</h4>
                                    <p className="text-sm text-[var(--color-zinc-400)]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Quote className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Share Your Story
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Has VibeCIO influenced your technology decisions? We'd love to hear
                            about your transformation journey and share it with our community.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Submit Your Story
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/subscribe"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Subscribe to Newsletter
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
