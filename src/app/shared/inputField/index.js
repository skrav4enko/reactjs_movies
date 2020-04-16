import React from 'react';

import './styles.scss';

const InputField = ({ placeholder, value, onChange }) => {
  return <input className="input-field" placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputField;
