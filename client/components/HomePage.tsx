import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import AmazeCrousel from './reusable/AmazeCrousel';
import Layout from './reusable/Layout';
import styles from '@styles/HomePage.module.scss';

const HomePageCrouselContent = [
  {
    id: 0,
    content: <img src="/home1.webp" alt="image 1" />,
  },
  {
    id: 1,
    content: <img src="/home2.webp" alt="image 1" />,
  },
  {
    id: 2,
    content: <img src="/home3.webp" alt="image 1" />,
  },
];

const HomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.coursel__Container}>
        <AmazeCrousel
          DataList={HomePageCrouselContent}
          animationDuration={2000}
          navButtonsAlwaysVisible
          navButtonsAlwaysInvisible={false}
          autoPlay={true}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
