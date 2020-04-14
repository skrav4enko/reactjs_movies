import React from 'react';
import './Footer.scss';
import Logo from '../../shared/logo/Logo';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
