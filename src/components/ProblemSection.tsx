import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import {
  Database,
  Server,
  ShieldCheck,
  Activity,
  RefreshCw,
  Radio,
  type LucideIcon,
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  number: string;
  label: string;
  description: string;
  icon: LucideIcon;
  // Desktop position (percentage relative to diagram container)
  x: number;
  y: number;
}

const nodes: EcosystemNode[] = [
  {
    id: 'informacion',
    number: '01',
    label: 'INFORMACIÓN',
    description: 'Datos, sistemas y activos digitales que mantienen funcionando tu empresa.',
    icon: Database,
    x: 50,
    y: 8,
  },
  {
    id: 'infraestructura',
    number: '02',
    label: 'INFRAESTRUCTURA',
    description: 'Servidores, equipos y tecnología sobre la que opera tu negocio.',
    icon: Server,
    x: 12,
    y: 38,
  },
  {
    id: 'seguridad',
    number: '03',
    label: 'SEGURIDAD',
    description: 'Protección de información, sistemas, usuarios y accesos.',
    icon: ShieldCheck,
    x: 88,
    y: 38,
  },
  {
    id: 'operacion',
    number: '04',
    label: 'OPERACIÓN',
    description: 'Redes, software y servicios que permiten trabajar todos los días.',
    icon: Activity,
    x: 20,
    y: 82,
  },
  {
    id: 'continuidad',
    number: '05',
    label: 'CONTINUIDAD',
    description: 'Preparación para que la empresa siga funcionando cuando algo falla.',
    icon: RefreshCw,
    x: 80,
    y: 82,
  },
];

