import React, { memo, useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '@styles/reusable/Searchbar.module.scss';

enum SearchbarType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ISeachbar {
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  inputType: 'email' | 'text' | 'number' | undefined;
  placeholder: string;
  btnType: string;
}

const Searchbar: React.FunctionComponent<ISeachbar> = ({
  onchange,
  value,
  type,
  inputType,
  placeholder,
}): JSX.Element => {
  const [buttonType, setButtonType] = useState();

  const handleButtonType = (input: any): void => {
    switch (input) {
      case value:
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    handleButtonType(type);
  }, [type]);

  return (
    <div
      className={classNames({
        [styles['searchbar']]: true,
        [styles[`searchbar__type__${type}`]]: type,
      })}
    >
      <input
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
        Search
      </button>
    </div>
  );
};

export default memo(Searchbar);
