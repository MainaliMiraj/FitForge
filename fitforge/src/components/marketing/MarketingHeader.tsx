"use client";
import { AppBar, Toolbar, Button, Box, Typography, Stack } from "@mui/material";
import { Dumbbell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MarketingHeader() {
  const router = useRouter();

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: { xs: 2, md: 6 }, py: 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* ---- Logo ---- */}
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

        {/* ---- Auth Buttons ---- */}
        <Stack direction="row" spacing={2}>
          {/* Login button */}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => router.push("/login")}
            sx={{
              borderRadius: 0, // make rectangular
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "#fff",
                borderColor: "primary.main",
              },
            }}
          >
            Login
          </Button>

          {/* Sign Up button */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => router.push("/signup")}
            sx={{
              borderRadius: 0, // rectangular
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
