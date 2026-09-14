import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Proyectos</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Casos de <span className="text-neon-primary">éxito</span>.
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-text/75 tracking-wider">[PROYECTOS DE EJEMPLO — SERÁN REEMPLAZADOS POR CASOS REALES]</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card hover:border-neon-primary/25 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={940}
                  height={650}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-secondary via-black-secondary/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-lg bg-black-primary/80 backdrop-blur border border-neon-primary/20 font-mono text-[10px] text-neon-light tracking-wider">
                    {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Project number */}
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-xs text-gray-text/80 tracking-wider">PROYECTO {project.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed">{project.description}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-text/75 group-hover:text-neon-primary group-hover:rotate-12 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-neon-primary to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
