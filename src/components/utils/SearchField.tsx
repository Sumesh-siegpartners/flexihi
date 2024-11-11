import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { searchDataProps } from "../../types/UnitInterface";

const SearchField: React.FC<searchDataProps> = ({ text, setText }) => {
  return (
    <div>
      <SearchIcon sx={styles.searchIcon} />
      <TextField
        size="small"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={styles.textField}
      />
    </div>
  );
};

export default SearchField;

const styles = {
  searchIcon: {
    marginY: 1,
    fontSize: 18,
  },
  textField: {
    width: 200,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      fontSize: "0.8rem",
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "0.8rem",
      opacity: 0.6,
    },
  },
};
