import React, { memo } from 'react';
import styles from '@styles/reusable/Cart.module.scss';

const AmazeCart: React.FunctionComponent = (): JSX.Element => {
  return <div className={styles.Cart}>Cart</div>;
};

export default memo(AmazeCart);
