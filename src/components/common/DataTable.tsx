"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import React from "react";

interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  title: string;
  columns: Column[];
  rows: any[];
}

export default function DataTable({ title, columns, rows }: DataTableProps) {
  return (
    <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%" }}>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            overflowX: "auto",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  background: "#f6f7fa",
                }}
              >
                {(columns || []).map((col) => (
                  <TableCell
                    key={col.key}
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#23233c",
                      borderBottom: "1px solid #e5e7eb",
                      textAlign: "left",
                      py: 2,
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rows || []).map((row, i) => (
                <TableRow
                  key={i}
                  sx={{
                    background: "#fff",
                  }}
                >
                  {(columns || []).map((col) => (
                    <TableCell
                      key={col.key}
                      sx={{
                        fontSize: "1rem",
                        borderBottom: "1px solid #e5e7eb",
                        color: "#23233c",
                        textAlign: "left",
                        py: 2,
                        px: 1.5,
                        maxWidth: 220,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row[col.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
