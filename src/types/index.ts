export interface Leader {
    id: string;
    name: string;
    title: string;
    company: string;
    bio: string;
    expertise: string[];
    avatar?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    featured?: boolean;
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

// Enhanced Article Categories
export type ArticleCategory = 'strategy' | 'technology' | 'trends' | 'insights' | 'healthcare' | 'leadership';

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
    tags?: string[];
    relatedArticles?: string[];
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

// New Types for Enhanced Platform

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar?: string;
    linkedin?: string;
    twitter?: string;
}

export interface Sponsor {
    id: string;
    name: string;
    logo: string;
    tier: 'platinum' | 'gold' | 'silver';
    website: string;
    description: string;
}

export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    type: 'webinar' | 'conference' | 'roundtable' | 'virtual';
    description: string;
    registrationUrl?: string;
    featured?: boolean;
}

export interface Podcast {
    id: string;
    title: string;
    guest: string;
    guestTitle: string;
    duration: number;
    date: string;
    description: string;
    audioUrl?: string;
    transcript?: string[];
    image?: string;
}

export interface Report {
    id: string;
    title: string;
    subtitle: string;
    category: 'research' | 'whitepaper' | 'benchmark' | 'survey';
    date: string;
    pages: number;
    downloadUrl?: string;
    preview: string;
    image?: string;
    featured?: boolean;
}

export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    remote: boolean;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar?: string;
}

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export interface SubscriptionTier {
    id: string;
    name: string;
    price: number;
    period: 'monthly' | 'yearly';
    features: string[];
    recommended?: boolean;
}

export interface UserPreferences {
    theme: 'dark' | 'light' | 'system';
    fontSize: 'small' | 'medium' | 'large';
    emailNotifications: boolean;
    weeklyDigest: boolean;
    breakingNewsAlerts: boolean;
}
