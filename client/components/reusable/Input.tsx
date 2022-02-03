import React, { FunctionComponent, ChangeEventHandler, memo } from 'react';
import classnames from 'classnames';
import Text, { TextVariant } from '@resusable/Typography';
import styles from '@styles/Input.module.scss';

interface iInput {
  placeholder?: string;
  inputType?: 'text' | 'number' | 'password' | 'email' | 'tel';
  type?: 'small' | 'medium' | 'large';
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
  type,
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
      <div
        className={classnames({
          [styles[`input_wrapper`]]: true,
          [styles[`input_wrapper_disable`]]: disabled,
        })}
      >
        {label && <Text variant={TextVariant.heading4}>{label}</Text>}
        <input
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={inputType}
          className={classnames({
            [styles[`input_wrapper__input`]]: true,
            [styles[`input_wrapper__input__${type}`]]: true,
            [styles[`input_wrapper__input__icon__${positionIcon}`]]:
              positionIcon,
            [styles[`input_wrapper__input__error__${error}`]]: error,
          })}
        />
      </div>
    </>
  );
};

Input.defaultProps = {
  placeholder: 'Enter the value',
  inputType: 'text',
  type: 'medium',
  disabled: false,
  name: 'email',
  onChange: (e) => console.log(e.target.value),
  value: '',
  positionIcon: 'left',
  error: false,
  label: 'Email',
};

export default memo(Input);
