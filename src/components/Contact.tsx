import { contactItems } from '@/src/data';
import Reveal from './Reveal';

const Contact = () => {
  return (
    <section className="section-pad shop-section" id="contact">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="section-tag">04 · Contact</div>
          <h2 className="section-title">
            Get in <span className="accent">touch</span>.
          </h2>
        </div>
        <div className="shop-grid">
          {contactItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2 + 1) as 1 | 2}>
              <a href={item.href} className="shop-card">
                <div className="ic">
                  <i className={item.icon.includes('fa-') ? item.icon : undefined}>
                    {!item.icon.includes('fa-') && item.icon}
                  </i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={`bio-btn ${item.btnVariant === 'gold' ? 'gold' : item.btnVariant === 'primary' ? 'primary' : ''}`}>
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

export default Contact;
