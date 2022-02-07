import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@reusable/Input';
import Button, { TypeButton, TypeButtonSize } from './reusable/Button';
import Text, { TextVariant } from './reusable/Typography';
// import Text, { TextVariant } from '@reusable/Typography';

type TypeFormDataLogin = {
  email: string;
  password: string;
};

const Login: React.FunctionComponent = (): JSX.Element => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: TypeFormDataLogin) => {
    console.log(data);
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
