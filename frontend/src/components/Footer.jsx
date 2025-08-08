import React from 'react';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
        <div className="footer-icons">
          <a href="#" title="Facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" title="Twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" title="Instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" title="LinkedIn" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
