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

interface TopicItem {
  topic: string;
  contacts: number;
  topicIncidence: number;
}

interface TopicsToWriteProps {
  topics: TopicItem[];
}

export default function TopicsToWriteCard({ topics }: TopicsToWriteProps) {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="h6" fontWeight={600}>
          Recommended topics to write about
        </Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>Topic</TableCell>
            <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>Contacts</TableCell>
            <TableCell sx={{ fontWeight: "bold", py: 1.5 }}>
              Topic Incidence
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(topics || []).map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ py: 1.5 }}>
                <Typography variant="body2">{row.topic}</Typography>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Typography variant="body2" fontWeight={500}>
                  {row.contacts}
                </Typography>
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                <Typography variant="body2" fontWeight={500}>
                  {row.topicIncidence}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
