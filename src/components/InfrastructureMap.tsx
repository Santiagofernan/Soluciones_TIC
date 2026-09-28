import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Server, Users, Code2, Cctv, Network } from 'lucide-react';

interface EcosystemNode {
  id: string;
  label: string;
  icon: typeof Globe;
  info: string;
}

const nodes: EcosystemNode[] = [
  { id: 'internet', label: 'INTERNET', icon: Globe, info: 'Conexión externa · Cortafuegos perimetral' },
  { id: 'firewall', label: 'CORTAFUEGOS', icon: Shield, info: 'Riesgos · Vulnerabilidades · MFA · Copias de seguridad · Continuidad' },
  { id: 'network', label: 'REDES', icon: Network, info: 'VLAN · Cortafuegos · VPN · Wi-Fi empresarial · Segmentación' },
  { id: 'servers', label: 'SERVIDORES', icon: Server, info: 'Instalación · Migración · Virtualización · Windows Server · Linux' },
  { id: 'users', label: 'USUARIOS', icon: Users, info: 'Active Directory · Gestión de permisos · MFA' },
  { id: 'software', label: 'SOFTWARE', icon: Code2, info: 'Sistemas internos · Automatización · Aplicaciones web' },
  { id: 'cctv', label: 'CCTV', icon: Cctv, info: 'Cámaras IP · NVR/DVR · Acceso remoto · Monitoreo' },
];

export default function InfrastructureMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative py-24 sm:py-32 overflow-visible">
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-mono text-xs text-neon-primary tracking-widest uppercase">El ecosistema TI</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Todo está <span className="text-neon-primary">conectado</span>.
          </h2>
          <p className="mt-5 text-gray-text leading-relaxed">
            Una empresa es un ecosistema tecnológico donde cada elemento depende del otro. Pasa el cursor sobre cada nodo para ver qué soluciones aplican.
          </p>
        </motion.div>

        {/* Desktop: horizontal line */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-1">
            {/* Connecting line behind nodes */}
            <div className="absolute top-10 left-[7%] right-[7%] h-px bg-gradient-to-r from-neon-primary/10 via-neon-primary/35 to-neon-primary/10" />

            {nodes.map((node, i) => (
              <HorizontalNode
                key={node.id}
                node={node}
                index={i}
                isActive={active === node.id}
                onEnter={() => setActive(node.id)}
                onLeave={() => setActive(null)}
                onToggle={() => setActive(active === node.id ? null : node.id)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-5 px-5 overflow-x-auto pb-2 scrollbar-thin">
          <div className="relative flex items-start gap-3 min-w-max px-1">
            <div className="absolute top-9 left-8 right-8 h-px bg-neon-primary/25" />
            {nodes.map((node, i) => (
              <HorizontalNode
                key={node.id}
                node={node}
                index={i}
                isActive={active === node.id}
                onEnter={() => setActive(node.id)}
                onLeave={() => setActive(null)}
                onToggle={() => setActive(active === node.id ? null : node.id)}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HorizontalNode({
  node,
  index,
  isActive,
  onEnter,
  onLeave,
  onToggle,
  compact,
}: {
  node: EcosystemNode;
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
  compact?: boolean;
}) {
  const Icon = node.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`relative z-10 flex flex-col items-center ${compact ? 'w-[112px]' : 'flex-1 min-w-0 max-w-[140px]'}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        className={`relative flex flex-col items-center gap-2 rounded-xl border transition-all duration-300 ${
          compact ? 'px-3 py-3 w-full' : 'px-3 py-3.5 w-full'
        } ${
          isActive
            ? 'border-neon-primary/70 bg-neon-primary/10 shadow-[0_0_24px_rgba(55,190,118,0.22)]'
            : 'border-neon-primary/15 bg-black-secondary/70 hover:border-neon-primary/40'
        }`}
      >
        <Icon
          className={`w-5 h-5 transition-colors ${
            isActive ? 'text-neon-primary' : 'text-neon-primary/70'
          }`}
        />
        <span
          className={`font-mono text-[9px] sm:text-[10px] tracking-wider text-center leading-tight ${
            isActive ? 'text-neon-light' : 'text-gray-text'
          }`}
        >
          {node.label}
        </span>
        {isActive && (
          <div className="absolute inset-0 rounded-xl bg-neon-primary/5 blur-xl pointer-events-none" />
        )}
      </motion.button>

      {/* Dot on the line */}
      <div
        className={`mt-3 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-neon-primary shadow-[0_0_8px_rgba(55,190,118,0.8)] scale-125'
            : 'bg-neon-primary/35'
        }`}
      />

      {/* Info under this node */}
      <div className="mt-3 w-full min-h-[72px]">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg border border-neon-primary/25 bg-black-secondary/80 px-2.5 py-3 text-center"
            >
              <p className="text-[10px] sm:text-[11px] text-gray-text leading-relaxed">{node.info}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
