export interface ProfileExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface ProfileEducation {
  id: string;
  title: string;
  institution: string;
  period: string;
}

export interface ProfileCertification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  title: string;
  photo: string | null;
  bio: string;
  summary: string;
  tags: string[];
  experience: ProfileExperience[];
  education: ProfileEducation[];
  certifications: ProfileCertification[];
  technologies: string[];
}

export const profile: ProfileData = {
  firstName: 'JORGE',
  lastName: 'A.',
  title: 'Ingeniero de Sistemas',
  photo: null,
  bio: 'Profesional orientado al diseño, implementación y optimización de soluciones tecnológicas para empresas.',
  summary:
    'Diseño, implemento y protejo la infraestructura de empresas que necesitan sistemas estables, seguros y preparados para crecer.',
  tags: ['INFRAESTRUCTURA TI', 'CIBERSEGURIDAD', 'REDES', 'SOFTWARE'],
  experience: [
    {
      id: '01',
      role: 'Consultoría e implementación TI',
      organization: 'Proyectos empresariales',
      period: 'Actualidad',
      description:
        'Acompañamiento en ciberseguridad, infraestructura, redes, seguridad electrónica y desarrollo de soluciones internas.',
    },
    {
      id: '02',
      role: 'Diseño de infraestructura',
      organization: 'Entornos corporativos',
      period: 'Trayectoria profesional',
      description:
        'Servidores, virtualización, Active Directory y plataformas empresariales orientadas a continuidad y disponibilidad.',
    },
  ],
  education: [
    {
      id: '01',
      title: 'Ingeniería de Sistemas',
      institution: '[Institución]',
      period: '[Año]',
    },
  ],
  certifications: [
    {
      id: '01',
      name: '[Certificación]',
      issuer: '[Entidad]',
      year: '[Año]',
    },
  ],
  technologies: [
    'Windows Server',
    'Linux',
    'VMware',
    'Active Directory',
    'Firewall / VPN',
    'VLAN',
    'ISO 27001',
    'CCTV IP',
  ],
};
