import Register from '@components/Register';
import MetaData from '@components/reusable/MetaData';
import { NextPage } from 'next';
import React from 'react';

const register: NextPage = () => {
  return (
    <>
      <MetaData title="Register" />
      <Register />
    </>
  );
};

export default register;
