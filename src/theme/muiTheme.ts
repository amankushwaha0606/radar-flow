import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0B1A44" }, // deep navy (sidebar in figma)
    secondary: { main: "#FF8A80" }, // coral/pink buttons
    error: { main: "#FF8A80" },
    background: { default: "#F7F7F7" },
  },
  typography: {
    fontFamily: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(","),
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 999 },
        containedError: { color: "#fff" },
      },
    },
  },
});

export default theme;
