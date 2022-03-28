import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import Layout from './reusable/Layout';
import styles from '@styles/HomePage.module.scss';
import Text, { TextVariant } from './reusable/Typography';
import ProductCard from './reusable/ProductCard';

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

const HomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.homePage__image__container}>
        <img className={styles.homepage__image} src="/phone.jpg" alt="phone image" />
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
            <ProductCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
