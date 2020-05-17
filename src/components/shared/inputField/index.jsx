import React from 'react';
import { string, func } from 'prop-types';

import styles from './styles.module.scss';

const InputField = ({ placeholder, name, id, type = 'text', value, onChange }) => {
  return (
    <input
      className={styles.inputField}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

InputField.propTypes = {
  placeholder: string,
  id: string,
  name: string,
  type: string,
  value: string,
  onChange: func,
};

InputField.defaultProps = {
  placeholder: 'string',
  id: 'string',
  name: 'string',
  type: 'string',
  value: 'string',
  onChange: 'func',
};

export default InputField;
