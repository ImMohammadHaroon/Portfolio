import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FoncentraImage from '../../assets/foncentra.jpg';

const Foncentra = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNGgydi0yaC0ydjJ6bS00IDBoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyem0wLTRoMnYtMmgtMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#609966] text-white text-sm font-semibold rounded-full">
                E-Learning & Digital Publishing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Foncentra: Modern E-Learning Platform
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive digital reading and e-learning platform delivering valuable insights through blogs, 
              articles, and eBooks to help users achieve personal growth and productivity.
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
              src={FoncentraImage} 
              alt="Foncentra E-Learning Platform" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Project Overview */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-teal-600 to-green-600 rounded-full"></span>
              Project Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              In an era where personal development and continuous learning have become essential, Foncentra was created 
              to bridge the gap between quality educational content and accessible digital platforms. The platform serves 
              as a comprehensive e-learning and digital reading hub, offering users a curated collection of insights, 
              strategies, and knowledge to navigate real-life challenges.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Foncentra is a modern e-learning platform built with WordPress and enhanced with GSAP (GreenSock Animation 
              Platform) for smooth, engaging animations. The platform focuses on delivering valuable content through blogs, 
              articles, and eBooks that help users improve their productivity, develop a growth mindset, and achieve personal 
              transformation. With its clean, responsive design and intuitive user experience, Foncentra makes learning 
              accessible on any device, whether desktop, tablet, or mobile.
            </p>
          </div>

          {/* The Challenge */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></span>
              The Challenge
            </h2>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Creating an engaging e-learning platform that stands out requires addressing several key challenges:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</span>
                  <span><strong className="text-gray-900 dark:text-white">User Engagement & Retention:</strong> Keeping users engaged with educational content while maintaining a balance between informative and visually appealing design without overwhelming them.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</span>
                  <span><strong className="text-gray-900 dark:text-white">Content Organization & Discovery:</strong> Structuring diverse content types (blogs, articles, eBooks) in a way that makes discovery intuitive and navigation seamless for users with different interests.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</span>
                  <span><strong className="text-gray-900 dark:text-white">Reading Experience Optimization:</strong> Creating a comfortable, distraction-free reading environment with proper typography, spacing, and layout that works across all devices and screen sizes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</span>
                  <span><strong className="text-gray-900 dark:text-white">Performance with Rich Content:</strong> Ensuring fast load times despite hosting rich media content, animations, and large eBook files while maintaining smooth interactions.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Solution */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></span>
              Technical Solution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Foncentra leverages the power of WordPress combined with modern animation libraries to create an 
              engaging and performant e-learning experience:
            </p>

            {/* WordPress Foundation */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                WordPress Content Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Built on WordPress for its robust content management capabilities, Foncentra utilizes custom post types 
                for different content categories—blogs, articles, and eBooks—each with tailored fields and layouts. The 
                platform employs a custom theme developed from scratch to ensure complete control over design and functionality.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "WordPress's flexibility allowed for rapid content creation and management while maintaining the ability 
                  to customize every aspect of the user experience, from navigation to reading layouts."
                </p>
              </div>
            </div>

            {/* GSAP Animations */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                GSAP Animation Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                GSAP (GreenSock Animation Platform) brings the interface to life with smooth, high-performance animations 
                that enhance user experience without compromising performance:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1.5">▸</span>
                  <span>Smooth scroll animations that reveal content progressively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1.5">▸</span>
                  <span>Parallax effects on hero sections and feature images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1.5">▸</span>
                  <span>Stagger animations for content cards and lists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1.5">▸</span>
                  <span>Interactive hover effects and micro-interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1.5">▸</span>
                  <span>Page transition animations for seamless navigation</span>
                </li>
              </ul>
            </div>

            {/* Content Architecture */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                Smart Content Organization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The platform employs a sophisticated content architecture designed for optimal discovery and engagement:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Blogs & Articles</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Categorized by topics like productivity, mindset, and personal growth with tags for granular filtering.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">eBook Library</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Dedicated section for downloadable eBooks with preview capabilities and reading progress tracking.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learning Paths</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Curated content collections that guide users through structured learning journeys on specific topics.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsive Design */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Mobile-First Responsive Design
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                With a significant portion of users accessing content on mobile devices, Foncentra was built with a 
                mobile-first approach:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-teal-600 mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong className="text-gray-900 dark:text-white">Responsive Features:</strong>
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-mono text-sm mt-0.5">✓</span>
                    <span>Fluid typography that scales appropriately across all screen sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-mono text-sm mt-0.5">✓</span>
                    <span>Adaptive layouts that reflow content for optimal readability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-mono text-sm mt-0.5">✓</span>
                    <span>Touch-optimized navigation and interactive elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-mono text-sm mt-0.5">✓</span>
                    <span>Performance-optimized animations that adapt to device capabilities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reading Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Optimized Reading Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The platform prioritizes readability and user comfort through carefully considered design choices:
              </p>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 rounded-lg p-4 border-l-4 border-teal-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Typography & Spacing</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Carefully selected font families with optimal line heights, letter spacing, and comfortable reading widths.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border-l-4 border-green-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Dark Mode Support</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Automatic dark mode detection with manual toggle for reduced eye strain during extended reading sessions.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-lg p-4 border-l-4 border-emerald-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Progress Tracking</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Visual reading progress indicators and bookmark functionality to help users track their learning journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Core Platform</h4>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'PHP', 'MySQL', 'Custom Theme', 'Advanced Custom Fields'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-900/30 dark:to-green-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium rounded-full border border-teal-200 dark:border-teal-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Frontend & Animation</h4>
                <div className="flex flex-wrap gap-2">
                  {['GSAP', 'JavaScript', 'CSS3', 'HTML5', 'ScrollTrigger', 'jQuery'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full border border-green-200 dark:border-green-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Design & UI</h4>
                <div className="flex flex-wrap gap-2">
                  {['Responsive Design', 'Figma', 'Adobe XD', 'Custom Illustrations', 'Icon Sets'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium rounded-full border border-emerald-200 dark:border-emerald-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Performance & SEO</h4>
                <div className="flex flex-wrap gap-2">
                  {['WP Rocket', 'Yoast SEO', 'Cloudflare', 'Image Optimization', 'Lazy Loading'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-800">
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
              <span className="w-2 h-8 bg-gradient-to-b from-orange-600 to-red-600 rounded-full"></span>
              Key Features
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Comprehensive Content Library",
                  description: "Extensive collection of blogs, articles, and eBooks covering productivity, mindset development, and personal growth strategies.",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                {
                  title: "GSAP-Powered Animations",
                  description: "Smooth, performant animations throughout the interface including scroll effects, parallax, and micro-interactions that enhance engagement.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "Advanced Search & Filtering",
                  description: "Powerful search functionality with category filters, tag-based navigation, and content recommendations based on user interests.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  title: "Optimized Reading Interface",
                  description: "Clean, distraction-free reading mode with customizable typography, dark mode support, and progress tracking for long-form content.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  title: "eBook Download & Management",
                  description: "Dedicated eBook section with preview capabilities, secure downloads, and personal library management for purchased books.",
                  icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                },
                {
                  title: "User Engagement Features",
                  description: "Comments system, social sharing, bookmarking, reading lists, and newsletter subscription for community building.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                {
                  title: "Learning Progress Tracking",
                  description: "Track reading progress across articles and eBooks with visual indicators, bookmarks, and completion certificates.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                },
                {
                  title: "Responsive Across All Devices",
                  description: "Seamless experience on desktop, tablet, and mobile with adaptive layouts and touch-optimized navigation.",
                  icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 items-start bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center">
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
              <span className="w-2 h-8 bg-gradient-to-b from-red-600 to-pink-600 rounded-full"></span>
              Technical Challenges & Solutions
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/10 dark:to-green-900/10 rounded-xl p-6 border-l-4 border-teal-600">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Animation Performance on Content-Heavy Pages</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  With multiple GSAP animations running simultaneously on pages with heavy content, maintaining smooth 60fps 
                  performance across all devices, especially lower-end mobile devices, was challenging.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-teal-600 dark:text-teal-400">Solution:</strong> Implemented lazy initialization 
                  of GSAP animations using ScrollTrigger, only activating animations when elements enter the viewport. Added 
                  matchMedia queries to disable complex animations on lower-powered devices. Used GPU-accelerated transforms 
                  and reduced animation complexity on mobile, achieving consistent 60fps across all devices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 border-l-4 border-green-600">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Content Discovery & Navigation</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  With hundreds of articles and multiple content types, users struggled to find relevant content and navigate 
                  between related topics effectively.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-green-600 dark:text-green-400">Solution:</strong> Developed a smart taxonomy system 
                  combining categories and tags with a custom-built recommendation engine. Implemented breadcrumb navigation, 
                  related content suggestions, and a visual content map. Added Ajax-powered filtering that updates results 
                  without page reloads, improving user engagement by 45%.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border-l-4 border-blue-600">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: eBook Delivery & Security</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Protecting digital eBooks from unauthorized distribution while providing a smooth download experience for 
                  legitimate users required careful implementation.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-blue-600 dark:text-blue-400">Solution:</strong> Implemented time-limited download 
                  links with unique tokens for each user. Added watermarking to PDFs with user information to discourage sharing. 
                  Created a secure download manager that verifies user authentication and purchase status before serving files. 
                  Integrated with WordPress's built-in user roles for granular access control.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl p-6 border-l-4 border-purple-600">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Reading Experience Consistency</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ensuring a consistent, comfortable reading experience across different content types, authors, and devices 
                  while maintaining brand identity was complex.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-purple-600 dark:text-purple-400">Solution:</strong> Developed a custom WordPress 
                  editor template with predefined styles and content blocks that authors must use. Created a design system 
                  with standardized typography scales, spacing units, and color schemes. Implemented automatic formatting 
                  cleanup on save to prevent style inconsistencies. Added reader preferences for font size and line spacing 
                  that persist across sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Impact & Results */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-yellow-600 to-orange-600 rounded-full"></span>
              Impact & Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-8 border border-teal-200 dark:border-teal-800 text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">85%</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">User Engagement Rate</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  visitors exploring multiple articles
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800 text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">4.2min</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Average Reading Time</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  per article session
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800 text-center">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">500+</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Published Content</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  articles and eBooks available
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Foncentra has successfully established itself as a trusted resource for personal development and learning. 
              The platform's engaging design and smooth animations have contributed to an 85% engagement rate, with users 
              regularly exploring multiple articles and spending an average of 4.2 minutes per reading session—significantly 
              above industry standards.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              The combination of WordPress's content management capabilities with GSAP's animation power has created a 
              platform that's both beautiful and functional. User feedback consistently highlights the clean design, smooth 
              interactions, and comfortable reading experience as key differentiators that keep them coming back for more content.
            </p>
          </div>

          {/* Future Enhancements */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
              Future Enhancements
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">AI-Powered Content Recommendations:</strong> Implement machine learning algorithms to provide personalized content suggestions based on reading history and interests.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Community Features:</strong> Add discussion forums, author Q&A sessions, and user-generated content contributions to build an active learning community.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Video Content Integration:</strong> Expand beyond text to include video courses, webinars, and multimedia learning experiences.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Mobile App Development:</strong> Create native iOS and Android apps with offline reading capabilities and enhanced mobile-specific features.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Certification Programs:</strong> Develop structured learning paths with assessments and certificates for completed courses and reading achievements.</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-teal-600 via-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Empowering Growth Through Education</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Foncentra demonstrates how thoughtful design and modern web technologies can create an engaging learning 
                platform that truly resonates with users. By combining WordPress's content management power with GSAP's 
                smooth animations, the platform delivers an experience that's both beautiful and functional.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project showcases expertise in WordPress theme development, animation implementation, user experience 
                design, and performance optimization—creating a platform that not only looks great but also genuinely helps 
                users on their journey of personal growth and continuous learning.
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
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
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

export default Foncentra;
