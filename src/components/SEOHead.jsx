import { useEffect } from 'react';

const SEOHead = ({
    title = 'DevOwl Portfolio - Mohammad Haroon | Full Stack Web Developer',
    description = 'DevOwl - Portfolio of Mohammad Haroon, a passionate Full Stack Web Developer from Bahawalpur, Pakistan. Specializing in React.js, WordPress, Node.js, and modern web technologies.',
    keywords = 'DevOwl, devowl portfolio, Mohammad Haroon, Full Stack Developer, Web Developer Bahawalpur, React Developer, WordPress Developer, Portfolio',
    canonicalUrl = 'https://devowl.me/',
    ogImage = 'https://devowl.me/og-image.jpg',
    ogType = 'website',
}) => {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        // Update meta description
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Update Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', canonicalUrl, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', ogType, true);

        // Update Twitter Card tags
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Update canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', canonicalUrl);
        } else {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.setAttribute('href', canonicalUrl);
            document.head.appendChild(canonical);
        }
    }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

    return null;
};

export default SEOHead;
