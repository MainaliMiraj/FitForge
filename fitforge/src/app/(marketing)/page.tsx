"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import { FitnessCenter, Restaurant, Timeline } from "@mui/icons-material";
import { Dumbbell, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const handleStart = () => router.push("/signup");

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ bgcolor: "background.default" }}
    >
      {/* ===== HEADER ===== */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ px: { xs: 2, md: 6 }, py: 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Dumbbell size={30} color="#1976d2" />
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ ml: 1 }}
              color="primary"
            >
              FitForge
            </Typography>
          </Box>

          {/* Auth buttons */}
          <Stack direction="row" spacing={1}>
            <Button
              variant="text"
              color="primary"
              onClick={() => router.push("/login")}
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                textTransform: "none",
                "&:hover": { color: "secondary.main" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleStart}
              sx={{
                borderRadius: 3,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                px: 3,
                py: 1,
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* ===== HERO SECTION ===== */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: { xs: 2, md: 6 },
          gap: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h2"
            fontWeight="800"
            sx={{ mb: 2, fontSize: { xs: "2rem", md: "3.5rem" } }}
          >
            Forge Your Strength. Shape Your Future.
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            FitForge helps you craft the ultimate fitness routine — track
            workouts, plan your meals, and watch your transformation in real
            time.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 3,
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              textTransform: "none",
              fontWeight: 600,
              isplay: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover svg": {
                opacity: 1, // show arrow on hover
                transform: "translateX(5px)", // slide arrow into place
              },
            }}
            onClick={handleStart}
          >
            Get Started
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>

      {/* ===== FEATURES SECTION ===== */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 3, md: 3 },
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
          {[
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
          ].map((feature) => (
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
              <Typography
                variant="h6"
                fontWeight="700"
                sx={{ fontSize: "1.3rem", mb: 1 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "1rem" }}
              >
                {feature.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* ===== FOOTER ===== */}
      <Box
        component="footer"
        textAlign="center"
        py={3}
        sx={{
          borderTop: "1px solid #e0e0e0",
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.95rem" }}
        >
          © {new Date().getFullYear()} FitForge — Build Strength. Build
          Discipline.
        </Typography>
      </Box>
    </Box>
  );
}
