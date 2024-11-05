import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { ContactForm } from "../../Components/ContactForm/ContactForm";

export const Contactanos: React.FC = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="body1" gutterBottom>
          ¿Tienes alguna duda o comentario? Escríbenos y nos pondremos en contacto contigo lo antes posible.
        </Typography>
        <ContactForm />
      </Box>
    </Container>
  );
};