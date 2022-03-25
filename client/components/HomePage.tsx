import React from 'react';
// import Carousel from 'react-material-ui-carousel';
import AmazeCrousel from './reusable/AmazeCrousel';
import Layout from './reusable/Layout';

const HomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <Layout>
      <AmazeCrousel />
    </Layout>
  );
};

export default HomePage;
