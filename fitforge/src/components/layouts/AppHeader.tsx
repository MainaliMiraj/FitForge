"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{
        background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
        color: "white",
      }}
    >
      <Toolbar>
        {/* Hamburger icon on mobile */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo + name */}
        <FitnessCenterIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
          FitForge
        </Typography>

        {/* Profile avatar placeholder */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            sx={{
              bgcolor: "white",
              color: "primary.main",
              width: 32,
              height: 32,
            }}
          >
            F
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
