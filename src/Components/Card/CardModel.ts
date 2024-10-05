export interface CardProps {
  imageSrc: string;
  text: string;
  modalTitle: string;
  modalText: string;
  altImage?: string;
}

export interface CardPropsWithId extends CardProps {
  id: string;
}
