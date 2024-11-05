import { CardPropsWithId } from "../Components/Card/CardModel";
import { v4 as uuidv4 } from "uuid";
import security from '@assets/sheel.jpg'
import network from '@assets/redes.jpg'
import virtualization from '@assets/virtualizacion.jpg'
import maintanence from '@assets/maintanence.jpg'
import virtualizacion_modal from '@assets/virtualizacion_popup.jpg'
import seguridad_it from '@assets/seguridadIT_popup.jpg'
import redes_popup from '@assets/redes_popup.jpg'
import mantenimiento_popup from'@assets/mantenimiento_2_popup.jpg'

export const cardsData: CardPropsWithId[] = [
    {
        id: uuidv4(),
        imageSrc: virtualization,
        text: "Sistemas de Virtualizacion ",
        modalTitle: "Sistemas de Virtualizacion",
        modalText: "Transforma tu infraestructura IT con nuestros servicios de virtualización, diseñados para maximizar la eficiencia, reducir costos y ofrecerte la flexibilidad que tu negocio necesita. Enfocados en la responsabilidad y seguridad, nuestros expertos en virtualización aseguran que tus recursos estén siempre optimizados y protegidos, permitiéndote escalar sin límites.",
        modalImage: virtualizacion_modal,
        altImage: "Sistemas de Virtualizacion"
      },
      {
        id: uuidv4(),
        imageSrc: network,
        text: "Redes de Datos y Seguridad en Redes",
        modalTitle: "Redes de Datos y Seguridad en Redes",
        modalImage: redes_popup,
        modalText: "Optimiza y protege tu infraestructura con nuestros servicios avanzados de Redes de Datos y Seguridad en Redes, diseñados para adaptarse a las necesidades dinámicas de tu negocio. Nuestra solución combina lo mejor de la virtualización con las mejores prácticas de seguridad, asegurando una conectividad eficiente, escalable y segura.",
        altImage: "Redes de Datos y Seguridad en Redes"
      },
      {
        id: uuidv4(),
        imageSrc: maintanence,
        text: "Mantenimiento Hardware",
        modalTitle: "Mantenimiento Hardware",
        modalImage: mantenimiento_popup,
        modalText: "Asegura el rendimiento óptimo y la durabilidad de tus equipos con nuestro servicio de Mantenimiento de Hardware, diseñado para proteger tus activos físicos y potenciar tu infraestructura virtualizada. Nuestro equipo experto cuida cada detalle, garantizando que tus dispositivos y sistemas funcionen de manera ininterrumpida y eficiente.",
        altImage: "Mantenimiento Hardware"
      },
      {
        id: uuidv4(),
        imageSrc: security,
        text: "Seguridad IT",
        modalTitle: "Seguridad IT",
        modalText: "En un mundo digital en constante evolución, proteger la infraestructura y los datos de tu empresa es fundamental. Nuestro servicio de Seguridad IT ofrece una combinación de tecnologías avanzadas y prácticas responsables para crear un entorno seguro y escalable. Aprovechamos los beneficios de la virtualización para brindarte una solución flexible, eficiente y preparada para las amenazas modernas.",
        modalImage: seguridad_it,
        altImage: "Seguridad IT"
      }
];