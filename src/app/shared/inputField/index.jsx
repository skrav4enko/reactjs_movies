import React from 'react';
import { string, func } from 'prop-types';

import './styles.scss';

const InputField = ({ placeholder, value, onChange }) => {
  return <input className="input-field" placeholder={placeholder} value={value} onChange={onChange} />;
};

InputField.propTypes = {
  placeholder: string,
  value: string,
  onChange: func,
};

InputField.defaultProps = {
  placeholder: 'string',
  value: 'string',
  onChange: 'func',
};

export default InputField;
