export interface Leader {
    id: string;
    name: string;
    title: string;
    company: string;
    bio: string;
    expertise: string[];
    avatar?: string;
}

export interface NewsItem {
    id: string;
    title: string;
    source?: string;
    url?: string;
    date?: string;
    summary?: string;
}

export interface CoverStory {
    headline: string;
    subheadline: string;
    content: string;
    author?: string;
}

export interface TransformationSpotlight {
    title: string;
    summary: string;
    stats: string[];
    company: string;
    image?: string;
}

// New types for enhanced content

export type ArticleCategory = 'strategy' | 'technology' | 'trends' | 'insights';

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    category: ArticleCategory;
    content: string[];
    author: string;
    date: string;
    readTime: number;
    insights: string[];
    featured?: boolean;
    image?: string;
}

export interface BreakingNews {
    id: string;
    headline: string;
    source: string;
    timestamp: string;
    isBreaking: boolean;
    summary?: string;
}

export interface DailyFeature {
    articleId: string;
    featureDate: string;
}
