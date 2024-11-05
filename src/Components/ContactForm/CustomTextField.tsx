import { TextField } from "@mui/material";
import { TField } from "./ContactModel";

export const CustomTextField: React.FC<TField> = ({
    type,
    name,
    label,
    value,
    onChange,
    placeholder,
    multiline,
}) => {
    return (
        <TextField
        type={type}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        multiline={multiline}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black",
            },
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
            color: "black",
          },
          "& .MuiInputLabel-root": {
            color: "black",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        }}
      />
    );
};
