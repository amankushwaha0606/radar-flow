"use client";

import { ReactNode, useState } from "react";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import React from "react";

const drawerWidth = 240;
const appBarHeight = 72;

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Do NOT render the app shell on auth routes
  if (pathname === "/" || pathname?.startsWith("/auth")) {
    return <>{children}</>;
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9fafb" }}>
      <Topbar drawerWidth={drawerWidth} appBarHeight={appBarHeight} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box sx={{ flexGrow: 1, p: 3, mt: `${appBarHeight}px` }}>{children}</Box>
    </Box>
  );
}
