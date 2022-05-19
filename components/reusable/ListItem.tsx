import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import TextRating from "./TextRating";
import Text, { TextVariant } from "./Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AmazeToast from "./AmazeToast";
import styles from "@styles/reusable/ListItem.module.scss";

interface IListItem {
  product: any;
  index: number;
  qty: number;
  removeProductFromCart: any;
  addProductToCart: any;
  refetch: any;
  fetchProductLoading: boolean;
}

const ListItem: React.FunctionComponent<IListItem> = ({
  product,
  index,
  removeProductFromCart,
  fetchProductLoading,
  addProductToCart,
  refetch,
  qty,
}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const removeProductAndRefetch = async (productId: string): Promise<void> => {
    try {
      const res = await removeProductFromCart({
        variables: {
          productId,
        },
      });
      const { data, message, status } = res?.data?.removeItemFromCart;
      if (data && status === 200) {
        refetch();
        AmazeToast({ message, type: "success" });
      } else {
        AmazeToast({ message, type: "error" });
      }
      return;
    } catch (error) {
      AmazeToast({ message: "Something went wrong!", type: "error" });
    }
  };

  const addProductAndRefetch = async (productId: string): Promise<void> => {
    try {
      const res = await addProductToCart({
        variables: {
          productId,
        },
      });
      const { data, message, status } = res?.data?.addItemToCart;
      if (data && status === 200) {
        refetch();
        AmazeToast({ message, type: "success" });
      } else {
        AmazeToast({ message, type: "error" });
      }
      return;
    } catch (error) {
      AmazeToast({ message: "Something went wrong!", type: "error" });
    }
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
                  Price: ${product.productPrice} /- ({qty})
                </Text>
                <TextRating
                  readOnly
                  value={product?.productRating ? product?.productRating : 0}
                />
                <div className={styles.remove__from__cart}>
                  <ButtonGroup>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        removeProductAndRefetch(product.id);
                      }}
                    >
                      <RemoveIcon fontSize="medium" />
                    </Button>
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        addProductAndRefetch(product.id);
                      }}
                    >
                      <AddIcon fontSize="medium" />
                    </Button>
                  </ButtonGroup>
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
