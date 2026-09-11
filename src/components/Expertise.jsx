import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-full sm:w-72 md:w-80 rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${isActive ? 'bg-[#d9ff3a] border-[#c4e633] shadow-[0_20px_50px_rgba(217,255,58,0.3)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
        }`}
    >
      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-3 sm:top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      <div className={`w-full h-full rounded-[1.2rem] sm:rounded-[1.5rem] mt-6 sm:mt-8 p-5 sm:p-6 md:p-8 flex flex-col min-h-[180px] sm:min-h-[220px] transition-colors duration-700 ${isActive ? 'bg-blue-700/50' : 'bg-[#f4f4f4]'
        }`}>
        <span className={`text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 font-serif italic transition-colors duration-700 ${isActive ? 'text-blue-200' : 'text-gray-400'
          }`}>{number}</span>

        <h3 className={`text-xl sm:text-2xl font-black mb-2 sm:mb-3 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-900'
          }`}>{title}</h3>

        <p className={`text-xs sm:text-sm leading-relaxed font-medium transition-colors duration-700 ${isActive ? 'text-blue-100' : 'text-gray-500'
          }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Expertise = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-white pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-10 sm:mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-4 sm:px-5 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-600 font-bold mb-6 sm:mb-8 shadow-sm bg-white">
            My Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-4 sm:mb-6 tracking-tight relative">
            Building AI-Powered Products & Scalable SaaS
            <svg className="absolute -bottom-8 sm:-bottom-10 right-6 sm:right-10 w-10 sm:w-12 h-10 sm:h-12 text-gray-800 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Full-stack development with PHP, MySQL, Tailwind, and vanilla JavaScript, integrated with AI wherever it actually solves a problem.
          </p>
        </div>

        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />
          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#0245ec"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#0245ec"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-8 sm:pb-12 md:pb-0">

          <TagCard
            number="01"
            title="PHP & MySQL Backend"
            text="Building robust backend systems, RESTful APIs, and database-driven applications with PHP, MySQL, and efficient data architecture."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-1 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />
          <TagCard
            number="02"
            title="Full Stack Web Dev"
            text="Crafting responsive frontends with Tailwind CSS, vanilla JavaScript, and modern UI/UX principles for fast, accessible web applications."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-1 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="03"
            title="AI-Integrated Products"
            text="Integrating AI where it actually solves problems, from symptom checkers to smart dashboards. Not just bolted on for demos."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard
            number="04"
            title="SaaS & Client Tools"
            text="Building real-time dashboards, project management tools, and internal systems that replace WhatsApp chaos for agencies and freelancers."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            Turning ideas into reality!
          </div>

        </div>

      </div>
    </section>
  );
};

export default Expertise;
