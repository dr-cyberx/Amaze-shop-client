import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import { useQuery, useMutation } from "@apollo/client";
import useClickOutside from "hooks/useClickoutside";
import { CartContext } from "@context/Cart/CartContext";
import GET_CART_USER_ID from "@graphql-doc/GET_CART_USER_ID.graphql";
import REMOVE_ITEM_FROM_CART from "@graphql-doc/REMOVE_ITEM_FROM_CART.graphql";
import ADD_ITEM_TO_CART from "@graphql-doc/ADD_ITEM_TO_CART.graphql";
import ListItem from "./ListItem";
import CartBill from "./CartBill";
import styles from "@styles/reusable/Cart.module.scss";

const AmazeCart: React.FunctionComponent = (): JSX.Element => {
  const wrapperRef: MutableRefObject<null> = useRef(null);
  const { closePostModal } = useContext(CartContext);
  const { data } = useQuery(GET_CART_USER_ID);
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
    <div className={styles.Cart} ref={wrapperRef}>
      <div className={styles.cart__product__list}>
        {cartProducts?.products.map((d: any, index: any) => (
          <>
            <ListItem
              key={d.id}
              product={d.productId}
              qty={d.qty}
              index={index}
              removeProductFromCart={removeProductFromCart}
              addProductToCart={addProductToCart}
              fetchProductLoading={
                fetchProductLoading || fetchaddProductLoading
              }
            />
          </>
        ))}
      </div>
      <div className={styles.cart__product__price}>
        <CartBill productDetails={cartProducts?.products} />
      </div>
    </div>
  );
};

export default memo(AmazeCart);
