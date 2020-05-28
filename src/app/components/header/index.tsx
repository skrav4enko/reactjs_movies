/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '../../../assets/icons/search-24px.svg';
import Logo from '../shared/logo';

const Header: FunctionComponent = () => {
  return (
    <header
      css={css`
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
        `}
      >
        <Logo />
        <NavLink
          css={css`
            fill: #f65261;
            cursor: pointer;
            height: 32px;
            width: 32px;

            &.active {
              display: none;
            }
          `}
          exact
          to="/search"
        >
          <SearchIcon
            css={css`
              display: block;
              height: 100%;
              width: 100%;
            `}
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
