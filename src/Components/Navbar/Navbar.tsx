import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ForumIcon from "@mui/icons-material/Forum";
import { grey } from "@mui/material/colors";

export const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box className="navbar-item">
          <img src={logo} alt="logo"  />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, gap: 10 }}>
          <IconButton
            color="inherit"
            component={Link}
            href="/"
            className="navbar-item"
          >
            <HomeIcon sx={{ color: grey[50] }} />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Inicio
            </Typography>
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="/servicios"
            className="navbar-item"
          >
            <MiscellaneousServicesIcon sx={{ color: grey[50] }} />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Servicios
            </Typography>
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href="/contactanos"
            className="navbar-item"
          >
            <ForumIcon sx={{ color: grey[50] }} />
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Contactanos
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
