import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Cloud } from 'lucide-react';

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -90 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } },
};

const wordLeft: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const dash: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 15 } },
};

const wordRight: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: { opacity: 1, clipPath: 'inset(0 0% 0 0)', transition: { duration: 0.6, ease: 'easeOut' } },
};

type BrandLogoProps = {
  size?: 'sm' | 'md';
  onNavigate?: () => void;
  className?: string;
};

export default function BrandLogo({ size = 'md', onNavigate, className = '' }: BrandLogoProps) {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const isSmall = size === 'sm';

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    onNavigate?.();
    // Already claimed by PageTransition when coming from another route.
    if (e.defaultPrevented) return;
    e.preventDefault();
    if (pathname !== '/' || hash) navigate('/', { replace: pathname === '/' });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      aria-label="Alsoft-Cloud, ir al inicio"
      className={`group relative inline-flex items-center select-none ${isSmall ? 'gap-2.5' : 'gap-3'} ${className}`}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center ${isSmall ? 'gap-2.5' : 'gap-3'}`}
      >
        <motion.span
          variants={iconVariants}
          className={`relative flex items-center justify-center ${isSmall ? 'w-7 h-7' : 'w-9 h-9'}`}
        >
          <span className="absolute -inset-1 rounded-xl bg-neon-primary/25 blur-md opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -inset-[2px] overflow-hidden rounded-[10px]">
            <span className="brand-ring absolute -inset-1/2 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="relative flex h-full w-full items-center justify-center rounded-lg border border-neon-primary/20 bg-black-secondary">
            <Cloud
              className={`text-neon-primary transition-transform duration-300 group-hover:-translate-y-px group-hover:scale-110 ${
                isSmall ? 'w-3.5 h-3.5' : 'w-[18px] h-[18px]'
              }`}
              strokeWidth={2.2}
            />
            <span className="absolute bottom-1 right-1 h-1 w-1 rounded-full bg-neon-light shadow-[0_0_6px_rgba(160,228,188,0.9)] animate-pulse" />
          </span>
        </motion.span>

        <span
          className={`relative flex items-baseline font-bold leading-none tracking-tight ${
            isSmall ? 'text-base' : 'text-xl'
          }`}
        >
          <motion.span
            variants={wordLeft}
            className="text-white transition-colors duration-300 group-hover:text-neon-light"
          >
            Alsoft
          </motion.span>
          <motion.span variants={dash} className="mx-[3px] text-neon-primary/70">
            -
          </motion.span>
          <motion.span variants={wordRight} className="brand-shimmer">
            Cloud
          </motion.span>
          <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-neon-primary via-neon-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </span>
      </motion.span>
    </Link>
  );
}
