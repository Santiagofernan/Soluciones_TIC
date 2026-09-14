import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  {
    name: 'BÁSICO',
    description: 'Para empresas que necesitan soporte y mantenimiento.',
    features: [
      'Soporte técnico remoto',
      'Mantenimiento preventivo',
      'Revisión de equipos',
      'Soporte por WhatsApp',
    ],
    highlighted: false,
  },
  {
    name: 'PROFESIONAL',
    description: 'Para empresas que necesitan soporte, infraestructura y seguridad.',
    features: [
      'Todo lo del plan Básico',
      'Gestión de infraestructura',
      'Monitoreo de seguridad',
      'Copias de seguridad',
      'Gestión de redes',
      'Visitas programadas',
    ],
    highlighted: true,
  },
  {
    name: 'EMPRESARIAL',
    description: 'Para empresas que necesitan una gestión tecnológica integral.',
    features: [
      'Todo lo del plan Profesional',
      'Consultoría estratégica',
      'Ciberseguridad avanzada',
      'Auditorías periódicas',
      'Planes de continuidad',
      'Desarrollo de soluciones',
      'Soporte prioritario 24/7',
    ],
    highlighted: false,
  },
];

export default function Plans() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 tech-grid-fine opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Planes</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Acompañamiento <span className="text-neon-primary">TI</span> continuo.
          </h2>
          <p className="mt-5 text-gray-text leading-relaxed">
            Planes diseñados para empresas en diferentes etapas de crecimiento tecnológico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'glass-card neon-border md:-translate-y-4'
                  : 'glass-card hover:border-neon-primary/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-neon-primary text-black-primary text-[10px] font-semibold tracking-wider font-mono">
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white tracking-wider font-mono">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/5">
                <span className="font-mono text-xs text-gray-text/75">Precio</span>
                <p className="text-2xl font-bold text-white mt-1">
                  <span className="text-gray-text/75">[Por definir]</span>
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-text">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-neon-primary' : 'text-neon-primary/75'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-xl transition-all ${
                  plan.highlighted
                    ? 'bg-neon-primary text-black-primary hover:bg-neon-light'
                    : 'border border-white/15 text-white hover:border-neon-primary/40 hover:text-neon-light'
                }`}
              >
                Solicitar propuesta
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
