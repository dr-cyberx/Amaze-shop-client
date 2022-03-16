import React, { useState, ReactNode, memo, useEffect } from 'react';
import Modal, { TypeModal } from './reusable/modal';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  FetchResult,
  useMutation,
  useLazyQuery,
  LazyQueryResult,
  OperationVariables,
} from '@apollo/client';
import {
  faEnvelope,
  faKey,
  faPhone,
  faUser,
  faArrowRight,
  faQuestion,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import cookie from 'cookie';
import { ToastContainer, toast } from 'react-toastify';
import Input, { TypeInput } from '@reusable/Input';
import Button, { TypeButton, TypeButtonSize } from '@reusable/Button';
import Text, { TextVariant } from '@components/reusable/Typography';
import Checkbox from '@reusable/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextRouter, useRouter } from 'next/router';
import REGISTER_USER from '@graphql-doc/REGISTER_USER.graphql';
import SEND_OTP_NUMBER from '@graphql-doc/SEND_OTP_NUMBER.graphql';
import VERIFY_OTP_NUMBER from '@graphql-doc/VERIFY_OTP_NUMBER.graphql';
import styles from '@styles/Register.module.scss';
import AmazeToast from './reusable/AmazeToast';

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

const notify = () =>
  toast.info('Wait 30 sec before sending otp again', {
    position: 'top-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyWarn = () =>
  toast.error('Please enter correct otp!', {
    position: 'top-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const somethingWentWrong = () =>
  toast.error('something went wrong!', {
    position: 'top-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

type TypeFormDataRegister = {
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

type TypeVerifyOtp = {
  verificationCode: string;
};

const Register: React.FunctionComponent = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { handleSubmit, control } = useForm<TypeFormDataRegister>();
  const { handleSubmit: handleSubmitVerifyOtp, control: verifyOtpcontrol } =
    useForm<TypeVerifyOtp>();
  const [signUpStep, setSignUpStep] = useState<number>(0);
  const [userRole, setUserRole] = useState<boolean>(false);
  const [sendResendOtpIcon, setSendResendOtpIcon] = useState<boolean>(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>();
  const [registerUser, { data, error, loading }] = useMutation(REGISTER_USER);

  const [
    verifyOtpNumber,
    {
      data: verifyOtpNumberData,
      error: verifyOtpNumberError,
      loading: verifyOtpNumberLoading,
    },
  ] = useMutation(VERIFY_OTP_NUMBER);

  const [
    sendOtpNumber,
    { error: OtpError, loading: OtpLoading, data: OtpData },
  ] = useLazyQuery(SEND_OTP_NUMBER);

  useEffect(() => {
    if (data?.signUp?.data) {
      document.cookie = cookie.serialize('auth_token', data.signUp.token, {
        maxAge: 36000,
        path: '/',
      });
      setSignUpStep((previousData: number) => previousData + 1);
    }
    return;
  }, [data]);

  useEffect(() => {
    if (verifyOtpNumberData?.verifyOtpNumber) {
      const isVerified = verifyOtpNumberData?.verifyOtpNumber;
      if (isVerified.verified === true) {
        router.push('/');
      }

      if (isVerified.verified === false) {
        AmazeToast({ message: 'Please enter correct otp!', type: 'warn' });
        // notifyWarn();
      }
    }
    return;
  }, [verifyOtpNumberData]);

  const onSubmit = async (data: TypeFormDataRegister): Promise<void> => {
    try {
      const FinalRegisterData: TypeFormDataRegister & { role: string } = {
        ...data,
        role: !userRole ? 'BUYER' : 'SELLER',
      };

      const res: FetchResult<any> = await registerUser({
        variables: {
          ...FinalRegisterData,
        },
      });

      if (res?.data) {
        const { signUp }: any = res?.data;

        if (signUp?.data?.phoneNumber) {
          setUserPhoneNumber(signUp?.data?.phoneNumber);
          setSignUpStep((previousVal: number) => previousVal++);
          const otp = await sendOtpNumber({
            variables: {
              phoneNumber: userPhoneNumber,
            },
          });
        }
      }

      return;
    } catch (error: any) {
      return;
    }
  };

  const verifyOtpHandler = async (data: TypeVerifyOtp): Promise<void> => {
    const res = await verifyOtpNumber({
      variables: {
        otp: data.verificationCode,
      },
    });
  };

  const showFormSteps = (step: number): JSX.Element => {
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
                  type={TypeInput.MEDIUM}
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
        return (
          <form
            onSubmit={handleSubmitVerifyOtp(verifyOtpHandler)}
            className={styles.verification_container}
          >
            <div className={styles.form_header}>
              <Text
                variant={TextVariant.heading2}
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                Verify Phone no.
              </Text>
            </div>

            <Input
              rules={{ required: true, length: 4 }}
              control={verifyOtpcontrol}
              name={'verificationCode'}
              label={`Enter OTP we sent you on ${userPhoneNumber
                ?.slice(-4)
                .padStart(userPhoneNumber.length, '*')}`}
              inputType={'number'}
              type={TypeInput.LARGE}
              style={{ paddingLeft: '15px ' }}
              labelSize={TextVariant.heading5}
            />
            <Text
              variant={TextVariant.heading5}
              style={{
                ...(sendResendOtpIcon
                  ? { color: 'rgb(187, 187, 187)' }
                  : { color: 'rgb(0, 174, 255)' }),
                cursor: 'pointer',
              }}
              onClick={() => {
                sendResendOtpIcon
                  ? AmazeToast({
                      message: 'Wait 30 sec before sending otp again',
                      type: 'info',
                    })
                  : resendOtp();
              }}
            >
              resend code{' '}
              {sendResendOtpIcon ? (
                <FontAwesomeIcon icon={faCheck} size={'sm'} />
              ) : (
                <FontAwesomeIcon icon={faQuestion} size={'sm'} />
              )}
            </Text>
            <Button
              btnType={TypeButton.PRIMARY}
              icon={<FontAwesomeIcon icon={faArrowRight} size={'1x'} />}
              loading={verifyOtpNumberLoading}
              type={'submit'}
              size={TypeButtonSize.MEDIUM}
              // onClick={verifyOtpHandler}
            />
          </form>
        );

      default:
        return <></>;
        break;
    }
  };

  const resendOtp = async (): Promise<void> => {
    const otp: LazyQueryResult<any, OperationVariables> = await sendOtpNumber({
      variables: {
        phoneNumber: userPhoneNumber,
      },
    });
    if (otp?.data?.sendOtpNumber?.status === 200) {
      setSendResendOtpIcon(true);
      AmazeToast({
        message: 'Wait 30 sec before sending otp again',
        type: 'info',
      });
      setTimeout(() => {
        setSendResendOtpIcon(false);
      }, 30000);
    }
    console.log('otp ---> ', otp.data.sendOtpNumber);
  };

  return (
    <div className={styles.register_container}>
      <Modal type={TypeModal.SMALL}>{showFormSteps(signUpStep)}</Modal>
      <ToastContainer />
    </div>
  );
};

export default memo(Register);
