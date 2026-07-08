import { Instagram, Facebook, MessageSquare, Phone, MapPin, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-luxury-black border-t border-gold-950/20 text-gray-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-10 border-b border-gold-950/10">
          
          {/* Logo & Description */}
          <div className="md:col-span-7 flex flex-col space-y-4">
            <a href="#inicio" className="flex flex-col w-fit">
              <span className="font-serif text-xl sm:text-2xl tracking-widest text-gold-200 uppercase">
                {SALON_INFO.name}
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-medium uppercase -mt-1">
                {SALON_INFO.subtitle}
              </span>
            </a>
            <p className="font-body text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
              Realçando sua beleza com sofisticação, afeto e mais de 20 anos de autoridade de Shirley Omena no mercado de estética capilar e noivas.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.instagram.com/shirleyomena/" 
                target="_blank" 
                referrerPolicy="no-referrer"
                rel="noopener noreferrer" 
                className="p-2.5 bg-luxury-charcoal hover:bg-gold-950/20 border border-gold-950/30 text-gold-300 hover:text-gold-200 rounded-xl transition-all hover:scale-[1.05]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={SALON_INFO.whatsappLink} 
                target="_blank" 
                referrerPolicy="no-referrer"
                rel="noopener noreferrer" 
                className="p-2.5 bg-luxury-charcoal hover:bg-gold-950/20 border border-gold-950/30 text-gold-300 hover:text-gold-200 rounded-xl transition-all hover:scale-[1.05]"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Miss Bella</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                <a href={SALON_INFO.whatsappLink} className="hover:text-gold-300 transition-colors">
                  {SALON_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                <span>Mata do Rolo, Rio Largo - AL, Brasil</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-600 font-sans">
            © 2026 {SALON_INFO.name} {SALON_INFO.subtitle}. Todos os direitos reservados. Desenvolvido com luxo e sofisticação.
          </p>
          <button 
            onClick={scrolltoTop}
            className="p-3 bg-luxury-charcoal hover:bg-gold-950/20 border border-gold-950/25 text-gold-300 hover:text-gold-200 rounded-full transition-all group shadow-md"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
