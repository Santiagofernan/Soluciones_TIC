import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const steps = [
  { id: '01', title: 'DIAGNÓSTICO', description: 'Entendemos la infraestructura y las necesidades actuales.' },
  { id: '02', title: 'ANÁLISIS', description: 'Identificamos riesgos, problemas y oportunidades de mejora.' },
  { id: '03', title: 'DISEÑO', description: 'Proponemos una solución adaptada a la empresa.' },
  { id: '04', title: 'IMPLEMENTACIÓN', description: 'Configuramos, instalamos e integramos la tecnología.' },
  { id: '05', title: 'ACOMPAÑAMIENTO', description: 'Seguimos apoyando para garantizar continuidad y seguridad.' },
];

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  return (
    <section id="metodologia" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">Metodología</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            De la necesidad <br />a la <span className="text-neon-primary">solución</span>.
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-white/8">
            <motion.div
              style={{ scaleX: lineScale }}
              className="h-full bg-gradient-to-r from-neon-primary to-neon-primary/30 origin-left"
            />
          </div>

          {/* Vertical line (mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-px bg-white/8">
            <motion.div
              style={{ scaleY: lineScale }}
              className="w-full h-full bg-gradient-to-b from-neon-primary to-neon-primary/30 origin-top"
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex lg:block gap-5"
              >
                {/* Node dot */}
                <div className="relative flex-shrink-0 lg:mb-5">
                  <div className="w-14 h-14 rounded-full border border-neon-primary/30 bg-black-secondary flex items-center justify-center relative z-10">
                    <span className="font-mono text-sm text-neon-primary">{step.id}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-neon-primary/10 blur-md -z-0" />
                </div>

                <div className="pt-1 lg:pt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider mb-2 font-mono">{step.title}</h3>
                  <p className="text-sm text-gray-text leading-relaxed pr-4">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
