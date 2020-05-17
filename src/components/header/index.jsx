/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';
import SearchIcon from '../../../public/assets/icons/search-24px.svg';

import styles from './styles.module.scss';
import Logo from '../shared/logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Link href="/">
          <a className={styles.header__icon}>
            <SearchIcon />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
