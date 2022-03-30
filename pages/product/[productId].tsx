import { useRouter } from 'next/router';
import MetaData from '@components/reusable/MetaData';
import ProductOverview from '@components/reusable/ProductOverview';
import { NextPage } from 'next';
import React from 'react';

const Product: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <MetaData title="product" />
      <ProductOverview productId={productId} />
    </>
  );
};

export default Product;
