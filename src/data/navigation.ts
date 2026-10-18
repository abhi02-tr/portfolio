export interface NavItem {
  label: string;
  path: string;
  isAnchor?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Overview', path: '/#overview', isAnchor: true },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/#experience', isAnchor: true },
  { label: 'Skills', path: '/#skills', isAnchor: true },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/#contact', isAnchor: true },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/abhi02-tr',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abhi-trivedi',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:trivediabhi1812@gmail.com?subject=Inquiry%20regarding%20Software%20Engineering%20Role',
    icon: 'mail',
  }
];
