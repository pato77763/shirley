import { Service, Testimonial, BeforeAfterPair } from './types';
import shirleyOmenaStylistImg from './assets/images/shirley_omena_stylist_1783208380452.jpg';
import beforeAfterHairImg from './assets/images/before_after_hair_1783208368688.jpg';

export const SALON_INFO = {
  name: 'Shirley Omena',
  subtitle: 'Miss Bella',
  experienceYears: 20,
  phone: '+55 82 98850-0454',
  phoneFormatted: '(82) 98850-0454',
  whatsappLink: 'https://wa.me/5582988500454?text=Ol%C3%A1%21+Gostaria+de+agendar+um+hor%C3%A1rio+no+sal%C3%A3o+Miss+Bella.',
  googleMapsUrl: 'https://maps.app.goo.gl/rnqrNCwWAZmkMzBNA',
  address: 'Mata do Rolo, Rio Largo - AL, Brasil',
  schedule: 'Terça a Sábado: 09h às 19h',
  aboutText: 'Com mais de 20 anos de excelência e autoridade na área da beleza, Shirley Omena comanda o Miss Bella, transformando a autoestima de centenas de mulheres em Rio Largo e região. Nossa missão vai além de cortar ou pintar: realizamos verdadeiras terapias de beleza com atendimento exclusivo, produtos premium e técnicas modernas de padrão internacional.',
  aboutAuthorImage: shirleyOmenaStylistImg
};

