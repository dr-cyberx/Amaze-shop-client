import React, { memo, useState } from "react";
import Text, { TextVariant } from "./Typography";
import styles from "@styles/reusable/productCartSecondary.module.scss";
import { typeProduct } from "@components/HomePage";
import Button, { TypeButton, TypeButtonSize } from "./Button";

interface iProductCardSecondary {
  cartTitle: string;
  products: typeProduct;
  onClick: () => void;
}

const ProductCardSecondary: React.FunctionComponent<iProductCardSecondary> = ({
  cartTitle,
  products,
  onClick,
}): JSX.Element => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  return (
    <div
      className={styles.productCartSecondary__container}
      onMouseOver={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <div className={styles.title__container}>
        <Text variant={TextVariant.heading4} color="secondary">
          {cartTitle}
        </Text>
      </div>
      <div className={styles.CardImage__container}>
        <img src={products.productImage} alt={products.productName} />
      </div>
      {showOverlay ? (
        <div className={styles.Card__overlay}>
          <div className={styles.Card__overlay__btn__container}>
            <div style={{ backgroundColor: "white", borderRadius: "6px" }}>
              <Button
                btnType={TypeButton.PRIMARY}
                label="view"
                onClick={onClick}
                size={TypeButtonSize.MEDIUM}
                type="submit"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

ProductCardSecondary.defaultProps = {
  cartTitle: "My Card",
};

export default memo(ProductCardSecondary);
