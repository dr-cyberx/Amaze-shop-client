import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Layout from "./reusable/Layout";
import { NextRouter, useRouter } from "next/router";
import GET_ALL_PRODUCTS from "@graphql-doc/GET_ALL_PRODUCTS.graphql";
import ProductCrouselContainer from "./reusable/ProductCrouselContainer";
import ProductCardSecondary from "./reusable/ProductCardSecondary";
import Grid from "@mui/material/Grid";
import Text, { TextVariant } from "./reusable/Typography";
import styles from "@styles/HomePage.module.scss";
import Button, { TypeButton, TypeButtonSize } from "./reusable/Button";

export type typeProduct = {
  id: string;
  productDescription: string;
  productImage: string;
  productBrand: string;
  productName: string;
  productPrice: string;
  productRating: number;
  productSeller: string;
};

export type typeTopSellingProduct = Array<typeProduct>;

export type iSecondaryCartItems = {
  title: string;
  products: [];
};

const rowProps = (d: typeProduct, index: number) => ({
  item: true,
  key: d.id,
  xs: 6,
  md: 4,
  style: {
    display: "grid",
    placeItems: "center",
  },
});

const HomePage: React.FunctionComponent = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);
  const [SecondaryCardProduct, setSecondaryCardProduct] =
    useState<typeTopSellingProduct>([]);
  const [TopSellingProducts, setTopSellingProducts] =
    useState<typeTopSellingProduct>([]);

  useEffect(() => {
    if (data) {
      setTopSellingProducts(data.getallproducts.data);
      setSecondaryCardProduct(data.getallproducts.data);
    }
  }, [data]);

  return (
    <Layout isLoading={loading}>
      <div className={styles.homePage__image__container}>
        <img
          className={styles.homepage__image}
          src="/phone-min.jpg"
          alt="phone image"
        />
        <div className={styles.bottom__container}>
          <ProductCrouselContainer
            containerTitle="Top Selling Products"
            isLoading={loading}
            itemArray={TopSellingProducts}
          />
        </div>
      </div>
      <div className={styles.mid__container}>
        <Grid container spacing={12}>
          <Grid
            item
            xs={6}
            md={12}
            style={{
              display: "flex",
            }}
          >
            <img
              className={styles.banner_1}
              src="./banners/banner-1.jpg"
              alt="ad banner 1"
            />
            <div className={styles.banner__right_container}>
              <div className={styles.banner__right__container__title}>
                <Text variant={TextVariant.heading3} color="secondary">
                  Moon Light
                </Text>
              </div>
              <div className={styles.banner__right__content}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quis et commodi ea optio nam, numquam unde, nihil,
                  corrupti modi odit excepturi dicta libero sapiente. Eaque at
                  veritatis in, aspernatur sunt ducimus voluptates accusantium,
                  sequi, sint numquam nostrum quidem architecto.
                </p>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button
                  btnType={TypeButton.PRIMARY}
                  label="Buy now"
                  size={TypeButtonSize.MEDIUM}
                  type="submit"
                />
              </div>
            </div>
          </Grid>
          {[...SecondaryCardProduct.slice(6, 9)].map(
            (singleProduct: typeProduct, index: number) => (
              <Grid {...rowProps(singleProduct, index)} key={singleProduct.id}>
                <ProductCardSecondary
                  cartTitle={singleProduct.productName}
                  products={singleProduct}
                  onClick={() => router.push(`/product/${singleProduct.id}`)}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    </Layout>
  );
};

export default HomePage;
