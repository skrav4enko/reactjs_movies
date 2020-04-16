import React from 'react';

import './styles.scss';

const Button = ({ children, type = 'button', variant, size, onClick }) => {
  return (
    <button className={`button ${variant} ${size}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
