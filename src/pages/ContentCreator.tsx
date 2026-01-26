import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Eye, Save, Send, Globe, Lock, Bold, Italic, Link2, List, Quote, Code, Heading1, Heading2, X, Check, AlertCircle } from 'lucide-react';

// Phase 1091-1100: Content Creator & Admin Tools
// Rich article editor for contributors and admins

interface EditorState {
    title: string;
    subtitle: string;
    content: string;
    category: string;
    tags: string[];
    featuredImage: string;
    status: 'draft' | 'review' | 'scheduled' | 'published';
    scheduledDate: string;
    visibility: 'public' | 'premium' | 'private';
    seoTitle: string;
    seoDescription: string;
}

const categories = ['Strategy', 'Technology', 'Leadership', 'Healthcare', 'Trends', 'Insights'];

export default function ContentCreator() {
    const [editor, setEditor] = useState<EditorState>({
        title: '',
        subtitle: '',
        content: '',
        category: '',
        tags: [],
        featuredImage: '',
        status: 'draft',
        scheduledDate: '',
        visibility: 'public',
        seoTitle: '',
        seoDescription: ''
    });
    const [newTag, setNewTag] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'settings'>('content');

    const addTag = () => {
        if (newTag && !editor.tags.includes(newTag)) {
            setEditor({ ...editor, tags: [...editor.tags, newTag] });
            setNewTag('');
        }
    };

    const removeTag = (tag: string) => {
        setEditor({ ...editor, tags: editor.tags.filter(t => t !== tag) });
    };

    const handleSave = async (publish = false) => {
        setIsSaving(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSaving(false);
        alert(publish ? 'Article published!' : 'Draft saved!');
    };

    const wordCount = editor.content.split(/\s+/).filter(Boolean).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <div className="min-h-screen bg-zinc-950 pt-20">
            {/* Top Bar */}
            <div className="fixed top-16 left-0 right-0 z-40 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
                <div className="container flex items-center justify-between h-14">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-zinc-400 hover:text-zinc-100">
                            <X className="w-5 h-5" />
                        </Link>
                        <div className="h-6 w-px bg-zinc-700" />
                        <span className="text-zinc-400 text-sm">
                            {editor.status === 'draft' && <span className="text-amber-400">● Draft</span>}
                            {editor.status === 'published' && <span className="text-emerald-400">● Published</span>}
                        </span>
                        {wordCount > 0 && (
                            <span className="text-zinc-500 text-sm">{wordCount} words · {readTime} min read</span>
                        )}
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setShowPreview(!showPreview)} className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 border border-zinc-700 rounded-lg hover:border-zinc-600">
                            <Eye className="w-4 h-4" />{showPreview ? 'Edit' : 'Preview'}
                        </button>
                        <button onClick={() => handleSave(false)} disabled={isSaving} className="flex items-center gap-2 px-3 py-1.5 text-sm bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700 disabled:opacity-50">
                            <Save className="w-4 h-4" />Save Draft
                        </button>
                        <button onClick={() => handleSave(true)} disabled={isSaving || !editor.title} className="flex items-center gap-2 px-4 py-1.5 text-sm bg-accent text-zinc-950 font-medium rounded-lg hover:bg-accent-hover disabled:opacity-50">
                            <Send className="w-4 h-4" />Publish
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Editor */}
            <div className="pt-14 flex">
                {/* Editor Panel */}
                <div className="flex-1 min-h-screen border-r border-zinc-800">
                    <div className="max-w-3xl mx-auto p-8">
                        {/* Tabs */}
                        <div className="flex gap-1 mb-8 p-1 bg-zinc-900 rounded-lg w-fit">
                            {(['content', 'seo', 'settings'] as const).map((tab) => (
                                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-md text-sm capitalize transition-colors ${activeTab === tab ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'}`}>{tab}</button>
                            ))}
                        </div>

                        {activeTab === 'content' && (
                            <div className="space-y-6">
                                {/* Title */}
                                <input type="text" placeholder="Article Title" value={editor.title} onChange={(e) => setEditor({ ...editor, title: e.target.value })} className="w-full text-4xl font-display font-bold text-zinc-100 bg-transparent border-none focus:outline-none placeholder:text-zinc-600" />

                                {/* Subtitle */}
                                <input type="text" placeholder="Add a subtitle..." value={editor.subtitle} onChange={(e) => setEditor({ ...editor, subtitle: e.target.value })} className="w-full text-xl text-zinc-400 bg-transparent border-none focus:outline-none placeholder:text-zinc-600" />

                                {/* Toolbar */}
                                <div className="flex items-center gap-1 p-2 bg-zinc-900 rounded-lg border border-zinc-800">
                                    {[Bold, Italic, Link2, Heading1, Heading2, List, Quote, Code].map((Icon, i) => (
                                        <button key={i} className="p-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 rounded transition-colors"><Icon className="w-4 h-4" /></button>
                                    ))}
                                    <div className="h-6 w-px bg-zinc-700 mx-2" />
                                    <button className="p-2 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 rounded transition-colors"><Image className="w-4 h-4" /></button>
                                </div>

                                {/* Content */}
                                <textarea placeholder="Start writing your article..." value={editor.content} onChange={(e) => setEditor({ ...editor, content: e.target.value })} className="w-full min-h-[400px] text-zinc-300 text-lg leading-relaxed bg-transparent border-none focus:outline-none placeholder:text-zinc-600 resize-none" />
                            </div>
                        )}

                        {activeTab === 'seo' && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">SEO Title</label>
                                    <input type="text" placeholder="Search engine title" value={editor.seoTitle} onChange={(e) => setEditor({ ...editor, seoTitle: e.target.value })} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-accent" />
                                    <p className="text-xs text-zinc-500 mt-1">{editor.seoTitle.length}/60 characters</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Meta Description</label>
                                    <textarea placeholder="Brief description for search results" value={editor.seoDescription} onChange={(e) => setEditor({ ...editor, seoDescription: e.target.value })} rows={3} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-accent resize-none" />
                                    <p className="text-xs text-zinc-500 mt-1">{editor.seoDescription.length}/160 characters</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Category</label>
                                    <select value={editor.category} onChange={(e) => setEditor({ ...editor, category: e.target.value })} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-accent">
                                        <option value="">Select category</option>
                                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Tags</label>
                                    <div className="flex gap-2 mb-2 flex-wrap">
                                        {editor.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1 px-2 py-1 bg-zinc-800 text-zinc-300 text-sm rounded">
                                                {tag}<button onClick={() => removeTag(tag)} className="text-zinc-500 hover:text-zinc-100"><X className="w-3 h-3" /></button>
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <input type="text" placeholder="Add tag" value={newTag} onChange={(e) => setNewTag(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addTag()} className="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 text-sm focus:outline-none focus:border-accent" />
                                        <button onClick={addTag} className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg hover:bg-zinc-700">Add</button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Visibility</label>
                                    <div className="flex gap-3">
                                        {[{ value: 'public', label: 'Public', icon: Globe }, { value: 'premium', label: 'Premium', icon: Lock }].map(opt => (
                                            <button key={opt.value} onClick={() => setEditor({ ...editor, visibility: opt.value as 'public' | 'premium' })} className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${editor.visibility === opt.value ? 'border-accent bg-accent/10' : 'border-zinc-800 hover:border-zinc-700'}`}>
                                                <opt.icon className="w-4 h-4 text-zinc-400" />
                                                <span className="text-zinc-100">{opt.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-80 p-6 bg-zinc-900/50 hidden lg:block">
                    <h3 className="text-lg font-semibold text-zinc-100 mb-4">Publishing</h3>
                    <div className="space-y-4">
                        <div className="glass-card rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-zinc-400">Status</span>
                                <span className="text-sm text-amber-400">Draft</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-zinc-400">Visibility</span>
                                <span className="text-sm text-zinc-100 capitalize">{editor.visibility}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-zinc-400">Category</span>
                                <span className="text-sm text-zinc-100">{editor.category || 'None'}</span>
                            </div>
                        </div>

                        <div className="glass-card rounded-lg p-4">
                            <h4 className="text-sm font-medium text-zinc-300 mb-3">Checklist</h4>
                            <div className="space-y-2">
                                {[
                                    { label: 'Title added', done: !!editor.title },
                                    { label: 'Content written', done: wordCount > 100 },
                                    { label: 'Category selected', done: !!editor.category },
                                    { label: 'SEO optimized', done: !!editor.seoTitle }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        {item.done ? <Check className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-zinc-600" />}
                                        <span className={`text-sm ${item.done ? 'text-zinc-300' : 'text-zinc-500'}`}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
