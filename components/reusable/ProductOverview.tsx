import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from './Layout';
import GET_PRODUCT_BY_ID from '@graphql-doc/GET_PRODUCT_BY_ID.graphql';
import { typeProduct } from '@components/HomePage';
import styles from '@styles/reusable/ProductOverview.module.scss';

interface iProductOverview {
  children?: React.ReactNode;
  productId: string | string[] | undefined;
}

const ProductOverview: React.FunctionComponent<iProductOverview> = ({
  children,
  productId,
}) => {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      getProductById: productId,
    },
  });

  const [product, setProduct] = useState<typeProduct>();

  useEffect(() => {
    if (data?.getProductById.data) {
      console.log('data --- > ', data.getProductById.data);
      setProduct(data.getProductById.data);
    }
  }, [data]);

  return (
    <Layout>
      <div className={styles.product__overview__container}>{product?.productName}</div>
    </Layout>
  );
};

export default ProductOverview;
