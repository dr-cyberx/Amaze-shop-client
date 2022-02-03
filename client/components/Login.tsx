import React, { memo } from 'react';
import Text, { TextVariant } from '@resusable/Typography';

const Login: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Text variant={TextVariant.heading6} color="primary">
        Login Page
      </Text>
    </>
  );
};

export default memo(Login);
