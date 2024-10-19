import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesbus Enim</p>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
          <address>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003<br />
            Call: +919958287272<br />
            Email: care@chaperoneplants.com
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-company">
          <h4>CHAPERONE</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          
          </p>
        </div>

        <h4>Follow us on</h4>
        <div className="social-icons">
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
          <a href="#youtube"><i className="fab fa-youtube"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
