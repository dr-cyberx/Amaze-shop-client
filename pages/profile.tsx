import React from "react";
import Profile from "@components/Profile";
import MetaData from "@components/reusable/MetaData";

const UserProfile = () => {
  return (
    <>
      <MetaData title="profile" />
      <Profile />
    </>
  );
};

export default UserProfile;
