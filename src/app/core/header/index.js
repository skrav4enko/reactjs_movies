import React from 'react';

import './styles.scss';
import Logo from '../../shared/logo';
import SearchIcon from '../../../assets/icons/search-24px.svg';

const Header = ({ navigateTo }) => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <span className="header__icon" onClick={() => navigateTo('main')}>
          <SearchIcon />
        </span>
      </div>
    </header>
  );
};

export default Header;
