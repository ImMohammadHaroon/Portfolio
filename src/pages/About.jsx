import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import aboutImage from '../assets/about.webp';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Haroon',
  alternateName: ['DevOwl', 'Mohammad Haroon'],
  url: 'https://devowl.me/muhammad-haroon',
  image: 'https://devowl.me/profile-photo.webp',
  jobTitle: 'Full Stack Developer',
  description:
    'Muhammad Haroon is a Full Stack Developer and freelance web developer based in Bahawalpur, Pakistan, specializing in React.js, Node.js, MongoDB, and WordPress.',
  worksFor: {
    '@type': 'Organization',
    name: 'ML Bench',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'CUVAS Bahawalpur',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bahawalpur',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://github.com/ImMohammadHaroon',
    'https://www.linkedin.com/in/mohammad-haroon-9b9356362/',
    'https://www.instagram.com/mohammad_haro.on',
  ],
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-main dark:bg-darkbg transition-colors duration-300">
      <SEOHead
        title="Muhammad Haroon | Full Stack Developer & Freelance Web Developer"
        description="Muhammad Haroon is a Full Stack Developer and freelance web developer from Bahawalpur, Pakistan, specializing in React.js, Node.js, MongoDB, and WordPress."
        keywords="Muhammad Haroon, Mohammad Haroon, DevOwl, Full Stack Developer, Freelance Web Developer, Web Developer Bahawalpur, React Developer, WordPress Developer, MERN Stack"
        canonicalUrl="https://devowl.me/muhammad-haroon"
        ogImage="https://devowl.me/profile-photo.webp"
        ogType="profile"
        breadcrumbs={[
          { name: 'Home', url: 'https://devowl.me/' },
          { name: 'Muhammad Haroon', url: 'https://devowl.me/muhammad-haroon' },
        ]}
        structuredData={personSchema}
      />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-primary-soft dark:bg-darksubtle rounded-2xl opacity-70 transition duration-500"></div>
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Muhammad Haroon, full stack developer"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  width="600"
                  height="800"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-500 mb-3">
                  About
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-primary dark:text-darkink-primary mb-4">
                  Muhammad Haroon
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-ink-secondary dark:text-darkink-primary">
                  Full Stack Developer & Freelance Web Developer
                </p>
              </div>

              <p className="text-lg text-ink-secondary dark:text-darkink-secondary leading-relaxed">
                Muhammad Haroon (also known as DevOwl) is a Full Stack Developer based in
                Bahawalpur, Pakistan. He builds responsive web applications, e-commerce platforms,
                and SEO-optimized WordPress sites using React.js, Node.js, MongoDB, and modern
                JavaScript.
              </p>

              <p className="text-base md:text-lg text-ink-muted dark:text-darkink-muted leading-relaxed">
                He completed a Bachelor of Computer Science from Cholistan University of Veterinary
                & Animal Sciences (CUVAS Bahawalpur), and currently works as a Full Stack Developer
                Intern at ML Bench. Previously he delivered freelance projects on Fiverr and
                Freelancer, and worked as a Web Developer at Arkidu Development.
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-bg-surface dark:bg-darksurface rounded-xl border border-border dark:border-darkborder">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted dark:text-darkink-muted mb-1">
                    Location
                  </dt>
                  <dd className="text-sm font-semibold text-ink-primary dark:text-darkink-primary">
                    Bahawalpur, Pakistan
                  </dd>
                </div>
                <div className="p-5 bg-bg-surface dark:bg-darksurface rounded-xl border border-border dark:border-darkborder">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted dark:text-darkink-muted mb-1">
                    Currently
                  </dt>
                  <dd className="text-sm font-semibold text-ink-primary dark:text-darkink-primary">
                    Full Stack Developer at ML Bench
                  </dd>
                </div>
                <div className="p-5 bg-bg-surface dark:bg-darksurface rounded-xl border border-border dark:border-darkborder">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted dark:text-darkink-muted mb-1">
                    Education
                  </dt>
                  <dd className="text-sm font-semibold text-ink-primary dark:text-darkink-primary">
                    BCS, CUVAS Bahawalpur
                  </dd>
                </div>
                <div className="p-5 bg-bg-surface dark:bg-darksurface rounded-xl border border-border dark:border-darkborder">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted dark:text-darkink-muted mb-1">
                    Focus
                  </dt>
                  <dd className="text-sm font-semibold text-ink-primary dark:text-darkink-primary">
                    MERN Stack & WordPress
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-ink-inverse font-semibold rounded-lg transition-colors duration-300"
                >
                  View Projects
                </Link>
                <Link
                  to="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-bg-surface dark:bg-darksurface text-ink-primary dark:text-darkink-primary font-semibold rounded-lg border border-border dark:border-darkborder hover:bg-bg-subtle dark:hover:bg-darksubtle transition-colors duration-300"
                >
                  Get In Touch
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/ImMohammadHaroon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-haroon-9b9356362/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/mohammad_haro.on"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
