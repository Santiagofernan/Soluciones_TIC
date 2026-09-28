import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import { AnimatePresence, animate, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  MapPin,
  Network,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
  Sprout,
  TerminalSquare,
  type LucideIcon,
} from 'lucide-react';
import { profile } from '@/data/profile';

const YEARS_OF_EXPERIENCE = 12;

const stats = [
  { value: YEARS_OF_EXPERIENCE, label: 'Años de experiencia' },
  { value: 5000, label: 'Productores impactados' },
  { value: profile.certifications.length, label: 'Certificaciones Cisco' },
  { value: profile.projects.length, label: 'Proyectos destacados' },
];

const serviceIcons: Record<string, LucideIcon> = {
  '01': Network,
  '02': ShieldCheck,
  '03': Lightbulb,
};

const skillCategoryIcons: Record<string, LucideIcon> = {
  Gestión: Network,
  Seguridad: ShieldCheck,
  Innovación: Lightbulb,
  Sector: Sprout,
};

type TabId = 'experiencia' | 'formacion' | 'certificaciones' | 'habilidades';

const tabs: { id: TabId; label: string; icon: LucideIcon; count: number }[] = [
  { id: 'experiencia', label: 'Experiencia', icon: BriefcaseBusiness, count: profile.experience.length },
  { id: 'formacion', label: 'Formación', icon: GraduationCap, count: profile.education.length },
  { id: 'certificaciones', label: 'Certificaciones', icon: Award, count: profile.certifications.length },
  { id: 'habilidades', label: 'Habilidades', icon: TerminalSquare, count: profile.skills.length + profile.technologies.length },
];

function toTitleCase(value: string) {
  return value.toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase());
}

export default function Profile() {
  return (
    <main className="relative overflow-hidden pb-24 sm:pb-32">
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-neon-primary/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute top-[900px] -left-20 h-80 w-80 rounded-full bg-neon-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28">
        <ProfileHero />
        <CareerTabs />
        <FeaturedProjects />
        <ProfessionalServices />
        <ProfileCta />
      </div>
    </main>
  );
}

/* ============== Hero ============== */

function ProfileHero() {
  return (
    <section aria-labelledby="profile-title" className="grid gap-5 lg:grid-cols-12 lg:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-w-0 overflow-hidden rounded-3xl border border-neon-primary/15 bg-black-secondary/60 p-6 sm:p-9 lg:col-span-7 lg:p-10"
      >
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-neon-primary/[0.07] blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-fine opacity-30 pointer-events-none" aria-hidden="true" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          <ProfileBadge />
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-primary/25 bg-neon-primary/[0.06] px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-neon-light uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-primary" />
              Perfil profesional
            </span>
            <h1 id="profile-title" className="mt-4 text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {toTitleCase(profile.firstName)}{' '}
              <span className="text-neon-primary">{toTitleCase(profile.lastName)}</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <InfoChip icon={BriefcaseBusiness}>{profile.title}</InfoChip>
              {profile.experience[0] && <InfoChip icon={Building2}>{profile.experience[0].organization}</InfoChip>}
              <InfoChip icon={MapPin}>{profile.location}</InfoChip>
            </div>
          </div>
        </div>

        <p className="relative mt-7 max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg">{profile.bio}</p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {profile.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 + index * 0.06 }}
              whileHover={{ y: -2 }}
              className="cursor-default rounded-lg border border-neon-primary/15 bg-neon-primary/[0.05] px-3 py-1.5 font-mono text-[10px] tracking-wider text-neon-light transition-colors hover:border-neon-primary/40 hover:bg-neon-primary/10"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-neon-primary px-5 py-3 text-sm font-medium text-black-primary transition-all hover:bg-neon-light hover:shadow-[0_0_24px_rgba(55,190,118,0.3)]"
          >
            Solicitar diagnóstico
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 px-5 py-3 text-sm font-medium text-white transition-all hover:border-neon-primary/40 hover:text-neon-light"
          >
            Ver perfil en LinkedIn
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <div className="flex min-w-0 flex-col gap-5 lg:col-span-5">
        <motion.blockquote
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-black-secondary/60 p-6 sm:p-8"
        >
          <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full border border-neon-primary/10" aria-hidden="true" />
          <Quote className="h-8 w-8 text-neon-primary/50" aria-hidden="true" />
          <p className="relative mt-4 text-lg font-medium leading-snug text-white sm:text-xl">{profile.summary}</p>
          <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-gray-text/80 uppercase">
            — {toTitleCase(profile.firstName.split(' ')[0])}
          </p>
        </motion.blockquote>

        <div className="grid flex-1 grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
              className="min-w-0"
            >
              <SpotlightCard className="flex h-full flex-col justify-between p-5">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <CountUp to={stat.value} />
                </p>
                <p className="mt-2 text-xs leading-snug text-gray-text">{stat.label}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.15 }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      className="group relative h-28 w-28 shrink-0 sm:h-32 sm:w-32"
      role="img"
      aria-label="TIC"
    >
      <span className="absolute -inset-3 rounded-[2rem] bg-neon-primary/15 blur-2xl transition-opacity duration-300 group-hover:bg-neon-primary/25" aria-hidden="true" />
      <span className="absolute -inset-[3px] overflow-hidden rounded-[1.75rem]" aria-hidden="true">
        <span className="brand-ring absolute -inset-1/2" />
      </span>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-black-secondary bg-gradient-to-br from-black-surface via-black-secondary to-black-primary">
        <div className="absolute inset-0 tech-grid-fine opacity-40" aria-hidden="true" />
        <span className="absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-neon-primary/60" aria-hidden="true" />
        <span className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-neon-primary/60" aria-hidden="true" />
        <span className="brand-shimmer relative font-mono text-4xl font-bold tracking-[0.12em] sm:text-5xl" aria-hidden="true">
          TIC
        </span>
        <span className="relative mt-1.5 h-px w-10 bg-gradient-to-r from-transparent via-neon-primary to-transparent transition-all duration-300 group-hover:w-14" aria-hidden="true" />
      </div>
      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black-secondary bg-neon-primary" title="Disponible">
        <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white/80" />
      </span>
    </motion.div>
  );
}

