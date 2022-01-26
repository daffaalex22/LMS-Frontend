import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Grid, Link } from "@mui/material";
import { useLocation } from "react-router";
import { useGetUserData } from "./getDataUser";
import { GeneralContext } from "../../contexts/GeneralContext";

const drawerWidth = 240;

function NavSidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { refresh } = React.useContext(GeneralContext);
  const { userData, errorResponse } = useGetUserData(refresh);
  const role = localStorage.getItem("user");
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Box m="5px">
        <img src="/assets/images/logoInEdu.svg" alt="logo LMS" width="50%" />
      </Box>
      <Box m="40px">
        <Typography variant="h5" component="h2" textAlign="center">
          {role}
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Avatar
          alt="avatar"
          src={userData?.avatar}
          sx={{ width: "150px", height: "150px", margin: "0" }}
        />
        {/* <img src="/assets/images/blankProfile.png" alt="logo LMS" width="70%" /> */}
      </Box>
      <Box m="10px">
        <Typography variant="h5" component="h2" textAlign="center">
          {userData?.name}
        </Typography>
      </Box>
      <Divider />
      <List>
        <Box
          sx={{
            bgcolor:
              location.pathname === "/teacher/profile" ||
                location.pathname === "/student/profile"
                ? "primary.main"
                : "",
          }}
        >
          <Link
            href={role === "Teacher" ? "/teacher/profile" : "/student/profile"}
            underline="none"
            color={
              location.pathname === "/teacher/profile" ||
                location.pathname === "/student/profile"
                ? "white"
                : "black"
            }
          >
            <ListItem button>
              <ListItemIcon>
                <InsertEmoticonIcon
                  sx={{
                    color:
                      location.pathname === "/teacher/profile" ||
                        location.pathname === "/student/profile"
                        ? "white"
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </Link>
        </Box>
      </List>
      <Divider />
      <List>
        <Box
          sx={{
            bgcolor:
              location.pathname === "/teacher/courses" ||
                location.pathname === "/student/courses"
                ? "primary.main"
                : "",
          }}
        >
          <Link
            href={role === "Teacher" ? "/teacher/courses" : "/student/courses"}
            underline="none"
            color={
              location.pathname === "/teacher/courses" ||
                location.pathname === "/student/courses"
                ? "white"
                : "black"
            }
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleOutlineIcon
                  sx={{
                    color:
                      location.pathname === "/teacher/courses" ||
                        location.pathname === "/student/courses"
                        ? "white"
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="MyCourse" color="" />
              {/* isi number of total course */}
            </ListItem>
          </Link>
        </Box>
      </List>
      <Divider />
      <List>
        <Box
          sx={{
            bgcolor:
              location.pathname === "/teacher/request" ||
                location.pathname === "/student/request"
                ? "primary.main"
                : "",
          }}
        >
          <Link
            href={role === "Teacher" ? "/teacher/request" : "/student/request"}
            underline="none"
            color={
              location.pathname === "/teacher/request" ||
                location.pathname === "/student/request"
                ? "white"
                : "black"
            }
          >
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon
                  sx={{
                    color:
                      location.pathname === "/teacher/request" ||
                        location.pathname === "/student/request"
                        ? "white"
                        : "",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Requests" />
              {/* isi number of total course */}
            </ListItem>
          </Link>
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="flex-end">
            <Box sx={{ justifyContent: "flex-end" }}>
              <a href="/home">
                <Box color="white">
                  <ArrowBackIcon />
                </Box>
              </a>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "secondary.main",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "secondary.600",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: mobileOpen ? 3 : 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

NavSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavSidebar;
