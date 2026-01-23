import { HelpCircle, ChevronDown, ChevronUp, Mail, Search, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import type { FAQ } from '../types';

// FAQ data
const faqs: FAQ[] = [
    {
        id: 'what-is-vibecio',
        question: 'What is VibeCIO?',
        answer: 'VibeCIO is a premium digital media platform focused on enterprise technology leadership. We deliver in-depth analysis, original research, and practitioner insights to help CIOs, CTOs, and technology leaders navigate digital transformation, AI adoption, and enterprise innovation.',
        category: 'general'
    },
    {
        id: 'subscription',
        question: 'Is VibeCIO free to read?',
        answer: 'Most of our content is available free of charge. We offer a premium subscription tier that provides early access to research reports, exclusive webinars, ad-free reading, and enhanced features. Subscribe to our newsletter to stay updated on new content.',
        category: 'subscription'
    },
    {
        id: 'newsletter',
        question: 'How often is the newsletter sent?',
        answer: 'Our flagship newsletter, "The Orchestrator," is sent every weekday morning with curated insights and analysis. We also offer a weekly digest option for those who prefer less frequent updates. You can customize your preferences in your account settings.',
        category: 'subscription'
    },
    {
        id: 'contribute',
        question: 'Can I contribute content to VibeCIO?',
        answer: 'Yes! We welcome contributions from experienced technology leaders and practitioners. We accept guest articles, case studies, and op-eds that provide genuine value to our CIO audience. Contact our editorial team at editorial@vibecio.com with your pitch.',
        category: 'content'
    },
    {
        id: 'advertise',
        question: 'How can my company advertise on VibeCIO?',
        answer: 'We offer various advertising and sponsorship opportunities including display ads, sponsored content, newsletter sponsorship, event sponsorship, and custom content partnerships. Visit our Advertise page or contact advertise@vibecio.com for our media kit.',
        category: 'business'
    },
    {
        id: 'research',
        question: 'How can I access VibeCIO research reports?',
        answer: 'Our research reports are available on the Research page. Many reports are free to download with registration. Premium subscribers get early access and additional data sets. Custom research is available for enterprise partners.',
        category: 'content'
    },
    {
        id: 'events',
        question: 'Does VibeCIO host events?',
        answer: 'Yes, we host a variety of events including our annual AI Leaders Summit, regional CIO roundtables, webinars, and virtual conferences. Check our Events page for upcoming events and registration details.',
        category: 'events'
    },
    {
        id: 'podcast',
        question: 'Where can I listen to The VibeCIO Podcast?',
        answer: 'The VibeCIO Podcast is available on Apple Podcasts, Spotify, YouTube, and all major podcast platforms. New episodes are released every Monday. You can also listen directly on our Podcast page.',
        category: 'content'
    },
    {
        id: 'corrections',
        question: 'How do I report an error or request a correction?',
        answer: 'We take accuracy seriously. If you spot an error in our content, please email corrections@vibecio.com with the article title and details of the issue. We investigate all reports and publish corrections when warranted.',
        category: 'content'
    },
    {
        id: 'privacy',
        question: 'How does VibeCIO handle my data?',
        answer: 'We respect your privacy and handle data in accordance with GDPR and CCPA regulations. We collect minimal data necessary to provide our services and never sell personal information. See our Privacy Policy for complete details.',
        category: 'privacy'
    }
];

const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'subscription', label: 'Subscription' },
    { id: 'content', label: 'Content' },
    { id: 'business', label: 'Business' },
    { id: 'events', label: 'Events' },
    { id: 'privacy', label: 'Privacy' }
];

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                                <HelpCircle className="text-[var(--color-accent)]" size={24} />
                            </div>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[var(--color-zinc-100)]">
                            Frequently Asked Questions
                        </h1>

                        <p className="text-xl text-[var(--color-zinc-400)] mb-8">
                            Everything you need to know about VibeCIO
                        </p>

                        {/* Search */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]" size={20} />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] focus:border-[var(--color-accent)] focus:outline-none text-[var(--color-zinc-100)] placeholder-[var(--color-zinc-500)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-6 border-y border-[var(--color-zinc-800)]/50 sticky top-16 bg-[var(--color-zinc-950)]/90 backdrop-blur-lg z-40">
                <div className="container">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${activeCategory === cat.id
                                        ? 'bg-[var(--color-accent)] text-[var(--color-zinc-950)] shadow-lg shadow-[var(--color-accent)]/30'
                                        : 'text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-800)]/50'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto space-y-4">
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center py-12">
                                <HelpCircle className="mx-auto text-[var(--color-zinc-600)] mb-4" size={48} />
                                <p className="text-[var(--color-zinc-400)]">No questions found matching your search.</p>
                            </div>
                        ) : (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className="glass-premium rounded-xl overflow-hidden stagger-item"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <button
                                        onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                                        className="w-full p-6 flex items-center justify-between text-left"
                                    >
                                        <h3 className="font-display text-lg font-semibold text-[var(--color-zinc-100)] pr-4">
                                            {faq.question}
                                        </h3>
                                        {expandedId === faq.id ? (
                                            <ChevronUp className="text-[var(--color-accent)] flex-shrink-0\" size={20} />
                                        ) : (
                                            <ChevronDown className="text-[var(--color-zinc-500)] flex-shrink-0" size={20} />
                                        )}
                                    </button>

                                    {expandedId === faq.id && (
                                        <div className="px-6 pb-6">
                                            <div className="pt-4 border-t border-[var(--color-zinc-800)]">
                                                <p className="text-[var(--color-zinc-400)] leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <MessageSquare className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Can't find what you're looking for? Our team is here to help.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:support@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                <Mail size={18} />
                                Contact Support
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Send a Message
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
