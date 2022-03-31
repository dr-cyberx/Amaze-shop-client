import MetaData from '@components/reusable/MetaData';
import ProductOverview from '@components/reusable/ProductOverview';
import { NextPage } from 'next';
import React from 'react';

const Product: NextPage = (): JSX.Element => {

  return (
    <>
      <MetaData title="product" />
      <ProductOverview />
    </>
  );
};

export default Product;
