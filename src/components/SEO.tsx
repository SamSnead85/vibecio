import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    author?: string;
    keywords?: string[];
    type?: 'website' | 'article';
    image?: string;
    url?: string;
    publishedTime?: string;
    articleSection?: string;
}

export default function SEO({
    title = 'VibeCIO | AI News & Enterprise AI Transformation Insights',
    description = 'The leading AI newsletter for CIOs. Expert analysis on AI transformation, agentic workflows, and enterprise AI strategy.',
    author = 'VibeCIO Editorial Team',
    keywords = [],
    type = 'website',
    image,
    url,
    publishedTime,
    articleSection,
}: SEOProps) {
    useEffect(() => {
        const fullTitle = title.includes('VibeCIO') ? title : `${title} | VibeCIO`;
        document.title = fullTitle;

        // Base keywords for all pages
        const baseKeywords = [
            'AI news', 'AI newsletter', 'enterprise AI', 'AI transformation',
            'CIO', 'technology leadership', 'digital transformation', 'AI strategy',
            'agentic AI', 'generative AI', 'AI governance'
        ];
        const allKeywords = [...new Set([...baseKeywords, ...keywords])].join(', ');

        // Update meta description
        updateMeta('name', 'description', description);
        updateMeta('name', 'keywords', allKeywords);
        updateMeta('name', 'author', author);

        // Update OG tags
        updateMeta('property', 'og:title', fullTitle);
        updateMeta('property', 'og:description', description);
        updateMeta('property', 'og:type', type);

        if (image) {
            updateMeta('property', 'og:image', image);
        }
        if (url) {
            updateMeta('property', 'og:url', url);
        }

        // Twitter tags
        updateMeta('name', 'twitter:title', fullTitle);
        updateMeta('name', 'twitter:description', description);
        if (image) {
            updateMeta('name', 'twitter:image', image);
        }

        // Article-specific tags
        if (type === 'article') {
            updateMeta('property', 'article:author', author);
            if (publishedTime) {
                updateMeta('property', 'article:published_time', publishedTime);
            }
            if (articleSection) {
                updateMeta('property', 'article:section', articleSection);
            }
        }

    }, [title, description, author, keywords, type, image, url, publishedTime, articleSection]);

    return null;
}

function updateMeta(attrName: string, attrValue: string, content: string) {
    let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (meta) {
        meta.setAttribute('content', content);
    } else {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
    }
}
