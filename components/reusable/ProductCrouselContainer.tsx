import React, { memo } from "react";
import { NextRouter, useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import Carousel from "react-elastic-carousel";
import ProductCard from "./ProductCard";
import Text, { TextVariant } from "./Typography";
import Modal from "./modal";
import styles from "@styles/reusable/ProductCrouselContainer.module.scss";
import { typeProduct } from "@components/HomePage";
import { assignPropsToProductCards } from "utils/productOperations";

interface IProductCrouselContainer {
  children?: React.ReactNode;
  isLoading: boolean;
  containerTitle: string;
  itemArray: any[];
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const ProductCrouselContainer: React.FunctionComponent<
  IProductCrouselContainer
> = ({ isLoading, itemArray, containerTitle }) => {
  const router: NextRouter = useRouter();
  return (
    <div className={styles.ProductCrousel__container}>
      <Text
        variant={TextVariant.heading3}
        style={{
          textAlign: "left",
          marginLeft: "20px",
          marginTop: "20px",
          color: "rgb(43, 52, 69)",
        }}
      >
        {containerTitle}
      </Text>

      <div className={styles.Product__card__container}>
        {isLoading ? (
          <Modal>
            <CircularProgress color="primary" />
          </Modal>
        ) : (
          // @ts-ignore
          <Carousel
            isRTL={false}
            pagination={false}
            itemPosition={"CENTER"}
            enableAutoPlay
            autoPlaySpeed={10000}
            transitionMs={1000}
            breakPoints={breakPoints}
            className={styles.Product__card__crousel}
          >
            {itemArray.map((d: typeProduct) => (
              <ProductCard key={d.id} {...assignPropsToProductCards(d, d.id)} />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default memo(ProductCrouselContainer);
