import "./global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { FloatingButtons } from "./Components/FloatingButtons/FloatingButton";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue, green } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: green,
  },
  typography:{
    fontFamily: 'Open Sans',
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <FloatingButtons />
    </ThemeProvider>
  );
}

export default App;
