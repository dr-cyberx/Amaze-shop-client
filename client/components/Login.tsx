import React from 'react';
import Text, { TextVariant } from '@resusable/Typography';

const Login: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Text variant={TextVariant.h1} color='primary'>Login Page</Text>
    </>
  );
};

export default Login;
