import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050508] text-[#d4d4d4] py-10 sm:py-16 px-4 sm:px-6 md:px-12 w-full font-mono text-[8px] sm:text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[40vh] sm:min-h-[50vh] border-t border-gray-900">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white uppercase tracking-wider text-[10px] sm:text-xs">Software Engineer</p>
          <p className="text-[9px] sm:text-[10px] md:text-xs">Founder @ClinicFlowPro & @workroomWR</p>
          <p className="text-[9px] sm:text-[10px] md:text-xs">Karachi, Sindh, Pakistan</p>
        </div>
        
        <div className="flex flex-col gap-1.5 sm:gap-2 sm:items-center">
          <p className="font-bold text-white uppercase tracking-wider text-[10px] sm:text-xs">100+ Projects Shipped</p>
          <a href="#projects" className="underline hover:text-[#0245ec] transition-colors underline-offset-4 decoration-1 font-bold text-[9px] sm:text-[10px] md:text-xs">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-end">
          <p className="font-bold text-[#d9ff3a] text-[10px] sm:text-xs">Available For Freelance & Roles</p>
          <p className="text-[9px] sm:text-[10px] md:text-xs">Karachi, Pakistan</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-10 sm:py-16 md:py-20 overflow-hidden">
        <h2 className="text-[10vw] sm:text-[11vw] md:text-[9vw] leading-none font-sans font-black tracking-tighter uppercase select-none text-white/90 w-full text-center">
          ABDUL HANNAN
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-sans flex-wrap">
            <a href="https://www.linkedin.com/in/abdulhannan-projects/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0245ec] transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/hannanbuilds/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0245ec] transition-colors">Instagram</a>
            <a href="mailto:projects.abdulhannan@gmail.com" className="hover:text-[#0245ec] transition-colors">Email</a>
            <a href="tel:+923171243725" className="hover:text-[#0245ec] transition-colors">Phone</a>
          </div>
          <p className="text-white/60 font-mono text-[8px] sm:text-[10px]">
            &copy; 2026 Abdul Hannan · All rights reserved
          </p>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-center">
          <a href="mailto:projects.abdulhannan@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 text-xs sm:text-sm font-mono text-[#0245ec] break-all">
            projects.abdulhannan@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 sm:items-end text-white/50 text-[8px] sm:text-[10px]">
          <p>7x Hackathon Winner · 100+ Projects Shipped</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
