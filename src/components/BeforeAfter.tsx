import React from 'react';
import { Sparkles, Video, Image as ImageIcon, Play, CheckCircle } from 'lucide-react';
import { SALON_INFO } from '../data';
import video1 from '../assets/videos/resultado_movimento_1.mp4';
import video2 from '../assets/videos/resultado_movimento_2.mp4';
import img1783365880347 from '../assets/images/regenerated_image_1783365880347.png';
import beforeAfterHairImg from '../assets/images/before_after_hair_1783208368688.jpg';
import img1783364604150 from '../assets/images/regenerated_image_1783364604150.jpg';
import img1783364605238 from '../assets/images/regenerated_image_1783364605238.jpg';
import img1783364606578 from '../assets/images/regenerated_image_1783364606578.jpg';
import heroShirleyOmenaImg from '../assets/images/hero_shirley_omena_1783208357327.jpg';

export default function BeforeAfter() {
  const imagesGallery = [
    {
      id: 'img1',
      title: 'Liso Orgânico & Selagem',
      desc: 'Alinhamento 100% orgânico livre de formol, proporcionando brilho tridimensional e balanço natural.',
      beforeUrl: img1783365880347,
      beforeLabel: 'Frizz & Opacidade',
      afterUrl: beforeAfterHairImg,
      afterLabel: 'Liso Espelhado',
      isGrayscaleBefore: false
    },
    {
      id: 'img2',
      title: 'Alongamento Mega Hair Micropele',
      desc: 'Preenchimento de pontas ralas e alongamento invisível de altíssimo padrão com cabelo humano premium.',
      beforeUrl: img1783364604150,
      beforeLabel: 'Pontas Ralas',
      afterUrl: img1783364605238,
      afterLabel: 'Preenchimento & Volume',
      isGrayscaleBefore: false
    },
    {
      id: 'img3',
      title: 'Cronograma Capilar Deep Therapy',
      desc: 'Reconstrução lipídica molecular intensiva, devolvendo massa e resistência aos fios pós-química.',
      beforeUrl: img1783364606578,
      beforeLabel: 'Córtex Elástico',
      afterUrl: heroShirleyOmenaImg,
      afterLabel: 'Fio Encorpado & Sedoso',
      isGrayscaleBefore: false
    }
  ];

  const videosGallery = [
    {
      id: 'vid1',
      title: 'Resultado de Salão em Movimento',
      desc: 'Confira o brilho, leveza e movimento do Alinhamento Orgânico gravado sob iluminação profissional.',
      placeholderText: 'Insira seu vídeo "liso_movimento.mp4" aqui',
      videoUrl: video1
    },
    {
      id: 'vid2',
      title: 'Aplicação Mega Hair Micropele',
      desc: 'A sutileza e acabamento das fitas adesivas de micropele no couro cabeludo sob zoom.',
      placeholderText: 'Insira seu vídeo "mega_micropele.mp4" aqui',
      videoUrl: video2
    }
  ];

  return (
    <section id="resultados" className="py-20 sm:py-28 bg-luxury-black text-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs tracking-[0.3em] text-gold-400 font-bold uppercase block">
            Galeria de Transformações
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Nossos Resultados <span className="font-normal italic text-gold-200">Antes & Depois</span>
          </h2>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
          <p className="font-body text-sm sm:text-base text-gray-400 pt-2">
            Resultados reais, sem filtros enganosos. Veja a diferença incomparável dos procedimentos e técnicas exclusivas assinadas por Shirley Omena.
          </p>
        </div>

        {/* --- SECTION 1: IMAGE COMPARISONS (SIDE BY SIDE) --- */}
        <div className="space-y-16">
          <div>
            <div className="flex items-center space-x-2.5 mb-8 border-b border-gold-950/20 pb-4">
              <ImageIcon className="w-5 h-5 text-gold-400" />
              <h3 className="font-serif text-xl sm:text-2xl text-gold-200">Galeria de Resultados</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {imagesGallery.map((item) => (
                <div key={item.id} className="flex flex-col space-y-4 group">
                  
                  {/* Two Images Side-by-Side Container */}
                  <div className="grid grid-cols-2 gap-3 aspect-[4/3] w-full">
                    
                    {/* Before Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-red-950/30 bg-luxury-charcoal">
                      <img 
                        src={item.beforeUrl} 
                        alt={`${item.title} - Antes`} 
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover brightness-90 ${item.isGrayscaleBefore ? 'grayscale filter contrast-125 saturate-50' : ''}`}
                      />
                    </div>

                    {/* After Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-gold-950/30 bg-luxury-charcoal">
                      <img 
                        src={item.afterUrl} 
                        alt={`${item.title} - Depois`} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-black/70 p-1 rounded-full text-gold-400 z-10">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* --- SECTION 2: VIDEO SHOWCASE (PREPARED FOR LOCAL VIDEOS) --- */}
          <div className="pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gold-950/20 pb-4">
              <div className="flex items-center space-x-2.5">
                <Video className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl sm:text-2xl text-gold-200">Demonstrações em Vídeo</h3>
              </div>
              <span className="font-sans text-[10px] uppercase bg-gold-950/60 text-gold-400 border border-gold-900/30 px-3 py-1 rounded-full w-fit">
                Alta definição e brilho supremo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {videosGallery.map((vid) => (
                <div key={vid.id} className="flex flex-col space-y-4 bg-luxury-charcoal/30 border border-gold-950/10 p-5 rounded-3xl hover:border-gold-800/30 transition-all duration-300 max-w-sm mx-auto w-full">
                  
                  {/* Vertical aspect video player frame */}
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-luxury-charcoal border border-gold-900/15 group">
                    <video
                      src={vid.videoUrl}
                      controls
                      preload="metadata"
                      playsInline
                      muted
                      loop
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA to Schedule */}
          <div className="bg-gradient-to-r from-gold-950/30 via-gold-900/20 to-transparent border border-gold-900/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-body text-xs text-gray-400 mt-1">
                Agende uma consultoria gratuita no WhatsApp para conversarmos sobre a melhor terapia capilar para você.
              </p>
            </div>
            <a
              href={SALON_INFO.whatsappLink}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-gold-600 to-gold-400 text-luxury-black font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:from-gold-500 hover:to-gold-300 transition-all hover:scale-[1.02] shrink-0"
            >
              <span>Falar com Shirley Omena</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
