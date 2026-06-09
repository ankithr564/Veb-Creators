function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo">veb<span>creators</span></a>
          <p>Engineering premium web experiences for all domains.</p>
        </div>
        <div className="footer-links">
          <p>&copy; {new Date().getFullYear()} vebcreators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
