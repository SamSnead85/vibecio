import { BookOpen, Search, ChevronRight, Hash } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Glossary term type
interface GlossaryTerm {
    term: string;
    definition: string;
    category: string;
    related?: string[];
}

// Glossary data
const glossaryTerms: GlossaryTerm[] = [
    { term: 'Agentic AI', definition: 'AI systems capable of autonomous decision-making and action-taking to achieve specified goals with minimal human intervention.', category: 'AI', related: ['LLM', 'GenAI', 'Multi-Agent Systems'] },
    { term: 'AI Governance', definition: 'Frameworks, policies, and practices for ensuring AI systems are developed and deployed responsibly, ethically, and in compliance with regulations.', category: 'AI', related: ['Responsible AI', 'EU AI Act'] },
    { term: 'API Gateway', definition: 'A management tool that sits between a client and backend services, handling request routing, authentication, and rate limiting.', category: 'Architecture' },
    { term: 'Chain-of-Thought', definition: 'An AI reasoning technique where models explain their step-by-step reasoning process before providing answers, improving accuracy on complex tasks.', category: 'AI', related: ['LLM', 'o3'] },
    { term: 'CI/CD', definition: 'Continuous Integration and Continuous Deployment - practices that automate the build, test, and deployment of applications.', category: 'DevOps', related: ['DevOps', 'GitOps'] },
    { term: 'Cloud Native', definition: 'An approach to building applications designed to leverage cloud computing advantages like scalability, resilience, and containerization.', category: 'Cloud' },
    { term: 'Data Mesh', definition: 'A decentralized data architecture that distributes data ownership to domain-specific teams while maintaining governance.', category: 'Data', related: ['Data Lakehouse'] },
    { term: 'Data Lakehouse', definition: 'A data management architecture combining the flexibility of data lakes with the structure and management of data warehouses.', category: 'Data' },
    { term: 'DevOps', definition: 'A set of practices combining software development and IT operations to shorten development cycles and improve deployment frequency.', category: 'DevOps' },
    { term: 'DevSecOps', definition: 'Integration of security practices within the DevOps pipeline, making security a shared responsibility throughout development.', category: 'Security' },
    { term: 'Edge AI', definition: 'AI processing performed on local devices or edge servers rather than centralized cloud infrastructure, enabling real-time inference with lower latency.', category: 'AI', related: ['IoT'] },
    { term: 'EU AI Act', definition: 'Comprehensive European Union regulation establishing rules for AI development and deployment, with requirements varying by risk level.', category: 'AI', related: ['AI Governance', 'Responsible AI'] },
    { term: 'Feature Store', definition: 'A centralized repository for storing, sharing, and serving machine learning features, ensuring consistency between training and production.', category: 'AI', related: ['MLOps'] },
    { term: 'Fine-Tuning', definition: 'The process of further training a pre-trained AI model on domain-specific data to improve performance on particular tasks.', category: 'AI', related: ['LLM', 'RAG'] },
    { term: 'FinOps', definition: 'Financial Operations - a practice for managing cloud costs through collaboration between finance, technology, and business teams.', category: 'Cloud', related: ['Cloud Native'] },
    { term: 'GenAI', definition: 'Generative AI - systems that can create new content including text, images, code, and more based on training data.', category: 'AI', related: ['LLM', 'Agentic AI'] },
    { term: 'GitOps', definition: 'An operational framework using Git as the single source of truth for declarative infrastructure and applications.', category: 'DevOps' },
    { term: 'Guardrails', definition: 'Constraints and safety measures implemented in AI systems to prevent harmful, unethical, or off-topic outputs.', category: 'AI', related: ['AI Governance', 'Responsible AI'] },
    { term: 'Hallucination', definition: 'When AI models generate plausible-sounding but factually incorrect or fabricated information not grounded in training data.', category: 'AI', related: ['RAG', 'Grounding'] },
    { term: 'Kubernetes', definition: 'An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.', category: 'Cloud' },
    { term: 'LLM', definition: 'Large Language Model - AI models trained on massive text datasets capable of understanding and generating human-like text.', category: 'AI', related: ['GenAI'] },
    { term: 'MLOps', definition: 'Machine Learning Operations - practices for deploying and maintaining ML models in production reliably and efficiently.', category: 'AI' },
    { term: 'Microservices', definition: 'An architectural style structuring an application as a collection of loosely coupled, independently deployable services.', category: 'Architecture' },
    { term: 'Multi-Agent Systems', definition: 'AI architectures where multiple specialized AI agents collaborate and coordinate to accomplish complex tasks.', category: 'AI', related: ['Agentic AI'] },
    { term: 'Multi-Cloud', definition: 'A strategy using cloud services from multiple providers to avoid vendor lock-in and optimize performance and cost.', category: 'Cloud' },
    { term: 'Multimodal AI', definition: 'AI models capable of processing and generating multiple types of content including text, images, audio, and video.', category: 'AI', related: ['GenAI', 'LLM'] },
    { term: 'Observability', definition: 'The ability to understand internal system state from external outputs using logs, metrics, and traces.', category: 'DevOps' },
    { term: 'Platform Engineering', definition: 'The practice of designing and building internal developer platforms to improve developer experience and productivity.', category: 'DevOps' },
    { term: 'Post-Quantum Cryptography', definition: 'Cryptographic algorithms designed to remain secure against attacks from quantum computers.', category: 'Security', related: ['Zero Trust'] },
    { term: 'Prompt Engineering', definition: 'The practice of crafting effective prompts to elicit desired responses from large language models.', category: 'AI', related: ['LLM', 'GenAI'] },
    { term: 'RAG', definition: 'Retrieval-Augmented Generation - technique that enhances LLM responses by retrieving relevant information from external sources.', category: 'AI' },
    { term: 'Responsible AI', definition: 'Practices ensuring AI systems are fair, transparent, accountable, and respect human rights throughout their lifecycle.', category: 'AI', related: ['AI Governance'] },
    { term: 'Site Reliability Engineering', definition: 'A discipline applying software engineering principles to infrastructure and operations to create scalable, reliable systems.', category: 'DevOps' },
    { term: 'Synthetic Data', definition: 'Artificially generated data that mimics real-world data characteristics, used for training AI models when real data is scarce or sensitive.', category: 'AI', related: ['Privacy'] },
    { term: 'Vector Database', definition: 'Specialized databases optimized for storing and querying high-dimensional vector embeddings used in AI applications.', category: 'Data', related: ['RAG', 'LLM'] },
    { term: 'Zero Trust', definition: 'A security model requiring strict identity verification for every user and device attempting to access resources.', category: 'Security', related: ['DevSecOps'] }
];


