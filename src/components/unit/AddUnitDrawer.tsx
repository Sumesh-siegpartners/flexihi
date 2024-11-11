import React, { useState } from "react";
import { Drawer, Button, Radio } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddUnitDrawerProps } from "../../types/UnitInterface";
import Colors from "../../theme/Colors";
import { StyledTextField } from "../Input/StyledTextField";
import ApiManager from "../../api/ApiManager";

const AddUnitDrawer: React.FC<AddUnitDrawerProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  const [input, setInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const [inputError, setinputError] = useState(false);
  const [typeError, settypeError] = useState(false);

  const addUnit = () => {
    if (input == "") {
      setinputError(true);
    } else if (selectedValue == "") {
      settypeError(true);
    } else {
      const body = {
        name: input,
        numberType: selectedValue,
      };
      ApiManager.addUnit(body)
        .then((resp) => {
          if (resp.data.status == true) {
            console.log("unit added", resp.data);
            toggleDrawer(false);
          } else {
            console.log("error");
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

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
          <label style={styles.drawerTitle}>Add Unit</label>
          <div className="cursor-pointer" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </div>
        </div>
        <div style={styles.divider} />
        <div style={styles.contentContainer}>
          <StyledTextField
            value={input}
            onChangeValue={(e) => {
              setInput(e), setinputError(false);
            }}
            label={"Unit name"}
          />
          {inputError && (
            <label style={{ color: "red", fontSize: 10 }}>
              please enter unit name
            </label>
          )}

          <h5 style={styles.numberTypeLabel}>Number type</h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: selectedValue === "Decimal" ? 2 : 0.5,
              borderRadius: 6,
              marginTop: 10,
              alignItems: "flex-start",
              padding: 5,
              backgroundColor:
                selectedValue === "Decimal"
                  ? "rgba(239, 108, 0, 0.2)"
                  : "transparent",
              borderColor:
                selectedValue === "Decimal"
                  ? Colors.light_orange
                  : Colors.light_grey,
            }}
          >
            <Radio
              checked={selectedValue === "Decimal"}
              onChange={() => setSelectedValue("Decimal")}
              value="Decimal"
              name="radio-buttons"
              sx={{
                "&.Mui-checked": {
                  color: Colors.light_orange,
                },
              }}
            />
            <div style={styles.radioLabelContainer}>
              <h2 style={styles.radioTitle}>Decimal</h2>
              <h6 style={styles.radioSubtitle}>
                Use this for values that have a decimal value, like Kilograms
                and Liters
              </h6>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderWidth: selectedValue === "Integer" ? 2 : 0.5,
              borderRadius: 6,
              marginTop: 10,
              alignItems: "flex-start",
              padding: 5,
              backgroundColor:
                selectedValue === "Integer"
                  ? "rgba(239, 108, 0, 0.2)"
                  : "transparent",
              borderColor:
                selectedValue === "Integer"
                  ? Colors.light_orange
                  : Colors.light_grey,
            }}
          >
            <Radio
              checked={selectedValue === "Integer"}
              onChange={() => setSelectedValue("Integer")}
              value="Integer"
              sx={{
                "&.Mui-checked": {
                  color: Colors.light_orange,
                },
              }}
              name="radio-buttons"
            />
            <div style={styles.radioLabelContainer}>
              <h2 style={styles.radioTitle}>Integer</h2>
              <h6 style={styles.radioSubtitle}>
                Use this for values without a decimal point, like pieces or
                cartons
              </h6>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Button
              onClick={toggleDrawer(false)}
              variant="outlined"
              sx={styles.cancelButton}
            >
              Cancel
            </Button>
            <Button onClick={addUnit} variant="contained" sx={styles.addButton}>
              Add unit
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AddUnitDrawer;

const styles = {
  drawerContainer: { width: 360 },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: 14,
  },
  drawerTitle: { color: "black", fontWeight: "600" },
  divider: { borderWidth: 0.5 },
  contentContainer: { margin: 20 },
  textField: {
    "& .MuiInputBase-input": {
      fontSize: "0.8rem",
      fontWeight: "400",
      color: "black", // Optional: adjust font weight
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "0.2rem",
      textAlign: "center", // Ensures the placeholder text is centered
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px", // Optional: border radius for rounded corners
    },
  },
  numberTypeLabel: {
    fontSize: 12,
    color: "black",
    marginTop: 14,
    fontWeight: 400,
  },
  radioContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
    alignItems: "flex-start",
  },
  radioLabelContainer: { marginTop: 12, marginBottom: 12, Padding: 5 },
  radioTitle: { fontSize: 12 },
  radioSubtitle: { fontSize: 10, color: "gray" },

  cancelButton: {
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 600,
    textTransform: "none",
  },
  addButton: {
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 600,
    textTransform: "none",
    width: 235,
  },
  drawer: {
    "& .MuiDrawer-paper": {
      top: "10%",
      borderTopLeftRadius: 4,
      height: "90%",
      boxShadow: "4",
    },
  },
};
