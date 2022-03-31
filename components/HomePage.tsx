import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useQuery } from '@apollo/client';
import { InfinitySpin } from 'react-loader-spinner';
import Layout from './reusable/Layout';
import Text, { TextVariant } from './reusable/Typography';
import ProductCard from './reusable/ProductCard';
import GET_ALL_PRODUCTS from '@graphql-doc/GET_ALL_PRODUCTS.graphql';
import styles from '@styles/HomePage.module.scss';
import { CircularProgress } from '@mui/material';
import Modal from './reusable/modal';
import ProductCrouselContainer from './reusable/ProductCrouselContainer';

export type typeProduct = {
  id: string;
  productDescription: string;
  productImage: string;
  productBrand: string;
  productName: string;
  productPrice: string;
  productRating: number;
  productSeller: string;
};

export type typeTopSellingProduct = Array<typeProduct>;

const HomePage: React.FunctionComponent = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
  const [TopSellingProducts, setTopSellingProducts] =
    useState<typeTopSellingProduct>([]);

  useEffect(() => {
    if (data) {
      setTopSellingProducts(data.getallproducts.data);
    }
  }, [data]);

  return (
    <Layout isLoading={loading}>
      <div className={styles.homePage__image__container}>
        <img
          className={styles.homepage__image}
          src="/phone-min.jpg"
          alt="phone image"
        />
        <div className={styles.bottom__container}>
          <ProductCrouselContainer
            containerTitle="Top Selling Products"
            isLoading={loading}
            itemArray={TopSellingProducts}
          />
        </div>
      </div>
      {/* <div>hello world</div> */}
    </Layout>
  );
};

export default HomePage;
