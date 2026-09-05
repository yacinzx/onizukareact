import { shopItems } from '@/src/data';
import Reveal from './Reveal';

const Shop = () => {
  return (
    <section className="section-pad shop-section" id="shop">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-tag">02 · Connect</div>
          <h2 className="section-title">
            Caliathletics <span className="accent">Shop</span>.
          </h2>
        </div>
        <div className="shop-grid">
          {shopItems.map((item, index) => (
            <Reveal key={item.title} delay={(index + 1) as 1 | 2}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shop-card"
              >
                <img
                  src={item.img}
                  alt={item.imgAlt}
                  style={{
                    height: '48px',
                    width: 'auto',
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                  }}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="bio-btn primary">
                  {item.btnText} <span>{item.btnIcon}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
