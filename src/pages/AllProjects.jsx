import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEOHead
        title="All Projects - Mohammad Haroon | Full Stack Developer Portfolio"
        description="Explore the complete portfolio of Mohammad Haroon: AI-powered platforms, e-commerce solutions, WordPress development, and modern web applications built with React, Node.js, and Python."
        keywords="Mohammad Haroon projects, Full Stack Developer portfolio, React projects, WordPress projects, AI development, E-commerce platforms, Web development portfolio"
        canonicalUrl="https://devowl.me/projects"
        ogType="website"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "All Projects", url: "https://devowl.me/projects" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Mohammad Haroon - Project Portfolio",
          "description": "Complete portfolio of projects by Mohammad Haroon, a Full Stack Web Developer specializing in React, Node.js, Python, and WordPress.",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "url": "https://devowl.me"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Meet AI - AI Meeting Assistant", "url": "https://devowl.me/project/meet-ai" },
              { "@type": "ListItem", "position": 2, "name": "Syeen - Business Collaboration Platform", "url": "https://devowl.me/project/syeen" },
              { "@type": "ListItem", "position": 3, "name": "Foncentra - E-Learning Platform", "url": "https://devowl.me/project/foncentra" },
              { "@type": "ListItem", "position": 4, "name": "GearNix - E-commerce Platform", "url": "https://devowl.me/project/ecommerce" },
              { "@type": "ListItem", "position": 5, "name": "Empire Tax Solutions", "url": "https://devowl.me/project/empire-tax-solutions" },
              { "@type": "ListItem", "position": 6, "name": "Aperture Futures - AI Intelligence Platform", "url": "https://devowl.me/project/aperture-futures" }
            ]
          }
        }}
      />
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
