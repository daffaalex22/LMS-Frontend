import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logoInEdu from "../../assets/images/logoInEdu.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { yellow, indigo } from "@mui/material/colors";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

const classes = {
  menuPaper: {
    mt: "45px",
    "&.MuiMenu-paper": {
      backgroundColor: indigo[300],
    },
    "&.MuiMenu-list": {
      backgroundColor: indigo[300],
    },
  },
};

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [jwtDecode, setJwtDecode] = React.useState(null);
  const [user, setUser] = React.useState("");
  const [refresh, setRefresh] = React.useState(1);

  useEffect(() => {
    //asking if using params for frontend route profile and myCourses
    if (localStorage.getItem("token") && jwtDecode === null) {
      let decode = jwt_decode(localStorage.getItem("token"));
      let user = localStorage.getItem("user");
      setJwtDecode(decode);
      setUser(user);
    } else {
      setJwtDecode(null);
      setUser("");
    }
  }, [refresh]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAnchorElNav(null);
    setRefresh(refresh + 1);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ padding: "20px", backgroundColor: yellow[500] }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={logoInEdu}
              style={{ maxWidth: "20vw" }}
              alt="logo InEdu"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img
              src={logoInEdu}
              style={{ maxWidth: "35vw" }}
              alt="logo InEdu"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleIcon
                  sx={{ width: "50px", height: "auto", color: indigo[500] }}
                />
              </IconButton>
            </Tooltip>

            {jwtDecode !== null ? (
              <Menu
                sx={classes.menuPaper}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: indigo[500],
                    color: "white",
                    "&:hover": {
                      backgroundColor: yellow[500],
                      color: "primary.main",
                    },
                  }}
                >
                  <Link
                    to={"/teacher/profile"}
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: indigo[500],
                    color: "white",
                    "&:hover": {
                      backgroundColor: yellow[500],
                      color: "primary.main",
                    },
                  }}
                >
                  <Link
                    to={"/teacher/courses"}
                    style={{
                      color: "primary.main",
                      textDecoration: "none",
                    }}
                  >
                    <Typography textAlign="center">MyCourse</Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: indigo[500],
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                sx={classes.menuPaper}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link href="/student/login" underline="none">
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{
                      backgroundColor: indigo[500],
                      color: "white",
                      "&:hover": {
                        backgroundColor: yellow[500],
                        color: "primary.main",
                      },
                    }}
                  >
                    <Typography textAlign="center" sx={{ color: "white" }}>
                      Login Student
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: indigo[500],
                    color: "white",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  <Link
                    to="/teacher/login"
                    style={{
                      color: "primary.main",
                      textDecoration: "none",
                    }}
                  >
                    <Typography textAlign="center">Login Teacher</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
