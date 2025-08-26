"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { usePathname } from "next/navigation";
import ProgressCard from "../dashboard/ProgressCard";
import { useState } from "react";

function getTitle(path: string) {
  if (path.startsWith("/topics")) return "Topics";
  if (path.startsWith("/contacts")) return "Contacts";
  if (path.startsWith("/competitors")) return "Competitors";
  if (path.startsWith("/dashboard")) return "Dashboard";
  return "Radar";
}

export default function Topbar({
  drawerWidth = 240,
  appBarHeight = 72,
}: {
  drawerWidth?: number;
  appBarHeight?: number;
}) {
  const pathname = usePathname() || "/";
  const title = getTitle(pathname);
  const [showProgress, setShowProgress] = useState(false);

  return (
    <AppBar
      elevation={0}
      color="inherit"
      position="fixed"
      sx={{
        height: appBarHeight,
        justifyContent: "center",
        bgcolor: "#fff",
        borderBottom: "1px solid #e5e7eb",
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar
        sx={{
          minHeight: appBarHeight,
          pl: { xs: 2, md: 4 },
          pr: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#23233c",
            fontWeight: 700,
            fontSize: "1.5rem",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mr: 1,
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => setShowProgress((show) => !show)}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#23233c",
              fontWeight: 500,
              fontSize: "1.1rem",
              mr: 1,
            }}
          >
            Katie Barker
          </Typography>
          <Avatar sx={{ width: 34, height: 34 }} />
          <IconButton size="small" sx={{ ml: 0.5 }}>
            <ArrowDropDownIcon />
          </IconButton>
          <Box
            sx={{
              display: showProgress ? "block" : "none",
              position: "absolute",
              right: 0,
              top: 40,
            }}
          >
            <ProgressCard />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