function InfoChip({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-gray-text">
      <Icon className="h-3.5 w-3.5 text-neon-primary/80" aria-hidden="true" />
      {children}
    </span>
  );
}

/* ============== Trayectoria (tabs) ============== */

function CareerTabs() {
  const [active, setActive] = useState<TabId>('experiencia');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section aria-labelledby="career-title" className="mt-20 sm:mt-28">
      <SectionIntro
        eyebrow="Trayectoria"
        title="Experiencia y formación"
        description="Explora su recorrido profesional, formación académica, certificaciones y habilidades."
        id="career-title"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="mt-10 overflow-hidden rounded-3xl border border-white/8 bg-black-secondary/55"
      >
        <div role="tablist" aria-label="Trayectoria profesional" className="flex gap-1 overflow-x-auto border-b border-white/8 p-2">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-gray-text hover:text-neon-light'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="profile-tab-pill"
                    className="absolute inset-0 rounded-xl border border-neon-primary/30 bg-neon-primary/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`relative h-4 w-4 ${isActive ? 'text-neon-primary' : 'text-gray-text/70'}`} aria-hidden="true" />
                <span className="relative">{tab.label}</span>
                <span
                  className={`relative rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                    isActive ? 'bg-neon-primary/20 text-neon-light' : 'bg-white/5 text-gray-text/70'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="min-h-[280px] p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              id={`panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {active === 'experiencia' && <ExperiencePanel />}
              {active === 'formacion' && <EducationPanel />}
              {active === 'certificaciones' && <CertificationsPanel />}
              {active === 'habilidades' && <SkillsPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

function ExperiencePanel() {
  return (
    <ol className="relative ml-2.5 space-y-6 border-l border-neon-primary/20 pl-8">
      {profile.experience.map((item) => {
        const isCurrent = item.period.toLowerCase() === 'actualidad';
        return (
          <li key={item.id} className="relative">
            <span className="absolute -left-[42px] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-neon-primary/50 bg-black-secondary">
              <span className={`h-2 w-2 rounded-full bg-neon-primary ${isCurrent ? 'animate-pulse' : ''}`} />
            </span>
            <SpotlightCard className="p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-neon-light">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    {item.organization}
                  </p>
                </div>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border px-3 py-1 font-mono text-[10px] tracking-wider uppercase ${
                    isCurrent ? 'border-neon-primary/30 bg-neon-primary/10 text-neon-light' : 'border-white/10 text-gray-text'
                  }`}
                >
                  {isCurrent && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-primary" />}
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-text">{item.description}</p>
            </SpotlightCard>
          </li>
        );
      })}
    </ol>
  );
}

function EducationPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {profile.education.map((item) => (
        <SpotlightCard key={item.id} className="h-full p-5 sm:p-6">
          <IconBadge icon={GraduationCap} />
          <h3 className="mt-5 text-base font-semibold leading-snug text-white">{item.degree}</h3>
          {item.institution && <p className="mt-2 text-sm text-gray-text">{item.institution}</p>}
          {item.period && <p className="mt-4 font-mono text-[10px] tracking-wider text-neon-primary/80 uppercase">{item.period}</p>}
        </SpotlightCard>
      ))}
    </div>
  );
}

function CertificationsPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {profile.certifications.map((item) => (
        <SpotlightCard key={item.id} className="h-full p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <IconBadge icon={Award} />
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] tracking-wider text-gray-text uppercase">
              {item.year}
            </span>
          </div>
          <h3 className="mt-5 text-base font-semibold leading-snug text-white">{item.name}</h3>
          <p className="mt-2 text-sm text-neon-light">{item.issuer}</p>
          {item.credentialUrl && (
            <a
              href={item.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-text transition-colors hover:text-neon-light"
            >
              Ver credencial
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </SpotlightCard>
      ))}
    </div>
  );
}

function SkillsPanel() {
  const categories = Array.from(new Set(profile.skills.map((skill) => skill.category)));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((category) => {
          const Icon = skillCategoryIcons[category] ?? Sparkles;
          return (
            <SpotlightCard key={category} className="h-full p-5">
              <div className="flex items-center gap-3">
                <IconBadge icon={Icon} small />
                <p className="font-mono text-[10px] tracking-[0.18em] text-gray-text/80 uppercase">{category}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span key={skill.id} className="rounded-lg border border-neon-primary/15 bg-neon-primary/[0.05] px-3 py-1.5 text-sm text-white">
                      {skill.name}
                    </span>
                  ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <div>
        <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-gray-text/80 uppercase">Tecnologías</p>
        <div className="flex flex-wrap gap-2">
          {profile.technologies.map((technology) => (
            <motion.span
              key={technology}
              whileHover={{ y: -2 }}
              className="cursor-default rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-gray-text transition-colors hover:border-neon-primary/40 hover:text-neon-light"
            >
              {technology}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============== Proyectos ============== */

function FeaturedProjects() {
  return (
    <section aria-labelledby="projects-title" className="mt-20 sm:mt-28">
      <SectionIntro
        eyebrow="Impacto"
        title="Proyectos destacados"
        description="Iniciativas que combinan tecnología, datos e innovación al servicio del sector agropecuario."
        id="projects-title"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {profile.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-0"
          >
            <SpotlightCard className="flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest text-neon-primary/80">PROYECTO {project.id}</span>
                <Sparkles className="h-4 w-4 text-neon-primary/50 transition-transform duration-300 group-hover:rotate-12 group-hover:text-neon-primary" aria-hidden="true" />
              </div>

              {project.impact && (
                <div className="mt-6 border-b border-white/8 pb-5">
                  {project.impact.value !== undefined ? (
                    <p className="text-4xl font-bold leading-none tracking-tight text-white">
                      <CountUp to={project.impact.value} />
                    </p>
                  ) : (
                    <Lightbulb className="h-9 w-9 text-neon-primary" aria-hidden="true" />
                  )}
                  <p className="mt-2 font-mono text-[10px] tracking-wider text-gray-text/80 uppercase">{project.impact.label}</p>
                </div>
              )}

              <h3 className="mt-5 text-lg font-semibold leading-snug text-white">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-text">{project.description}</p>

              {project.technologies.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-md border border-neon-primary/20 bg-neon-primary/[0.06] px-2 py-1 font-mono text-[10px] tracking-wider text-neon-light">
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============== Servicios ============== */

function ProfessionalServices() {
  return (
    <section aria-labelledby="services-title" className="mt-20 sm:mt-28">
      <SectionIntro
        eyebrow="Servicios"
        title="Cómo puedo ayudarte"
        description="Áreas en las que aporta experiencia para fortalecer la tecnología de tu organización."
        id="services-title"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {profile.services.map((service, index) => {
          const Icon = serviceIcons[service.id] ?? Sparkles;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-0"
            >
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-primary/20 bg-neon-primary/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:border-neon-primary/50">
                    <Icon className="h-6 w-6 text-neon-primary" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-gray-text/60">{service.id}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{service.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-text">{service.description}</p>
                <a
                  href="/#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neon-light transition-colors hover:text-white"
                >
                  Hablemos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ============== CTA ============== */

function ProfileCta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative mt-20 overflow-hidden rounded-3xl border border-neon-primary/20 bg-neon-primary/[0.05] p-7 sm:mt-28 sm:p-10"
    >
      <div className="absolute right-0 top-0 h-full w-1/2 tech-grid-fine opacity-30" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] tracking-[0.2em] text-neon-primary uppercase">Siguiente paso</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">¿Necesitas una solución tecnológica?</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-text">Cuéntanos qué necesita tu empresa y revisemos juntos el camino adecuado.</p>
        </div>
        <a
          href="/#contacto"
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-neon-primary px-5 py-3.5 text-sm font-medium text-black-primary transition-all hover:bg-neon-light hover:shadow-[0_0_24px_rgba(55,190,118,0.3)]"
        >
          Solicitar diagnóstico
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </motion.section>
  );
}

/* ============== Shared ============== */

function SectionIntro({ eyebrow, title, description, id }: { eyebrow: string; title: string; description: string; id: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl"
    >
      <span className="font-mono text-[10px] tracking-[0.2em] text-neon-primary uppercase">{eyebrow}</span>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-text sm:text-base">{description}</p>
    </motion.div>
  );
}

function SpotlightCard({ className = '', children }: { className?: string; children: ReactNode }) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-black-secondary/60 transition-all duration-300 hover:-translate-y-1 hover:border-neon-primary/30 hover:shadow-[0_14px_40px_rgba(55,190,118,0.08)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(55,190,118,0.12), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function IconBadge({ icon: Icon, small }: { icon: LucideIcon; small?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-neon-primary/20 bg-neon-primary/[0.06] transition-colors duration-300 group-hover:border-neon-primary/50 ${
        small ? 'h-9 w-9' : 'h-11 w-11'
      }`}
    >
      <Icon className={`text-neon-primary ${small ? 'h-4 w-4' : 'h-5 w-5'}`} aria-hidden="true" />
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value.toLocaleString('es-CO')}</span>;
}
