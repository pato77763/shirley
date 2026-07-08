import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-luxury-black/95 border-b border-gold-950/30 py-3 backdrop-blur-md shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex flex-col group" onClick={(e) => handleNavClick(e, '#inicio')}>
              <span className="font-serif text-xl sm:text-2xl tracking-widest text-gold-200 group-hover:text-gold-300 transition-colors uppercase">
                {SALON_INFO.name}
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-medium uppercase -mt-1">
                {SALON_INFO.subtitle}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-gold-300 font-medium transition-colors relative py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-gold-200 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={SALON_INFO.whatsappLink}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-luxury-black font-sans font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-full hover:from-gold-500 hover:via-gold-400 hover:to-gold-300 transition-all duration-300 shadow-md shadow-gold-950/30 hover:scale-[1.03]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário</span>
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gold-200 hover:text-gold-400 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] z-40 bg-luxury-black/98 backdrop-blur-lg flex flex-col justify-between p-6 border-t border-gold-950/20 md:hidden"
          >
            <div className="flex flex-col space-y-5 pt-4">
              {menuItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-sm tracking-widest uppercase text-gray-200 hover:text-gold-300 font-semibold py-2 border-b border-gold-950/10"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pb-12">
              <a
                href={SALON_INFO.whatsappLink}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-full justify-center inline-flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-400 text-luxury-black font-sans font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar no WhatsApp</span>
              </a>
              <div className="text-center">
                <p className="font-sans text-xs text-gray-400 uppercase tracking-widest">Fale Conosco</p>
                <p className="font-serif text-gold-300 font-bold tracking-wider mt-1">{SALON_INFO.phoneFormatted}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
