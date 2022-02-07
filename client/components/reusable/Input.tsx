import React, { FunctionComponent, memo, CSSProperties } from 'react';
import { useController } from 'react-hook-form';
import classnames from 'classnames';
import Text, { TextVariant } from '@reusable/Typography';
import styles from '@styles/Input.module.scss';

export enum TypeInput {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface iInput {
  placeholder?: string;
  inputType?: 'text' | 'number' | 'password' | 'email' | 'tel';
  type?: TypeInput;
  disabled?: boolean;
  name: string;
  positionIcon?: 'left' | 'right';
  error?: boolean;
  label?: string;
  style?: CSSProperties;
  control: any;
  rules: any;
}

const Input: FunctionComponent<iInput> = ({
  placeholder,
  inputType,
  type,
  disabled,
  name,
  positionIcon,
  error,
  label,
  style,
  control,
  rules,
}): JSX.Element => {
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <>
      <div
        className={classnames({
          [styles[`input_wrapper`]]: true,
          [styles[`input_wrapper_disable`]]: disabled,
        })}
      >
        {label && (
          <Text
            variant={
              type === TypeInput.SMALL
                ? TextVariant.heading5
                : type === TypeInput.MEDIUM
                ? TextVariant.heading4
                : type === TypeInput.LARGE
                ? TextVariant.heading3
                : TextVariant.heading5
            }
          >
            {label}
          </Text>
        )}
        <input
          style={{ ...style, marginTop: label && '7px' }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={inputType}
          className={classnames({
            [styles[`input_wrapper__input`]]: true,
            [styles[`input_wrapper__input__${type}`]]: true,
            [styles[`input_wrapper__input__icon__${positionIcon}`]]:
              positionIcon,
            [styles[`input_wrapper__input__error__${error}`]]:
              (fieldState && fieldState.invalid) || error,
          })}
        />
      </div>
    </>
  );
};

Input.defaultProps = {
  placeholder: 'Enter the value',
  inputType: 'text',
  type: TypeInput.MEDIUM,
  disabled: false,
  name: '',
  positionIcon: 'left',
  error: false,
  label: 'Email',
};

export default memo(Input);
