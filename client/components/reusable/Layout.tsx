import React from 'react';
import Navbar from './Navbar';
import styles from '@styles/reusable/Layout.module.scss';

const Layout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
