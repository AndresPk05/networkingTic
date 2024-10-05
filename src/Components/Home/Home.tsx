import principal from "../../assets/services.jpg";
import { cardsData } from "../../mocks/CardMock";
import { Card } from "../Card/Card";
import "./Home.css";

export const Home: React.FC = () => {
  return (
    <main>
      <article className="container">
        <section className="section-principal">
          <img src={principal} alt="imagen servicios IT" className="slide-fwd-right" />
          <section className="text-focus-in">
            <p>
              ¡Optimiza tu negocio con soluciones tecnológicas a la medida!
              Transforma tus procesos con nuestros servicios IT personalizados.
              Desde la gestión de infraestructura hasta el desarrollo de
              software, nuestro equipo de expertos está listo para llevar tu
              empresa al siguiente nivel. Confía en la tecnología para crecer
              más rápido y mejor. 🚀
            </p>
            <br />
            <p>
              Automatización, Seguridad y Soporte 24/7 Conéctate con la
              innovación y descubre cómo podemos hacer que tu infraestructura
              funcione de manera eficiente, segura y con total flexibilidad.
              ¡Contáctanos y comienza a innovar hoy mismo!
            </p>
          </section>
        </section>
        <hr />
        <section className="container-cards">
            {
                cardsData.map(card => <Card key={card.id} {...card} />)
            }
        </section>
      </article>
    </main>
  );
};
