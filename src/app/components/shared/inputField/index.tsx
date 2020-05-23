/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { ChangeEvent, FunctionComponent } from 'react';

interface InputFieldProps {
  placeholder: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FunctionComponent<InputFieldProps> = ({ placeholder, name, id, type = 'text', value, onChange }) => {
  const inputStyle = css`
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.8) 10%,
      rgba(0, 0, 0, 0.9) 50%,
      rgba(0, 0, 0, 0.8) 90%,
      rgba(0, 0, 0, 0.5) 100%
    );
    background-color: transparent;
    height: 60px;
    font-size: 20px;
    color: #ffffff;
    padding: 0 20px;
    border-radius: 4px;
    border: none;
  `;

  return (
    <input
      css={inputStyle}
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
