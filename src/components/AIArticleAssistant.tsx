import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2, Bot, User } from 'lucide-react';
import { askAboutArticle, isGeminiConfigured, type ArticleContent } from '../services/gemini';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

interface AIArticleAssistantProps {
    article: ArticleContent;
}

export default function AIArticleAssistant({ article }: AIArticleAssistantProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Don't render if Gemini isn't configured
    if (!isGeminiConfigured()) {
        return null;
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Add welcome message when chat opens
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                role: 'assistant',
                content: `Hi! I'm your AI assistant for this article. Ask me anything about "${article.title}" - I can explain concepts, provide context, or discuss the strategic implications for IT leaders.`,
                timestamp: new Date()
            }]);
        }
    }, [isOpen, article.title, messages.length]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            content: input.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await askAboutArticle(article, userMessage.content);

            const assistantMessage: Message = {
                role: 'assistant',
                content: response.success
                    ? response.content
                    : 'I apologize, but I encountered an error processing your question. Please try again.',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an unexpected error. Please try again.',
                timestamp: new Date()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const suggestedQuestions = [
        "Summarize the key points",
        "What are the strategic implications?",
        "How does this impact CIOs?",
        "Explain the technical concepts"
    ];

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isOpen ? 'hidden' : ''}`}
            >
                <Sparkles size={18} />
                <span>Ask AI</span>
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[32rem] max-h-[calc(100vh-6rem)] bg-[var(--color-zinc-900)] border border-[var(--color-zinc-700)] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-zinc-700)] bg-gradient-to-r from-[var(--color-zinc-800)] to-[var(--color-zinc-900)]">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center">
                                <Bot size={16} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-white">AI Article Assistant</h3>
                                <p className="text-xs text-[var(--color-zinc-400)]">Powered by Gemini</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 rounded-lg hover:bg-[var(--color-zinc-700)] transition-colors"
                        >
                            <X size={18} className="text-[var(--color-zinc-400)]" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${message.role === 'user'
                                    ? 'bg-[var(--color-accent)]'
                                    : 'bg-gradient-to-br from-violet-500 to-purple-600'
                                    }`}>
                                    {message.role === 'user'
                                        ? <User size={14} className="text-white" />
                                        : <Bot size={14} className="text-white" />
                                    }
                                </div>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${message.role === 'user'
                                    ? 'bg-[var(--color-accent)] text-white rounded-tr-sm'
                                    : 'bg-[var(--color-zinc-800)] text-[var(--color-zinc-200)] rounded-tl-sm'
                                    }`}>
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-3">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                    <Bot size={14} className="text-white" />
                                </div>
                                <div className="bg-[var(--color-zinc-800)] rounded-2xl rounded-tl-sm px-4 py-3">
                                    <Loader2 size={16} className="animate-spin text-[var(--color-accent)]" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions (only show if few messages) */}
                    {messages.length <= 1 && (
                        <div className="px-4 pb-2">
                            <p className="text-xs text-[var(--color-zinc-500)] mb-2">Suggested questions:</p>
                            <div className="flex flex-wrap gap-2">
                                {suggestedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setInput(question)}
                                        className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-zinc-800)] text-[var(--color-zinc-300)] hover:bg-[var(--color-zinc-700)] hover:text-white transition-colors"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-3 border-t border-[var(--color-zinc-700)]">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about this article..."
                                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--color-zinc-800)] border border-[var(--color-zinc-700)] text-white placeholder:text-[var(--color-zinc-500)] focus:outline-none focus:border-[var(--color-accent)] text-sm"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="px-4 py-2.5 rounded-xl bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
