import { motion } from 'framer-motion';
import { needs } from '@/data/services';
import { getIcon } from '@/lib/icons';

export default function Needs() {
  return (
    <section id="necesidades" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Tu empresa</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            ¿Qué necesita resolver tu empresa?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((need, i) => {
            const Icon = getIcon(need.icon);
            return (
              <motion.div
                key={need.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neon-primary/25 cursor-default"
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-neon-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-neon-primary/80 tracking-wider">{need.id}</span>
                    <div className="w-10 h-10 rounded-lg border border-neon-primary/15 bg-neon-primary/5 flex items-center justify-center group-hover:border-neon-primary/40 group-hover:bg-neon-primary/10 transition-all">
                      <Icon className="w-5 h-5 text-neon-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{need.title}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-gray-text">{need.description}</p>
                </div>

                {/* Bottom line on hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-neon-primary to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
