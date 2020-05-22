import React, { FunctionComponent } from 'react';
import Logo from '../shared/logo';
import './styles.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
