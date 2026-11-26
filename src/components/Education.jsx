import { motion } from 'framer-motion';

const Education = () => {
  const experience = [
    {
      id: 'exp-1',
      title: 'Founder & Software Engineer',
      company: 'hannanlabs',
      companyLink: 'https://hannanlabs.vercel.app/',
      date: 'Nov 2024 - Present',
      duration: '2 years',
      type: 'Current',
      tagColor: 'bg-[#d9ff3a]/15 text-[#d9ff3a] border-[#d9ff3a]/30',
      icon: '🚀',
      desc: 'My independent product studio. hannanlabs builds software that makes an owner\'s day easier and faster — SaaS products, web apps, dashboards and websites, mapped around how the business already works. 50+ projects since 2024, plus our own products like cl1nical, worthhype and Talent Tree.'
    },
    {
      id: 'exp-2',
      title: 'Co-founder & Software Engineer',
      company: 'think2ship',
      companyLink: 'https://think2ship.vercel.app/',
      date: 'Apr 2026 - Present',
      duration: '7 months',
      type: 'Current',
      tagColor: 'bg-[#d9ff3a]/15 text-[#d9ff3a] border-[#d9ff3a]/30',
      icon: '🛠️',
      desc: 'An AI agency I co-founded. think2ship helps founders and businesses use AI to build and ship products, websites and internal tools. It is an AI agency, not a product studio.'
    },
    {
      id: 'exp-3',
      title: 'Founder',
      company: 'cl1nical',
      companyLink: 'https://clinic-flow-landingpage.vercel.app/',
      date: 'Jan 2026 - Present',
      duration: '10 months',
      type: 'Product',
      tagColor: 'bg-[#d9ff3a]/15 text-[#d9ff3a] border-[#d9ff3a]/30',
      icon: '🏥',
      desc: 'An AI-powered clinic management platform built under hannanlabs. It connects appointments, patient records, prescriptions, billing and analytics into one workflow, with an AI symptom checker and WhatsApp integration.'
    },
    {
      id: 'exp-4',
      title: 'Modern Web Application Developer',
      company: 'S.M.I.T (Saylani Mass I.T Training)',
      date: 'Feb 2025 - Jul 2025',
      duration: '6 months',
      type: 'Training',
      tagColor: 'bg-white/10 text-white border-white/20',
      icon: '💻',
      desc: 'Dove deep into modern web frameworks and full-stack practices. This is where I sharpened my skills beyond just PHP and started thinking about product-level engineering.'
    },
    {
      id: 'exp-5',
      title: 'WordPress Developer',
      company: 'BrightCraft Digital LTD',
      date: 'Sep 2024 - Apr 2025',
      duration: '8 months',
      type: 'Freelance',
      tagColor: 'bg-white/5 text-gray-300 border-white/10',
      icon: '📰',
      desc: 'Built and customized WordPress sites for clients: themes, plugins, responsive design. Learned how to translate what clients actually want into working products.'
    },
    {
      id: 'exp-6',
      title: 'Full Stack Engineer',
      company: 'Debugging Bugz',
      date: 'Oct 2022 - Jun 2024',
      duration: '1 year 9 months',
      type: 'Full-time',
      tagColor: 'bg-white/5 text-gray-300 border-white/10',
      icon: '🔧',
      desc: 'Where it all started. Spent nearly two years building web apps end-to-end, frontend, backend, databases, the whole stack. This is where I went from "learning to code" to actually shipping.'
    },
    {
      id: 'exp-7',
      title: 'PHP Web Application Developer',
      company: 'Debugging Bugz',
      date: 'Feb 2022 - Aug 2022',
      duration: '7 months',
      type: 'Contract',
      tagColor: 'bg-white/5 text-gray-300 border-white/10',
      icon: '🐘',
      desc: 'My first real role. Started with PHP web apps and quickly realized I loved the backend logic side of things. Seven months that set the foundation for everything after.'
    }
  ];

  return (
    <section id="education" className="bg-black py-16 sm:py-20 px-4 sm:px-6 md:px-12 w-full text-white border-t border-gray-900 relative overflow-hidden">
      
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#d9ff3a]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="mb-10 sm:mb-16 text-left">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#d9ff3a]/10 border border-[#d9ff3a]/30 text-[#d9ff3a] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
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
            <h3 className="text-lg sm:text-xl font-extrabold text-[#d9ff3a] flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-2 sm:pb-3">
              <span>💼</span> Work Experience
            </h3>

            <div className="relative pl-5 sm:pl-6 border-l-2 border-[#d9ff3a]/30 flex flex-col gap-6 sm:gap-8">
              
              {experience.map((exp, idx) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#d9ff3a]/50 transition-colors shadow-lg"
                >
                  <div className="absolute -left-[27px] sm:-left-[31px] top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#d9ff3a] ring-3 sm:ring-4 ring-gray-950 shadow-[0_0_12px_rgba(217,255,58,0.8)]"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                    <span className={`text-[9px] sm:text-[11px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border ${exp.tagColor} uppercase tracking-wider self-start`}>
                      {exp.type}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-mono">{exp.date}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-white mt-1">{exp.title}</h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-300 mt-1">
                    {exp.companyLink ? (
                      <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#d9ff3a] hover:underline transition-colors">
                        {exp.company} ↗
                      </a>
                    ) : exp.company}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-2 sm:mt-3 leading-relaxed">{exp.desc}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-[#d9ff3a]">{exp.duration}</span>
                  </div>
                </motion.div>
              ))}

            </div>

            <div className="bg-gray-900/40 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-1 sm:mt-2">
              <h4 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2 sm:mb-3 flex items-center gap-2">
                <span>🌐</span> Languages
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full bg-[#d9ff3a]/10 border border-[#d9ff3a]/30 text-[#d9ff3a]">English</span>
                <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold rounded-full bg-white/5 border border-white/10 text-white/70">Urdu</span>
              </div>
            </div>

          </div>

          {/* Education Column */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2 sm:gap-3 border-b border-gray-800 pb-2 sm:pb-3">
              <span>🎓</span> Education
            </h3>

            <div className="relative pl-5 sm:pl-6 border-l-2 border-white/20 flex flex-col gap-6 sm:gap-8">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/30 transition-colors shadow-lg"
              >
                <div className="absolute -left-[27px] sm:-left-[31px] top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white ring-3 sm:ring-4 ring-gray-950 shadow-[0_0_12px_rgba(255,255,255,0.5)]"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                  <span className="text-[9px] sm:text-[11px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-white border border-white/20 uppercase tracking-wider self-start">
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
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-[#d9ff3a]">Software Engineering</span>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-white/70">Programming</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-gray-900/60 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/30 transition-colors shadow-lg"
              >
                <div className="absolute -left-[27px] sm:-left-[31px] top-5 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/60 ring-3 sm:ring-4 ring-gray-950 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                  <span className="text-[9px] sm:text-[11px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 uppercase tracking-wider self-start">
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
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-[#d9ff3a]">Web Development</span>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-white/70">Database</span>
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
