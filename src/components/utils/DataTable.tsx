import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Badge,
  Button,
  Checkbox,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomizeIcon from "@mui/icons-material/Tune";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { DataTableProps } from "../../types/UnitInterface";
import UnitSkeleton from "../../layout/skeletons/UnitSkeleton";
import SearchField from "./SearchField";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchWorking from "./validators/warning/SearchWorking";
import CancelIcon from "@mui/icons-material/Cancel";
import ApiManager from "../../api/ApiManager";
import EditUnitDrawer from "../unit/EditUnitDrawer";

const DataTable: React.FC<DataTableProps> = ({
  filterModal,
  data,
  setfilterModal,
  setmenuItem,
  columns,
  refreshOnDelete,
}) => {
  const [searchText, setsearchText] = React.useState("");
  const [selectedRow, setselectedRow] = React.useState([]);
  const [decimal, setdecimal] = React.useState(false);
  const [integer, setinteger] = React.useState(false);
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  // custom filter
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item: string) => {
    setmenuItem(item);
    setAnchorEl(null);
  };

  // type filter
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const isMenuOpen = Boolean(menuAnchor);
  const handleTypeClick = (event: any) => {
    setMenuAnchor(event.currentTarget);
  };
  const handletypeClose = () => {
    setMenuAnchor(null);
  };

  // Memoized filtered data
  const filteredData = React.useMemo(() => {
    return data.filter((item: { name: string; numberType: string }) => {
      // Apply search filter
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      // Apply number type filter
      const matchesType =
        (!decimal && !integer) ||
        (decimal && item.numberType === "Decimal") ||
        (integer && item.numberType === "Integer");

      return matchesSearch && matchesType;
    });
  }, [data, searchText, decimal, integer]);

  const handleRowSelection = (selectionModel: any) => {
    const selectedData = data.filter((row: any) =>
      selectionModel.includes(row.id)
    );
    setselectedRow(selectedData);
  };

  function CustomNoRowsOverlay() {
    return <SearchWorking btnClick={() => setsearchText("")} />;
  }

  const deleteUnit = () => {
    const ids = selectedRow.map((item: { id: number }) => item.id);
    const body = {
      ids: ids,
    };

    ApiManager.deleteUnit(body).then((resp) => {
      console.log("delete unit", resp.data);
      refreshOnDelete();
    });
  };

  const toggleDrawer = React.useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    },
    []
  );

  return (
    <div style={styles.container}>
      <div style={{ marginTop: 2 }}>
        {selectedRow.length == 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 14,
            }}
          >
            {/* search  */}
            <SearchField text={searchText} setText={setsearchText} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              {/* type */}
              <div onClick={handleTypeClick}>
                <label style={{ fontSize: 12 }}>type</label>
                {isMenuOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </div>
              <div>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={menuAnchor}
                  open={isMenuOpen}
                  onClose={() => handletypeClose()}
                  style={{
                    margin: 0,
                    borderRadius: "18px",
                  }}
                  MenuListProps={{
                    style: { padding: 0 },
                  }}
                >
                  <MenuItem style={{ fontSize: 12, color: "gray" }}>
                    <Checkbox
                      checked={decimal}
                      onChange={() => setdecimal(!decimal)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    Decimal
                  </MenuItem>
                  <MenuItem style={{ fontSize: 12, color: "gray" }}>
                    <Checkbox
                      checked={integer}
                      onChange={() => setinteger(!integer)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    Integer
                  </MenuItem>
                </Menu>
              </div>

              {/* filter */}
              <Badge
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#004080",
                    color: "#ffffff",
                    paddingX: 1,
                    fontSize: 10,
                  },
                }}
              >
                <Tooltip
                  title="custom filter"
                  arrow
                  style={styles.tooltip}
                  onClick={() => setfilterModal(!filterModal)}
                >
                  <FilterListIcon sx={styles.icon} />
                </Tooltip>
              </Badge>

              {/* custom filter  */}
              <Tooltip
                title="custom filter"
                arrow
                style={styles.tooltip}
                onClick={handleClick}
              >
                <MoreHorizIcon sx={styles.icon} />
              </Tooltip>
              <div>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose("")}
                  style={{
                    margin: 0,
                    borderRadius: "8px",
                  }}
                  MenuListProps={{
                    style: { padding: 0 },
                  }}
                >
                  <MenuItem
                    style={{ fontSize: 12, color: "gray" }}
                    onClick={() => handleClose("column")}
                  >
                    <ListItemIcon style={{ minWidth: "24px" }}>
                      <CustomizeIcon style={{ fontSize: "16px" }} />
                    </ListItemIcon>
                    Customize columns
                  </MenuItem>
                  <MenuItem
                    style={{ fontSize: 12, color: "gray" }}
                    onClick={() => handleClose("export")}
                  >
                    <ListItemIcon style={{ minWidth: "24px" }}>
                      <UpgradeIcon style={{ fontSize: "16px" }} />
                    </ListItemIcon>
                    Export
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: 15,
              gap: 10,
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => deleteUnit()}
              sx={{
                textTransform: "none",
                color: "red",
                fontSize: 12,
                borderColor: "lightcoral",
                borderRadius: 2,
                paddingBlock: 0.6,
              }}
              startIcon={<RiDeleteBin6Line size={16} />}
            >
              Delete
            </Button>

            {selectedRow.length == 1 && (
              <Button
                variant="outlined"
                onClick={toggleDrawer(true)}
                sx={{
                  textTransform: "none",
                  color: "#004080",
                  fontSize: 12,
                  borderColor: "#3375A980",
                  borderRadius: 2,
                  paddingBlock: 0.6,
                }}
                startIcon={<MdOutlineEdit />}
              >
                Edit
              </Button>
            )}

            <EditUnitDrawer
              isOpen={isDrawerOpen}
              toggleDrawer={toggleDrawer}
              data={selectedRow[0]}
            />

            <Tooltip
              title="custom filter"
              arrow
              style={styles.tooltip}
              onClick={handleClick}
            >
              <MoreHorizIcon sx={styles.icon} />
            </Tooltip>
          </div>
        )}
      </div>

      {decimal || integer ? (
        <div
          style={{ display: "flex", marginLeft: 14, marginBottom: 10, gap: 10 }}
        >
          {decimal && (
            <div
              style={{
                borderWidth: 1,
                paddingLeft: 8,
                borderRadius: 12,
                borderColor: "#005394",
              }}
            >
              <label style={{ fontSize: 10, color: "#005394" }}>Decimal</label>
              <CancelIcon
                onClick={() => setdecimal(!decimal)}
                style={{ fontSize: 16, margin: 4, color: "#005394" }}
              />
            </div>
          )}
          {integer && (
            <div
              style={{
                borderWidth: 1,
                paddingLeft: 8,
                borderRadius: 12,
                borderColor: "#005394",
              }}
            >
              <label style={{ fontSize: 10, color: "#005394" }}>Integer</label>
              <CancelIcon
                onClick={() => setinteger(!integer)}
                style={{ fontSize: 16, margin: 4, color: "#005394" }}
              />
            </div>
          )}
        </div>
      ) : null}

      {data.length == 0 ? (
        <UnitSkeleton />
      ) : (
        <DataGrid
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0 },
            },
          }}
          sx={styles.dataGrid}
          rowHeight={40}
          columnHeaderHeight={42}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={handleRowSelection}
          slots={{
            noRowsOverlay: CustomNoRowsOverlay,
          }}
        />
      )}
    </div>
  );
};

export default DataTable;

const styles = {
  container: {
    width: "100%",
    height: 420,
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  select: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    color: "black",
    fontSize: "12px",
  },
  tooltip: {
    borderWidth: 1,
    padding: 3,
    borderColor: "#3375A980",
    borderRadius: 4,
  },
  icon: {
    fontSize: 24,
    color: "#004080",
  },
  dataGrid: {
    fontSize: 12,
  },
};
