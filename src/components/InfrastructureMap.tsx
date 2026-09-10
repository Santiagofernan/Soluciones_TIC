import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Shield, Server, Users, Code2, Cctv, Network } from 'lucide-react';

interface EcosystemNode {
  id: string;
  label: string;
  icon: typeof Globe;
  info: string;
  level: number;
}

const nodes: EcosystemNode[] = [
  { id: 'internet', label: 'INTERNET', icon: Globe, info: 'Conexión externa · Firewall perimetral', level: 0 },
  { id: 'firewall', label: 'FIREWALL', icon: Shield, info: 'Riesgos · Vulnerabilidades · MFA · Backups · Continuidad', level: 1 },
  { id: 'network', label: 'NETWORK', icon: Network, info: 'VLAN · Firewall · VPN · Wi-Fi empresarial · Segmentación', level: 2 },
  { id: 'servers', label: 'SERVERS', icon: Server, info: 'Instalación · Migración · Virtualización · Windows Server · Linux', level: 3 },
  { id: 'users', label: 'USERS', icon: Users, info: 'Active Directory · Gestión de permisos · MFA', level: 3 },
  { id: 'software', label: 'SOFTWARE', icon: Code2, info: 'Sistemas internos · Automatización · Aplicaciones web', level: 3 },
  { id: 'cctv', label: 'CCTV', icon: Cctv, info: 'Cámaras IP · NVR/DVR · Acceso remoto · Monitoreo', level: 3 },
];

const childNodes = nodes.filter((n) => n.level === 3);

export default function InfrastructureMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeNode = nodes.find((n) => n.id === active);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
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

        {/* Desktop: tree layout */}
        <div className="hidden md:block relative">
          <div className="flex flex-col items-center gap-0">
            {/* INTERNET */}
            <EcosystemNodeButton node={nodes[0]} active={active} setActive={setActive} />

            <Connector vertical />

            {/* FIREWALL */}
            <EcosystemNodeButton node={nodes[1]} active={active} setActive={setActive} />

            <Connector vertical />

            {/* NETWORK */}
            <EcosystemNodeButton node={nodes[2]} active={active} setActive={setActive} />

            {/* Branch lines */}
            <div className="relative w-full max-w-3xl mt-6">
              <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-12" viewBox="0 0 600 48" fill="none" preserveAspectRatio="none">
                <line x1="300" y1="0" x2="300" y2="12" stroke="rgba(25,229,107,0.3)" strokeWidth="1.5" />
                <line x1="75" y1="24" x2="525" y2="24" stroke="rgba(25,229,107,0.3)" strokeWidth="1.5" />
                <line x1="75" y1="24" x2="75" y2="48" stroke="rgba(25,229,107,0.3)" strokeWidth="1.5" />
                <line x1="225" y1="24" x2="225" y2="48" stroke="rgba(25,229,107,0.3)" strokeWidth="1.5" />
                <line x1="375" y1="24" x2="375" y2="48" stroke="rgba(25,229,107,0.3)" strokeWidth="1.5" />
                <line x1="525" y1="24" x2="525" y2="48" stroke="rgba(25,229,107,0.3)" strokeWidth="1.5" />
              </svg>

              <div className="grid grid-cols-4 gap-4 pt-14">
                {childNodes.map((node) => (
                  <div key={node.id} className="flex justify-center">
                    <EcosystemNodeButton node={node} active={active} setActive={setActive} small />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info panel */}
          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-12 max-w-2xl mx-auto"
              >
                <div className="rounded-xl glass-card neon-border p-6 text-center">
                  <span className="font-mono text-xs text-neon-primary tracking-widest">{activeNode.label}</span>
                  <p className="mt-3 text-sm text-gray-text leading-relaxed">{activeNode.info}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile: vertical flow */}
        <div className="md:hidden flex flex-col items-center gap-3">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center gap-3 w-full">
              <EcosystemNodeButton node={node} active={active} setActive={setActive} small />
              {i < nodes.length - 1 && <Connector vertical short />}
            </div>
          ))}

          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full mt-3"
              >
                <div className="rounded-xl glass-card neon-border p-4 text-center">
                  <span className="font-mono text-xs text-neon-primary tracking-widest">{activeNode.label}</span>
                  <p className="mt-2 text-xs text-gray-text leading-relaxed">{activeNode.info}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function EcosystemNodeButton({
  node,
  active,
  setActive,
  small,
}: {
  node: EcosystemNode;
  active: string | null;
  setActive: (id: string | null) => void;
  small?: boolean;
}) {
  const Icon = node.icon;
  const isActive = active === node.id;

  return (
    <motion.button
      onMouseEnter={() => setActive(node.id)}
      onMouseLeave={() => setActive(null)}
      onClick={() => setActive(isActive ? null : node.id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`relative flex flex-col items-center gap-2 rounded-xl border transition-all duration-300 ${
        small ? 'px-4 py-3' : 'px-6 py-4'
      } ${
        isActive
          ? 'border-neon-primary/60 bg-neon-primary/10 shadow-[0_0_24px_rgba(25,229,107,0.15)]'
          : 'border-neon-primary/15 bg-black-secondary/60 hover:border-neon-primary/35'
      }`}
    >
      <Icon className={`${small ? 'w-5 h-5' : 'w-6 h-6'} ${isActive ? 'text-neon-primary' : 'text-neon-primary/70'} transition-colors`} />
      <span className={`font-mono text-[10px] tracking-wider ${isActive ? 'text-neon-light' : 'text-gray-text'}`}>{node.label}</span>
      {isActive && (
        <motion.div
          layoutId={`glow-${node.level}`}
          className="absolute inset-0 rounded-xl bg-neon-primary/5 blur-xl pointer-events-none"
        />
      )}
    </motion.button>
  );
}

function Connector({ vertical, short }: { vertical?: boolean; short?: boolean }) {
  return (
    <motion.div
      initial={{ scaleY: 0, scaleX: 0 }}
      whileInView={{ scaleY: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`${vertical ? `w-px ${short ? 'h-6' : 'h-10'}` : 'h-px w-12'} bg-gradient-to-b from-neon-primary/40 to-neon-primary/10`}
      style={{ transformOrigin: 'top' }}
    />
  );
}