export const SERVICES: Service[] = [
  {
    id: 'mega-hair',
    title: 'Mega Hair Micropele',
    category: 'mega',
    shortDescription: 'Alongamento natural imperceptível e extremamente confortável.',
    fullDescription: 'Técnica de mega hair com micropele adesiva ou ponto americano, garantindo leveza absoluta, sem tracionar a raiz dos fios e com distribuição uniforme. Ideal para quem busca comprimento e volume com caimento super natural e acabamento invisível.',
    priceEstimate: 'Sob Consulta',
    duration: '2h - 4h',
    iconName: 'Sparkles',
    highlights: ['Alongamento invisível', 'Sem dor ou tração na raiz', 'Manutenção facilitada', 'Cabelo humano premium']
  },
  {
    id: 'tratamentos-avancados',
    title: 'Tratamentos Avançados',
    category: 'tratamento',
    shortDescription: 'Cronograma capilar premium para reconstrução profunda.',
    fullDescription: 'Terapias capilares de alta performance, incluindo reconstrução com queratina pura, nutrição lipídica intensiva e hidratação molecular. Devolvem a massa aos fios danificados por processos químicos ou térmicos.',
    priceEstimate: 'A partir de R$ 150',
    duration: '1h 30m',
    iconName: 'Droplet',
    highlights: ['Recuperação na primeira sessão', 'Córtex capilar preenchido', 'Brilho espelhado', 'Proteção térmica de longa duração']
  },
  {
    id: 'botox-capilar',
    title: 'Botox Capilar Premium',
    category: 'tratamento',
    shortDescription: 'Redução de frizz, alinhamento dos fios e brilho espelhado.',
    fullDescription: 'Reposição de massa que sela as cutículas, disciplina os cabelos rebeldes e elimina o frizz. Mantém o volume sob controle com balanço natural, sem perder a maleabilidade dos fios.',
    priceEstimate: 'A partir de R$ 180',
    duration: '2h',
    iconName: 'Activity',
    highlights: ['Redução absoluta do frizz', 'Alinhamento natural', 'Hidratação profunda', 'Resultado duradouro']
  },
  {
    id: 'alisamento-selagem',
    title: 'Alisamento & Selagem Orgânica',
    category: 'tratamento',
    shortDescription: 'Liso absoluto, saudável, sem formol e com brilho máximo.',
    fullDescription: 'Tratamento de redução de volume e alinhamento térmico orgânico de alta performance. Cabelos 100% lisos, soltos, saudáveis e com brilho tridimensional incomparável. Fórmula livre de formol para sua segurança.',
    priceEstimate: 'A partir de R$ 250',
    duration: '2h 30m',
    iconName: 'Zap',
    highlights: ['100% livre de formol', 'Brilho espelhado extremo', 'Toque de seda', 'Praticidade no dia a dia']
  },
  {
    id: 'cortes',
    title: 'Cortes Personalizados',
    category: 'cabelo',
    shortDescription: 'Visagismo aplicado para valorizar o formato do seu rosto.',
    fullDescription: 'Cortes modernos, clássicos e artísticos planejados sob medida. Utilizamos conceitos de visagismo para destacar sua beleza única, proporcionando leveza, caimento impecável e facilidade de estilização diária.',
    priceEstimate: 'A partir de R$ 80',
    duration: '1h',
    iconName: 'Scissors',
    highlights: ['Consultoria de visagismo', 'Leveza e movimento', 'Estilização simples em casa', 'Corte de pontas duplas inteligente']
  },
  {
    id: 'pacotes-noiva',
    title: 'Pacotes de Noiva Reais',
    category: 'outros',
    shortDescription: 'O dia mais feliz da sua vida planejado em cada detalhe de beleza.',
    fullDescription: 'Experiência exclusiva para noivas com sala reservada, testes prévios de penteado e maquiagem de alta definição com produtos à prova d’água. Um dia inesquecível focado em relaxamento e excelência estética.',
    priceEstimate: 'Sob Consulta',
    duration: 'Dia Inteiro',
    iconName: 'Heart',
    highlights: ['Teste de penteado e make', 'Sala vip de noiva exclusiva', 'Assessoria para colocação do véu', 'Opções para madrinhas e mães']
  },
  {
    id: 'makeup',
    title: 'Maquiagem Social de Luxo',
    category: 'outros',
    shortDescription: 'Maquiagem profissional sofisticada com produtos internacionais.',
    fullDescription: 'Makeup social para casamentos, formaturas e ensaios fotográficos. Foco em pele blindada de alta durabilidade, contorno suave, iluminação elegante e produtos das melhores marcas mundiais.',
    priceEstimate: 'A partir de R$ 180',
    duration: '1h 15m',
    iconName: 'UserCheck',
    highlights: ['Pele blindada resistente à água', 'Marcas importadas premium', 'Aplicação de cílios inclusa', 'Técnicas modernas de contorno']
  },
  {
    id: 'e-muito-mais',
    title: 'E MUITO MAIS',
    category: 'outros',
    shortDescription: 'Descubra outros tratamentos e cuidados personalizados para realçar sua essência.',
    fullDescription: 'Além de nossas especialidades principais, oferecemos uma consultoria de beleza personalizada para outros serviços e tratamentos exclusivos. Entre em contato conosco diretamente para planejar seu momento personalizado.',
    priceEstimate: 'Sob Consulta',
    duration: 'Sob Consulta',
    iconName: 'Sparkles',
    highlights: ['Atendimento Vip Personalizado', 'Consultoria Individualizada', 'Tratamentos Sob Medida']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Juliana Santos',
    role: 'Cliente de Alisamento Orgânico',
    text: 'Atendimento maravilhoso, Shirley e sua equipe são impecáveis! Meu cabelo nunca teve tanto brilho e movimento. Sinto minha autoestima renovada sempre que vou ao Miss Bella.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't2',
    name: 'Carla Andrade',
    role: 'Cliente de Mega Hair',
    text: 'Espaço lindo, profissionais extremamente capacitados. Fiz o mega hair com a Shirley e ficou simplesmente imperceptível. O caimento é perfeito e não danificou meu cabelo. Não troco por nada!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't3',
    name: 'Fernanda Lima',
    role: 'Cliente Noiva / Penteado e Maquiagem',
    text: 'Fiz meu dia de noiva com a Shirley e foi tudo impecável! Desde os testes até o grande dia, o carinho e o profissionalismo foram inacreditáveis. Minha make durou a festa inteira. Obrigada por realizarem meu sonho!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfterPair[] = [
  {
    id: 'ba1',
    title: 'Alinhamento Orgânico & Selagem',
    description: 'Transformação profunda eliminando o frizz e adicionando brilho tridimensional.',
    beforeUrl: beforeAfterHairImg,
    afterUrl: beforeAfterHairImg // We will display the same high quality generated comparison or split-pane slider!
  }
];

export const GENERAL_STATS = [
  { label: 'Anos de Experiência', value: '20+' },
  { label: 'Especialidades Exclusivas', value: '8+' },
  { label: 'Dedicação com Você', value: '100%' }
];
