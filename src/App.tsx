import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Index from "./layout/Index";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Products from "./pages/product/Products";
import Documents from "./pages/Documents";
import Printers from "./pages/Printers";
import Devices from "./pages/Devices";
import Promotions from "./pages/Promotions";
import Loyalty from "./pages/Loyalty";
import PaymentMethod from "./pages/PaymentMethod";
import Users from "./pages/Users";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Reports from "./pages/Reports";
import Roles from "./pages/Roles";
import Branches from "./pages/Branches";
import Notifications from "./pages/Notifications";
import Items from "./pages/product/Items";
import Groups from "./pages/product/Groups";
import Management from "./pages/product/management/Management";
import Taxes from "./pages/product/management/Taxes";
import Units from "./pages/product/management/Units";
import Varients from "./pages/product/management/Varients";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/stock",
          element: <Stock />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        { path: "/products/items", element: <Items /> },
        { path: "/products/groups", element: <Groups /> },
        { path: "/products/management", element: <Management /> },
        { path: "/products/management/taxes", element: <Taxes /> },
        { path: "/products/management/units", element: <Units /> },
        { path: "/products/management/varients", element: <Varients /> },
        {
          path: "/report",
          element: <Reports />,
        },
        {
          path: "/documents",
          element: <Documents />,
        },
        {
          path: "/printer",
          element: <Printers />,
        },
        {
          path: "/devices",
          element: <Devices />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/loyalty",
          element: <Loyalty />,
        },
        {
          path: "/payment",
          element: <PaymentMethod />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/suppliers",
          element: <Suppliers />,
        },
        {
          path: "/roles",
          element: <Roles />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
