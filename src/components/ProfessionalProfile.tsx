import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

const tags = ['INFRAESTRUCTURA TI', 'CIBERSEGURIDAD', 'REDES', 'SOFTWARE'];

export default function ProfessionalProfile() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Profesional</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Conoce al profesional <br />detrás de las <span className="text-neon-primary">soluciones</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Placeholder photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl glass-card overflow-hidden">
              {/* Placeholder visual */}
              <div className="absolute inset-0 tech-grid-fine opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full border-2 border-neon-primary/20 bg-black-secondary flex items-center justify-center">
                  <User className="w-12 h-12 text-neon-primary/30" />
                </div>
                <span className="font-mono text-xs text-gray-text/50 tracking-wider">[FOTO PROFESIONAL]</span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-neon-primary/30 rounded-tl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-neon-primary/30 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-neon-primary/30 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-neon-primary/30 rounded-br" />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              JORGE <span className="text-gray-text/40">[APELLIDO]</span>
            </h3>
            <p className="mt-2 text-neon-primary font-mono text-sm tracking-wider">Ingeniero de Sistemas</p>

            <p className="mt-6 text-gray-text leading-relaxed">
              Profesional orientado al diseño, implementación y optimización de soluciones tecnológicas para empresas.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg border border-neon-primary/15 bg-neon-primary/5 font-mono text-[10px] text-neon-light tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Placeholder fields */}
            <div className="mt-8 space-y-3 border-t border-white/5 pt-6">
              {['Experiencia', 'Formación', 'Certificaciones', 'Tecnologías'].map((field) => (
                <div key={field} className="flex items-center justify-between text-sm">
                  <span className="text-gray-text">{field}</span>
                  <span className="font-mono text-xs text-gray-text/40">[Por completar]</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neon-light hover:text-neon-primary transition-colors"
            >
              Solicitar diagnóstico
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
