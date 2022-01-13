import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CourseCard from "../CourseCard";
import Masonry from "react-masonry-css";
import "./CourseCardList.css";
import useFetch from "../../customHooks/useFetch";
import React from "react";

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

// const array = [0, 1, 2, 3, 4]

const CourseCardList = () => {
  const {
    data: courses,
    isPending: coursesPending,
    error: coursesError,
  } = useFetch("/courses");

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Grid
        container
        spacing={3}
        justifyContent="flex-start"
        alignItems="center"
      >
        {courses?.map((course) => (
          <Grid item xs={12} sm={6} lg={4}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseCardList;
