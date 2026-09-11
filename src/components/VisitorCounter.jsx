import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 15) + 18);

  useEffect(() => {
    const tick = () => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(10, Math.min(50, prev + delta));
      });
      setTimeout(tick, 2500 + Math.random() * 4000);
    };
    const timer = setTimeout(tick, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="flex items-center gap-2 bg-black/70 backdrop-blur-lg border border-white/10 rounded-full px-3 py-1.5 shadow-lg">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9ff3a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d9ff3a]"></span>
        </span>
        <span className="text-[9px] sm:text-[10px] font-bold text-white/70 tabular-nums">
          <span className="text-[#d9ff3a]">{count}</span> viewing now
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter;
