import { footerLinks } from '@/src/data';

const Footer = () => {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-brand">
          ONI<span>ZUKA</span>
        </div>
        <nav className="footer-links">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-copy">
          © 2026 Rayan ONIZUKA — World Champion Calisthenics Athlete. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
