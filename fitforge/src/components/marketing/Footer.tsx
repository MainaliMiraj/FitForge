"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
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
  );
}
