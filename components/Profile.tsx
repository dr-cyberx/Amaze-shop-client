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
} from "@fortawesome/free-solid-svg-icons";
import MuiButton from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import GET_USER from "@graphql-doc/GET_USER.graphql";
import Layout from "./reusable/Layout";
import styles from "@styles/Profile.module.scss";
import { useQuery } from "@apollo/client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import CustomizedDialogs from "./reusable/DialogueBox";

const MuiInput = styled("input")({
  display: "none",
});

interface iPrefilledData {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  role: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  address: iaddress[];
}

interface iaddress {
  houseNumber: string;
  city: string;
  street: string;
}

const Profile: React.FunctionComponent = (): JSX.Element => {
  const { data, error, loading } = useQuery(GET_USER);
  const [addAddressModel, setAddAddressModel] = useState<boolean>(false);
  const [prefilledData, setPrefilledData] = useState<iPrefilledData>({
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
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState({
    houseNumber: "",
    streetNo: "",
    city: "",
    landmark: "",
  });

  useEffect(() => {
    if (data) {
      const { data: profileData } = data?.getUserDetailsByID;
      if (profileData) {
        setPrefilledData(profileData);
      }
    }
  }, [data]);

  const showBtn = (
    label: string,
    clickAction: any,
    btnType: TypeButton
  ): JSX.Element => (
    <Button
      btnType={btnType}
      // loading={verifyOtpNumberLoading}
      label={label}
      onClick={clickAction}
      type={"submit"}
      size={TypeButtonSize.MEDIUM}
    />
  );

  const dialogueBoxMainContent = () => {
    return (
      <Grid item xs={12} style={{ padding: "10px" }}>
        <Grid container rowSpacing={5} style={{ marginTop: "5px" }}>
          <Grid item xs={6} style={{ padding: "15px" }}>
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label={"address"}
              variant="filled"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPrefilledData({
                  ...prefilledData,
                  phoneNumber: event.target.value,
                })
              }
              disabled={isDisable}
              // value={a]}
              placeholder="phoneNumber"
            />
          </Grid>
          <Grid item xs={6} style={{ padding: "15px" }}>
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label={"address"}
              variant="filled"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPrefilledData({
                  ...prefilledData,
                  phoneNumber: event.target.value,
                })
              }
              disabled={isDisable}
              // value={a]}
              placeholder="phoneNumber"
            />
          </Grid>
          <Grid item xs={6} style={{ padding: "15px" }}>
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label={"address"}
              variant="filled"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPrefilledData({
                  ...prefilledData,
                  phoneNumber: event.target.value,
                })
              }
              disabled={isDisable}
              // value={a]}
              placeholder="phoneNumber"
            />
          </Grid>
          <Grid item xs={6} style={{ padding: "15px" }}>
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label={"address"}
              variant="filled"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPrefilledData({
                  ...prefilledData,
                  phoneNumber: event.target.value,
                })
              }
              disabled={isDisable}
              // value={a]}
              placeholder="phoneNumber"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Layout isLoading={loading}>
      <Container>
        <div className={styles.profile_container}>
          <div className={styles.userProfile_image}>
            <label htmlFor="icon-button-file">
              <MuiInput
                onChange={(event: any) => console.log(event.target.files[0])}
                accept="image/*"
                id="icon-button-file"
                type="file"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{
                  height: "120px",
                  width: "120px",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPrefilledData({
                    ...prefilledData,
                    userName: event.target.value,
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPrefilledData({
                    ...prefilledData,
                    email: event.target.value,
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPrefilledData({
                    ...prefilledData,
                    phoneNumber: event.target.value,
                  })
                }
                disabled={isDisable}
                value={prefilledData?.phoneNumber}
                placeholder="phoneNumber"
              />
            </Grid>

            <Grid item xs={6} style={{ padding: "15px" }}>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                disabled={isDisable}
                style={{ width: "100%" }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            <Grid
              item
              xs={12}
              style={{ padding: "15px", paddingBottom: "0px" }}
            >
              <div className={styles.profile_title}>
                <MapsHomeWorkIcon fontSize="medium" />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ marginBottom: "0px", marginLeft: "10px" }}
                >
                  Addresses:
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} style={{ padding: "15px" }}>
            {prefilledData.address.map((addrs: iaddress) => (
              <Grid
                container
                rowSpacing={5}
                style={{ marginTop: "10px" }}
                key={addrs.houseNumber + `${Math.random()}`}
              >
                {Object.keys(addrs).map((item: string) => (
                  <Grid
                    item
                    xs={6}
                    style={{ padding: "15px" }}
                    key={item + `${Math.random()}`}
                  >
                    <TextField
                      key={addrs.houseNumber}
                      style={{ width: "100%" }}
                      id="filled-basic"
                      // @ts-ignore
                      label={item}
                      variant="filled"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPrefilledData({
                          ...prefilledData,
                          phoneNumber: event.target.value,
                        })
                      }
                      disabled={isDisable}
                      // @ts-ignore
                      value={addrs[item]}
                      placeholder="phoneNumber"
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>

          <div className={styles.add_address_btn}>
            <CustomizedDialogs
              modalTitle="Enter your Address"
              mainContent={dialogueBoxMainContent}
              btnText="Add address"
            />
          </div>

          {isDisable ? (
            <div className={styles.btn__profile__container}>
              {showBtn("Edit", () => setIsDisable(false), TypeButton.PRIMARY)}
            </div>
          ) : (
            <div
              className={styles.btn__profile__container}
              style={{ width: "65%" }}
            >
              <div className={styles.btn__profile__container__child}>
                {showBtn("Save", null, TypeButton.PRIMARY)}
              </div>

              <div className={styles.btn__profile__container__child}>
                {showBtn(
                  "Cancel",
                  () => setIsDisable(true),
                  TypeButton.SECONDARY_DANGER
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default memo(Profile);
