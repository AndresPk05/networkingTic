import React from "react";
import { CardProps } from "./CardModel";
import { useCard } from "./useCard";
import { ModalInfo } from "../Modal/ModalInfo";
import "./cardStyle.css";
import { Button } from "@mui/material";

export const Card: React.FC<CardProps> = ({
  imageSrc,
  text,
  modalTitle,
  modalText,
  altImage,
}) => {
  const { isModalOpen, handleCardClick, closeModal } = useCard();

  return (
    <article className="card">
      <img src={imageSrc} alt={altImage} />
      <p>{text}</p>
      <Button onClick={handleCardClick} variant="contained">
        Mas Información
      </Button>

      <ModalInfo
        title={modalTitle}
        text={modalText}
        onClose={closeModal}
        open={isModalOpen}
      />
    </article>
  );
};
