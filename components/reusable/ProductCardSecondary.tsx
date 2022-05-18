import React, { memo } from "react";
import Text, { TextVariant } from "./Typography";
import styles from "@styles/reusable/productCartSecondary.module.scss";
import { typeProduct } from "@components/HomePage";

interface iProductCardSecondary {
  cartTitle: string;
  products: typeProduct;
}

const ProductCardSecondary: React.FunctionComponent<iProductCardSecondary> = ({
  cartTitle,
  products,
}): JSX.Element => {
  return (
    <div className={styles.productCartSecondary__container}>
      <div className={styles.title__container}>
        <Text variant={TextVariant.heading4} color="secondary">
          {cartTitle}
        </Text>
      </div>
      <div className={styles.CardImage__container}>
        <img src={products.productImage} alt={products.productName} />
      </div>
    </div>
  );
};

ProductCardSecondary.defaultProps = {
  cartTitle: "My Card",
};

export default memo(ProductCardSecondary);
