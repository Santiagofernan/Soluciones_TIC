import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Profile() {
  return (
    <main className="relative pt-24 sm:pt-28 pb-24 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Perfil</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Conoce al profesional <br />detrás de las <span className="text-neon-primary">soluciones</span>.
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl glass-card overflow-hidden">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 tech-grid-fine opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-24 h-24 rounded-full border-2 border-neon-primary/20 bg-black-secondary flex items-center justify-center">
                      <User className="w-12 h-12 text-neon-primary/30" />
                    </div>
                    <span className="font-mono text-xs text-gray-text/50 tracking-wider">[FOTO PROFESIONAL]</span>
                  </div>
                </>
              )}

              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-neon-primary/30 rounded-tl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-neon-primary/30 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-neon-primary/30 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-neon-primary/30 rounded-br" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {profile.firstName}{' '}
              <span className="text-gray-text/40">{profile.lastName}</span>
            </h2>
            <p className="mt-2 text-neon-primary font-mono text-sm tracking-wider">{profile.title}</p>

            <p className="mt-6 text-gray-text leading-relaxed">{profile.bio}</p>
            <p className="mt-4 text-sm text-gray-text/80 leading-relaxed">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg border border-neon-primary/15 bg-neon-primary/5 font-mono text-[10px] text-neon-light tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/#contacto"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neon-light hover:text-neon-primary transition-colors"
            >
              Solicitar diagnóstico
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="mt-20 sm:mt-28 grid lg:grid-cols-2 gap-5">
          <ProfileBlock title="Experiencia" index="01">
            <ul className="space-y-5">
              {profile.experience.map((item) => (
                <li key={item.id} className="border-b border-white/5 last:border-0 pb-5 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                    <span className="font-mono text-[10px] text-neon-primary/70 tracking-wider shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] text-gray-text/50 tracking-wider uppercase">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm text-gray-text leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </ProfileBlock>

          <ProfileBlock title="Formación" index="02">
            <ul className="space-y-5">
              {profile.education.map((item) => (
                <li key={item.id} className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 font-mono text-[10px] text-gray-text/50 tracking-wider uppercase">
                      {item.institution}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-gray-text/40 tracking-wider shrink-0">
                    {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </ProfileBlock>

          <ProfileBlock title="Certificaciones" index="03">
            <ul className="space-y-4">
              {profile.certifications.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4 text-sm">
                  <div>
                    <span className="text-white">{item.name}</span>
                    <span className="block font-mono text-[10px] text-gray-text/50 tracking-wider mt-1">
                      {item.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-gray-text/40">{item.year}</span>
                </li>
              ))}
            </ul>
          </ProfileBlock>

          <ProfileBlock title="Tecnologías" index="04">
            <div className="flex flex-wrap gap-2">
              {profile.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg border border-white/8 bg-white/[0.02] text-xs text-gray-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ProfileBlock>
        </div>
      </div>
    </main>
  );
}

function ProfileBlock({
  title,
  index,
  children,
}: {
  title: string;
  index: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl glass-card p-7 sm:p-8 hover:border-neon-primary/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-[10px] text-neon-primary/50 tracking-widest">{index}</span>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
