import React, { useState } from 'react';
import styles from '@styles/reusable/Navbar.module.scss';
import Image from 'next/image';
import Searchbar, { SearchbarType } from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  const [searchbarVal, setSearchbarVal] = useState<string>('');
  const [dropdownArrow, setDropdownArrow] = useState<boolean>(false);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): any => {
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
            width={165}
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
        <div
          className={styles.other__navItems}
          onClick={() => setDropdownArrow(!dropdownArrow)}
        >
          <FontAwesomeIcon icon={faUserCircle} />
          {dropdownArrow ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
