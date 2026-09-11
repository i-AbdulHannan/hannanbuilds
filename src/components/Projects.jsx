import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'ClinicFlow Pro',
      link: 'https://clinic-flow-landingpage.vercel.app/',
      category: 'ai',
      subtitle: 'AI-Powered Clinic Management',
      description: 'A 42-module clinic management platform with an AI symptom checker and WhatsApp integration. Handles patient records, appointments, billing, and real-time notifications.',
      technologies: ['PHP', 'MySQL', 'AI Integration', 'WhatsApp API'],
      badge: 'Flagship Product',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      icon: '🏥'
    },
    {
      id: 2,
      title: 'workroomWR',
      link: 'https://workroom-by-hb.vercel.app/',
      category: 'saas',
      subtitle: 'Client Transparency Dashboard',
      description: 'A real-time dashboard where agencies and freelancers manage projects, files, payments, and client approvals. No more scattered WhatsApp threads.',
      technologies: ['PHP', 'MySQL', 'Tailwind', 'JavaScript'],
      badge: 'In Development',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: '📋'
    },
    {
      id: 3,
      title: 'Talent Tree',
      category: 'web',
      subtitle: 'Student Job Platform',
      description: 'A student job platform that organically pulled in 12,000+ users in its first year. Connecting students with real opportunities across Pakistan.',
      technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      badge: '12K+ Users',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: '🌳'
    },
    {
      id: 4,
      title: 'AI Symptom Checker',
      category: 'ai',
      subtitle: 'Healthcare AI Tool',
      description: 'An AI-powered symptom checker embedded into ClinicFlow Pro. Gives preliminary assessments and routes patients to the right specialist.',
      technologies: ['AI/ML', 'PHP', 'REST API', 'WhatsApp'],
      badge: 'AI Integration',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: '🤖'
    },
    {
      id: 5,
      title: 'Client Portals',
      category: 'saas',
      subtitle: 'Project Management Tools',
      description: 'Internal tools built for client transparency: file sharing, payment tracking, approval workflows, and real-time status updates.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Tailwind'],
      badge: 'Multiple Clients',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: '📊'
    },
    {
      id: 6,
      title: 'SMB Web Solutions',
      category: 'web',
      subtitle: 'Business Websites & Tools',
      description: 'Over 100 projects shipped for founders and small businesses across Pakistan. From landing pages to full-scale web applications.',
      technologies: ['PHP', 'WordPress', 'Tailwind', 'MySQL'],
      badge: '100+ Shipped',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      icon: '🌐'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-[#05050a] py-16 sm:py-24 px-4 sm:px-6 md:px-12 w-full text-white relative overflow-hidden font-sans border-t border-gray-900">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-[#0326fc]/10 border border-[#0326fc]/30 text-[#0326fc] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Real-World Projects
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2 max-w-lg">
              AI-powered SaaS, websites & internal tools built for founders and SMBs.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 bg-gray-900/80 p-1 sm:p-1.5 rounded-full border border-gray-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'all' ? 'bg-[#0326fc] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              All (6)
            </button>
            <button
              onClick={() => setFilter('saas')}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'saas' ? 'bg-[#0326fc] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              SaaS
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'web' ? 'bg-[#0326fc] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Web
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'ai' ? 'bg-[#0326fc] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              AI
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/50 border border-gray-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-between hover:border-[#0326fc]/50 hover:shadow-[0_10px_30px_rgba(3,38,252,0.1)] transition-all duration-500 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gray-800 border border-gray-700/80 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className={`text-[8px] sm:text-[10px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                <span className="text-[9px] sm:text-[11px] font-bold text-[#0326fc] uppercase tracking-wider block mb-0.5 sm:mb-1">
                  {project.subtitle}
                </span>

                <h3 className="text-base sm:text-xl font-black text-white group-hover:text-[#0326fc] transition-colors mb-2 sm:mb-3">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title} <span className="text-sm">↗</span>
                    </a>
                  ) : project.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-gray-800/60">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-semibold rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/abdulhannan-projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 text-white font-bold text-xs sm:text-sm hover:border-[#0326fc] transition-all duration-300 shadow-xl group"
          >
            <span>View All Projects on LinkedIn</span>
            <span className="text-base sm:text-lg group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
