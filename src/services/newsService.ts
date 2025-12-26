import { GoogleGenAI } from '@google/genai';
import { NewsItem } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const fallbackNews: NewsItem[] = [
    {
        id: "1",
        title: "Gemini 3: The New Standard for Enterprise Reasoning",
        source: "Google AI Blog",
        date: new Date().toISOString()
    },
    {
        id: "2",
        title: "Vibe Coding is Eating Software",
        source: "VentureBeat",
        date: new Date().toISOString()
    },
    {
        id: "3",
        title: "Nvidia's Sovereign AI Push: Jensen Huang's Vision for National AI Infrastructure",
        source: "Tech Crunch",
        date: new Date().toISOString()
    },
    {
        id: "4",
        title: "The Rise of Agentic Workflows in Enterprise IT",
        source: "Harvard Business Review",
        date: new Date().toISOString()
    },
    {
        id: "5",
        title: "Why CIOs Are Betting Big on AI Orchestration",
        source: "Forbes",
        date: new Date().toISOString()
    }
];

export async function fetchNews(): Promise<NewsItem[]> {
    // If no API key, return fallback immediately
    if (!API_KEY) {
        console.log('No API key found, using fallback news data');
        return fallbackNews;
    }

    try {
        const ai = new GoogleGenAI({ apiKey: API_KEY });

        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: `Find viral, high-impact news (last 7 days) on Google Gemini 3, Nvidia Enterprise, and Agentic AI. 
      
Return a JSON array with exactly 5 news items. Each item should have:
- id: unique string
- title: compelling headline
- source: publication name
- date: ISO date string

Return ONLY valid JSON, no markdown or explanation.`,
        });

        const text = response.text || '';

        // Try to parse JSON from response
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]) as NewsItem[];
            return parsed.length > 0 ? parsed : fallbackNews;
        }

        return fallbackNews;
    } catch (error) {
        console.error('Error fetching news:', error);
        return fallbackNews;
    }
}
