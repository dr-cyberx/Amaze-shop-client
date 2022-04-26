import React, { memo, ReactNode, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Input, { TypeInput } from "@reusable/Input";
import Button, { TypeButton, TypeButtonSize } from "@reusable/Button";
import {
  faEnvelope,
  faKey,
  faPhone,
  faUser,
  faArrowRight,
  faQuestion,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import GET_USER from "@graphql-doc/GET_USER.graphql";
import Layout from "./reusable/Layout";
import styles from "@styles/Profile.module.scss";
import { useQuery } from "@apollo/client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MuiInput = styled("input")({
  display: "none",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface iProfileFields {
  name: string;
  icon: IconProp;
  label: string;
  type: TypeInput;
  inputType: "number" | "email" | "password" | "text" | "tel" | undefined;
  placeholder: string;
}

const profileFields: iProfileFields[] = [
  {
    name: "profileUser_name",
    icon: faUser,
    label: "Username",
    type: TypeInput.SMALL,
    inputType: "text",
    placeholder: "Enter username",
  },
  {
    name: "profileUser_email",
    icon: faEnvelope,
    label: "Email",
    type: TypeInput.SMALL,
    inputType: "email",
    placeholder: "Enter email",
  },
  {
    name: "profileUser_phoneNumber",
    icon: faPhone,
    label: "Phone number",
    type: TypeInput.SMALL,
    inputType: "tel",
    placeholder: "Enter phone no.",
  },
  {
    name: "profileUser_password",
    icon: faKey,
    label: "Password",
    type: TypeInput.SMALL,
    inputType: "tel",
    placeholder: "Enter password",
  },
];

type TypeFormDataRegister = {
  profileUser_name: string;
  profileUser_email: string;
  profileUser_phoneNumber: string;
};

const Profile: React.FunctionComponent = (): JSX.Element => {
  const { data, error, loading } = useQuery(GET_USER);
  const [prefilledData, setPrefilledData] = useState<any>({
    id: "",
    userName: "",
    email: "",
    phoneNumber: "",
    role: "",
    isEmailVerified: false,
    isPhoneVerified: false,
    address: [],
  });
  const [password, setPassword] = useState<string>("******");
  const [isDisable, setIsDisable] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
      const { data: profileData } = data?.getUserDetailsByID;
      if (profileData) {
        setPrefilledData(profileData);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log("prefilledData -> ", prefilledData);
  }, [prefilledData]);

  return (
    <Layout>
      <Container>
        <div className={styles.profile_container}>
          <div className={styles.userProfile_image}>
            <label htmlFor="icon-button-file">
              <MuiInput accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{
                  height: "120px",
                  width: "120px",
                }}
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>

          <Grid container rowSpacing={5} style={{ marginTop: "20px" }}>
            <Grid item xs={6} style={{ padding: "15px" }}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label={"userName"}
                variant="filled"
                onChange={(event: any) =>
                  setPrefilledData({
                    ...prefilledData,
                    userName: event.target.data,
                  })
                }
                disabled={isDisable}
                value={prefilledData?.userName}
                placeholder="userName"
              />
            </Grid>

            <Grid item xs={6} style={{ padding: "15px" }}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(event: any) =>
                  setPrefilledData({
                    ...prefilledData,
                    email: event.target.data,
                  })
                }
                disabled={isDisable}
                value={prefilledData?.email}
                placeholder="email"
              />
            </Grid>

            <Grid item xs={6} style={{ padding: "15px" }}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="Phone no."
                variant="filled"
                onChange={(event: any) =>
                  setPrefilledData({
                    ...prefilledData,
                    phoneNumber: event.target.data,
                  })
                }
                disabled={isDisable}
                value={prefilledData?.phoneNumber}
                placeholder="phoneNumber"
              />
            </Grid>

            <Grid item xs={6} style={{ padding: "15px" }}>
              <TextField
                style={{ width: "100%" }}
                id="filled-basic"
                label="Password"
                variant="filled"
                value={password}
                disabled
                placeholder="password"
              />
            </Grid>
          </Grid>
          {isDisable ? (
            <div className={styles.btn__profile__container}>
              <Button
                btnType={TypeButton.PRIMARY}
                // loading={verifyOtpNumberLoading}
                label="Edit"
                type={"submit"}
                onClick={() => setIsDisable(false)}
                size={TypeButtonSize.MEDIUM}
              />
            </div>
          ) : (
            <div
              className={styles.btn__profile__container}
              style={{ width: "65%" }}
            >
              <div className={styles.btn__profile__container__child}>
                <Button
                  btnType={TypeButton.PRIMARY}
                  // loading={verifyOtpNumberLoading}
                  label="Save"
                  type={"submit"}
                  size={TypeButtonSize.MEDIUM}
                />
              </div>

              <div className={styles.btn__profile__container__child}>
                <Button
                  btnType={TypeButton.SECONDARY_DANGER}
                  // loading={verifyOtpNumberLoading}
                  onClick={() => setIsDisable(true)}
                  label="Cancel"
                  type={"submit"}
                  size={TypeButtonSize.MEDIUM}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default memo(Profile);
