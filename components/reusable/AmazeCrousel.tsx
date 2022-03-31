import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '@styles/reusable/crousel.module.scss';

interface IAmazeCrousel {
  DataList: any[];
}

const AmazeCrousel: React.FunctionComponent<IAmazeCrousel> = ({
  DataList,
}): JSX.Element => {
  return (
    <Carousel showArrows={true}>
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
};

export default AmazeCrousel;
