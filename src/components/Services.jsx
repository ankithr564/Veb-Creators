function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header reveal">
          <h2>Custom <span>Client Solutions</span></h2>
          <p>We build customized websites based strictly on your unique requirements, delivering proper, high-end designs across all industries.</p>
        </div>
        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card glass reveal">
            <div className="icon">🛒</div>
            <h3>E-Commerce</h3>
            <p>High-converting, lightning-fast online stores designed to maximize sales and deliver seamless shopping experiences.</p>
          </div>
          {/* Service Card 2 */}
          <div className="service-card glass reveal delay-1">
            <div className="icon">💻</div>
            <h3>SaaS Platforms</h3>
            <p>Robust, scalable, and intuitive dashboards tailored for modern Software-as-a-Service businesses.</p>
          </div>
          {/* Service Card 3 */}
          <div className="service-card glass reveal delay-2">
            <div className="icon">🏢</div>
            <h3>Corporate Sites</h3>
            <p>Trust-inspiring, professional enterprise websites that communicate your brand's authority and values.</p>
          </div>
          {/* Service Card 4 */}
          <div className="service-card glass reveal delay-3">
            <div className="icon">🚀</div>
            <h3>Custom Web Apps</h3>
            <p>Bespoke web applications built with cutting-edge frameworks to solve your unique business challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
