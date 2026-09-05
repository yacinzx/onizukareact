import { reels } from '@/src/data';
import Reveal from './Reveal';

const Reels = () => {
  return (
    <section className="section-pad reels-section" id="reels">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-tag">03 · Latest Reels</div>
          <h2 className="section-title">
            Movement, <span className="accent">on film</span>.
          </h2>
          <p className="section-lead">
            Highlights from competitions, training sessions and brand
            collaborations.
          </p>
        </div>
        <div className="reels-grid">
          {reels.map((reel, index) => {
            const delay = (Math.floor(index / 2) + 1) as 1 | 2;
            return (
              <Reveal key={reel.src} delay={delay}>
                <div className={`reel-card ${reel.gold ? 'gold' : ''}`}>
                  <video
                    src={reel.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="reel-overlay"></div>
                  <div className="reel-info">
                    <div className="reel-tag">{reel.tag}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reels;