const categories = ['All', 'AI', 'Cloud', 'Data', 'DevOps', 'Security', 'Architecture'];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GlossaryPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredTerms = useMemo(() => {
        return glossaryTerms
            .filter(term => {
                const matchesSearch = searchQuery === '' ||
                    term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    term.definition.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = activeCategory === 'All' || term.category === activeCategory;
                return matchesSearch && matchesCategory;
            })
            .sort((a, b) => a.term.localeCompare(b.term));
    }, [searchQuery, activeCategory]);

    const groupedTerms = useMemo(() => {
        const groups: Record<string, GlossaryTerm[]> = {};
        filteredTerms.forEach(term => {
            const letter = term.term[0].toUpperCase();
            if (!groups[letter]) groups[letter] = [];
            groups[letter].push(term);
        });
        return groups;
    }, [filteredTerms]);

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
                                <BookOpen className="text-[var(--color-accent)]" size={24} />
                            </div>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-[var(--color-zinc-100)]">
                            Enterprise Tech Glossary
                        </h1>

                        <p className="text-xl text-[var(--color-zinc-400)] mb-8">
                            Your guide to the terminology shaping enterprise technology in 2026.
                        </p>

                        {/* Search */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-zinc-500)]" size={20} />
                            <input
                                type="text"
                                placeholder="Search terms..."
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
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${activeCategory === cat
                                    ? 'bg-[var(--color-accent)] text-[var(--color-zinc-950)] shadow-lg shadow-[var(--color-accent)]/30'
                                    : 'text-[var(--color-zinc-400)] hover:text-[var(--color-zinc-100)] hover:bg-[var(--color-zinc-800)]/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alphabet Navigation */}
            <section className="py-4 border-b border-[var(--color-zinc-800)]/30">
                <div className="container">
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                        {alphabet.map((letter) => {
                            const hasTerms = groupedTerms[letter]?.length > 0;
                            return (
                                <a
                                    key={letter}
                                    href={hasTerms ? `#letter-${letter}` : undefined}
                                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${hasTerms
                                        ? 'text-[var(--color-zinc-300)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10'
                                        : 'text-[var(--color-zinc-700)] cursor-default'
                                        }`}
                                >
                                    {letter}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Glossary Terms */}
            <section className="py-12">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        {filteredTerms.length === 0 ? (
                            <div className="text-center py-12">
                                <BookOpen className="mx-auto text-[var(--color-zinc-600)] mb-4" size={48} />
                                <p className="text-[var(--color-zinc-400)]">No terms found matching your search.</p>
                            </div>
                        ) : (
                            Object.entries(groupedTerms).map(([letter, terms]) => (
                                <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-40">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-[var(--color-accent)]">{letter}</span>
                                        </div>
                                        <div className="h-px flex-1 bg-[var(--color-zinc-800)]" />
                                    </div>

                                    <div className="space-y-4">
                                        {terms.map((term, index) => (
                                            <div
                                                key={term.term}
                                                className="glass-premium rounded-xl p-6 stagger-item"
                                                style={{ animationDelay: `${index * 0.03}s` }}
                                            >
                                                <div className="flex items-start justify-between gap-4 mb-3">
                                                    <h3 className="font-display text-xl font-bold text-[var(--color-zinc-100)]">
                                                        {term.term}
                                                    </h3>
                                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[var(--color-zinc-800)] text-[var(--color-zinc-400)] rounded-md">
                                                        {term.category}
                                                    </span>
                                                </div>

                                                <p className="text-[var(--color-zinc-400)] leading-relaxed mb-4">
                                                    {term.definition}
                                                </p>

                                                {term.related && term.related.length > 0 && (
                                                    <div className="flex items-center gap-2 pt-4 border-t border-[var(--color-zinc-800)]">
                                                        <span className="text-xs text-[var(--color-zinc-500)]">Related:</span>
                                                        {term.related.map((rel, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => setSearchQuery(rel)}
                                                                className="text-xs text-[var(--color-accent)] hover:underline"
                                                            >
                                                                {rel}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Suggest Term CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Hash className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Missing a Term?
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            Help us expand the glossary. Suggest a term and our editorial
                            team will review and add it.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:glossary@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                Suggest a Term
                                <ChevronRight size={18} />
                            </a>
                            <Link
                                to="/topics"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                Explore Topics
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
