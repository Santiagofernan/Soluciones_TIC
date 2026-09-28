import { MessageCircle, Mail, MapPin } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import { navItems } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-primary/10 pt-16 pb-8">
      <div className="absolute inset-0 tech-grid-fine opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-9 mb-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <BrandLogo className="mb-4" />
            <p className="text-sm text-gray-text max-w-xs leading-relaxed">
              Soluciones TI · Ciberseguridad · Infraestructura
            </p>
          </div>

          {/* Links */}
          <div className="sm:col-span-1">
            <span className="font-mono text-[10px] text-gray-text/75 tracking-widest uppercase block mb-4">Navegación</span>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <a href={`/#${item.sectionId}`} className="text-sm text-gray-text hover:text-neon-light transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-1">
            <span className="font-mono text-[10px] text-gray-text/75 tracking-widest uppercase block mb-4">Contacto</span>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-gray-text">
                  <MessageCircle className="w-4 h-4 text-neon-primary/75 flex-shrink-0" />
                  <a
                    href="https://wa.me/573208033546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 leading-relaxed hover:text-neon-light transition-colors"
                  >
                    WhatsApp — 320 8033546
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-text">
                  <Mail className="w-4 h-4 text-neon-primary/75 flex-shrink-0" />
                  <a
                    href="mailto:contacto.alsoft@gmail.com"
                    className="min-w-0 leading-relaxed hover:text-neon-light transition-colors"
                  >
                    contacto.alsoft@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-text">
                  <MapPin className="w-4 h-4 text-neon-primary/75 flex-shrink-0" />
                  <span className="min-w-0 leading-relaxed">Garzón, Huila, Colombia</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs font-mono text-xs leading-relaxed text-gray-text/75">
            © 2026 Alsoft-Cloud. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-primary/50 animate-pulse" />
            <span className="font-mono text-[10px] text-gray-text/75 tracking-wider">SISTEMA OPERATIVO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}