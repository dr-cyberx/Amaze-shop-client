import React, { useEffect, useState, memo } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextRouter, useRouter } from "next/router";
import Layout from "./Layout";
import GET_PRODUCT_BY_ID from "@graphql-doc/GET_PRODUCT_BY_ID.graphql";
import ADD_ITEM_TO_CART from "@graphql-doc/ADD_ITEM_TO_CART.graphql";
import { typeProduct } from "@components/HomePage";
import Text, { TextVariant } from "./Typography";
import TextRating from "./TextRating";
import Button, { TypeButton, TypeButtonSize } from "./Button";
import AmazeToast from "./AmazeToast";
import styles from "@styles/reusable/ProductOverview.module.scss";
import Auth from "./Auth";

interface iProductOverview {
  children?: React.ReactNode;
}

const ProductOverview: React.FunctionComponent<iProductOverview> = ({
  children,
}) => {
  const router: NextRouter = useRouter();
  const { id: productId } = router.query;

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: {
      getProductById: productId,
    },
  });

  const [addProductToCartMutation, { loading: addToCartLoader }] =
    useMutation(ADD_ITEM_TO_CART);

  const [readMore, setReadMore] = useState<boolean>(false);
  const [product, setProduct] = useState<typeProduct>();

  useEffect(() => {
    if (data?.getProductById.data) {
      setProduct(data.getProductById.data);
    }
  }, [data]);

  const addProductToCart = async (
    productId: string | undefined
  ): Promise<void> => {
    try {
      const updatedCart: any = await addProductToCartMutation({
        variables: {
          productId,
        },
      });

      const { data, error, message, status } = updatedCart?.data?.addItemToCart;
      if (data && status === 200) {
        AmazeToast({ message, type: "success" });
      } else {
        AmazeToast({ message, type: "error" });
      }
    } catch (error) {
      AmazeToast({ message: "Something went wrong", type: "error" });
    }

    return;
  };

  return (
    <Auth pathName="/productoverview">
      <Layout>
        <div className={styles.product__overview__container}>
          <div className={styles.product__overview__child_1}>
            {!loading ? (
              <img
                className={styles.overView__image}
                src={product?.productImage}
                alt={product?.productName}
              />
            ) : (
              <Skeleton height="500px" width="300px" animation="wave" />
            )}
          </div>
          <div className={styles.product__overview__child_2}>
            <div className={styles.product__title}>
              {!loading ? (
                <Text
                  variant={TextVariant.heading2}
                  style={{ fontWeight: "600" }}
                >
                  {product?.productName}
                </Text>
              ) : (
                <Skeleton
                  animation="wave"
                  variant="text"
                  height="80px"
                  width="200px"
                />
              )}
              {!loading ? (
                <Text
                  variant={TextVariant.heading6}
                  style={{
                    fontWeight: "600",
                    letterSpacing: "1px",
                    marginTop: "20px",
                  }}
                >
                  {readMore
                    ? product?.productDescription
                    : product?.productDescription.substring(0, 250)}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setReadMore(!readMore)}
                  >
                    {" "}
                    {!readMore ? "...Read more" : " ...Read less"}
                  </span>
                </Text>
              ) : (
                <>
                  <Skeleton height="25px" animation="wave" />
                  <Skeleton height="25px" animation="wave" />
                  <Skeleton height="25px" animation="wave" />
                </>
              )}
              <div className={styles.price__and__rating__container}>
                {!loading ? (
                  <TextRating
                    readOnly
                    value={product?.productRating ? product?.productRating : 0}
                  />
                ) : (
                  <Skeleton height="25px" width="200px" animation="wave" />
                )}
                {!loading ? (
                  <p className={styles.product__brand}>
                    Brand: <span>{product?.productBrand}</span>{" "}
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </p>
                ) : (
                  <Skeleton height="40px" width="200px" animation="wave" />
                )}
                {!loading ? (
                  <Text
                    variant={TextVariant.heading3}
                    style={{ fontWeight: "600", marginTop: "30px" }}
                  >
                    ${product?.productPrice}
                  </Text>
                ) : (
                  <Skeleton height="60px" width="200px" animation="wave" />
                )}
              </div>
              <div className={styles.BuyNow__add__to__cart}>
                <div className={styles.buy__now}>
                  {!loading ? (
                    <Button
                      btnType={TypeButton.PRIMARY}
                      label="Buy now"
                      // loading={loading}
                      size={TypeButtonSize.MEDIUM}
                      type="submit"
                    />
                  ) : (
                    <Skeleton height="80px" width="300px" animation="wave" />
                  )}
                </div>
                <div className={styles.add__to__cart}>
                  {!loading ? (
                    <Button
                      btnType={TypeButton.SECONDARY}
                      label="Add to Cart"
                      loading={addToCartLoader}
                      onClick={() => addProductToCart(product?.id)}
                      size={TypeButtonSize.MEDIUM}
                      type="button"
                    />
                  ) : (
                    <Skeleton height="80px" width="300px" animation="wave" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Auth>
  );
};

export default memo(ProductOverview);
