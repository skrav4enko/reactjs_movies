/* eslint-disable react/prop-types */
import React from 'react';

import styles from './styles.module.scss';

const Button = ({ children, type = 'button', variant, size, onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
