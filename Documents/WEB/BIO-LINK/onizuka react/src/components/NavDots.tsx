import { navDots } from '@/src/data';
import { useState, useEffect } from 'react';

const NavDots = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sections = navDots
      .map((d) => document.getElementById(d.target || ''))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setActiveId(en.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleDotClick = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-dots-container" id="navDots">
      {navDots.map((dot) => (
        <div
          key={dot.target}
          className={`nav-dot ${activeId === dot.target ? 'active' : ''}`}
          data-target={dot.target}
          onClick={() => handleDotClick(dot.target || '#')}
        >
          <span className="dot-label">{dot.label}</span>
          <div className="dot-circle"></div>
        </div>
      ))}
    </nav>
  );
};

export default NavDots;
