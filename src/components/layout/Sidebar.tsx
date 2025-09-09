"use client";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dashboard,
  Topic,
  Article,
  Contacts,
  Groups,
  Help,
  Settings,
  Upgrade,
} from "@mui/icons-material";
import WifiIcon from "@mui/icons-material/Wifi";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GroupIcon from "@mui/icons-material/Group";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";

const navItems = [
  { label: "Radar", path: "/radar", icon: <WifiIcon /> },
  { label: "Topics", path: "/topics", icon: <Topic /> },
  { label: "Content", path: "/content", icon: <EditNoteIcon /> },
  { label: "Contacts", path: "/contacts", icon: <GroupIcon /> },
  { label: "Competitors", path: "/competitors", icon: <StarBorderIcon /> },
];

const navDownItems = [
  { label: "Help", path: "/help", icon: <Help /> },
  { label: "Settings", path: "/settings", icon: <Settings /> },
  { label: "Upgrade", path: "/upgrade", icon: <Upgrade /> },
];

export default function Sidebar({
  drawerWidth = 240,
}: {
  drawerWidth?: number;
}) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: isMobile ? "none" : "block",
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#0B1A44",
          color: "#fff",
          borderTopRightRadius: "24px",
          borderBottomRightRadius: "24px",
          border: "none",
          boxShadow: "4px 0 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Toolbar sx={{ minHeight: "80px !important", padding: "0 20px" }}>
        <Typography variant="h5" noWrap fontWeight="bold">
          Radar
        </Typography>
      </Toolbar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "12px 24px",
        }}
      >
        <Box sx={{ overflow: "auto", flexGrow: 1 }}>
          <List sx={{ padding: 0 }}>
            {navItems.map((item) => {
              const isSelected = pathname.startsWith(item.path);
              return (
                <Link key={item.path} href={item.path} passHref>
                  <ListItemButton
                    selected={isSelected}
                    sx={{
                      borderRadius: "42px",
                      marginBottom: "4px",
                      color: "#fff",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                      },
                      fontWeight: isSelected ? 600 : 400,
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "inherit",
                        minWidth: "40px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isSelected ? 600 : 400,
                        fontSize: "0.95rem",
                      }}
                    />
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
        </Box>

        <Divider
          sx={{ borderColor: "rgba(255, 255, 255, 0.1)", margin: "16px 0" }}
        />

        <Box sx={{ overflow: "auto", paddingBottom: "16px" }}>
          <List sx={{ padding: 0 }}>
            {navDownItems.map((item) => {
              const isSelected = pathname.startsWith(item.path);
              const isUpgrade = item.path === "/upgrade";

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    selected={isSelected && !isUpgrade}
                    sx={{
                      borderRadius: "42px",
                      marginBottom: "4px",
                      color: "#fff",
                      backgroundColor: isUpgrade ? "#ED7470" : "transparent",
                      "&.Mui-selected": {
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        },
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "inherit",
                        minWidth: "40px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: isSelected || isUpgrade ? 600 : 400,
                        fontSize: "0.95rem",
                      }}
                    />
                  </ListItemButton>
                </Link>
              );
            })}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
