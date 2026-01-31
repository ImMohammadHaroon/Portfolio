import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import EmpireImage from '../../assets/empire-solution.webp';

const EmpireTaxSolutions = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SEOHead
        title="Empire Tax Solutions - Financial Services Platform | Mohammad Haroon Portfolio"
        description="Empire Tax Solutions: A dual-purpose WordPress platform offering expert tax services and business mentorship programs. Features three-tiered mentorship with revenue-sharing. Developed by Mohammad Haroon."
        keywords="Empire Tax Solutions, Tax Services, Business Mentorship, Revenue Sharing, WordPress, Financial Platform, Tax Preparation, Entrepreneurship, Mohammad Haroon"
        canonicalUrl="https://devowl.me/project/empire-tax-solutions"
        ogType="article"
        publishedDate="2025-07-20"
        modifiedDate="2026-01-31"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "Projects", url: "https://devowl.me/#projects" },
          { name: "Empire Tax Solutions", url: "https://devowl.me/project/empire-tax-solutions" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Empire Tax Solutions: Financial Services & Mentorship Platform",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "url": "https://devowl.me"
          },
          "description": "A dual-purpose platform empowering individuals with expert tax services while helping aspiring entrepreneurs build their own successful tax businesses through structured mentorship programs.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "keywords": "Tax Services, Business Mentorship, WordPress, Financial Platform",
          "datePublished": "2025-07-20",
          "programmingLanguage": ["PHP", "JavaScript", "HTML", "CSS"]
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-white dark:bg-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#609966] text-white text-sm font-semibold rounded-full">
                Financial Services & Business Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Empire Tax Solutions: Building Tax Empires
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A dual-purpose platform empowering individuals with expert tax services while helping aspiring
              entrepreneurs build their own successful tax businesses through structured mentorship programs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Image */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={EmpireImage}
              alt="Empire Tax Solutions Platform"
              className="w-full h-auto object-cover"
              loading="lazy"
              width="1024"
              height="576"
              decoding="async"
            />
          </div>
        </div>

        {/* Project Overview */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Project Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              In the complex world of tax preparation, two distinct needs exist: individuals seeking reliable tax services
              to maximize their refunds, and aspiring entrepreneurs looking to break into the lucrative tax industry.
              Empire Tax Solutions was created to address both needs simultaneously, creating a unique ecosystem that benefits
              clients and empowers future tax professionals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Empire Tax Solutions is a sophisticated dual-purpose WordPress platform that serves as both a professional
              tax preparation service for individuals and businesses, and a comprehensive business incubator for aspiring
              tax professionals. The platform offers transparent pricing, expert tax preparation with refund maximization
              guarantees, and most uniquely, three-tiered mentorship programs (Silver, Gold, and Platinum) that provide
              entrepreneurs with training, software access, revenue-sharing opportunities, and step-by-step guidance to
              launch their own independent tax businesses.
            </p>
          </div>

          {/* The Challenge */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              The Challenge
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Creating a platform that effectively serves two distinct audiences with different needs requires careful planning:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</span>
                  <span><strong className="text-gray-900 dark:text-white">Dual Audience Segmentation:</strong> Designing user experiences that cater to both tax clients seeking services and entrepreneurs seeking business opportunities without confusing or overwhelming either group.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</span>
                  <span><strong className="text-gray-900 dark:text-white">Trust & Credibility:</strong> Building confidence with financial services requires establishing professional authority while remaining approachable, especially when handling sensitive tax information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</span>
                  <span><strong className="text-gray-900 dark:text-white">Complex Tiered Offerings:</strong> Presenting three distinct mentorship levels (Silver, Gold, Platinum) with varying features, pricing, and benefits in a clear, comparative manner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</span>
                  <span><strong className="text-gray-900 dark:text-white">Revenue-Sharing Management:</strong> Implementing systems to track, calculate, and communicate revenue-sharing arrangements for mentorship participants accurately and transparently.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Solution */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Technical Solution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Empire Tax Solutions leverages WordPress's flexibility combined with custom development to create a
              professional, dual-purpose platform that serves both audiences seamlessly:
            </p>

            {/* Custom WordPress Architecture */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Custom WordPress Theme Architecture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Built on WordPress with a completely custom theme designed from scratch to balance professional authority
                with accessibility. The architecture separates concerns into distinct sections while maintaining a cohesive
                brand identity throughout both service offerings.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "The custom theme architecture allows for flexible content management while maintaining strict design
                  consistency—critical for establishing trust in the financial services sector."
                </p>
              </div>
            </div>

            {/* Dual-Purpose Navigation */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Intelligent User Journey Segmentation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The platform implements smart navigation that guides users down the appropriate path based on their intent:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900/20 dark:to-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">For Tax Clients</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Streamlined service pages, transparent pricing calculator, client portal for document uploads,
                    and appointment booking system.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">For Entrepreneurs</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Detailed mentorship program comparisons, success stories, training curriculum overview, and
                    application/enrollment process.
                  </p>
                </div>
              </div>
            </div>

            {/* Tiered Membership System */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Three-Tiered Mentorship Programs
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The platform showcases three distinct mentorship levels with clear feature comparisons and benefits:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-5 border-l-4 border-gray-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Silver Tier</h4>
                    <span className="px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">Entry Level</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Basic training, software access, and foundational business setup guidance for new entrepreneurs.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-5 border-l-4 border-[#609966]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Gold Tier</h4>
                    <span className="px-3 py-1 bg-[#609966] text-white text-xs font-bold rounded-full">Advanced</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Enhanced training, premium software, marketing support, and revenue-sharing opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#609966] to-[#9DC08B] dark:from-green-800 dark:to-emerald-800 rounded-lg p-5 border-l-4 border-green-400">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Platinum Tier</h4>
                    <span className="px-3 py-1 bg-white text-[#609966] text-xs font-bold rounded-full">Elite</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    VIP training, full software suite, dedicated mentorship, priority support, and maximized revenue sharing.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Portal */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure Client Portal System
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                A secure, user-friendly portal for tax clients to manage their tax preparation process:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>Encrypted document upload system for tax forms and supporting documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>Real-time status tracking of tax return preparation progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>Direct messaging with assigned tax professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>E-signature capabilities for required authorizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>Access to previous years' returns and tax documents</span>
                </li>
              </ul>
            </div>

            {/* Revenue Sharing */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Revenue-Sharing Dashboard
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Custom-built dashboard for mentorship participants to track their earnings and business growth:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-[#609966] mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong className="text-gray-900 dark:text-white">Dashboard Features:</strong>
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#609966] font-mono text-sm mt-0.5">✓</span>
                    <span>Real-time revenue tracking with transparent calculation breakdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#609966] font-mono text-sm mt-0.5">✓</span>
                    <span>Client acquisition metrics and conversion analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#609966] font-mono text-sm mt-0.5">✓</span>
                    <span>Performance comparisons across mentorship tiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#609966] font-mono text-sm mt-0.5">✓</span>
                    <span>Automated payout scheduling and payment history</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Core Platform</h4>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'PHP', 'MySQL', 'Custom Theme', 'WooCommerce'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Plugins & Extensions</h4>
                <div className="flex flex-wrap gap-2">
                  {['Advanced Custom Fields', 'Gravity Forms', 'MemberPress', 'WP Mail SMTP'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Security & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['SSL/TLS', 'Cloudflare', 'Wordfence', 'Backup System', 'CDN'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Key Features
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Professional Tax Services",
                  description: "Expert tax preparation for individuals and businesses with transparent pricing, refund maximization guarantees, and year-round support.",
                  icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                },
                {
                  title: "Three-Tiered Mentorship Programs",
                  description: "Silver, Gold, and Platinum levels offering varying degrees of training, software access, support, and revenue-sharing opportunities.",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                },
                {
                  title: "Comprehensive Training Curriculum",
                  description: "Step-by-step training modules covering tax law, software usage, client acquisition, business operations, and marketing strategies.",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                {
                  title: "Revenue-Sharing Model",
                  description: "Transparent profit-sharing structure for mentorship participants with real-time earnings tracking and automated payouts.",
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Secure Client Portal",
                  description: "Encrypted document management, real-time status tracking, e-signatures, and direct communication with tax professionals.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: "Software Access & Tools",
                  description: "Professional tax preparation software, CRM systems, marketing templates, and business management tools for mentorship participants.",
                  icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                },
                {
                  title: "Appointment Scheduling System",
                  description: "Integrated booking system for tax consultations with calendar sync, automated reminders, and virtual meeting capabilities.",
                  icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                {
                  title: "Marketing & Business Support",
                  description: "Pre-built marketing materials, brand guidelines, social media templates, and ongoing strategic guidance for business growth.",
                  icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 items-start bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#609966] to-[#9DC08B] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Technical Challenges & Solutions
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Balancing Dual Purposes Without Confusion</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  The platform needed to serve two distinct audiences with different goals without creating a confusing
                  or cluttered user experience that could deter either group.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Implemented intelligent
                  navigation with clear CTAs that segment users early in their journey. Created separate landing pages
                  optimized for each audience with distinct value propositions. Used conditional menus that show relevant
                  options based on user type, and designed clear visual distinction between service and mentorship sections
                  while maintaining brand consistency.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Data Security for Financial Information</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Handling sensitive tax documents and personal financial information required implementing robust security
                  measures to protect client data and maintain compliance with data protection regulations.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Implemented end-to-end
                  encryption for all document uploads and storage. Added two-factor authentication for portal access,
                  regular security audits with Wordfence, and automated backup systems. Created secure, time-limited
                  access tokens for document viewing and integrated SSL certificates throughout the entire platform.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Complex Revenue-Sharing Calculations</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Accurately tracking and calculating revenue shares across three mentorship tiers with varying percentages,
                  bonus structures, and performance metrics required sophisticated automation.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Developed custom WordPress
                  plugins with automated calculation engines that track all transactions, apply tier-specific formulas,
                  and generate detailed reports. Built a transparent dashboard showing real-time earnings with full
                  calculation breakdowns. Implemented automated email notifications for milestones and payouts, with
                  manual override capabilities for special circumstances.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Establishing Trust and Credibility</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  As a financial services platform, establishing immediate trust and professional credibility was critical,
                  especially for the mentorship program which required significant investment from participants.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Implemented a comprehensive
                  trust-building strategy including prominent display of certifications and credentials, detailed founder
                  biography with professional background, video testimonials from successful mentorship participants,
                  transparent pricing with no hidden fees, money-back guarantee policies, and third-party trust badges.
                  Added social proof through success metrics and case studies.
                </p>
              </div>
            </div>
          </div>

          {/* Impact & Results */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Impact & Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-green-200 dark:border-green-800 text-center">
                <div className="text-4xl font-bold text-[#609966] mb-2">150+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Active Mentees</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  across all mentorship tiers
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-green-200 dark:border-green-800 text-center">
                <div className="text-4xl font-bold text-[#609966] mb-2">3,200+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Tax Returns Filed</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  annually through the platform
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-green-200 dark:border-green-800 text-center">
                <div className="text-4xl font-bold text-[#609966] mb-2">94%</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Client Satisfaction</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  rated excellent or outstanding
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Empire Tax Solutions has successfully created a thriving ecosystem that benefits both tax clients and
              aspiring entrepreneurs. The platform has helped launch over 150 independent tax businesses through its
              mentorship programs, with many participants achieving full-time income within their first tax season.
              The structured training and ongoing support have resulted in a 94% satisfaction rate among both clients
              and mentorship participants.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              The dual-purpose model has proven highly successful, with the tax service side providing steady revenue
              while the mentorship programs create a growing network of trained professionals who extend the Empire Tax
              Solutions brand. The transparent revenue-sharing model has built trust and loyalty, with high retention
              rates and numerous success stories of participants building six-figure businesses.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-[#609966] to-[#9DC08B] rounded-full"></span>
              Future Enhancements
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Mobile App Development:</strong> Create native iOS and Android apps for on-the-go access to client portals, training materials, and revenue dashboards.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Video Training Library:</strong> Expand training content with interactive video courses, live webinars, and recorded Q&A sessions for mentorship participants.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Community Forum:</strong> Build a private community platform where mentorship participants can network, share strategies, and support each other.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Advanced Analytics:</strong> Provide detailed business intelligence dashboards with predictive analytics, client retention metrics, and market insights.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">AI-Powered Tax Assistant:</strong> Integrate AI chatbot to answer common tax questions, provide preliminary tax estimates, and guide users through document preparation.</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-[#609966] to-[#9DC08B] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Empowering Financial Freedom & Entrepreneurship</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Empire Tax Solutions demonstrates the power of innovative platform design that serves multiple audiences
                without compromising the experience for either. By combining professional tax services with structured
                business mentorship, the platform creates a sustainable ecosystem that benefits clients, entrepreneurs,
                and the core business.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project showcases expertise in WordPress development, dual-purpose platform architecture, financial
                services UX design, and complex business logic implementation—creating a solution that not only serves
                immediate needs but builds long-term relationships and empowers individuals to build their own financial empires.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg border border-gray-300 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#609966] to-[#9DC08B] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Back to Top
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmpireTaxSolutions;
