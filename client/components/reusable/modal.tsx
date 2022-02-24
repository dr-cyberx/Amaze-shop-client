import React, { CSSProperties, memo } from 'react';
import classnames from 'classnames';
import styles from '@styles/Model.module.scss';

export enum TypeModal {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface iModal {
  children?: React.ReactNode;
  type?: TypeModal;
  style?: CSSProperties;
}

const Modal: React.FunctionComponent<iModal> = ({
  children,
  type,
  style,
}): JSX.Element => {
  return (
    <div className={styles.modal_container}>
      <div
        className={classnames({
          [`modal_container__child__${type}`]: true,
        })}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  type: TypeModal.MEDIUM,
  style: {},
};

export default memo(Modal);
