import { useState, useEffect } from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 2.5 seconds to prompt action
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    // Hide tooltip automatically after 8 seconds
    const timerHide = setTimeout(() => {
      setShowTooltip(false);
    }, 10500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerHide);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Interactive Floating Tooltip */}
      {showTooltip && (
        <div className="bg-white text-luxury-black border border-gold-300 text-xs font-sans font-bold uppercase tracking-wider px-4 py-3 rounded-2xl shadow-2xl relative animate-fade-in flex items-center space-x-2 max-w-[220px]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Fale com Shirley!</span>
          {/* Arrow pointing to the right */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-gold-300 rotate-[-45deg]" />
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={SALON_INFO.whatsappLink}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        aria-label="Agendar via WhatsApp"
        onClick={() => setShowTooltip(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/40 relative hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Pulsing green effect behind the button */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 group-hover:animate-none" />
        
        {/* Glowing border accent */}
        <span className="absolute -inset-0.5 rounded-full border border-gold-300/30 group-hover:border-gold-300/50 transition-colors" />

        <MessageSquare className="w-7 h-7 relative z-10 fill-white" />
      </a>
    </div>
  );
}
