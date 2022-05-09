import React, { createContext, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext: React.Context<any> = createContext<any>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, {
    showCartModal: false,
    cartProducts: null,
    cartProductsCount: 0,
    isLoading: false,
  });

  const openPostModal = (): void => {
    dispatch({
      type: "OPEN_MODEL",
    });
    return;
  };

  const closePostModal = (): void => {
    dispatch({
      type: "CLOSE_MODEL",
    });
    return;
  };

  const showLoading = (): void => {
    dispatch({
      type: "SHOW_LOADER",
    });
  };

  const hideLoading = (): void => {
    dispatch({
      type: "HIDE_LOADER",
    });
  };

  return (
    <CartContext.Provider
      value={{ state, closePostModal, openPostModal, hideLoading, showLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};
