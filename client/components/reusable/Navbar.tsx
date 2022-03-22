import React, { useState } from 'react';
import styles from '@styles/reusable/Navbar.module.scss';
import Image from 'next/image';
import Searchbar, { SearchbarType } from './Searchbar';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  const [searchbarVal, setSearchbarVal] = useState<string>('');

  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): any => {
    setSearchbarVal(e.target.value);
  };
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
          <Searchbar
            onChange={handleSearchInput}
            value={searchbarVal}
            type={SearchbarType.MEDIUM}
            inputType={undefined}
            placeholder={'Searching for...'}
            label="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
