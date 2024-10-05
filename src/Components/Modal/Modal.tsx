import { ModalProps } from "./ModalModel";

export const Modal: React.FC<ModalProps> = ({ title, text, onClose }) => {
  return (
    <dialog
      className="modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-text"
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 id="modal-title">{title}</h2>
        <p id="modal-text">{text}</p>
      </div>
    </dialog>
  );
};
