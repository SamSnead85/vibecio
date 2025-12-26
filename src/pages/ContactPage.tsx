import { useState } from 'react';
import { Mail, MessageSquare, Send, Check, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setFormState({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
        }, 3000);
    };

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@vibecio.com',
            description: 'For general inquiries',
        },
        {
            icon: MessageSquare,
            title: 'Press',
            value: 'press@vibecio.com',
            description: 'Media and press inquiries',
        },
        {
            icon: Phone,
            title: 'Partnerships',
            value: 'partners@vibecio.com',
            description: 'Business collaboration',
        },
    ];

    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        Contact <span className="text-[var(--color-accent)]">Us</span>
                    </h1>
                    <p className="text-xl text-[var(--color-zinc-400)]">
                        Have questions, feedback, or partnership opportunities? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_400px] gap-16">
                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-zinc-700)]/50">
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <Send className="text-[var(--color-accent)]" size={24} />
                            Send a Message
                        </h2>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                                    <Check className="text-green-400" size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                <p className="text-[var(--color-zinc-400)]">We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <select
                                        required
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="press">Press & Media</option>
                                        <option value="advertising">Advertising</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-3 rounded-xl bg-[var(--color-accent)] text-black font-semibold hover:bg-[var(--color-accent-hover)] transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send size={18} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-8">
                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-[var(--color-zinc-800)]/30 rounded-xl p-5 border border-[var(--color-zinc-700)]/50"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="text-[var(--color-accent)]" size={18} />
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1">{method.title}</h3>
                                                <p className="text-[var(--color-accent)]">{method.value}</p>
                                                <p className="text-sm text-[var(--color-zinc-500)]">{method.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Location & Hours */}
                        <div className="bg-[var(--color-zinc-800)]/30 rounded-xl p-6 border border-[var(--color-zinc-700)]/50">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="text-[var(--color-accent)]" size={18} />
                                <h3 className="font-medium">Location</h3>
                            </div>
                            <p className="text-[var(--color-zinc-400)] mb-4">
                                San Francisco, CA<br />
                                United States
                            </p>

                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="text-[var(--color-accent)]" size={18} />
                                <h3 className="font-medium">Response Time</h3>
                            </div>
                            <p className="text-[var(--color-zinc-400)]">
                                We typically respond within 24-48 hours during business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
