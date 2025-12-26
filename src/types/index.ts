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
