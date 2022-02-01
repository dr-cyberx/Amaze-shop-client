import React from 'react';
import classnames from 'classnames';

const variantsMapping = {
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

interface ITypography {
  variant?: string;
  color?: 'Primary' | 'Error';
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
        [`typography--variant--${variant}`]: variant,
        [`typography--color--${color}`]: color,
      })}
      style
    >
      {children}
    </Component>
  );
};

Text.defaultProps = {
  variant: 'h1',
  color: 'Primary',
};

export default Text;
