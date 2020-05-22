import React, { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import './styles.scss';

const Layout: FunctionComponent = ({ children }) => {
  const { key } = useLocation();

  // Scroll to the top of the page when pages change
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [key]);

  return (
    <div className="main">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
