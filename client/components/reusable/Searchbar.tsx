import React, { memo, useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '@styles/reusable/Searchbar.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export enum SearchbarType {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface ISeachbar {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: SearchbarType;
  inputType: 'email' | 'text' | 'number' | undefined;
  placeholder: string;
  label: string;
}

const Searchbar: React.FunctionComponent<ISeachbar> = ({
  onChange,
  value,
  type,
  inputType,
  placeholder,
  label,
}): JSX.Element => {
  return (
    <div
      className={classNames({
        [styles['searchbar']]: true,
        [styles[`searchbar__type__${type}`]]: type,
      })}
    >
      <div
        className={classNames({
          [styles['searchbar__iconContainer']]: true,
          [styles[`searchbar__iconContainer__${type}`]]: type,
        })}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        className={classNames({
          [styles['searchbar__input']]: true,
          [styles[`searchbar__input__type__${type}`]]: type,
        })}
        onChange={onChange}
        value={value}
        type={inputType}
        placeholder={placeholder}
      />
      <button
        className={classNames({
          [styles['searchbar__searchbarBtn']]: true,
          [styles[`searchbar__searchbarBtn__${type}`]]: type,
        })}
      >
        {label}
      </button>
    </div>
  );
};

Searchbar.defaultProps = {
  type: SearchbarType.MEDIUM,
  inputType: 'text',
  placeholder: 'Searching for...',
  label: 'Search',
};

export default memo(Searchbar);
