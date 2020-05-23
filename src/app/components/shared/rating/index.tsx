/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

interface RatingProps {
  value: string;
}

const Rating: FunctionComponent<RatingProps> = ({ value }) => {
  return (
    <div
      css={css`
        flex: 0 0 auto;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #ffffff;
        height: 70px;
        width: 70px;
        font-size: 30px;
        color: var(--color-text-rating);
      `}
    >
      {value}
    </div>
  );
};

export default Rating;
