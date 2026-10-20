import { Link } from 'react-router-dom';
import './Footer.css';

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-logo">
            Seranova Declutter
          </div>

          <nav className="footer-nav">
           <Link to="/shop">Shop</Link>
           <Link to="/about">About</Link>
           <Link to="/terms">Terms</Link>
           <Link to="/contact">Contact</Link>
          </nav>

          <div className="footer-social">
            <a href="https://www.facebook.com/share/18tf6H65mF/?mibextid=wwXIfr" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.facebook.com/share/18tf6H65mF/?mibextid=wwXIfr" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@_zaynab05" aria-label="TikTok">
              <FaTiktok />
            </a>

            <a href="https://wa.me/2347054425207">
              <FaWhatsapp />
            </a>
          </div>

        </div>

        <div className="footer-line"></div>

        <p className="footer-copyright">
          © 2026 Seranova Declutter. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;


