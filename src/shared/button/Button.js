import React from 'react';
import './Button.scss';

function Button(props) {
  const { children, type = 'button', variant, size, onClick } = props;

  return (
    <button className={`button ${variant} ${size}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
