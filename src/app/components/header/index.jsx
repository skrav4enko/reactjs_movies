/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '../../../assets/icons/search-24px.svg';
import Logo from '../shared/logo';
import './styles.scss';

const Header = () => {
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