export default function ProblemSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'center center'] });
  const coreScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const active = nodes.find((n) => n.id === activeNode);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-black-primary">
      {/* Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-[0.4] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-primary/[0.03] blur-[150px] pointer-events-none" />

      {/* Scattered particles */}
      <Particles />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Text content — top left, asymmetric */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 lg:col-start-1"
          >
            <span className="font-mono text-[10px] text-neon-primary/75 tracking-[0.2em]">
              ECOSISTEMA · TECNOLOGÍA
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Tu empresa depende de <span className="text-neon-primary">la tecnología.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-text max-w-xl leading-relaxed">
              Pero cuando falla una red, un servidor o la seguridad de la información, el problema deja de ser tecnológico.
            </p>
          </motion.div>

          {/* Micro texts — right side, secondary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-4 lg:col-start-9 self-end flex-col border-l border-neon-primary/15 pl-5 pb-1"
          >
            <div className="flex items-center justify-between gap-4 font-mono text-[9px] tracking-[0.16em]">
              <span className="text-gray-text/75">ESTADO DEL SISTEMA</span>
              <span className="flex items-center gap-2 text-neon-primary/70">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-primary shadow-[0_0_7px_rgba(25,229,107,0.7)]" />
                CONECTADO
              </span>
            </div>
            <p className="mt-4 font-mono text-[10px] tracking-[0.13em] text-gray-text/65">
              INFRAESTRUCTURA <span className="text-neon-primary/65">/</span> SEGURIDAD <span className="text-neon-primary/65">/</span> REDES
            </p>
            <div className="mt-3 flex items-center gap-3 font-mono text-[9px] tracking-[0.14em] text-gray-text/75">
              <span>SISTEMA 01</span>
              <span className="h-1 w-1 rounded-full bg-neon-primary/40" />
              <span>SEGURO</span>
              <span className="h-1 w-1 rounded-full bg-neon-primary/40" />
              <span>CONTINUO</span>
            </div>
          </motion.div>
        </div>

        {/* Desktop: orbital system diagram */}
        <div className="hidden md:block relative" style={{ height: '560px' }}>
          <DesktopDiagram
            nodes={nodes}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            coreScale={coreScale}
          />
        </div>

        {/* Mobile: vertical architecture */}
        <div className="md:hidden">
          <MobileDiagram nodes={nodes} activeNode={activeNode} setActiveNode={setActiveNode} />
        </div>

        {/* Active node description (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="hidden md:flex items-center justify-center mt-8 min-h-[60px]"
        >
          {active && (
            <div className="text-center">
              <span className="font-mono text-[10px] text-neon-primary/75 tracking-widest">
                {active.number} — {active.label}
              </span>
              <p className="mt-2 text-sm text-gray-text max-w-md mx-auto leading-relaxed">
                {active.description}
              </p>
            </div>
          )}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white max-w-2xl mx-auto leading-snug">
            Nos encargamos de <span className="text-neon-primary">conectar</span>, <span className="text-neon-primary">proteger</span> y <span className="text-neon-primary">mantener</span> ese ecosistema.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============== Desktop orbital diagram ============== */

function DesktopDiagram({
  nodes,
  activeNode,
  setActiveNode,
  coreScale,
}: {
  nodes: EcosystemNode[];
  activeNode: string | null;
  setActiveNode: (id: string | null) => void;
  coreScale: MotionValue<number>;
}) {
  const center = { x: 50, y: 45 };
  const diagramSize = 560;

  return (
    <div className="relative w-full h-full">
      {/* SVG connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${diagramSize} ${diagramSize}`}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          const opacity = activeNode === null ? 0.15 : isActive ? 0.6 : 0.05;
          const x1 = (center.x / 100) * diagramSize;
          const y1 = (center.y / 100) * diagramSize;
          const x2 = (node.x / 100) * diagramSize;
          const y2 = (node.y / 100) * diagramSize;

          return (
            <g key={`line-${node.id}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(25,229,107,0.2)"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity={opacity}
                style={{ transition: 'opacity 0.3s ease' }}
              />
              {/* Data flow dot */}
              {isActive && (
                <circle r="2.5" fill="#19E56B">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={`M${x1},${y1} L${x2},${y2}`}
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Central core */}
      <motion.div
        style={{
          position: 'absolute',
          left: `${center.x}%`,
          top: `${center.y}%`,
          transform: 'translate(-50%, -50%)',
          scale: coreScale,
        }}
        className="z-20"
      >
        <SystemCore />
      </motion.div>

      {/* Nodes positioned absolutely */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
          style={{
            position: 'absolute',
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          className="z-30"
        >
          <NodeCard
            node={node}
            isActive={activeNode === node.id}
            onHover={() => setActiveNode(node.id)}
            onLeave={() => setActiveNode(null)}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ============== System core ============== */

function SystemCore() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-neon-primary/15"
        style={{ borderTopColor: 'rgba(25,229,107,0.4)' }}
      />

      {/* Middle ring with dashes */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-3 rounded-full border border-dashed border-neon-primary/10"
      />

      {/* Inner glow */}
      <div className="absolute inset-6 rounded-full bg-neon-primary/[0.04] blur-xl" />

      {/* Core */}
      <div className="relative w-16 h-16 rounded-full border border-neon-primary/30 bg-black-secondary/90 backdrop-blur flex flex-col items-center justify-center">
        <Radio className="w-5 h-5 text-neon-primary" />
        <span className="font-mono text-[7px] text-neon-primary/80 tracking-wider mt-0.5">NÚCLEO</span>
      </div>

      {/* Orbiting dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon-primary/50 shadow-[0_0_6px_rgba(25,229,107,0.4)]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-primary/30" />
      </motion.div>
    </div>
  );
}

/* ============== Node card ============== */

function NodeCard({
  node,
  isActive,
  onHover,
  onLeave,
}: {
  node: EcosystemNode;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = node.icon;
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur border transition-all duration-300 cursor-default ${
        isActive
          ? 'border-neon-primary/40 bg-neon-primary/[0.06] shadow-[0_0_20px_rgba(25,229,107,0.1)]'
          : 'border-white/8 bg-black-secondary/60 hover:border-neon-primary/20'
      }`}
    >
      {/* Number */}
      <span
        className={`font-mono text-[9px] tracking-wider transition-colors ${
          isActive ? 'text-neon-primary' : 'text-gray-text/75'
        }`}
      >
        {node.number}
      </span>

      {/* Icon */}
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
          isActive
            ? 'border-neon-primary/30 bg-neon-primary/5'
            : 'border-white/8 bg-white/[0.02]'
        }`}
      >
        <Icon
          className={`w-4 h-4 transition-colors ${
            isActive ? 'text-neon-primary' : 'text-gray-text/75'
          }`}
        />
      </div>

      {/* Label */}
      <span
        className={`font-mono text-xs tracking-wider whitespace-nowrap transition-colors ${
          isActive ? 'text-neon-light' : 'text-gray-text'
        }`}
      >
        {node.label}
      </span>

      {/* Status indicator */}
      <div
        className={`w-1.5 h-1.5 rounded-full transition-all ${
          isActive
            ? 'bg-neon-primary shadow-[0_0_6px_rgba(25,229,107,0.5)]'
            : 'bg-neon-primary/20'
        }`}
      />
    </motion.div>
  );
}

/* ============== Mobile vertical diagram ============== */

function MobileDiagram({
  nodes,
  activeNode,
  setActiveNode,
}: {
  nodes: EcosystemNode[];
  activeNode: string | null;
  setActiveNode: (id: string | null) => void;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Mobile core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6"
      >
        <SystemCore />
      </motion.div>

      {/* Vertical connector */}
      <div className="absolute top-28 bottom-0 left-1/2 -translate-x-1/2 w-px bg-neon-primary/10" />

      {/* Nodes */}
      <div className="space-y-3 w-full max-w-xs relative z-10">
        {nodes.map((node, i) => {
          const isActive = activeNode === node.id;
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              onClick={() => setActiveNode(isActive ? null : node.id)}
              className={`group relative flex items-start gap-3 px-4 py-4 rounded-xl backdrop-blur border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-neon-primary/40 bg-neon-primary/[0.06]'
                  : 'border-white/8 bg-black-secondary/60'
              }`}
            >
              <span className={`font-mono text-[9px] tracking-wider mt-1 ${isActive ? 'text-neon-primary' : 'text-gray-text/75'}`}>
                {node.number}
              </span>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center border flex-shrink-0 transition-all ${
                isActive ? 'border-neon-primary/30 bg-neon-primary/5' : 'border-white/8 bg-white/[0.02]'
              }`}>
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-neon-primary' : 'text-gray-text/75'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <span className={`font-mono text-xs tracking-wider block transition-colors ${isActive ? 'text-neon-light' : 'text-gray-text'}`}>
                  {node.label}
                </span>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-gray-text/70 mt-2 leading-relaxed">
                    {node.description}
                  </p>
                </motion.div>
              </div>
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-all ${
                isActive ? 'bg-neon-primary shadow-[0_0_6px_rgba(25,229,107,0.5)]' : 'bg-neon-primary/20'
              }`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ============== Particles ============== */

function Particles() {
  const particles = [
    { top: 15, left: 8, size: 2, dur: 5, delay: 0 },
    { top: 25, left: 92, size: 1.5, dur: 4, delay: 1.5 },
    { top: 45, left: 5, size: 1, dur: 6, delay: 0.8 },
    { top: 55, left: 95, size: 2, dur: 4.5, delay: 2 },
    { top: 70, left: 12, size: 1.5, dur: 5, delay: 1 },
    { top: 80, left: 88, size: 1, dur: 3.5, delay: 2.5 },
    { top: 35, left: 50, size: 1, dur: 5.5, delay: 1.2 },
    { top: 85, left: 45, size: 1.5, dur: 4, delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-neon-primary/15"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `pulse ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
