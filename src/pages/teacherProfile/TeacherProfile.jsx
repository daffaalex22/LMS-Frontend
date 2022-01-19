import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import React, { useState } from "react";
import NavSidebar from "../../components/navSideBar/NavSide";
import FormEdit from "./FormEdit";
import { useGetTeacherData } from "./TeacherHook";

export default function TeacherProfile() {
  document.title = "Teacher - Profile";

  const [refresh, setRefresh] = useState(1);

  const { teacherData, errorResponse } = useGetTeacherData(refresh);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "secondary.200" }}>
      <NavSidebar>
        <Box
          sx={{
            margin: "30px",
          }}
        >
          <Typography variant="h3" component="h2" ml={2}>
            Profile
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
          <Box sx={{ marginLeft: "17px", marginTop: "30px" }}>
            <FormEdit teacher={teacherData} />
          </Box>
        </Box>
      </NavSidebar>
    </Box>
  );
}
