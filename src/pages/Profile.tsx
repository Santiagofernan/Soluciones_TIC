import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  MapPin,
  Network,
  PanelsTopLeft,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';
import { profile } from '@/data/profile';

const summaryItems = [
  { label: 'Experiencia', value: '12 años', icon: BriefcaseBusiness },
  { label: 'Especialidad', value: 'Seguridad de la Información', icon: ShieldCheck },
  { label: 'Rol', value: 'Coordinación TIC', icon: Network },
  { label: 'Enfoque', value: 'Innovación tecnológica', icon: Lightbulb },
  { label: 'Sector', value: 'Tecnología aplicada al agro', icon: PanelsTopLeft },
];

export default function Profile() {
  return (
    <main className="relative overflow-hidden pb-24 sm:pb-32">
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-neon-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28">
        <ProfileHero />
        <ProfileSummary />

        <section aria-labelledby="profile-information" className="mt-20 sm:mt-28">
          <SectionIntro
            eyebrow="Trayectoria"
            title="Información profesional"
            description="Una mirada clara a la experiencia, formación y soluciones que construyen su perfil profesional."
            id="profile-information"
          />

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-12">
            <ProfileCard title="Experiencia laboral" index="01" icon={BriefcaseBusiness} className="lg:col-span-7">
              <ExperienceTimeline />
            </ProfileCard>

            <ProfileCard title="Formación académica" index="02" icon={GraduationCap} className="lg:col-span-5">
              <EducationList />
            </ProfileCard>

            <ProfileCard title="Habilidades y tecnologías" index="03" icon={TerminalSquare} className="lg:col-span-5">
              <SkillsPanel />
            </ProfileCard>

            <ProfileCard title="Certificaciones" index="04" icon={ShieldCheck} className="lg:col-span-7">
              <CertificationList />
            </ProfileCard>

            <ProfileCard title="Proyectos" index="05" icon={PanelsTopLeft} className="lg:col-span-7">
              <ProjectList />
            </ProfileCard>

            <ProfileCard title="Servicios profesionales" index="06" icon={Sparkles} className="lg:col-span-5">
              <ServiceList />
            </ProfileCard>
          </div>
        </section>

        <ProfileCta />
      </div>
    </main>
  );
}

function ProfileHero() {
  return (
    <section aria-labelledby="profile-title" className="relative grid gap-5 xl:grid-cols-[1.35fr_0.72fr_0.93fr] xl:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-w-0 rounded-2xl border border-neon-primary/10 bg-black-secondary/45 p-6 sm:p-9 lg:p-11"
      >
        <span className="font-mono text-[10px] tracking-[0.22em] text-neon-primary uppercase">Perfil profesional</span>
        <h1 id="profile-title" className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.fullName}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-sm tracking-wider text-neon-light">{profile.title}</span>
          <span className="hidden h-1 w-1 rounded-full bg-neon-primary/50 sm:block" />
          <span className="inline-flex items-center gap-2 text-sm text-gray-text">
            <MapPin className="h-4 w-4 text-neon-primary/70" aria-hidden="true" />
            {profile.location}
          </span>
        </div>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-text sm:text-lg">{profile.bio}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {profile.tags.map((tag) => (
            <span key={tag} className="rounded-lg border border-neon-primary/15 bg-neon-primary/[0.05] px-3 py-2 font-mono text-[10px] tracking-wider text-neon-light">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex min-w-0 flex-col justify-start rounded-2xl border border-white/10 bg-black-secondary/60 p-6 sm:p-8"
      >
        <div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-gray-text/60 uppercase">Conexiones</span>
          <div className="mt-6 space-y-3">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-neon-primary/20 bg-neon-primary/[0.06] px-4 py-3.5 text-sm text-neon-light transition-all hover:border-neon-primary/50 hover:bg-neon-primary/10"
            >
              <span>Ver perfil en LinkedIn</span>
              <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="/#contacto"
              className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3.5 text-sm text-gray-text transition-all hover:border-neon-primary/35 hover:text-neon-light"
            >
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-white/8 pt-5 text-xs leading-relaxed text-gray-text/70">
          {profile.location}
        </p>
      </motion.div>

      <TechVisual />
    </section>
  );
}

function TechVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative min-h-[280px] overflow-hidden rounded-2xl border border-neon-primary/20 bg-black-secondary/75 p-6 sm:min-h-[320px] sm:p-8"
      aria-label="Visualización abstracta de sistemas conectados"
    >
      <div className="absolute inset-0 tech-grid-fine opacity-60" aria-hidden="true" />
      <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-neon-primary/15" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-neon-primary/10" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-neon-primary/70">SYSTEMS / SECURITY</span>
          <span className="flex items-center gap-2 font-mono text-[10px] text-neon-primary/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon-primary shadow-[0_0_10px_rgba(25,229,107,0.8)]" />
            ACTIVE
          </span>
        </div>

        <div className="relative mx-auto my-7 flex h-32 w-44 items-center justify-center">
          <div className="absolute h-32 w-32 animate-pulse rounded-full border border-neon-primary/20" />
          <div className="absolute h-20 w-20 rounded-full border border-neon-primary/35 bg-neon-primary/[0.06]" />
          <ShieldCheck className="relative h-9 w-9 text-neon-primary" aria-hidden="true" />
          <Network className="absolute left-0 top-2 h-5 w-5 text-neon-primary/70" aria-hidden="true" />
          <Server className="absolute bottom-1 right-1 h-5 w-5 text-neon-primary/70" aria-hidden="true" />
          <TerminalSquare className="absolute right-0 top-1 h-5 w-5 text-neon-primary/70" aria-hidden="true" />
          <span className="absolute left-6 bottom-0 h-1.5 w-1.5 rounded-full bg-neon-primary" />
        </div>

        <p className="max-w-xs text-lg font-medium leading-snug text-white sm:text-xl">
          Tecnología, innovación y seguridad para avanzar con claridad.
        </p>
      </div>
    </motion.div>
  );
}

function ProfileSummary() {
  return (
    <section aria-labelledby="profile-summary" className="mt-5">
      <h2 id="profile-summary" className="sr-only">Resumen profesional</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {summaryItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + index * 0.06 }}
              className="group min-w-0 rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-neon-primary/25 hover:bg-neon-primary/[0.03]"
            >
              <Icon className="h-4 w-4 text-neon-primary/70" aria-hidden="true" />
              <p className="mt-4 font-mono text-[10px] tracking-wider text-gray-text/60 uppercase">{item.label}</p>
              <p className="mt-1 text-sm leading-snug text-white">{item.value}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, description, id }: { eyebrow: string; title: string; description: string; id: string }) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-[10px] tracking-[0.2em] text-neon-primary uppercase">{eyebrow}</span>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-gray-text sm:text-base">{description}</p>
    </div>
  );
}

function ProfileCard({ title, index, icon: Icon, className = '', children }: { title: string; index: string; icon: typeof BriefcaseBusiness; className?: string; children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`group min-w-0 rounded-2xl border border-white/8 bg-black-secondary/55 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-primary/25 hover:shadow-[0_12px_40px_rgba(25,229,107,0.07)] sm:p-8 ${className}`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neon-primary/15 bg-neon-primary/[0.05]">
            <Icon className="h-5 w-5 text-neon-primary" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <span className="shrink-0 font-mono text-[10px] tracking-widest text-neon-primary/50">{index}</span>
      </div>
      <div className="pt-6">{children}</div>
    </motion.section>
  );
}

