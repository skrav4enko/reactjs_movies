/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { func } from 'prop-types';

import './styles.scss';
import Logo from '../../shared/logo';
import SearchIcon from '../../../assets/icons/search-24px.svg';

const Header = ({ navigateTo }) => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <span className="header__icon" onClick={() => navigateTo('main')} tabIndex="0" role="link">
          <SearchIcon />
        </span>
      </div>
    </header>
  );
};

Header.propTypes = {
  navigateTo: func,
};

Header.defaultProps = {
  navigateTo: 'func',
};

export default Header;
