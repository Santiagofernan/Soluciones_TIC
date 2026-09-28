import { profile } from './profile';
import { services } from './services';

// Imported by vite-plugin-seo.ts (Node), so only relative imports and no browser APIs.

export const DEFAULT_SITE_URL = 'https://alsoft-cloud.com';

export const siteName = 'Alsoft-Cloud';
export const ogImage = { path: '/og-image.png', width: 1200, height: 630, alt: 'Alsoft-Cloud · Ciberseguridad e infraestructura TI para empresas' };

export const business = {
  email: 'contacto.alsoft@gmail.com',
  telephone: '+57 320 803 3546',
  whatsappUrl: 'https://wa.me/573208033546',
  locality: 'Garzón',
  region: 'Huila',
  regionCode: 'CO-HUI',
  country: 'CO',
};

export const personName = 'Jorge Alejandro López Salazar';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogType: 'website' | 'profile';
}

export const pages = {
  home: {
    path: '/',
    title: `${siteName} | Ciberseguridad e Infraestructura TI en Huila`,
    description:
      'Ciberseguridad, infraestructura TI, redes, cámaras CCTV, software y consultoría para empresas en Huila y toda Colombia. Solicita tu diagnóstico.',
    keywords:
      'ciberseguridad, infraestructura TI, redes empresariales, seguridad de la información, CCTV, cámaras de seguridad, desarrollo de software, consultoría TI, soporte técnico empresas, ISO 27001, Garzón, Huila, Neiva, Colombia',
    ogType: 'website',
  },
  profile: {
    path: '/perfil',
    title: `${siteName} | ${personName}, Coordinador TIC`,
    description:
      'Ingeniero de sistemas y especialista en Seguridad de la Información, con 12 años coordinando equipos de tecnología, innovación y seguridad digital en el Huila.',
    keywords:
      'Jorge Alejandro López Salazar, coordinador TIC, especialista en seguridad de la información, ingeniero de sistemas, ciberseguridad, COOCENTRAL, Garzón, Huila',
    ogType: 'profile',
  },
} satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof pages;

export function findPage(pathname: string): PageSeo {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return Object.values(pages).find((page) => page.path === normalized) ?? pages.home;
}

export function absoluteUrl(siteUrl: string, path: string) {
  return `${siteUrl.replace(/\/+$/, '')}${path === '/' ? '/' : path}`;
}

export function buildStructuredData(siteUrl: string, key: PageKey) {
  const home = absoluteUrl(siteUrl, '/');
  const profileUrl = absoluteUrl(siteUrl, pages.profile.path);
  const organizationId = `${home}#organization`;
  const websiteId = `${home}#website`;
  const personId = `${profileUrl}#person`;

  const address = {
    '@type': 'PostalAddress',
    addressLocality: business.locality,
    addressRegion: business.region,
    addressCountry: business.country,
  };

  const organization = {
    '@type': 'ProfessionalService',
    '@id': organizationId,
    name: siteName,
    url: home,
    logo: absoluteUrl(siteUrl, '/icon-512.png'),
    image: absoluteUrl(siteUrl, ogImage.path),
    description: pages.home.description,
    email: business.email,
    telephone: business.telephone,
    address,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Huila' },
      { '@type': 'Country', name: 'Colombia' },
    ],
    founder: { '@id': personId },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: business.telephone,
      email: business.email,
      url: business.whatsappUrl,
      availableLanguage: ['es'],
    },
    knowsAbout: services.map((service) => service.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de tecnología para empresas',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          serviceType: service.category,
          provider: { '@id': organizationId },
          areaServed: { '@type': 'Country', name: 'Colombia' },
        },
      })),
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: home,
    name: siteName,
    description: pages.home.description,
    inLanguage: 'es-CO',
    publisher: { '@id': organizationId },
  };

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: personName,
    jobTitle: profile.title,
    description: profile.bio,
    url: profileUrl,
    image: absoluteUrl(siteUrl, '/icon-512.png'),
    address,
    sameAs: [profile.linkedinUrl],
    worksFor: profile.experience.map((job) => ({ '@type': 'Organization', name: job.organization })),
    alumniOf: profile.education
      .filter((item) => item.institution)
      .map((item) => ({ '@type': 'EducationalOrganization', name: item.institution })),
    hasCredential: profile.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      recognizedBy: { '@type': 'Organization', name: cert.issuer },
    })),
    knowsAbout: [...profile.skills.map((skill) => skill.name), ...profile.technologies],
  };

  if (key === 'home') {
    return { '@context': 'https://schema.org', '@graph': [organization, website, person] };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${profileUrl}#webpage`,
        url: profileUrl,
        name: pages.profile.title,
        description: pages.profile.description,
        inLanguage: 'es-CO',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: home },
            { '@type': 'ListItem', position: 2, name: 'Perfil', item: profileUrl },
          ],
        },
      },
      person,
      website,
      organization,
    ],
  };
}
