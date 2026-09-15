import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, User } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Soluciones', href: '/#soluciones' },
  { label: 'Metodología', href: '/#metodologia' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Recursos', href: '/#recursos' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobileViewport = typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: isMobileViewport ? 0 : -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black-primary/80 backdrop-blur-xl border-b border-neon-primary/10'
            : 'bg-transparent'
        }`}
      >
        <div className="box-border flex h-16 w-full max-w-7xl min-w-0 mx-auto items-center justify-between px-4 sm:h-18 sm:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-neon-primary/30 rounded-md group-hover:border-neon-primary/60 transition-colors" />
              <div className="w-2 h-2 rounded-full bg-neon-primary shadow-[0_0_12px_rgba(25,229,107,0.6)] group-hover:shadow-[0_0_16px_rgba(25,229,107,0.8)] transition-all" />
            </div>
            <span className="font-semibold text-white tracking-wide text-lg">
              Alsoft-<span className="text-neon-primary">Cloud</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-text hover:text-neon-light transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                `hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  isActive
                    ? 'text-neon-light border-neon-primary/40 bg-neon-primary/10'
                    : 'text-white border-white/15 hover:border-neon-primary/40 hover:text-neon-light'
                }`
              }
            >
              <User className="w-4 h-4" />
              Perfil
            </NavLink>
            <a
              href="/#contacto"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black-primary bg-neon-primary rounded-lg hover:bg-neon-light transition-all duration-200 hover:shadow-[0_0_20px_rgba(25,229,107,0.4)]"
            >
              Solicitar diagnóstico
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden mr-0 shrink-0 rounded-lg p-2 text-white transition-colors hover:bg-white/5 hover:text-neon-light sm:mr-0"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black-primary/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-black-secondary border-l border-neon-primary/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-semibold text-white tracking-wide"
                >
                  Alsoft-Cloud<span className="text-neon-primary"></span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="text-gray-text hover:text-white" aria-label="Cerrar menú">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    className="py-3 text-lg text-gray-text hover:text-neon-light border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto space-y-3">
                <NavLink
                  to="/perfil"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-lg border transition-all ${
                      isActive
                        ? 'text-neon-light border-neon-primary/40 bg-neon-primary/10'
                        : 'text-white border-white/15'
                    }`
                  }
                >
                  <User className="w-4 h-4" />
                  Perfil
                </NavLink>
                <a
                  href="/#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-black-primary bg-neon-primary rounded-lg"
                >
                  Solicitar diagnóstico
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
