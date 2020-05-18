/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import { END } from 'redux-saga';
import { wrapper } from '../store/configure-store';
import ErrorBoundary from '../components/shared/errorBoundary';

import '../styles/global.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await ctx.store.sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    );
  }
}

export default wrapper.withRedux(MyApp);
