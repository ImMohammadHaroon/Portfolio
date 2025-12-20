import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillsData = {
    frontend: [
      { name: 'HTML5', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', level: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Python', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
    tools: [
      { name: 'WordPress', level: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Git', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
    other: [
      { name: 'Figma', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Photoshop', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'MySQL', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  };

  const SkillCard = ({ name, level, icon, index, category }) => {
    const colors = {
      frontend: 'from-blue-500 to-indigo-600',
      backend: 'from-purple-500 to-pink-600',
      tools: 'from-green-500 to-emerald-600',
      other: 'from-orange-500 to-red-600',
    };

    return (
      <div
        className={`group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Icon */}
        <div className={`w-14 h-14 bg-gradient-to-br ${colors[category]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 p-2`}>
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>

        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{name}</h3>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
            <span className={`font-bold bg-gradient-to-r ${colors[category]} bg-clip-text text-transparent`}>
              {level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${colors[category]} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: isVisible ? `${level}%` : '0%' }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={skillsRef} id="skills" className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></span>
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} category="frontend" />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></span>
            Backend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.backend.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} category="backend" />
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3"></span>
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.tools.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} category="tools" />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-3"></span>
            Other Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.other.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} category="other" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
