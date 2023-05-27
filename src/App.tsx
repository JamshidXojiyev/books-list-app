import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      "50": "#EFE6FD",
      "100": "#CEB0FA",
      "200": "#B78AF7",
      "300": "#9654F4",
      "400": "#8133F1",
      "500": "#6200EE",
      "600": "#5900D9",
      "700": "#4600A9",
      "800": "#360083",
      "900": "#290064",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
