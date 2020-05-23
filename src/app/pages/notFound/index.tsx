/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import Layout from '../../components/layout';

const NotFound: FunctionComponent = () => (
  <Layout>
    <div
      css={css`
        background-color: var(--color-background);
        color: var(--color-text);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      4xx Nothing Founded
    </div>
  </Layout>
);

export default NotFound;
