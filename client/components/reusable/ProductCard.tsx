import React from 'react';
import styles from '@styles/reusable/ProductCard.module.scss';

interface IProductCard {
  image?: string;
  title?: string;
  id?: string;
  rating?: number;
}

const ProductCard: React.FunctionComponent<IProductCard> = (): JSX.Element => {
  return (
    <div className={styles.Product__Card}>
      <div className={styles.Product__image__container}>
        <img
          className={styles.Product__image}
          src="/console.jpg"
          alt="product image"
        />
      </div>
    </div>
  );
};

// ProductCard.defaultProps = {
//   id:
// }

export default ProductCard;
