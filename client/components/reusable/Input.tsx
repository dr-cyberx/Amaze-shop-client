import React, {
  FunctionComponent,
  ChangeEventHandler,
  memo,
  CSSProperties,
} from 'react'
import classnames from 'classnames'
import Text, { TextVariant } from '@resusable/Typography'
import styles from '@styles/Input.module.scss'

export enum TypeInput {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface iInput {
  placeholder?: string
  inputType?: 'text' | 'number' | 'password' | 'email' | 'tel'
  type?: TypeInput
  disabled?: boolean
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  positionIcon?: 'left' | 'right'
  error?: boolean
  label?: string
  style?: CSSProperties
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
  style,
}): JSX.Element => {
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
  )
}

Input.defaultProps = {
  placeholder: 'Enter the value',
  inputType: 'text',
  type: TypeInput.MEDIUM,
  disabled: false,
  name: 'email',
  onChange: (e) => console.log(e.target.value),
  value: '',
  positionIcon: 'left',
  error: false,
  label: 'Email',
}

export default memo(Input)
