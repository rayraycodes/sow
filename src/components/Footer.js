import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>© 2023 Stories of the World</p>
      <div>
        <a href="#about">About</a>
        <a href="#team">Team</a>
        <a href="#top">Go to Top</a>
      </div>
    </div>
  );
}

export default Footer;