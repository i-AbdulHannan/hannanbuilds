import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { name: 'PHP', level: 'Advanced', icon: '🐘' },
    { name: 'MySQL', level: 'Advanced', icon: '🗄️' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: '🎨' },
    { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
    { name: 'HTML5', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3', level: 'Advanced', icon: '🖌️' },
    { name: 'WordPress', level: 'Intermediate', icon: '📰' },
    { name: 'AI Integration', level: 'Intermediate', icon: '🤖' },
    { name: 'Git & GitHub', level: 'Intermediate', icon: '🐙' },
    { name: 'SaaS Dev', level: 'Advanced', icon: '☁️' },
    { name: 'REST APIs', level: 'Advanced', icon: '🔗' },
    { name: 'Architecture', level: 'Intermediate', icon: '🏗️' },
    { name: 'Web Security', level: 'Intermediate', icon: '🔒' },
    { name: 'Vercel', level: 'Intermediate', icon: '▲' },
    { name: 'WhatsApp API', level: 'Intermediate', icon: '💬' },
    { name: 'Product Eng.', level: 'Advanced', icon: '🚀' },
  ];

  const coreProficiency = [
    { name: 'PHP & MySQL', percent: 92 },
    { name: 'Tailwind CSS & JavaScript', percent: 90 },
    { name: 'AI-Integrated Development', percent: 85 },
    { name: 'SaaS & Web Applications', percent: 88 },
    { name: 'WordPress & CMS', percent: 75 },
  ];

  return (
    <section id="skills" className="relative w-full bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-12 overflow-hidden font-sans border-t border-gray-100">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.04)_25%,transparent_26%),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.04)_25%,transparent_26%)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="inline-block border border-gray-200 rounded-full px-3 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 bg-gray-50">
            Skills & Technologies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-1.5 sm:mb-2">
            Technologies I Work With
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl">
            Hands-on experience across PHP backends, relational databases, frontend frameworks, and AI integration.
          </p>
        </div>

        <div className="mb-10 sm:mb-16 bg-gray-50/80 border border-gray-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm">
          <h3 className="text-base sm:text-lg font-black text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
            <span>⚡</span> Core Proficiency
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {coreProficiency.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 sm:gap-2">
                <div className="flex justify-between items-center text-[10px] sm:text-xs font-bold text-gray-800">
                  <span>{item.name}</span>
                  <span className="text-[#0326fc]">{item.percent}%</span>
                </div>
                <div className="w-full h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-gray-900 to-[#0326fc] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 md:gap-4">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#0326fc]/40 transition-all duration-300 group cursor-default"
            >
              <span className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{skill.icon}</span>
              <h4 className="text-[10px] sm:text-xs font-bold text-gray-900 mb-0.5">{skill.name}</h4>
              <span className="text-[8px] sm:text-[10px] text-gray-400 font-medium">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
