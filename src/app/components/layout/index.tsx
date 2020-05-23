/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';

const Layout: FunctionComponent = ({ children }) => {
  const { key } = useLocation();

  // Scroll to the top of the page when pages change
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [key]);

  return (
    <div
      css={css`
        position: relative;
        background-color: var(--color-background, #232323);
        color: var(--color-text, white);
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 70px;
      `}
    >
      <Header />
      <main
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
