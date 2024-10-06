import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2 className="footer-logo">JTrendsHub</h2>
          <p>Your one-stop shop for all your needs. Quality products at unbeatable prices!</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100092271067882" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://x.com/TusharJain05" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/jtrends_hub/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/tushar-jain-ba89b41b1/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 JTrendsHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
