import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Cloud } from 'lucide-react';

const COVER_MS = 300;
const HOLD_MS = 500;

type Phase = 'cover' | 'hold' | null;

function scrollToTarget(hash: string) {
  const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
  else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

export default function PageTransition() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const [phase, setPhase] = useState<Phase>(null);
  const previousPathname = useRef(pathname);
  const currentHash = useRef(hash);
  const navigating = useRef(false);

  currentHash.current = hash;

  const startTransition = useCallback(
    (to: string) => {
      if (navigating.current) return;
      navigating.current = true;
      setPhase('cover');
      window.setTimeout(() => navigate(to), COVER_MS);
    },
    [navigate],
  );

  // Links to another route (plain <a href="/#..."> or router <Link>) would otherwise
  // reload the whole document; route them client-side behind the loader instead.
  // Capture phase so preventDefault runs before React Router's own Link handler.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element | null)?.closest?.('a');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if ((anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;

      e.preventDefault();
      startTransition(`${url.pathname}${url.search}${url.hash}`);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [startTransition]);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    navigating.current = false;
    setPhase((current) => current ?? 'hold');
    scrollToTarget(currentHash.current);

    const timeoutId = window.setTimeout(() => setPhase(null), HOLD_MS);
    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    const preloader = document.getElementById('app-preloader');
    if (!preloader) return;

    if (window.location.hash) scrollToTarget(window.location.hash);

    const timeoutId = window.setTimeout(() => {
      preloader.classList.add('is-hidden');
      window.setTimeout(() => preloader.remove(), 500);
    }, 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence>
      {phase && (
        <motion.div
          key="page-loader"
          role="status"
          aria-live="polite"
          aria-label="Cargando"
          initial={phase === 'cover' ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
          transition={{ duration: COVER_MS / 1000, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-black-primary"
        >
          <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-primary/10 blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative h-16 w-16"
          >
            <span className="absolute -inset-[3px] overflow-hidden rounded-[18px]">
              <span className="brand-ring brand-ring-fast absolute -inset-1/2" />
            </span>
            <span className="relative flex h-full w-full items-center justify-center rounded-2xl border border-neon-primary/20 bg-black-secondary">
              <Cloud className="h-7 w-7 text-neon-primary" strokeWidth={2.2} />
            </span>
          </motion.div>

          <p className="relative text-xl font-bold tracking-tight text-white">
            Alsoft<span className="mx-[3px] text-neon-primary/70">-</span>
            <span className="brand-shimmer">Cloud</span>
          </p>

          <div className="relative h-0.5 w-40 overflow-hidden rounded-full bg-neon-primary/15">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-neon-primary to-neon-light"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: (COVER_MS + HOLD_MS) / 1000, ease: 'easeInOut' }}
            />
          </div>

          <span className="relative font-mono text-[10px] tracking-[0.25em] text-gray-text/70">CARGANDO</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
