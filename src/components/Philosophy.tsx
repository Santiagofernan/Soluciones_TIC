import { motion } from 'framer-motion';

const concepts = ['SEGURIDAD', 'CONTINUIDAD', 'DISPONIBILIDAD', 'COSTOS'];

export default function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]"
        >
          La tecnología debe trabajar <br className="hidden sm:block" />para tu empresa.
          <br />
          <span className="text-neon-primary">No convertirse en otro problema.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-lg text-gray-text max-w-2xl mx-auto leading-relaxed"
        >
          Analizamos tu infraestructura, identificamos riesgos y diseñamos soluciones pensando en seguridad, continuidad, disponibilidad y costos.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-xl glass-card py-8 px-4 hover:border-neon-primary/25 transition-all"
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon-primary/40 group-hover:bg-neon-primary group-hover:shadow-[0_0_8px_rgba(55,190,118,0.6)] transition-all" />
              <span className="font-mono text-sm sm:text-base text-white tracking-wider group-hover:text-neon-light transition-colors">
                {concept}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
