import React, { memo, useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '@styles/reusable/Searchbar.module.scss';

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

  };

  useEffect(() => {
    handleButtonType(inputType);
  }, [inputType]);

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
          [styles[`searchbar__button__type`]]: buttonType,
        })}
      >
        Search
      </button>
    </div>
  );
};

export default memo(Searchbar);
