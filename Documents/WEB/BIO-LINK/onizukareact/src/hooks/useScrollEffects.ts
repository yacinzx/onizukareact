import { useEffect, useState, useRef } from 'react';

interface ScrollState {
  progress: number;
  headerScrolled: boolean;
  scrollHintVisible: boolean;
}

export const useScrollEffects = (): ScrollState => {
  const [state, setState] = useState<ScrollState>({
    progress: 0,
    headerScrolled: false,
    scrollHintVisible: true,
  });

  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const total = document.documentElement.scrollHeight - vh;
        const progress = total > 0 ? Math.min(1, scrollY / total) : 0;
        const headerScrolled = scrollY > 40;
        const scrollHintVisible = scrollY <= 40;

        setState({
          progress,
          headerScrolled,
          scrollHintVisible,
        });

        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};
