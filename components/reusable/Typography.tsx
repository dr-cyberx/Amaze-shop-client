import React, { CSSProperties, memo } from 'react';
import classnames from 'classnames';
import styles from '@styles/Typography.module.scss';

export const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

export enum TextVariant {
  heading1 = 'h1',
  heading2 = 'h2',
  heading3 = 'h3',
  heading4 = 'h4',
  heading5 = 'h5',
  heading6 = 'h6',
}

interface ITypography {
  variant?: TextVariant;
  color?: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  textType?: 'text' | 'link';
}

const Text: React.FunctionComponent<ITypography> = ({
  variant,
  color,
  children,
  style,
  onClick,
  textType,
}): JSX.Element => {
  // @ts-ignore
  const Component: Html = variant ? variantsMapping[variant] : 'p';

  return (
    <Component
      className={classnames({
        [styles[`typography__variant__${variant}`]]: variant,
        [styles[`typography__textType__${textType}`]]: textType,
        [styles[`typography__color__${color}`]]: color,
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

Text.defaultProps = {
  variant: TextVariant.heading1,
  color: 'primary',
  textType: 'text',
};

export default memo(Text);
