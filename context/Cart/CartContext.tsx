import React, { createContext, useReducer } from 'react';
import { typeProduct } from '@components/HomePage';
import cartReducer from './cartReducer';

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
  });

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
