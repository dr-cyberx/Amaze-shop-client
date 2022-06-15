import React from "react";
import { NextPage } from "next";
// import MyCart from "@components/MyCart";
import MetaData from "@components/reusable/MetaData";
import MyCartPageComponent from "@components/myCartPage";

const MyCartPage: NextPage = (): JSX.Element => {
  return (
    <>
      <MetaData title="My Cart" />
      <MyCartPageComponent />
    </>
  );
};

export default MyCartPage;
