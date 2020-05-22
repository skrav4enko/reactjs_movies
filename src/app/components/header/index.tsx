import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '../../../assets/icons/search-24px.svg';
import Logo from '../shared/logo';
import './styles.scss';

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavLink className="header__icon" exact to="/">
          <SearchIcon />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
