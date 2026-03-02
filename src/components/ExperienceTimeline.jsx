import React, { useState, useEffect, useRef } from 'react';

const ExperienceTimeline = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Fiverr & Freelancer',
      duration: 'Feb 2025 - Present',
      location: 'Remote',
      description:
        'Delivered WordPress and React.js solutions to international clients with a focus on performance and user experience.',
      responsibilities: [
        'Developed WordPress websites with custom themes and Elementor',
        'Built responsive React.js applications',
        'Delivered 6 client projects with on-time delivery',
      ],
      technologies: [
        'WordPress',
        'React.js',
        'Elementor',
        'JavaScript',
        'SEO',
      ],
      achievements: [],
    },
    {
      title: 'Web Developer',
      company: 'Arkidu Development',
      duration: 'April 2024 - Feb 2025',
      location: 'Islamabad, Remote',
      description:
        'Built and customized responsive WordPress websites with focus on user experience and SEO.',
      responsibilities: [
        'Developed WordPress websites using Elementor',
        'Implemented plugins and custom functionality',
        'Applied SEO best practices',
      ],
      technologies: [
        'WordPress',
        'Elementor',
        'PHP',
        'JavaScript',
      ],
      achievements: [],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-bg-subtle dark:bg-darksubtle relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-ink-primary dark:text-darkink-primary text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-ink-muted dark:text-darkink-muted text-center text-lg mb-16">
          My journey in web development
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Desktop Center, Mobile Left */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-500 hidden sm:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`experience-card relative ${
                  index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute hidden md:block top-8 ${
                    index % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'
                  } w-4 h-4 bg-primary-500 rounded-full border-4 border-bg-surface dark:border-darksurface z-10`}
                ></div>

                {/* Mobile Timeline Dot */}
                <div className="absolute md:hidden left-[27px] top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-bg-surface dark:border-darksurface z-10"></div>

                {/* Card Content */}
                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } bg-bg-surface dark:bg-darksurface border border-border dark:border-darkborder rounded-2xl p-8 hover:bg-bg-subtle dark:hover:bg-darksubtle hover:border-primary-500 hover:scale-[1.02] transition-all duration-500 transform ${
                    visibleCards.includes(index)
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Job Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">
                    {exp.title}
                  </h3>

                  {/* Company & Duration */}
                  <div className="flex flex-wrap items-center gap-2 text-ink-secondary dark:text-darkink-secondary mb-4">
                    <span className="text-lg font-bold">{exp.company}</span>
                    <span className="text-ink-muted dark:text-darkink-muted">•</span>
                    <span className="text-sm">{exp.duration}</span>
                    <span className="text-ink-muted dark:text-darkink-muted">•</span>
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-ink-muted dark:text-darkink-muted mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-ink-muted dark:text-darkink-muted text-sm"
                        >
                          <svg
                            className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-soft text-primary-500 border border-border rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.achievements.length > 0 && (
                    <>
                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-ink-primary dark:text-darkink-primary mb-3">
                          Notable Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-ink-muted dark:text-darkink-muted text-sm"
                            >
                              <svg
                                className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
