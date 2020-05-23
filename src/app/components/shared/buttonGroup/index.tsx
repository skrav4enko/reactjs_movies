/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

const buttonGroupStyle = css`
  display: inline-flex;

  & > {
    &:not(:first-of-type) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:not(:last-of-type) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

const ButtonGroup: FunctionComponent = ({ children }) => {
  return <div css={buttonGroupStyle}>{children}</div>;
};

export default ButtonGroup;
