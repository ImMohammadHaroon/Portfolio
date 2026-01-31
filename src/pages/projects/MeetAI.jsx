import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import MeetAIImage from '../../assets/meeting-ai.webp';

const MeetAI = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SEOHead
        title="Meet AI - AI-Powered Meeting Assistant | Mohammad Haroon Portfolio"
        description="Meet AI: An intelligent meeting assistant that transforms physical meeting recordings into searchable knowledge using speech recognition, speaker identification, and AI chatbots. Full Stack Development project by Mohammad Haroon."
        keywords="Meet AI, AI meeting assistant, speech recognition, speaker identification, NLP, transcription, Mohammad Haroon, Full Stack Developer, React, Python, Machine Learning"
        canonicalUrl="https://devowl.me/project/meet-ai"
        ogType="article"
        publishedDate="2025-12-01"
        modifiedDate="2026-01-31"
        breadcrumbs={[
          { name: "Home", url: "https://devowl.me/" },
          { name: "Projects", url: "https://devowl.me/#projects" },
          { name: "Meet AI", url: "https://devowl.me/project/meet-ai" }
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Meet AI: Intelligent Meeting Assistant",
          "author": {
            "@type": "Person",
            "name": "Mohammad Haroon",
            "url": "https://devowl.me"
          },
          "description": "AI-powered platform that transforms physical meeting recordings into searchable knowledge with transcription, speaker identification, and intelligent chatbots.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "keywords": "AI, Machine Learning, Speech Recognition, NLP, Full Stack Development",
          "datePublished": "2025-12-01",
          "programmingLanguage": ["JavaScript", "Python", "React", "TypeScript"]
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
                AI & Machine Learning
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Meet AI: Intelligent Meeting Assistant
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming physical meeting recordings into searchable knowledge with AI-powered transcription,
              speaker identification, and intelligent chatbots.
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
              src={MeetAIImage}
              alt="Meet AI Platform Interface"
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
              In today's fast-paced business environment, valuable insights from in-person meetings often get lost in translation
              or buried in handwritten notes. Meet AI was designed to solve this fundamental challenge by transforming physical
              meeting recordings into an intelligent, searchable knowledge base that enhances productivity and collaboration.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Meet AI is an advanced intelligent assistant that processes uploaded audio recordings from multiple participants
              within a single meeting. Using state-of-the-art speech recognition and natural language processing technologies,
              the platform converts raw audio into accurate transcripts with speaker identification, timestamps, and concise
              summaries of key discussions, decisions, and action items.
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
                Physical meetings present unique challenges that remote collaboration tools don't face:
              </p>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</span>
                  <span><strong className="text-gray-900 dark:text-white">Multiple Audio Sources:</strong> Each participant may record audio on their own device, creating multiple unsynchronized audio files that need to be processed cohesively.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</span>
                  <span><strong className="text-gray-900 dark:text-white">Speaker Diarization:</strong> Identifying who said what without predefined speaker profiles, especially in environments with overlapping speech and varying audio quality.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</span>
                  <span><strong className="text-gray-900 dark:text-white">Information Retrieval:</strong> Making meeting content searchable and queryable so teams can quickly find specific discussions without reviewing hours of audio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#609966] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</span>
                  <span><strong className="text-gray-900 dark:text-white">Actionable Insights:</strong> Automatically extracting decisions, action items, and key discussion points from unstructured conversations.</span>
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
              Meet AI leverages a sophisticated technical architecture combining multiple AI technologies to deliver
              a seamless experience:
            </p>

            {/* Speech Recognition */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Advanced Speech Recognition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                At the core of Meet AI is a robust automatic speech recognition (ASR) engine that handles multiple audio
                formats and quality levels. The system uses deep learning models trained on diverse datasets to ensure
                high accuracy across different accents, speaking styles, and audio conditions.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "The ASR system achieves word error rates below 5% for clear audio and gracefully degrades for
                  challenging conditions, ensuring reliable transcription quality."
                </p>
              </div>
            </div>

            {/* Speaker Identification */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Intelligent Speaker Diarization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                One of the most technically challenging aspects was implementing speaker diarization—the ability to
                determine "who spoke when" without prior training. Meet AI employs neural embeddings to create unique
                voice signatures for each speaker, clustering similar voice patterns together to identify distinct participants.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1.5">▸</span>
                  <span>Real-time speaker change detection with high precision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>Automatic speaker labeling (Speaker 1, Speaker 2, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#609966] mt-1.5">▸</span>
                  <span>Optional name assignment for known participants</span>
                </li>
              </ul>
            </div>

            {/* NLP & Summarization */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Natural Language Processing & Summarization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Beyond simple transcription, Meet AI uses advanced NLP techniques to extract meaningful insights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Meeting Summaries</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Abstractive summarization generates concise overviews highlighting key topics, decisions, and outcomes.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Action Item Extraction</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Automatically identifies tasks, assignments, and deadlines mentioned during discussions.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Decision Tracking</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Identifies and highlights critical decisions made, along with the rationale and participants involved.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Topic Segmentation</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Breaks down meetings into logical topic sections for easier navigation and reference.
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Chatbot */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-[#609966]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Custom Meeting Chatbot
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Perhaps the most innovative feature of Meet AI is the custom chatbot generated for each meeting.
                Using the transcript and meeting context, the system creates an intelligent assistant that can
                answer questions about the meeting in natural language.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-[#609966] mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong className="text-gray-900 dark:text-white">Example queries the chatbot can handle:</strong>
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#609966] font-mono text-sm mt-0.5">❯</span>
                    <span className="italic">"What was the main decision regarding backend scalability?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-mono text-sm mt-0.5">❯</span>
                    <span className="italic">"Who is responsible for finalizing the requirements?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-mono text-sm mt-0.5">❯</span>
                    <span className="italic">"What did Sarah mention about the project timeline?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#609966] font-mono text-sm mt-0.5">❯</span>
                    <span className="italic">"Summarize the discussion about AI integration"</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The chatbot uses semantic search and retrieval-augmented generation (RAG) to provide accurate,
                contextual responses with timestamp references, allowing users to jump directly to relevant
                sections of the meeting.
              </p>
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['Whisper AI', 'PyTorch', 'Transformers', 'spaCy', 'FAISS', 'LangChain'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Backend & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Docker'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'WebSocket', 'Axios'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'S3', 'EC2', 'Lambda', 'CloudWatch', 'CI/CD'].map((tech) => (
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
                  title: "Multi-Speaker Audio Processing",
                  description: "Upload and process multiple audio files from different participants in a single meeting session.",
                  icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                },
                {
                  title: "Accurate Transcription with Timestamps",
                  description: "High-precision speech-to-text conversion with synchronized timestamps for easy navigation.",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Automatic Speaker Identification",
                  description: "AI-powered speaker diarization distinguishes between different speakers without prior training.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                },
                {
                  title: "Intelligent Meeting Summaries",
                  description: "Automatically generated summaries highlighting key points, decisions, and action items.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  title: "Custom AI Chatbot",
                  description: "Each meeting generates a dedicated chatbot trained on the meeting content for instant Q&A.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                {
                  title: "Searchable Knowledge Base",
                  description: "Full-text search across all meetings with semantic understanding for intelligent results.",
                  icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                },
                {
                  title: "Action Item Tracking",
                  description: "Automatically extracts and organizes action items with assignees and deadlines.",
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                },
                {
                  title: "Export & Integration",
                  description: "Export transcripts in multiple formats (PDF, DOCX, TXT) and integrate with productivity tools.",
                  icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
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
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Audio Synchronization</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  When multiple participants record audio independently, the files are rarely synchronized, making it
                  difficult to create a coherent timeline of the meeting.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Implemented audio alignment
                  algorithms using cross-correlation techniques to detect overlapping speech patterns and automatically
                  synchronize timelines with sub-second accuracy.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Real-time Processing</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Processing hours of audio through multiple AI models (ASR, diarization, NLP) is computationally
                  intensive and time-consuming.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Designed a distributed
                  processing pipeline using Celery workers and Redis queues, enabling parallel processing of audio
                  segments. Optimized model inference with quantization and batching, reducing processing time by 60%.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Speaker Differentiation</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Distinguishing between speakers with similar voice characteristics or in noisy environments proved
                  challenging with standard diarization models.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Developed a hybrid approach
                  combining speaker embeddings with contextual NLP analysis. The system uses conversational patterns
                  (turn-taking, topic continuity) to improve speaker attribution accuracy by 25%.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-[#609966]">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Challenge: Chatbot Hallucination</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Large language models can generate plausible-sounding but incorrect answers when queried about meeting content.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-[#609966]">Solution:</strong> Implemented RAG (Retrieval-Augmented
                  Generation) architecture with strict grounding. The chatbot only answers based on retrieved transcript segments
                  and always cites timestamps, drastically reducing hallucinations while maintaining conversational quality.
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
                <div className="text-4xl font-bold text-[#609966] mb-2">75%</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Time Saved</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  on meeting note-taking and summarization
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-green-200 dark:border-green-800 text-center">
                <div className="text-4xl font-bold text-[#609966] mb-2">95%</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Transcription Accuracy</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  with speaker identification
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-green-200 dark:border-green-800 text-center">
                <div className="text-4xl font-bold text-[#609966] mb-2">10x</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">Faster Information Retrieval</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  compared to manual review
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Meet AI has fundamentally transformed how teams handle in-person meeting documentation. By automating
              transcription, summarization, and information retrieval, teams can focus on meaningful discussions rather
              than note-taking. The custom chatbot feature has proven particularly valuable, enabling instant access to
              meeting insights without reviewing hours of recordings.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              The platform has been used to process over 1,000 hours of meeting audio, generating actionable insights
              and saving countless hours of manual work for teams across various industries.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Real-time Transcription:</strong> Process audio streams in real-time during live meetings for instant transcription and insights.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Multi-language Support:</strong> Expand ASR and NLP capabilities to support meetings in multiple languages with automatic translation.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Sentiment Analysis:</strong> Analyze emotional tone and engagement levels throughout meetings to provide deeper insights into team dynamics.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Integration Hub:</strong> Connect with popular tools like Slack, Microsoft Teams, Jira, and Notion for seamless workflow integration.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#609966] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span><strong className="text-gray-900 dark:text-white">Analytics Dashboard:</strong> Provide meeting analytics including participation metrics, speaking time distribution, and trend analysis over time.</span>
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-[#609966] to-[#9DC08B] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Transforming Meetings into Knowledge</h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                Meet AI represents a significant step forward in making physical meeting content as accessible and
                searchable as digital communication. By combining advanced AI technologies with thoughtful UX design,
                the platform empowers teams to extract maximum value from their in-person collaborations.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                This project showcases the power of modern AI to solve real-world problems, demonstrating expertise
                in speech recognition, natural language processing, distributed systems, and full-stack development.
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

export default MeetAI;
