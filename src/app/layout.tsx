"use client";

import { ReactNode, useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/muiTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "@/components/layout/AppLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    import("../mocks/browser").then(({ worker }) => {
      worker.start({
        onUnhandledRequest: "bypass", // avoids noisy console logs
      });
    });
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <AppLayout>{children}</AppLayout>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
