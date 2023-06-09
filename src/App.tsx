import { Router } from "./routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BackgroundEffect } from "./styles/global-components";

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
        <Router />
      </ThemeProvider>

      {/* toast message global component */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* background effect */}
      <BackgroundEffect src={require("./assets/images/bg-effects.png")} />
    </>
  );
}

export default App;
