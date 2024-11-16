import { Container, Grid2 } from "@mui/material";
import principal from "../../assets/services.png";
import { cardsData } from "../../mocks/CardMock";
import { Card } from "../../Components/Card/Card";
import { ContactForm } from "../../Components/ContactForm/ContactForm";
import "./Home.css";
import AnimatedGraphBackground from "../../Components/NetWork/NetworkAnimation";

export const Home: React.FC = () => {
  return (
    <main>
      <AnimatedGraphBackground
        width="100%"
        height="100%"
        nodeColor="#3498db"
        edgeColor="#7f8c8d"
        backgroundColor="#ffffff"
      />
      <article>
        <section className="section-principal container">
          <img
            src={principal}
            alt="imagen servicios IT"
            className="slide-fwd-right"
          />
          <section className="text-focus-in">
            <h1>NETWORKING TIC</h1>
            <p>
              Automatización, Seguridad y Soporte 24/7 Conéctate con la
              innovación y descubre cómo podemos hacer que tu infraestructura
              funcione de manera eficiente, segura y con total flexibilidad.
              ¡Contáctanos y comienza a innovar hoy mismo!
            </p>
          </section>
        </section>
        <hr />
        <section>
          <Container>
            <Grid2 container spacing={1}>
              {cardsData.map((card) => (
                <Grid2 key={card.id} size={{ md: 3, xs: 12 }}>
                  <Card key={card.id} {...card} />
                </Grid2>
              ))}
            </Grid2>
          </Container>
        </section>
        <section>
          <ContactForm />
        </section>
      </article>
    </main>
  );
};
