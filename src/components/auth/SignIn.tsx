"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
  Stack,
  Alert,
} from "@mui/material";
import { login } from "../../api/radar";
import { useRouter, useSearchParams } from "next/navigation";
import otpBackground from "../../../public/otp-background.png";
import React from "react";

export default function SignIn() {
  const router = useRouter();
  const params = useSearchParams();
  const prefilled = params.get("email") ?? "";

  const [email, setEmail] = useState(prefilled);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (prefilled) setEmail(prefilled);
  }, [prefilled]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      await login(email);
      router.push(`/auth/verify-otp?email=${encodeURIComponent(email)}`);
    } catch (e: any) {
      setErr(e?.message ?? "Something went wrong");
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
          <Typography variant="h4" mb={2}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? "Sending code..." : "Sign in"}
            </Button>
            <Typography variant="body2" mt={2}>
              Not registered yet?{" "}
              <Link href="/auth/create-account">Start for free</Link>
            </Typography>
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
