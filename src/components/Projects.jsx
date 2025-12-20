import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MeetAIImage from '../assets/Meet-ai.png';
import SyeenImage from '../assets/Syeen.png';
import EcommerceImage from '../assets/EcommerceProject.png';
import FoncentraImage from '../assets/foncentra.jpg';
import EmpireImage from '../assets/empire-solution.jpg';
import ApertureImage from '../assets/bluelines-lifeline-rag.jpg';

const Projects = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Meet AI: Intelligent Meeting Assistant',
      description: 'An AI-powered platform that transforms physical meeting recordings into searchable knowledge with automatic transcription, speaker identification, summaries, and custom chatbots for instant Q&A.',
      image: MeetAIImage,
      category: 'AI & Machine Learning',
      technologies: ['Python', 'React', 'Whisper AI', 'NLP', 'FastAPI', 'PostgreSQL'],
      link: '/project/meet-ai',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 2,
      title: 'Syeen: Talent & Business Collaboration Platform',
      description: 'A comprehensive WordPress-powered platform connecting businesses with top talent through intelligent job matching, streamlined applications, and real-time collaboration tools.',
      image: SyeenImage,
      category: 'Web Development',
      technologies: ['WordPress', 'PHP', 'Elementor', 'MySQL', 'JavaScript', 'AJAX'],
      link: '/project/syeen',
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      id: 3,
      title: 'GearNix: E-commerce Platform',
      description: 'A fully-functional e-commerce platform for gaming gear featuring React.js frontend, Node.js backend, and integrated payment processing with JazzCash, EasyPaisa, and bank cards.',
      image: EcommerceImage,
      category: 'Full-Stack Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment APIs', 'JWT'],
      link: '/project/ecommerce',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'Foncentra: E-Learning Platform',
      description: 'A modern digital reading and e-learning platform delivering valuable insights through blogs, articles, and eBooks with GSAP-powered animations and responsive design.',
      image: FoncentraImage,
      category: 'Web Development',
      technologies: ['WordPress', 'GSAP', 'JavaScript', 'CSS3', 'PHP', 'Custom Theme'],
      link: '/project/foncentra',
      gradient: 'from-teal-600 to-green-600'
    },
    {
      id: 5,
      title: 'Empire Tax Solutions: Building Tax Empires',
      description: 'A dual-purpose WordPress platform serving tax clients with professional services while empowering aspiring entrepreneurs through structured mentorship programs with three-tiered revenue-sharing models.',
      image: EmpireImage,
      category: 'Web Development',
      technologies: ['WordPress', 'PHP', 'WooCommerce', 'MemberPress', 'Payment Integration', 'Custom Theme'],
      link: '/project/empire-tax-solutions',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      id: 6,
      title: 'Aperture Futures: UN Security Council Intelligence',
      description: 'An AI-powered platform for UN Security Council intelligence featuring RAG architecture with three flagship products: BlueLines (resolution research), LiveLines (meeting analysis), and CrossLines (negotiation simulator).',
      image: ApertureImage,
      category: 'AI & Machine Learning',
      technologies: ['React', 'Python', 'Flask', 'RAG', 'LangChain', 'OpenAI', 'Vector DB'],
      link: '/project/aperture-futures',
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Web Development', 'Full-Stack Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={projectsRef} id="work" className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Explore my recent work showcasing web development expertise and creative solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-xs font-semibold text-gray-800 dark:text-white rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => navigate(project.link)}
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 text-gray-400 dark:text-gray-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found in this category</p>
          </div>
        )}

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Let's Build Something Together</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
