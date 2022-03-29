import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Text, { TextVariant } from './Typography';
import styles from '@styles/reusable/ProductCard.module.scss';
import { Box } from '@mui/material';
import TextRating from './TextRating';

interface IProductCard {
  image?: string;
  title?: string;
  id?: string;
  rating?: number;
  placeholderText?: string;
}

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const ProductCard: React.FunctionComponent<IProductCard> = ({
  id,
  image,
  rating,
  title,
  placeholderText,
}): JSX.Element => {
  console.log('rating -> ', rating);
  return (
    <div className={styles.Product__Card}>
      <div className={styles.Product__image__container}>
        <img
          className={styles.Product__image}
          src={image}
          alt={placeholderText}
        />
        <div className={styles.Product__title__container}>
          <Text
            variant={TextVariant.heading5}
            style={{
              color: 'rgb(43, 52, 69)',
            }}
          >
            {title}
          </Text>
        </div>
        <div className={styles.product__card__rating__container}>
          <TextRating readOnly={true} value={rating ? rating : 0} />
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  rating: 3.5,
};

export default ProductCard;
