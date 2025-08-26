"use client";

import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import {
  useCompetitors,
  useUpdateCompetitor,
  useAddCompetitor,
} from "../../hooks/useRadar";
import { useQueryClient } from "@tanstack/react-query";

type Row = {
  id?: string;
  name: string;
  websiteURL: string;
  linkedinSlug: string;
};

export default function CompetitorsTable() {
  const qc = useQueryClient();
  const { data, isLoading, error } = useCompetitors();
  const updateMut = useUpdateCompetitor();

  const [editing, setEditing] = useState<string | null>(null);
  const [rows, setRows] = useState<Row[]>([]);

  // initialize editable rows when data loads
  if (!isLoading && data && rows.length === 0) {
    setRows(data);
  }

  if (isLoading) return <Paper sx={{ p: 3 }}>Loading competitors…</Paper>;
  if (error) return <Paper sx={{ p: 3 }}>Failed to load competitors</Paper>;

  const onSave = async (id: string) => {
    const row = rows.find((r) => r.id === id);
    if (!row) return;
    await updateMut.mutateAsync([id, row] as any);
    setEditing(null);
    qc.invalidateQueries({ queryKey: ["competitors"] });
  };

  const editField = (id: string, key: keyof Row, val: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: val } : r))
    );
  };

  return (
    <Stack gap={2}>
      <Typography variant="h6" fontWeight={700}>
        Competitors
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec ex
        bibendum, rutrum erat non, accumsan mi. Nunc tempor et ex sed iaculis.
        Aenean pharetra lacus nec interdum viverra.
      </Typography>
      <Typography variant="h6" fontWeight={500}>
        Your Selected Competiors
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Website URL</TableCell>
              <TableCell>LinkedIn page</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  {editing === row.id ? (
                    <TextField
                      size="small"
                      value={row.name}
                      onChange={(e) =>
                        editField(row.id!, "name", e.target.value)
                      }
                    />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell>
                  {editing === row.id ? (
                    <TextField
                      size="small"
                      value={row.websiteURL}
                      onChange={(e) =>
                        editField(row.id!, "websiteURL", e.target.value)
                      }
                    />
                  ) : (
                    row.websiteURL
                  )}
                </TableCell>
                <TableCell>
                  {editing === row.id ? (
                    <TextField
                      size="small"
                      value={row.linkedinSlug}
                      onChange={(e) =>
                        editField(row.id!, "linkedinSlug", e.target.value)
                      }
                    />
                  ) : (
                    `/${row.linkedinSlug}`
                  )}
                </TableCell>
                <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                  {editing === row.id ? (
                    <Button onClick={() => onSave(row.id!)} color="primary">
                      Save
                    </Button>
                  ) : (
                    <Button onClick={() => setEditing(row.id!)}>Edit</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
