import { MessageCircle, Mail, MapPin } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Recursos', href: '#recursos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-primary/10 pt-16 pb-8">
      <div className="absolute inset-0 tech-grid-fine opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-neon-primary/30 rounded-md" />
                <div className="w-2 h-2 rounded-full bg-neon-primary shadow-[0_0_12px_rgba(25,229,107,0.6)]" />
              </div>
              <span className="font-semibold text-white tracking-wide text-lg">
                JORGE<span className="text-neon-primary"> A.</span>
              </span>
            </div>
            <p className="text-sm text-gray-text max-w-xs leading-relaxed">
              Soluciones TI · Ciberseguridad · Infraestructura
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="font-mono text-[10px] text-gray-text/40 tracking-widest uppercase block mb-4">Navegación</span>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-text hover:text-neon-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="font-mono text-[10px] text-gray-text/40 tracking-widest uppercase block mb-4">Contacto</span>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-text">
                <MessageCircle className="w-4 h-4 text-neon-primary/40 flex-shrink-0" />
                <span>WhatsApp — [placeholder]</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-text">
                <Mail className="w-4 h-4 text-neon-primary/40 flex-shrink-0" />
                <span>Correo — [placeholder]</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-text">
                <MapPin className="w-4 h-4 text-neon-primary/40 flex-shrink-0" />
                <span>Ubicación — [placeholder]</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-text/40">
            © 2026 Jorge A. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-primary/50 animate-pulse" />
            <span className="font-mono text-[10px] text-gray-text/40 tracking-wider">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
