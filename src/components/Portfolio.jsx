function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <h2>Featured <span>Works</span></h2>
          <p>A glimpse into the premium digital products we've crafted for our clients.</p>
        </div>
        <div className="portfolio-grid">
          {/* Portfolio Item 1 */}
          <div className="portfolio-item glass reveal">
            <div className="portfolio-img">
              <img src="/assets/ecommerce_mockup.png" alt="E-Commerce Fashion Mockup" />
              <div className="overlay">
                <a href="#" className="view-btn">View Case Study</a>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="tag">E-Commerce</span>
              <h3>Luxe Fashion Store</h3>
            </div>
          </div>
          {/* Portfolio Item 2 */}
          <div className="portfolio-item glass reveal delay-1">
            <div className="portfolio-img">
              <img src="/assets/saas_mockup.png" alt="SaaS Analytics Dashboard Mockup" />
              <div className="overlay">
                <a href="#" className="view-btn">View Case Study</a>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="tag">SaaS Dashboard</span>
              <h3>DataPulse Analytics</h3>
            </div>
          </div>
          {/* Portfolio Item 3 */}
          <div className="portfolio-item glass reveal delay-2">
            <div className="portfolio-img">
              <img src="/assets/corporate_mockup.png" alt="Corporate Enterprise Mockup" />
              <div className="overlay">
                <a href="#" className="view-btn">View Case Study</a>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="tag">Corporate</span>
              <h3>Nexus Enterprise Global</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
