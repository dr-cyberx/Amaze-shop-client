import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import { useQuery, useMutation } from "@apollo/client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useClickOutside from "hooks/useClickoutside";
import { CartContext } from "@context/Cart/CartContext";
import GET_CART_USER_ID from "@graphql-doc/GET_CART_USER_ID.graphql";
import REMOVE_ITEM_FROM_CART from "@graphql-doc/REMOVE_ITEM_FROM_CART.graphql";
import ADD_ITEM_TO_CART from "@graphql-doc/ADD_ITEM_TO_CART.graphql";
import ListItem from "./reusable/ListItem";
import CartBill from "./reusable/CartBill";
import styles from "@styles/reusable/Cart.module.scss";
import Auth from "./reusable/Auth";
import Layout from "./reusable/Layout";
import Button, { TypeButton, TypeButtonSize } from "./reusable/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AmazeCart: React.FunctionComponent = (): JSX.Element => {
  const wrapperRef: MutableRefObject<null> = useRef(null);
  const { closePostModal, updateBillInCart } = useContext(CartContext);
  const { data, loading, refetch } = useQuery(GET_CART_USER_ID);
  const [removeProductFromCart, { loading: fetchProductLoading }] = useMutation(
    REMOVE_ITEM_FROM_CART
  );
  const [addProductToCart, { loading: fetchaddProductLoading }] =
    useMutation(ADD_ITEM_TO_CART);

  const [cartProducts, setCartProducts] = useState<any>();

  useClickOutside(wrapperRef, () => {
    closePostModal();
  });

  useEffect(() => {
    if (data?.getCartByUserID?.data) {
      setCartProducts(data.getCartByUserID.data);
    }
  }, [data]);

  return (
    <>
      <Auth pathName="/MyCart">
        <Layout isLoading={loading}>
          <div className={styles.Cart} ref={wrapperRef}>
            {cartProducts?.products.length > 0 ? (
              <>
                <div className={styles.cart__product__list}>
                  {cartProducts?.products.map(
                    (d: any, index: number): React.ReactNode => (
                      <>
                        <ListItem
                          key={d.id}
                          product={d.productId}
                          qty={d.qty}
                          index={index}
                          refetch={refetch}
                          removeProductFromCart={removeProductFromCart}
                          addProductToCart={addProductToCart}
                          fetchProductLoading={
                            fetchProductLoading || fetchaddProductLoading
                          }
                        />
                      </>
                    )
                  )}
                </div>
                <div className={styles.cart__product__price}>
                  <CartBill
                    updatePriceInContext={updateBillInCart}
                    productDetails={cartProducts?.products}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={styles.fallback__cart__component}>
                  <h1>Cart is empty!</h1>
                </div>
              </>
            )}
          </div>
          {cartProducts?.products.length > 0 && (
            <div className={styles.procced__container}>
              <Button
                btnType={TypeButton.PRIMARY}
                label="Place your Order"
                icon={<FontAwesomeIcon icon={faArrowRight} size={"xs"} />}
                size={TypeButtonSize.MEDIUM}
                type="submit"
              />
            </div>
          )}
        </Layout>
      </Auth>
    </>
  );
};

export default memo(AmazeCart);
