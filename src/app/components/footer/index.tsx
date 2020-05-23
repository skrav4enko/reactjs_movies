/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import Logo from '../shared/logo';

const Footer: FunctionComponent = () => {
  return (
    <footer
      css={css`
        background-color: #424242;
        height: 70px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
        `}
      >
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
