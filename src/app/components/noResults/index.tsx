/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

const NoResults: FunctionComponent = () => {
  const noResult = css`
    flex: 1;
    display: grid;
    place-content: center;
    font-size: 30px;
  `;

  return <div css={noResult}>No films found</div>;
};

export default NoResults;
