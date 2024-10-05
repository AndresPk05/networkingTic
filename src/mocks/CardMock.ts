import { CardPropsWithId } from "../Components/Card/CardModel";
import { v4 as uuidv4 } from "uuid";
import security from '@assets/sheel.jpg'
import network from '@assets/redes.jpg'
import virtualization from '@assets/virtualizacion.jpg'
import maintanence from '@assets/maintanence.jpg'

export const cardsData: CardPropsWithId[] = [
    {
        id: uuidv4(),
        imageSrc: virtualization,
        text: "Sistemas de Virtualizacion ",
        modalTitle: "Sistemas de Virtualizacion",
        modalText: "Ofrecemos soluciones completas para la gestión de infraestructura IT, asegurando que tus sistemas funcionen de manera eficiente y segura.",
        altImage: "Sistemas de Virtualizacion"
      },
      {
        id: uuidv4(),
        imageSrc: network,
        text: "Redes de Datos y Seguridad en Redes",
        modalTitle: "Redes de Datos y Seguridad en Redes",
        modalText: "Desarrollamos software a medida para satisfacer las necesidades específicas de tu negocio, mejorando la productividad y eficiencia.",
        altImage: "Redes de Datos y Seguridad en Redes"
      },
      {
        id: uuidv4(),
        imageSrc: maintanence,
        text: "Mantenimiento Hardware",
        modalTitle: "Mantenimiento Hardware",
        modalText: "Implementamos soluciones de automatización para optimizar tus procesos empresariales, reduciendo costos y mejorando la precisión.",
        altImage: "Mantenimiento Hardware"
      },
      {
        id: uuidv4(),
        imageSrc: security,
        text: "Seguridad IT",
        modalTitle: "Seguridad IT",
        modalText: "Proveemos servicios de seguridad IT para proteger tus datos y sistemas contra amenazas y vulnerabilidades.",
        altImage: "Seguridad IT"
      }
];