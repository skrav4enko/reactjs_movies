import React from 'react';
import './Button.scss';

function Button(props) {
  const { children, variant, size, onClick } = props;

  return (
    <button className={`button ${variant} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
