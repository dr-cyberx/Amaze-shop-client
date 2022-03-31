import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from './Layout';
import GET_PRODUCT_BY_ID from '@graphql-doc/GET_PRODUCT_BY_ID.graphql';
import { typeProduct } from '@components/HomePage';
import styles from '@styles/reusable/ProductOverview.module.scss';
import { useRouter } from 'next/router';
import Text, { TextVariant } from './Typography';
import TextRating from './TextRating';
import Button, { TypeButton, TypeButtonSize } from './Button';

interface iProductOverview {
  children?: React.ReactNode;
}

const ProductOverview: React.FunctionComponent<iProductOverview> = ({
  children,
}) => {
  const router = useRouter();
  const { id: productId } = router.query;

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      getProductById: productId,
    },
  });

  const [readMore, setReadMore] = useState<boolean>(false);
  const [product, setProduct] = useState<typeProduct>();

  useEffect(() => {
    if (data?.getProductById.data) {
      console.log('data --- > ', data.getProductById.data);
      setProduct(data.getProductById.data);
    }
  }, [data]);

  return (
    <Layout>
      <div className={styles.product__overview__container}>
        <div className={styles.product__overview__child_1}>
          {product ? (
            <img
              className={styles.overView__image}
              src={product?.productImage}
              alt={product?.productName}
            />
          ) : null}
        </div>
        <div className={styles.product__overview__child_2}>
          <div className={styles.product__title}>
            <Text variant={TextVariant.heading2} style={{ fontWeight: '600' }}>
              {product?.productName}
            </Text>
            <Text
              variant={TextVariant.heading6}
              style={{
                fontWeight: '600',
                letterSpacing: '1px',
                marginTop: '20px',
              }}
            >
              {readMore
                ? product?.productDescription
                : product?.productDescription.substring(0, 250)}
              <span
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => setReadMore(!readMore)}
              >
                {' '}
                {!readMore ? '...Read more' : ' ...Read less'}
              </span>
            </Text>
            <div className={styles.price__and__rating__container}>
              <TextRating
                readOnly
                value={product?.productRating ? product?.productRating : 0}
              />
              <Text
                variant={TextVariant.heading3}
                style={{ fontWeight: '600', marginTop: '30px' }}
              >
                ${product?.productPrice}
              </Text>
            </div>
            <div className={styles.BuyNow__add__to__cart}>
              <div className={styles.buy__now}>
                <Button
                  btnType={TypeButton.PRIMARY}
                  label="Buy now"
                  // loading={loading}
                  size={TypeButtonSize.MEDIUM}
                  type="submit"
                />
              </div>
              <div className={styles.add__to__cart}>
                <Button
                  btnType={TypeButton.SECONDARY}
                  label="Add to Cart"
                  // loading={loading}
                  size={TypeButtonSize.MEDIUM}
                  type="submit"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductOverview;
