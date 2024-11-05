import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ForumIcon from "@mui/icons-material/Forum";
import { grey } from "@mui/material/colors";
import logo from "@assets/logo3.png";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem component={Link} href="/">
          <ListItemIcon>
            <HomeIcon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem component={Link} href="/servicios">
          <ListItemIcon>
            <MiscellaneousServicesIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Servicios" />
        </ListItem>
        <ListItem component={Link} href="/contactanos">
          <ListItemIcon>
            <ForumIcon  color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Contáctanos" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" className="img-logo" />
          </Box>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                gap: 8,
              }}
            >
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
                href="/partners"
                className="navbar-item"
              >
                <ForumIcon sx={{ color: grey[50] }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Partners
                </Typography>
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="/conocenos"
                className="navbar-item"
              >
                <ForumIcon sx={{ color: grey[50] }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Nosotros
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
                  Contáctanos
                </Typography>
              </IconButton>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};