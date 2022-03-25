import React from 'react';
import Carousel from 'react-material-ui-carousel';

interface IAmazeCrousel {
  DataList: any[];
  animationType?: 'slide' | 'fade';
  navButtonsAlwaysInvisible?: boolean;
  navButtonsAlwaysVisible?: boolean;
  autoPlay?: boolean;
  animationDuration?: number;
}

const AmazeCrousel: React.FunctionComponent<IAmazeCrousel> = ({
  DataList,
  animationDuration,
  animationType,
  autoPlay,
  navButtonsAlwaysInvisible,
  navButtonsAlwaysVisible,
}): JSX.Element => {
  return (
    <Carousel
      animation={animationType}
      navButtonsAlwaysVisible={navButtonsAlwaysVisible}
      navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
      duration={animationDuration}
      autoPlay={autoPlay}
    >
      <div>hello</div>
      <div>word</div>
      <div>bye</div>
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
};

export default AmazeCrousel;
