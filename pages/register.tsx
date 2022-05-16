import React from "react";
import { NextPage } from "next";
import Register from "@components/Register";
import MetaData from "@components/reusable/MetaData";
import Auth from "@components/reusable/Auth";

const register: NextPage = () => {
  return (
    <>
      <MetaData title="Register" />
      <Register />
    </>
  );
};

export default register;
