import React, { useState, useEffect } from 'react';

const notifications = [
  { product: 'ClinicFlow Pro', action: 'purchased', icon: '🏥' },
  { product: 'ClinicFlow Pro', action: 'requested demo for', icon: '🏥' },
  { product: 'ClinicFlow Pro', action: 'is reviewing', icon: '🏥' },
  { product: 'workroomWR', action: 'visited landing page of', icon: '📋' },
  { product: 'workroomWR', action: 'signed up for beta of', icon: '📋' },
  { product: 'workroomWR', action: 'is exploring', icon: '📋' },
];

const times = ['just now', '1m ago', '2m ago', '3m ago', '5m ago'];

const ActivityToast = () => {
  const [toast, setToast] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const notif = notifications[Math.floor(Math.random() * notifications.length)];
      const time = times[Math.floor(Math.random() * times.length)];
      setToast({ ...notif, time });
      setShow(true);

      setTimeout(() => setShow(false), 4000);
    };

    const firstDelay = setTimeout(() => {
      showNotification();
      const interval = setInterval(showNotification, 12000 + Math.random() * 8000);
      return () => clearInterval(interval);
    }, 6000);

    return () => clearTimeout(firstDelay);
  }, []);

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`flex items-center gap-2.5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 max-w-[260px] ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <span className="text-base shrink-0">{toast.icon}</span>
        <div className="min-w-0">
          <p className="text-[9px] sm:text-[10px] text-white/60 leading-tight">
            Someone {toast.action}
          </p>
          <p className="text-[10px] sm:text-[11px] font-bold text-[#d9ff3a] truncate leading-tight">
            {toast.product}
          </p>
          <p className="text-[8px] text-white/40 mt-0.5">{toast.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityToast;
