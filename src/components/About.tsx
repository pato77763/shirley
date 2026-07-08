import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';
import { SALON_INFO, GENERAL_STATS } from '../data';

export default function About() {
  const values = [
    'Visagismo personalizado para valorizar seu biotipo e estilo',
    'Uso exclusivo de produtos de linhas profissionais internacionais',
    'Biossegurança rígida e esterilização de altíssimo padrão',
    'Ambiente climatizado, privativo e projetado para seu relaxamento'
  ];

  return (
    <section id="sobre" className="relative py-20 sm:py-28 overflow-hidden bg-luxury-charcoal">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Stylist Image and Stats overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative behind card */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-gold-600/20 to-gold-400/20 blur-md pointer-events-none" />
              
              <div className="relative aspect-square sm:aspect-[4/5] rounded-[2rem] overflow-hidden border border-gold-800/30 shadow-2xl">
                <img
                  src={SALON_INFO.aboutAuthorImage}
                  alt="Shirley Omena, fundadora do Miss Bella"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Float Experience Card */}
              <div className="absolute -bottom-6 -right-6 bg-luxury-black/95 border border-gold-900/30 p-6 rounded-2xl shadow-2xl backdrop-blur-md hidden sm:block max-w-[240px]">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-serif text-gold-300 font-bold">20+</span>
                  <p className="font-sans text-xs text-gray-400 font-bold uppercase tracking-wider leading-tight">
                    Anos de Prática & Sucesso
                  </p>
                </div>
                <p className="font-body text-xs text-gray-500 mt-2">
                  Técnicas atualizadas continuamente com especialistas nacionais e internacionais.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional description and stats */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-xs tracking-[0.3em] text-gold-400 font-bold uppercase">
                Sobre Shirley Omena & Miss Bella
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                Cuidado, beleza e <span className="text-gold-200 italic font-normal">excelência</span> em cada detalhe.
              </h2>
            </div>

            <p className="font-body text-base text-gray-300 leading-relaxed">
              {SALON_INFO.aboutText}
            </p>

            {/* List of custom pillars/values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-300">{val}</span>
                </div>
              ))}
            </div>

            {/* General Stats Display */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gold-950/20">
              {GENERAL_STATS.map((stat, i) => (
                <div key={i} className="text-left">
                  <span className="block text-2xl sm:text-3xl font-serif text-gold-300 font-bold">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] sm:text-xs font-sans text-gray-400 font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