function ExperienceTimeline() {
  return (
    <ol className="space-y-7">
      {profile.experience.map((item) => (
        <li key={item.id} className="relative pl-7 before:absolute before:left-[5px] before:top-2 before:h-full before:w-px before:bg-neon-primary/20 last:before:hidden">
          <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-neon-primary bg-black-secondary" />
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-white">{item.role}</h4>
              <p className="mt-1 font-mono text-[10px] tracking-wider text-neon-primary/70 uppercase">{item.organization}</p>
            </div>
            <span className="shrink-0 font-mono text-[10px] tracking-wider text-gray-text/60">{item.period}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-text">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

function EducationList() {
  return (
    <ul className="space-y-5">
      {profile.education.map((item) => (
        <li key={item.id} className="border-b border-white/8 pb-5 last:border-0 last:pb-0">
          <h4 className="text-base font-semibold leading-snug text-white">{item.degree}</h4>
          {item.institution && <p className="mt-2 text-sm text-gray-text">{item.institution}</p>}
          {item.period && <p className="mt-2 font-mono text-[10px] tracking-wider text-neon-primary/70">{item.period}</p>}
        </li>
      ))}
    </ul>
  );
}

function CertificationList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {profile.certifications.map((item) => (
        <li key={item.id} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
          <h4 className="text-sm font-semibold leading-snug text-white">{item.name}</h4>
          <p className="mt-2 text-sm text-gray-text">{item.issuer}</p>
          <p className="mt-3 font-mono text-[10px] tracking-wider text-neon-primary/70">{item.year}</p>
        </li>
      ))}
    </ul>
  );
}

function SkillsPanel() {
  const categories = Array.from(new Set(profile.skills.map((skill) => skill.category)));

  return (
    <div className="space-y-5">
      {categories.map((category) => (
        <div key={category}>
          <p className="mb-2 font-mono text-[10px] tracking-wider text-gray-text/60 uppercase">{category}</p>
          <div className="flex flex-wrap gap-2">
            {profile.skills.filter((skill) => skill.category === category).map((skill) => (
              <span key={skill.id} className="rounded-lg border border-neon-primary/15 bg-neon-primary/[0.05] px-3 py-1.5 text-xs text-gray-text">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="border-t border-white/8 pt-5">
        <p className="mb-2 font-mono text-[10px] tracking-wider text-gray-text/60 uppercase">Tecnologías</p>
        <div className="flex flex-wrap gap-2">
          {profile.technologies.map((technology) => (
            <span key={technology} className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-text">{technology}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectList() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {profile.projects.map((project) => (
        <article key={project.id} className="rounded-xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-neon-primary/20">
          <h4 className="text-base font-semibold leading-snug text-white">{project.name}</h4>
          <p className="mt-3 text-sm leading-relaxed text-gray-text">{project.description}</p>
          {project.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <span key={technology} className="font-mono text-[10px] tracking-wider text-neon-primary/70">{technology}</span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function ServiceList() {
  return (
    <ul className="space-y-5">
      {profile.services.map((service) => (
        <li key={service.id} className="flex gap-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-neon-primary/70" aria-hidden="true" />
          <div className="min-w-0">
            <h4 className="text-base font-semibold text-white">{service.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-text">{service.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProfileCta() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative mt-20 overflow-hidden rounded-2xl border border-neon-primary/20 bg-neon-primary/[0.05] p-7 sm:mt-28 sm:p-10"
    >
      <div className="absolute right-0 top-0 h-full w-1/2 tech-grid-fine opacity-30" aria-hidden="true" />
      <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] tracking-[0.2em] text-neon-primary uppercase">Siguiente paso</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">¿Necesitas una solución tecnológica?</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-text">Cuéntanos qué necesita tu empresa y revisemos juntos el camino adecuado.</p>
        </div>
        <a href="/#contacto" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-neon-primary px-5 py-3.5 text-sm font-medium text-black-primary transition-all hover:bg-neon-light hover:shadow-[0_0_24px_rgba(25,229,107,0.3)]">
          Solicitar diagnóstico
          <Send className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.section>
  );
}
