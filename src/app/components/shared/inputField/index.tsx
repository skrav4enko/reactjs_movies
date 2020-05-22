import React, { FunctionComponent, ChangeEvent } from 'react';
import './styles.scss';

interface InputFieldProps {
  placeholder: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FunctionComponent<InputFieldProps> = ({ placeholder, name, id, type = 'text', value, onChange }) => {
  return (
    <input
      className="input-field"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
