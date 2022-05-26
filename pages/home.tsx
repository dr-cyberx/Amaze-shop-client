import HomePage from "@components/HomePage";
import Auth from "@components/reusable/Auth";
import MetaData from "@components/reusable/MetaData";
import { NextPage } from "next";
import React from "react";

const home: NextPage = (): JSX.Element => {
  return (
    <>
      <MetaData title="Home" />
      <HomePage />
    </>
  );
};

export default home;
