"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <Box sx={{ background: "linear-gradient(180deg,#FCE7E5, #FFFFFF)" }}>
      {/* Topbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "transparent", py: 2 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "black", cursor: "pointer" }}
              onClick={() => router.push("/")}
            >
              Air Traffic Control
            </Typography>

            {/* Nav Links */}
            <Stack
              direction="row"
              spacing={4}
              sx={{
                display: { xs: "none", md: "flex" },
                color: "text.primary",
              }}
            >
              <Typography variant="body2" sx={{ cursor: "pointer" }}>
                Use cases
              </Typography>
              <Typography variant="body2" sx={{ cursor: "pointer" }}>
                Pricing
              </Typography>
              <Typography variant="body2" sx={{ cursor: "pointer" }}>
                Resources
              </Typography>
              <Typography variant="body2" sx={{ cursor: "pointer" }}>
                Demo
              </Typography>
            </Stack>

            {/* Right Actions */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="text"
                sx={{ textTransform: "none", fontWeight: 500 }}
                onClick={() => router.push("/auth/sign-in")}
              >
                Sign in
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#F44E4E",
                  px: 3,
                  borderRadius: "50px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#d93f3f" },
                }}
                onClick={() => router.push("/auth/create-account")}
              >
                Start for free
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={8}
          alignItems="center"
        >
          {/* Left Content */}
          <Box flex={1}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2 }}
            >
              Turn your existing content into warmer pipeline and revenue.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 480 }}
            >
              Send the most relevant blog post, case study, podcast, or video to
              each contact in HubSpot every time based on their interests and
              engagement.
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#F44E4E",
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { bgcolor: "#d93f3f" },
              }}
              onClick={() => alert("Demo booked!")}
            >
              Book a Demo
            </Button>
          </Box>

          {/* Right Image */}
          <Box
            flex={1}
            sx={{
              width: "100%",
              minHeight: 320,
              bgcolor: "white",
              borderRadius: 3,
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <img
              src="/demo-screenshot.png" // replace with actual video, will replace with video later
              alt="App Demo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </Container>

      {/* Comparison Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 14 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              The old way
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li>create an ABM account list</li>
              <li>run manual account research</li>
              <li>create content to support your campaign</li>
              <li>create custom microsites</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              The Air Traffic Control way
            </Typography>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              <li>unlimited accounts and contacts</li>
              <li>
                automate research across your CRM, LinkedIn, and public outlets
              </li>
              <li>
                automatically recommend the best of your <b>existing content</b>{" "}
                for every contact
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
