"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import AppHeader from "./AppHeader";
import SideNav, { drawerWidth } from "./SideNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <AppHeader onMenuClick={handleDrawerToggle} />
      <SideNav mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 4 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          transition: "background 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
