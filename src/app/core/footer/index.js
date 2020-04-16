import React from 'react';

import './styles.scss';
import Logo from '../../shared/logo';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
