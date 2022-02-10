import FilterFields from "../components/FilterFields";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CourseCardList from "../components/listCard/CourseCardList";
import { useNavigate } from "react-router";
import { GeneralContext } from "../contexts/GeneralContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import useAxios from 'axios-hooks'
import { createSearchParams, useSearchParams, useLocation } from "react-router-dom";

const CourseSearch = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState([]);

  const {
    searchQuery,
    difficultyQuery,
    categoryQuery,
    queryString,
    setQueryString
  } = useContext(GeneralContext)

  const [{
    data: coursesData,
    loading: coursesLoading,
    error: coursesError },
    refetch] = useAxios("http://52.14.19.229:8080/api/v1/courses/search" + queryString)

  console.log("coursesData", coursesData)

  useEffect(() => {
    navigate({
      search: `?${createSearchParams({
        category: categoryQuery,
        title: searchQuery,
        difficulty: difficultyQuery,
      })}`
    })
  }, [searchQuery, difficultyQuery, categoryQuery])

  useEffect(() => {
    setQueryString(location.search)
  }, [searchParams])

  useEffect(async () => {
    try {
      await refetch()
      setCourses(coursesData?.data)
    } catch (e) {
      console.log('Error Refetch')
      console.log(courses)
      setCourses([])
    }
  }, [queryString])

  useEffect(() => {
    setCourses(coursesData?.data)
  }, [coursesData]);




  return (
    <Box sx={{ padding: "70px 0" }}>
      <FilterFields />
      <CourseCardList
        loading={coursesLoading}
        courses={courses}
      />
    </Box>
  );
};

export default CourseSearch;
