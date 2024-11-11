import React, { useState } from "react";
import { Box, Checkbox, Drawer, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FilterDrawerProps } from "../../types/UnitInterface";
import Calender from "../../assets/calender.svg";
import { SearchInputField } from "../Input/StyledTextField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  toggleDrawer,
  idnumber,
  setidnumber,
  unitName,
  setunitName,
}) => {
  const [decimalCheck, setdecimalCheck] = useState(false);
  const [integerCheck, setintegerCheck] = useState(false);

  return (
    <Drawer
      sx={styles.drawer}
      ModalProps={{
        BackdropProps: {
          invisible: true,
        },
      }}
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      <div style={styles.drawerContainer}>
        <div style={styles.drawerHeader}>
          <label style={styles.drawerTitle}>Filter</label>
          <div onClick={toggleDrawer(false)}>
            <CloseIcon />
          </div>
        </div>
        <div style={styles.divider} />

        <div style={styles.contentContainer}>
          <SearchInputField
            value={idnumber}
            onChangeValue={(e) => setidnumber(e)}
            label={"Id number"}
          />

          <SearchInputField
            value={unitName}
            onChangeValue={(e) => setunitName(e)}
            label={"Unit name"}
          />
        </div>

        <div className="mx-5 self-center">
          <label style={{ fontSize: 12, color: "gray" }}>Created at</label>
          <DateRangePicker
            localeText={{ start: "from", end: "to" }}
            sx={{
              marginTop: 1,
              "& .MuiInputBase-input": {
                fontSize: "12px", // Change font size of the date text
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px", // Change font size of the placeholder text
              },
            }}
          />
        </div>

        <div className="mx-5 self-center mt-2">
          <label style={{ fontSize: 12, color: "gray", }}>Updated at</label>
          <DateRangePicker
            localeText={{ start: "from", end: "to" }}
            sx={{
              marginTop: 1,
              "& .MuiInputBase-input": {
                fontSize: "12px", // Change font size of the date text
              },
              "& .MuiInputLabel-root": {
                fontSize: "14px", // Change font size of the placeholder text
              },
            }}
          />
        </div>

        {/* <div style={styles.calenderInput}>
          <div>
            <label style={{ fontSize: 10, color: "gray" }}>Updated at</label>
            <div>
              <label style={{ fontSize: 12 }}>From - To</label>
            </div>
          </div>
          <img src={Calender} />
        </div> */}

        <div style={{ margin: 20 }}>
          <label style={{ fontSize: 14 }}>Type</label>
          <div>
            <Checkbox
              checked={decimalCheck}
              onChange={() => setdecimalCheck(!decimalCheck)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                "&.Mui-checked": {
                  color: "#EF6C00",
                },
              }}
            />
            <label style={{ fontSize: 12, fontWeight: "100" }}>Decimal</label>
          </div>
          <div>
            <Checkbox
              checked={integerCheck}
              onChange={() => setintegerCheck(!integerCheck)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                "&.Mui-checked": {
                  color: "#EF6C00",
                },
                borderRadius: "4px",
              }}
            />
            <label style={{ fontSize: 12, fontWeight: "100" }}>Integer</label>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;

const styles = {
  drawer: {
    "& .MuiDrawer-paper": {
      top: "10%",
      borderTopLeftRadius: 4,
      height: "90%",
      boxShadow: "4",
    },
  },
  drawerContainer: { width: 360 },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: 14,
  },
  drawerTitle: { color: "black", fontWeight: "600" },
  divider: { borderWidth: 0.5 },
  contentContainer: { margin: 20, marginBottom: 5 },
  textField: {
    "& .MuiInputBase-input": { fontSize: "0.8rem" },
    "& .MuiInputBase-input::placeholder": { fontSize: "0.8rem" },
  },
  calenderInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    margin: 20,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    justifyContent: "space-between",
  },
};
