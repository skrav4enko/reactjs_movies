import React from 'react';
import './InputField.scss';

function InputField(props) {
  const { placeholder } = props;

  return <input className="input-field" placeholder={placeholder} />;
}

export default InputField;
