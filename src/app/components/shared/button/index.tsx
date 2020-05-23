/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  variant?: string;
  size?: string;
  onClick?: () => void;
}

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-background-primary);
  text-transform: uppercase;
  color: var(--color-text);
  font-weight: 500;
  font-size: 20px;

  border-radius: 4px;
  border: none;
  padding: 0 25px;
  height: 60px;

  &:not([disabled]) {
    cursor: pointer;
  }
`;

const smallStyle = css`
  height: 35px;
  font-size: 16px;
`;
const secondaryStyle = css`
  background-color: var(--color-button-background-secondary);
`;

const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button', variant, size, onClick }) => {
  return (
    <button
      css={css`
        ${buttonBase};
        ${variant === 'secondary' ? secondaryStyle : ''};
        ${size === 'small' ? smallStyle : ''}
      `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
