import { Video, Calendar, Clock, Users, ArrowRight, Play, Download, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

// Webinar types
interface Webinar {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    speaker: {
        name: string;
        title: string;
        company: string;
    };
    topic: string;
    registrations: number;
    status: 'upcoming' | 'live' | 'on-demand';
    thumbnail?: string;
}

// Mock webinar data
const webinars: Webinar[] = [
    {
        id: 'ai-agents-enterprise',
        title: 'AI Agents in the Enterprise: From Pilot to Production',
        description: 'Learn how leading organizations are moving beyond AI chatbots to deploy autonomous AI agents that can execute complex business processes.',
        date: '2026-02-15',
        time: '2:00 PM EST',
        duration: '60 min',
        speaker: {
            name: 'Dr. Sarah Chen',
            title: 'VP of AI Research',
            company: 'Enterprise AI Corp'
        },
        topic: 'AI & Automation',
        registrations: 847,
        status: 'upcoming'
    },
    {
        id: 'cloud-cost-optimization',
        title: 'Cloud Cost Optimization: Strategies That Actually Work',
        description: 'Discover practical approaches to reducing cloud spend by 40% without sacrificing performance or security.',
        date: '2026-02-08',
        time: '1:00 PM EST',
        duration: '45 min',
        speaker: {
            name: 'Marcus Johnson',
            title: 'Cloud Architect',
            company: 'CloudScale Solutions'
        },
        topic: 'Cloud & Infrastructure',
        registrations: 1203,
        status: 'upcoming'
    },
    {
        id: 'cybersecurity-2026',
        title: 'The CISO Playbook: Security Priorities for 2026',
        description: 'What security leaders need to focus on in the age of AI-powered threats and expanding attack surfaces.',
        date: '2026-01-25',
        time: '11:00 AM EST',
        duration: '60 min',
        speaker: {
            name: 'James Morrison',
            title: 'Former CISO',
            company: 'Fortune 500 Retailer'
        },
        topic: 'Security',
        registrations: 2150,
        status: 'on-demand'
    },
    {
        id: 'data-mesh-implementation',
        title: 'Implementing Data Mesh: Lessons from the Trenches',
        description: 'Real-world case studies on transitioning from centralized data teams to domain-oriented data ownership.',
        date: '2026-01-18',
        time: '3:00 PM EST',
        duration: '75 min',
        speaker: {
            name: 'Dr. Priya Sharma',
            title: 'Chief Data Officer',
            company: 'DataForward Inc'
        },
        topic: 'Data & Analytics',
        registrations: 1567,
        status: 'on-demand'
    }
];

export default function WebinarsPage() {
    const upcomingWebinars = webinars.filter(w => w.status === 'upcoming');
    const onDemandWebinars = webinars.filter(w => w.status === 'on-demand');
    const featuredWebinar = upcomingWebinars[0];

    const getStatusBadge = (status: Webinar['status']) => {
        switch (status) {
            case 'live':
                return <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-red-500/20 text-red-400 rounded-md border border-red-500/30 animate-pulse">Live Now</span>;
            case 'upcoming':
                return <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30">Upcoming</span>;
            case 'on-demand':
                return <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 rounded-md border border-blue-500/30">On Demand</span>;
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <Video size={16} className="text-blue-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">Webinars</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Expert Insights, Live
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Join live sessions with industry leaders and access our library of
                            on-demand content for enterprise technology professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Upcoming Webinar */}
            {featuredWebinar && (
                <section className="py-12 border-y border-[var(--color-zinc-800)]/50">
                    <div className="container">
                        <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/5 via-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-blue-500/20">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Content */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        {getStatusBadge(featuredWebinar.status)}
                                        <span className="text-sm text-[var(--color-zinc-500)]">{featuredWebinar.topic}</span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                        {featuredWebinar.title}
                                    </h2>

                                    <p className="text-lg text-[var(--color-zinc-400)] mb-6">
                                        {featuredWebinar.description}
                                    </p>

                                    {/* Speaker */}
                                    <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-[var(--color-zinc-800)]/30 border border-[var(--color-zinc-700)]/30">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                            {featuredWebinar.speaker.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-[var(--color-zinc-100)]">{featuredWebinar.speaker.name}</div>
                                            <div className="text-sm text-[var(--color-zinc-500)]">
                                                {featuredWebinar.speaker.title}, {featuredWebinar.speaker.company}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-zinc-400)] mb-8">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {new Date(featuredWebinar.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock size={16} />
                                            {featuredWebinar.time}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Users size={16} />
                                            {featuredWebinar.registrations.toLocaleString()} registered
                                        </span>
                                    </div>

                                    <button className="self-start flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                                        Register Now
                                        <ArrowRight size={18} />
                                    </button>
                                </div>

                                {/* Visual */}
                                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-500/10 to-[var(--color-zinc-900)] flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                        <Play size={40} className="text-blue-400 ml-2" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[var(--color-zinc-950)] to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Upcoming Webinars */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <Calendar className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Upcoming Webinars
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Reserve your spot in these live sessions</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {upcomingWebinars.slice(1).map((webinar, index) => (
                            <div
                                key={webinar.id}
                                className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        {getStatusBadge(webinar.status)}
                                        <span className="text-xs text-[var(--color-zinc-500)]">{webinar.topic}</span>
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-3">
                                        {webinar.title}
                                    </h3>

                                    <p className="text-sm text-[var(--color-zinc-400)] mb-4 line-clamp-2">
                                        {webinar.description}
                                    </p>

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold">
                                            {webinar.speaker.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-[var(--color-zinc-200)]">{webinar.speaker.name}</div>
                                            <div className="text-xs text-[var(--color-zinc-500)]">{webinar.speaker.company}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-[var(--color-zinc-800)]">
                                        <div className="flex items-center gap-4 text-xs text-[var(--color-zinc-500)]">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {new Date(webinar.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                {webinar.duration}
                                            </span>
                                        </div>
                                        <button className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                                            Register →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* On-Demand Library */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/20">
                            <Play className="text-blue-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                On-Demand Library
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Watch previous sessions anytime</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {onDemandWebinars.map((webinar, index) => (
                            <div
                                key={webinar.id}
                                className="glass-premium rounded-2xl overflow-hidden group cursor-pointer stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                {/* Thumbnail */}
                                <div className="relative h-40 bg-gradient-to-br from-blue-500/10 to-[var(--color-zinc-900)] flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                                        <Play size={24} className="text-blue-400 ml-1" />
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        {getStatusBadge(webinar.status)}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <span className="text-xs text-[var(--color-zinc-500)]">{webinar.topic}</span>
                                    <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] mt-1 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {webinar.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)]">
                                        <span>{webinar.speaker.name}</span>
                                        <span className="w-1 h-1 rounded-full bg-[var(--color-zinc-600)]" />
                                        <span>{webinar.duration}</span>
                                    </div>

                                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[var(--color-zinc-800)]">
                                        <button className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                            <Play size={14} />
                                            Watch Now
                                        </button>
                                        <button className="flex items-center gap-1 text-sm text-[var(--color-zinc-500)] hover:text-[var(--color-zinc-300)] transition-colors">
                                            <Download size={14} />
                                            Slides
                                        </button>
                                    </div>
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
                        <Globe className="mx-auto text-blue-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Host a Webinar With Us
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Reach enterprise technology decision-makers through sponsored
                            webinars and co-branded content.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/advertise"
                                className="flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                            >
                                Learn About Sponsorship
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/contact"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
