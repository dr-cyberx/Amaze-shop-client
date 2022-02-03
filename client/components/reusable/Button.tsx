import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Text, { TextVariant } from './Typography';
import styles from '@styles/Button.module.scss';

export enum TypeButton {
  Primary = 'primary',
  Secondary = 'secondary',
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
  btnType: TypeButton;
  icon?: React.ReactNode;
  TextColor?: TypeTextColor;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disable: boolean;
  loading?: boolean;
  size: TypeButtonSize;
}

const Button: FunctionComponent<iButton> = ({
  btnType,
  icon,
  onClick,
  TextColor,
  label,
  disable,
  loading,
  size,
}): JSX.Element => {
  const [variant, setVariant] = useState<TextVariant>(TextVariant.heading6);

  useEffect(() => {
    setVariant(handleTextVariant(size));
  }, [size]);

  const handleTextVariant: (btnSize: TypeButtonSize) => TextVariant = useMemo(
    () =>
      (btnSize: TypeButtonSize): TextVariant => {
        switch (btnSize) {
          case TypeButtonSize.LARGE:
            return TextVariant.heading3;
          case TypeButtonSize.MEDIUM:
            return TextVariant.heading4;
          case TypeButtonSize.SMALL:
            return TextVariant.heading6;
          default:
            return TextVariant.heading4;
        }
      },
    [size],
  );

  return (
    <>
      <button
        className={classnames({
          [styles['btn']]: true,
          [styles[`btn-${btnType}`]]: true,
          [styles[`btn-${size}`]]: true,
          [styles[`btn-textColor-${TextColor}`]]: true,
        })}
        onClick={onClick}
      >
        {icon && icon}
        <Text variant={variant} color={TextColor}>{label}</Text>
      </button>
    </>
  );
};

Button.defaultProps = {
  btnType: TypeButton.Secondary,
  icon: <FontAwesomeIcon icon={faPlus} />,
  TextColor: TypeTextColor.PRIMARY,
  onClick: () => console.log('hello'),
  label: 'submit',
  disable: false,
  loading: false,
  size: TypeButtonSize.LARGE,
};

export default Button;
