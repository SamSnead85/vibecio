import { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send, Bot, User, Minimize2, Maximize2, Loader2 } from 'lucide-react';

// Phase 1021-1030: Interactive AI Chatbot Component
// Floating AI assistant for content discovery and navigation

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const suggestions = [
    "What's trending in AI this week?",
    "Show me articles about leadership",
    "Latest healthcare AI news",
    "Explain agentic workflows"
];

const mockResponses: Record<string, string> = {
    trending: "This week's top trending articles include:\n\n1. **From Fear to Superpower** - Building AI-Native Teams\n2. **The Inference Wars** - NVIDIA's $20B Groq deal\n3. **2026 Is the Inflection Point** - Financial services transformation",
    leadership: "I found 12 leadership articles for you. The most popular is **'From Fear to Superpower: Building High-Performing, AI-Native Teams'** by Deana Rhoades. Would you like me to open it?",
    healthcare: "Recent healthcare AI coverage includes the Wipro Healthcare Solutions case study with NVIDIA. First-call resolution improved from 84% to 92% using AI agent-assist.",
    agentic: "Agentic workflows are goal-oriented AI systems that determine how to achieve outcomes autonomously. Unlike traditional automation, they adapt to exceptions. Check out our article 'Agentic Workflows: Beyond Simple Automation'."
};

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: "Hi! I'm your VibeCIO assistant. Ask me about articles, trends, or AI topics.", timestamp: new Date() }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async (text?: string) => {
        const messageText = text || input;
        if (!messageText.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: messageText, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            let response = "I'm searching our content library for relevant articles. Let me help you discover great content on VibeCIO!";
            const lowerText = messageText.toLowerCase();
            if (lowerText.includes('trend')) response = mockResponses.trending;
            else if (lowerText.includes('leader')) response = mockResponses.leadership;
            else if (lowerText.includes('health')) response = mockResponses.healthcare;
            else if (lowerText.includes('agent')) response = mockResponses.agentic;

            const aiMessage: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    if (!isOpen) {
        return (
            <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-amber-600 text-zinc-950 shadow-lg hover:shadow-accent/30 transition-all hover:scale-105 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
            </button>
        );
    }

    return (
        <div className={`fixed right-6 z-50 transition-all ${isMinimized ? 'bottom-6' : 'bottom-6'}`}>
            <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden transition-all ${isMinimized ? 'w-72 h-14' : 'w-96 h-[500px]'}`}>
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-accent/20 to-amber-600/10 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center">
                            <Bot className="w-4 h-4 text-zinc-950" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-zinc-100">VibeCIO Assistant</h3>
                            <span className="text-xs text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Online</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={() => setIsMinimized(!isMinimized)} className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800">{isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}</button>
                        <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"><X className="w-4 h-4" /></button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages */}
                        <div className="flex-1 h-[360px] overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-accent text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                                        {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                                    </div>
                                    <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.role === 'user' ? 'bg-accent text-zinc-950' : 'bg-zinc-800 text-zinc-200'}`}>
                                        <p className="whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex gap-2">
                                    <div className="w-7 h-7 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center"><Bot className="w-3.5 h-3.5" /></div>
                                    <div className="bg-zinc-800 px-4 py-2 rounded-xl"><Loader2 className="w-4 h-4 text-zinc-400 animate-spin" /></div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestions */}
                        {messages.length < 3 && (
                            <div className="px-4 pb-2 flex gap-2 flex-wrap">
                                {suggestions.slice(0, 2).map((s, i) => (
                                    <button key={i} onClick={() => handleSend(s)} className="text-xs px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-accent border border-zinc-700 hover:border-accent/50 transition-colors">{s}</button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 border-t border-zinc-800">
                            <div className="flex items-center gap-2">
                                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about articles, trends..." className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-accent" />
                                <button onClick={() => handleSend()} disabled={!input.trim()} className="p-2 rounded-lg bg-accent text-zinc-950 disabled:opacity-50 hover:bg-accent-hover transition-colors"><Send className="w-4 h-4" /></button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
