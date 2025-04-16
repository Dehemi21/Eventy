import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h3>Smart Event Planning System</h3>
          <p>
            General Sir John Kotelawala Defence University<br />
            Southern Campus<br />
            Phone: +94 76 xxx xxxx<br />
            Email: info@company.com
          </p>
        </div>

        <div className="footer-subscribe">
          <h4>Subscribe to Our Newsletter</h4>
          <form>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Company_Name. All Rights Reserved.</p>
        <p>Design By Company</p>
      </div>
    </footer>
  );
};

export default Footer;
