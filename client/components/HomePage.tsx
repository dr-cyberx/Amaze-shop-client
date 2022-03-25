import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import AmazeCrousel from './reusable/AmazeCrousel';
import Layout from './reusable/Layout';
import styles from '@styles/HomePage.module.scss';

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
      <div className={styles.coursel__Container}>
        <AmazeCrousel
          DataList={HomePageCrouselContent}
          animationDuration={2000}
          // navButtonsAlwaysVisible
          navButtonsAlwaysInvisible={false}
          autoPlay={true}
          animationInterval={3000}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
