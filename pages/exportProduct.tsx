import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { CSVLink, CSVDownload } from "react-csv";
import { NextPage } from "next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button, {
  TypeButton,
  TypeButtonSize,
} from "@components/reusable/Button";
import styles from "@styles/exportProduct.module.scss";
import MetaData from "@components/reusable/MetaData";

const headers = [
  { label: "Product Name", key: "productName" },
  { label: "Image", key: "productImage" },
  { label: "Description", key: "productDescription" },
  { label: "Price", key: "productPrice" },
  { label: "Seller", key: "productSeller" },
  { label: "Brand", key: "productBrand" },
  { label: "Rating", key: "productRating" },
  { label: "Tags", key: "tags" },
];

const ExportProduct: NextPage = (): JSX.Element => {
  const [productData, setProductData] = useState<any>([]);

  useEffect(() => {
    getProducts()
      .then(data => {
        if (data) {
          console.log(data.data);
          setProductData(data.data.data);
        }
      })
      .catch(err => {
        console.log(err);
        return;
      });
  }, []);

  const getProducts = async (): Promise<any> => {
    const products = await axios.get("http://localhost:4000/GetAllProductCSV");
    return products;
  };

  return (
    <div className={styles.export__Product__container}>
      <MetaData title="Export Product" />
      <div className={styles.download__btn__container}>
        <CSVLink
          filename="all_products.csv"
          data={productData}
          headers={headers}
        >
          <Button
            btnType={TypeButton.PRIMARY}
            label="Download Product CSV"
            size={TypeButtonSize.MEDIUM}
            type="submit"
          />
        </CSVLink>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {[
                "Name",
                "Image",
                "Description",
                "Price",
                "Seller",
                "Brand",
                "Rating",
                "Tags",
              ].map((d: string) => (
                <TableCell key={d} align="center">
                  {d}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {productData?.map(
              (product: any): React.ReactNode => (
                <TableRow
                  key={product.productName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.productName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.productImage}
                  </TableCell>
                  <TableCell align="center">
                    {product.productDescription}
                  </TableCell>
                  <TableCell align="center">{product.productPrice}</TableCell>
                  <TableCell align="center">{product.productSeller}</TableCell>
                  <TableCell align="center">{product.productBrand}</TableCell>
                  <TableCell align="center">{product.productRating}</TableCell>
                  <TableCell align="center">{product.tags}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ExportProduct;
