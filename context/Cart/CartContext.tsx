import React, { createContext, useReducer } from "react";
import { dispatchActions } from "./actions";
import cartReducer from "./cartReducer";

export interface iContextPriceType {
  subTotal: number;
  tax: number;
  total: number;
}

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
    userDetail: {},
    searchSuggestionContainer: { shouldShow: false },
    totalBill: {
      subTotal: 0,
      tax: 0,
      total: 0,
    },
    Order: {
      address: {},
      total_bill: 0,
      userId: "",
      isPaid: false,
      paymentType: "Not paid",
    },
  });

  return (
    <CartContext.Provider
      value={{
        ...dispatchActions(dispatch),
        state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
