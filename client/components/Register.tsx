import React, { useState } from 'react';
import Modal, { TypeModal } from './reusable/modal';
import styles from '@styles/Register.module.scss';
import Input from './reusable/Input';
import { useForm } from 'react-hook-form';
import Switch from 'react-switch';
import { useMutation } from '@apollo/client';
// import REGISTER_USER from '@graphql-doc/REGISTER_USER.graphql';
import Button, { TypeButton, TypeButtonSize } from './reusable/Button';
import Checkbox from './reusable/checkbox';

export type SignUpInputType = {
  name: string;
  label: string;
  inputType: 'number' | 'email' | 'password' | 'text' | 'tel' | undefined;
  placeholder: string;
};

const inputFields: Array<SignUpInputType> = [
  {
    name: 'email',
    label: 'Email',
    inputType: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
    placeholder: 'Enter your password',
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    inputType: 'number',
    placeholder: 'Enter your phone no.',
  },
  {
    name: 'userName',
    label: 'Username',
    inputType: 'text',
    placeholder: 'Enter your usernames',
  },
];

type TypeFormDataRegister = {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

const Register: React.FunctionComponent = (): JSX.Element => {
  const { handleSubmit, control } = useForm<TypeFormDataRegister>();
  const [userRole, setUserRole] = useState<boolean>(false);
  // const [] = useMutation();

  const onSubmit = (data: TypeFormDataRegister): void => {
    const FinalRegisterData = {
      ...data,
      userRole: userRole ? 'Buyer' : 'Seller',
    };

    console.log('final register data --> ', FinalRegisterData);

    return;
  };

  return (
    <div className={styles.register_container}>
      <Modal type={TypeModal.MEDIUM}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.register_form}
        >
          {inputFields.map((d: SignUpInputType) => (
            <Input
              key={d.name}
              name={d.name}
              label={d.label}
              inputType={d.inputType}
              rules={{ required: true }}
              control={control}
              placeholder={d.placeholder}
            />
          ))}
          <Checkbox
            label="Want to Create Seller account ?"
            setState={setUserRole}
            state={userRole}
          />
          <Button
            btnType={TypeButton.PRIMARY}
            label="Login"
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
        </form>
      </Modal>
    </div>
  );
};

export default Register;
