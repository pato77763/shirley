import { motion } from 'motion/react';
import nossoCantinhoVideo from '../assets/videos/nosso_cantinho-1.mp4';

export default function NossoCantinho() {
  const images = [
    {
      url: '/src/assets/images/regenerated_image_1783474182264.jpg',
      alt: 'Interior sofisticado do Salão Miss Bella',
      title: 'Ambiente Acolhedor'
    },
    {
      url: '/src/assets/images/regenerated_image_1783474184020.jpg',
      alt: 'Área de lavatório e bem-estar premium',
      title: 'Espaço de Relaxamento'
    },
    {
      url: '/src/assets/images/regenerated_image_1783474184825.jpg',
      alt: 'Detalhes e produtos de padrão internacional',
      title: 'Cuidado Exclusivo'
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-luxury-black overflow-hidden border-t border-gold-950/10">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs tracking-[0.3em] text-gold-400 font-bold uppercase block">
            Conheça o Nosso Espaço
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
            Nosso <span className="font-normal italic text-gold-200">Cantinho</span>
          </h2>
          <div className="h-[1.5px] w-20 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
          <p className="font-body text-xs sm:text-sm text-gray-400 pt-2 leading-relaxed max-w-lg mx-auto">
            Um refúgio de luxo e afeto planejado em cada detalhe para proporcionar o máximo conforto, privacidade e biossegurança que você merece.
          </p>
        </div>

        {/* Gallery Bento-style Grid: 3 Images + 1 Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Images */}
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group aspect-[4/5] rounded-3xl overflow-hidden border border-gold-950/20 bg-luxury-charcoal shadow-lg hover:border-gold-700/30 transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-sans text-[10px] tracking-widest text-gold-400 uppercase font-semibold">Espaço Miss Bella</p>
                <h4 className="font-serif text-base text-white font-medium mt-1">{img.title}</h4>
              </div>
            </motion.div>
          ))}

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group aspect-[4/5] rounded-3xl overflow-hidden border border-gold-950/20 bg-luxury-charcoal shadow-lg hover:border-gold-700/30 transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <video
              src={nossoCantinhoVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Ambient overlay indicator */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="inline-flex items-center space-x-1.5 self-start px-2 py-0.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 font-sans text-[9px] uppercase tracking-widest rounded-full mb-2">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
                <span>Em Movimento</span>
              </span>
              <p className="font-sans text-[10px] tracking-widest text-gold-400 uppercase font-semibold">Beleza Real</p>
              <h4 className="font-serif text-base text-white font-medium mt-1">Nossa Essência</h4>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
