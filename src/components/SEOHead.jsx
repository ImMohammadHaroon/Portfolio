import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
    title = 'DevOwl Portfolio - Mohammad Haroon | Full Stack Web Developer',
    description = 'DevOwl - Portfolio of Mohammad Haroon, a passionate Full Stack Web Developer from Bahawalpur, Pakistan. Specializing in React.js, WordPress, Node.js, and modern web technologies.',
    keywords = 'DevOwl, devowl portfolio, Mohammad Haroon, Full Stack Developer, Web Developer Bahawalpur, React Developer, WordPress Developer, Portfolio',
    canonicalUrl = 'https://devowl.me/',
    ogImage = 'https://devowl.me/og-image.jpg',
    ogType = 'website',
    structuredData = null,
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="DevOwl Portfolio" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
