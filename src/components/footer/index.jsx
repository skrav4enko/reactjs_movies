import React from 'react';

import styles from './styles.module.scss';
import Logo from '../shared/logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
