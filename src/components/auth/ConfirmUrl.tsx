"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import otpBackground from "../../../public/otp-background.png";

export default function ConfirmUrl() {
  const router = useRouter();
  const [url, setUrl] = useState("https://www.examplecompany.com");

  const onContinue = () => {
    // Normally validate + call API (not required for mock)
    router.push("/auth/welcome-screen");
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ minHeight: "100vh" }}>
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Paper sx={{ p: 4, maxWidth: 520, width: "100%" }}>
          <Typography variant="h4" mb={2}>
            Is this your URL?
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            We detected this as your company’s website. Please verify its
            accuracy.
          </Typography>
          <TextField
            label="Website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            fullWidth
          />
          <Button
            onClick={onContinue}
            sx={{ mt: 2 }}
            size="large"
            fullWidth
            variant="contained"
            color="error"
          >
            Continue
          </Button>
        </Paper>
      </Box>
      <Box
        flex={1}
        sx={{
          display: { xs: "none", md: "block" },
          backgroundImage: `url(${otpBackground.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: 144,
        }}
      />
    </Stack>
  );
}
