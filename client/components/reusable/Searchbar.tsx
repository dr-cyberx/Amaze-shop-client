import React, { memo } from 'react';
import classNames from 'classnames';
import styles from '@styles/reusable/Searchbar.module.scss';

interface ISeachbar {
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  type: string;
  inputType: 'email' | 'text' | 'number' | undefined;
  placeholder: string;
}

const Searchbar: React.FunctionComponent<ISeachbar> = ({
  onchange,
  value,
  type,
  inputType,
  placeholder,
}): JSX.Element => {
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
    </div>
  );
};

export default memo(Searchbar);
