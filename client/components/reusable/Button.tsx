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

interface iButton {
  btnType: TypeButton;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disable: boolean;
  loading: boolean;
  size: TypeButtonSize;
}

const Button: FunctionComponent<iButton> = ({
  btnType,
  icon,
  onClick,
  label,
  disable,
  loading,
  size,
}): JSX.Element => {
  const [variant, setVariant] = useState<TextVariant>(TextVariant.subheading1);

  useEffect(() => {
    setVariant(handleTextVariant(size));
  }, []);

  const handleTextVariant = useMemo(
    () =>
      (btnSize: TypeButtonSize): TextVariant => {
        switch (btnSize) {
          case TypeButtonSize.LARGE:
            return TextVariant.h4;
          case TypeButtonSize.MEDIUM:
            return TextVariant.h5;
          case TypeButtonSize.LARGE:
            return TextVariant.h6;
          default:
            return TextVariant.h5;
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
        })}
        onClick={onClick}
      >
        {icon && icon}
        <Text variant={variant}>{label}</Text>
      </button>
    </>
  );
};

Button.defaultProps = {
  btnType: TypeButton.Secondary,
  icon: <FontAwesomeIcon icon={faPlus} />,
  onClick: () => console.log('hello'),
  label: 'submit',
  disable: false,
  loading: false,
  size: TypeButtonSize.LARGE,
};

export default Button;
