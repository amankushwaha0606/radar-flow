"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContacts } from "../../hooks/useRadar";

export default function ContactsTable() {
  const { data, isLoading, error } = useContacts();
  if (isLoading) return <Paper sx={{ p: 3 }}>Loading contacts…</Paper>;
  if (error) return <Paper sx={{ p: 3 }}>Failed to load contacts</Paper>;

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ py: 1.5, px: 2 }}>First name</TableCell>
            <TableCell sx={{ py: 1.5, px: 2 }}>Last name</TableCell>
            <TableCell sx={{ py: 1.5, px: 2 }}>Email</TableCell>
            <TableCell sx={{ py: 1.5, px: 2 }}>Company</TableCell>
            <TableCell sx={{ py: 1.5, px: 2 }}>Insights</TableCell>
            <TableCell sx={{ py: 1.5, px: 2 }}>Recommendations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.content.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell sx={{ py: 1.5, px: 2 }}>{row.firstName}</TableCell>
              <TableCell sx={{ py: 1.5, px: 2 }}>{row.lastName}</TableCell>
              <TableCell sx={{ py: 1.5, px: 2 }}>{row.email}</TableCell>
              <TableCell sx={{ py: 1.5, px: 2 }}>{row.company}</TableCell>
              <TableCell sx={{ py: 1.5, px: 2 }}>{row.insights}</TableCell>
              <TableCell sx={{ py: 1.5, px: 2 }}>
                {row.recommendations}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
