import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useQuery } from '@apollo/client';
import Layout from './reusable/Layout';
import Text, { TextVariant } from './reusable/Typography';
import ProductCard from './reusable/ProductCard';
import GET_ALL_PRODUCTS from '@graphql-doc/GET_ALL_PRODUCTS.graphql';
import styles from '@styles/HomePage.module.scss';
import { CircularProgress } from '@mui/material';
import Modal from './reusable/modal';

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

// {
//   "__typename": "createProductResponse",
//   "id": "6241975c5aefc0d3014f0f5a",
//   "productDescription": "Max Air changed the game in '87. Now, we honour its emerald anniversary (35 years!) with the Nike Air Max 90 SE. Emerald graphics and colours highlight this big landmark, while its classic Waffle outsole and exposed Air cushioning keep you living the legacy in comfort.",
//   "productImage": "https://bazar-react.vercel.app/assets/images/products/nike-black.png",
//   "productName": "Nike storm",
//   "productPrice": "100.00",
//   "productRating": 4.5,
//   "productSeller": "62418a6cd6cdf2ee9316aa17"
// }

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
    <Layout>
      <div className={styles.homePage__image__container}>
        <img
          className={styles.homepage__image}
          src="/phone.jpg"
          alt="phone image"
        />
        <div className={styles.bottom__container}>
          <Text
            variant={TextVariant.heading3}
            style={{
              textAlign: 'left',
              marginLeft: '20px',
              marginTop: '20px',
              color: 'rgb(43, 52, 69)',
            }}
          >
            Top Selling Product
          </Text>

          <div className={styles.Product__card__container}>
            {loading ? (
              <Modal>
                <CircularProgress color="primary" />
              </Modal>
            ) : (
              <Carousel
                isRTL={false}
                pagination={false}
                itemPosition={'CENTER'}
                breakPoints={breakPoints}
                className={styles.Product__card__crousel}
              >
                {TopSellingProducts.map((d) => (
                  <ProductCard
                    key={d.id}
                    image={d.productImage}
                    placeholderText={d.productName}
                    rating={d.productRating}
                    title={d.productName}
                  />
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
