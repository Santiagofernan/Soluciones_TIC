import {
  ShieldCheck,
  Server,
  Network,
  Cctv,
  Code2,
  Brain,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Server,
  Network,
  Cctv,
  Code2,
  Brain,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? ShieldCheck;
}
