import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedIcon from "@mui/icons-material/Verified";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { useState } from "react";
import AmazeCart from "./AmazeCart";
import Button, { TypeButton, TypeButtonSize } from "./Button";
import {
  faArrowLeft,
  faArrowRight,
  faCreditCard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/reusable/AmazeStepper.module.scss";
import AddressList from "./AddressList";
import { CartContext } from "@context/Cart/CartContext";
import Text, { TextVariant } from "./Typography";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "rgb(0, 174, 255)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "rgb(0, 174, 255)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  ...(ownerState.active && {
    background: "rgb(0, 174, 255)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    background: "rgb(0, 174, 255)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCartIcon />,
    2: <HomeWorkIcon />,
    3: <PaymentIcon />,
    4: <VerifiedIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["My Cart", "Choose address", "Payment", "Done"];

export default function AmazeStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { addDataForOrder, state } = React.useContext(CartContext);
  const [OrderDetail, setOrderDetail] = useState({});

  React.useEffect(() => {
    console.log("state.Order -> ", state);
  }, [state]);

  const showStepComponent = (num: number): React.ReactNode => {
    switch (num) {
      case 0:
        return (
          <>
            <AmazeCart />
          </>
        );
        break;

      case 1:
        return (
          <>
            <AddressList />
          </>
        );

        break;

      case 2:
        return (
          <>
            <div
              style={{
                width: "95%",
                margin: "auto",
                height: "400px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div style={{ width: "200px" }}>
                {state.Order.isPaid ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      color: "rgb(107, 226, 156)",
                    }}
                  >
                    <Text variant={TextVariant.heading1}>Paid</Text>
                    <FontAwesomeIcon icon={faCheckCircle} size={"3x"} />
                  </div>
                ) : (
                  <Button
                    btnType={TypeButton.PRIMARY}
                    label={"Pay now"}
                    icon={<FontAwesomeIcon icon={faCreditCard} size={"1x"} />}
                    type={"submit"}
                    onClick={() =>
                      addDataForOrder({
                        ...state.Order,
                        isPaid: true,
                      })
                    }
                    size={TypeButtonSize.MEDIUM}
                  />
                )}
              </div>
            </div>
          </>
        );

        break;

      case 3:
        return <>all done!</>;

        break;

      default:
        return <>404</>;
        break;
    }
  };
  return (
    <>
      <Stack sx={{ width: "100%", marginTop: "100px" }}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <div style={{ marginTop: "50px" }}>{showStepComponent(activeStep)}</div>
      <div className={styles.btnContainer__stepper}>
        <div className={styles.btnContiner__elements}>
          <Button
            btnType={TypeButton.PRIMARY}
            label=""
            onClick={() => setActiveStep(activeStep - 1)}
            icon={<FontAwesomeIcon icon={faArrowLeft} size={"sm"} />}
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
        </div>
        <div className={styles.btnContiner__elements}>
          <Button
            btnType={TypeButton.PRIMARY}
            label=""
            onClick={() => setActiveStep(activeStep + 1)}
            icon={<FontAwesomeIcon icon={faArrowRight} size={"sm"} />}
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
        </div>
      </div>
    </>
  );
}
