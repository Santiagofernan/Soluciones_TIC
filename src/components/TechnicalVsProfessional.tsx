import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Briefcase } from 'lucide-react';

const technicalServices = [
  'Instalar un servidor',
  'Reparar un computador',
  'Instalar cámaras',
  'Configurar una red',
  'Mantenimiento',
];

const professionalServices = [
  'Ciberseguridad',
  'Gestión de riesgos',
  'Infraestructura',
  'Auditoría',
  'Consultoría',
  'Continuidad',
  'Transformación digital',
  'Desarrollo de soluciones',
];

export default function TechnicalVsProfessional() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Enfoque</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Desde una solución puntual hasta una <span className="text-neon-primary">estrategia tecnológica</span> completa.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl glass-card p-8 hover:border-neon-primary/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-gray-text" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-text/75 tracking-widest uppercase">Para necesidades puntuales</span>
                <h3 className="text-xl font-semibold text-white">Servicios técnicos</h3>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {technicalServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-gray-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  {s}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm text-white border-b border-white/20 pb-1 hover:border-neon-primary hover:text-neon-light transition-all"
            >
              Necesito soporte
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Professional */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl glass-card p-8 hover:border-neon-primary/25 transition-all neon-border"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-neon-primary/5 blur-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl border border-neon-primary/20 bg-neon-primary/5 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-neon-primary" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-neon-primary/75 tracking-widest uppercase">Para empresas que necesitan más</span>
                <h3 className="text-xl font-semibold text-white">Servicios profesionales</h3>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {professionalServices.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-gray-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-primary/50" />
                  {s}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-black-primary bg-neon-primary px-5 py-2.5 rounded-lg hover:bg-neon-light transition-all"
            >
              Necesito una solución
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
