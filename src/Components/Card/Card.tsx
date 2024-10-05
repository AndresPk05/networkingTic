import React from "react";
import { CardProps } from "./CardModel";
import { useCard } from "./useCard";
import { Modal } from "../Modal/Modal";
import "./cardStyle.css";

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
      <button onClick={handleCardClick}>Mas Información</button>
      {isModalOpen && (
        <Modal title={modalTitle} text={modalText} onClose={closeModal} />
      )}
    </article>
  );
};
