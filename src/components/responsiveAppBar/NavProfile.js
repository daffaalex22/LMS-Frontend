import React from "react";

export default function NavProfile({ jwtDecode }) {
  return (
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
            backgroundColor: "secondary.main",
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
          "&:hover": {
            backgroundColor: "secondary.main",
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
        sx={{ backgroundColor: indigo[500], color: "white" }}
      >
        <Typography textAlign="center">Logout</Typography>
      </MenuItem>
    </Menu>
  );
}
