import React, {
  FunctionComponent,
  useEffect,
  useState,
  useMemo,
  memo,
  CSSProperties,
  cloneElement,
} from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import Text, { TextVariant } from './Typography'
import styles from '@styles/Button.module.scss'

export enum TypeButton {
  PRIMARY = 'primary-active',
  PRIMARY_INACTIVE = 'primary-inactive',
  PRIMARY_SUCCESS = 'primary-success',
  PRIMARY_DANGER = 'primary-danger',
  SECONDARY = 'secondary-active',
  SECONDARY_INACTIVE = 'secondary-inactive',
  SECONDARY_SUCCESS = 'secondary-success',
  SECONDARY_DANGER = 'secondary-danger',
}

export enum TypeButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum TypeTextColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface iButton {
  btnType: TypeButton
  icon?: React.ReactElement
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  label: string
  // disable?: boolean
  loading?: boolean
  size: TypeButtonSize
  style?: CSSProperties
  type?: 'button' | 'submit' | 'reset'
}

const Button: FunctionComponent<iButton> = ({
  btnType,
  icon,
  onClick,
  label,
  // disable,
  loading,
  size,
  style,
  type,
}): JSX.Element => {
  const [variant, setVariant] = useState<TextVariant>(TextVariant.heading6)

  useEffect(() => {
    setVariant(handleTextVariant(size))
  }, [size])

  const handleTextVariant: (btnSize: TypeButtonSize) => TextVariant = useMemo(
    () =>
      (btnSize: TypeButtonSize): TextVariant => {
        switch (btnSize) {
          case TypeButtonSize.LARGE:
            return TextVariant.heading3
          case TypeButtonSize.MEDIUM:
            return TextVariant.heading4
          case TypeButtonSize.SMALL:
            return TextVariant.heading5
          default:
            return TextVariant.heading4
        }
      },
    [size]
  )

  return (
    <>
      <button
        className={classnames({
          [styles['btn']]: true,
          [styles[`btn-${btnType}`]]: true,
          [styles[`btn-${size}`]]: true,
        })}
        onClick={onClick}
        style={style}
        type={type ? type : 'submit'}
      >
        {loading ? (
          <FontAwesomeIcon
            icon={faHourglassHalf}
            size={'xs'}
            style={{ marginRight: '6px' }}
          />
        ) : (
          icon && cloneElement(icon, { style: { marginRight: '6px' } })
        )}
        <Text variant={variant}>{loading ? 'loading...' : label}</Text>
      </button>
    </>
  )
}

Button.defaultProps = {
  btnType: TypeButton.PRIMARY,
  // icon: <FontAwesomeIcon icon={faPlus} size={'xs'} />,
  onClick: () => null,
  label: 'submit',
  // disable: false,
  loading: false,
  size: TypeButtonSize.LARGE,
}

export default memo(Button)
