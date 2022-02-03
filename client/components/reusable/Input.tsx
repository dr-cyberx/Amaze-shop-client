import React, { FunctionComponent, ChangeEventHandler } from 'react';

interface iInput {
  placeholder?: string;
  inputType?: 'text' | 'number' | 'password' | 'email' | 'tel';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  positionIcon?: 'left' | 'right';
  error?: boolean;
  label?: string;
}

const Input: FunctionComponent<iInput> = ({
  placeholder,
  inputType,
  size,
  disabled,
  name,
  onChange,
  value,
  positionIcon,
  error,
  label,
}): JSX.Element => {
  return (
    <>
      <input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
      />
    </>
  );
};

Input.defaultProps = {
  placeholder: 'Enter the value',
  inputType: 'text',
  size: 'medium',
  disabled: false,
  name: 'email',
  onChange: (e) => console.log(e.target.value),
  value: '',
  positionIcon: 'left',
  error: false,
  label: 'Email',
};

export default Input;
