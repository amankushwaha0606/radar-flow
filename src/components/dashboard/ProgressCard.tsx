"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  LinearProgress,
  CircularProgress,
  Button,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const steps = [
  {
    id: 1,
    title: "Profile set-up",
    description:
      "All done! We've successfully done whatever this task is going to be.",
  },
  {
    id: 2,
    title: "Content personalization",
    description:
      "All done! We’ve successfully completed whatever this task with be.",
  },
  {
    id: 3,
    title: "Radar calibration",
    description: "We are currently doing whatever this task will be.",
  },
];

export default function ProgressCard() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next % 33 === 0) {
          setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
        } else if (next >= 100) {
          setCurrentStep(3);
        }
        return Math.min(next, 100);
      });
    }, 300);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <Card sx={{ p: 3, maxWidth: 500, mx: "auto", width: 400 }}>
      <Box
        sx={{
          bgcolor: "#FBBF24",
          p: 2,
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography>
          Hey Katie, we’re getting your account set up. Hang tight!
        </Typography>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={progress}
            size={60}
            thickness={5}
            sx={{ color: "black" }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body2" fontWeight="bold">
              {progress}%
            </Typography>
          </Box>
        </Box>
      </Box>

      <Stack spacing={3}>
        {steps.map((step, index) => {
          const isComplete = index < currentStep;
          const isActive = index === currentStep;

          return (
            <Box key={step.id} display="flex" alignItems="center" gap={2}>
              {isComplete ? (
                <CheckCircleIcon color="success" />
              ) : isActive ? (
                <CircularProgress size={24} />
              ) : (
                <RadioButtonUncheckedIcon color="disabled" />
              )}
              <Box>
                <Typography fontWeight="bold">{step.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {isComplete
                    ? "Complete!"
                    : isActive
                    ? "In progress..."
                    : "Waiting..."}
                </Typography>
                {isComplete && (
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {step.description}
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Stack>

      <Box mt={4}>
        <Typography fontWeight="bold" mb={2}>
          While you’re waiting
        </Typography>
        <Stack direction="row" spacing={2}>
          <Card sx={{ p: 2, flex: 1, textAlign: "center" }}>
            <Typography variant="body2" mb={1}>
              Start getting your personal profile set up while you wait.
            </Typography>
            <Button variant="outlined" size="small">
              Get started
            </Button>
          </Card>
          <Card sx={{ p: 2, flex: 1, textAlign: "center" }}>
            <Typography variant="body2" mb={1}>
              Start getting your personal profile set up while you wait.
            </Typography>
            <Button variant="outlined" size="small">
              Get started
            </Button>
          </Card>
        </Stack>
      </Box>
    </Card>
  );
}
