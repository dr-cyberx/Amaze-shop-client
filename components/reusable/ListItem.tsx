import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import TextRating from "./TextRating";
import Text, { TextVariant } from "./Typography";
import Button, { TypeButton, TypeButtonSize } from "./Button";
import AmazeToast from "./AmazeToast";
import styles from "@styles/reusable/ListItem.module.scss";

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
    const res = await removeProductFromCart({
      variables: {
        productId,
      },
    });
    console.log("res -> data-> ", res?.data?.removeItemFromCart);
    const { data, message, status } = res?.data?.removeItemFromCart;
    if (data && status === 200) {
      AmazeToast({ message, type: "success" });
    } else {
      AmazeToast({ message, type: "error" });
    }
    return;
  };

  return (
    <>
      <List
        sx={{ width: "100%", bgcolor: "rgba(255, 255, 255, 0.0)" }}
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
                    color: "rgb(43, 52, 69)",
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
