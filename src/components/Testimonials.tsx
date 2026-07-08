import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS, SALON_INFO } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-luxury-sand text-luxury-black relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs tracking-[0.3em] text-gold-600 font-bold uppercase block">
            Prova Social & Depoimentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-black tracking-tight">
            O que nossas <span className="font-normal italic text-gold-600">clientes especiais</span> dizem
          </h2>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
          <p className="font-body text-sm sm:text-base text-gray-600 pt-2">
            A satisfação e o bem-estar de nossas clientes são os maiores indicadores do nosso compromisso de 20 anos com a excelência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group relative"
            >
              {/* Golden quote marker */}
              <div className="absolute top-6 right-8 text-gold-200 group-hover:text-gold-400 transition-colors duration-300">
                <Quote className="w-8 h-8 rotate-180 opacity-60" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-sm sm:text-base text-gray-700 italic leading-relaxed mb-6 relative">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info (Sem Foto) */}
              <div className="pt-4 border-t border-gray-100 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 font-serif font-bold text-xs uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-gray-900 leading-none">
                    {testimonial.name}
                  </h4>
                  <p className="font-sans text-[10px] tracking-wider uppercase text-gold-600 font-semibold mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
