export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  impact?: { highlight: string; label: string };
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface Profile {
  fullName: string;
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  summary: string;
  location: string;
  linkedinUrl: string;
  tags: string[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  skills: Skill[];
  technologies: string[];
  services: Service[];
}

export const profile: Profile = {
  fullName: 'JORGE ALEJANDRO LOPEZ SALAZAR',
  firstName: 'JORGE ALEJANDRO',
  lastName: 'LOPEZ SALAZAR',
  title: 'Coordinador TIC',
  bio: 'Ingeniero de sistemas, Especialista en Seguridad de la Información y Coordinador TIC en COOCENTRAL, con 12 años de experiencia en coordinación de equipos de tecnología, innovación y seguridad digital.',
  summary:
    'Creo que podemos lograr grandes cosas pensando de manera diferente, integrando tecnología, innovación y seguridad para apoyar procesos organizacionales y del sector agropecuario.',
  location: 'Garzón, Huila, Colombia',
  linkedinUrl: 'https://www.linkedin.com/in/jorge-alejandro-lopez-salazar-294231261/',
  tags: ['COORDINACIÓN TIC', 'SEGURIDAD DIGITAL', 'INNOVACIÓN', 'TECNOLOGÍA PARA EL AGRO'],
  experience: [
    {
      id: '01',
      role: 'Coordinador de TIC',
      organization: 'COOCENTRAL',
      period: 'Actualidad',
      description:
        'Administración de tecnologías de la información y coordinación de equipos de tecnología, innovación y seguridad digital.',
    },
  ],
  education: [
    {
      id: '01',
      degree: 'Especialista en Seguridad de la Información',
      institution: 'Politécnico Grancolombiano',
      period: 'ene. 2025 - abr. 2026',
    },
    {
      id: '02',
      degree: 'Ingeniería de Sistemas',
      institution: '',
      period: '',
    },
  ],
  certifications: [
    {
      id: '01',
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      year: 'may. 2022',
    },
    {
      id: '02',
      name: 'Cyber Threat Management',
      issuer: 'Cisco',
      year: 'jun. 2026',
    },
  ],
  projects: [
    {
      id: '01',
      name: 'A-catar',
      description:
        'Aplicación para registrar y analizar las muestras de los asociados, apoyando la mejora continua del proceso de calidad en COOCENTRAL.',
      technologies: [],
      impact: { highlight: 'Calidad', label: 'Mejora continua del proceso' },
    },
    {
      id: '02',
      name: 'Caracterización de productores de café y cacao',
      description:
        'Adopción de herramientas digitales para caracterizar a los productores de café y cacao del departamento del Huila.',
      technologies: ['KoboToolbox', 'Power BI'],
      impact: { highlight: 'Agro digital', label: 'Datos para la toma de decisiones' },
    },
    {
      id: '03',
      name: 'Solución para la gestión sostenible del paisaje cafetero',
      description:
        'Liderazgo de un equipo que desarrolló una solución integral para apoyar la gestión sostenible del paisaje cafetero.',
      technologies: [],
      impact: { highlight: 'Liderazgo', label: 'Equipo de innovación' },
    },
  ],
  skills: [
    { id: '01', name: 'Coordinación de equipos TIC', category: 'Gestión' },
    { id: '02', name: 'Seguridad de la Información', category: 'Seguridad' },
    { id: '03', name: 'Seguridad digital', category: 'Seguridad' },
    { id: '04', name: 'Innovación tecnológica', category: 'Innovación' },
    { id: '05', name: 'Tecnología aplicada al agro', category: 'Sector' },
  ],
  technologies: [
    'KoboToolbox',
    'Power BI',
    'Hikvision',
    'Cisco',
  ],
  services: [
    {
      id: '01',
      name: 'Coordinación TIC',
      description: 'Gestión de equipos y tecnologías de la información para apoyar los objetivos de la organización.',
    },
    {
      id: '02',
      name: 'Seguridad de la Información',
      description: 'Gestión de seguridad digital y fortalecimiento de la cultura de seguridad en los equipos de trabajo.',
    },
    {
      id: '03',
      name: 'Innovación tecnológica',
      description: 'Desarrollo y adopción de herramientas digitales para mejorar procesos y toma de decisiones.',
    },
  ],
};
