import { Newspaper, Download, Quote, Camera, Mail, ArrowRight, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Press release types
interface PressRelease {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
}

// Media mention types
interface MediaMention {
    outlet: string;
    title: string;
    date: string;
    url?: string;
}

// Sample press releases
const pressReleases: PressRelease[] = [
    { id: '1', title: 'VibeCIO Releases 2026 CIO Priority Survey', date: '2026-01-15', excerpt: 'Annual survey reveals AI governance and cloud cost optimization as top priorities for enterprise technology leaders.', category: 'Research' },
    { id: '2', title: 'VibeCIO Launches Benchmark Data Platform', date: '2026-01-08', excerpt: 'New platform provides enterprise IT leaders with customizable benchmark data for strategic planning.', category: 'Product' },
    { id: '3', title: 'VibeCIO Expands Editorial Team', date: '2025-12-15', excerpt: 'Three new contributing editors join to cover AI, cybersecurity, and healthcare technology.', category: 'Company' },
    { id: '4', title: 'VibeCIO Podcast Reaches 1 Million Downloads', date: '2025-11-20', excerpt: 'Weekly podcast featuring enterprise CIOs celebrates major milestone.', category: 'Milestone' }
];

// Sample media mentions
const mediaMentions: MediaMention[] = [
    { outlet: 'TechCrunch', title: 'The Rise of Enterprise Tech Media', date: '2026-01-10' },
    { outlet: 'Forbes', title: 'Publications That CIOs Actually Read', date: '2025-12-22' },
    { outlet: 'Wall Street Journal', title: 'How IT Leaders Stay Informed', date: '2025-11-15' },
    { outlet: 'Gartner Blog', title: 'Best Resources for IT Leadership', date: '2025-10-30' }
];

// Brand assets
const brandAssets = [
    { name: 'Logo (Dark)', format: 'SVG/PNG', size: '2.4 MB' },
    { name: 'Logo (Light)', format: 'SVG/PNG', size: '2.4 MB' },
    { name: 'Brand Guidelines', format: 'PDF', size: '8.1 MB' },
    { name: 'Executive Photos', format: 'ZIP', size: '15.2 MB' }
];

export default function PressPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-950)] via-[var(--color-zinc-900)] to-[var(--color-zinc-950)]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/[0.03] rounded-full blur-3xl" />

                <div className="container relative z-10 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
                            <Newspaper size={16} className="text-[var(--color-accent)]" />
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">Press & Media</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-zinc-100)] to-[var(--color-zinc-400)] bg-clip-text text-transparent">
                            Press Room
                        </h1>

                        <p className="text-xl md:text-2xl text-[var(--color-zinc-400)] leading-relaxed max-w-2xl mx-auto">
                            Press releases, media resources, and brand assets for
                            journalists and media partners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-10 border-y border-[var(--color-zinc-800)]/50 bg-[var(--color-zinc-900)]/30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '50K+', label: 'Weekly Readers' },
                            { value: '500+', label: 'Articles Published' },
                            { value: '100+', label: 'CIO Contributors' },
                            { value: '2020', label: 'Founded' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[var(--color-zinc-500)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 flex items-center justify-center border border-[var(--color-accent)]/20">
                            <Newspaper className="text-[var(--color-accent)]" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Press Releases
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Latest announcements from VibeCIO</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {pressReleases.map((release, index) => (
                            <div
                                key={release.id}
                                className="netflix-card glow-accent rounded-xl overflow-hidden bg-[var(--color-zinc-900)]/60 backdrop-blur-sm border border-[var(--color-zinc-800)]/50 stagger-item group cursor-pointer"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                                        <Calendar size={16} className="text-[var(--color-zinc-500)]" />
                                        <span className="text-sm text-[var(--color-zinc-500)]">
                                            {new Date(release.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                                            {release.category}
                                        </span>
                                        <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] mt-1 group-hover:text-[var(--color-accent)] transition-colors">
                                            {release.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-400)] mt-2 line-clamp-2">
                                            {release.excerpt}
                                        </p>
                                    </div>

                                    <ArrowRight size={20} className="text-[var(--color-zinc-600)] group-hover:text-[var(--color-accent)] transition-colors flex-shrink-0" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Mentions */}
            <section className="py-20 bg-gradient-to-b from-transparent via-[var(--color-zinc-900)]/30 to-transparent">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
                            <Quote className="text-emerald-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                In the News
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Recent media coverage</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {mediaMentions.map((mention, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-xl p-6 stagger-item group"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Building2 size={18} className="text-emerald-400" />
                                    <span className="font-semibold text-emerald-400">{mention.outlet}</span>
                                </div>
                                <h3 className="font-display text-lg font-bold text-[var(--color-zinc-100)] group-hover:text-[var(--color-accent)] transition-colors">
                                    {mention.title}
                                </h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm text-[var(--color-zinc-500)]">
                                        {new Date(mention.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                    {mention.url && (
                                        <a href={mention.url} className="flex items-center gap-1 text-sm text-[var(--color-accent)]">
                                            Read <ExternalLink size={12} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Assets */}
            <section className="py-20">
                <div className="container">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/20">
                            <Camera className="text-blue-400" size={26} />
                        </div>
                        <div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)]">
                                Brand Assets
                            </h2>
                            <p className="text-[var(--color-zinc-500)]">Logos, guidelines, and media kit</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {brandAssets.map((asset, index) => (
                            <div
                                key={index}
                                className="glass-premium rounded-xl p-6 text-center group cursor-pointer stagger-item"
                                style={{ animationDelay: `${index * 0.08}s` }}
                            >
                                <div className="w-16 h-16 mx-auto rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4 group-hover:scale-110 transition-transform">
                                    <Download className="text-blue-400" size={28} />
                                </div>
                                <h4 className="font-semibold text-[var(--color-zinc-100)] mb-1">{asset.name}</h4>
                                <p className="text-xs text-[var(--color-zinc-500)]">{asset.format} • {asset.size}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center glass-premium rounded-3xl p-12">
                        <Mail className="mx-auto text-[var(--color-accent)] mb-6" size={48} />
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-zinc-100)] mb-4">
                            Media Inquiries
                        </h2>
                        <p className="text-lg text-[var(--color-zinc-400)] mb-8">
                            For press inquiries, interview requests, or additional information,
                            please contact our media relations team.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:press@vibecio.com"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-zinc-950)] font-semibold rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors shadow-lg shadow-[var(--color-accent)]/20"
                            >
                                <Mail size={18} />
                                Contact Press Team
                            </a>
                            <Link
                                to="/about"
                                className="flex items-center gap-2 px-8 py-4 bg-[var(--color-zinc-800)] text-[var(--color-zinc-100)] font-medium rounded-xl hover:bg-[var(--color-zinc-700)] transition-colors border border-[var(--color-zinc-700)]"
                            >
                                About VibeCIO
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
