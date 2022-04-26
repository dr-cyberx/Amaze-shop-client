import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { memo, useEffect } from "react";

interface productDetails {
  productDetails: any;
}

const CartBill: React.FunctionComponent<productDetails> = ({
  productDetails,
}): JSX.Element => {
  const TAX_RATE = 0.07;

  function ccyFormat(num: number) {
    return `${num?.toFixed(2)}`;
  }

  function priceRow(qty: number, unit: number) {
    return qty * unit;
  }

  function createRow(desc: string, qty: number, unit: number) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  interface Row {
    desc: string;
    qty: number;
    price: number;
  }

  function subtotal(items: readonly Row[]) {
    return items?.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const row1 = productDetails?.map((item: any) =>
    createRow(item.productId.productName, item.qty, item.productId.productPrice)
  );

  const invoiceSubtotal = subtotal(row1);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ background: "rgba(255, 255, 255, 0.6)" }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right" />
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row1?.map((row: any) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right" />
                <TableCell align="right">${ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">${ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">+ ${ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default memo(CartBill);
