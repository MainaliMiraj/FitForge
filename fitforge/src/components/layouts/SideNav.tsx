"use client";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import { Home, Dumbbell, LineChart, Settings } from "lucide-react";
import Link from "next/link";

export const drawerWidth = 240;

const navItems = [
  { text: "Dashboard", icon: <Home size={20} />, href: "/" },
  { text: "Workouts", icon: <Dumbbell size={20} />, href: "/workouts" },
  { text: "Progress", icon: <LineChart size={20} />, href: "/progress" },
  { text: "Settings", icon: <Settings size={20} />, href: "/settings" },
];

interface SideNavProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function SideNav({ mobileOpen, onClose }: SideNavProps) {
  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar />
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <Link key={item.text} href={item.href} passHref>
            <ListItemButton
              component="a"
              onClick={onClose}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                  "& .MuiListItemIcon-root": { color: "white" },
                },
              }}
            >
              <ListItemIcon sx={{ color: "primary.main", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <Box sx={{ textAlign: "center", py: 2 }}>
        <Typography variant="caption" color="text.secondary">
          © {new Date().getFullYear()} FitForge
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "1px solid rgba(0,0,0,0.08)",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
