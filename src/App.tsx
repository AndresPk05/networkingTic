import "./global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { FloatingButtons } from "./Components/FloatingButtons/FloatingButton";
import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Contactanos } from "./Pages/Contactanos";
import { Nosotros } from "./Pages/Nosotros";
import { Partners } from "./Pages/Partners";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0077B6",
      contrastText: "#ffffff", // Color de texto blanco para botones primarios
    },
    secondary: {
      main: green[500],
      contrastText: "#ffffff", // Color de texto blanco para botones secundarios
    },
    text: {
      primary: "#ffffff", // Color de texto principal blanco
      secondary: "#000000", // Color de texto secundario blanco
    },
    action: {
      active: "#ffffff", // Color de texto activo blanco
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Contactanos />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/conocenos" element={<Nosotros />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </div>
        <FloatingButtons />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
