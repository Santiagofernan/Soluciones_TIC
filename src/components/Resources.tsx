import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { resources } from '@/data/resources';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function Resources() {
  return (
    <section id="recursos" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Recursos</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Inteligencia <span className="text-neon-primary">tecnológica</span>.
          </h2>
          <p className="mt-5 text-gray-text leading-relaxed">
            Información práctica para tomar mejores decisiones tecnológicas.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {resources.map((resource, i) => (
            <motion.article
              key={resource.id}
              id={`recurso-${resource.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neon-primary/35 hover:shadow-[0_14px_42px_rgba(55,190,118,0.10)] sm:min-h-[310px] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-2xl font-semibold tracking-wider text-neon-primary/80">
                  {resource.id}
                </span>
                <span className="rounded-md border border-neon-primary/20 bg-neon-primary/[0.07] px-2.5 py-1.5 font-mono text-[10px] tracking-wider text-neon-light">
                  {resource.category.toUpperCase()}
                </span>
              </div>

              <div className="mt-8 flex flex-grow flex-col">
                <span className="font-mono text-[10px] tracking-[0.18em] text-gray-text/80 uppercase">Pregunta tecnológica</span>
                <h3 className="mt-3 text-xl font-semibold leading-tight text-white transition-colors group-hover:text-neon-light sm:text-2xl">
                {resource.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-text">{resource.description}</p>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] tracking-wider text-gray-text/80">{formatDate(resource.date)}</span>
                <a
                  href={`#recurso-${resource.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-primary transition-colors hover:text-neon-light"
                >
                  Leer artículo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-neon-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
