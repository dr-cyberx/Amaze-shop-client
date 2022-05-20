import React, { memo, useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button, { TypeButton, TypeButtonSize } from "@reusable/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import GET_USER from "@graphql-doc/GET_USER.graphql";
import CHANGE_PASSWORD from "@graphql-doc/CHANGE_PASSWORD.graphql";
import UPDATE_USER from "@graphql-doc/UPDATE_USER.graphql";
import { useQuery, useMutation, OperationVariables } from "@apollo/client";
import TextField from "@mui/material/TextField";
import SelectProfileAvatar from "@components/reusable/SelectProfile";
import Typography from "@mui/material/Typography";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import Layout from "./reusable/Layout";
import CustomizedDialogs from "./reusable/DialogueBox";
import styles from "@styles/Profile.module.scss";
import AmazeToast from "./reusable/AmazeToast";
import AmazeAccordion from "./reusable/Accordion";
import { CartContext } from "@context/Cart/CartContext";
import Auth from "./reusable/Auth";

const MuiInput = styled("input")({
  display: "none",
});

interface iPrefilledData {
  id: string;
  profileImage: any;
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
  landmark: string;
}

interface idialogueBoxMainContent {
  name: string;
  label: string;
}

const dialogueBoxMainContentArray: idialogueBoxMainContent[] = [
  {
    name: "houseNumber",
    label: "House No.",
  },
  {
    name: "street",
    label: "Street",
  },
  {
    name: "city",
    label: "City",
  },
  {
    name: "landmark",
    label: "Landmark",
  },
];

interface iChangePassword {
  oldPassword: string;
  newPassword: string;
}

const Profile: React.FunctionComponent = (): JSX.Element => {
  const { hideLoading, showLoading, setUserData } = useContext(CartContext);

  const { data, error, loading, refetch } = useQuery<any, OperationVariables>(
    GET_USER
  );

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [ChangePasswordBox, setChangePasswordBox] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [openSelectProfile, setOpenSelectProfile] = useState<boolean>(false);
  const [changePassword, setChangePassword] = useState<iChangePassword>({
    oldPassword: "",
    newPassword: "",
  });

  const [
    updateUser,
    {
      data: updateUserResponse,
      loading: updateUserLoading,
      error: updateUserError,
    },
  ] = useMutation(UPDATE_USER);

  const [
    changeUserPassword,
    {
      data: changePasswordResp,
      loading: changePasswordLoading,
      error: changepasswordError,
    },
  ] = useMutation(CHANGE_PASSWORD);

  const [prefilledData, setPrefilledData] = useState<iPrefilledData>({
    id: "",
    profileImage: null,
    userName: "",
    email: "",
    phoneNumber: "",
    role: "",
    isEmailVerified: false,
    isPhoneVerified: false,
    address: [],
  });

  const [newAddress, setNewAddress] = useState<iaddress>({
    houseNumber: "",
    street: "",
    city: "",
    landmark: "",
  });

  useEffect(() => {
    if (data) {
      const { data: profileData } = data?.getUserDetailsByID;
      if (profileData) {
        setPrefilledData(profileData);
        setUserData(profileData);
      }
    }
  }, [data]);

  useEffect(() => {
    updateUserLoading ? showLoading() : hideLoading();
  }, [updateUserLoading]);

  const submitFinalAddress = async (): Promise<any> => {
    try {
      const { id, ...restItems } = prefilledData;
      const res = await updateUser({
        variables: {
          input: {
            ...restItems,
          },
        },
      });
      await refetch();
      setIsDisable(true);
    } catch (error) {
      return AmazeToast({
        message: "Something went wrong!",
        type: "error",
      });
    }
  };

  const submitNewAddress = async (): Promise<void> => {
    const { id, ...restItems } = prefilledData;
    await updateUser({
      variables: {
        input: {
          ...restItems,
          address: [
            ...prefilledData.address,
            {
              ...newAddress,
            },
          ],
        },
      },
    });
    await refetch();
  };

  const handleClickOpen = (d: number): void => {
    if (d === 0) {
      setChangePasswordBox(true);
    } else if (d === 1) {
      if (prefilledData.address.length === 5) {
        return AmazeToast({
          message: "Your already have maximun address limit",
          type: "warn",
        });
      }
      setOpenModal(true);
    } else {
      setOpenSelectProfile(true);
    }
  };

  const handleSubmitClose = async (): Promise<void> => {
    try {
      await submitNewAddress();
      setOpenModal(false);
      return AmazeToast({
        message: "Address added Successfully!",
        type: "success",
      });
    } catch (error) {
      return AmazeToast({
        message: "Something went wrong",
        type: "error",
      });
    }
  };

  const updateAddress = async (addrs: iaddress): Promise<void> => {
    const { id, ...restItems } = prefilledData;
    const updatedAddress = prefilledData.address.filter(
      d =>
        `${d.houseNumber}${d.street}${d.landmark}` !==
        `${addrs.houseNumber}${addrs.street}${addrs.landmark}`
    );

    await updateUser({
      variables: {
        input: {
          ...restItems,
          address: [...updatedAddress],
        },
      },
    });

    setPrefilledData({
      ...prefilledData,
      address: [...updatedAddress],
    });

    await refetch();
  };

  const handleChangePassword = async (): Promise<void> => {
    try {
      const res = await changeUserPassword({
        variables: {
          ...changePassword,
        },
      });
      if (
        res?.data?.changePassword.status === 200 &&
        res?.data?.changePassword.error === false
      ) {
        setChangePasswordBox(false);
        return AmazeToast({
          message: res?.data?.changePassword.message,
          type: "success",
        });
      } else {
        return AmazeToast({
          message: res?.data?.changePassword.message,
          type: "error",
        });
      }
    } catch (error) {
      return AmazeToast({
        message: "Something went wrong!",
        type: "error",
      });
    }
  };

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

  const dialogueBoxMainContent = (): JSX.Element => {
    return (
      <Grid item xs={12} style={{ padding: "10px" }}>
        <Grid container rowSpacing={5} style={{ marginTop: "5px" }}>
          {dialogueBoxMainContentArray.map(
            (d: idialogueBoxMainContent, index: number) => (
              <Grid item xs={6} style={{ padding: "15px" }} key={d.label}>
                <TextField
                  style={{ width: "100%" }}
                  id="filled-basic"
                  label={d.label}
                  variant="filled"
                  name={d.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setNewAddress({
                      ...newAddress,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    );
  };

  const ChangePasswordDialogue = () => {
    return (
      <Grid item xs={12} style={{ padding: "10px" }}>
        <Grid container rowSpacing={5} style={{ marginTop: "5px" }}>
          <Grid item xs={6} style={{ padding: "15px" }}>
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label="Old password"
              variant="filled"
              name="oldPassword"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setChangePassword({
                  ...changePassword,
                  oldPassword: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6} style={{ padding: "15px" }}>
            <TextField
              style={{ width: "100%" }}
              id="filled-basic"
              label="New password"
              variant="filled"
              name="newPassword"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setChangePassword({
                  ...changePassword,
                  newPassword: event.target.value,
                })
              }
            />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Auth pathName="/profile">
      <Layout isLoading={loading}>
        <Container>
          <div className={styles.profile_container}>
            <div
              className={styles.userProfile_image}
              style={{ padding: "2px" }}
            >
              <label htmlFor="icon-button-file">
                <MuiInput
                  // accept="image/*"
                  onClick={() => {
                    !isDisable ? setOpenSelectProfile(true) : null;
                  }}
                  id="icon-button-file"
                  type="button"
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
                  <img
                    className={styles.userImage}
                    src={
                      prefilledData.profileImage
                        ? `./userAvatars/${prefilledData.profileImage}.png`
                        : `./userAvatars/${9}.png`
                    }
                    alt="profile"
                  />
                  <div>
                    <PhotoCamera />
                  </div>
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
                <CustomizedDialogs
                  modalTitle="Change password"
                  mainContent={ChangePasswordDialogue}
                  btnText="Confirm"
                  btnTitle="Change Password"
                  openModal={ChangePasswordBox}
                  setOpenModal={setChangePasswordBox}
                  handleClickOpen={() => handleClickOpen(0)}
                  handleSubmitClose={handleChangePassword}
                  isDisable={isDisable}
                />
              </Grid>

              {openSelectProfile && (
                <Grid item xs={6} style={{ padding: "15px" }}>
                  <SelectProfileAvatar
                    modalTitle="Choose Profile Avatar"
                    mainContent={() => (
                      <div className={styles.choose_avatar_container}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                          (d: number): React.ReactNode => (
                            <img
                              className={styles.choose_avatar}
                              key={d}
                              onClick={() =>
                                setPrefilledData({
                                  ...prefilledData,
                                  profileImage: d,
                                })
                              }
                              src={`./userAvatars/${d}.png`}
                              alt={"profile"}
                            />
                          )
                        )}
                      </div>
                    )}
                    btnText="Confirm"
                    btnTitle="Confirm"
                    openModal={true}
                    setOpenModal={setOpenSelectProfile}
                    handleClickOpen={() => setOpenModal(true)}
                    handleSubmitClose={() => ""}
                  />
                </Grid>
              )}

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

            <Grid
              item
              xs={12}
              style={{ padding: "15px", width: "95%" }}
              onClick={() => console.log("top grand grid call -> ")}
            >
              {prefilledData.address.map((addrs: iaddress, index: number) => (
                <Grid
                  container
                  rowSpacing={5}
                  style={{ marginTop: "10px", border: "2px solid blue" }}
                  key={addrs.houseNumber + `${Math.random()}`}
                  onClick={() => console.log("top grid call -> ")}
                >
                  <AmazeAccordion
                    title={`Address ${index + 1}`}
                    onRemoveAddress={() => {
                      console.log("called ", addrs);
                      updateAddress(addrs);
                    }}
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
                          name={item}
                          variant="filled"
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            // const allAd
                            setPrefilledData({
                              ...prefilledData,
                              [event.target.name]: event.target.value,
                            });
                          }}
                          disabled={isDisable}
                          // @ts-ignore
                          value={addrs[item]}
                          placeholder="phoneNumber"
                        />
                      </Grid>
                    ))}
                  </AmazeAccordion>
                </Grid>
              ))}
            </Grid>

            <div className={styles.add_address_btn}>
              <CustomizedDialogs
                modalTitle="Enter your Address"
                mainContent={dialogueBoxMainContent}
                btnText="Add address"
                btnTitle="Add address +"
                openModal={openModal}
                isDisable={isDisable}
                setOpenModal={setOpenModal}
                handleClickOpen={() => handleClickOpen(1)}
                handleSubmitClose={handleSubmitClose}
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
                  {showBtn(
                    "Save",
                    () => submitFinalAddress(),
                    TypeButton.PRIMARY
                  )}
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
    </Auth>
  );
};

export default memo(Profile);
