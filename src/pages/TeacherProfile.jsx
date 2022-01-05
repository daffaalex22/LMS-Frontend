import { Box, Fab, Typography, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";

import NavSidebar from "../components/NavSide";
import CourseCard from "../components/CourseCard";

export default function TeacherProfile() {
  document.title = "Teacher - Profile";
  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "secondary.200",
      }}
    >
      <NavSidebar>
        <Box
          sx={{
            margin: "30px",
          }}
        >
          <Typography variant="h3" component="h2" ml={2}>
            Profile
            <Fab
              variant="extended"
              sx={{
                ml: "15px",
                mb: "10px",
                bgcolor: "primary.main",
                color: "white",
              }}
            >
              <AddIcon sx={{ mr: 1 }} />
              CREATE
            </Fab>
          </Typography>
          <hr
            sx={{
              color: "primary.main",
            }}
          />
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              ml: "17px",
            }}
          >
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Profile</Typography>
          </Breadcrumbs>
        </Box>
      </NavSidebar>
    </Box>
  );
}
