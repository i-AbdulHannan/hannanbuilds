import React, { useState, useEffect } from 'react';

const messages = {
  clinicflow: [
    { text: 'bought ClinicFlow Pro', max: 5 },
    { text: 'viewing ClinicFlow Pro', max: 12 },
    { text: 'requested demo', max: 3 },
  ],
  workroom: [
    { text: 'visited workroomWR', max: 8 },
    { text: 'viewing landing page', max: 6 },
    { text: 'signed up for beta', max: 4 },
  ],
};

const LiveActivityBadge = ({ type }) => {
  const [activity, setActivity] = useState(() => {
    const msgs = messages[type];
    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    return { text: msg.text, count: Math.floor(Math.random() * msg.max) + 1 };
  });

  useEffect(() => {
    const tick = () => {
      const msgs = messages[type];
      const msg = msgs[Math.floor(Math.random() * msgs.length)];
      setActivity({
        text: msg.text,
        count: Math.floor(Math.random() * msg.max) + 1,
      });
      setTimeout(tick, 4000 + Math.random() * 5000);
    };
    const timer = setTimeout(tick, 5000 + Math.random() * 3000);
    return () => clearTimeout(timer);
  }, [type]);

  return (
    <div className="flex items-center gap-1.5 mt-2">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9ff3a] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d9ff3a]"></span>
      </span>
      <span className="text-[8px] sm:text-[9px] font-bold text-[#d9ff3a] tabular-nums">
        {activity.count} {activity.text}
      </span>
    </div>
  );
};

export default LiveActivityBadge;
