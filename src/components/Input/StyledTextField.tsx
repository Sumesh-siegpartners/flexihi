import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledTextInput } from "../../types/Input";
import SearchIcon from "@mui/icons-material/Search";

// Move this outside of the component
const StyledTextFieldComponent = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "7px",
    backgroundColor: "white",
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: "#bdbdbd",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9e9e9e",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#666666",
    "&.Mui-focused": {
      color: "#666666",
    },
  },
  "& .MuiInputBase-input": { fontSize: "0.8rem" },
  "& .MuiInputBase-input::placeholder": { fontSize: "0.8rem" },
});

export const StyledTextField: React.FC<StyledTextInput> = ({
  label,
  value,
  onChangeValue,
}) => {
  return (
    <div className="w-full mt-2 ">
      <StyledTextFieldComponent
        fullWidth
        id="unitname"
        label={label}
        variant="outlined"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        InputLabelProps={{
          sx: {
            fontSize: "0.9rem",
            fontWeight: "400",
            textAlign: "center",
          },
        }}
      />
    </div>
  );
};

export const SearchInputField: React.FC<StyledTextInput> = ({
  label,
  value,
  onChangeValue,
}) => {
  return (
    <div className="w-full mt-2 mb-2">
      <StyledTextFieldComponent
        fullWidth
        placeholder={label}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        sx={{
          "& .MuiInputBase-input": { fontSize: "0.8rem" },
          "& .MuiInputBase-input::placeholder": { fontSize: "0.8rem" },
        }}
        InputLabelProps={{
          sx: {
            fontSize: "0.6rem",
            fontWeight: "400",
            textAlign: "center",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ width: 20 }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
