import React, { useState, ReactNode, memo } from 'react';
import Modal, { TypeModal } from './reusable/modal';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useForm } from 'react-hook-form';
import { FetchResult, useMutation } from '@apollo/client';
import {
  faEnvelope,
  faKey,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import REGISTER_USER from '@graphql-doc/REGISTER_USER.graphql';
import Input from '@reusable/Input';
import Button, { TypeButton, TypeButtonSize } from '@reusable/Button';
import Checkbox from '@reusable/checkbox';
import styles from '@styles/Register.module.scss';

export type SignUpInputType = {
  name: string;
  label: string;
  inputType: 'number' | 'email' | 'password' | 'text' | 'tel' | undefined;
  placeholder: string;
  icon: IconProp;
};

const inputFields: Array<SignUpInputType> = [
  {
    name: 'email',
    label: 'Email',
    inputType: 'email',
    placeholder: 'Enter your email',
    icon: faEnvelope,
  },
  {
    name: 'password',
    label: 'Password',
    inputType: 'password',
    placeholder: 'Enter your password',
    icon: faKey,
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
    inputType: 'number',
    placeholder: 'Enter your phone no.',
    icon: faPhone,
  },
  {
    name: 'userName',
    label: 'Username',
    inputType: 'text',
    placeholder: 'Enter your usernames',
    icon: faUser,
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
  const [registerUser, { data, error, loading }] = useMutation(REGISTER_USER);

  const onSubmit = async (data: TypeFormDataRegister): Promise<void> => {
    const FinalRegisterData: TypeFormDataRegister & { role: string } = {
      ...data,
      role: !userRole ? 'BUYER' : 'SELLER',
    };

    const res: FetchResult<any> = await registerUser({
      variables: {
        ...FinalRegisterData,
      },
    });

    console.log('api register data --> ', res);

    return;
  };

  return (
    <div className={styles.register_container}>
      <Modal type={TypeModal.MEDIUM}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.register_form}
        >
          {inputFields.map(
            (d: SignUpInputType): ReactNode => (
              <Input
                key={d.name}
                name={d.name}
                iconLeft={d.icon}
                label={d.label}
                inputType={d.inputType}
                rules={{ required: true }}
                control={control}
                placeholder={d.placeholder}
              />
            )
          )}
          <Checkbox
            label="Want to Create Seller account ?"
            setState={setUserRole}
            state={userRole}
          />
          <Button
            btnType={TypeButton.PRIMARY}
            label="Login"
            loading={loading}
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
        </form>
      </Modal>
    </div>
  );
};

export default memo(Register);
