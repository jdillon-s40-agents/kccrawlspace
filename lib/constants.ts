export const PHONE = '(816) 962-2111';
export const PHONE_HREF = 'tel:+18169622111';
export const EMAIL = 'info@kccrawlspacespecialists.com';
export const DOMAIN = 'KCCrawlSpaceSpecialists.com';

export const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'encapsulation', label: 'Encapsulation', href: '/encapsulation' },
  { key: 'mobile', label: 'Mobile Homes', href: '/mobile-homes' },
  { key: 'pricing', label: 'Pricing', href: '/pricing' },
  { key: 'assessment', label: 'Assessments', href: '/crawl-space-assessment-kansas-city' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
  { key: 'contact', label: 'Contact', href: '/contact' },
] as const;

export type NavKey = typeof NAV_LINKS[number]['key'];
