import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Droplet, 
  Activity, 
  Zap, 
  Scissors, 
  Heart, 
  UserCheck, 
  ChevronRight, 
  Calendar, 
  X,
  CheckCircle
} from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function Specialties() {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'cabelo' | 'tratamento' | 'mega' | 'outros'>('todos');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Icon mapping function based on iconName string
  const getIcon = (iconName: string, className: string = 'w-6 h-6 text-gold-400') => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Droplet': return <Droplet className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const filteredServices = selectedCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  const categories = [
    { value: 'todos', label: 'Tudo' },
    { value: 'cabelo', label: 'Corte & Design' },
    { value: 'tratamento', label: 'Alinhamentos & Terapias' },
    { value: 'mega', label: 'Mega Hair' },
    { value: 'outros', label: 'Noivas & Estética' },
  ];

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-luxury-cream text-luxury-black relative">
      {/* Absolute layout shapes */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-luxury-black/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-xs tracking-[0.3em] text-gold-600 font-bold uppercase block">
            Nossos Serviços & Pilares
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-black tracking-tight">
            Tudo para realçar a sua <span className="font-normal italic text-gold-600">verdadeira beleza</span>
          </h2>
          <div className="h-[1.5px] w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
          <p className="font-body text-sm sm:text-base text-gray-600 pt-2">
            Selecione uma categoria abaixo para explorar nossas especialidades exclusivas em tratamentos capilares, mega hair e estética.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value as any)}
              className={`font-sans text-xs tracking-wider uppercase font-semibold px-5 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-gold-600 text-white shadow-lg shadow-gold-600/25 scale-[1.02]'
                  : 'bg-white text-gray-700 hover:text-gold-600 hover:bg-gold-50 border border-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedService(service)}
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-gold-300/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Highlight background flash on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-50/40 rounded-bl-[100px] -z-10 group-hover:bg-gold-100/30 transition-all duration-300" />

              <div>
                <div className="p-4 bg-gold-50 border border-gold-100 w-fit rounded-2xl mb-5 group-hover:bg-gold-600 group-hover:border-gold-500 transition-colors duration-300">
                  {getIcon(service.iconName, 'w-6 h-6 text-gold-600 group-hover:text-white transition-colors duration-300')}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-gold-600 transition-colors duration-300 mb-2">
                  {service.title}
                </h3>
                
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-gray-100 mt-4">
                <span className="font-sans text-xs text-gray-500 font-semibold group-hover:text-gold-600 transition-colors duration-300 inline-flex items-center space-x-1">
                  <span>Saiba Mais</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Details Popup Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl border border-gold-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header inside Modal */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-gold-50 border border-gold-100 rounded-2xl shrink-0">
                  {getIcon(selectedService.iconName, 'w-8 h-8 text-gold-600')}
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold tracking-widest text-gold-600 uppercase bg-gold-50 px-2 py-0.5 rounded">
                    {selectedService.category === 'cabelo' ? 'Corte & Design' : 
                     selectedService.category === 'tratamento' ? 'Alinhamento' : 
                     selectedService.category === 'mega' ? 'Alongamento' : 'Especialidade'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Service Details Body */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-xs tracking-wider uppercase text-gray-400 font-bold mb-1">Descrição do Serviço</h4>
                  <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Highlights list */}
                <div>
                  <h4 className="font-sans text-xs tracking-wider uppercase text-gray-400 font-bold mb-2">O que está incluso:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
                        <span className="font-body text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="font-body text-xs text-gray-500 text-center sm:text-left">
                    Atendimento seguro, com agendamento privativo sob medida.
                  </p>
                  <a
                    href={`https://wa.me/5582988500454?text=Ol%C3%A1+Shirley%21+Gostaria+de+agendar+um+hor%C3%A1rio+para+o+servi%C3%A7o%3A+${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg shadow-gold-600/20 hover:from-gold-500 hover:to-gold-400 transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar este Serviço</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
