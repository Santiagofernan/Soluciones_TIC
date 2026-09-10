import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { getIcon } from '@/lib/icons';

export default function Solutions() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 tech-grid-fine opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Servicios</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Soluciones tecnológicas de <span className="text-neon-primary">extremo a extremo</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative rounded-2xl glass-card p-7 hover:border-neon-primary/25 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl border border-neon-primary/15 bg-neon-primary/5 flex items-center justify-center group-hover:border-neon-primary/40 transition-all">
                    <Icon className="w-5 h-5 text-neon-primary" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-neon-primary/50 tracking-widest uppercase">{service.category}</span>
                    <h3 className="text-lg font-semibold text-white leading-tight">{service.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-gray-text mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-text/80">
                      <span className="w-1 h-1 rounded-full bg-neon-primary/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-neon-primary to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
