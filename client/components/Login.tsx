import React, { memo } from 'react';
import cookie from 'cookie';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import Input from '@reusable/Input';
import Button, { TypeButton, TypeButtonSize } from './reusable/Button';
import Text, { TextVariant } from './reusable/Typography';
import LOGIN from '@graphql-doc/LOGIN.graphql';

type TypeFormDataLogin = {
  email: string;
  password: string;
};

const Login: React.FunctionComponent = (): JSX.Element => {
  const { handleSubmit, control } = useForm<TypeFormDataLogin>();
  const [authBasic, { loading, error }] = useMutation(LOGIN);

  const onSubmit: SubmitHandler<TypeFormDataLogin> = async (data) => {
    const res = await authBasic({
      variables: {
        ...data,
      },
    });
    console.log('---> res ', res);
  };

  return (
    <>
      <Text variant={TextVariant.heading1} color="primary">
        Login Page
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          label="Email"
          inputType="email"
          rules={{ required: true }}
          control={control}
          placeholder="Enter your email"
        />
        <Input
          name="password"
          label="Password"
          inputType="password"
          rules={{ required: true }}
          control={control}
          placeholder="Enter your password"
        />
        <Button
          btnType={TypeButton.PRIMARY}
          label="Login"
          size={TypeButtonSize.MEDIUM}
          type="submit"
        />
      </form>
    </>
  );
};

export default memo(Login);
