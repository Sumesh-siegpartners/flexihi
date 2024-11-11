import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import DataTable from "../../../components/utils/DataTable";
import AddUnitDrawer from "../../../components/unit/AddUnitDrawer";
import FilterDrawer from "../../../components/unit/FilterDrawer";
import CustomizedColumn from "../../../components/unit/CustomizedColumn";
import ApiManager from "../../../api/ApiManager";
import { dateFormatorWithTime } from "../../../components/utils/Formator";

const Units = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [filterDrawer, setfilterDrawer] = useState(false);
  const [idNumber, setidNumber] = useState("");
  const [unitName, setunitName] = useState("");
  const [selectedMenu, setselectedMenu] = useState("");
  const [unitList, setunitList] = useState([]);
  const [filterUnit, setfilterUnit] = useState([]);

  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID", flex: 1, visible: true },
    { field: "name", headerName: "NAME", flex: 1, visible: true },
    { field: "numberType", headerName: "TYPE", flex: 1, visible: true },
    {
      field: "createdAt",
      headerName: "CREATED AT",
      flex: 1,
      renderCell: (params: any) => {
        const formattedDate = dateFormatorWithTime(params.formattedValue);
        return <span>{formattedDate}</span>;
      },
      visible: true,
    },
    {
      field: "updatedAt",
      headerName: "UPDATED AT",
      flex: 1,
      renderCell: (params: any) => {
        const formattedDate = dateFormatorWithTime(params.formattedValue);
        return <span>{formattedDate}</span>;
      },
      visible: true,
    },
  ]);

  const [filtered_columns, setfiltered_columns] = useState<Boolean>(false);
  const [filtered_columns_data, setfiltered_columns_data] = useState(columns);

  useEffect(() => {
    getUnitList();
  }, []);

  const getUnitList = () => {
    ApiManager.getUnitList().then((resp) => {
      if (resp?.data?.status == true) {
        setunitList(resp?.data?.data);
      }
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
      getUnitList();
    },
    []
  );

  const filterDraweraAction = React.useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setfilterDrawer(open);
    },
    []
  );

  const customizedColumnAction = () => {
    setselectedMenu("");
  };

  const filterIdNumber = (val: any) => {
    setidNumber(val);
    const isFilter = unitList.filter((v: any) => v.id == val);
    setfilterUnit(isFilter);
  };

  return (
    <div className="p-2">
      <div style={styles.addButtonWrapper}>
        <Button
          onClick={toggleDrawer(true)}
          variant="contained"
          sx={styles.mainAddButton}
        >
          + Add Unit
        </Button>
      </div>
      <div className="mt-4">
        <DataTable
          filterModal={filterDrawer}
          data={filterUnit.length > 0 ? filterUnit : unitList}
          columns={
            filtered_columns
              ? filtered_columns_data.filter((col) => col.visible)
              : columns
          }
          setfilterModal={(e: boolean) => setfilterDrawer(e)}
          setmenuItem={(e: string) => setselectedMenu(e)}
          refreshOnDelete={() => getUnitList()}
        />
      </div>

      <AddUnitDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        data={undefined}
      />

      <FilterDrawer
        isOpen={filterDrawer}
        toggleDrawer={filterDraweraAction}
        idnumber={idNumber}
        setidnumber={(val: any) => filterIdNumber(val)}
        unitName={unitName}
        setunitName={setunitName}
      />

      <CustomizedColumn
        isOpen={selectedMenu === "column" && true}
        toggleDrawer={customizedColumnAction}
        columns={filtered_columns_data}
        setColumns={(val: any) => setfiltered_columns_data(val)}
        applyBtn={() => {
          setfiltered_columns(true), setselectedMenu("");
        }}
      />
    </div>
  );
};

export default Units;

const styles = {
  addButtonWrapper: { display: "flex", justifyContent: "flex-end" },
  mainAddButton: {
    backgroundColor: "#005394",
    borderRadius: 3,
    color: "white",
    fontSize: 12,
    textTransform: "none",
    "&:hover": { backgroundColor: "#004080" },
  },
};
