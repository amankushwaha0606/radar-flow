"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import videoThumbnail from "../../../public/welcome-video.png";
import { useRouter } from "next/navigation";

export default function WelcomeScreen() {
  const router = useRouter();

  const onContinue = () => {
    router.push("/radar");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h3" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
            Welcome to Air Traffic Control, Katie
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth={600}>
            Check out this video to learn about how we can help your business
            through personalized content.
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Image src={videoThumbnail} alt="Intro video" width={560} />
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                color: "black",
                textTransform: "none",
                px: 3,
                borderRadius: "30px",
                fontWeight: 600,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Watch video
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#F44E4E",
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#d93f3f" },
            }}
            onClick={onContinue}
          >
            Continue
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
