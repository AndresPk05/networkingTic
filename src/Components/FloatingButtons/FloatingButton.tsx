import { Box, createTheme, ThemeProvider } from "@mui/material";
import Fab from "@mui/material/Fab";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./floatingButtonStyles.css";
import { useFloatingButton } from "./useFloatingButton";
import { blue, green } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

export const FloatingButtons = () => {
  const { handleOpenWhastapp } = useFloatingButton();
  return (
    <ThemeProvider theme={theme}>
      <Box className="floating-buttons">
        <Fab
          color="primary"
          aria-label="contactanos"
          className="floating-button"
          onClick={handleOpenWhastapp}
        >
          <QuestionAnswerIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="whatsapp"
          className="floating-button floating-button-whatsapp"
          onClick={handleOpenWhastapp}
        >
          <WhatsAppIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};
