import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableCell, TextField, Typography, withStyles } from "@mui/material";

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
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
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Height", 100, 1.15),
  createRow("Weight", 10, 45.99),
  createRow("Waist", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Biometrics() {
  return (
    <TableContainer component="div">
      <Table
        sx={{
          minWidth: 700,
          minHeight: 255,
          backgroundColor: "#efefef",
          borderRadius: 4,
          borderBottom: "none",
        }}
        aria-label="spanning table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                "& .MuiInputBase-root": {
                  height: 30,
                  borderBottom: "none",
                },
              }}
            >
              <Typography>Biometrics</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell align="center" sx={{ width: { sm: 10 } }}>
                {row.desc}
              </TableCell>
              <TableCell>
                <TextField
                  sx={{
                    background: "#ffffff",
                    width: { sm: 50, md: 60 },
                    "& .MuiInputBase-root": {
                      height: 30,
                    },
                  }}
                  variant="outlined"
                ></TextField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
