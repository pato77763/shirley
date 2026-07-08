import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, Heart, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function Hero() {
  const stats = [
    { icon: <Award className="w-5 h-5 text-gold-400" />, text: 'Atendimento Personalizado' },
    { icon: <ShieldCheck className="w-5 h-5 text-gold-400" />, text: 'Autoridade & Segurança' },
    { icon: <Sparkles className="w-5 h-5 text-gold-400" />, text: 'Produtos Premium' },
    { icon: <Heart className="w-5 h-5 text-gold-400" />, text: 'Ambiente Sofisticado' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-luxury-black">
      {/* Decorative Golden Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1">
            
            {/* 20 Years Authority Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-950/40 via-gold-900/30 to-transparent border border-gold-800/30 px-3 py-1.5 rounded-full w-fit"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-gold-300">
                {SALON_INFO.experienceYears}+ ANOS DE AUTORIDADE EM BELEZA
              </span>
            </motion.div>

            {/* Display Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-2"
            >
              <h3 className="font-sans text-xs tracking-[0.3em] text-gold-400 font-bold uppercase">
                Realce Sua Verdadeira Essência
              </h3>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Beleza que <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400 font-normal italic">transforma</span>,<br />
                confiança que te acompanha.
              </h1>
            </motion.div>

            {/* Short Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed"
            >
              Cabelos deslumbrantes, mega hair imperceptível, tratamentos de alta performance e maquiagem de luxo. 
              Tudo planejado por Shirley Omena para fazer você se sentir incrível todos os dias no coração de Rio Largo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <a
                href={SALON_INFO.whatsappLink}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-luxury-black font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:from-gold-500 hover:via-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-950/40 hover:scale-[1.03]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Atendimento</span>
              </a>

              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center border border-gold-800/40 hover:border-gold-500/60 bg-gold-950/10 hover:bg-gold-900/20 text-gold-300 font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03]"
              >
                Nossos Serviços
              </a>
            </motion.div>
          </div>

          {/* Image Showcase */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] overflow-hidden border border-gold-900/30 group shadow-2xl shadow-black"
            >
              {/* Golden gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/10 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-all duration-500" />
              
              <img
                src="/src/assets/images/regenerated_image_1783360055218.png"
                alt="Shirley Omena Miss Bella Beleza"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating micro-badge removed as requested */}
            </motion.div>
          </div>
        </div>

        {/* Brand Stat Badges on Bottom */}
        <div className="mt-16 sm:mt-24 border-t border-gold-950/20 pt-8 sm:pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center justify-center p-4 bg-luxury-charcoal/30 border border-gold-950/10 rounded-2xl hover:bg-luxury-charcoal/50 hover:border-gold-900/20 transition-all duration-300"
              >
                <div className="p-3 bg-gold-950/30 border border-gold-800/20 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <span className="font-sans text-xs tracking-wider uppercase text-gray-300 font-semibold">
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
