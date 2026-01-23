import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    author?: string;
    publishedTime?: string;
    keywords?: string[];
}

export default function SEOHead({
    title = 'VibeCIO - Thought Leadership for Enterprise AI',
    description = 'Deep insights on enterprise transformation, AI strategy, and vibe coding for CIOs and technology leaders.',
    image = 'https://vibecio.com/og-image.png',
    article = false,
    author,
    publishedTime,
    keywords = ['CIO', 'AI', 'Enterprise Technology', 'Digital Transformation', 'Vibe Coding']
}: SEOHeadProps) {
    const location = useLocation();
    const canonicalUrl = `https://vibecio.com${location.pathname}`;
    const fullTitle = title.includes('VibeCIO') ? title : `${title} | VibeCIO`;

    useEffect(() => {
        // Update document title
        document.title = fullTitle;

        // Update or create meta tags
        const updateMeta = (name: string, content: string, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attr}="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attr, name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Basic meta tags
        updateMeta('description', description);
        updateMeta('keywords', keywords.join(', '));
        updateMeta('author', author || 'VibeCIO Editorial Team');

        // Open Graph tags
        updateMeta('og:title', fullTitle, true);
        updateMeta('og:description', description, true);
        updateMeta('og:image', image, true);
        updateMeta('og:url', canonicalUrl, true);
        updateMeta('og:type', article ? 'article' : 'website', true);
        updateMeta('og:site_name', 'VibeCIO', true);

        // Twitter Card tags
        updateMeta('twitter:card', 'summary_large_image');
        updateMeta('twitter:site', '@vibecio');
        updateMeta('twitter:title', fullTitle);
        updateMeta('twitter:description', description);
        updateMeta('twitter:image', image);

        // Article-specific tags
        if (article && publishedTime) {
            updateMeta('article:published_time', publishedTime, true);
            if (author) {
                updateMeta('article:author', author, true);
            }
        }

        // Update canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', canonicalUrl);

        // Add JSON-LD structured data
        const jsonLdId = 'seo-json-ld';
        let jsonLdScript = document.getElementById(jsonLdId) as HTMLScriptElement | null;
        if (!jsonLdScript) {
            jsonLdScript = document.createElement('script');
            jsonLdScript.id = jsonLdId;
            jsonLdScript.setAttribute('type', 'application/ld+json');
            document.head.appendChild(jsonLdScript);
        }

        const structuredData = article ? {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: image,
            author: {
                '@type': 'Person',
                name: author || 'VibeCIO Editorial Team'
            },
            publisher: {
                '@type': 'Organization',
                name: 'VibeCIO',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://vibecio.com/logo.png'
                }
            },
            datePublished: publishedTime,
            mainEntityOfPage: canonicalUrl
        } : {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'VibeCIO',
            description: description,
            url: 'https://vibecio.com',
            publisher: {
                '@type': 'Organization',
                name: 'VibeCIO',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://vibecio.com/logo.png'
                }
            }
        };

        jsonLdScript.textContent = JSON.stringify(structuredData);

    }, [fullTitle, description, image, canonicalUrl, article, author, publishedTime, keywords]);

    return null;
}
