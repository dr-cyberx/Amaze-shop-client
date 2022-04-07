import React, { memo, useContext, useRef } from 'react';
import { useQuery } from '@apollo/client';
import useClickOutside from 'hooks/useClickoutside';
import { CartContext } from '@context/Cart/CartContext';
import GET_CART from '@graphql-doc/GET_CART.graphql';
import styles from '@styles/reusable/Cart.module.scss';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import ListItem from './ListItem';

const AmazeCart: React.FunctionComponent = (): JSX.Element => {
  const wrapperRef = useRef(null);
  const { closePostModal } = useContext(CartContext);
  const { data, loading, error } = useQuery(GET_CART);

  useClickOutside(wrapperRef, () => {
    closePostModal();
  });

  return (
    <div className={styles.Cart} ref={wrapperRef}>
      <div className={styles.cart__product__list}>
        {[1, 2, 3, 4, 5].map((d: number) => (
          <ListItem key={d} />
        ))}
      </div>
      <div className={styles.cart__product__price}></div>
    </div>
  );
};

export default memo(AmazeCart);
