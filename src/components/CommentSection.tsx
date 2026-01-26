import { useState } from 'react';

import { MessageSquare, Share2, Reply, ChevronDown, ChevronUp, Award, Verified, MoreHorizontal, ThumbsUp, Send } from 'lucide-react';

// Phase 1051-1060: Social & Engagement Features
// Comments, discussions, and community engagement system

interface Comment {
    id: string;
    author: { name: string; avatar: string; title: string; verified: boolean };
    content: string;
    timestamp: string;
    likes: number;
    isLiked: boolean;
    replies: Comment[];
    isPinned?: boolean;
}

const mockComments: Comment[] = [
    {
        id: '1',
        author: { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', title: 'CTO, TechVentures', verified: true },
        content: 'Excellent breakdown of the AI orchestrator concept. We\'ve been transitioning our team to this model and seeing exactly the productivity gains mentioned. The key insight about systems thinking over syntax knowledge really resonates.',
        timestamp: '2 hours ago',
        likes: 47,
        isLiked: false,
        isPinned: true,
        replies: [
            { id: '1-1', author: { name: 'Sarah K.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', title: 'VP Engineering', verified: false }, content: 'Could you share more about your transition process? We\'re starting a similar journey.', timestamp: '1 hour ago', likes: 12, isLiked: true, replies: [] }
        ]
    },
    {
        id: '2',
        author: { name: 'Elena Rodriguez', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', title: 'Global CIO, Nexus Dynamics', verified: true },
        content: 'This aligns perfectly with what we\'re seeing in enterprise AI adoption. The 70-95% failure rate of AI pilots is shocking but accurate - the foundational work is often skipped.',
        timestamp: '4 hours ago',
        likes: 89,
        isLiked: false,
        replies: []
    },
    {
        id: '3',
        author: { name: 'David Park', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', title: 'AI Lead, FinanceCore', verified: false },
        content: 'The section on security implications for AI agents is particularly relevant. We\'re developing similar frameworks for agent identity management.',
        timestamp: '6 hours ago',
        likes: 34,
        isLiked: false,
        replies: []
    }
];

interface CommentSectionProps {
    articleId: string;
    commentCount: number;
}

export default function CommentSection({ commentCount }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>(mockComments);
    const [newComment, setNewComment] = useState('');
    const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set());
    const [sortBy, setSortBy] = useState<'popular' | 'newest'>('popular');
    const [replyingTo, setReplyingTo] = useState<string | null>(null);

    const toggleLike = (commentId: string) => {
        setComments(prev => prev.map(c => {
            if (c.id === commentId) {
                return { ...c, isLiked: !c.isLiked, likes: c.isLiked ? c.likes - 1 : c.likes + 1 };
            }
            return { ...c, replies: c.replies.map(r => r.id === commentId ? { ...r, isLiked: !r.isLiked, likes: r.isLiked ? r.likes - 1 : r.likes + 1 } : r) };
        }));
    };

    const toggleReplies = (commentId: string) => {
        setExpandedReplies(prev => {
            const next = new Set(prev);
            next.has(commentId) ? next.delete(commentId) : next.add(commentId);
            return next;
        });
    };

    const handleSubmitComment = () => {
        if (!newComment.trim()) return;
        const comment: Comment = {
            id: Date.now().toString(),
            author: { name: 'You', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', title: 'VibeCIO Member', verified: false },
            content: newComment,
            timestamp: 'Just now',
            likes: 0,
            isLiked: false,
            replies: []
        };
        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <div className="mt-12 pt-12 border-t border-zinc-800">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold text-zinc-100">Discussion ({commentCount})</h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-500">Sort by:</span>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'popular' | 'newest')} className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-zinc-300 focus:outline-none focus:border-accent">
                        <option value="popular">Most Popular</option>
                        <option value="newest">Newest First</option>
                    </select>
                </div>
            </div>

            {/* New Comment Input */}
            <div className="glass-card rounded-xl p-4 mb-8">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="You" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Share your thoughts on this article..." rows={3} className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-accent resize-none" />
                        <div className="flex items-center justify-between mt-3">
                            <p className="text-xs text-zinc-500">Be respectful and constructive in your feedback</p>
                            <button onClick={handleSubmitComment} disabled={!newComment.trim()} className="flex items-center gap-2 px-4 py-2 bg-accent text-zinc-950 rounded-lg font-medium disabled:opacity-50 hover:bg-accent-hover transition-colors">
                                <Send className="w-4 h-4" />Post Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className={`${comment.isPinned ? 'glass-card rounded-xl p-4 border-accent/30' : ''}`}>
                        {comment.isPinned && (
                            <div className="flex items-center gap-1.5 text-xs text-accent mb-3">
                                <Award className="w-3.5 h-3.5" />
                                <span>Pinned by author</span>
                            </div>
                        )}

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src={comment.author.avatar} alt={comment.author.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium text-zinc-100">{comment.author.name}</span>
                                    {comment.author.verified && <Verified className="w-4 h-4 text-accent" />}
                                    <span className="text-xs text-zinc-500">{comment.author.title}</span>
                                    <span className="text-xs text-zinc-600">•</span>
                                    <span className="text-xs text-zinc-500">{comment.timestamp}</span>
                                </div>

                                <p className="text-zinc-300 text-sm leading-relaxed mb-3">{comment.content}</p>

                                <div className="flex items-center gap-4">
                                    <button onClick={() => toggleLike(comment.id)} className={`flex items-center gap-1.5 text-sm transition-colors ${comment.isLiked ? 'text-accent' : 'text-zinc-500 hover:text-accent'}`}>
                                        <ThumbsUp className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                                        <span>{comment.likes}</span>
                                    </button>
                                    <button onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)} className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-accent transition-colors">
                                        <Reply className="w-4 h-4" />Reply
                                    </button>
                                    <button className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                                        <Share2 className="w-4 h-4" />Share
                                    </button>
                                    <button className="text-zinc-600 hover:text-zinc-400 transition-colors ml-auto">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Replies */}
                                {comment.replies.length > 0 && (
                                    <div className="mt-4">
                                        <button onClick={() => toggleReplies(comment.id)} className="flex items-center gap-1 text-sm text-accent hover:text-accent-light transition-colors">
                                            {expandedReplies.has(comment.id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                            {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                                        </button>

                                        {expandedReplies.has(comment.id) && (
                                            <div className="mt-4 pl-4 border-l-2 border-zinc-800 space-y-4">
                                                {comment.replies.map((reply) => (
                                                    <div key={reply.id} className="flex gap-3">
                                                        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                                            <img src={reply.author.avatar} alt={reply.author.name} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="font-medium text-sm text-zinc-100">{reply.author.name}</span>
                                                                <span className="text-xs text-zinc-500">{reply.timestamp}</span>
                                                            </div>
                                                            <p className="text-zinc-300 text-sm">{reply.content}</p>
                                                            <button onClick={() => toggleLike(reply.id)} className={`flex items-center gap-1 text-xs mt-2 ${reply.isLiked ? 'text-accent' : 'text-zinc-500'}`}>
                                                                <ThumbsUp className={`w-3 h-3 ${reply.isLiked ? 'fill-current' : ''}`} />{reply.likes}
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
                <button className="btn-secondary">Load More Comments</button>
            </div>
        </div>
    );
}
