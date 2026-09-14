export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  slug: string;
}

export const resources: Resource[] = [
  {
    id: '01',
    title: '¿Cómo saber si mi empresa está realmente protegida contra ataques?',
    category: 'Ciberseguridad',
    description: 'Guía práctica para evaluar el nivel de protección de tu infraestructura.',
    date: '2026-09-01',
    slug: 'empresa-protegida-contra-ataques',
  },
  {
    id: '02',
    title: '¿Cuándo una empresa necesita un servidor?',
    category: 'Infraestructura',
    description: 'Señales claras de que tu empresa ha superado la etapa de equipos independientes.',
    date: '2026-08-20',
    slug: 'cuando-una-empresa-necesita-un-servidor',
  },
  {
    id: '03',
    title: '10 errores de seguridad que cometen las PYMES',
    category: 'Ciberseguridad',
    description: 'Los errores más frecuentes y cómo evitarlos en tu empresa.',
    date: '2026-08-10',
    slug: '10-errores-seguridad-pymes',
  },
  {
    id: '04',
    title: '¿Qué debo tener en cuenta antes de instalar cámaras IP?',
    category: 'CCTV',
    description: 'Aspectos técnicos y de diseño antes de implementar un sistema de videovigilancia.',
    date: '2026-07-28',
    slug: 'antes-de-instalar-camaras-ip',
  },
  {
    id: '05',
    title: '¿Por qué mi empresa debería tener copias de seguridad?',
    category: 'Continuidad',
    description: 'La importancia de las copias de seguridad para la supervivencia del negocio.',
    date: '2026-07-15',
    slug: 'por-que-tener-copias-de-seguridad',
  },
  {
    id: '06',
    title: '¿Servidor físico o nube?',
    category: 'Infraestructura',
    description: 'Comparativa para decidir la mejor opción para tu empresa.',
    date: '2026-07-01',
    slug: 'servidor-fisico-o-nube',
  },
  {
    id: '07',
    title: '¿Cómo proteger la información de mi empresa?',
    category: 'Ciberseguridad',
    description: 'Estrategias efectivas para salvaguardar los datos empresariales.',
    date: '2026-06-18',
    slug: 'como-proteger-informacion-empresa',
  },
  {
    id: '08',
    title: '¿Qué es ISO 27001 y para qué sirve?',
    category: 'Normativas',
    description: 'Una introducción clara a la norma de gestión de seguridad de la información.',
    date: '2026-06-05',
    slug: 'que-es-iso-27001',
  },
];
