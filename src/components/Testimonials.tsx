import { useState } from 'react';
import { Quote, Star, Building, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Phase 1051-1060: Testimonials Carousel
// Social proof and reader testimonials

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "VibeCIO has become essential reading for our executive team. The depth of analysis on AI transformation is unmatched.",
        author: "Jennifer Wu",
        role: "CDO",
        company: "Pacific Bank Holdings",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
        rating: 5
    },
    {
        id: '2',
        quote: "The insights on healthcare AI compliance have directly influenced our implementation strategy. Saved us months of research.",
        author: "David Chen",
        role: "CTO",
        company: "Vertex Healthcare",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        rating: 5
    },
    {
        id: '3',
        quote: "Finally, a publication that understands enterprise technology leadership. The CIO perspectives are invaluable.",
        author: "Marcus Williams",
        role: "CIO",
        company: "Global Logistics Corp",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        rating: 5
    },
    {
        id: '4',
        quote: "The AI governance frameworks presented here have become our blueprint for responsible AI deployment.",
        author: "Dr. Aisha Patel",
        role: "CISO",
        company: "Fortress Financial",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        rating: 5
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="section bg-zinc-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

            <div className="container relative">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Trusted by Industry Leaders
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-100">
                        What CIOs Are Saying
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Testimonial */}
                    <div className="relative">
                        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
                            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />

                            <blockquote className="text-xl md:text-2xl text-zinc-200 font-medium leading-relaxed mb-8">
                                "{testimonials[activeIndex].quote}"
                            </blockquote>

                            <div className="flex items-center justify-center gap-1 mb-6">
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={testimonials[activeIndex].avatar}
                                    alt={testimonials[activeIndex].author}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                                />
                                <div className="text-left">
                                    <div className="font-semibold text-zinc-100">{testimonials[activeIndex].author}</div>
                                    <div className="text-sm text-zinc-400">{testimonials[activeIndex].role}</div>
                                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                                        <Building className="w-3 h-3" />
                                        {testimonials[activeIndex].company}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-accent hover:border-accent/50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-300 hover:text-accent hover:border-accent/50 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-accent w-8' : 'bg-zinc-700 hover:bg-zinc-600'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Thumbnail Avatars */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((t, i) => (
                            <button
                                key={t.id}
                                onClick={() => setActiveIndex(i)}
                                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${i === activeIndex ? 'border-accent scale-110' : 'border-zinc-700 opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
