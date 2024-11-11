import React from "react";
import { Button, Drawer, Switch } from "@mui/material";
import { customizedColumnProp } from "../../types/UnitInterface";
import CloseIcon from "@mui/icons-material/Close";
import { BiChevronDown } from "react-icons/bi";
import Colors from "../../theme/Colors";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { SubmitBtn } from "../utils/Buttons";

const CustomizedColumn: React.FC<customizedColumnProp> = ({
  isOpen,
  toggleDrawer,
  columns,
  setColumns,
  applyBtn
}) => {
  const toggleColumnVisibility = (field: any) => {
    setColumns((prevColumns: any[]) =>
      prevColumns.map((col) =>
        col.field === field ? { ...col, visible: !col.visible } : col
      )
    );
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
      onClose={() => toggleDrawer(false)}
    >
      <div style={styles.drawerContainer}>
        <div style={styles.drawerHeader}>
          <label style={styles.drawerTitle}>Customize column</label>
          <div onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </div>
        </div>
        <div style={styles.divider} />

        <div className="flex p-5 flex-col gap-3 ">
          {columns.map((setting: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 px-3 border  bg-[#F8F9FA] rounded-xl transition-colors"
            >
              <button className="flex items-center gap-2 text-[12px] capitalize  font-medium">
                <DragHandleIcon />
                {setting.headerName}
              </button>
              <Switch
                checked={setting.visible}
                size="small"
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: Colors.dark_orange, // Custom color when checked
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: Colors.dark_orange, // Custom color for the track when checked
                  },
                }}
                onChange={() => toggleColumnVisibility(setting.field)}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            position: "absolute",
            bottom: 10,
            width:'100%',
            alignSelf:'center',
            paddingLeft:'1rem',
            paddingRight: '1rem'
          }}
        >
          <Button
            variant="outlined"
            sx={styles.cancelButton}
          >
            Cancel
          </Button>

          <SubmitBtn name={"Apply"} onClick={() => applyBtn()} />
        </div>
      </div>
    </Drawer>
  );
};

export default CustomizedColumn;

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
  cancelButton: {
    borderRadius: 2,
    fontSize: 12,
    fontWeight: 600,
    textTransform: "none",
  },
};
