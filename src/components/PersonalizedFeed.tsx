import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, ThumbsUp, Bookmark } from 'lucide-react';

interface PersonalizedArticle {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    readTime: number;
    image: string;
    matchScore: number;
    reason: string;
}

const recommendations: PersonalizedArticle[] = [
    { id: 'fear-to-superpower', title: 'From Fear to Superpower: Building AI-Native Teams', subtitle: 'Leadership transformation guide', category: 'leadership', readTime: 12, image: '/images/deana-rhoades.png', matchScore: 98, reason: 'Based on your AI interests' },
    { id: 'ai-native-enterprise', title: 'The Enterprise AI-Native Imperative', subtitle: 'Why 95% of AI Pilots Fail', category: 'strategy', readTime: 12, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', matchScore: 94, reason: 'Trending this week' },
    { id: '2026-inflection', title: '2026 Is the Inflection Point', subtitle: 'Financial services transformation', category: 'strategy', readTime: 8, image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800', matchScore: 91, reason: 'You read similar content' },
    { id: 'inference-wars', title: 'The Inference Wars', subtitle: 'NVIDIA acquires Groq', category: 'technology', readTime: 8, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', matchScore: 87, reason: 'Popular among executives' }
];

export default function PersonalizedFeed() {
    const [saved, setSaved] = useState<Set<string>>(new Set());
    const [feedback, setFeedback] = useState<Record<string, string>>({});

    return (
        <section className="section bg-zinc-950 relative">
            <div className="container">
                <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    <h2 className="text-3xl font-display font-bold text-zinc-100">Personalized For You</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recommendations.map((article) => (
                        <article key={article.id} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-accent/30 transition-all">
                            <div className="h-40 overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full text-xs">{article.matchScore}% match</span>
                                    <span className="text-xs text-zinc-500">{article.readTime} min</span>
                                </div>
                                <h3 className="font-semibold text-zinc-100 mb-1 group-hover:text-accent transition-colors">{article.title}</h3>
                                <p className="text-sm text-zinc-400 mb-3">{article.subtitle}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-zinc-500">{article.reason}</span>
                                    <div className="flex gap-1">
                                        <button onClick={() => setFeedback(p => ({ ...p, [article.id]: 'up' }))} className={`p-1.5 rounded ${feedback[article.id] === 'up' ? 'text-emerald-400' : 'text-zinc-500 hover:text-emerald-400'}`}><ThumbsUp className="w-3.5 h-3.5" /></button>
                                        <button onClick={() => setSaved(p => { const n = new Set(p); n.has(article.id) ? n.delete(article.id) : n.add(article.id); return n; })} className={`p-1.5 rounded ${saved.has(article.id) ? 'text-accent' : 'text-zinc-500 hover:text-accent'}`}><Bookmark className="w-3.5 h-3.5" /></button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <Link to="/articles" className="text-accent hover:text-accent-light inline-flex items-center gap-1">View All <ChevronRight className="w-4 h-4" /></Link>
                </div>
            </div>
        </section>
    );
}
