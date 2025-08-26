"use client";

import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MetricCard from "../../components/dashboard/MetricCard";
import TopicRadar from "../../components/dashboard/TopicRadar";
import TopicsToWriteCard from "../../components/dashboard/TopicsToWriteCard";
import {
  useEngagementRate,
  useNewEngagements,
  usePersonalizationScore,
  useRevenue,
} from "../../hooks/useRadar";
import ContentToPromoteCard from "../../components/dashboard/ContentToPromoteCard";

export default function DashboardPage() {
  const { data: score } = usePersonalizationScore();
  const { data: newEng } = useNewEngagements();
  const { data: rate } = useEngagementRate();
  const { data: revenue } = useRevenue();

  const [progress, setProgress] = useState(60);
  const [label, setLabel] = useState("PROFILE-IN-PROGRESS");

  return (
    <Box sx={{ bgcolor: "background.default", py: 4, flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" mb={2}>
          Welcome Katie!
        </Typography>

        <Grid container spacing={2}>
          {/* Top-left quadrant */}
          <Grid container spacing={2} size={6}>
            <Grid size={6}>
              <MetricCard
                title="New personalized engagements"
                value={newEng?.[0]?.engagements ?? "-"}
                deltaPct={newEng?.[0]?.changePercentage}
              />
            </Grid>
            <Grid size={6}>
              <MetricCard
                title="Personalized content engagement rate"
                value={`${rate?.[0]?.engagementRate ?? "-"}%`}
                deltaPct={rate?.[0]?.changePercentage}
              />
            </Grid>
            <Grid size={6}>
              <MetricCard
                title="Personalization score"
                value={score?.[0]?.score ?? "-"}
                deltaPct={0.0}
                helpText="How can I improve my score?"
              />
            </Grid>
            <Grid size={6}>
              <MetricCard
                title="Content Influenced Revenue"
                value={`$${(revenue?.[0]?.revenue ?? 0).toLocaleString()}`}
                deltaPct={revenue?.[0]?.changePercentage}
              />
            </Grid>
          </Grid>

          {/* Top-right quadrant */}
          <Grid size={6}>
            <TopicRadar />
          </Grid>

          {/* Bottom-left quadrant */}
          <Grid size={6}>
            <TopicsToWriteCard
              topics={[
                {
                  topic: "Celebrity news",
                  contacts: 369,
                  topicIncidence: 2,
                },
                {
                  topic: "Politics",
                  contacts: 5038,
                  topicIncidence: 4,
                },
                {
                  topic: "Barak Obama",
                  contacts: 7503,
                  topicIncidence: 7,
                },
                {
                  topic: "Leo DiCaprio",
                  contacts: 539,
                  topicIncidence: 77,
                },
              ]}
            />
          </Grid>

          {/* Bottom-right quadrant */}
          <Grid size={6}>
            <ContentToPromoteCard
              items={[
                {
                  title:
                    "Introducing Ethereum: The Next Generation of  Contract Architect..",
                  imageUrl: "https://picsum.photos/seed/ai/100/60",
                  url: "#",
                  engagement: 70,
                  traffic: 53,
                },
                {
                  title:
                    "Discover How Ethereum Can Revolutionize the Way We...",
                  imageUrl: "https://picsum.photos/seed/cms/100/60",
                  url: "#",
                  engagement: 84,
                  traffic: 34,
                },

                {
                  title: "Is your business complying with ESG frameworks?",
                  imageUrl: "https://picsum.photos/seed/cms/100/60",
                  url: "#",
                  engagement: 68,
                  traffic: 35,
                },

                {
                  title:
                    "Discover the Power of Ethereum: Unlock Next-Level Architectu...",
                  imageUrl: "https://picsum.photos/seed/cms/100/60",
                  url: "#",
                  engagement: 96,
                  traffic: 23,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
