export interface NavItem {
  label: string;
  sectionId: string;
}

export const navItems: NavItem[] = [
  { label: 'Servicios', sectionId: 'servicios' },
  { label: 'Metodología', sectionId: 'metodologia' },
  { label: 'Proyectos', sectionId: 'proyectos' },
  { label: 'Planes', sectionId: 'planes' },
  { label: 'Recursos', sectionId: 'recursos' },
  { label: 'Contacto', sectionId: 'contacto' },
];
