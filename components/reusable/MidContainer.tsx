import { typeProduct } from "@components/HomePage";
import React from "react";
import { Grid } from "@mui/material";
import {
  filterProductByCategory,
  assignPropsToProductCards,
} from "utils/productOperations";
import ProductCard from "./ProductCard";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text, { TextVariant } from "./Typography";
import styles from "@styles/reusable/MidContainer.module.scss";
import { icon, IconProp } from "@fortawesome/fontawesome-svg-core";

interface iMidContainer {
  containerIcon?: IconProp;
  containerTitle: string;
  children: React.ReactNode;
}

const MidContainer: React.FunctionComponent<iMidContainer> = ({
  containerTitle,
  children,
  containerIcon,
}): JSX.Element => {
  return (
    <>
      <div className={styles.mid__category__container}>
        <div className={styles.__title}>
          {containerIcon ? (
            <FontAwesomeIcon
              icon={containerIcon}
              size={"sm"}
              style={{ marginRight: "10px" }}
            />
          ) : (
            <></>
          )}
          <Text variant={TextVariant.heading3} color="secondary">
            {containerTitle}
          </Text>
        </div>
        <div className={styles.__cards}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {children}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default MidContainer;
