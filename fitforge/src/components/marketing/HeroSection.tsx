"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <Container
      maxWidth="lg"
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 4, md: 8 },
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
          sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
        >
          FitForge helps you craft the ultimate fitness routine — track
          workouts, plan meals, and watch your transformation in real time.
        </Typography>

        {/* === Get Started Button === */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => router.push("/signup")}
            sx={{
              borderRadius: 0,
              px: 5,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              transition: "all 0.25s ease",
              "& svg": {
                transition: "transform 0.25s ease",
              },
              "&:hover svg": {
                transform: "translateX(5px)", // move arrow right on hover
              },
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: (theme) =>
                  `0 4px 12px ${theme.palette.primary.main}33`,
              },
            }}
          >
            Get Started
            <ArrowRight size={20} />
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
