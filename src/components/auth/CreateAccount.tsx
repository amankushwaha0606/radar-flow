"use client";

import { useState } from "react";
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
import { createAccount } from "../../api/radar";
import { useRouter } from "next/navigation";
import accountCreation from "../../../public/account-creation.png";

export default function CreateAccount() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    try {
      await createAccount(email);
      router.push(`/auth/sign-in?email=${encodeURIComponent(email)}`);
    } catch (e: any) {
      setErr(e?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ minHeight: "100vh" }}>
      {/* Left Form */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Paper sx={{ p: 4, maxWidth: 420, width: "100%" }}>
          <Typography variant="h4" mb={2}>
            Create a new account
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Use your work email address.
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
              {loading ? "Creating..." : "Create account"}
            </Button>
            <Typography variant="body2" mt={2}>
              Already have an account? <Link href="/auth/sign-in">Sign in</Link>
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Right Background Illustration */}
      <Box
        flex={1}
        sx={{
          display: { xs: "none", md: "block" },
          backgroundImage: `url(${accountCreation.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: 144,
        }}
      />
    </Stack>
  );
}
