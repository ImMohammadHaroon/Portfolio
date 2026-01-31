import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import ScrollToTop from '../components/ScrollToTop';
import SEOHead from '../components/SEOHead';
import aboutImage from '../assets/about.webp';

// Lazy load heavy components to improve initial page load speed
const Skills = lazy(() => import('../components/Skills'));
const ExperienceTimeline = lazy(() => import('../components/ExperienceTimeline'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

import SectionLoader from '../components/SectionLoader';

const Home = () => {
  return (
    <div>
      <SEOHead
        title="Haroon's Portfolio - Mohammad Haroon | Full Stack Web Developer"
        description="Official portfolio of Mohammad Haroon, a passionate Full Stack Web Developer from Bahawalpur, Pakistan. Specializing in React.js, WordPress, Node.js, and modern web technologies. View my projects and get in touch!"
        keywords="Haroon's Portfolio, Mohammad Haroon, Muhammad Haroon, Full Stack Developer, Web Developer Bahawalpur, React Developer, WordPress Developer, MERN Stack, Pakistan Developer, JavaScript Expert, Node.js Developer"
        canonicalUrl="https://devowl.me/"
        ogImage="https://devowl.me/og-image.jpg"
      />
      <Hero />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-16 text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Mohammad Haroon - Full Stack Web Developer from Bahawalpur, Pakistan"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width="600"
                  height="800"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Introduction */}
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">Mohammad Haroon</span>, a passionate Full Stack Web Developer based in Bahawalpur, Pakistan.
                With expertise in React.js, WordPress, and modern web technologies, I create responsive,
                interactive web experiences that solve real-world problems.
              </p>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I completed my Bachelor of Computer Science from Cholistan University of Veterinary &
                Animal Sciences (CUVAS), Bahawalpur, combining academic knowledge with practical development skills to deliver exceptional web solutions. I specialize in building cutting-edge e-commerce platforms, dynamic web applications, and SEO-optimized websites that drive results.
              </p>

              {/* Key Achievements */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-3"></span>
                  Key Achievements
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 border border-indigo-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">10+ Websites</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Responsive WordPress sites with Elementor</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">E-Commerce</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Full-stack solutions with React & Node.js</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">SEO Expert</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Optimization & lead generation strategies</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1">REST APIs</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Modern JavaScript frameworks mastery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#609966] to-[#9DC08B] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span>Let's Work Together</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      {/* Experience Section */}
      <Suspense fallback={<SectionLoader />}>
        <ExperienceTimeline />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<div className="h-20 bg-gray-900"></div>}>
        <Footer />
      </Suspense>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
