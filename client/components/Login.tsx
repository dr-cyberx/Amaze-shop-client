import React, { memo } from 'react';
import Text, { TextVariant } from '@reusable/Typography';

const Login: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Text variant={TextVariant.heading1} color="primary">
        Login Page
      </Text>
    </>
  );
};

export default memo(Login);
