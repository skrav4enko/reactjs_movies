import React, { useEffect } from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';
import Header from '../header';
import Footer from '../footer';

const Layout = ({ children, title = 'Netflix Roulette' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.main}>
        <Header />
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
