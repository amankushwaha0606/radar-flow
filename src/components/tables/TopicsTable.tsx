"use client";

import {
  Box,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTopics } from "../../hooks/useRadar";

// Helper: map score → label + color
function getCoverage(score: number) {
  if (score >= 75) return { label: "Great", color: "#62B18E" };
  if (score >= 50) return { label: "Ok", color: "#F0C658" };
  if (score >= 25) return { label: "Low", color: "#F08F58" };
  return { label: "Poor", color: "#F05858" };
}

export default function TopicsTable() {
  const { data, isLoading, error } = useTopics();
  if (isLoading) return <Paper sx={{ p: 3 }}>Loading topics…</Paper>;
  if (error) return <Paper sx={{ p: 3 }}>Failed to load topics</Paper>;

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Topic</TableCell>
            <TableCell>Engagement Rate</TableCell>
            <TableCell>Topic Competition</TableCell>
            <TableCell>Coverage Score</TableCell>
            <TableCell>Competitor Coverage Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.content.map((row: any) => {
            const coverage = getCoverage(row.coverageScore);

            return (
              <TableRow key={row.id}>
                {/* Topic */}
                <TableCell>
                  <Typography fontWeight={500}>{row.value}</Typography>
                </TableCell>

                {/* Engagement Rate (fake derived from coverageScore for now) */}
                <TableCell>{row.coverageScore}%</TableCell>

                {/* Topic Competition */}
                <TableCell>{row.topicCompetition}</TableCell>

                {/* Coverage Score with bar */}
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ minWidth: 40 }}>
                      {coverage.label}
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress
                        variant="determinate"
                        value={row.coverageScore}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          backgroundColor: "#eee",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: coverage.color,
                            borderRadius: 5,
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </TableCell>

                {/* Competitor Coverage Score (demo same as CoverageScore) */}
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2" sx={{ minWidth: 40 }}>
                      {coverage.label}
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress
                        variant="determinate"
                        value={row.coverageScore}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          backgroundColor: "#eee",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: coverage.color,
                            borderRadius: 5,
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
