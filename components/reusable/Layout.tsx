import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";
import Navbar from "./Navbar";
import AmazeCart from "./AmazeCart";
import { CartContext } from "@context/Cart/CartContext";
import { Fade } from "@mui/material";
import styles from "@styles/reusable/Layout.module.scss";
interface iLayout {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Layout: React.FunctionComponent<iLayout> = ({
  children,
  isLoading,
}): JSX.Element => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      {isLoading || state.isLoading ? (
        <div className={styles.loader__container}>
          <div className={styles.loader}>
            <InfinitySpin width="300px" color="rgb(0, 174, 255)" />
          </div>
        </div>
      ) : null}
      <Fade
        in={state.showCartModal}
        {...(state.showCartModal ? { timeout: 250 } : {})}
      >
        <div className={styles.cart__container}>
          <div style={{ marginTop: "8%" }}>
            <AmazeCart />
          </div>
        </div>
      </Fade>
      <ToastContainer />
    </div>
  );
};

export default Layout;
