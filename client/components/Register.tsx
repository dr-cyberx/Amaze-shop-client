import React, { useState, ReactNode, memo, useEffect } from 'react';
import Modal, { TypeModal } from './reusable/modal';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useForm } from 'react-hook-form';
import { FetchResult, useMutation } from '@apollo/client';
import {
  faEnvelope,
  faKey,
  faPhone,
  faUser,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import cookie from 'cookie';
import REGISTER_USER from '@graphql-doc/REGISTER_USER.graphql';
import Input, { TypeInput } from '@reusable/Input';
import Button, { TypeButton, TypeButtonSize } from '@reusable/Button';
import Text, { TextVariant } from '@components/reusable/Typography';
import Checkbox from '@reusable/checkbox';
import styles from '@styles/Register.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [signUpStep, setSignUpStep] = useState<number>(0);
  const [userRole, setUserRole] = useState<boolean>(false);
  const [registerUser, { data, error, loading }] = useMutation(REGISTER_USER);

  useEffect(() => {
    if (data?.signUp?.data) {
      document.cookie = cookie.serialize('auth_token', data.signUp.token, {
        maxAge: 36000,
        path: '/',
      });
      setSignUpStep((previousData: number) => previousData + 1);
    }
  }, [data]);

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

  const showFormSteps = (step: number): any => {
    switch (step) {
      case 0:
        return (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.register_form}
          >
            <div className={styles.form_header}>
              <Text
                variant={TextVariant.heading2}
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                Sign up
              </Text>
            </div>
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
              // label="Next "
              icon={<FontAwesomeIcon icon={faArrowRight} size={'1x'} />}
              loading={loading}
              size={TypeButtonSize.MEDIUM}
              type="submit"
            />
          </form>
        );
        break;

      case 1:
        return <></>;

      default:
        break;
    }
  };

  return (
    <div className={styles.register_container}>
      <Modal type={TypeModal.MEDIUM}>
        <div className={styles.verification_container}>
          <div className={styles.form_header}>
            <Text
              variant={TextVariant.heading2}
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              Verify Email
            </Text>
          </div>

          <Input
            rules={{ required: true }}
            control={control}
            name={'verificationCode'}
            label={'Enter OTP:'}
            inputType={'text'}
            type={TypeInput.LARGE}
            style={{ paddingLeft: '15px ' }}
            // placeholder={'Enter Otp here...'}
          />
          <Button
            btnType={TypeButton.PRIMARY}
            // label="Next "
            icon={<FontAwesomeIcon icon={faArrowRight} size={'1x'} />}
            loading={loading}
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
        </div>
      </Modal>
    </div>
  );
};

export default memo(Register);
