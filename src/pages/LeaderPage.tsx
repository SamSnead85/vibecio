import { useParams, Link } from 'react-router-dom';
import { leaders, articles } from '../data/content';
import { ArrowLeft, Building, Award, ChevronRight, ExternalLink, Linkedin, Twitter } from 'lucide-react';

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
    const avatarColors = [
        'from-blue-500 to-indigo-600',
        'from-emerald-500 to-teal-600',
        'from-violet-500 to-purple-600',
        'from-amber-500 to-orange-600',
        'from-rose-500 to-pink-600',
        'from-cyan-500 to-blue-600',
    ];
    const colorIndex = leader.name.charCodeAt(0) % avatarColors.length;

    return (
        <div className="min-h-screen py-24">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-[var(--color-zinc-400)] mb-12">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/leaders" className="hover:text-white transition-colors">Leaders</Link>
                    <ChevronRight size={14} />
                    <span>{leader.name}</span>
                </nav>

                <div className="grid lg:grid-cols-[320px_1fr] gap-12">
                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Avatar */}
                        <div className={`w-48 h-48 rounded-2xl bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center shadow-xl`}>
                            <span className="text-5xl font-bold text-white">{initials}</span>
                        </div>

                        {/* Quick Info */}
                        <div className="space-y-4">
                            <div>
                                <h1 className="text-3xl font-display font-bold tracking-tight">{leader.name}</h1>
                                <p className="text-[var(--color-accent)] text-lg">{leader.title}</p>
                            </div>

                            <div className="flex items-center gap-2 text-[var(--color-zinc-400)]">
                                <Building size={18} />
                                <span>{leader.company}</span>
                            </div>
                        </div>

                        {/* Expertise */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-zinc-500)] mb-3">Areas of Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                {leader.expertise.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] text-[var(--color-zinc-300)]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links (placeholder) */}
                        <div className="flex items-center gap-4">
                            <button className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors">
                                <Linkedin size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-lg bg-[var(--color-zinc-800)] hover:bg-[var(--color-zinc-700)] flex items-center justify-center transition-colors">
                                <Twitter size={18} />
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="space-y-12">
                        {/* Bio */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                <Award className="text-[var(--color-accent)]" size={24} />
                                About
                            </h2>
                            <div className="bg-gradient-to-br from-[var(--color-zinc-800)]/50 to-[var(--color-zinc-900)]/50 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-zinc-700)]/50">
                                <p className="text-lg text-[var(--color-zinc-300)] leading-relaxed">
                                    {leader.bio}
                                </p>
                            </div>
                        </section>

                        {/* Key Achievements */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[var(--color-zinc-800)]/30 rounded-xl p-6 border border-[var(--color-zinc-700)]/50">
                                    <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">10+</div>
                                    <div className="text-sm text-[var(--color-zinc-400)]">Years in Leadership</div>
                                </div>
                                <div className="bg-[var(--color-zinc-800)]/30 rounded-xl p-6 border border-[var(--color-zinc-700)]/50">
                                    <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">$1B+</div>
                                    <div className="text-sm text-[var(--color-zinc-400)]">Value Generated</div>
                                </div>
                                <div className="bg-[var(--color-zinc-800)]/30 rounded-xl p-6 border border-[var(--color-zinc-700)]/50">
                                    <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">500+</div>
                                    <div className="text-sm text-[var(--color-zinc-400)]">Team Members Led</div>
                                </div>
                            </div>
                        </section>

                        {/* Related Articles */}
                        {relatedArticles.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
                                <div className="space-y-4">
                                    {relatedArticles.map(article => (
                                        <Link
                                            key={article.id}
                                            to={`/article/${article.id}`}
                                            className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-zinc-800)]/30 hover:bg-[var(--color-zinc-800)]/50 border border-[var(--color-zinc-700)]/50 transition-colors group"
                                        >
                                            <div>
                                                <h3 className="font-medium group-hover:text-[var(--color-accent)] transition-colors">{article.title}</h3>
                                                <p className="text-sm text-[var(--color-zinc-500)]">{article.readTime} min read</p>
                                            </div>
                                            <ExternalLink size={18} className="text-[var(--color-zinc-500)] group-hover:text-[var(--color-accent)]" />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </main>
                </div>

                {/* Back Link */}
                <div className="mt-16">
                    <Link
                        to="/leaders"
                        className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                    >
                        <ArrowLeft size={16} />
                        View All Leaders
                    </Link>
                </div>
            </div>
        </div>
    );
}
