import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
}

export default function SEO({
    title = 'VibeCIO | The Age of Vibe Coding',
    description = 'Premium thought leadership for Enterprise IT Leaders. AI, Vibe Coding, and Agentic Workflows.',
}: SEOProps) {
    useEffect(() => {
        const fullTitle = title.includes('VibeCIO') ? title : `${title} | VibeCIO`;
        document.title = fullTitle;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', fullTitle);
        }

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', description);
        }
    }, [title, description]);

    return null;
}
