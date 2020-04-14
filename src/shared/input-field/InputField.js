import React from 'react';
import './InputField.scss';

function InputField(props) {
  const { placeholder, value, onChange } = props;

  return <input className="input-field" placeholder={placeholder} value={value} onChange={onChange} />;
}

export default InputField;
