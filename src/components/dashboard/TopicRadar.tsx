"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";

export default function TopicRadar() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight={700} mb={1}>
          Topic radar
        </Typography>
        <Box
          sx={{
            height: 260,
            borderRadius: 2,
            bgcolor: "#0B1A44",
            opacity: 0.9,
          }}
        />
      </CardContent>
    </Card>
  );
}
