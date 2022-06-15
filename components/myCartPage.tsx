import * as React from "react";
import Auth from "./reusable/Auth";
import Layout from "./reusable/Layout";
import AmazeStepper from "./reusable/Stepper";

const MyCartPageComponent: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Auth pathName="/MyCart">
        <Layout>
          <AmazeStepper />
        </Layout>
      </Auth>
    </>
  );
};

export default MyCartPageComponent;
