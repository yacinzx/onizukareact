import { useEffect, useRef } from 'react';

interface CounterProps {
  value: number | string;
  suffix?: string;
  plain?: boolean;
  className?: string;
}

const Counter = ({ value, suffix = '', plain = false, className = '' }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof value === 'string') {
      node.textContent = value;
      return;
    }

    let rafId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;

          const target = value;
          const dur = 1400;
          const start = performance.now();

          const step = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = target * eased;
            node.textContent =
              (plain ? Math.round(val) : Math.round(val).toLocaleString()) + suffix;
            if (p < 1) {
              rafId = requestAnimationFrame(step);
            }
          };

          rafId = requestAnimationFrame(step);
          observer.unobserve(en.target);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, suffix, plain]);

  return (
    <div
      ref={ref}
      className={`stat-value ${className}`}
      data-count={typeof value === 'number' ? value : undefined}
      data-suffix={suffix || undefined}
      data-plain={plain ? '1' : undefined}
    >
      {typeof value === 'string' ? value : '0'}
    </div>
  );
};

export default Counter;
