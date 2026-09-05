export interface Author {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  email: string;
  image: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption: string;
  credit?: string;
  videoProvider?: 'youtube' | 'vimeo';
  videoId?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
  };
  category: 'Softball' | 'Baseball' | 'Noticias';
  subCategory: string; // e.g. 'Femenino', 'Masculino', 'Nacional', 'Internacional', 'Análisis Táctico'
  author: Author;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  heroCaption: string;
  isLeadHero?: boolean;
  isFeatured?: boolean;
  gallery?: {
    url: string;
    caption: string;
    shutterInfo?: string;
  }[];
  videoEmbed?: {
    provider: 'youtube' | 'vimeo';
    embedUrl: string;
    title: string;
  };
  tags: string[];
}

export const AUTHORS: Record<string, Author> = {
  evelyn: {
    id: 'evelyn-saldarreaga',
    name: 'Evelyn Saldarreaga',
    role: 'Directora Editorial / Jefa de Redacción',
    department: 'Dirección General | Fotoperiodismo y Producción Audiovisual',
    bio: 'Periodista y comunicadora especializada en gestión de medios deportivos y cobertura de eventos internacionales. Especialista en fotografía de alta velocidad en diamante, edición de campo y narrativa gráfica en torneos internacionales.',
    email: 'director@pelotonb.com',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  abel: {
    id: 'abel-saldarreaga',
    name: 'Abel Saldarreaga',
    role: 'Diseño y Dirección de Arte / Redactor Senior',
    department: 'Diseño y Dirección de Arte | Analista Deportivo',
    bio: 'Diseñador visual especializado en narrativa editorial deportiva, infografía táctica y dirección de arte multimedia para coberturas internacionales de béisbol y sóftbol.',
    email: 'diseno@pelotonb.com',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  miguel: {
    id: 'miguel-rodriguez',
    name: 'Miguel Rodríguez',
    role: 'Redactor Senior / Analista Deportivo',
    department: 'Redacción y Análisis Técnico',
    bio: 'Periodista especializado en crónica deportiva, estadísticas avanzadas y seguimiento exhaustivo de delegaciones y series nacionales de diamante.',
    email: 'redaccion@pelotonb.com',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
};

export const SITE_INFO = {
  name: 'Pelotón B',
  tagline: 'Crónica, Análisis Táctico y Fotoperiodismo de Diamante',
  location: 'Guayaquil, Ecuador',
  description: 'Plataforma digital deportiva especializada en la crónica de campo, análisis táctico y fotoperiodismo de alta velocidad para disciplinas de diamante -béisbol y sóftbol- y deportes de alto rendimiento a nivel regional e internacional.',
  mission: 'Producir periodismo deportivo riguroso, ético y visualmente impactante que impulse la visibilidad de los atletas, documente la evolución de las ligas formativas y acerque la alta competencia a una comunidad activa y apasionada.',
  vision: 'Consolidarnos como el medio digital de referencia en la región para la cobertura de béisbol, sóftbol y disciplinas olímpicas, combinando la inmediatez de las plataformas digitales con los estándares de rigor y calidad del periodismo internacional.',
  pressEmail: 'prensa@pelotonb.com',
  editorialEmail: 'redaccion@pelotonb.com',
  directorEmail: 'director@pelotonb.com',
  social: {
    instagram: 'https://instagram.com/pelotonb',
    youtube: 'https://youtube.com/@pelotonb',
    x: 'https://x.com/pelotonb',
    facebook: 'https://facebook.com/pelotonb',
  },
  pillars: [
    {
      title: 'Fotoperiodismo de Acción e In situ',
      description: 'Capturamos la intensidad del juego desde el terreno con equipos de alta velocidad, entregando narrativa gráfica de estándar editorial.',
    },
    {
      title: 'Rigor y Análisis Técnico',
      description: 'Más allá del marcador, profundizamos en la estrategia, estadísticas avanzadas y el contexto táctico de cada jugada.',
    },
    {
      title: 'Cobertura Multilingüe e Internacional',
      description: 'Capacidad operativa para cubrir torneos dentro y fuera del país, realizando coberturas y entrevistas directas con delegaciones internacionales.',
    },
    {
      title: 'Compromiso Institucional',
      description: 'Adherencia estricta a las normativas de prensa, derechos de transmisión y manuales de conducta del Comité Olímpico Internacional (COI) y la WBSC.',
    },
  ],
};

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'era-dorada-softball-femenino-sudamericano',
    title: 'El Diamante Reclama su Espacio: La Era Dorada del Sóftbol Femenino Rumbo al Ciclo Olímpico',
    subtitle: 'Crónica in situ sobre el vertiginoso ascenso técnico y físico de las selecciones sudamericanas que redefinen la velocidad en la goma.',
    excerpt: 'Desde la rotación de lanzamientos a más de 65 mph hasta jugadas defensivas milimétricas, el sóftbol femenino sudamericano experimenta su transformación más radical.',
    content: [
      'El sonido seco del cuero estrellándose contra la mascota rompe el aire cálido de la tarde. En la goma de lanzar, el molinete es una coreografía de fuerza centrífuga, tensión muscular y precisión absoluta. A apenas 43 pies del plato, una recta de ascenso a más de 65 millas por hora reduce el tiempo de reacción de la bateadora a menos de 0.35 segundos.',
      'Durante años, el sóftbol femenino en nuestra región compitió a la sombra de disciplinas con mayores reflectores comerciales. Sin embargo, lo que se vive hoy en los diamantes de Guayaquil, Lima y Buenos Aires no es casualidad: es el resultado de una generación de atletas y cuerpos técnicos formados bajo estándares metodológicos de alta exigencia.',
      'En este torneo sudamericano, la selección nacional demostró una solidez en el cuadro interior que dejó sin respuestas a las potencias del área. La transición defensiva entre campocorto y segunda base ejecutó jugadas de doble matanza que hicieron vibrar a las tribunas.',
      '“Entrenamos tres jornadas diarias con registro biométrico y video análisis. Sabíamos que para pelear medallas de ciclo olímpico no bastaba con batear: había que dominar la zona baja del strike con quiebres verticales”, explica el staff técnico.',
      'Pelotón B estuvo en el terreno documentando cada lanzamiento, cada barrida en el plato y cada instante de emoción con obturación a 1/4000s, capturando una historia que recién comienza.',
    ],
    quote: {
      text: 'Cuando entras a la caja de bateo no piensas en el cansancio; solo ves la costura de la bola y confías en las miles de repeticiones de la madrugada.',
      author: 'Capitana de la Selección Nacional de Sóftbol',
    },
    category: 'Softball',
    subCategory: 'Femenino / Internacional',
    author: AUTHORS.evelyn,
    publishedAt: '2026-09-04',
    readTime: '6 min de lectura',
    heroImage: 'https://images.unsplash.com/photo-1599586120429-487e974e1d5e?auto=format&fit=crop&w=1600&q=85',
    heroCaption: 'Molinete en plena ejecución durante la serie semifinal en el diamante federado. Foto: Evelyn Saldarreaga / Pelotón B.',
    isLeadHero: true,
    isFeatured: true,
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599586120429-487e974e1d5e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Molinete en plena aceleración en la goma de lanzar.',
        shutterInfo: '1/4000s · f/2.8 · ISO 400',
      },
      {
        url: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1200&q=80',
        caption: 'Impacto sólido del bate con la pelota en conteo de 3-2.',
        shutterInfo: '1/5000s · f/2.8 · ISO 640',
      },
      {
        url: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&w=1200&q=80',
        caption: 'Barrida de cabeza en el plato evitando el toque de la receptora.',
        shutterInfo: '1/3200s · f/3.2 · ISO 800',
      },
    ],
    videoEmbed: {
      provider: 'youtube',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Resumen Táctico: Final Femenina del Torneo Sudamericano',
    },
    tags: ['Softball Femenino', 'Ciclo Olímpico', 'Crónica de Campo', 'WBSC'],
  },
  {
    id: '2',
    slug: 'cronica-serie-nacional-beisbol-semifinales',
    title: 'Serie Nacional de Béisbol Mayor: Duelo de Bullpens y Nueve Entradas de Tensión Pura',
    subtitle: 'La batalla táctica en los diamantes ecuatorianos definió a los clasificados a la gran final en una jornada de pitcheo quirúrgico.',
    excerpt: 'Con corredores en las esquinas y dos outs en la novena entrada, el relevista cerrador sacó a relucir su sinker de 93 mph para sellar el boleto.',
    content: [
      'En el béisbol mayor no hay margen para la duda. Un lanzamiento equivocado en conteo de dos bolas y un strike puede convertir un juego perfecto en una derrota dolorosa.',
      'El diamante vibró con una asistencia récord que colmó los graderíos para presenciar el quinto juego definitorio de la Serie Mayor. Los abridores sostuvieron un duelo de ceros durante las primeras cinco entradas, donde la velocidad y los cambios de velocidad desconcertaron a las alineaciones.',
      'La jugada clave llegó en la parte baja del octavo inning, cuando con dos hombres a bordo, un toque de sacrificio perfectamente ejecutado descolocó a la defensiva rival, abriendo el camino para la carrera de la ventaja.',
      'Pelotón B conversó con los protagonistas en la zona mixta tras la celebración, analizando las estadísticas de control de lanzamientos y rotación que marcarán la serie final por el título.',
    ],
    category: 'Baseball',
    subCategory: 'Masculino / Nacional',
    author: AUTHORS.miguel,
    publishedAt: '2026-09-03',
    readTime: '5 min de lectura',
    heroImage: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1400&q=85',
    heroCaption: 'Lanzador abridor liberando su recta de cuatro costuras en el sexto episodio. Foto: Miguel Rodríguez / Pelotón B.',
    isFeatured: true,
    tags: ['Béisbol Nacional', 'Serie Mayor', 'Crónica', 'Pitcheo'],
  },
  {
    id: '3',
    slug: 'radiografia-al-bullpen-analisis-sabermetrico',
    title: 'Radiografía al Bullpen: Sabermetría y Velocidad de Giro en el Montículo Moderno',
    subtitle: 'Cómo los sensores de rotación y las cámaras de alta velocidad están transformando el repertorio de los lanzadores de diamante.',
    excerpt: 'Analizamos las métricas de spin rate, túnel de lanzamiento y quiebre vertical que están elevando el nivel competitivo de nuestros lanzadores.',
    content: [
      'El béisbol contemporáneo ya no se juzga únicamente por el radar de velocidad o el promedio de bateo tradicional. Hoy, la ciencia del movimiento y la sabermetría avanzada dictan las decisiones estratégicas de cada turno al bate.',
      'Al registrar lanzamientos con cámaras de alta velocidad a 1000 cuadros por segundo, los entrenadores pueden visualizar el eje exacto de rotación de la costura. Un slider con una tasa de giro de 2,600 RPM genera un quiebre horizontal que engaña la percepción visual del bateador en los últimos cinco pies de trayectoria.',
      'En este informe especial de Pelotón B, desglosamos con diagramas tácticos cómo tres academias del país han incorporado tecnología de captura de datos biomecánicos para prevenir lesiones de codo y maximizar la efectividad en el bullpen.',
    ],
    category: 'Noticias',
    subCategory: 'Análisis Táctico',
    author: AUTHORS.abel,
    publishedAt: '2026-09-02',
    readTime: '7 min de lectura',
    heroImage: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1400&q=85',
    heroCaption: 'Detalle del agarre de la costura para lanzamiento rompiente. Foto: Archivo Pelotón B.',
    isFeatured: true,
    tags: ['Sabermetría', 'Análisis Táctico', 'Biomecánica', 'Lanzadores'],
  },
  {
    id: '4',
    slug: 'prospectos-ecuatorianos-academia-internacional',
    title: 'Cantera de Diamante: La Nueva Promoción de Prospectos que Llama a Puertas Internacionales',
    subtitle: 'Cinco talentos juveniles entre 15 y 18 años destacan en los showcases internacionales con poder con el madero y brazo sobre el promedio.',
    excerpt: 'Un recorrido por los campos de entrenamiento formativo donde se pule el futuro del béisbol y sóftbol con rigor atlético y preparación académica.',
    content: [
      'El scout internacional abre su libreta y cronometra las 60 yardas. El cronómetro marca 6.45 segundos. En la caja de bateo, el radar de salida registra 98 mph con madera. No son números habituales para un jugador de 16 años.',
      'Los programas de desarrollo formativo en la costa ecuatoriana han dado un salto cualitativo al priorizar la preparación física de fuerza y velocidad sin descuidar los fundamentos técnicos de fildeo.',
      'Pelotón B visitó los campos de práctica y conversó con los entrenadores formativos y las familias de estos jóvenes atletas que combinan sus estudios secundarios con intensas sesiones de preparación deportiva.',
    ],
    category: 'Baseball',
    subCategory: 'Prospectos / Formativas',
    author: AUTHORS.miguel,
    publishedAt: '2026-08-30',
    readTime: '4 min de lectura',
    heroImage: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&w=1400&q=85',
    heroCaption: 'Sesión de bateo en jaula con madera profesional durante el showcase matutino. Foto: Pelotón B.',
    isFeatured: true,
    tags: ['Prospectos', 'Showcase', 'Desarrollo Juvenil', 'Béisbol'],
  },
  {
    id: '5',
    slug: 'softball-masculino-guayaquil-copa-clubes',
    title: 'Poder al Bate: Copa Regional de Clubes de Sóftbol Rápido Masculino Enciende la Tribuna',
    subtitle: 'Con cuadrangulares descomunales y un juego agresivo en las almohadillas, los equipos locales midieron fuerzas en una fecha inolvidable.',
    excerpt: 'El sóftbol de bola rápida masculina ofreció un espectáculo electrizante con marcadores cerrados y atrapadas acrobáticas contra la barda.',
    content: [
      'La adrenalina del sóftbol masculino rápido radica en su dinamismo: bases a 60 pies, la pelota llegando al guante en fracciones de segundo y batazos que superan los 250 pies con facilidad pasmosa.',
      'El clásico del fin de semana reunió a los dos combinados con mayor tradición del puerto principal. La afición llenó los costados del diamante para alentar cada jugada en un ambiente de fiesta deportiva.',
      'Presentamos el resumen completo con los líderes de bateo, carreras impulsadas y la galería de momentos estelares de la jornada.',
    ],
    category: 'Softball',
    subCategory: 'Masculino / Clubes',
    author: AUTHORS.evelyn,
    publishedAt: '2026-08-28',
    readTime: '5 min de lectura',
    heroImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=85',
    heroCaption: 'Celebración en el dugout tras conectar el batazo decisivo con bases llenas. Foto: Pelotón B.',
    tags: ['Softball Masculino', 'Bola Rápida', 'Torneo Regional', 'Clubes'],
  },
];

