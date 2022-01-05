import React, { useEffect, useState } from "react";
import {
  Box,
  Fab,
  Typography,
  Breadcrumbs,
  Link,
  Grid,
  useMediaQuery,
  Alert,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import NavSidebar from "../../components/NavSide";
import CourseCard from "../../components/CourseCard";
import { useTeacherCourseData } from "./Course.hook";
import AddEditCard from "./AddEditCard";

export default function TeacherCourse() {
  document.title = "Teacher - Courses";

  const mobileVersion = useMediaQuery("(min-width:600px)");

  const [refresh, setRefresh] = useState(1);
  const [errorAlert, setErrorAlert] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const { courseData: data, errorResponse } = useTeacherCourseData(refresh);

  const closeAlert = () => {
    setErrorAlert(false);
  };

  useEffect(() => {
    setErrorAlert(true);
  }, [errorResponse]);
  return (
    <Box
      sx={{
        bgcolor: "secondary.200",
      }}
    >
      <Box>
        <NavSidebar>
          <Box
            sx={{
              margin: "30px",
              minHeight: "100vh",
            }}
          >
            <Typography variant="h3" component="h2" ml={2}>
              MyCourse
              <Fab
                variant="extended"
                onClick={() => setCreateOpen(true)}
                sx={{
                  ml: "15px",
                  mb: "10px",
                  bgcolor: "primary.main",
                  color: "white",
                }}
              >
                <AddIcon sx={{ mr: 1 }} />
                {mobileVersion && "CREATE"}
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
              <Typography color="text.primary">MyCourse</Typography>
            </Breadcrumbs>
            <br />
            <Grid container spacing={2}>
              {data?.map((course, key) => (
                <Grid item>
                  <CourseCard role="teacher" course={course} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </NavSidebar>
        <Snackbar
          open={errorAlert}
          autoHideDuration={6000}
          onClose={closeAlert}
        >
          <Alert onClose={closeAlert} severity="error" sx={{ width: "100%" }}>
            {errorResponse}
          </Alert>
        </Snackbar>
        <AddEditCard
          setCreateOpen={setCreateOpen}
          createOpen={createOpen}
          title="Create"
        />
      </Box>
    </Box>
  );
}
