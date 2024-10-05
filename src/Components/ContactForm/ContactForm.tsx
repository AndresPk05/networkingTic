import { Box, Button, Container, Grid2, TextField } from "@mui/material";
import "./ContactForm.css";
import { Formik } from "formik";
import { useContactForm } from "./useContactForm";

export const ContactForm: React.FC = () => {
  const { initialValues, handleOnSubmit } = useContactForm();
  return (
    <section className="container-form">
      <Container>
        <Grid2 container spacing={4}>
          <Grid2 size={{ md: 4, xs: 12 }}>
            <Box>
              <h2>¡Contáctanos!</h2>
              <p>
                ¿Tienes alguna duda o comentario? Escríbenos y nos pondremos en
                contacto contigo lo antes posible.
              </p>
            </Box>
          </Grid2>
          <Grid2 size={{ md: 8, xs: 12 }}>
            <Box>
              <Formik
                initialValues={initialValues}
                onSubmit={async (values, { resetForm }) => {
                  await handleOnSubmit(values);
                  resetForm();
                }}
              >
                {({ values, handleChange, handleSubmit }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <Grid2 container spacing={2}>
                        <Grid2 size={{ md: 6, xs: 12 }}>
                          <TextField
                            type="text"
                            name="Nombre"
                            label="Nombre"
                            value={values.Nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            fullWidth
                            variant="outlined"
                          />
                        </Grid2>
                        <Grid2 size={{ md: 6, xs: 12 }}>
                          <TextField
                            type="email"
                            name="Email"
                            label="Email"
                            value={values.Email}
                            onChange={handleChange}
                            placeholder="Email"
                            fullWidth
                            variant="outlined"
                          />
                        </Grid2>
                        <Grid2 size={{ md: 6, xs: 12 }}>
                          <TextField
                            type="text"
                            name="Telefono"
                            label="Teléfono"
                            value={values.Telefono}
                            onChange={handleChange}
                            placeholder="Teléfono"
                            fullWidth
                            variant="outlined"
                          />
                        </Grid2>
                        <Grid2 size={{ md: 6, xs: 12 }}>
                          <TextField
                            type="text"
                            name="Ciudad"
                            label="Ciudad"
                            value={values.Ciudad}
                            onChange={handleChange}
                            placeholder="Ciudad"
                            fullWidth
                            variant="outlined"
                          />
                        </Grid2>
                        <Grid2 size={{ md: 12, xs: 12 }}>
                          <TextField
                            name="Mensaje"
                            label="Mensaje"
                            value={values.Mensaje}
                            onChange={handleChange}
                            placeholder="Mensaje"
                            multiline
                            fullWidth
                            variant="outlined"
                          />
                        </Grid2>
                        <Button type="submit" variant="contained">
                          Enviar
                        </Button>
                      </Grid2>
                    </form>
                  );
                }}
              </Formik>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </section>
  );
};
