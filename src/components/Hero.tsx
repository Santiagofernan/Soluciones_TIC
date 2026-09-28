import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown, Globe, Shield, Network, Server, Users, Code2, Cctv } from 'lucide-react';

const infraNodes = [
  { label: 'INTERNET', icon: Globe, desc: 'Conexión externa' },
  { label: 'CORTAFUEGOS', icon: Shield, desc: 'Perímetro de seguridad' },
  { label: 'REDES', icon: Network, desc: 'Conectividad empresarial' },
  { label: 'SERVIDORES', icon: Server, desc: 'Infraestructura crítica' },
  { label: 'USUARIOS', icon: Users, desc: 'Gestión de acceso' },
  { label: 'APLICACIONES', icon: Code2, desc: 'Automatización' },
  { label: 'CCTV', icon: Cctv, desc: 'Seguridad electrónica' },
];

const hudModules = [
  { label: 'REDES', desc: 'Conectividad empresarial', icon: Network },
  { label: 'SEGURIDAD', desc: 'Protección de información', icon: Shield },
  { label: 'SERVIDORES', desc: 'Infraestructura crítica', icon: Server },
  { label: 'APLICACIONES', desc: 'Automatización', icon: Code2 },
  { label: 'CCTV', desc: 'Seguridad electrónica', icon: Cctv },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden bg-black-primary">
      {/* Background layers */}
      <BackgroundLayers />

      {/* Corner HUD brackets */}
      <CornerBrackets />

      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex flex-col">
        {/* Top: eyebrow row */}
        <div className="pt-24 sm:pt-28 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neon-primary animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-neon-primary/80 tracking-[0.2em]">
                SOLUCIONES TI
              </span>
              <span className="text-neon-primary/20">·</span>
              <span className="font-mono text-[10px] sm:text-xs text-neon-primary/80 tracking-[0.2em]">
                CIBERSEGURIDAD
              </span>
              <span className="text-neon-primary/20">·</span>
              <span className="font-mono text-[10px] sm:text-xs text-neon-primary/80 tracking-[0.2em]">
                INFRAESTRUCTURA
              </span>
            </motion.div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex items-center px-5 sm:px-8 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
              {/* Left: editorial headline + CTAs (cols 1-7) */}
              <div className="lg:col-span-7 order-1">
                {/* Technical tag above headline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mb-6"
                >
                  <span className="font-mono text-[10px] text-gray-text/75 tracking-[0.15em]">
                    INFRAESTRUCTURA TECNOLÓGICA
                  </span>
                  <div className="flex items-center gap-4 mt-1.5">
                    <span className="font-mono text-[10px] text-neon-primary/70 tracking-wider">01 — SEGURO</span>
                    <span className="font-mono text-[10px] text-neon-primary/70 tracking-wider">02 — CONECTADO</span>
                    <span className="font-mono text-[10px] text-neon-primary/80 tracking-wider">03 — ESCALABLE</span>
                  </div>
                </motion.div>

                {/* Editorial headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight"
                >
                  <span className="text-white">El sistema </span>
                  <span className="text-white">nervioso</span>
                  <br />
                  <span className="text-white">tecnológico de tu</span>
                  <br />
                  <span className="text-neon-primary neon-text">EMPRESA.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-7 text-sm sm:text-base text-gray-text max-w-md leading-relaxed"
                >
                  Diseñamos, implementamos y protegemos la tecnología de empresas en el Huila y toda Colombia que necesitan una infraestructura estable, segura y preparada para crecer.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <a
                    href="#contacto"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-black-primary bg-neon-primary rounded-xl hover:bg-neon-light transition-all duration-200 hover:shadow-[0_0_24px_rgba(55,190,118,0.35)]"
                  >
                    Solicitar diagnóstico
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="#servicios"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-white/12 rounded-xl hover:border-neon-primary/30 hover:text-neon-light transition-all duration-200"
                  >
                    Conocer soluciones
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </motion.div>

                {/* HUD modules row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-12 hidden lg:flex items-center gap-3 flex-wrap"
                >
                  {hudModules.map((mod, i) => (
                    <motion.div
                      key={mod.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
                      className="group flex items-center gap-2.5 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.025] hover:border-neon-primary/25 hover:bg-neon-primary/[0.03] transition-all cursor-default"
                    >
                      <mod.icon className="w-3.5 h-3.5 text-neon-primary/70 group-hover:text-neon-primary transition-colors" />
                      <span className="font-mono text-[10px] text-gray-text tracking-wider group-hover:text-neon-light transition-colors">
                        {mod.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right: infrastructure flow diagram (cols 8-12) */}
              <div className="lg:col-span-5 order-2 lg:order-2 relative">
                <InfraFlow />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: system status + scroll indicator */}
        <div className="pb-6 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex items-end justify-between gap-4">
            {/* System status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-neon-primary shadow-[0_0_8px_rgba(55,190,118,0.5)] animate-pulse" />
              <span className="font-mono text-[10px] text-gray-text/75 tracking-wider">ESTADO DEL SISTEMA</span>
              <span className="font-mono text-[10px] text-neon-primary tracking-wider">OPERATIVO</span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="hidden sm:flex items-center gap-2"
            >
              <span className="font-mono text-[10px] text-gray-text/75 tracking-wider">DESLIZA PARA DESCUBRIR MÁS</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-3.5 h-3.5 text-neon-primary/70" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Infrastructure flow diagram ---------- */

function InfraFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      {/* Vertical container */}
      <div className="relative">
        {/* SVG connection line with data flow */}
        <svg className="absolute left-[19px] top-0 bottom-0 w-px h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="0" y2="100%" stroke="rgba(55,190,118,0.15)" strokeWidth="1" strokeDasharray="3 5" />
        </svg>

        {/* Animated data flow dots */}
        <div className="absolute left-[18px] top-0 bottom-0 w-1 overflow-hidden pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-neon-primary/60"
              animate={{ top: ['-5%', '105%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 1.3,
              }}
            />
          ))}
        </div>

        {/* Nodes */}
        <div className="space-y-0">
          {infraNodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="group relative flex items-center gap-3.5 py-2.5"
            >
              {/* Node dot with icon */}
              <div className="relative z-10 w-10 h-10 rounded-lg border border-neon-primary/15 bg-black-secondary/80 backdrop-blur flex items-center justify-center group-hover:border-neon-primary/40 transition-all duration-300">
                <node.icon className="w-4 h-4 text-neon-primary/75 group-hover:text-neon-primary transition-colors" />
                {i === 0 && (
                  <div className="absolute inset-0 rounded-lg bg-neon-primary/5 blur-sm" />
                )}
              </div>

              {/* Node label */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-gray-text/75 tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs text-gray-text tracking-wider group-hover:text-neon-light transition-colors">
                    {node.label}
                  </span>
                </div>
                <p className="text-[10px] text-gray-text/75 mt-0.5">{node.desc}</p>
              </div>

              {/* Status dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-neon-primary/30 group-hover:bg-neon-primary group-hover:shadow-[0_0_6px_rgba(55,190,118,0.5)] transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Background layers ---------- */

function BackgroundLayers() {
  return (
    <>
      {/* Very subtle grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-[0.5] pointer-events-none" />

      {/* Radial glow — off-center for asymmetry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-primary/[0.04] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-neon-primary/[0.03] blur-[100px]" />
      </div>

      {/* Scattered background dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bgDots.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-neon-primary/15"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `pulse ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Subtle bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black-primary pointer-events-none" />
    </>
  );
}

const bgDots = [
  { top: 12, left: 85, size: 2, dur: 4, delay: 0 },
  { top: 22, left: 6, size: 1.5, dur: 5, delay: 1 },
  { top: 35, left: 92, size: 1, dur: 3.5, delay: 0.5 },
  { top: 48, left: 3, size: 2, dur: 6, delay: 2 },
  { top: 58, left: 88, size: 1.5, dur: 4.5, delay: 1.5 },
  { top: 68, left: 15, size: 1, dur: 5, delay: 0.8 },
  { top: 75, left: 95, size: 2, dur: 4, delay: 2.5 },
  { top: 82, left: 10, size: 1.5, dur: 3.5, delay: 1.2 },
  { top: 15, left: 45, size: 1, dur: 5.5, delay: 3 },
  { top: 40, left: 50, size: 1, dur: 4, delay: 2 },
  { top: 65, left: 55, size: 1.5, dur: 6, delay: 0.3 },
  { top: 88, left: 40, size: 1, dur: 4.5, delay: 1.8 },
];

/* ---------- Corner HUD brackets ---------- */

function CornerBrackets() {
  const bracketClass = "absolute w-5 h-5 border-neon-primary/20 pointer-events-none z-5";
  return (
    <>
      <div className={`${bracketClass} top-20 left-4 border-t border-l rounded-tl-sm`} />
      <div className={`${bracketClass} top-20 right-4 border-t border-r rounded-tr-sm`} />
      <div className={`${bracketClass} bottom-4 left-4 border-b border-l rounded-bl-sm`} />
      <div className={`${bracketClass} bottom-4 right-4 border-b border-r rounded-br-sm`} />
    </>
  );
}