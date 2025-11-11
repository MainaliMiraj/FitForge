"use client";

import { Box, Container, Paper, Typography } from "@mui/material";
import { FitnessCenter, Restaurant, Timeline } from "@mui/icons-material";

const features = [
  {
    icon: <FitnessCenter fontSize="large" color="primary" />,
    title: "Smart Workouts",
    desc: "AI-driven plans tailored to your fitness level and goals.",
  },
  {
    icon: <Restaurant fontSize="large" color="secondary" />,
    title: "Balanced Nutrition",
    desc: "Meal recommendations that fuel performance and recovery.",
  },
  {
    icon: <Timeline fontSize="large" color="primary" />,
    title: "Track Progress",
    desc: "Monitor strength, endurance, and physical changes easily.",
  },
];

export default function FeaturesSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 4, md: 8 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="stretch"
        gap={4}
        sx={{ width: "100%" }}
      >
        {features.map((feature) => (
          <Paper
            key={feature.title}
            elevation={3}
            sx={{
              flex: 1,
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Box mb={2}>{feature.icon}</Box>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              {feature.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {feature.desc}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
