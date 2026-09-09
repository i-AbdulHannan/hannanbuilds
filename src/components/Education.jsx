import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const experience = [
    {
      id: 'exp-1',
      title: 'Founder & Product Engineer',
      company: 'workroomWR',
      date: 'May 2026 - Present',
      duration: '5 months',
      type: 'Current',
      tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      icon: '🚀',
      desc: 'Built workroomWR because I was tired of chasing clients over WhatsApp. It\'s a real-time dashboard where agencies and freelancers manage projects, files, payments, and approvals, all in one place.'
    },
    {
      id: 'exp-2',
      title: 'Modern Web Application Developer',
      company: 'S.M.I.T (Saylani Mass I.T Training)',
      date: 'Feb 2025 - Jul 2025',
      duration: '6 months',
      type: 'Training',
      tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: '💻',
      desc: 'Dove deep into modern web frameworks and full-stack practices. This is where I sharpened my skills beyond just PHP and started thinking about product-level engineering.'
    },
    {
      id: 'exp-3',
      title: 'WordPress Developer',
      company: 'BrightCraft Digital LTD',
      date: 'Sep 2024 - Apr 2025',
      duration: '8 months',
      type: 'Freelance',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: '📰',
      desc: 'Built and customized WordPress sites for clients: themes, plugins, responsive design. Learned how to translate what clients actually want into working products.'
    },
    {
      id: 'exp-4',
      title: 'Full Stack Engineer',
      company: 'Debugging Bugz',
      date: 'Oct 2022 - Jun 2024',
      duration: '1 year 9 months',
      type: 'Full-time',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: '🔧',
      desc: 'Where it all started. Spent nearly two years building web apps end-to-end, frontend, backend, databases, the whole stack. This is where I went from "learning to code" to actually shipping.'
    },
    {
      id: 'exp-5',
      title: 'PHP Web Application Developer',
      company: 'Debugging Bugz',
      date: 'Feb 2022 - Aug 2022',
      duration: '7 months',
      type: 'Contract',
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: '🐘',
      desc: 'My first real role. Started with PHP web apps and quickly realized I loved the backend logic side of things. Seven months that set the foundation for everything after.'
    }
  ];

  return (
    <section id="education" className="bg-[#0f0f18] py-16 sm:py-20 px-4 sm:px-6 md:px-12 w-full text-white border-t border-gray-900 relative overflow-hidden">
      
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-10 sm:mb-16 text-left">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Experience & Academics
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight mb-2 sm:mb-3">
            Education & Experience
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl font-normal">
            My journey from self-taught developer to building AI-powered SaaS products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Experience Column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-blue-400 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-2 sm:pb-3">
              <span>💼</span> Work Experience
            </h3>

            <div className="relative pl-5 sm:pl-6 border-l-2 border-blue-500/40 flex flex-col gap-6 sm:gap-8">
              
              {experience.map((exp, idx) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/50 transition-colors shadow-lg"
                >
                  <div className="absolute -left-[27px] sm:-left-[31px] top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 ring-3 sm:ring-4 ring-gray-950 shadow-[0_0_12px_rgba(3,38,252,0.8)]"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                    <span className={`text-[9px] sm:text-[11px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border ${exp.tagColor} uppercase tracking-wider self-start`}>
                      {exp.type}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-mono">{exp.date}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-white mt-1">{exp.title}</h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-300 mt-1">{exp.company}</p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3 leading-relaxed">{exp.desc}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-blue-300">{exp.duration}</span>
                  </div>
                </motion.div>
              ))}

            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-1 sm:mt-2">
              <h4 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2 sm:mb-3 flex items-center gap-2">
                <span>🌐</span> Languages
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">English</span>
                <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">Urdu</span>
              </div>
            </div>

          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-cyan-400 flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-2 sm:pb-3">
              <span>🎓</span> Education
            </h3>

            <div className="relative pl-5 sm:pl-6 border-l-2 border-cyan-500/40 flex flex-col gap-6 sm:gap-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-colors shadow-lg"
              >
                <div className="absolute -left-[27px] sm:-left-[31px] top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-500 ring-3 sm:ring-4 ring-gray-950 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                  <span className="text-[9px] sm:text-[11px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider self-start">
                    Associate's Degree
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-mono">2023 - 2026</span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-white mt-1">Computer Software Engineering</h4>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-300 mt-1">Aligarh College of Technology</p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3 leading-relaxed">
                  Building a solid foundation in software development, programming fundamentals, and system design.
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-cyan-300">Software Engineering</span>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-blue-300">Programming</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-emerald-500/50 transition-colors shadow-lg"
              >
                <div className="absolute -left-[27px] sm:-left-[31px] top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-500 ring-3 sm:ring-4 ring-gray-950 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                  <span className="text-[9px] sm:text-[11px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider self-start">
                    Completed
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-400 font-mono">Aug 2022 - Sep 2023</span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-white mt-1">Software Technology</h4>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-300 mt-1">Aptech Pakistan</p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3 leading-relaxed">
                  Where I first learned the ropes of web development and database management. The starting point of everything.
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-amber-300">Web Development</span>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-emerald-300">Database</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
