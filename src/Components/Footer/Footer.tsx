import { Facebook } from "@mui/icons-material";
import { Box, Container, Grid2, Link, Typography } from "@mui/material";
import logo from "@assets/logo4.jpeg";
import '../Footer/footerStyle.css'
import { TikTokIcon } from "../IconsCustom/TikTokIcon";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Box className="footer-logo">
              <img src={logo} alt="Logo de la empresa" />
            </Box>
          </Grid2>
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Box className="footer-links">
              <Link href="/" color="inherit" underline="none">
                Inicio
              </Link>
              <Link href="/servicios" color="inherit" underline="none">
                Servicios
              </Link>
              <Link href="/quien-somos" color="inherit" underline="none">
                Quién Somos
              </Link>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Box className="footer-social">
              <Typography variant="h6">Síguenos</Typography>
              <Link
                href="https://www.facebook.com/profile.php?id=100091906721223"
                color="inherit"
                underline="none"
              >
                <Facebook />
              </Link>
              <Link
                href="https://vm.tiktok.com/ZMhx1pWLA/"
                color="inherit"
                underline="none"
              >
                <TikTokIcon />
              </Link>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};
