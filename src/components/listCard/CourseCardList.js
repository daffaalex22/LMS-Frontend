import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CourseCard from "../CourseCard";
import "./CourseCardList.css";
import { useGetCourseData } from "./CourseHook";
import { GeneralContext } from "../../contexts/GeneralContext";
import { useContext } from "react";

const CourseCardList = ({ courses }) => {
  const [refresh, setRefresh] = useState(1);
  const {
    queryString,
    setQueryString
  } = useContext(GeneralContext)

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
