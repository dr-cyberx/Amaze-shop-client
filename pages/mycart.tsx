import React from "react";
import { NextPage } from "next";
import MyCart from "@components/MyCart";
import MetaData from "@components/reusable/MetaData";

const MyCartPage: NextPage = (): JSX.Element => {
  return (
    <>
      <MetaData title="My Cart" />
      <MyCart />
    </>
  );
};

export default MyCartPage;
