interface HeroProps {
  scrollHintVisible: boolean;
}

const Hero = ({ scrollHintVisible }: HeroProps) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-media" id="heroMedia">
        <img
          src="/assets/bg.jpg"
          alt="Rayan ONIZUKA"
          className="hero-img active"
          id="heroImgBg"
        />
        <div className="hero-vignette"></div>
      </div>
      <div className="hero-inner">
        <div className="wrap">
          <div className="hero-top">
            <span className="eyebrow-badge gold">
              🏆 2026 World Champion · Calisthenics
            </span>
            <h1 className="hero-title">
              Rayan
              <span className="kanji">天堂龍 · ONIZUKA</span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p className="hero-sub">
              Professional calisthenics athlete redefining human gravity &amp;
              movement — coach, creator and Team France representative on the
              world stage.
            </p>
            <div className="hero-actions">
              <a
                href="mailto:contact@onizuka.com"
                className="bio-btn primary"
              >
                Coaching <span>★</span>
              </a>
              <a
                href="https://shop.caliathletics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bio-btn gold"
              >
                Shop Now <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="scroll-hint"
        id="scrollHint"
        style={{ opacity: scrollHintVisible ? 0.75 : 0 }}
      >
        <span className="scroll-hint-text">SCROLL</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
