import React from "react";
import { NextPage } from "next";
import Login from "@components/Login";
import MetaData from "@reusable/MetaData";
import Auth from "@components/reusable/Auth";

const LoginPage: NextPage = () => {
  return (
    <>
      <MetaData title="Login" />
      <Login />
    </>
  );
};

export default LoginPage;
