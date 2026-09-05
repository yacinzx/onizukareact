import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: 1 | 2 | 3 | 4;
}

const delayClasses = {
  1: 'd1',
  2: 'd2',
  3: 'd3',
  4: 'd4',
};

const Reveal = ({ children, delay }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setVisible(true);
            observer.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? delayClasses[delay] : '';

  return (
    <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${delayClass}`}>
      {children}
    </div>
  );
};

export default Reveal;
