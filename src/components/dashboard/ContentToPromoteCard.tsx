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
  Avatar,
} from "@mui/material";
import React from "react";

interface ContentItem {
  title: string;
  engagement: number;
  traffic: number;
  imageUrl: string;
}

interface ContentToPromoteProps {
  items: ContentItem[];
}

export default function ContentToPromoteCard({ items }: ContentToPromoteProps) {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="h6" fontWeight={600}>
          Content to promote
        </Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>Content</TableCell>
            <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
              Engagement
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>Traffic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(items || []).map((row, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{ py: 1.5, display: "flex", alignItems: "center" }}
              >
                <Avatar src={row.imageUrl} variant="rounded" sx={{ mr: 2 }} />
                <Typography variant="body2">{row.title}</Typography>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Box
                  sx={{
                    height: 20,
                    width: `${row.engagement}%`,
                    backgroundColor:
                      row.engagement >= 70 ? "#4caf50" : "#ff9800",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "4px",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {row.engagement}%
                </Box>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Typography variant="body2" fontWeight={500}>
                  {row.traffic}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
