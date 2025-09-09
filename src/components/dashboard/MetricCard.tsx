"use client";

import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import React from "react";

export default function MetricCard({
  title,
  value,
  deltaPct,
  helpText,
}: {
  title: string;
  value: string | number;
  deltaPct?: number;
  helpText?: string;
}) {
  const sign = deltaPct === undefined ? "" : deltaPct >= 0 ? "+" : "";
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        {deltaPct !== undefined && (
          <Stack direction="row" justifyContent="flex-start" mb={1}>
            <Chip
              size="small"
              label={`${sign}${Math.round(deltaPct * 100)}%`}
            />
          </Stack>
        )}
        <Typography variant="h3" mb={1}>
          {value}
        </Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        {helpText && (
          <Typography variant="caption" color="text.secondary">
            {helpText}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
