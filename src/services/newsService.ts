import { GoogleGenAI } from '@google/genai';
import type { NewsItem } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const CACHE_KEY = 'vibecio_news_cache';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

// Curated fallback news - vendor neutral, insight-focused
const fallbackNews: NewsItem[] = [
    {
        id: "1",
        title: "NVIDIA-Groq Deal Reshapes AI Infrastructure Landscape",
        source: "Industry Analysis",
        date: new Date().toISOString(),
        summary: "The $20B licensing agreement signals a new era where inference optimization becomes the primary battleground."
    },
    {
        id: "2",
        title: "82% of Developers Now Using AI Coding Assistants Daily",
        source: "Developer Trends Report",
        date: new Date().toISOString(),
        summary: "Near-universal adoption shifts competitive advantage from tool access to orchestration capability."
    },
    {
        id: "3",
        title: "Agentic Workflows Deliver 30-50% Operational Cost Reduction",
        source: "Enterprise AI Quarterly",
        date: new Date().toISOString(),
        summary: "Early adopters see significant ROI as AI agents move from experiments to production workloads."
    },
    {
        id: "4",
        title: "Multi-Agent AI Systems Emerge as Enterprise Standard",
        source: "CIO Insights",
        date: new Date().toISOString(),
        summary: "Organizations deploying collaborative AI agents report unprecedented automation of complex workflows."
    },
    {
        id: "5",
        title: "Sovereign AI Investments Accelerate Globally",
        source: "Global Tech Policy",
        date: new Date().toISOString(),
        summary: "Nations building domestic AI infrastructure to ensure data sovereignty and reduce foreign dependence."
    },
    {
        id: "6",
        title: "AI Code Tools Market Projected at $24B by 2030",
        source: "Market Intelligence",
        date: new Date().toISOString(),
        summary: "26.6% CAGR driven by enterprise adoption and integration depth beyond basic code completion."
    }
];

interface CachedNews {
    items: NewsItem[];
    timestamp: number;
}

function getCachedNews(): NewsItem[] | null {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;

        const data: CachedNews = JSON.parse(cached);
        if (Date.now() - data.timestamp > CACHE_DURATION) {
            localStorage.removeItem(CACHE_KEY);
            return null;
        }
        return data.items;
    } catch {
        return null;
    }
}

function setCachedNews(items: NewsItem[]): void {
    try {
        const data: CachedNews = {
            items,
            timestamp: Date.now()
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch {
        // Ignore storage errors
    }
}

export async function fetchNews(): Promise<NewsItem[]> {
    // Check cache first
    const cached = getCachedNews();
    if (cached) {
        console.log('Using cached news data');
        return cached;
    }

    // If no API key, return fallback immediately
    if (!API_KEY) {
        console.log('No API key found, using curated news data');
        return fallbackNews;
    }

    try {
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: `Find the latest high-impact news (last 7 days) about enterprise AI adoption, AI coding assistants, and agentic AI workflows. Focus on:
- Major partnerships, investments, or acquisitions in AI infrastructure
- Enterprise AI adoption statistics and trends
- Agentic workflow implementations and ROI data
- AI governance and regulatory developments
- CIO/CTO perspectives on AI transformation

Return a JSON array with exactly 6 news items. Each item should have:
- id: unique string
- title: compelling, vendor-neutral headline (don't favor any single company)
- source: publication or report name
- date: ISO date string
- summary: one sentence insight about why this matters to enterprise leaders

Return ONLY valid JSON, no markdown or explanation.`,
        });

        const text = response.text || '';

        // Try to parse JSON from response
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]) as NewsItem[];
            if (parsed.length > 0) {
                setCachedNews(parsed);
                return parsed;
            }
        }

        return fallbackNews;
    } catch (error) {
        console.error('Error fetching news:', error);
        return fallbackNews;
    }
}

export function getLastUpdateTime(): string {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const data: CachedNews = JSON.parse(cached);
            return new Date(data.timestamp).toLocaleString();
        }
    } catch {
        // Ignore
    }
    return new Date().toLocaleString();
}
