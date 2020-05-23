/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

interface ParamsProps {
  value: string;
  dimension: string;
}

const Params: FunctionComponent<ParamsProps> = ({ value, dimension }) => {
  return (
    <div
      css={css`
        display: inline-block;
      `}
    >
      <span
        css={css`
          color: #f56261;
          font-size: 24px;
          margin-right: 10px;
        `}
      >
        {value}
      </span>
      <span>{dimension}</span>
    </div>
  );
};

export default Params;
