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

const HomePageCrouselContent = [
  {
    id: 0,
    content: <img src="/4ktv.jpg" alt="image 1" />,
  },
  {
    id: 1,
    content: <img src="/console2.jpg" alt="image 2" />,
  },
  {
    id: 2,
    content: <img src="/laptop.jpg" alt="image 3" />,
  },
  {
    id: 3,
    content: <img src="/phone.jpg" alt="image 4" />,
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export type typeProduct = {
  id: string;
  productDescription: string;
  productImage: string;
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
          src="/phone.jpg"
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
    </Layout>
  );
};

export default HomePage;
