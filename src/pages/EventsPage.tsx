import { Calendar, MapPin, Users, Clock, ArrowRight, Video, Building, Globe, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';
import type { Event } from '../types';

// Events data
const events: Event[] = [
    {
        id: 'ai-summit-2026',
        title: 'VibeCIO AI Leaders Summit 2026',
        date: '2026-03-15',
        location: 'San Francisco, CA',
        type: 'conference',
        description: 'Our flagship annual conference bringing together 500+ CIOs, CTOs, and AI leaders for two days of insights, networking, and strategic planning.',
        registrationUrl: 'https://events.vibecio.com/summit-2026',
        featured: true
    },
    {
        id: 'agentic-ai-webinar',
        title: 'Agentic AI: From Concept to Production',
        date: '2026-02-10',
        location: 'Virtual',
        type: 'webinar',
        description: 'Expert panel discussing practical implementation strategies for deploying autonomous AI agents in enterprise environments.',
        registrationUrl: '#'
    },
    {
        id: 'cio-roundtable-nyc',
        title: 'CIO Roundtable: NYC Metro',
        date: '2026-02-20',
        location: 'New York, NY',
        type: 'roundtable',
        description: 'Exclusive dinner discussion for CIOs in the New York metro area. Limited to 20 participants for intimate peer learning.',
        registrationUrl: '#'
    },
    {
        id: 'cloud-cost-webinar',
        title: 'Mastering Cloud Cost Optimization',
        date: '2026-02-05',
        location: 'Virtual',
        type: 'webinar',
        description: 'Learn proven strategies for reducing cloud spend by 30-50% without sacrificing performance or innovation velocity.',
        registrationUrl: '#'
    },
    {
        id: 'healthcare-virtual',
        title: 'Healthcare AI Virtual Summit',
        date: '2026-04-08',
        location: 'Virtual',
        type: 'virtual',
        description: 'Full-day virtual event exploring AI applications in healthcare, featuring hospital CIOs and health tech innovators.',
        registrationUrl: '#'
    },
    {
        id: 'cio-roundtable-sf',
        title: 'CIO Roundtable: Bay Area',
        date: '2026-03-01',
        location: 'San Francisco, CA',
        type: 'roundtable',
        description: 'Executive dinner and discussion for Bay Area technology leaders. Limited availability.',
        registrationUrl: '#'
    }
];

const eventTypeConfig: Record<string, { bg: string; text: string; icon: typeof Video }> = {
    conference: { bg: 'bg-purple-500/10', text: 'text-purple-400', icon: Building },
    webinar: { bg: 'bg-blue-500/10', text: 'text-blue-400', icon: Video },
    roundtable: { bg: 'bg-amber-500/10', text: 'text-amber-400', icon: Users },
    virtual: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', icon: Globe }
};

export default function EventsPage() {
    const [filter, setFilter] = useState<string>('all');
    const featuredEvent = events.find(e => e.featured);
    const upcomingEvents = events
        .filter(e => !e.featured)
        .filter(e => filter === 'all' || e.type === filter)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                                <Calendar className="text-emerald-400" size={24} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">Events</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Connect & Learn
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-3xl">
                            Join the VibeCIO community at our conferences, webinars, and exclusive
                            CIO roundtables. Network with peers and learn from industry leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Event */}
            {featuredEvent && (
                <section className="py-12">
                    <div className="container">
                        <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-zinc-900)]/80 to-[var(--color-zinc-950)] border border-emerald-500/20">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Event Visual */}
                                <div className="relative h-72 lg:h-auto bg-gradient-to-br from-emerald-500/20 via-[var(--color-zinc-900)] to-transparent flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-8xl font-display font-bold text-emerald-400/30 mb-4">
                                            {new Date(featuredEvent.date).toLocaleDateString('en-US', { day: 'numeric' })}
                                        </div>
                                        <div className="text-2xl font-display font-semibold text-emerald-400">
                                            {new Date(featuredEvent.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest ${eventTypeConfig[featuredEvent.type].bg} ${eventTypeConfig[featuredEvent.type].text} rounded-md`}>
                                            {featuredEvent.type}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 rounded-md">
                                            Featured
                                        </span>
                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                                        {featuredEvent.title}
                                    </h2>

                                    <div className="flex flex-wrap items-center gap-4 mb-6 text-[var(--color-zinc-400)]">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {new Date(featuredEvent.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            {featuredEvent.location}
                                        </span>
                                    </div>

                                    <p className="text-[var(--color-zinc-400)] mb-8">
                                        {featuredEvent.description}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href={featuredEvent.registrationUrl}
                                            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                                        >
                                            Register Now
                                            <ArrowRight size={16} />
                                        </a>
                                        <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Filters */}
            <section className="py-8 border-y border-[var(--color-zinc-800)]/50 sticky top-16 bg-[var(--color-zinc-950)]/90 backdrop-blur-lg z-40">
                <div className="container">
                    <div className="flex items-center gap-4">
                        <Filter size={18} className="text-[var(--color-zinc-500)]" />
                        <div className="flex items-center gap-3 overflow-x-auto pb-2">
                            {['all', 'conference', 'webinar', 'roundtable', 'virtual'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilter(type)}
                                    className={`px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${filter === type
                                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                            : 'text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-800)]/50'
                                        }`}
                                >
                                    {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1) + 's'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-16">
                <div className="container">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <Clock className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Upcoming Events
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">{upcomingEvents.length} events available</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingEvents.map((event, index) => {
                            const TypeIcon = eventTypeConfig[event.type].icon;
                            return (
                                <div
                                    key={event.id}
                                    className="netflix-card glow-accent rounded-2xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    {/* Date Header */}
                                    <div className="p-5 bg-gradient-to-r from-[var(--color-zinc-800)]/50 to-transparent border-b border-[var(--color-zinc-800)]/50">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-3xl font-display font-bold text-[var(--color-zinc-100)]">
                                                    {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                                                </div>
                                                <div className="text-sm text-[var(--color-zinc-500)]">
                                                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                </div>
                                            </div>
                                            <div className={`p-3 rounded-xl ${eventTypeConfig[event.type].bg}`}>
                                                <TypeIcon className={eventTypeConfig[event.type].text} size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="p-5">
                                        <span className={`inline-block px-2.5 py-1 mb-3 text-[10px] font-bold uppercase tracking-widest ${eventTypeConfig[event.type].bg} ${eventTypeConfig[event.type].text} rounded-md`}>
                                            {event.type}
                                        </span>

                                        <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                                            {event.title}
                                        </h3>

                                        <div className="flex items-center gap-2 mb-4 text-sm text-[var(--color-zinc-400)]">
                                            <MapPin size={14} />
                                            {event.location}
                                        </div>

                                        <p className="text-sm text-[var(--color-zinc-400)] line-clamp-2 mb-5">
                                            {event.description}
                                        </p>

                                        <a
                                            href={event.registrationUrl}
                                            className="flex items-center gap-2 text-sm text-emerald-400 font-semibold group-hover:gap-3 transition-all"
                                        >
                                            Register <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Host an Event CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto glass-premium rounded-3xl p-12 text-center">
                        <Building className="mx-auto text-emerald-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Partner With Us
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8 max-w-2xl mx-auto">
                            Interested in sponsoring an event or hosting a VibeCIO roundtable at your company?
                            Let's discuss partnership opportunities.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                            >
                                Contact Us
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="/advertise"
                                className="flex items-center gap-2 px-6 py-3 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Sponsorship Info
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
