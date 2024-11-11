import Home from "../assets/sidebarIcons/home.svg";
import Dashboard from "../assets/sidebarIcons/dashboard.svg";
import Stock from "../assets/sidebarIcons/stock.svg";
import Product from "../assets/sidebarIcons/product.svg";
import Report from "../assets/sidebarIcons/report.svg";
import Document from "../assets/sidebarIcons/document.svg";
import Printer from "../assets/sidebarIcons/printer.svg";
import Device from "../assets/sidebarIcons/device.svg";
import Promo from "../assets/sidebarIcons/promo.svg";
import Loyalty from "../assets/sidebarIcons/loyalty.svg";
import Payment from "../assets/sidebarIcons/payment.svg";
import Users from "../assets/sidebarIcons/Users.svg";
import Customer from "../assets/sidebarIcons/customer.svg";
import Suppliers from "../assets/sidebarIcons/supplier.svg";
import Roles from "../assets/sidebarIcons/role.svg";
import Branch from "../assets/sidebarIcons/branches.svg";
import Notifi from "../assets/sidebarIcons/notifi.svg";

import Help from "../assets/sidebarIcons/help.svg";
import Setting from "../assets/sidebarIcons/settings.svg";

export const Tablist = [
  {
    id: 0,
    name: "Home",
    icon: Home,
    path: "/home",
    headerTitle: "home",
  },
  {
    id: 1,
    name: "Dashboard",
    icon: Dashboard,
    path: "/dashboard",
    headerTitle: "dashboard",
  },
  {
    id: 2,
    name: "Stock",
    icon: Stock,
    path: "/stock",
    headerTitle: "Stock",
  },
  {
    id: 3,
    name: "Products",
    icon: Product,
    path: "/products",
    headerTitle: "Products",
    sublist: [
      {
        id: 31,
        name: "items",
        path: "/products/items",
        headerTitle: "Products Item",
      },
      {
        id: 32,
        name: "Groups",
        path: "/products/groups",
        headerTitle: "Products groups",
      },
      {
        id: 33,
        name: "Management",
        path: "/products/management",
        headerTitle: "Products management",
        sublist: [
          {
            id: 331,
            name: "Taxex",
            path: "/products/management/taxes",
            headerTitle: "Products management Taxes",
          },
          {
            id: 332,
            name: "Units",
            path: "/products/management/units",
            headerTitle: "Units of  measurement",
          },
          {
            id: 333,
            name: "Variants",
            path: "/products/management/variants",
            headerTitle: "Units of  measurement",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Reports",
    icon: Report,
    path: "/report",
    headerTitle: "Reports",
  },
  {
    id: 5,
    name: "Documents",
    icon: Document,
    path: "/documents",
    headerTitle: "Documents",
    sublist: [
      {
        id: 51,
        name: "group1",
      },
      {
        id: 52,
        name: "group1",
      },
      {
        id: 53,
        name: "group1",
      },
    ],
  },
  {
    id: 6,
    name: "Printers",
    icon: Printer,
    path: "/printer",
    headerTitle: "Documents",
  },
  {
    id: 7,
    name: "Devices",
    icon: Device,
    path: "/devices",
    headerTitle: "Documents",
  },
  {
    id: 8,
    name: "Promotions",
    icon: Promo,
    path: "/promotions",
    headerTitle: "Documents",
  },
  {
    id: 9,
    name: "Loyalty",
    icon: Loyalty,
    path: "/loyalty",
    headerTitle: "Documents",
  },
  {
    id: 10,
    name: "Payment methods",
    icon: Payment,
    path: "/payment",
    headerTitle: "Documents",
  },
  {
    id: 11,
    name: "Users",
    icon: Users,
    path: "/users",
    headerTitle: "Documents",
  },
  {
    id: 12,
    name: "Customers",
    icon: Customer,
    path: "/customers",
    headerTitle: "Documents",
  },
  {
    id: 13,
    name: "Suppliers",
    icon: Suppliers,
    path: "/suppliers",
    headerTitle: "Documents",
  },
  {
    id: 14,
    name: "Roles",
    icon: Roles,
    path: "/roles",
    headerTitle: "Documents",
  },
  {
    id: 15,
    name: "Branches",
    icon: Branch,
    path: "/branches",
    headerTitle: "Documents",
  },
  {
    id: 16,
    name: "Notifications",
    icon: Notifi,
    path: "/notifications",
    headerTitle: "Documents",
  },
];

export const Tablist2 = [
  { id: 16, name: "Help", icon: Help },
  { id: 16, name: "Settings", icon: Setting },
];
