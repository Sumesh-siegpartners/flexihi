import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Tablist, Tablist2 } from "./Tablist";
import { MdMenuOpen } from "react-icons/md";
import Logo from "../assets/logo.svg";
import { MenuItem, Select } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Index() {
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [headerTitle, setheaderTitle] = React.useState<string>(`OverView`);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [listId, setListId] = React.useState<number | null>(null);
  const [subListIds, setSubListIds] = React.useState<{
    [key: string]: number | null;
  }>({});

  // Handler for expanding main items
  const handleToggle = (id: number) => {
    setListId((prevId) => (prevId === id ? null : id));
  };

  // Handler for expanding subitems
  const handleToggleSub = (parentId: number, subIndex: number) => {
    setSubListIds((prevState) => ({
      ...prevState,
      [parentId]: prevState[parentId] === subIndex ? null : subIndex,
    }));
  };

  const renderSublist = (subItems: any[], parentId: number, level = 1) => (
    <List sx={{ paddingLeft: level * 2, paddingY: 0 }}>
      {subItems.map((subItem, subIndex) => (
        <React.Fragment key={`${parentId}-${subIndex}`}>
          <ListItemButton
            onClick={() => {
              {handleToggleSub(parentId, subIndex), navigate(subItem?.path), setheaderTitle(subItem.headerTitle)}
            }}
            sx={{
              margin: 0.5,
              borderRadius: 10,
              backgroundColor:
                subListIds[parentId] === subIndex ? "#3375A914" : "transparent",
            }}
          >
            <div className="flex justify-between w-full">
              <Typography
                color={
                  subListIds[parentId] === subIndex ? "#005394" : "#6C737F"
                }
                sx={{
                  fontSize: "11px",
                  textAlign: "center",
                  marginTop: 0.5,
                  marginLeft: 3,
                }}
              >
                {subItem.name}
              </Typography>
              {subItem.sublist &&
                (subListIds[parentId] === subIndex ? (
                  <ExpandLess sx={{ color: "#005394" }} />
                ) : (
                  <ExpandMore sx={{ color: "#6C737F" }} />
                ))}
            </div>
          </ListItemButton>

          {/* Recursive call to render next-level sublist if expanded */}
          {subItem.sublist &&
            subListIds[parentId] === subIndex &&
            renderSublist(
              subItem.sublist,
              `${parentId}-${subIndex}`,
              level + 1
            )}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", borderWidth: 0.5 }}
        elevation={0}
        open={open}
      >
        <div className="flex justify-between">
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[{ mr: 2 }, open && { display: "none" }]}
            >
              <MenuIcon sx={{ color: "#005394" }} />
            </IconButton>
            <Typography
              fontWeight={700}
              noWrap
              component="div"
              color="black"
              marginTop={1}
            >
              {headerTitle}
            </Typography>
          </Toolbar>

          <div className="flex items-center space-x-2 mr-4">
            <Select
              value="branch"
              className="text-sm text-gray-700"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "14px", // Rounded corners
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3375A980", // Blue border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3375A980", // Blue border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3375A980", // Blue border when focused
                },
                color: "#005394",
                fontSize: "14px",
              }}
            >
              <MenuItem value="branch">Branch name</MenuItem>
              <MenuItem value="main">main</MenuItem>
              <MenuItem value="develop">develop</MenuItem>
            </Select>
            <Select
              value="en"
              className="text-sm text-gray-700 min-w-[70px]"
              size="small"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Blue border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Blue border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white", // Blue border when focused
                },
                color: "#005394",
                fontSize: "14px",
              }}
            >
              <MenuItem value="en">En</MenuItem>
              <MenuItem value="es">Ar</MenuItem>
            </Select>
            <IconButton size="small" className="text-gray-700">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton size="small" className="text-gray-700">
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </AppBar>

      {/* side drawer  */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "#F8F9FA" }}>
          <img src={Logo} alt="FlexiHi Logo" className="w-36 mr-6 h-10" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <MdMenuOpen size={24} color="#005394" />
            ) : (
              <MdMenuOpen size={24} color="#005394" />
            )}
          </IconButton>
        </DrawerHeader>

        <div className="overflow-y-auto custom-scrollbar">
          <List sx={{ backgroundColor: "#F8F9FA" }}>
            {Tablist.map((item, _index) => (
              <React.Fragment key={item.id}>
                <ListItemButton
                  onClick={() => {
                    handleToggle(item.id);
                     setheaderTitle(item.headerTitle)
                    navigate(item?.path);
                  }}
                  sx={{
                    margin: 0.5,
                    borderRadius: 10,
                    backgroundColor:
                      listId === item.id ? "#3375A914" : "transparent",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 2, marginRight: 2 }}>
                    <ReactSVG
                      src={item.icon}
                      beforeInjection={(svg) => {
                        svg.setAttribute("width", "18px");
                        svg.setAttribute("height", "18px");
                      }}
                    />
                  </ListItemIcon>
                  <div className="flex justify-between w-full">
                    <Typography
                      color={listId === item.id ? "#005394" : "#6C737F"}
                      sx={{
                        fontSize: "12px",
                        textAlign: "center",
                        marginTop: 0.5,
                        fontWeight: 500,
                      }}
                    >
                      {item.name}
                    </Typography>
                    {item.sublist &&
                      (listId === item.id ? (
                        <ExpandLess sx={{ color: "#005394" }} />
                      ) : (
                        <ExpandMore sx={{ color: "#6C737F" }} />
                      ))}
                  </div>
                </ListItemButton>

                {/* Initial render of first-level sublist */}
                {item.sublist &&
                  listId === item.id &&
                  renderSublist(item.sublist, item.id)}
              </React.Fragment>
            ))}
          </List>

          <Divider />

          <List sx={{ backgroundColor: "#F8F9FA" }}>
            {Tablist2.map((item, index) => (
              <ListItemButton key={index} sx={{ margin: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 2, marginRight: 2 }}>
                  <img src={item.icon} width={18} height={20} />
                </ListItemIcon>
                <Typography
                  color="#6C737F"
                  sx={{ fontSize: "12px", textAlign: "center", marginTop: 0.5 }}
                >
                  {item.name}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
      <Main style={{ padding: 10 }} open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
