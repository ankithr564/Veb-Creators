function Hero() {
  return (
    <section id="home" className="hero">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="container hero-container">
        <div className="hero-content reveal">
          <div className="badge">Next-Gen Web Agency</div>
          <h1 className="hero-title">We craft <span>digital experiences</span> that inspire.</h1>
          <p className="hero-subtitle">
            At vebcreators, our core expertise is crafting bespoke websites meticulously tailored to your specific client requirements, ensuring pixel-perfect, premium design.
          </p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn-primary btn-large">View Our Portfolio</a>
            <a href="#services" className="btn-outline btn-large">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
