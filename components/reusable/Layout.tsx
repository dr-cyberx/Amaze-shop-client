import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Navbar from './Navbar';
import styles from '@styles/reusable/Layout.module.scss';
import AmazeCart from './AmazeCart';

interface iLayout {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Layout: React.FunctionComponent<iLayout> = ({
  children,
  isLoading,
}): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      {isLoading ? (
        <div className={styles.loader__container}>
          <div className={styles.loader}>
            <InfinitySpin width="300px" color="rgb(0, 174, 255)" />
          </div>
        </div>
      ) : null}
      {
        <div className={styles.cart__container}>
          <AmazeCart />
        </div>
      }
    </div>
  );
};

export default Layout;
