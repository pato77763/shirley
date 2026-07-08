import { MapPin, Phone, Clock, Compass, Mail, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function LocationContact() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-luxury-black text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs tracking-[0.3em] text-gold-400 font-bold uppercase block">
            Como nos Encontrar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Localização & <span className="font-normal italic text-gold-200">Contato</span>
          </h2>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
          <p className="font-body text-sm sm:text-base text-gray-400 pt-2">
            Estamos prontas para atender você no coração de Rio Largo, Alagoas. Venha tomar um café conosco e viver momentos únicos de beleza.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col space-y-6">
          
          {/* Contact Specs Grid */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-4 p-5 bg-luxury-charcoal/40 border border-gold-950/20 rounded-2xl hover:border-gold-800/30 transition-colors">
              <div className="p-3 bg-gold-950/40 border border-gold-800/30 rounded-xl text-gold-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-gray-500 font-bold">Endereço</p>
                <p className="font-body text-sm text-gray-200 font-semibold mt-1">
                  Mata do Rolo
                </p>
                <p className="font-body text-xs text-gray-400 mt-0.5">
                  Rio Largo - AL, Brasil
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start space-x-4 p-5 bg-luxury-charcoal/40 border border-gold-950/20 rounded-2xl hover:border-gold-800/30 transition-colors">
              <div className="p-3 bg-gold-950/40 border border-gold-800/30 rounded-xl text-gold-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-gray-500 font-bold">Horário de Funcionamento</p>
                <p className="font-body text-sm text-gray-200 font-semibold mt-1">
                  {SALON_INFO.schedule}
                </p>
                <p className="font-body text-xs text-gray-400 mt-0.5">
                  Atendimento exclusivo com hora marcada
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <div className="pt-2">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-gold-600/10 transition-all hover:scale-[1.02]"
            >
              <Compass className="w-4 h-4" />
              <span>Abrir Rota no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
