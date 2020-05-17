import React from 'react';

import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logo__main}>netflix</span>
      <span>roulette</span>
    </div>
  );
};

export default Logo;
