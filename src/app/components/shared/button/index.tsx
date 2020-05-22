import React, { FunctionComponent } from 'react';
import './styles.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  variant?: string;
  size?: string;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button', variant, size, onClick }) => {
  return (
    <button className={`button ${variant} ${size}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
