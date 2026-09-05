import { useState, useEffect } from 'react';
import { useDevtoolsProtection } from '@/src/hooks/useDevtoolsProtection';
import { useScrollEffects } from '@/src/hooks/useScrollEffects';
import ProgressBar from './components/ProgressBar';
import TopHeader from './components/TopHeader';
import NavDots from './components/NavDots';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Shop from './components/Shop';
import Reels from './components/Reels';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useDevtoolsProtection(true);
  const { progress, headerScrolled, scrollHintVisible } = useScrollEffects();

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen);
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleMenuToggle = (open: boolean) => {
    setMobileMenuOpen(open);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white overflow-x-hidden">
      <ProgressBar progress={progress} />
      <TopHeader
        scrolled={headerScrolled}
        mobileMenuOpen={mobileMenuOpen}
        onMenuToggle={handleMenuToggle}
      />
      <NavDots />
      <MobileMenu isOpen={mobileMenuOpen} onClose={handleMenuClose} />

      <Hero scrollHintVisible={scrollHintVisible} />
      <Stats />
      <Shop />
      <Reels />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
