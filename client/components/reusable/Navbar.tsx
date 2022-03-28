import React, { useState } from 'react';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Text, { TextVariant } from '@reusable/Typography';
import Searchbar, { SearchbarType } from './Searchbar';
import {
  IprofileDropdownOption,
  profileDropdownOptions,
} from 'utils/profileDropdownOptions';
import styles from '@styles/reusable/Navbar.module.scss';
import TextRating from './TextRating';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const [searchbarVal, setSearchbarVal] = useState<string>('');
  const [dropdownArrow, setDropdownArrow] = useState<boolean>(false);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setSearchbarVal(e.target.value);
  };
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar}>
        <div className={styles.logo__container}>
          <Image src={'/logo-png.png'} alt="logo" height={50} width={165} />
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
      <ul
        className={styles.profile__dropdown}
        style={
          dropdownArrow
            ? { height: '210px' }
            : { height: '0px', border: 'none' }
        }
      >
        {profileDropdownOptions.map((item: IprofileDropdownOption) => (
          <li
            key={item.label}
            onClick={() => router.push(item.path)}
            className={styles.profileDropdown__listItem}
          >
            <Text
              variant={TextVariant.heading6}
              style={{ fontWeight: '600', letterSpacing: '1px' }}
            >
              {item.label}
            </Text>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Navbar;
