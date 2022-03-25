import React from 'react';
import Carousel from 'react-material-ui-carousel';
import styles from '@styles/reusable/crousel.module.scss';

interface IAmazeCrousel {
  DataList: any[];
  animationType?: 'slide' | 'fade';
  navButtonsAlwaysInvisible?: boolean;
  navButtonsAlwaysVisible?: boolean;
  autoPlay?: boolean;
  animationDuration?: number;
  swipe?: boolean;
  animationInterval?: number;
}

const AmazeCrousel: React.FunctionComponent<IAmazeCrousel> = ({
  DataList,
  animationDuration,
  animationType,
  autoPlay,
  navButtonsAlwaysInvisible,
  swipe,
  navButtonsAlwaysVisible,
  animationInterval,
}): JSX.Element => {
  return (
    <Carousel
      animation={animationType}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
      duration={animationDuration}
      autoPlay={autoPlay}
      swipe={swipe}
      interval={animationInterval}
    >
      {DataList.map((item) => (
        <div key={item.id} className={styles.courselImage__Container}>
          {item.content}
        </div>
      ))}
    </Carousel>
  );
};

AmazeCrousel.defaultProps = {
  DataList: [],
  animationDuration: 3000,
  animationType: 'slide',
  autoPlay: true,
  navButtonsAlwaysInvisible: true,
  navButtonsAlwaysVisible: false,
  swipe: false,
  animationInterval: 3000,
};

export default AmazeCrousel;
