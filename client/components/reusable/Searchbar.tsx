import React, { memo, useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '@styles/reusable/Searchbar.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

enum SearchbarType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ISeachbar {
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: SearchbarType;
  inputType: 'email' | 'text' | 'number' | undefined;
  placeholder: string;
  label: string;
}

const Searchbar: React.FunctionComponent<ISeachbar> = ({
  onchange,
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
      <FontAwesomeIcon icon={faSearch} />
      <input
        className={classNames({
          [styles['searchbar__input']]: true,
          [styles[`searchbar__input__type__${type}`]]: type,
        })}
        onChange={onchange}
        value={value}
        type={inputType}
        placeholder={placeholder}
      />
      <button
        className={classNames({
          [styles['searchbar__button']]: true,
          [styles[`searchbar__button__${type}`]]: type,
        })}
      >
        {label}
      </button>
    </div>
  );
};

Searchbar.defaultProps = {
  type: SearchbarType.PRIMARY,
  inputType: 'text',
  placeholder: 'Searchin for...',
  label: 'Search',
};

export default memo(Searchbar);
