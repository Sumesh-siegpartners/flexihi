export interface DataTableProps {
  filterModal: boolean;
  data: any;
  setfilterModal: Function;
  setmenuItem: Function;
  columns: any;
  refreshOnDelete: Function;
}

export interface AddUnitDrawerProps {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  data: any;
}

export interface FilterDrawerProps {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  idnumber: string;
  setidnumber: (value: string) => void;
  unitName: string;
  setunitName: (value: string) => void;
}

export interface customizedColumnProp {
  isOpen: boolean;
  toggleDrawer: Function;
  columns: any;
  setColumns: any;
  applyBtn: any;
}

export interface searchDataProps {
  text: string;
  setText: Function;
}
