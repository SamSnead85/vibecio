import { Calendar, MapPin, Clock, Users, Video, ArrowRight, Globe, Star, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

// Upcoming events data
const featuredEvent = {
    id: 'cio-summit-2026',
    title: 'VibeCIO Enterprise AI Summit 2026',
    description: 'The premier gathering for enterprise IT leaders navigating the AI transformation. Two days of keynotes, workshops, and networking with 500+ CIOs.',
    date: 'March 18-19, 2026',
    location: 'San Francisco, CA',
    type: 'In-Person Conference',
    attendees: 500,
    speakers: 45,
    tracks: 8,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop'
};

const upcomingEvents = [
    {
        id: 'agentic-ai-masterclass',
        title: 'Agentic AI Masterclass: From Concept to Production',
        description: 'Hands-on workshop on building and deploying autonomous AI agents in enterprise environments.',
        date: 'February 8, 2026',
        time: '10:00 AM - 2:00 PM EST',
        type: 'Virtual Workshop',
        isVirtual: true,
        attendees: 250,
        category: 'Workshop'
    },
    {
        id: 'cio-roundtable-healthcare',
        title: 'Healthcare CIO Roundtable: AI Compliance & Innovation',
        description: 'Invitation-only discussion on balancing HIPAA requirements with AI innovation.',
        date: 'February 15, 2026',
        time: '2:00 PM - 4:00 PM EST',
        type: 'Virtual Roundtable',
        isVirtual: true,
        attendees: 50,
        category: 'Roundtable'
    },
    {
        id: 'financial-services-ai-forum',
        title: 'Financial Services AI Forum',
        description: 'Industry-specific conference for AI leaders in banking, insurance, and wealth management.',
        date: 'February 22-23, 2026',
        location: 'New York, NY',
        type: 'In-Person Conference',
        isVirtual: false,
        attendees: 300,
        category: 'Conference'
    },
    {
        id: 'ai-governance-bootcamp',
        title: 'AI Governance Bootcamp',
        description: 'Two-day intensive on building operational AI governance frameworks.',
        date: 'March 5-6, 2026',
        time: '9:00 AM - 5:00 PM EST',
        type: 'Virtual Bootcamp',
        isVirtual: true,
        attendees: 150,
        category: 'Bootcamp'
    },
    {
        id: 'cto-networking-dinner',
        title: 'CTO Networking Dinner: Silicon Valley',
        description: 'Exclusive dinner event for CTOs and technology leaders in the Bay Area.',
        date: 'March 12, 2026',
        location: 'Palo Alto, CA',
        type: 'In-Person Dinner',
        isVirtual: false,
        attendees: 40,
        category: 'Networking'
    }
];

const pastHighlights = [
    { title: 'AI Transformation Summit 2025', attendees: 450, rating: 4.9 },
    { title: 'Enterprise LLM Workshop Series', attendees: 1200, rating: 4.8 },
    { title: 'CIO Holiday Gala 2025', attendees: 200, rating: 4.9 },
    { title: 'Healthcare AI Symposium', attendees: 320, rating: 4.7 }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-rose-500/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-rose-500/10 border border-rose-500/20 rounded-full">
                            <Calendar size={16} className="text-rose-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-rose-400">Events</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Events & Conferences
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Connect with enterprise technology leaders. Flagship summits,
                            executive roundtables, and hands-on workshops.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '25+', label: 'Annual Events' },
                            { value: '5,000+', label: 'Attendees Yearly' },
                            { value: '4.8', label: 'Avg. Rating' },
                            { value: '92%', label: 'Return Rate' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-rose-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Event */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 flex items-center justify-center border border-rose-500/20">
                            <Star className="text-rose-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Featured Event
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Our flagship annual conference</p>
                        </div>
                    </div>

                    <div className="netflix-card glow-accent rounded-3xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50">
                        <div className="grid lg:grid-cols-2">
                            <div className="h-64 lg:h-auto overflow-hidden relative">
                                <img
                                    src={featuredEvent.image}
                                    alt={featuredEvent.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-zinc-900)] lg:block hidden" />
                            </div>
                            <div className="p-8 lg:p-12">
                                <span className="inline-block px-3 py-1 bg-rose-500/10 text-rose-400 text-sm font-medium rounded-full mb-4">
                                    {featuredEvent.type}
                                </span>
                                <h3 className="font-display text-3xl font-bold text-[var(--color-zinc-100)] mb-4">
                                    {featuredEvent.title}
                                </h3>
                                <p className="text-[var(--color-zinc-400)] mb-6">
                                    {featuredEvent.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-[var(--color-zinc-300)]">
                                        <Calendar size={18} className="text-rose-400" />
                                        <span>{featuredEvent.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[var(--color-zinc-300)]">
                                        <MapPin size={18} className="text-rose-400" />
                                        <span>{featuredEvent.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[var(--color-zinc-300)]">
                                        <Users size={18} className="text-rose-400" />
                                        <span>{featuredEvent.attendees}+ Attendees</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[var(--color-zinc-300)]">
                                        <Globe size={18} className="text-rose-400" />
                                        <span>{featuredEvent.speakers} Speakers</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 py-3 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                                        <Ticket size={18} />
                                        Register Now
                                    </button>
                                    <button className="px-6 py-3 rounded-xl bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-semibold hover:bg-[var(--color-zinc-700)] transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/20">
                            <Calendar className="text-blue-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Upcoming Events
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Workshops, roundtables, and conferences</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {upcomingEvents.map((event, index) => (
                            <div
                                key={event.id}
                                className="glass-premium rounded-xl p-6 stagger-item group cursor-pointer"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div className="flex items-start gap-6 flex-1">
                                        <div className="w-16 h-16 rounded-xl bg-[var(--color-zinc-800)] flex flex-col items-center justify-center">
                                            <span className="text-xs text-[var(--color-zinc-500)] uppercase">
                                                {event.date.split(' ')[0]}
                                            </span>
                                            <span className="text-lg font-bold text-[var(--color-zinc-100)]">
                                                {event.date.split(' ')[1]?.replace(',', '')}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)] group-hover:text-rose-400 transition-colors">
                                                    {event.title}
                                                </h3>
                                                <span className={`px-2 py-0.5 text-xs font-medium rounded ${event.isVirtual
                                                        ? 'bg-blue-500/10 text-blue-400'
                                                        : 'bg-emerald-500/10 text-emerald-400'
                                                    }`}>
                                                    {event.category}
                                                </span>
                                            </div>
                                            <p className="text-sm text-[var(--color-zinc-400)] mb-3">
                                                {event.description}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-zinc-500)]">
                                                {event.isVirtual ? (
                                                    <>
                                                        <span className="flex items-center gap-1">
                                                            <Video size={14} />
                                                            Virtual
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={14} />
                                                            {event.time}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {event.location}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <Users size={14} />
                                                    {event.attendees} spots
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 rounded-xl bg-rose-500/10 text-rose-400 font-semibold hover:bg-rose-500/20 transition-colors whitespace-nowrap">
                                        Register
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Event Highlights */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center border border-amber-500/20">
                            <Star className="text-amber-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Past Highlights
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Recent event recordings available</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {pastHighlights.map((event, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-xl p-6 text-center stagger-item group cursor-pointer"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] mb-4 group-hover:text-amber-400 transition-colors">
                                    {event.title}
                                </h3>
                                <div className="flex items-center justify-center gap-4 text-sm text-[var(--color-zinc-500)]">
                                    <span className="flex items-center gap-1">
                                        <Users size={14} />
                                        {event.attendees}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star size={14} className="text-amber-400" />
                                        {event.rating}
                                    </span>
                                </div>
                                <button className="mt-4 text-sm text-amber-400 hover:underline">
                                    Watch Recording →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Calendar className="mx-auto text-rose-400 mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Never Miss an Event
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Subscribe to our events calendar and get early access to registration,
                            exclusive discounts, and networking opportunities.
                        </p>
                        <Link
                            to="/subscribe"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-600 transition-colors"
                        >
                            Subscribe to Events
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
