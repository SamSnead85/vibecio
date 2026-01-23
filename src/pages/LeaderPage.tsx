import { useParams, Link } from 'react-router-dom';
import { leaders, articles } from '../data/content';
import { ArrowLeft, Building, Award, ChevronRight, ExternalLink, Linkedin, Twitter, Briefcase, Users, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

export default function LeaderPage() {
    const { id } = useParams<{ id: string }>();
    const leader = leaders.find(l => l.id === id);

    if (!leader) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Leader Not Found</h1>
                    <Link to="/leaders" className="text-[var(--color-accent)] hover:underline">
                        ← View All Leaders
                    </Link>
                </div>
            </div>
        );
    }

    // Find articles that mention this leader or their company
    const relatedArticles = articles.filter(article =>
        article.author.toLowerCase().includes(leader.name.split(' ')[0].toLowerCase()) ||
        article.content.some(p => p.toLowerCase().includes(leader.company.toLowerCase()))
    ).slice(0, 3);

    // Generate avatar from name initials
    const initials = leader.name.split(' ').map(n => n[0]).join('');
    const avatarGradients = [
        'from-blue-600 via-indigo-600 to-violet-600',
        'from-emerald-500 via-teal-500 to-cyan-500',
        'from-violet-600 via-purple-600 to-fuchsia-600',
        'from-amber-500 via-orange-500 to-red-500',
        'from-rose-500 via-pink-500 to-fuchsia-500',
        'from-cyan-500 via-blue-500 to-indigo-500',
    ];
    const colorIndex = leader.name.charCodeAt(0) % avatarGradients.length;

    return (
        <div className="min-h-screen bg-[var(--color-zinc-950)]">
            <SEO
                title={`${leader.name} - ${leader.title} at ${leader.company} | VibeCIO`}
                description={leader.bio.substring(0, 160)}
            />

            {/* Hero Section */}
            <header className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-zinc-900)] via-[var(--color-zinc-950)] to-[var(--color-zinc-900)]" />
                <div className="absolute inset-0 opacity-30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${avatarGradients[colorIndex]} opacity-20 blur-3xl`} />
                </div>

                <div className="relative z-10 container max-w-5xl mx-auto px-6 pt-24 pb-20">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)] mb-12">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/leaders" className="hover:text-white transition-colors">Leaders</Link>
                        <ChevronRight size={14} />
                        <span className="text-[var(--color-zinc-200)]">{leader.name}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row items-start gap-10">
                        {/* Large Avatar */}
                        <div className="flex-shrink-0">
                            <div className={`w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br ${avatarGradients[colorIndex]} flex items-center justify-center shadow-2xl shadow-black/50 ring-4 ring-white/10`}>
                                <span className="text-6xl md:text-7xl font-bold text-white/90 font-display">{initials}</span>
                            </div>
                        </div>

                        {/* Leader Info */}
                        <div className="flex-1 pt-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 text-white">
                                {leader.name}
                            </h1>
                            <p className="text-2xl md:text-3xl text-[var(--color-accent)] font-medium mb-4">
                                {leader.title}
                            </p>
                            <div className="flex items-center gap-3 text-[var(--color-zinc-400)] text-lg mb-8">
                                <Building size={20} />
                                <span>{leader.company}</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-4">
                                <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm">
                                    <Linkedin size={20} />
                                </button>
                                <button className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm">
                                    <Twitter size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Expertise Tags Section */}
            <section className="bg-gradient-to-r from-[var(--color-zinc-900)] via-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)] border-y border-[var(--color-zinc-800)] py-8">
                <div className="container max-w-5xl mx-auto px-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-zinc-500)]">Expertise</span>
                        <span className="w-px h-6 bg-[var(--color-zinc-700)]" />
                        {leader.expertise.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 text-sm rounded-full bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] text-[var(--color-zinc-300)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="container max-w-5xl mx-auto px-6 py-20">
                <div className="flex items-center gap-4 mb-8">
                    <Award className="text-[var(--color-accent)]" size={28} />
                    <h2 className="text-2xl font-display font-bold">About</h2>
                </div>
                <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/40 to-[var(--color-zinc-900)]/40 backdrop-blur-sm rounded-3xl p-10 border border-[var(--color-zinc-700)]/50">
                    <p className="text-xl text-[var(--color-zinc-300)] leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[var(--color-accent)]">
                        {leader.bio}
                    </p>
                </div>
            </section>

            {/* Key Achievements */}
            <section className="container max-w-5xl mx-auto px-6 pb-20">
                <h2 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
                    <span className="w-12 h-px bg-[var(--color-accent)]" />
                    Leadership Impact
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="group relative bg-gradient-to-br from-[var(--color-zinc-800)]/30 to-[var(--color-zinc-900)]/30 rounded-2xl p-8 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 transition-all overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
                        <Briefcase className="text-[var(--color-accent)] mb-4" size={28} />
                        <div className="text-4xl font-bold text-white mb-2">10+</div>
                        <div className="text-[var(--color-zinc-400)]">Years in Leadership</div>
                    </div>
                    <div className="group relative bg-gradient-to-br from-[var(--color-zinc-800)]/30 to-[var(--color-zinc-900)]/30 rounded-2xl p-8 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 transition-all overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full" />
                        <TrendingUp className="text-[var(--color-accent)] mb-4" size={28} />
                        <div className="text-4xl font-bold text-white mb-2">$1B+</div>
                        <div className="text-[var(--color-zinc-400)]">Value Generated</div>
                    </div>
                    <div className="group relative bg-gradient-to-br from-[var(--color-zinc-800)]/30 to-[var(--color-zinc-900)]/30 rounded-2xl p-8 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 transition-all overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-transparent rounded-bl-full" />
                        <Users className="text-[var(--color-accent)] mb-4" size={28} />
                        <div className="text-4xl font-bold text-white mb-2">500+</div>
                        <div className="text-[var(--color-zinc-400)]">Team Members Led</div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="bg-[var(--color-zinc-900)]/50 border-t border-[var(--color-zinc-800)]">
                    <div className="container max-w-5xl mx-auto px-6 py-20">
                        <h2 className="text-2xl font-display font-bold mb-10 flex items-center gap-4">
                            <span className="w-12 h-px bg-[var(--color-accent)]" />
                            Related Articles
                        </h2>
                        <div className="space-y-4">
                            {relatedArticles.map(article => (
                                <Link
                                    key={article.id}
                                    to={`/article/${article.id}`}
                                    className="flex items-center justify-between p-6 rounded-2xl bg-[var(--color-zinc-800)]/30 hover:bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)]/50 hover:border-[var(--color-accent)]/30 transition-all group"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-[var(--color-zinc-200)] group-hover:text-white transition-colors mb-1">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-zinc-500)]">{article.readTime} min read</p>
                                    </div>
                                    <ExternalLink size={20} className="text-[var(--color-zinc-500)] group-hover:text-[var(--color-accent)] transition-colors ml-4 flex-shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Back Navigation */}
            <div className="container max-w-5xl mx-auto px-6 py-12 border-t border-[var(--color-zinc-800)]">
                <Link
                    to="/leaders"
                    className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    View All Leaders
                </Link>
            </div>
        </div>
    );
}
