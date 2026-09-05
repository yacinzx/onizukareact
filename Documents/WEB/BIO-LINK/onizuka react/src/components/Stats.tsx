import { stats } from '@/src/data';
import type { StatItem } from '@/src/data';
import Counter from './Counter';
import Reveal from './Reveal';

const cardClassName = (variant?: StatItem['cardVariant']) => {
  const base = 'stat-card';
  if (variant === 'gold') return `${base} gold`;
  if (variant === 'blue') return `${base} blue`;
  return base;
};

const Stats = () => {
  return (
    <section className="section-pad stats-section" id="stats">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-tag">01 · By The Numbers</div>
          <h2 className="section-title">
            A career in <span className="accent">data</span>.
          </h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const delay = Math.ceil((index + 1) / 3) as 1 | 2;
            return (
              <Reveal key={stat.id} delay={delay}>
                <div className={cardClassName(stat.cardVariant)}>
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    plain={stat.plain}
                  />
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
