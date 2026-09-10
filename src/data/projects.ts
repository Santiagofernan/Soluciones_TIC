export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  placeholder: boolean;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Implementación de infraestructura TI',
    category: 'Infraestructura',
    description: 'Diseño e implementación de infraestructura tecnológica empresarial.',
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    slug: 'implementacion-infraestructura-ti',
    placeholder: true,
  },
  {
    id: '02',
    title: 'Optimización de red empresarial',
    category: 'Redes',
    description: 'Rediseño y optimización de red corporativa para mayor rendimiento y seguridad.',
    image: 'https://images.pexels.com/photos/4682189/pexels-photo-4682189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    slug: 'optimizacion-red-empresarial',
    placeholder: true,
  },
  {
    id: '03',
    title: 'Sistema de seguridad electrónica',
    category: 'CCTV',
    description: 'Instalación de sistema de videovigilancia IP con acceso remoto.',
    image: 'https://images.pexels.com/photos/19782580/pexels-photo-19782580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    slug: 'sistema-seguridad-electronica',
    placeholder: true,
  },
  {
    id: '04',
    title: 'Automatización de procesos',
    category: 'Software',
    description: 'Desarrollo de sistema interno para automatización de procesos empresariales.',
    image: 'https://images.pexels.com/photos/36496927/pexels-photo-36496927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    slug: 'automatizacion-procesos',
    placeholder: true,
  },
];
