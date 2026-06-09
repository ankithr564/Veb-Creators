function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box glass reveal">
          <div className="contact-info">
            <h2>Ready to start your <span>project?</span></h2>
            <p>Let's turn your vision into a digital masterpiece. Reach out to the vebcreators team today.</p>
            <div className="contact-details">
              <p>📧 hello@vebcreators.com</p>
              <p>📍 Tech Hub, Innovation City</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select>
                <option value="">Select Domain</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="saas">SaaS</option>
                <option value="corporate">Corporate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea rows="4" placeholder="Tell us about your project" required></textarea>
            </div>
            <button type="submit" className="btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