export const PHOTO_GALLERY = [
  {
    id: 'g1',
    title: 'La Tensión en el Montículo',
    caption: 'Concentración total antes de iniciar el movimiento de lanzamiento con corredores en base.',
    category: 'Béisbol',
    shutter: '1/4000s · f/2.8 · ISO 400',
    url: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Evelyn Saldarreaga',
  },
  {
    id: 'g2',
    title: 'Vuelo Hacia la Segunda Almohadilla',
    caption: 'Barrida agresiva rompiendo el doble play en jugada cerrada de segunda base.',
    category: 'Sóftbol',
    shutter: '1/5000s · f/2.8 · ISO 640',
    url: 'https://images.unsplash.com/photo-1599586120429-487e974e1d5e?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Evelyn Saldarreaga',
  },
  {
    id: 'g3',
    title: 'El Contacto Perfecto',
    caption: 'Fuerza e impacto en el punto dulce del bate de maple durante el campeonato interclubes.',
    category: 'Béisbol',
    shutter: '1/6400s · f/2.0 · ISO 200',
    url: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Pelotón B Team',
  },
  {
    id: 'g4',
    title: 'La Visión de la Receptora',
    caption: 'Señales tácticas y encuadre de pitcheo en el juego decisivo de la serie.',
    category: 'Sóftbol',
    shutter: '1/3200s · f/2.8 · ISO 800',
    url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Evelyn Saldarreaga',
  },
];

export const VIDEO_ITEMS = [
  {
    id: 'v1',
    title: 'Cobertura Especial: Final de Sóftbol Femenino Sudamericano',
    description: 'Análisis de jugadas clave, entrevistas en zona mixta y la coronación de las campeonas.',
    duration: '14:20',
    provider: 'youtube' as const,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1599586120429-487e974e1d5e?auto=format&fit=crop&w=800&q=80',
    category: 'Softball',
  },
  {
    id: 'v2',
    title: 'Microdocumental: La Vida en el Diamante de Guayaquil',
    description: 'El día a día de entrenadores, atletas y familias que sostienen la pasión por el diamante.',
    duration: '08:45',
    provider: 'youtube' as const,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80',
    category: 'Crónica',
  },
  {
    id: 'v3',
    title: 'Clínica de Pitcheo: Mecánica y Rotación de Recta Cortada',
    description: 'Sesión técnica explicada por lanzadores profesionales con tomas de alta velocidad.',
    duration: '11:10',
    provider: 'youtube' as const,
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&w=800&q=80',
    category: 'Análisis',
  },
];
