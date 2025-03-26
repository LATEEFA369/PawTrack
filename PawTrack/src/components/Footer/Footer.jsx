import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p>&copy; {new Date().getFullYear()} PawTrack. All Rights Reserved.</p>
            <div className="footer-links">
              <Link to="/faq" className="text-white mx-3">FAQ</Link>
              <span>|</span>
              <Link to="/terms" className="text-white mx-3">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
