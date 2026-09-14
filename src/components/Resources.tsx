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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, i) => (
            <motion.article
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative rounded-2xl glass-card p-6 hover:border-neon-primary/25 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-neon-primary/5 border border-neon-primary/15 font-mono text-[9px] text-neon-light tracking-wider">
                  {resource.category.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-gray-text/75">{formatDate(resource.date)}</span>
              </div>

              <h3 className="text-sm font-semibold text-white leading-snug mb-3 group-hover:text-neon-light transition-colors flex-grow">
                {resource.title}
              </h3>

              <p className="text-xs text-gray-text leading-relaxed mb-4">{resource.description}</p>

              <a
                href={`#recurso-${resource.slug}`}
                className="inline-flex items-center gap-1.5 text-xs text-neon-primary hover:text-neon-light transition-colors mt-auto"
              >
                Leer artículo
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-neon-primary to-transparent group-hover:w-full transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
