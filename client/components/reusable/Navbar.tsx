import React from 'react';
import styles from '@styles/reusable/Navbar.module.scss';
import Image from 'next/image';
import Searchbar from './Searchbar';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar}>
        <div className={styles.logo__container}>
          <Image
            src={'/amazeViewLogo.png'}
            alt="logo"
            height={50}
            width={160}
          />
        </div>
        <div className={styles.searchbar__container}>
          <Searchbar onchange={() => console.log('typed')} value={''} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
