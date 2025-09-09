"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Alert,
} from "@mui/material";
import { verifyOtp } from "../../api/radar";
import { useRouter, useSearchParams } from "next/navigation";
import otpBackground from "../../../public/otp-background.png";
import React from "react";

export default function VerifyOtp() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") ?? "your email";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const masked = email.includes("@")
    ? email[0] + "***@" + email.split("@")[1]
    : email;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      const res = await verifyOtp(code);
      window.localStorage.setItem("token", res.token);
      router.push("/auth/confirm-url");
    } catch (e: any) {
      setErr(e?.message ?? "Invalid/expired code");
    } finally {
      setLoading(false);
    }
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
        <Paper sx={{ p: 4, maxWidth: 420, width: "100%" }}>
          <Typography variant="h4" mb={1}>
            Verify Your Identity
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Enter the 6-digit code sent to {masked}.
          </Typography>
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="6-digit code"
              value={code}
              inputProps={{ inputMode: "numeric", maxLength: 6 }}
              onChange={(e) =>
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              fullWidth
              required
              margin="normal"
            />
            {err && (
              <Alert severity="error" sx={{ mt: 1 }}>
                {err}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              color="error"
              disabled={loading || code.length !== 6}
              sx={{ mt: 2 }}
            >
              {loading ? "Verifying..." : "Submit"}
            </Button>
          </Box>
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
