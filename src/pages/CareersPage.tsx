import { Briefcase, MapPin, Clock, ArrowRight, Building2, Users, Zap, Heart, Globe, Send } from 'lucide-react';
import type { Job } from '../types';

// Job listings data
const jobs: Job[] = [
    {
        id: 'senior-writer',
        title: 'Senior Technology Writer',
        department: 'Editorial',
        location: 'Remote (US)',
        type: 'full-time',
        remote: true,
        description: 'We\'re seeking an experienced technology writer to produce in-depth analysis of enterprise AI, cloud computing, and digital transformation for our CIO audience.',
        requirements: [
            '5+ years covering enterprise technology',
            'Deep understanding of AI/ML, cloud platforms, and enterprise software',
            'Experience writing for executive audiences',
            'Strong analytical and research skills',
            'Ability to translate complex technical concepts for business readers'
        ],
        benefits: [
            'Competitive salary + equity',
            'Fully remote with flexible hours',
            'Conference attendance budget',
            'Health, dental, and vision insurance',
            'Unlimited PTO'
        ],
        postedDate: '2026-01-15'
    },
    {
        id: 'product-designer',
        title: 'Senior Product Designer',
        department: 'Product',
        location: 'New York, NY',
        type: 'full-time',
        remote: false,
        description: 'Join our product team to shape the future of VibeCIO\'s digital experience. You\'ll lead design for our web platform, newsletter, and emerging products.',
        requirements: [
            '6+ years of product design experience',
            'Portfolio demonstrating premium digital experiences',
            'Expertise in Figma and design systems',
            'Experience with editorial or media products',
            'Strong understanding of web accessibility'
        ],
        benefits: [
            'Competitive salary + equity',
            'Hybrid work (3 days in office)',
            'Top-tier health benefits',
            'Learning & development budget',
            '401(k) matching'
        ],
        postedDate: '2026-01-10'
    },
    {
        id: 'data-analyst',
        title: 'Research Analyst',
        department: 'Research',
        location: 'Remote (Global)',
        type: 'full-time',
        remote: true,
        description: 'Help power VibeCIO\'s industry research and benchmarking. You\'ll analyze technology adoption trends, compile industry data, and support our analyst team.',
        requirements: [
            '3+ years in technology research or consulting',
            'Strong quantitative analysis skills',
            'Experience with survey design and data visualization',
            'Understanding of enterprise technology landscape',
            'Excellent written communication'
        ],
        benefits: [
            'Competitive salary',
            'Fully remote, global team',
            'Flexible schedule',
            'Professional development stipend',
            'Annual team retreats'
        ],
        postedDate: '2026-01-18'
    },
    {
        id: 'frontend-engineer',
        title: 'Senior Frontend Engineer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        type: 'full-time',
        remote: true,
        description: 'Build the next generation of our digital publishing platform using React, TypeScript, and modern web technologies. Focus on performance, accessibility, and delightful user experiences.',
        requirements: [
            '5+ years of frontend development experience',
            'Expert-level React and TypeScript skills',
            'Experience with design systems and component libraries',
            'Strong understanding of web performance optimization',
            'Passion for accessible, responsive design'
        ],
        benefits: [
            'Competitive salary + equity',
            'Remote-first culture',
            'Latest equipment provided',
            'Generous parental leave',
            'Wellness stipend'
        ],
        postedDate: '2026-01-20'
    }
];

// Company values
const values = [
    { icon: Zap, title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we publish.' },
    { icon: Users, title: 'Collaboration', desc: 'Great journalism emerges from diverse perspectives working together.' },
    { icon: Heart, title: 'Integrity', desc: 'Editorial independence and ethical journalism are non-negotiable.' },
    { icon: Globe, title: 'Impact', desc: 'We measure success by the value we create for technology leaders.' }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                            <Briefcase size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">We're Hiring</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Shape the Future of<br />Tech Journalism
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto mb-10">
                            Join VibeCIO and help enterprise technology leaders navigate the most
                            transformative era in computing history.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#positions" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20">
                                View Open Positions
                            </a>
                            <a href="/team" className="px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                Meet Our Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="py-20 border-y border-[var(--color-zinc-800)]/50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)]">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-2xl p-6 text-center stagger-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-5">
                                    <value.icon className="text-[var(--color-accent)]" size={26} />
                                </div>
                                <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-[var(--color-zinc-400)]">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-6">
                                Why Join VibeCIO?
                            </h2>
                            <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                                We believe great work happens when people are supported, challenged,
                                and empowered to do their best thinking.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Competitive compensation with equity',
                                    'Remote-first culture with flexible hours',
                                    'Comprehensive health, dental, and vision',
                                    'Unlimited PTO and sabbatical program',
                                    'Learning and development budget',
                                    'Annual team retreats and conferences'
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                        </div>
                                        <span className="text-[var(--color-zinc-300)]">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '100%', label: 'Remote Options' },
                                { value: '$5K', label: 'Learning Budget' },
                                { value: 'Unlimited', label: 'PTO Policy' },
                                { value: '401(k)', label: 'With Matching' }
                            ].map((stat, index) => (
                                <div key={index} className="glass-premium rounded-2xl p-6 text-center">
                                    <div className="font-display text-3xl font-bold text-[var(--color-accent)] mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <Building2 className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Open Positions
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">{jobs.length} opportunities available</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                        {/* Job Info */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-md border border-[var(--color-accent)]/20">
                                                    {job.department}
                                                </span>
                                                {job.remote && (
                                                    <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                                                        Remote
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="font-display text-2xl font-bold text-[var(--color-zinc-100)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                                                {job.title}
                                            </h3>

                                            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-zinc-400)] mb-4">
                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={14} />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock size={14} />
                                                    {job.type}
                                                </span>
                                            </div>

                                            <p className="text-[var(--color-zinc-400)] line-clamp-2">
                                                {job.description}
                                            </p>
                                        </div>

                                        {/* Apply Button */}
                                        <div className="flex-shrink-0">
                                            <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20 group">
                                                Apply Now
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Don't See Your Role */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Send className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Don't See Your Role?
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            We're always interested in hearing from exceptional people.
                            Send us your resume and tell us how you'd contribute to VibeCIO.
                        </p>
                        <a
                            href="mailto:careers@vibecio.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-semibold rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                        >
                            Send Your Resume
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
