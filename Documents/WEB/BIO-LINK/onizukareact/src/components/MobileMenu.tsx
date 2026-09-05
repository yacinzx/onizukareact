import { navItems } from '@/src/data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? 'open' : ''}`}
      id="mobileMenu"
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          data-close
          onClick={handleLinkClick}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;
