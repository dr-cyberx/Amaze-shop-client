import React, { memo, ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import cookie from "cookie";
import { NextRouter, useRouter } from "next/router";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import Input, { TypeInput } from "@reusable/Input";
import Button, { TypeButton, TypeButtonSize } from "./reusable/Button";
import Text, { TextVariant } from "./reusable/Typography";
import Modal, { TypeModal } from "./reusable/modal";
import { useMutation } from "@apollo/client";
import { SignUpInputType } from "./Register";
import LOGIN from "@graphql-doc/LOGIN.graphql";
import styles from "@styles/Login.module.scss";
import AmazeToast from "./reusable/AmazeToast";
import useLocalStorage from "hooks/useLocalStorage";
import Auth from "./reusable/Auth";
import { profileDropdownOptions } from "utils/profileDropdownOptions";
// import Text, { TextVariant } from '@reusable/Typography';

// hello world

type TypeFormDataLogin = {
  loginEmail: string;
  loginPassword: string;
};

const inputFields: Array<SignUpInputType> = [
  {
    name: "loginEmail",
    label: "Email, Username or Phone no.",
    inputType: "text",
    placeholder: "Enter your email",
    icon: faUser,
  },
  {
    name: "loginPassword",
    label: "Password",
    inputType: "password",
    placeholder: "Enter your password",
    icon: faKey,
  },
];

const Login: React.FunctionComponent = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { handleSubmit, control } = useForm<TypeFormDataLogin>();
  const [loginUser, { loading }] = useMutation(LOGIN);

  const onSubmit: SubmitHandler<TypeFormDataLogin> = async (
    data
  ): Promise<void> => {
    const loginCreds: any = {
      password: data.loginPassword,
    };
    if (data.loginEmail.includes("@") && data.loginEmail.includes(".com")) {
      loginCreds["email"] = data.loginEmail;
    }

    if (typeof data.loginEmail == "number") {
      loginCreds["phoneNumber"] = data.loginEmail;
    }
    if (
      data.loginEmail.includes(".com") &&
      typeof data.loginEmail == "number"
    ) {
      loginCreds["userName"] = data.loginEmail;
    }

    const res = await loginUser({
      variables: {
        ...loginCreds,
      },
    });

    const { error, status, message, token } = res?.data?.login;
    if (error === false && status === 200) {
      // document.cookie = cookie.serialize('auth_token', token, {
      //   maxAge: 36000,
      //   path: '/',
      // });
      useLocalStorage.setItem("auth_token", token);
      router.push("/home");
    }
    if (error) {
      AmazeToast({ message, type: "error" });
    }
  };

  const ShowLoginForm = (): ReactNode => {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
          <div className={styles.form_header}>
            <Text
              variant={TextVariant.heading2}
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Login
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
          <Button
            btnType={TypeButton.PRIMARY}
            label="Login"
            loading={loading}
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
          <Text
            variant={TextVariant.heading5}
            style={{
              textAlign: "center",
              marginBottom: "10px",
            }}
            textType="link"
            onClick={() => router.push("/register")}
          >
            Don&rsquo;t have account ? Sign Up.
          </Text>
        </form>
      </>
    );
  };

  return (
    <>
      <Auth pathName="/login">
        <div className={styles.login_container}>
          <Modal type={TypeModal.SMALL}>{ShowLoginForm()}</Modal>
          <ToastContainer />
        </div>
      </Auth>
    </>
  );
};

export default memo(Login);
