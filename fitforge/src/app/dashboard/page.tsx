"use client";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Dumbbell } from "lucide-react";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        background: "#f7f9fc",
      }}
    >
      <Card
        sx={{
          maxWidth: 480,
          p: 4,
          borderRadius: 4,
          boxShadow: 4,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Dumbbell size={48} color="#1976d2" />
            <Typography variant="h4" fontWeight={700}>
              FitForge Dashboard
            </Typography>
            <Typography color="text.secondary">
              Welcome back! Track your progress, log workouts, and crush goals.
            </Typography>
            <Button variant="contained" color="primary">
              Start a Workout
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
