import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
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
  Icon: IconDefinition;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disable: boolean;
  loading: boolean;
  size: TypeButtonSize;
}

const Button: FunctionComponent<iButton> = ({
  btnType,
  Icon,
  onClick,
  label,
  disable,
  loading,
  size,
}): JSX.Element => {
  return (
    <>
      <button
        className={classnames({
          [styles['btn']]: true,
          [styles['btn-primary']]: true,
        })}
        onClick={onClick}
      >
        <Text variant={TextVariant.h6}>{label}</Text>
      </button>
    </>
  );
};

export default Button;
