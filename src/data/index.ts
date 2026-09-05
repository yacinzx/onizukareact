export type ButtonVariant = 'primary' | 'gold' | 'default';

export interface NavItem {
  href: string;
  label: string;
  target?: string;
}

export interface StatItem {
  id: string;
  value: number | string;
  label: string;
  suffix?: string;
  plain?: boolean;
  animated?: boolean;
  cardVariant?: 'blue' | 'gold' | 'default';
}

export interface Stat {
  value: number | string;
  suffix?: string;
  plain?: boolean;
  cardVariant?: 'blue' | 'gold' | 'default';
}

export interface ShopItem {
  href: string;
  img: string;
  imgAlt: string;
  title: string;
  description: string;
  btnVariant: ButtonVariant;
  btnText: string;
  btnIcon: string;
}

export interface ReelItem {
  src: string;
  tag: string;
  gold?: boolean;
}

export interface ContactItem {
  href: string;
  icon: string;
  title: string;
  description: string;
  btnVariant: ButtonVariant;
  btnText: string;
  btnIcon: string;
}

export const navItems: NavItem[] = [
  { href: '#hero', label: 'Home' },
  { href: '#stats', label: 'Stats' },
  { href: '#shop', label: 'Shop' },
  { href: '#reels', label: 'Highlights' },
];

export const navDots: NavItem[] = [
  { href: '#hero', label: 'Home', target: 'hero' },
  { href: '#stats', label: 'Stats', target: 'stats' },
  { href: '#shop', label: 'Shop', target: 'shop' },
  { href: '#reels', label: 'Highlights', target: 'reels' },
];

export const footerLinks: NavItem[] = [
  { href: '#hero', label: 'Home' },
  { href: '#stats', label: 'Stats' },
  { href: '#shop', label: 'Shop' },
  { href: 'https://instagram.com/onizuka_ns', label: 'Instagram' },
];

export const stats: StatItem[] = [
  { id: 'followers', value: 136, suffix: 'K', label: 'Followers', cardVariant: 'blue' },
  { id: 'posts', value: 499, label: 'Posts', cardVariant: 'default' },
  { id: 'world-champion', value: 2026, plain: true, label: 'World Champion', cardVariant: 'gold' },
  { id: 'location', value: '\u{1F1EB}\u{1F1F7}', label: 'Located France', cardVariant: 'gold' },
  { id: 'experience', value: 10, suffix: '+', label: 'Years Experience', cardVariant: 'blue' },
];

export const shopItems: ShopItem[] = [
  {
    href: 'https://shop.caliathletics.com',
    img: '/assets/caliathletics.jpg',
    imgAlt: 'Cali Athletics',
    title: 'Calisthenics Shop',
    description: 'Training gear, apparel and programs at shop.caliathletics.com',
    btnVariant: 'primary',
    btnText: 'Visit Shop',
    btnIcon: '\u{2192}',
  },
  {
    href: 'https://instagram.com/caliathletics_official',
    img: '/assets/caliathletics.jpg',
    imgAlt: 'Cali Athletics',
    title: '@caliathletics_official',
    description: 'Follow the official Instagram for latest reels, posts and updates.',
    btnVariant: 'default',
    btnText: 'Open Instagram',
    btnIcon: '\u{2197}',
  },
];

export const reels: ReelItem[] = [
  { src: '/assets/reel1.mp4', tag: 'Push' },
  { src: '/assets/reel2.mp4', tag: 'Pull-Push', gold: true },
  { src: '/assets/reel3.mp4', tag: 'Pull' },
  { src: '/assets/reel4.mp4', tag: 'Competition', gold: true },
];

export const contactItems: ContactItem[] = [
  {
    href: 'https://instagram.com/onizuka_ns',
    icon: 'fab-instagram',
    title: 'Instagram',
    description: 'Follow @onizuka_ns for daily training and competition clips.',
    btnVariant: 'default',
    btnText: 'Open Instagram',
    btnIcon: '\u{2197}',
  },
  {
    href: 'https://instagram.com/caliathletics_official',
    icon: 'fab-instagram',
    title: 'Cali Athletics',
    description: 'Official shop and federation updates at @caliathletics_official.',
    btnVariant: 'primary',
    btnText: 'Open Cali Athletics',
    btnIcon: '\u{2197}',
  },
  {
    href: 'mailto:contact@onizuka.com',
    icon: '\u{2709}',
    title: 'Email',
    description: 'For coaching, partnerships and event bookings.',
    btnVariant: 'gold',
    btnText: 'Send Email',
    btnIcon: '\u{2192}',
  },
  {
    href: 'https://shop.caliathletics.com',
    icon: '\u{1F6D}',
    title: 'Shop',
    description: 'Training gear and programs at shop.caliathletics.com',
    btnVariant: 'default',
    btnText: 'Visit Shop',
    btnIcon: '\u{2192}',
  },
];
