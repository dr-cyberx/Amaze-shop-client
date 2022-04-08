import React, { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import TextRating from './TextRating';
import Text, { TextVariant } from './Typography';
import styles from '@styles/reusable/ListItem.module.scss';
import Button, { TypeButton, TypeButtonSize } from './Button';

interface IListItem {
  product: any;
  index: number;
  removeProductFromCart: any;
  fetchProductLoading: boolean;
}

const ListItem: React.FunctionComponent<IListItem> = ({
  product,
  index,
  removeProductFromCart,
  fetchProductLoading,
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const removeProductAndRefetch = async (productId: string): Promise<void> => {
    await removeProductFromCart({
      variables: {
        productId: product?.id,
      },
    });
  };

  return (
    <>
      <List
        sx={{ width: '100%', bgcolor: 'rgba(255, 255, 255, 0.0)' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemText primary={`${index + 1}. ${product.productName}`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div className={styles.cart__product__container}>
              <img
                className={styles.product__image}
                src={product.productImage}
                alt={product.productName}
              />
              <div className={styles.product__details}>
                <Text
                  variant={TextVariant.heading4}
                  style={{
                    color: 'rgb(43, 52, 69)',
                  }}
                >
                  Price: ${product.productPrice} /-
                </Text>
                <TextRating
                  readOnly
                  value={product?.productRating ? product?.productRating : 0}
                />
                <div className={styles.remove__from__cart}>
                  <Button
                    btnType={TypeButton.SECONDARY_DANGER}
                    label="Remove - "
                    loading={fetchProductLoading}
                    loadingText="removing..."
                    onClick={() => removeProductAndRefetch(product.id)}
                    size={TypeButtonSize.SMALL}
                    type="submit"
                  />
                </div>
              </div>
            </div>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default ListItem;
