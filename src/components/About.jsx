import React from 'react';
import stackImage from '../assets/about/image.jpg';

const About = () => {
  return (
    <section id="about" className="bg-[#0326fc] pt-16 sm:pt-20 pb-24 sm:pb-40 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[300px] lg:w-[350px] shrink-0 mt-8 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-24 sm:-top-32 left-1/2 w-3 h-32 sm:h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-5 sm:-top-6 left-1/2 w-5 sm:w-6 h-10 sm:h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            <div className="bg-gray-900 w-full max-w-[240px] sm:max-w-[280px] rounded-2xl p-3 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 text-white">
              <div className="absolute -top-3 left-1/2 w-14 sm:w-16 h-5 sm:h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border border-white/10 mb-3 sm:mb-4">
                <img 
                  src={stackImage} 
                  alt="Abdul Hannan" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider">Abdul Hannan</h4>
                <p className="text-[10px] sm:text-xs font-bold text-[#0326fc] uppercase tracking-widest mt-0.5">AI Product Engineer</p>
                <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/10 flex justify-between text-[10px] sm:text-[11px] text-gray-400 font-mono">
                  <span>ID: AH-2026X</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Bio */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-6 md:mt-0 relative z-20 min-w-0">
          <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-black text-white text-[10px] sm:text-xs font-black tracking-widest uppercase mb-3 sm:mb-4">
            About Me
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 sm:mb-4 leading-tight">
            Hi, I'm Abdul Hannan
          </h2>

          <p className="text-[#000] font-black text-base sm:text-xl mb-2 sm:mb-3 uppercase tracking-wide">
            Software Engineer | Founder @ClinicFlowPro & @workroomWR
          </p>

          <p className="text-xs sm:text-sm md:text-base font-medium mb-3 sm:mb-4 leading-relaxed text-blue-100 max-w-3xl">
            I taught myself to code in 2022 with no CS degree and no bootcamp, just a laptop and way too much stubbornness. That stubbornness turned into a career fast: freelance PHP work that never stopped, and before I knew it, I had shipped over 100 projects and won 7 hackathons.
          </p>

          <p className="text-xs sm:text-sm md:text-base font-medium mb-3 sm:mb-4 leading-relaxed text-blue-100 max-w-3xl">
            My go-to stack is <strong className="text-black font-black">PHP, MySQL, Tailwind, and vanilla JavaScript</strong>. I sprinkle in AI wherever it genuinely solves a problem, not just to slap it on a pitch deck. I've built everything from clinic management platforms to student job portals, and I'm currently pouring my energy into <a href="https://workroom-by-hb.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black font-black underline hover:text-[#0326fc] transition-colors">workroomWR</a>.
          </p>

          <p className="text-xs sm:text-sm md:text-base font-medium mb-6 sm:mb-8 leading-relaxed text-blue-100 max-w-3xl">
            What drives me is building software that actually works for real people, especially non-technical teams who just need things to run smoothly. If that sounds like your kind of project, let's talk.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-wider">Location</span>
              <span className="text-xs sm:text-sm font-bold text-white">Karachi, Sindh, Pakistan</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-wider">Email</span>
              <a href="mailto:projects.abdulhannan@gmail.com" className="text-xs sm:text-sm font-bold text-white hover:underline break-all">projects.abdulhannan@gmail.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-wider">Phone</span>
              <a href="tel:+923171243725" className="text-xs sm:text-sm font-bold text-white hover:underline">+92 317 1243 725</a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-wider">Top Skills</span>
              <span className="text-xs sm:text-sm font-bold text-white">PAAS, Website Building, AI Products</span>
            </div>
          </div>

          {/* Instagram CTA */}
          <a 
            href="https://www.instagram.com/hannanbuilds/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between bg-black text-white p-4 sm:p-5 rounded-2xl border border-white/20 hover:bg-gray-950 transition-all duration-300 group shadow-xl"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                📸
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Follow on Instagram</div>
                <div className="text-sm sm:text-base font-black text-white group-hover:text-[#0326fc] transition-colors truncate">@hannanbuilds ↗</div>
              </div>
            </div>
            <div className="hidden sm:flex px-4 py-2 rounded-full bg-white/10 text-xs font-bold text-white group-hover:bg-[#0326fc] shrink-0">
              Follow
            </div>
          </a>

        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 sm:h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse hidden sm:block">
        <svg className="w-12 sm:w-16 h-12 sm:h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
