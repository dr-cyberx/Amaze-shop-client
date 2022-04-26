import Profile from "@components/Profile";
import Layout from "@components/reusable/Layout";
import MetaData from "@components/reusable/MetaData";
import React from "react";

const UserProfile = () => {
  return (
    <>
      <MetaData title="home" />
      <Profile />
    </>
  );
};

export default UserProfile;
