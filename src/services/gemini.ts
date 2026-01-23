import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

// System prompts for different use cases
const SYSTEM_PROMPTS = {
    articleAssistant: `You are an AI assistant for VibeCIO, a premium digital magazine for enterprise IT leaders and CIOs. 
You help readers understand articles, explain technical concepts, and provide insights on AI transformation, enterprise technology, and IT leadership.
Keep responses concise, professional, and focused on providing value to senior technology executives.
When discussing articles, reference specific points from the content provided.`,

    contentGenerator: `You are an expert technology journalist writing for VibeCIO, a premier publication for CIOs and enterprise IT leaders.
Write in a sophisticated, analytical style that respects the intelligence of your C-suite audience.
Focus on actionable insights, quantified business impact, and strategic implications.
Avoid marketing fluff. Be direct, evidence-based, and forward-thinking.`,

    newsletterDigest: `You are creating executive briefings for VibeCIO's newsletter reaching senior IT leaders.
Summarize key insights in a scannable format with bullet points.
Highlight business impact, strategic implications, and actionable takeaways.
Keep the tone authoritative but accessible.`,

    insightGenerator: `You are analyzing technology trends and articles for CIO-level decision makers.
Extract 3 key strategic insights that would matter to a senior technology executive.
Focus on business outcomes, competitive implications, and transformation opportunities.
Be specific and quantify impact where possible.`
};

export interface GeminiResponse {
    success: boolean;
    content: string;
    error?: string;
}

export interface ArticleContent {
    title: string;
    subtitle: string;
    content: string[];
    insights: string[];
}

/**
 * Chat with AI about an article
 */
export async function askAboutArticle(
    article: ArticleContent,
    question: string
): Promise<GeminiResponse> {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const articleContext = `
Article Title: ${article.title}
Subtitle: ${article.subtitle}
Key Insights: ${article.insights.join('; ')}
Content: ${article.content.join('\n\n')}
        `.trim();

        const prompt = `${SYSTEM_PROMPTS.articleAssistant}

Context - Article being discussed:
${articleContext}

Reader Question: ${question}

Provide a helpful, concise response:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { success: true, content: text };
    } catch (error) {
        console.error('Gemini API error:', error);
        return {
            success: false,
            content: '',
            error: error instanceof Error ? error.message : 'Failed to get AI response'
        };
    }
}

/**
 * Generate a new article draft based on a topic
 */
export async function generateArticleDraft(
    topic: string,
    category: string,
    keyPoints?: string[]
): Promise<GeminiResponse> {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `${SYSTEM_PROMPTS.contentGenerator}

Generate a comprehensive article for VibeCIO on the following topic:

Topic: ${topic}
Category: ${category}
${keyPoints?.length ? `Key points to cover: ${keyPoints.join(', ')}` : ''}

Format your response as:
TITLE: [Compelling headline]
SUBTITLE: [Descriptive subtitle]
INSIGHTS:
- [Insight 1]
- [Insight 2]
- [Insight 3]

CONTENT:
[Write 5-7 paragraphs of substantive content suitable for CIO-level readers]`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { success: true, content: text };
    } catch (error) {
        console.error('Gemini API error:', error);
        return {
            success: false,
            content: '',
            error: error instanceof Error ? error.message : 'Failed to generate article'
        };
    }
}

/**
 * Generate newsletter digest from articles
 */
export async function generateNewsletterDigest(
    articles: ArticleContent[],
    weekOf: string
): Promise<GeminiResponse> {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const articleSummaries = articles.map(a => `
- "${a.title}": ${a.subtitle}
  Key insight: ${a.insights[0]}
        `).join('\n');

        const prompt = `${SYSTEM_PROMPTS.newsletterDigest}

Create an executive newsletter digest for the week of ${weekOf}.

Articles this week:
${articleSummaries}

Generate:
1. A compelling subject line
2. An executive summary (2-3 sentences)
3. Bullet-point highlights for each article
4. A "What This Means for CIOs" section
5. A thought-provoking closing question`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { success: true, content: text };
    } catch (error) {
        console.error('Gemini API error:', error);
        return {
            success: false,
            content: '',
            error: error instanceof Error ? error.message : 'Failed to generate newsletter'
        };
    }
}

/**
 * Generate strategic insights from any text
 */
export async function generateInsights(
    content: string,
    context?: string
): Promise<GeminiResponse> {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `${SYSTEM_PROMPTS.insightGenerator}

${context ? `Context: ${context}\n` : ''}
Content to analyze:
${content}

Generate 3 strategic insights for CIO-level decision makers:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { success: true, content: text };
    } catch (error) {
        console.error('Gemini API error:', error);
        return {
            success: false,
            content: '',
            error: error instanceof Error ? error.message : 'Failed to generate insights'
        };
    }
}

/**
 * Summarize an article for quick consumption
 */
export async function summarizeArticle(
    article: ArticleContent
): Promise<GeminiResponse> {
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `Summarize this article in 2-3 sentences for a busy CIO:

Title: ${article.title}
Content: ${article.content.join('\n\n')}

Provide a concise executive summary:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return { success: true, content: text };
    } catch (error) {
        console.error('Gemini API error:', error);
        return {
            success: false,
            content: '',
            error: error instanceof Error ? error.message : 'Failed to summarize'
        };
    }
}

/**
 * Check if Gemini API is configured
 */
export function isGeminiConfigured(): boolean {
    return !!import.meta.env.VITE_GEMINI_API_KEY;
}
