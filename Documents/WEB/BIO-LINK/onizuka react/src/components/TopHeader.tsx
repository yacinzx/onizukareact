interface TopHeaderProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  onMenuToggle: (open: boolean) => void;
}

const TopHeader = ({ scrolled, mobileMenuOpen, onMenuToggle }: TopHeaderProps) => {
  return (
    <header className={`top-header ${scrolled ? 'scrolled' : ''}`} id="topHeader">
      <a href="#hero" className="brand-handle">
        <span>@onizuka_ns</span>
        <span className="verified-badge">✓</span>
      </a>
      <div className="top-controls">
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <a href="#stats">Stats</a>
          <a href="#shop">Shop</a>
          <a href="#reels">Highlights</a>
        </nav>
        <button
          className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          id="menuToggle"
          aria-label="Menu"
          onClick={() => onMenuToggle(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
