import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../src/styles/global.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
const theme = createTheme({
  typography: {
    fontFamily: "Regular",
    h1: { fontFamily: "Regular" },
    h2: { fontFamily: "Regular" },
    h3: { fontFamily: "Regular" },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
