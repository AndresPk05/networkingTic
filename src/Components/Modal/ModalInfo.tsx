import { Box, Grid2, Modal, Typography } from "@mui/material";
import { ModalImageProps, ModalProps } from "./ModalModel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "max-width": "70rem",
  bgcolor: "background.paper",
  border: "2px solid #eeebeb",
  "border-radius": 12,
  boxShadow: 24,
  p: 4,
};

export const ModalInfo: React.FC<ModalProps> = ({
  title,
  text,
  onClose,
  open,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

export const ModalService: React.FC<ModalImageProps> = ({
  title,
  text,
  onClose,
  open,
  imageSrc,
  altImage,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <img src={imageSrc} alt={altImage} />
          </Grid2>
          <Grid2 size={{ md: 6, xs: 12 }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {text}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Modal>
  );
};
