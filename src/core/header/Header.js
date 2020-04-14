import React from 'react';
import './Header.scss';
import Logo from '../../shared/logo/Logo';

import SearchIcon from '../../assets/icons/search-24px.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <span className="header__icon">
          <SearchIcon />
        </span>
      </div>
    </header>
  );
}

export default Header;
