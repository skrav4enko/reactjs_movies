/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

const Logo: FunctionComponent = () => {
  return (
    <div
      css={css`
        font-weight: 500;
        font-size: 20px;
        color: var(--color-text-primary);
      `}
    >
      <span
        css={css`
          font-weight: 700;
        `}
      >
        netflix
      </span>
      <span>roulette</span>
    </div>
  );
};

export default Logo;
