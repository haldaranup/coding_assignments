import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="darkIcon">
          <IconButton id="dark-mode" onClick={() => setDarkMode(!darkMode)}>
            {theme.palette.mode == "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        <MainRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
