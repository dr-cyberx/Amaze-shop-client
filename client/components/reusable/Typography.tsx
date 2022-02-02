import React from 'react';
import classnames from 'classnames';
import styles from '@styles/Typography.module.scss';

export const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
};

export enum TextVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subheading1 = 'h6',
  subheading2 = 'h6',
  body1 = 'p',
  body2 = 'p',
}

interface ITypography {
  variant?: TextVariant;
  color?: 'primary' | 'error';
  children: React.ReactNode;
  style?: StyleSheet;
}

const Text: React.FunctionComponent<ITypography> = ({
  variant,
  color,
  children,
  style,
}): JSX.Element => {
  // @ts-ignore
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <Component
      className={classnames({
        [styles[`typography__variant__${variant}`]]: variant,
        [styles[`typography__color__${color}`]]: color,
      })}
      style={style}
    >
      {children}
    </Component>
  );
};

Text.defaultProps = {
  variant: TextVariant.h1,
  color: 'primary',
};

export default Text;
